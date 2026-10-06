"use client";

import { profile } from "@/lib/data";
import { scrollToId } from "@/components/ui/SmoothScroll";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 md:px-10 md:py-12">
      <div className="mx-auto grid max-w-[1480px] gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-4">
          <p className="text-3xl font-semibold tracking-tight">DIVINE<span className="text-ember">.</span></p>
          <p className="mt-1 text-sm text-mute">Frontend Developer</p>
        </div>

        <nav aria-label="Social" className="flex gap-6 text-sm md:col-span-4 md:justify-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-mute transition-colors hover:text-ember">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-mute transition-colors hover:text-ember">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="text-mute transition-colors hover:text-ember">Email</a>
        </nav>

        <div className="flex items-end justify-between gap-6 md:col-span-4 md:justify-end">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="group inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-bone"
          >
            Back to top
            <span aria-hidden className="inline-block transition-transform duration-500 group-hover:-translate-y-1">↑</span>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1480px] flex-col justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-mute-2 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="shimmer w-fit font-mono">Designed &amp; Developed with curiosity + code.</p>
      </div>
    </footer>
  );
}
