import Image from 'next/image';
import { experienceData } from '@/lib/data';
import { CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }) {
  const { company, position, date, description, logo } = experience;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-6 flex justify-center items-center bg-card">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-background">
              <Image
                src={logo}
                alt={company}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>
          <div className="p-6 md:w-3/4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold">{company}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays size={14} className="mr-1" />
                <span>{date}</span>
              </div>
            </div>
            <h4 className="text-lg text-primary mb-2">{position}</h4>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}