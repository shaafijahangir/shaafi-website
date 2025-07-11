
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="card fade-in-section">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-semibold">BSc Computer Science</h3>
              <p className="text-primary">Specialization in Software Systems</p>
              <p className="text-lg">University of Victoria</p>
            </div>
            <span className="text-muted-foreground mt-2 md:mt-0">
              2020
            </span>
          </div>
          
          <div className="mt-4">
            <p className="text-muted-foreground">
              Member of VikeSec and VikeLabs, engaging in weekly Hack-the-Box and TryHackMe challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
