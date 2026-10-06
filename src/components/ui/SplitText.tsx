"use client";

import { motion, type Variants } from "framer-motion";
import { ease } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** animate on mount instead of on enter-viewport */
  immediate?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
});
const word: Variants = {
  hidden: { y: "110%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 1.1, ease } },
};

/** Word-by-word masked reveal. Words wrap naturally. */
export default function SplitText({ text, className, wordClassName, delay = 0, stagger = 0.06, immediate, as = "span" }: Props) {
  const Tag = motion[as] as typeof motion.span;
  const words = text.split(" ");
  return (
    <Tag
      className={className}
      variants={container(delay, stagger)}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-10% 0px" } })}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
          <motion.span variants={word} className={`inline-block origin-bottom-left will-change-transform ${wordClassName ?? ""}`}>
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}
