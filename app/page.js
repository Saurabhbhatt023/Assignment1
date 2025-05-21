import { Navbar } from '@/components/navbar';
import { ProfileSection } from '@/components/profile-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { HobbiesSection } from '@/components/hobbies-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbiesSection />
    </main>
  );
}