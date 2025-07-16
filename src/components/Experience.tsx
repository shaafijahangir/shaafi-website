
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Systems Analyst",
      company: "Brentwood College School",
      location: "Mill Bay, Canada",
      period: "May 2024 – Dec 2024",
      description:
        "Managed systems to maintain school duties and implemented solutions to optimize and improve efficiency.",
      achievements: [
        "Developed expertise in **30+ systems** and resolved **400+ technical tickets**/requests independently.",
        "Wrote **Python/PowerShell scripts** to automate tasks with **100% accuracy**, improving efficiency.",
        "Built an **in-house AI chatbot infrastructure** to resolve 80% of queries, **reducing response time by 95%.**",
        "**Independently managed IT infrastructure** for **6 days**, aiding staff and student with technical issues."
      ],
      technologies:
        "Microsoft 365, Google Workspace, Azure AD, IIS Manager, Cisco Meraki, OKTA, SOPHOS",
    },
    {
      title: "Technical Systems Analyst",
      company: "University of Victoria",
      location: "Victoria, Canada",
      period: "Jan 2023 – Apr 2023",
      description:
        "Developed tools for Engineering and Computer Science faculty to streamline campus data workflows.",
      achievements: [
        "Developed a dynamic **CRUD tool** to automate **10,000+ record entries** with **100% data accuracy**.",
        "Implemented a **multi-tier logging and permissions system**, boosting **debugging efficiency by 100%**.",
        "Automated **project draft tracking**, improving draft management and **reducing manual effort by 80%.**",
      ],
      technologies:
        "HTML, JavaScript, PHP, Tailwind CSS, BootStrap 5, SQL, Git",
    },
    {
      title: "Full-Stack Developer",
      company: "Butter",
      location: "Victoria, Canada",
      period: "Aug 2020 – Jan 2021",
      description:
        "Designed and developed the butter app for a refund management system in restaurants.",
      achievements: [
        "Built UI using **Svelte, TypeScript, and JavaScript**, enhancing user engagement and app performance.",
        "Integrated **Firebase** for backend storage and **testing real-time data sync** and user authentication.",
        "Applied **Google Vision AI API** to process barcodes on food products, aiding data analysis in the backend.",
      ],
      technologies:
        "Svelte, TypeScript, JavaScript, Tailwind CSS, Firebase, Google Vision AI",
    },
    {
      title: "IT Consultant",
      company: "Rising Sun Trading Ltd.",
      location: "Bangkok, Thailand",
      period: "Jan 2020 – Apr 2021",
      description:
        "Building an online presence with a company website, AI-driven lead generation, and marketing campaigns.",
      achievements: [
        "Launched **Rising Sun website**, streamlining customer access to packages and **enabling service bookings**.",
        "Built an **automated system** to send customers a **customized itinierary in seconds** based on some info.",
        "Generated ads using **Sora AI** and ran **Meta ads** to generate over **3,000+ clicks** and +132 follows.",
      ],
      technologies:
        "TypeScript, Vercel, SupaBase, GitHub, Lovable, Bolt, Excel, Adobe Photoshop, Canva",
    },
  ];

  const formatDescription = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold">$1</span>');
  };

  return (
    <section id="experience" className="section-padding dark:bg-custom-dark bg-custom-light">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card fade-in-section">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-lg text-primary">{experience.company} — {experience.location}</p>
                </div>
                <span className="text-muted-foreground text-sm mt-1 md:mt-0 md:text-right">
                  {experience.period}
                </span>
              </div>
              
              <p className="mb-3 text-muted-foreground">{experience.description}</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-3">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} 
                    dangerouslySetInnerHTML={{ 
                      __html: formatDescription(achievement) 
                    }} 
                  />
                ))}
              </ul>
              
              <div className="flex flex-wrap mt-4">
                {experience.technologies.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
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

export default Experience;
