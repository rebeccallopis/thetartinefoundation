import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-coral text-cream-soft hover:bg-jam shadow-[3px_3px_0_0_var(--color-toast-dark)] hover:shadow-[1px_1px_0_0_var(--color-toast-dark)] hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-cream-soft text-toast-dark border-2 border-toast-dark hover:bg-mustard shadow-[3px_3px_0_0_var(--color-toast-dark)] hover:shadow-[1px_1px_0_0_var(--color-toast-dark)] hover:translate-x-[2px] hover:translate-y-[2px]",
  ghost: "text-toast-dark underline decoration-mustard decoration-4 underline-offset-4 hover:text-coral",
};

export function Button({ href, children, variant = "primary", className, external }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold transition-all duration-150",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
