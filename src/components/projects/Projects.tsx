"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { projects } from "@/lib/data";
import { useIsDesktop } from "@/components/ui/useIsDesktop";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import ProjectCard from "./ProjectCard";
import ProjectIndex from "./ProjectIndex";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative px-3 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1480px]">
        <header className="mb-14 grid items-end gap-6 px-2 md:mb-24 md:grid-cols-12 md:px-0">
          <h2 className="display text-[clamp(3.2rem,10.5vw,11rem)] md:col-span-9">
            <span className="block"><SplitText text="Selected" /></span>
            <span className="block font-light text-bone/55"><SplitText text="work" delay={0.12} /></span>
          </h2>
          <Reveal className="md:col-span-3 md:pb-4" delay={0.2}>
            <p className="max-w-xs text-mute">
              Six products, from business platforms to editorial experiences. Each one designed, built and shipped end to end.
            </p>
          </Reveal>
        </header>

        <div ref={ref} className="relative">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="mb-6 md:sticky md:mb-[16vh] md:last:mb-0"
              style={desktop ? { top: `calc(9vh + ${i * 16}px)` } : undefined}
            >
              <ProjectCard project={p} index={i} total={projects.length} progress={scrollYProgress} stacked={desktop} />
            </div>
          ))}
        </div>

        <div className="mt-28 px-2 md:mt-44 md:px-0">
          <Reveal>
            <h3 className="mb-8 text-sm text-mute">All projects</h3>
          </Reveal>
          <ProjectIndex />
        </div>
      </div>
    </section>
  );
}
