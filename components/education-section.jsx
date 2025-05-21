import Image from 'next/image';
import { educationData } from '@/lib/data';
import { CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function EducationSection() {
  return (
    <section id="education" className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {educationData.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ education }) {
  const { institution, degree, date, description, logo } = education;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-6 flex justify-center items-center bg-card">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-background">
              <Image
                src={logo}
                alt={institution}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>
          <div className="p-6 md:w-3/4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-semibold">{institution}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays size={14} className="mr-1" />
                <span>{date}</span>
              </div>
            </div>
            <h4 className="text-lg text-primary mb-2">{degree}</h4>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}