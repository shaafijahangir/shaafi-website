
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding bg-background font-sans">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hello World, I'm</span>
              <span className="font-sans block text-[#004266]">M Shaafi Jahangir</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Computer Science graduate specializing in full-stack development, software automation, and more.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="bg-[hsl(var(--primary))] 
                          text-[hsl(var(--primary-foreground))] 
                          dark:bg-[#004266] 
                          rounded-full py-2 px-5 font-medium 
                          shadow-[6px_6px_20px_rgba(0,0,0,0.25)] 
                          hover:shadow-[8px_8px_24px_rgba(0,0,0,0.3)] 
                          active:translate-y-[1px] 
                          transition-all duration-200 
                          flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>

              <a 
                href="#projects" 
                className="bg-[hsl(var(--alternate))] 
                          text-primary 
                          rounded-full py-2 px-5 font-medium 
                          shadow-[6px_6px_20px_rgba(0,0,0,0.25)] 
                          hover:shadow-[8px_8px_24px_rgba(0,0,0,0.3)] 
                          active:translate-y-[1px] 
                          transition-all duration-200"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                className="bg-[hsl(var(--alternate))] 
                          text-primary 
                          rounded-full py-2 px-5 font-medium 
                          shadow-[6px_6px_20px_rgba(0,0,0,0.25)] 
                          hover:shadow-[8px_8px_24px_rgba(0,0,0,0.3)] 
                          active:translate-y-[1px] 
                          transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <a 
                href="mailto:mshaafijahangir@gmail.com" 
                className="link hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/in/m-shaafi-jahangir" 
                target="_blank"
                rel="noopener noreferrer"
                className="link hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              
              <a 
                href="tel:+12368825428" 
                className="link hover:opacity-80 transition-opacity"
                aria-label="Phone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
              
              <span className="text-muted-foreground">Victoria, Canada</span>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                className="aspect-square rounded-full flex items-center justify-center mx-auto"
                style={{
                  maxWidth: '400px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)', // soft dark shadow
                  border: '2px solid #FFFBEB', // optional beige border
                }}
              >
                <Avatar className="w-80 h-80 rounded-full overflow-hidden">
                  <AvatarImage
                    src="/shaafi-face-pic.jpg"
                    alt="M Shaafi Jahangir"
                    className="w-full h-full object-cover object-center"
                  />
                  <AvatarFallback className="text-6xl font-bold text-primary/10">
                    MSJ
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
