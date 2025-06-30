// src/lib/getProjects.ts
// Tiny helper: read every MDX file in /content/projects and return its front-matter.

interface Links { [key: string]: string }

export interface ProjectMeta {
  title: string
  slug: string
  date: string
  category: string[]
  status: string
  stack: string[]
  links: Links
  cover: string
  excerpt: string
}

// Vite grabs the modules at build/run time, eager = synchronous import.
const modules = import.meta.glob('/content/projects/*.mdx', { eager: true }) as
  Record<string, { frontmatter: ProjectMeta }>

export function getProjects(): ProjectMeta[] {
  return Object.values(modules)
    .map((m) => m.frontmatter)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)) // newest first
}
