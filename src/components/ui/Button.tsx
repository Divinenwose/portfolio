"use client";

import type { ReactNode } from "react";
import Magnetic from "./Magnetic";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  size?: "md" | "sm";
};

/** Magnetic pill with a fill-sweep hover and an arrow that slides through. */
export default function Button({ href, children, variant = "primary", external, onClick, className, size = "md" }: Props) {
  const primary = variant === "primary";
  return (
    <Magnetic strength={0.22}>
      <a
        href={href}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full font-medium transition-colors duration-500",
          size === "md" ? "px-7 py-4 text-[15px]" : "px-5 py-3 text-sm",
          primary ? "bg-ember text-black" : "border border-[var(--line-strong)] text-bone hover:border-bone/60",
          className,
        )}
      >
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 translate-y-[101%] rounded-[inherit] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0",
            primary ? "bg-bone" : "bg-bone",
          )}
        />
        <span className={cn("relative z-10 transition-colors duration-500", !primary && "group-hover:text-black", )}>{children}</span>
        <span
          aria-hidden
          className={cn("relative z-10 inline-flex h-4 w-4 overflow-hidden transition-colors duration-500", !primary && "group-hover:text-black")}
        >
          <svg viewBox="0 0 16 16" className="absolute inset-0 h-4 w-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-5 group-hover:-translate-y-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13L13 3M5 3h8v8" /></svg>
          <svg viewBox="0 0 16 16" className="absolute inset-0 h-4 w-4 -translate-x-5 translate-y-5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:translate-y-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13L13 3M5 3h8v8" /></svg>
        </span>
      </a>
    </Magnetic>
  );
}
