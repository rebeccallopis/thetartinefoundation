import { Program } from "@/content/types";
import { Card } from "@/components/Card";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card tone={program.status === "in-development" ? "coral" : "white"} className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-toast-dark">{program.title}</h3>
        <span className="shrink-0 rounded-full bg-toast-dark/10 px-3 py-1 text-xs font-semibold text-toast-dark/70">
          {program.status === "in-development" ? "In development" : "Planned"}
        </span>
      </div>
      <dl className="grid grid-cols-2 gap-2 text-sm text-toast-dark/70">
        <div>
          <dt className="font-display font-semibold text-toast-dark/50">Ages</dt>
          <dd>{program.ageRange}</dd>
        </div>
        <div>
          <dt className="font-display font-semibold text-toast-dark/50">Format</dt>
          <dd>{program.format}</dd>
        </div>
      </dl>
      <p className="text-toast-dark/85">{program.summary}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {program.topics.map((topic) => (
          <li
            key={topic}
            className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-toast-dark/70"
          >
            {topic}
          </li>
        ))}
      </ul>
    </Card>
  );
}
