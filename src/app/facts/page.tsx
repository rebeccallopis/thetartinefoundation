import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FactCard } from "@/components/FactCard";
import { Card } from "@/components/Card";
import { facts, factCategories } from "@/content/facts";

export const metadata: Metadata = {
  title: "The Facts",
  description:
    "Research on arts education, creativity, STEAM, and youth development — every claim linked to a real, checkable source.",
};

export default function FactsPage() {
  return (
    <>
      <Container className="py-20">
        <SectionHeading
          eyebrow="The Facts"
          title="What the research actually shows"
          description="We don't invent statistics. Every fact below links to a real source — peer-reviewed research, government data, or a major research institution — with the organization, publication date, and a direct link."
          accent="mustard"
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {factCategories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border-2 border-toast-dark/15 px-3 py-1 text-xs font-semibold text-toast-dark/60"
            >
              {cat}
            </span>
          ))}
        </div>
      </Container>

      <Container className="pb-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => (
            <FactCard key={fact.title} fact={fact} />
          ))}
        </div>
      </Container>

      <Container className="pb-20">
        <Card tone="teal" className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-bold text-toast-dark">
            Have a source we should add?
          </h2>
          <p className="text-toast-dark/75">
            This page is built to grow — new research can be added without redesigning
            anything. If you know a peer-reviewed study, government report, or research from
            an institution like UNESCO, the U.S. Department of Education, or the National
            Endowment for the Arts that belongs here,{" "}
            <a href="/contact" className="font-semibold text-teal underline">
              let us know
            </a>
            .
          </p>
        </Card>
      </Container>
    </>
  );
}
