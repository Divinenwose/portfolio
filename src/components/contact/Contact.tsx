"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import SplitText from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import Reveal from "@/components/ui/Reveal";
import { ease } from "@/lib/utils";

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-lg text-bone/80 transition-colors hover:text-ember md:text-xl">
      <span className="relative">
        {label}
        <span aria-hidden className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ember transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
      </span>
      <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13L13 3M5 3h8v8" /></svg>
    </a>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 50, damping: 20 });
  const sy = useSpring(ny, { stiffness: 50, damping: 20 });
  const orbX = useTransform(sx, (v) => v * 140);
  const orbY = useTransform(sy, (v) => v * 100);
  const ringX = useTransform(sx, (v) => v * -40);
  const ringY = useTransform(sy, (v) => v * -30);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    nx.set((e.clientX - r.left) / r.width - 0.5);
    ny.set((e.clientY - r.top) / r.height - 0.5);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable: the mailto link still works */ }
  };

  return (
    <section id="contact" ref={ref} onPointerMove={onMove} className="grain relative isolate overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-44">
      {/* animated background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div style={{ x: ringX, y: ringY }} className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
          {[360, 620, 900, 1200].map((s, i) => (
            <div key={s} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)]" style={{ width: s, height: s }}>
              <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/70" style={{ animation: `spin-slow ${30 + i * 14}s linear infinite`, transformOrigin: `0 ${s / 2}px`, left: "50%" }} />
            </div>
          ))}
        </motion.div>
        <motion.div style={{ x: orbX, y: orbY }} className="absolute left-1/2 top-[38%] h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2">
          <div className="h-full w-full rounded-full opacity-35 blur-[90px]" style={{ background: "radial-gradient(circle, #ff5100, transparent 65%)", animation: "float-a 12s ease-in-out infinite" }} />
        </motion.div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      </div>

      <div className="mx-auto max-w-[1480px]">
        <p className="mb-8 flex items-center gap-4 text-sm text-mute"><span className="h-px w-10 bg-ember" /> Contact</p>

        <div className="relative">
          <h2 className="display max-w-[16ch] text-[clamp(3rem,10.2vw,10.5rem)] text-balance">
            <SplitText text="Have an idea?" />
            <br />
            <span className="font-light text-bone/55"><SplitText text="Let's build something exceptional." delay={0.2} /></span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease, delay: 0.7 }}
            className="mt-12 md:absolute md:right-0 md:top-0 md:mt-0"
          >
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${profile.email}?subject=Let%27s%20work%20together`}
                className="group relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-ember text-black md:h-48 md:w-48"
              >
                <span aria-hidden className="absolute inset-0 scale-0 rounded-full bg-bone transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100" />
                <span className="relative flex flex-col items-center gap-1 text-base font-medium md:text-lg">
                  Say hello
                  <svg aria-hidden viewBox="0 0 16 16" className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13L13 3M5 3h8v8" /></svg>
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-[var(--line)] pt-10 md:mt-32 md:grid-cols-12 md:gap-8 md:pt-14">
          <Reveal className="md:col-span-7">
            <p className="mb-3 text-sm text-mute">Email</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-[clamp(1.35rem,3.4vw,3.2rem)] font-medium tracking-[-0.035em] transition-colors hover:text-ember"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="rounded-full border border-[var(--line-strong)] px-4 py-1.5 text-xs text-mute transition-colors hover:border-ember hover:text-bone"
              >
                {copied ? "Copied" : "Copy"}
              </button>
              <span className="sr-only" role="status" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span>
            </div>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="mb-3 text-sm text-mute">Elsewhere</p>
            <div className="flex flex-col items-start gap-3">
              <Social href={profile.github} label="GitHub" />
              <Social href={profile.linkedin} label="LinkedIn" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
