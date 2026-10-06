"use client";

import { useEffect, useRef, useState } from "react";

/** Renders a fixed-size design (e.g. 640×400) scaled to fit whatever width it is given. */
export default function Scaler({ width = 640, height = 400, children }: { width?: number; height?: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: `scale(${scale ?? 1})`, opacity: scale === null ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  );
}
