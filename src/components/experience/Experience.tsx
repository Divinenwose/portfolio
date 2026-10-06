"use client";

import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { experience } from "@/lib/data";
import { cn, ease } from "@/lib/utils";

function Item({ e, i, lit }: { e: (typeof experience)[number]; i: number; lit: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.1, ease }}
      className="relative pl-10 md:pl-20"
    >
      {/* node */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-9 flex h-[15px] w-[15px] -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-700",
          lit ? "border-ember bg-ember shadow-[0_0_0_6px_rgba(255,81,0,0.14)]" : "border-[var(--line-strong)] bg-ink",
        )}
      />
      <article className="group relative overflow-hidden rounded-md border border-[var(--line)] bg-ink-2/60 p-6 transition-all duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-[var(--line-strong)] hover:bg-ink-3 md:p-10">
        <span aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-ember/0 blur-3xl transition-colors duration-700 group-hover:bg-ember/15" />
        <div className="relative flex flex-col justify-between gap-2 md:flex-row md:items-baseline md:gap-8">
          <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.03em]">{e.role}</h3>
          <span className="shrink-0 font-mono text-xs tracking-wider text-mute">{e.period}</span>
        </div>
        <p className="relative mt-2 text-lg text-ember">{e.company}</p>
        <p className="relative mt-5 max-w-2xl leading-relaxed text-mute">{e.summary}</p>
        <ul className="relative mt-7 flex flex-wrap gap-2" aria-label="Technologies">
          {e.tags.map((t, k) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.3 + k * 0.06 }}
              className="rounded-full border border-[var(--line)] px-3.5 py-1.5 text-[13px] text-bone/80 transition-colors duration-300 group-hover:border-[var(--line-strong)]"
            >
              {t}
            </motion.li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress((p) => (Math.abs(p - v) > 0.01 ? v : p)));

  return (
    <section id="experience" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="relative mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-4 text-sm text-mute">
              <span className="h-px w-10 bg-ember" /> Experience
            </div>
            <h2 className="display text-[clamp(2.6rem,5.4vw,5.5rem)]">
              Where I&apos;ve<br />
              <span className="font-light text-bone/55">led and built</span>
            </h2>
            <p className="mt-6 max-w-sm text-mute">
              From leading product interfaces to teaching the next wave of developers, always close to the code.
            </p>
          </div>
        </div>

        <ol ref={ref} className="relative space-y-6 md:space-y-8 lg:col-span-8">
          {/* track + animated progress line */}
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 bg-[var(--line)]" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-0 left-0 top-0 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-ember via-ember to-ember/30"
          />
          {experience.map((e, i) => (
            <Item key={e.company + i} e={e} i={i} lit={progress > (i + 0.35) / experience.length - 0.12} />
          ))}
        </ol>
      </div>
    </section>
  );
}
