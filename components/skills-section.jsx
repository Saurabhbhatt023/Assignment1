"use client"

import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        
        <Tabs defaultValue={skillsData[0].category} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {skillsData.map((category) => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillsData.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-0">
              <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function SkillBar({ skill }) {
  const { name, level } = skill;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}