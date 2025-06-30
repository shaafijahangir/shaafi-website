// src/lib/getProjects.ts

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
  repo?: string
  problem?: string
  solution?: string
}

/** Full record returned for a single project page */
export interface ProjectData {
  meta: ProjectMeta
  /** compiled MDX component you can render */
  Content: React.ComponentType
}

/* Vite grabs every MDX module at build/run time. */
const modules = import.meta.glob('/content/projects/*.mdx', { eager: true }) as
  Record<string, { frontmatter: ProjectMeta; default: any }>

/** List view: just meta, sorted newest → oldest */
export function getProjects(): ProjectMeta[] {
  return Object.values(modules)
    .map((m) => m.frontmatter)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

/** Detail view: meta + compiled body for one slug */
export function getProjectBySlug(slug: string): ProjectData | undefined {
  const entry = Object.values(modules).find(
    (m) => m.frontmatter.slug === slug,
  )
  if (!entry) return
  return { meta: entry.frontmatter, Content: entry.default }
}
