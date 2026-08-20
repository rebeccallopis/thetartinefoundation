import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgramCard } from "@/components/ProgramCard";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "tARTine's first workshop concept — an after-school acting fundamentals session for ages 7–15 — plus future program ideas.",
};

export default function ProgramsPage() {
  return (
    <>
      <Container className="py-20">
        <SectionHeading
          eyebrow="Programs"
          title="Starting with one workshop, done well"
          description="We'd rather launch one strong program than announce five vague ones. Here's what we're building first, and what could come after it."
          accent="pink"
        />
      </Container>

      <Container className="pb-6">
        <Card tone="coral" className="flex flex-col gap-3">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-jam">
            Important note
          </p>
          <p className="text-toast-dark/85">
            The workshop below is a concept, not a scheduled program. Before we run a single
            session with students, we&rsquo;re confirming school partnership, safety, and legal
            requirements with qualified counsel and the applicable school or district. Nothing
            on this page should be read as a launch announcement.
          </p>
        </Card>
      </Container>

      <Container className="py-10">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </Container>

      <Container className="pb-20">
        <CTA
          eyebrow="Want to help shape this?"
          title="We're looking for teaching artists and school partners."
          description="If you teach acting, visual art, writing, music, or design — or you're at a school that might want to host a pilot session — we'd love to talk."
          primary={{ href: "/get-involved", label: "Get Involved" }}
          secondary={{ href: "/contact", label: "Contact us" }}
          tone="teal"
        />
      </Container>
    </>
  );
}
