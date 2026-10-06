"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import Counter from "@/components/ui/Counter";
import { cn, ease } from "@/lib/utils";

const vp = { once: true, margin: "-10% 0px" } as const;

/* tiny illustrations, one per service */
function Code() {
  const w = [62, 38, 80, 54, 70, 30];
  return (
    <div className="space-y-2.5 font-mono">
      {w.map((n, i) => (
        <motion.div key={i} initial={{ width: 0 }} whileInView={{ width: `${n}%` }} viewport={vp} transition={{ duration: 1.1, ease, delay: 0.15 + i * 0.09 }} className={cn("h-2 rounded-full", i % 3 === 0 ? "bg-ember" : "bg-bone/15", i % 3 === 2 && "ml-6")} style={{ maxWidth: "100%" }} />
      ))}
    </div>
  );
}
function Frame() {
  return (
    <div className="relative mx-auto h-full max-h-36 w-44">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 1, ease }} className="absolute inset-3 border border-ember">
        {["-left-[3px] -top-[3px]", "-right-[3px] -top-[3px]", "-bottom-[3px] -left-[3px]", "-bottom-[3px] -right-[3px]"].map((c) => (
          <i key={c} className={`absolute h-[6px] w-[6px] bg-bone ${c}`} />
        ))}
        <div className="absolute inset-3 rounded-sm bg-bone/10" />
      </motion.div>
      <span className="absolute left-1/2 top-0 -translate-x-1/2 font-mono text-[9px] text-ember">16</span>
      <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-[9px] text-ember">12</span>
    </div>
  );
}
function Bars() {
  const h = [40, 62, 48, 80, 58, 92, 70];
  return (
    <div className="flex h-28 items-end justify-center gap-2">
      {h.map((v, i) => (
        <motion.div key={i} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={vp} transition={{ duration: 1, ease, delay: 0.1 + i * 0.07 }} style={{ height: `${v}%`, transformOrigin: "bottom" }} className={cn("w-4 rounded-[2px]", i === 5 ? "bg-ember" : "bg-bone/15")} />
      ))}
    </div>
  );
}
function Gauge() {
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative mx-auto h-[116px] w-[116px]">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(245,244,240,0.1)" strokeWidth="4" />
        <motion.circle cx="50" cy="50" r={r} fill="none" stroke="#ff5100" strokeWidth="4" strokeLinecap="round" strokeDasharray={c} initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: 0 }} viewport={vp} transition={{ duration: 2, ease }} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-3xl font-semibold tracking-tight"><Counter to={100} /></span>
    </div>
  );
}
function Devices() {
  return (
    <div className="flex items-end justify-center gap-3">
      <motion.div initial={{ height: 0 }} whileInView={{ height: 96 }} viewport={vp} transition={{ duration: 1, ease, delay: 0.5 }} className="w-6 rounded-[5px] border border-bone/30" />
      <motion.div initial={{ height: 0 }} whileInView={{ height: 76 }} viewport={vp} transition={{ duration: 1, ease, delay: 0.3 }} className="w-14 rounded-md border border-ember" />
      <motion.div initial={{ height: 0 }} whileInView={{ height: 56 }} viewport={vp} transition={{ duration: 1, ease, delay: 0.1 }} className="w-24 rounded-md border border-bone/30" />
    </div>
  );
}

const art = { frontend: Code, ui: Frame, webapp: Bars, perf: Gauge, responsive: Devices } as const;
const span: Record<string, string> = {
  frontend: "lg:col-span-7",
  ui: "lg:col-span-5",
  webapp: "lg:col-span-4",
  perf: "lg:col-span-4",
  responsive: "lg:col-span-4",
};

function Card({ s, i }: { s: (typeof services)[number]; i: number }) {
  const Art = art[s.id as keyof typeof art];
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 1.1, ease, delay: (i % 3) * 0.08 }}
      onPointerMove={onMove}
      className={cn(
        "spot group flex min-h-[340px] flex-col justify-between overflow-hidden rounded-md border border-[var(--line)] bg-ink-2/70 p-6 transition-colors duration-500 hover:border-[var(--line-strong)] md:min-h-[380px] md:p-8",
        span[s.id],
      )}
    >
      <div className={cn("flex h-40 items-center justify-center transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04] md:h-44 [&>*]:w-full", s.id === "frontend" ? "[&>*]:max-w-[26rem]" : "[&>*]:max-w-[16rem]")}>
        <Art />
      </div>
      <div className="relative mt-8">
        <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] md:text-[1.7rem]">{s.title}</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-mute">{s.text}</p>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-5 pb-28 pt-12 md:px-10 md:pb-44 md:pt-24">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
          <h2 className="display text-[clamp(2.8rem,7vw,7rem)] md:col-span-7">
            <SplitText text="What I can build for you" />
          </h2>
          <Reveal className="md:col-span-4 md:col-start-9 md:self-end md:pb-3" delay={0.15}>
            <p className="text-mute">
              Whether it&apos;s a single screen or a full product, the goal is the same: an interface people enjoy using and a codebase teams enjoy working in.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          {services.map((s, i) => (
            <Card key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
