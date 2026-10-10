"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/lib/data";
import ScreenshotFrame from "./ScreenshotFrame";

/** Row list. On desktop a live preview follows the pointer. */
export default function ProjectIndex() {
  const [hover, setHover] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 140, damping: 20, mass: 0.5 });

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    x.set(e.clientX + 28);
    y.set(e.clientY - 120);
  };

  return (
    <div onPointerMove={onMove} onPointerLeave={() => setHover(null)} className="relative">
      <ul>
        {projects.map((p, i) => (
          <li key={p.slug} className="border-t border-[var(--line)] last:border-b">
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}
              onFocus={() => setHover(null)}
              className="group flex items-center justify-between gap-6 py-6 transition-all duration-500 ease-[var(--ease-out-expo)] hover:px-4 md:py-8"
            >
              <span className="text-[clamp(1.6rem,4.2vw,3.75rem)] font-medium tracking-[-0.035em] text-bone/55 transition-colors duration-500 group-hover:text-bone">
                {p.name}
              </span>
              <span className="flex items-center gap-6 text-sm text-mute">
                <span className="hidden sm:inline">{p.category}</span>
                <span className="font-mono">{p.year}</span>
                <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 transition-all duration-500 group-hover:rotate-45 group-hover:text-ember" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13L13 3M5 3h8v8" /></svg>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block">
        <motion.div style={{ x: sx, y: sy }}>
          <AnimatePresence mode="wait">
            {hover !== null && (
              <motion.div
                key={hover}
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.18 } }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="w-[340px] overflow-hidden rounded-md border border-[var(--line-strong)] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.95)]"
              >
                <ScreenshotFrame name={projects[hover].name} live={projects[hover].live} image={projects[hover].image} position={projects[hover].imagePosition} sizes="340px" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
