import { Fact } from "@/content/types";
import { Card } from "@/components/Card";
import { ResearchCitation } from "@/components/ResearchCitation";

const categoryTone: Record<Fact["category"], "coral" | "teal" | "mustard" | "pink"> = {
  Creativity: "coral",
  "Arts Education": "teal",
  "STEM + STEAM": "mustard",
  "Child Development": "pink",
  Learning: "coral",
  Experimentation: "teal",
  Collaboration: "mustard",
};

export function FactCard({ fact }: { fact: Fact }) {
  const tone = categoryTone[fact.category];
  const toneClasses: Record<typeof tone, string> = {
    coral: "bg-coral/10 text-jam",
    teal: "bg-teal/15 text-teal",
    mustard: "bg-mustard/20 text-toast",
    pink: "bg-pink/15 text-pink",
  };

  return (
    <Card tone="white" className="flex h-full flex-col gap-4">
      <span
        className={`w-fit rounded-full px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide ${toneClasses[tone]}`}
      >
        {fact.category}
      </span>
      <h3 className="font-display text-xl font-bold text-toast-dark">{fact.title}</h3>
      <p className="text-toast-dark/85">{fact.statistic}</p>
      <p className="text-sm text-toast-dark/60">{fact.summary}</p>
      <div className="mt-auto pt-2">
        <ResearchCitation fact={fact} />
      </div>
    </Card>
  );
}
