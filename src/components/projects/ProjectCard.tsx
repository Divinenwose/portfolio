"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import type { projects } from "@/lib/data";
import ScreenshotFrame from "./ScreenshotFrame";
import SplitText from "@/components/ui/SplitText";
import Button from "@/components/ui/Button";
import { cn, ease } from "@/lib/utils";

type Project = (typeof projects)[number];

export default function ProjectCard({
  project, index, total, progress, stacked,
}: {
  project: Project; index: number; total: number; progress: MotionValue<number>; stacked: boolean;
}) {
  const flip = index % 2 === 1;
  const vis = useRef<HTMLAnchorElement>(null);

  // stack depth: earlier cards recede as later ones cover them
  const scale = useTransform(progress, [index / total, 1], [1, stacked ? 1 - (total - index) * 0.022 : 1]);
  const shade = useTransform(progress, [index / total, Math.min(1, (index + 1) / total)], [0, stacked ? 0.55 : 0]);

  // visual tilt + cursor-follow light
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotY = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 120, damping: 20 });
  const rotX = useSpring(useTransform(my, [0, 1], [3, -3]), { stiffness: 120, damping: 20 });
  const lx = useTransform(mx, (v) => `${v * 100}%`);
  const ly = useTransform(my, (v) => `${v * 100}%`);
  const light = useMotionTemplate`radial-gradient(420px circle at ${lx} ${ly}, rgba(255,81,0,0.20), transparent 60%)`;

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !vis.current) return;
    const r = vis.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.article
      style={{ scale, transformOrigin: "50% 0%" }}
      aria-labelledby={`p-${project.slug}`}
      className="relative overflow-hidden rounded-md border border-[var(--line-strong)] bg-ink-2 p-3 shadow-[0_-30px_80px_-30px_rgba(0,0,0,0.9)] md:p-5"
    >
      <div className="grid items-stretch gap-6 md:grid-cols-12 md:gap-10">
        {/* visual */}
        <a
          ref={vis}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live project`}
          data-cursor="view"
          data-cursor-label="VIEW"
          onPointerMove={onMove}
          onPointerLeave={reset}
          className={cn("group relative block overflow-hidden rounded-sm [perspective:1200px] md:col-span-7", flip && "md:order-2")}
        >
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 1.3, ease }}
            style={{ rotateX: rotX, rotateY: rotY }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 1.18 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 1.6, ease }}
            >
              <div className="transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.045]">
                <ScreenshotFrame name={project.name} live={project.live} image={project.image} />
              </div>
            </motion.div>
            <motion.div aria-hidden style={{ background: light }} className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        </a>

        {/* copy */}
        <div className={cn("flex flex-col justify-between gap-8 py-2 md:col-span-5 md:py-4", flip && "md:order-1 md:pl-3", !flip && "md:pr-3")}>
          <div className="flex items-center justify-between font-mono text-xs text-mute">
            <span>{project.category}</span>
            <span className="flex items-center gap-3">
              {project.status && (
                <span className="flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-2.5 py-0.5 text-[11px] text-bone">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  {project.status}
                </span>
              )}
              {project.year}
            </span>
          </div>

          <div>
            <h3 id={`p-${project.slug}`} className="display text-[clamp(2.4rem,4.6vw,4.6rem)]">
              <SplitText text={project.name} />
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: 0.25 }}
              className="mt-5 max-w-md leading-relaxed text-mute"
            >
              {project.description}
            </motion.p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
              {project.stack.map((t, k) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.35 + k * 0.05 }}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-bone/80"
                >
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href={project.live} external size="sm">Live project</Button>
            {project.github && <Button href={project.github} external size="sm" variant="ghost">GitHub</Button>}
          </div>
        </div>
      </div>

      {/* darkens as later cards stack on top */}
      <motion.div aria-hidden style={{ opacity: shade }} className="pointer-events-none absolute inset-0 bg-ink" />
    </motion.article>
  );
}
