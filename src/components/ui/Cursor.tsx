"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type Mode = "default" | "link" | "view";

/**
 * Dot + trailing ring. Mode is derived from data attributes via one delegated
 * listener, so hover changes never re-render the page.
 *   data-cursor="view" data-cursor-label="VIEW"
 *   data-cursor="link"  (anchors and buttons are detected automatically)
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const el = t?.closest?.("[data-cursor], a, button, input, textarea") as HTMLElement | null;
      if (!el) { setMode("default"); setLabel(""); return; }
      const m = el.dataset.cursor as Mode | undefined;
      if (m === "view") { setMode("view"); setLabel(el.dataset.cursorLabel || "VIEW"); }
      else { setMode("link"); setLabel(""); }
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = mode === "view" ? 92 : mode === "link" ? 56 : 34;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block" style={{ opacity: visible ? 1 : 0, transition: "opacity .3s" }}>
      {/* Trailing ring */}
      <motion.div style={{ x: rx, y: ry }} className="absolute left-0 top-0">
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            scale: pressed ? 0.88 : 1,
            backgroundColor: mode === "view" ? "#ff5100" : mode === "link" ? "rgba(255,81,0,0.12)" : "rgba(255,81,0,0)",
            borderColor: mode === "view" ? "#ff5100" : "rgba(245,244,240,0.45)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border"
        >
          <AnimatePresence>
            {mode === "view" && (
              <motion.span
                key="label"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="text-[11px] font-medium tracking-[0.14em] text-black"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      {/* Precise dot */}
      <motion.div style={{ x, y }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: mode === "view" ? 0 : mode === "link" ? 0.5 : 1 }}
          className="-translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-ember"
        />
      </motion.div>
    </div>
  );
}
