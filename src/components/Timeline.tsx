import React from "react";
import { getProjects } from "@/lib/getProjects";

const PX_PER_MONTH = 16;
const START_DATE = "2020-01";
const YEARS = [2020, 2021, 2022, 2023, 2024, 2025];

const monthsBetween = (start: string, end: string) => {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  return (ey - sy) * 12 + (em - sm);
};

export default function Timeline() {
  const items = getProjects().filter((p) => p.started && p.ended);

  return (
    <section id="timeline" className="section-padding bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h2 className="section-title mb-12">Timeline</h2>

        <div className="relative h-[1200px] pl-24">
          {/* Year markers */}
          <div className="absolute left-0 top-0 w-16 text-right text-muted-foreground text-sm leading-none">
            {YEARS.map((year) => (
              <div
                key={year}
                className="flex items-start justify-end"
                style={{ height: `${12 * PX_PER_MONTH}px` }}
              >
                <span className="translate-y-[-8px]">{year}</span>
              </div>
            ))}
          </div>

          {/* Vertical timeline line */}
          <div className="absolute left-20 top-0 w-px h-full bg-muted" />

          {/* Cards */}
          {items.map((item, index) => {
            const top = monthsBetween(START_DATE, item.started!);
            const height = monthsBetween(item.started!, item.ended!);

            return (
              <div
                key={item.slug || index}
                className="absolute bg-card rounded-xl shadow-lg border border-border p-4 text-sm opacity-50 hover:opacity-100 hover:z-50 transition-all w-[300px]"
                style={{
                  top: `${top * PX_PER_MONTH}px`,
                  left: `6.5rem`, // right of the timeline rail
                  height: `${height * PX_PER_MONTH}px`,
                }}
              >
                <h3 className="font-semibold text-base">{item.title}</h3>
                {item.company && (
                  <p className="text-sm text-primary">{item.company}</p>
                )}
                <p className="text-xs text-muted-foreground mb-2">
                  {item.started} → {item.ended}
                </p>
                <p className="text-muted-foreground text-sm">{item.excerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
