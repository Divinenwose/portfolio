"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import ScrubText from "@/components/ui/ScrubText";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import { cn, ease } from "@/lib/utils";

type T = (typeof testimonials)[number];

function Quote({ t, flip }: { t: T; flip: boolean }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const SHOWN = 2;
  const long = t.paragraphs.length > SHOWN + 1;
  const first = long ? t.paragraphs.slice(0, SHOWN) : t.paragraphs;
  const rest = long ? t.paragraphs.slice(SHOWN) : [];

  return (
    <figure className="grid gap-10 border-t border-[var(--line)] py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
      {/* pull quote, lit word by word on scroll */}
      <div className={cn("lg:col-span-7", flip && "lg:order-2 lg:col-start-6")}>
        <svg aria-hidden viewBox="0 0 48 36" className="mb-6 h-8 w-10 text-ember md:mb-8 md:h-10 md:w-12" fill="currentColor">
          <path d="M0 36V20.4C0 9.2 6 2 17.4 0l1.8 4.6C13.4 6.4 11 10 10.6 14.4H19V36H0Zm27.8 0V20.4C27.8 9.2 33.8 2 45.2 0L47 4.6c-5.8 1.8-8.2 5.4-8.6 9.8h8.4V36H27.8Z" />
        </svg>
        <blockquote>
          <ScrubText
            text={`${t.pull}`}
            className="text-[clamp(1.7rem,3.7vw,3.5rem)] font-light leading-[1.12] tracking-[-0.03em] text-bone"
          />
        </blockquote>
      </div>

      {/* full note */}
      <div className={cn("lg:col-span-5", flip ? "lg:order-1 lg:col-start-1 lg:pr-6" : "lg:pl-6")}>
        <div className="space-y-4 text-[15.5px] leading-[1.75] text-mute md:text-base">
          {first.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={id}
                key="rest"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease }}
                className="overflow-hidden"
              >
                <div className="space-y-4">
                  {rest.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={id}
            className="group mt-6 inline-flex items-center gap-3 text-sm text-bone transition-colors hover:text-ember"
          >
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line-strong)] transition-colors group-hover:border-ember">
              <span className="absolute h-px w-2.5 bg-current" />
              <span className={cn("absolute h-2.5 w-px bg-current transition-transform duration-500", open && "scale-y-0")} />
            </span>
            {open ? "Show less" : "Read the full note"}
          </button>
        )}

        <figcaption className="mt-10 flex items-center gap-4 border-t border-[var(--line)] pt-6">
          <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ember/60 bg-ink-3 text-[13px] font-medium tracking-wide">
            {t.initials}
          </span>
          <span>
            <span className="block text-lg font-medium tracking-tight">{t.name}</span>
            <span className="block text-sm text-mute">{t.role}</span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
          <h2 className="display text-[clamp(2.8rem,7.4vw,7.5rem)] md:col-span-8">
            <span className="block"><SplitText text="Kind words" /></span>
            <span className="block font-light text-bone/55"><SplitText text="from people I've built with" delay={0.12} /></span>
          </h2>
          <Reveal className="md:col-span-3 md:col-start-10 md:self-end md:pb-3" delay={0.15}>
            <p className="text-mute">Shared in their own words by the people I&apos;ve worked with most closely.</p>
          </Reveal>
        </div>

        <div className="border-b border-[var(--line)]">
          {testimonials.map((t, i) => (
            <Quote key={t.name} t={t} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
