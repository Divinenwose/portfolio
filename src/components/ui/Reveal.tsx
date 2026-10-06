"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "@/lib/utils";

/** Subtle fade + lift, once. Used sparingly. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
