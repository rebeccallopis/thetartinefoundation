import { Button } from "@/components/Button";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  tone?: "coral" | "teal" | "toast";
};

const tones = {
  coral: "bg-coral text-cream-soft",
  teal: "bg-teal text-cream-soft",
  toast: "bg-toast-dark text-cream-soft",
};

export function CTA({ eyebrow, title, description, primary, secondary, tone = "toast" }: CTAProps) {
  return (
    <section className={`rounded-[2.5rem] px-6 py-14 text-center sm:px-12 ${tones[tone]}`}>
      <div className="mx-auto max-w-2xl">
        {eyebrow && (
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.15em] text-mustard">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg opacity-90">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={primary.href} variant="secondary">
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="ghost" className="text-cream-soft decoration-mustard">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
