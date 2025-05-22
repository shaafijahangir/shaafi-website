
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "JavaScript (Node.js, React)", "HTML/CSS", "SQL", "Bash", "PowerShell", "C", "C#", "C++"],
    },
    {
      title: "Tools & Platforms",
      skills: ["AWS", "Microsoft Azure & Office 365", "Google Workspace & Google Cloud Platform", "GitHub"],
    },
    {
      title: "Systems",
      skills: ["Windows", "MacOS", "Linux", "Apache Guacamole", "OKTA", "Cisco Meraki", "Trello", "Slack", "Jira", "Confluence"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solver", "Attention to detail & quality", "Cross-functional collaboration", "Effective communicator"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card fade-in-section h-full">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
