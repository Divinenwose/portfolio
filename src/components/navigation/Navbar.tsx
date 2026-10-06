"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navItems } from "@/lib/data";
import { cn, ease, easeInOut } from "@/lib/utils";
import { scrollToId } from "@/components/ui/SmoothScroll";
import Magnetic from "@/components/ui/Magnetic";

// services sits between skills and contact, so it counts toward "Skills"
const observed = ["home", "about", "experience", "projects", "skills", "services", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    // tuck away when scrolling down, return on scroll up
    setHidden(y > 600 && y > prev && !open);
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "services" ? "skills" : e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    observed.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) { lenis?.stop(); document.body.style.overflow = "hidden"; }
    else { lenis?.start(); document.body.style.overflow = ""; }
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; lenis?.start(); };
  }, [open]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // let the overlay start closing and scroll restart before moving
    setTimeout(() => scrollToId(id), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: hidden ? 0 : 0.1 }}
        className="fixed inset-x-0 top-0 z-[80]"
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-[var(--ease-out-expo)]",
            scrolled
              ? "mt-3 max-w-[1100px] rounded-full border border-[var(--line)] bg-ink/70 px-5 py-2.5 backdrop-blur-xl md:px-6 w-[calc(100%-1.5rem)]"
              : "max-w-[1480px] px-5 py-6 md:px-10",
          )}
        >
          <a href="#home" onClick={go("home")} aria-label="Divine, back to top" className="relative z-[90] text-[17px] font-semibold tracking-tight">
            DIVINE<span className="text-ember">.</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={go(n.id)}
                    aria-current={active === n.id ? "true" : undefined}
                    className={cn(
                      "relative block px-4 py-2 text-[14px] transition-colors duration-300",
                      active === n.id ? "text-bone" : "text-mute hover:text-bone",
                    )}
                  >
                    {n.label}
                    {active === n.id && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute inset-x-4 -bottom-0.5 h-px bg-ember"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  onClick={go("contact")}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[var(--line-strong)] px-5 py-2 text-[14px] transition-colors hover:border-ember"
                >
                  <span aria-hidden className="absolute inset-0 translate-y-full bg-ember transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Let&apos;s Talk</span>
                </a>
              </Magnetic>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <motion.span animate={open ? { y: 5.5, rotate: 45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.4, ease }} className="absolute left-0 top-0 h-px w-5 bg-bone" />
                <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="absolute left-0 top-[5.5px] h-px w-5 bg-bone" />
                <motion.span animate={open ? { y: -5.5, rotate: -45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.4, ease }} className="absolute bottom-0 left-0 h-px w-5 bg-bone" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.75rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.75rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.75rem)", transition: { duration: 0.6, ease: easeInOut } }}
            transition={{ duration: 0.9, ease: easeInOut }}
            className="fixed inset-0 z-[70] flex flex-col justify-between bg-ink-2 px-6 pb-8 pt-28 lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((n, i) => (
                <li key={n.id} className="overflow-hidden border-b border-[var(--line)]">
                  <motion.a
                    href={`#${n.id}`}
                    onClick={go(n.id)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0, transition: { duration: 0.8, ease, delay: 0.25 + i * 0.06 } }}
                    exit={{ y: "100%", transition: { duration: 0.3 } }}
                    className={cn("flex items-baseline justify-between py-4 text-[clamp(2.1rem,10vw,3.25rem)] font-medium tracking-tight", active === n.id ? "text-bone" : "text-bone/55")}
                  >
                    {n.label}
                    {active === n.id && <span className="h-2 w-2 rounded-full bg-ember" aria-hidden />}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7 } }} exit={{ opacity: 0 }} className="flex items-center justify-between text-sm text-mute">
              <a href="#contact" onClick={go("contact")} className="rounded-full bg-ember px-6 py-3 font-medium text-black">Let&apos;s Talk</a>
              <span>Frontend Developer</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
