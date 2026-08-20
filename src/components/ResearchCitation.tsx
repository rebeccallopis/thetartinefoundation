import { Fact } from "@/content/types";

export function ResearchCitation({ fact }: { fact: Fact }) {
  return (
    <div className="border-t border-toast-dark/10 pt-3 text-xs text-toast-dark/60">
      <p className="font-semibold text-toast-dark/75">{fact.source}</p>
      <p>
        {fact.organization} · {fact.publicationDate}
      </p>
      <a
        href={fact.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-block font-semibold text-coral underline decoration-mustard underline-offset-2 hover:text-jam"
      >
        View source ↗
      </a>
    </div>
  );
}
