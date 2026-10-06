"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ease } from "@/lib/utils";

const k = "text-[#ff7a3d]";
const f = "text-bone";
const p = "text-[#9a9a95]";
const s = "text-[#cfc9bb]";

function Layer({ mx, my, depth, className, children }: { mx: MotionValue<number>; my: MotionValue<number>; depth: number; className?: string; children: React.ReactNode }) {
  const x = useTransform(mx, (v) => v * 60 * depth);
  const y = useTransform(my, (v) => v * 60 * depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Layered composition: code window, live UI spec card, rotating badge, floating chips. */
export default function HeroVisual({ mx, my }: { mx: MotionValue<number>; my: MotionValue<number> }) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.94, clipPath: "inset(12% 12% 12% 12% round 24px)" }}
      animate={{ opacity: 1, scale: 1, clipPath: "inset(-20% -20% -20% -20% round 0px)" }}
      transition={{ duration: 1.6, ease, delay: 1.0 }}
      className="relative mx-auto h-[540px] w-full max-w-[520px] select-none"
    >
      {/* slow orbit rings */}
      <Layer mx={mx} my={my} depth={0.2} className="absolute inset-0 flex items-center justify-center">
        <div className="h-[440px] w-[440px] rounded-full border border-[var(--line)]" />
        <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[var(--line)]" style={{ animation: "spin-slow 60s linear infinite" }} />
      </Layer>

      {/* code window */}
      <Layer mx={mx} my={my} depth={0.6} className="absolute right-0 top-14 w-[400px] max-w-full">
        <div className="float-b overflow-hidden rounded-xl border border-[var(--line-strong)] bg-ink-2/70 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-ember" />
            <span className="ml-3 font-mono text-[11px] text-mute">Hero.tsx</span>
          </div>
          <pre className="overflow-hidden px-5 py-5 font-mono text-[12.5px] leading-[1.75]">
            <code>
              <span className={k}>export function</span> <span className={f}>Hero</span>
              <span className={p}>() {"{"}</span>
              {"\n  "}
              <span className={k}>const</span> <span className={p}>{"{ x, y }"}</span> = <span className={f}>usePointer</span>();
              {"\n  "}
              <span className={k}>return</span> <span className={p}>(</span>
              {"\n    "}
              <span className={p}>{"<"}</span>
              <span className={f}>motion.h1</span>
              {"\n      "}
              <span className={p}>animate</span>=<span className={s}>{"{{ y: 0 }}"}</span>
              {"\n      "}
              <span className={p}>transition</span>=<span className={s}>{"{spring}"}</span>
              {"\n    "}
              <span className={p}>{">"}</span>
              {"\n      "}
              <span className={s}>Crafted with precision</span>
              {"\n    "}
              <span className={p}>{"</"}</span>
              <span className={f}>motion.h1</span>
              <span className={p}>{">"}</span>
              {"\n  "}
              <span className={p}>);</span>
              {"\n"}
              <span className={p}>{"}"}</span>
              <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[3px] bg-ember" style={{ animation: "blink 1.1s steps(1) infinite" }} />
            </code>
          </pre>
        </div>
      </Layer>

      {/* UI spec card */}
      <Layer mx={mx} my={my} depth={1.1} className="absolute bottom-10 left-0 w-[250px]">
        <div className="float-a rounded-xl border border-[var(--line-strong)] bg-ink-3/80 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-mute">
            <span>Button / Primary</span>
            <span className="text-ember">pixel match</span>
          </div>
          <div className="relative flex h-24 items-center justify-center rounded-md border border-dashed border-[var(--line-strong)]">
            <span className="rounded-full bg-ember px-6 py-3 text-sm font-medium text-black">View My Work</span>
            <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-bone" />
            <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-bone" />
            <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-bone" />
            <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-bone" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px] text-mute">
            <span>pad 28</span>
            <span>r 999</span>
            <span>#FF5100</span>
          </div>
        </div>
      </Layer>

      {/* rotating badge */}
      <Layer mx={mx} my={my} depth={1.5} className="absolute -left-2 top-0">
        <div className="relative h-[116px] w-[116px]">
          <svg viewBox="0 0 120 120" className="h-full w-full" style={{ animation: "spin-slow 22s linear infinite" }}>
            <defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
            <text fill="#f5f4f0" fontSize="8.5" fontFamily="var(--font-geist-mono)">
              <textPath href="#circ" textLength="272" lengthAdjust="spacing">OPEN TO NEW PROJECTS • FRONTEND DEVELOPER • </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full bg-ember text-black">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13L13 3M5 3h8v8" /></svg>
          </span>
        </div>
      </Layer>

      {/* chips */}
      <Layer mx={mx} my={my} depth={1.8} className="absolute right-4 top-[300px]">
        <span className="float-a block rounded-full border border-[var(--line-strong)] bg-ink-2/80 px-4 py-2 font-mono text-[11px] backdrop-blur-md">Next.js</span>
      </Layer>
      <Layer mx={mx} my={my} depth={2.2} className="absolute bottom-0 right-16">
        <span className="float-b flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-ink-2/80 px-4 py-2 font-mono text-[11px] backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" /> 60 fps
        </span>
      </Layer>
    </motion.div>
  );
}
