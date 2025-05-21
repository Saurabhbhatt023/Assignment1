import Image from 'next/image';
import { profileData } from '@/lib/data';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ProfileSection() {
  const { name, title, bio, avatar, contact } = profileData;

  return (
    <section id="profile" className="py-16">
      <div className="container mx-auto">
        <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative h-[300px] md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={avatar}
                    alt={name}
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-2">{name}</h1>
                  <h2 className="text-xl text-muted-foreground mb-4">{title}</h2>
                  <p className="text-card-foreground">{bio}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ContactItem icon={<Mail size={18} />} text={contact.email} />
                  <ContactItem icon={<Phone size={18} />} text={contact.phone} />
                  <ContactItem icon={<MapPin size={18} />} text={contact.location} />
                  <ContactItem icon={<Github size={18} />} text={contact.github} link={`https://${contact.github}`} />
                  <ContactItem icon={<Linkedin size={18} />} text={contact.linkedin} link={`https://${contact.linkedin}`} />
                  <ContactItem icon={<Twitter size={18} />} text={contact.twitter} link={`https://${contact.twitter}`} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactItem({ icon, text, link }) {
  const content = (
    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-card-foreground transition-colors">
      <div className="text-primary">{icon}</div>
      <span>{text}</span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
        {content}
      </a>
    );
  }

  return content;
}