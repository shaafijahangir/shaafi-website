import React from "react";
import { getProjects } from "@/lib/getProjects";

const PX_PER_MONTH = 20;
const START_DATE = "2020-01";
const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];

const monthsBetween = (start: string, end: string) => {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  return (ey - sy) * 12 + (em - sm);
};

export default function Timeline() {
  const items = getProjects().filter((p) => p.started && p.ended);

  const timelineHeight =
    (Math.max(...items.map((p) => monthsBetween(START_DATE, p.ended!))) + 6) *
    PX_PER_MONTH;

  return (
    <section id="timeline" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title mb-12 text-center">Timeline</h2>

        <div
          className="relative"
          style={{ height: `${timelineHeight}px` }}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-muted" />

          {/* Year markers */}
          {YEARS.map((year) => (
            <div
              key={year}
              className="absolute left-1/2 -translate-x-1/2 w-16 text-center text-muted-foreground text-sm"
              style={{
                top: `${monthsBetween(START_DATE, `${year}-01`) * PX_PER_MONTH}px`,
              }}
            >
              {year}
            </div>
          ))}

          {/* Cards */}
          {items.map((item, index) => {
            const top = monthsBetween(START_DATE, item.started!);
            const height = monthsBetween(item.started!, item.ended!);
            const isProject =
              item.tags?.includes("project") ||
              item.category?.includes("project");

            const sideClass = isProject
              ? "left-[52%] ml-4"
              : "right-[52%] mr-4 text-right";

            return (
              <div
                key={item.slug || index}
                className={`absolute w-[280px] bg-card text-foreground border border-border rounded-xl shadow-md p-4 opacity-50 hover:opacity-100 hover:z-50 transition-all ${sideClass}`}
                style={{
                    top: `${top * PX_PER_MONTH}px`,
                    minHeight: `${height * PX_PER_MONTH}px`,
                }}

              >
                <h3 className="font-semibold text-base">{item.title}</h3>
                {item.company && (
                  <p className="text-sm text-primary">{item.company}</p>
                )}
                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
