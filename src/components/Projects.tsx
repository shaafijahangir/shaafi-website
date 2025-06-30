import React from "react"
import { getProjects } from "@/lib/getProjects"
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = getProjects()            // ← pulls the MDX data

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="project-card fade-in-section h-full flex flex-col"
            >
              {/* cover image */}
              <img
                src={project.cover}
                alt={project.title}
                className="rounded-md aspect-video object-cover mb-4"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="badge">
                    {new Date(project.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.excerpt}
                </p>

                <Link
                  to={`/project/${project.slug}`}
                  className="button text-sm w-full text-center"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
