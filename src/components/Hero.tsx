
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding bg-background">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="block text-primary">M Shaafi Jahangir</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Computer Science graduate and experienced Systems Analyst
              with expertise in building efficient technical solutions and automating workflows.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="button">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
              
              <a 
                href="#experience" 
                className="button bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                View Experience
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
              <div className="aspect-square rounded-full bg-secondary/50 flex items-center justify-center mx-auto" style={{ maxWidth: '400px' }}>
                <div className="text-6xl font-bold text-primary/10">MSJ</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
