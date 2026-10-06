"use client";

import { MotionConfig } from "framer-motion";

/** Honors prefers-reduced-motion for every Framer Motion transform. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
