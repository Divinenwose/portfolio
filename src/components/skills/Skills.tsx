"use client";

import { skillRows } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

function Row({ row, index }: { row: (typeof skillRows)[number]; index: number }) {
  // short lists are repeated so one half always spans wider than the viewport
  const repeat = Math.ceil(8 / row.items.length);
  const half = Array.from({ length: repeat }).flatMap(() => row.items);

  return (
    <div className="marquee-row group/row relative border-t border-[var(--line)] last:border-b">
      <div className="pointer-events-none absolute left-5 top-4 z-10 text-xs text-mute md:left-10 md:top-6">{row.label}</div>
      <div
        className="overflow-hidden py-9 md:py-14"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
      >
        <div aria-hidden className={`marquee-track ${row.rev ? "rev" : ""}`} style={{ ["--dur" as string]: `${row.dur}s` }}>
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {half.map((t, i) => (
                <span key={`${n}-${i}`} className="flex items-center">
                  <span
                    className={`px-5 text-[clamp(2.4rem,6.4vw,6.5rem)] font-semibold leading-none tracking-[-0.045em] transition-colors duration-300 hover:text-ember md:px-8 ${(i + index) % 2 ? "text-bone/25" : "text-bone"}`}
                  >
                    {t}
                  </span>
                  <span className="h-2 w-2 shrink-0 rotate-45 bg-ember/80" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">{row.label}: {row.items.join(", ")}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto mb-16 max-w-[1480px] px-5 md:mb-24 md:px-10">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <h2 className="display text-[clamp(3rem,8.4vw,8.5rem)] md:col-span-8">
            <span className="block"><SplitText text="The stack" /></span>
            <span className="block font-light text-bone/55"><SplitText text="behind the work" delay={0.12} /></span>
          </h2>
          <Reveal className="md:col-span-4 md:pb-3" delay={0.2}>
            <p className="max-w-sm text-mute">
              Tools chosen for reliability and speed. Hover a row to slow it down and read it.
            </p>
          </Reveal>
        </div>
      </div>
      <div>
        {skillRows.map((r, i) => (
          <Row key={r.label} row={r} index={i} />
        ))}
      </div>
    </section>
  );
}
