"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { navLinks, cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b-2 border-toast-dark/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo markClassName="h-9 w-9" wordmarkClassName="text-xl sm:text-2xl" />
          <span className="sr-only">tARTine home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-sm font-semibold text-toast-dark/80 transition hover:text-coral",
                pathname === link.href && "text-coral",
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/get-involved" variant="primary" className="text-sm">
            Support tARTine
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-toast-dark lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? "open" : "closed"}
            className="relative block h-4 w-5"
          >
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
              className="absolute left-0 top-0 h-0.5 w-5 bg-toast-dark"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="absolute left-0 top-[7px] h-0.5 w-5 bg-toast-dark"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 14 }, open: { rotate: -45, y: 7 } }}
              className="absolute left-0 top-0 h-0.5 w-5 bg-toast-dark"
            />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t-2 border-toast-dark/10 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2.5 font-display text-base font-semibold text-toast-dark/80 hover:bg-mustard/30",
                    pathname === link.href && "bg-mustard/30 text-coral",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/get-involved" variant="primary" className="mt-2 justify-center">
                Support tARTine
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
