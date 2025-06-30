// src/pages/ProjectPage.tsx
import { Link, useParams, Navigate } from "react-router-dom";
import { ProjectMeta } from "@/lib/getProjects";
import { useMemo, ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { marked } from "marked";
import { motion } from "framer-motion";

/* grab *all* MDX modules once */
const modules = import.meta.glob("/content/projects/*.mdx", { eager: true }) as
  Record<
    string,
    {
      frontmatter: ProjectMeta & {
        problem?: string;
        solution?: string;
        gallery?: string[];
      };
      default: any;
    }
  >;

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(
    () => Object.values(modules).find((m) => m.frontmatter.slug === slug),
    [slug]
  );
  if (!project) return <Navigate to="/" replace />;

  const { frontmatter, default: MdxBody } = project;

  /* every inline <img> becomes click-to-zoom */
  const mdxComponents = {
    img: (props: any) => (
      <PhotoView src={props.src}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...props} className="cursor-zoom-in rounded-lg" />
      </PhotoView>
    ),
  };

  return (
    <article className="content-wide pb-24">
      {/* ---------- 2-column grid ---------- */}
      <div className="project-grid">
        {/* LEFT column */}
        <div>
          {/* hero */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {frontmatter.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {frontmatter.excerpt}
            </p>
          </header>

          {/* Problem / Solution */}
          {frontmatter.problem && (
            <Callout title="The Problem" color="gold">
              <MarkdownBlock markdown={frontmatter.problem} />
              {frontmatter.pic1 && (
                <motion.img
                  src={frontmatter.pic1}
                  alt={frontmatter.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="surface-card w-full mt-10"
                />
              )}
            </Callout>
          )}
          {frontmatter.solution && (
            <Callout title="Our Solution" color="teal">
              <MarkdownBlock markdown={frontmatter.solution} />
              {frontmatter.pic1 && (
                <motion.img
                  src={frontmatter.pic1}
                  alt={frontmatter.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="surface-card w-full mt-10"
                />
              )}
            </Callout>
          )}

          {/* long-form body */}
          <PhotoProvider maskOpacity={0.9}>
            <MDXProvider components={mdxComponents}>
              <MdxBody />
            </MDXProvider>
          </PhotoProvider>
        </div>

        {/* RIGHT column – sticky details */}
        <aside className="sticky-card flex flex-col gap-6">
          <h2 className="text-lg font-semibold">Project Details</h2>
          <Detail
            label="Date"
            value={new Date(frontmatter.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          />
          <Detail label="Status" value={frontmatter.status} />
          <Detail label="Category" value={frontmatter.category.join(", ")} />
          <Detail label="Stack" value={frontmatter.stack.join(" · ")} />
            {frontmatter.repo && (
              <Detail
                label="Repo"
                value={
                  <a
                    href={frontmatter.repo}
                    target="_blank"
                    className="underline hover:text-primary"
                  >
                    GitHub
                  </a>
                }
              />
            )}


          {/* buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {frontmatter.links?.repo && (
              <a href={frontmatter.links.repo} target="_blank" className="button">
                GitHub
              </a>
            )}
            {frontmatter.links?.demo && (
              <a
                href={frontmatter.links.demo}
                target="_blank"
                className="button bg-secondary text-primary"
              >
                Demo
              </a>
            )}
            {frontmatter.links?.doc && (
              <a
                href={frontmatter.links.doc}
                target="_blank"
                className="button bg-secondary text-primary"
              >
                Docs
              </a>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}

/* ---------- helpers ---------- */

function Detail({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="text-sm">
      <p className="opacity-60 mb-1 uppercase tracking-wide">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function Callout({
  title,
  children,
  color,
}: {
  title: string;
  children: React.ReactNode;
  color: "gold" | "teal";
}) {
  const palette =
    color === "teal"
      ? "surface-card border-l-8 border-[#8ECDDD]"
      : "surface-card border-l-8 border-[#FFCC70]";
  return (
    <div className={`p-6 mb-10 ${palette}`}>
      <p className="font-semibold mb-2">{title}</p>
      {children}
    </div>
  );
}

function MarkdownBlock({ markdown }: { markdown: string }) {
  return <div dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} />;
}
