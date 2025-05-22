
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Driven Medical Dashboard",
      description:
        "Deployed an AI-driven health dashboard to translate health reports into plain language and simplify complex medical data, improving patient engagement and comprehension by 90%.",
      link: "https://github.com/Mohamed-Afsar/know-my-health",
      date: "Mar 2024",
    },
    {
      title: "Scalable Day Trading Web App",
      description:
        "Engineered a scalable day trading platform using microservices architecture with Node.js, React, and MongoDB, supporting over 1 million concurrent users with RabbitMQ for message brokering.",
      link: "https://github.com/bryceeppler/day-trading",
      date: "Jan 2024",
    },
    {
      title: "Emergency Room Triage Optimization System",
      description:
        "Designed a priority-based system that reduced ER wait times by 30-50% for 1.8M+ BC residents and developed a prototype optimizing patient triage based on severity, medical history, and equity.",
      link: "https://github.com/Priority-Health-Canada/PriorityHealth",
      date: "Mar 2023",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-section h-full flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="badge">{project.date}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button text-sm w-full text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
