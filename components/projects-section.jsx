import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, description, technologies, image, link } = project;

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-all">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105 duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label={`View ${title} project`}
          >
            <ExternalLink size={16} />
          </a>
        </div>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}