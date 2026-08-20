"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Wordmark } from "@/components/Logo";

const speckles = [
  { cx: 74, cy: 60, r: 3 },
  { cx: 132, cy: 52, r: 2.5 },
  { cx: 96, cy: 78, r: 2 },
  { cx: 150, cy: 90, r: 3 },
  { cx: 60, cy: 100, r: 2.5 },
  { cx: 118, cy: 108, r: 2 },
  { cx: 168, cy: 60, r: 2 },
  { cx: 84, cy: 130, r: 2.5 },
];

/** Big toast illustration: crust + toasted interior + speckle texture. */
function ToastSlice({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 220" className={className} aria-hidden="true">
      <path
        d="M120 12
           C168 12, 204 40, 204 84
           L204 168
           C204 184, 190 196, 174 196
           L66 196
           C50 196, 36 184, 36 168
           L36 84
           C36 40, 72 12, 120 12 Z"
        fill="#6A3218"
      />
      <path
        d="M120 28
           C160 28, 190 50, 190 84
           L190 160
           C190 172, 180 180, 168 180
           L72 180
           C60 180, 50 172, 50 160
           L50 84
           C50 50, 80 28, 120 28 Z"
        fill="#F6B83F"
      />
      {speckles.map((s, i) => (
        <ellipse key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#B5732A" opacity="0.35" />
      ))}
    </svg>
  );
}

/** Butter pat that spreads across the toast, revealed via animated clip-path. */
function ButterLayer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 220" className={className} aria-hidden="true">
      <path
        d="M120 28
           C160 28, 190 50, 190 84
           L190 160
           C190 172, 180 180, 168 180
           L72 180
           C60 180, 50 172, 50 160
           L50 84
           C50 50, 80 28, 120 28 Z"
        fill="#FCE7A8"
      />
      <path
        d="M62 70 C90 60, 130 58, 168 74 C150 88, 170 100, 150 116 C120 104, 90 118, 66 104 C82 92, 56 84, 62 70 Z"
        fill="#FFF3C4"
        opacity="0.85"
      />
    </svg>
  );
}

function Knife({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={className} aria-hidden="true">
      <rect x="0" y="16" width="90" height="9" rx="4.5" fill="#D9D9D9" stroke="#3A1E13" strokeWidth="1.5" />
      <path d="M86 12 L150 8 C156 7.5, 160 12, 156 17 L90 27 Z" fill="#F1F1F1" stroke="#3A1E13" strokeWidth="1.5" />
    </svg>
  );
}

export function ToastHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const butterProgress = useTransform(scrollYProgress, [0.12, 0.62], [0, 1]);
  const butterClip = useTransform(
    butterProgress,
    (v) => `inset(0 ${Math.max(0, (1 - v) * 100)}% 0 0 round 999px)`,
  );

  const knifeX = useTransform(butterProgress, [0, 1], ["-30%", "115%"]);
  const knifeOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.6, 0.68], [0, 1, 1, 0]);

  const toastScale = useTransform(scrollYProgress, [0, 0.12], [0.88, 1]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  const wordmarkOpacity = useTransform(scrollYProgress, [0.62, 0.85], [0, 1]);
  const wordmarkY = useTransform(scrollYProgress, [0.62, 0.85], [24, 0]);

  const cueOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  if (prefersReducedMotion) {
    return (
      <section className="flex min-h-[85vh] flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <div className="relative h-52 w-56 sm:h-64 sm:w-64">
          <ToastSlice className="absolute inset-0 h-full w-full" />
          <ButterLayer className="absolute inset-0 h-full w-full" />
        </div>
        <Wordmark className="text-5xl sm:text-6xl" />
        <p className="font-display text-lg font-semibold text-teal">Explore. Experiment. Create.</p>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-[var(--header-h)] z-0 flex h-[calc(100vh-var(--header-h))] w-full flex-col items-center justify-center overflow-hidden bg-cream texture-grain">
        <motion.p
          style={{ opacity: introOpacity }}
          className="absolute top-24 font-display text-sm font-semibold uppercase tracking-[0.2em] text-toast-dark/50"
        >
          Scroll to spread the butter
        </motion.p>

        <motion.div style={{ scale: toastScale }} className="relative h-56 w-56 sm:h-72 sm:w-72">
          <ToastSlice className="absolute inset-0 h-full w-full drop-shadow-lg" />
          <motion.div style={{ clipPath: butterClip }} className="absolute inset-0 h-full w-full">
            <ButterLayer className="h-full w-full" />
          </motion.div>
          <motion.div
            style={{ x: knifeX, opacity: knifeOpacity }}
            className="absolute -top-2 left-0 w-28 -rotate-[18deg] sm:w-32"
          >
            <Knife className="h-auto w-full" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: wordmarkOpacity, y: wordmarkY }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <Wordmark className="text-5xl sm:text-7xl" />
          <p className="font-display text-base font-semibold tracking-wide text-teal sm:text-lg">
            Explore. Experiment. Create.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-10 flex flex-col items-center gap-1 text-toast-dark/60"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-widest">Keep scrolling</span>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M4 7 L10 13 L16 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
