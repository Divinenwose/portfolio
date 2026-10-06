"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({ w, range, progress }: { w: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }} className="inline-block will-change-[opacity]">{w}</motion.span>;
}

/** Words light up one by one as the paragraph scrolls through the viewport. */
export default function ScrubText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 1.6 / words.length);
        return (
          <span key={i} aria-hidden>
            <Word w={w} range={[start, end]} progress={scrollYProgress} />{" "}
          </span>
        );
      })}
    </p>
  );
}
