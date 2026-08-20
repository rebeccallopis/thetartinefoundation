import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t-2 border-toast-dark/10 bg-toast-dark text-cream-soft">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo mode="dark-bg" markClassName="h-9 w-9 text-mustard" wordmarkClassName="text-2xl text-cream-soft" />
            <p className="mt-4 max-w-sm text-sm text-cream-soft/75">
              tARTine is an early-stage foundation bringing art, experimentation, and
              multidisciplinary learning to young people. We&rsquo;re building this from the
              ground up — thanks for exploring it with us.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-mustard">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream-soft/80 hover:text-coral">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-mustard">
              Connect
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-cream-soft/80">
              <li>
                <a href="mailto:hello@tartine.org" className="hover:text-coral">
                  hello@tartine.org
                </a>
                <span className="ml-1 text-xs text-cream-soft/50">(placeholder)</span>
              </li>
              <li className="text-cream-soft/50">
                Instagram — coming soon
              </li>
              <li className="text-cream-soft/50">Los Angeles, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream-soft/15 pt-6 text-xs text-cream-soft/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} tARTine. All rights reserved.</p>
          <p>Made with butter, paint, and paper.</p>
        </div>
      </div>
    </footer>
  );
}
