import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "@/lib/getProjects";
import { cn } from "@/lib/utils";

/* ───────────────────────────────────────────── */
const FILTERS = ["All", "Featured", "Personal", "Work"] as const;
const CARD_WIDTH = 320;
const CARD_GAP = 24;

const TAG_STYLES: Record<string, string> = {
  all: "bg-white text-zinc-800 hover:bg-zinc-100 border border-black-300",
  featured: "bg-orange-100 text-orange-800 border border-orange-300",
  personal: "bg-green-100 text-green-800 border border-green-300",
  work: "bg-blue-100 text-blue-800 border border-blue-300",
};
/* ───────────────────────────────────────────── */

export default function Projects() {
  const projects = getProjects().sort(
    (a, b) => new Date(b.started).getTime() - new Date(a.started).getTime()
  );

  const railRef = useRef<HTMLDivElement>(null);

  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Featured");
  const [cardsVisible, setCardsVisible] = useState(3);
  const [scrollIndex, setScrollIndex] = useState(0);

  const list = useMemo(() => {
    const filtered =
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags?.includes(filter.toLowerCase()));
    const unique = Array.from(new Map(filtered.map((p) => [p.slug, p])).values());
    return unique;
  }, [projects, filter]);

  const maxScroll = Math.max(0, Math.ceil(list.length - cardsVisible));

  useEffect(() => {
    const updateVisibleCards = () => {
      const w = window.innerWidth;
      if (w < 640) setCardsVisible(1);
      else if (w < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    setScrollIndex(0);
    if (railRef.current) {
      railRef.current.scrollTo({ left: 0 });
    }
  }, [filter]);

  const scrollBy = (dir: "left" | "right", override = false) => {
    if (!railRef.current) return;
    const amount = CARD_WIDTH + CARD_GAP;

    railRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });

    setScrollIndex((prev) => {
      const max = Math.ceil(list.length - cardsVisible);
      if (dir === "left") return Math.max(prev - 1, 0);
      if (dir === "right") {
        if (prev + 1 > max && override) {
          railRef.current?.scrollTo({ left: 0, behavior: "smooth" });
          return 0;
        }
        return Math.min(prev + 1, max);
      }
      return prev;
    });
  };

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollBy("right", true);
    }, 4000);
    return () => clearInterval(interval);
  }, [list, cardsVisible]);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        {/* filters */}
        <div className="flex gap-3 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-1 rounded-full text-xs font-medium transition cursor-pointer",
                TAG_STYLES[f.toLowerCase()],
                filter === f ? "ring-1 ring-black/10 shadow-sm" : "opacity-80 hover:opacity-100"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* carousel */}
        <div className="relative flex items-center select-none">
          <button
            onClick={() => scrollBy("left")}
            aria-label="Previous"
            className={cn("arrow-btn left-2 sm:left-2 md:left-2 lg:-left-12")}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={railRef}
            className="flex-1 overflow-x-auto hide-scroll scroll-snap-x pb-5 ml-1"
            style={{ overflowY: "visible" }}
          >
            <div className="flex gap-2 min-w-max">
              {list.map((p) => (
                <div key={p.slug} className="pb-4 px-3 sm:px-2">
                  <div
                    className="flex-none w-72 sm:w-80 border border-gray-400 transition hover:border-black rounded-2xl overflow-visible flex flex-col bg-white dark:bg-[#142B42] shadow-[6px_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[8px_10px_25px_rgba(0,0,0,0.3)]"
                  >
                    {p.pic1 && (
                      <>
                        <div className="rounded-t-2xl overflow-hidden">
                          <img
                            src={p.pic1}
                            alt={p.title}
                            className="w-full h-40 object-cover bg-gray-100"
                          />
                        </div>
                        <div className="h-px bg-gray-200 w-full" />
                      </>
                    )}
                    <div className="p-6 flex flex-col h-full min-h-[300px]">
                      <div className="mb-2">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">{p.title}</h3>
                          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                            {new Date(p.started).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric"
                            }).toUpperCase()}
                          </span>
                        </div>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {p.tags?.map((tag) => (
                            <button
                              key={tag}
                              onClick={() =>
                                setFilter(tag.charAt(0).toUpperCase() + tag.slice(1) as typeof FILTERS[number])
                              }
                              className={cn(
                                "px-3 py-1 text-xs font-medium rounded-full transition",
                                TAG_STYLES[tag] || "bg-gray-200 text-gray-800"
                              )}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-500 text-sm mb-3 flex-grow">{p.excerpt}</p>
                      <Link
                        to={`/project/${p.slug}`}
                        className="mt-auto text-sm w-full text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollBy("right")}
            aria-label="Next"
            className="arrow-btn right-2 sm:right-2 md:right-2 lg:-right-12"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* pagination strip */}
        <div className="flex justify-center items-center mt-6 gap-2">
          <span className={`w-3 h-3 rounded-full bg-gray-300 ${scrollIndex > 0 ? "opacity-50" : "opacity-0"}`} />
          <span className="w-3 h-3 rounded-full bg-gray-900 scale-125" />
          <span className={`w-3 h-3 rounded-full bg-gray-300 ${scrollIndex < maxScroll ? "opacity-50" : "opacity-0"}`} />
        </div>
      </div>
    </section>
  );
}
