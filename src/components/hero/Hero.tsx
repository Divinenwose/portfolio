"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import Button from "@/components/ui/Button";
import { scrollToId } from "@/components/ui/SmoothScroll";
import HeroVisual from "./HeroVisual";
import { ease } from "@/lib/utils";

const label = "FRONTEND DEVELOPER / CREATIVE ENGINEER";
const ticker = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "TanStack Query", "Node.js", "Supabase", "PostgreSQL"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // pointer → spotlight + parallax (springs, no React state)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 60, damping: 18 });
  const sy = useSpring(ny, { stiffness: 60, damping: 18 });
  const spot = useMotionTemplate`radial-gradient(520px circle at ${px}px ${py}px, rgba(255,81,0,0.13), transparent 62%)`;

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set(e.clientX - r.left);
    py.set(e.clientY - r.top);
    nx.set((e.clientX - r.left) / r.width - 0.5);
    ny.set((e.clientY - r.top) / r.height - 0.5);
  };

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const glowX = useTransform(sx, (v) => v * -120);

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={onMove}
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* background stack */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="grid-lines absolute inset-0 opacity-90"
          style={{ maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 75%)" }}
        />
        <motion.div style={{ background: spot }} className="absolute inset-0" />
        <motion.div style={{ y: glowY, x: glowX }} className="absolute -right-[10%] top-[8%] h-[60vmax] w-[60vmax] max-w-[900px] max-h-[900px]">
          <div
            className="h-full w-full rounded-full opacity-[0.22] blur-[110px]"
            style={{ background: "radial-gradient(circle at 40% 40%, #ff5100, transparent 62%)", animation: "float-b 14s ease-in-out infinite" }}
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex w-full max-w-[1480px] flex-1 flex-col justify-center px-5 pb-10 pt-32 md:px-10 lg:pt-36"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-6">
          <div>
            {/* animated label */}
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.1em] text-mute min-[400px]:text-[11px] min-[400px]:tracking-[0.16em] sm:text-xs sm:tracking-[0.2em] md:mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-ember" style={{ animation: "pulse-ring 2.2s ease-out infinite" }} />
                <span className="relative h-2 w-2 rounded-full bg-ember" />
              </span>
              <span aria-label={label}>
                {label.split("").map((c, i) => (
                  <motion.span
                    key={i}
                    aria-hidden
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.025 }}
                    className="inline-block"
                  >
                    {c === " " ? " " : c}
                  </motion.span>
                ))}
              </span>
            </div>

            <h1
              aria-label="Building modern digital experiences with code, creativity and precision."
              className="display text-[clamp(2.7rem,8.6vw,8.6rem)] text-balance lg:text-[clamp(3.4rem,6.3vw,7.2rem)]"
            >
              <span className="block"><SplitText immediate delay={0.55} text="Building modern" /></span>
              <span className="block text-bone/55" style={{ fontWeight: 300 }}>
                <SplitText immediate delay={0.75} text="digital experiences" />
              </span>
              <span className="block"><SplitText immediate delay={0.95} text="with code, creativity" /></span>
              <span className="block">
                <SplitText immediate delay={1.15} text="and precision" />
                <motion.span
                  aria-hidden
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.9 }}
                  className="ml-[0.06em] inline-block h-[0.14em] w-[0.14em] rounded-full bg-ember"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 1.5 }}
              className="mt-8 max-w-[34rem] text-[17px] leading-relaxed text-mute md:mt-10 md:text-lg"
            >
              I build modern, responsive and scalable web applications with <span className="text-bone">React</span>,{" "}
              <span className="text-bone">Next.js</span> and the modern frontend stack, turning designs into fast, accessible interfaces that feel considered down to the pixel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 1.65 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href="#projects" onClick={(e) => { e.preventDefault(); scrollToId("projects"); }}>View My Work</Button>
              <Button href="#contact" variant="ghost" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Let&apos;s Work Together</Button>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <HeroVisual mx={sx} my={sy} />
          </div>
        </div>
      </motion.div>

      {/* bottom row */}
      <div className="relative mx-auto w-full max-w-[1480px] px-5 pb-6 md:px-10">
        <motion.button
          type="button"
          onClick={() => scrollToId("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="group mb-6 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-mute transition-colors hover:text-bone"
        >
          <span className="relative block h-9 w-px overflow-hidden bg-[var(--line-strong)]">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-ember" style={{ animation: "scroll-line 2s var(--ease-out-expo) infinite" }} />
          </span>
          Scroll to explore <span aria-hidden>↓</span>
        </motion.button>

        <div aria-hidden className="marquee-row overflow-hidden border-t border-[var(--line)] py-4">
          <div className="marquee-track" style={{ ["--dur" as string]: "50s" }}>
            {[0, 1].map((n) => (
              <div key={n} className="flex shrink-0 items-center">
                {ticker.map((t) => (
                  <span key={t + n} className="flex items-center font-mono text-xs tracking-[0.14em] text-mute-2">
                    <span className="px-6">{t}</span>
                    <span className="text-ember/70">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
