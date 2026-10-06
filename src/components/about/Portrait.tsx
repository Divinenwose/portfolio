"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import { ease } from "@/lib/utils";

/**
 * Editorial name plate + portrait. Frame reveals once, the photo drifts
 * slowly inside it as you scroll (transform only), and eases from a muted
 * grade to full colour on hover.
 */
export default function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div className="mt-24 grid items-end gap-10 md:mt-36 lg:grid-cols-12 lg:gap-6">
      {/* name plate */}
      <div className="order-2 lg:order-1 lg:col-span-7">
        <h3 className="display text-[clamp(3.2rem,9.4vw,9.5rem)]" aria-label={profile.name}>
          {[
            { w: "Nwose", cls: "" },
            { w: "Onyeka", cls: "font-light text-bone/55" },
            { w: "Divine", cls: "" },
          ].map(({ w, cls }, i) => (
            <span key={w} aria-hidden className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease, delay: i * 0.09 }}
                className={`inline-block ${cls}`}
              >
                {w}
                {i === 2 && <span className="text-ember">.</span>}
              </motion.span>
            </span>
          ))}
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="mt-8 flex max-w-md items-start gap-4 md:mt-10"
        >
          <span aria-hidden className="mt-3 h-px w-10 shrink-0 bg-ember" />
          <p className="leading-relaxed text-mute">
            <span className="text-bone">{profile.title}.</span> {profile.tagline}.
          </p>
        </motion.div>
      </div>

      {/* portrait */}
      <div ref={ref} className="order-1 mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:order-2 lg:col-span-5 lg:col-start-8 lg:mx-0 lg:ml-auto lg:max-w-[520px]">
        <motion.figure
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 1.4, ease }}
          className="group relative overflow-hidden rounded-sm border border-[var(--line-strong)] bg-ink-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[9%]">
              <Image
                src="/divine.jpg"
                alt="Portrait of Nwose Onyeka Divine, arms crossed in a striped tee"
                fill
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 480px, 90vw"
                className="object-cover object-[50%_18%] [filter:grayscale(0.4)_contrast(1.06)_brightness(0.9)] transition-[filter,transform] duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03] group-hover:[filter:grayscale(0)_contrast(1.02)_brightness(1)]"
              />
            </motion.div>

            {/* grade: sink the beige wall into the dark theme, warm the shadows */}
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-ember/10 mix-blend-soft-light" />
            <div aria-hidden className="grain pointer-events-none absolute inset-0" />

            {/* crop marks, echoing the hero spec card */}
            {["left-3 top-3 border-l border-t", "right-3 top-3 border-r border-t", "bottom-3 left-3 border-b border-l", "bottom-3 right-3 border-b border-r"].map((c) => (
              <span key={c} aria-hidden className={`pointer-events-none absolute h-3 w-3 border-bone/70 ${c}`} />
            ))}

            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-ink/60 px-3.5 py-1.5 text-[12px] backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-ember" style={{ animation: "pulse-ring 2.2s ease-out infinite" }} />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-ember" />
                </span>
                {profile.short}
              </span>
              <span className="font-mono text-[11px] text-bone/70">Frontend Developer</span>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </div>
  );
}
