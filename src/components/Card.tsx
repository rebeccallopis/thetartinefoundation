import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "cream" | "white" | "coral" | "teal" | "mustard" | "pink";
};

const tones = {
  cream: "bg-cream-soft",
  white: "bg-white",
  coral: "bg-coral/10",
  teal: "bg-teal/10",
  mustard: "bg-mustard/15",
  pink: "bg-pink/10",
};

export function Card({ children, className, tone = "white" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border-2 border-toast-dark/10 p-6 shadow-sm",
        tones[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
