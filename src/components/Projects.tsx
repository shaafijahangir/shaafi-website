import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "@/lib/getProjects";

/* ───────────────────────────────────────────── */
const FILTERS       = ["Featured", "Personal", "Work"] as const;  // ← no “All”
const CARD_WIDTH    = 320;
const CARD_GAP      = 24;
const CARDS_VISIBLE = 3;
const SLIDE_MS      = 350;
/* ───────────────────────────────────────────── */

function Projects() {
  const projects = getProjects();

  /* state */
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Featured"); // ← start at Featured
  const [idx,    setIdx]    = useState(0);
  const [lock,   setLock]   = useState(false);

  /* filtered list – just tag-match now */
  const list = useMemo(
    () => projects.filter((p) => p.tags?.includes(filter.toLowerCase())),
    [projects, filter]
  );

  const max  = Math.max(0, list.length - CARDS_VISIBLE);
  const clampedIdx = Math.min(idx, max);

  /* reset scroll on filter change */
  useEffect(() => setIdx(0), [filter]);

  /* unlock arrows */
  useEffect(() => {
    if (!lock) return;
    const t = setTimeout(() => setLock(false), SLIDE_MS);
    return () => clearTimeout(t);
  }, [lock]);

  const slide = (dir: "left" | "right") => {
    if (lock) return;
    if (dir === "left"  && idx > 0)   { setLock(true); setIdx(i => i - 1); }
    if (dir === "right" && idx < max) { setLock(true); setIdx(i => i + 1); }
  };

  /* ───────────────────────────────────────── */
  return (
    <section id="projects" className="py-16 bg-[#f7f8fa]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        {/* filters */}
        <div className="flex gap-3 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-1 rounded-full text-sm font-medium transition
                ${
                  filter === f
                    ? "bg-gray-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* carousel */}
        <div className="relative flex items-center pb-10 select-none">
          {/* ← */}
          <button
            onClick={() => slide("left")}
            disabled={idx === 0}
            aria-label="Previous"
            className={`arrow-btn left-0 ${idx === 0 ? "arrow-disabled" : ""}`}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* track */}
          <div className="flex-1 overflow-visible">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(-${clampedIdx * (CARD_WIDTH + CARD_GAP)}px)`,
                transition: `transform ${SLIDE_MS}ms cubic-bezier(.4,0,.2,1)`
              }}
            >
              {list.map((p, i) => {
                const hidden = i < clampedIdx || i > clampedIdx + CARDS_VISIBLE - 1;
                return (
                  <div
                    key={p.slug}
                    className="flex-none w-80 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col
                               transition-opacity duration-300"
                    style={{
                      opacity: hidden ? 0 : 1,
                      transform: hidden
                        ? i < clampedIdx ? "translateX(-20px)" : "translateX(20px)"
                        : "translateX(0)"
                    }}
                  >
                    {p.pic1 && (
                      <img
                        src={p.pic1}
                        alt={p.title}
                        className="w-full h-40 object-cover bg-gray-100"
                      />
                    )}
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                          {new Date(p.date).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric"
                          }).toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4 flex-grow">{p.excerpt}</p>

                      <Link to={`/project/${p.slug}`} className="button text-sm w-full text-center">
                        View Project
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* → */}
          <button
            onClick={() => slide("right")}
            disabled={idx === max}
            aria-label="Next"
            className={`arrow-btn right-0 ${idx === max ? "arrow-disabled" : ""}`}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* minimal pagination strip (unchanged) */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <span
            className={`w-3 h-3 rounded-full bg-gray-300 transition-opacity duration-300
                        ${idx > 0 ? "opacity-50" : "opacity-0"}`}
          />
          <span
            className="w-3 h-3 rounded-full bg-gray-900 transition-transform duration-300
                       opacity-100 scale-125"
          />
          <span
            className={`w-3 h-3 rounded-full bg-gray-300 transition-opacity duration-300
                        ${idx < max ? "opacity-50" : "opacity-0"}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
