"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Counts up when scrolled into view. Writes straight to the DOM (no re-renders). */
export default function Counter({ to, suffix = "", className }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    if (reduce) { el.textContent = `${to}${suffix}`; return; }
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { el.textContent = `${Math.round(v)}${suffix}`; },
    });
    return () => controls.stop();
  }, [inView, to, suffix, reduce]);

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      0{suffix}
    </span>
  );
}
