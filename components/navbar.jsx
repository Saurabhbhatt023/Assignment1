"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Profile', href: '#profile' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hobbies', href: '#hobbies' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled past a threshold
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.name.toLowerCase());
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section when clicking nav items
  const scrollToSection = (href, isMobile = false) => {
    const element = document.querySelector(href);
    
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-border" 
        : "bg-transparent border-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">
              Personal<span className="text-primary">Dashboard</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "px-3",
                  activeSection === item.name.toLowerCase() && "text-primary font-medium"
                )}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto py-4 flex flex-col">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "justify-start px-4 py-3 text-lg",
                  activeSection === item.name.toLowerCase() && "text-primary font-medium"
                )}
                onClick={() => scrollToSection(item.href, true)}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}