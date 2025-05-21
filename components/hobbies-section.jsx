"use client"

import { hobbiesData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Mountain, Music, BookOpen } from 'lucide-react';

// Icon mapping
const iconMap = {
  Camera: Camera,
  Mountain: Mountain,
  Music: Music,
  BookOpen: BookOpen
};

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbiesData.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HobbyCard({ hobby }) {
  const { name, description, icon } = hobby;
  const IconComponent = iconMap[icon];

  return (
    <Card className="hover:shadow-md transition-all border-0 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
        </div>
        <h3 className="text-lg font-medium mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}