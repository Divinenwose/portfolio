"use client";

import { useEffect, useState } from "react";

/** True at >= 768px. Used to keep heavier scroll effects off phones. */
export function useIsDesktop(query = "(min-width: 768px)") {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setMatch(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return match;
}
