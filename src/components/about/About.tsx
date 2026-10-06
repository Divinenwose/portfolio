"use client";

import { motion } from "framer-motion";
import ScrubText from "@/components/ui/ScrubText";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import Portrait from "./Portrait";
import { principles, stats } from "@/lib/data";
import { ease } from "@/lib/utils";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1480px]">
        {/* statement */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 text-sm text-mute lg:sticky lg:top-32">
              <span className="h-px w-10 bg-ember" />
              About
            </div>
          </div>
          <div className="lg:col-span-10">
            <ScrubText
              className="text-[clamp(1.85rem,4.4vw,4.2rem)] font-light leading-[1.12] tracking-[-0.03em] text-bone"
              text="I'm a frontend developer focused on creating modern, scalable and intuitive digital experiences: interfaces that load fast, read clearly and keep working as the product grows."
            />
          </div>
        </div>

        {/* portrait */}
        <Portrait />

        {/* stats */}
        <dl className="mt-24 grid grid-cols-2 border-t border-[var(--line)] md:mt-36 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease, delay: i * 0.08 }}
              className="group relative border-b border-[var(--line)] py-8 pr-4 md:py-12 [&:nth-child(odd)]:border-r lg:border-r lg:pl-8 lg:first:pl-0 lg:[&:not(:first-child)]:pl-8 lg:[&:last-child]:border-r-0 pl-0 [&:nth-child(even)]:pl-5 md:[&:nth-child(even)]:pl-8"
            >
              <dd className="display text-[clamp(3.4rem,9vw,8.5rem)] tabular-nums transition-colors duration-500 group-hover:text-ember">
                {s.value === null ? <span>{s.suffix}</span> : <Counter to={s.value} suffix={s.suffix} />}
              </dd>
              <dt className="mt-3 text-sm text-mute md:text-[15px]">{s.label}</dt>
            </motion.div>
          ))}
        </dl>

        {/* approach */}
        <div className="mt-28 grid gap-10 md:mt-44 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <h2 className="display text-[clamp(2.4rem,5vw,4.75rem)]">
                  How I<br />
                  <span className="font-light text-bone/55">approach the work</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-mute">
                  Good interfaces are the sum of small, deliberate decisions. These are the ones I never skip.
                </p>
              </Reveal>
            </div>
          </div>

          <ul className="lg:col-span-7 lg:col-start-6">
            {principles.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease, delay: 0.04 }}
                className="group relative border-t border-[var(--line)] last:border-b"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-6 py-6 md:py-8">
                  <div className="transition-transform duration-500 ease-[var(--ease-out-expo)] md:group-hover:translate-x-3">
                    <h3 className="text-xl font-medium tracking-tight md:text-3xl">{p.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-mute md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:mt-3 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-focus-within:max-h-24 md:group-focus-within:opacity-100">
                      {p.text}
                    </p>
                  </div>
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--line-strong)] transition-colors duration-500 group-hover:bg-ember" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
