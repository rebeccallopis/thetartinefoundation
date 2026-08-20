import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "coral" | "teal" | "mustard" | "pink";
  className?: string;
};

const accents = {
  coral: "decoration-coral",
  teal: "decoration-teal",
  mustard: "decoration-mustard",
  pink: "decoration-pink",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "coral",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.15em] text-coral">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold text-toast-dark underline decoration-wavy decoration-4 underline-offset-8 sm:text-4xl",
          accents[accent],
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg text-toast-dark/75",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
