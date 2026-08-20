import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Mission + Vision",
  description:
    "tARTine's mission and vision: using art as a gateway to exploration, experimentation, and interdisciplinary learning for young people.",
};

const visionWords = [
  "Make things",
  "Ask questions",
  "Experiment",
  "Perform",
  "Draw",
  "Build",
  "Collaborate",
  "Fail safely",
  "Try again",
  "Connect seemingly different subjects",
];

export default function MissionPage() {
  return (
    <>
      <Container className="py-20">
        <SectionHeading eyebrow="Mission + Vision" title="Why we're doing this" accent="teal" />
      </Container>

      <section className="py-4">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Card tone="coral" className="flex flex-col gap-4">
            <span className="font-display text-sm font-semibold uppercase tracking-wide text-coral">
              Mission
            </span>
            <p className="text-2xl font-semibold text-toast-dark">
              tARTine uses art as a gateway to exploration, experimentation, collaboration,
              confidence, communication, and interdisciplinary learning.
            </p>
            <p className="text-toast-dark/75">
              Art isn&rsquo;t the destination — it&rsquo;s the way in. A kid who learns to
              improvise a scene is practicing the same muscle they&rsquo;ll need to improvise a
              science experiment, a hard conversation, or a first draft. We build workshops
              around that connective tissue, not around performance for its own sake.
            </p>
          </Card>

          <Card tone="teal" className="flex flex-col gap-4">
            <span className="font-display text-sm font-semibold uppercase tracking-wide text-teal">
              Vision
            </span>
            <p className="text-2xl font-semibold text-toast-dark">
              A world where young people are encouraged to explore without fear of getting it
              wrong.
            </p>
            <p className="text-toast-dark/75">That looks like kids who:</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-toast-dark/80">
              {visionWords.map((word) => (
                <li key={word} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {word}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="bg-toast-dark py-16 text-cream-soft">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Art is not an extracurricular afterthought.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-soft/80">
            It&rsquo;s a powerful way of learning. We think a school day that treats art as
            optional is leaving a whole toolkit — for problem-solving, empathy, and
            communication — on the table. <a href="/facts" className="text-mustard underline">The research backs this up</a>.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <CTA
          eyebrow="See it in action"
          title="This is what our first workshop is built around."
          description="Our acting fundamentals workshop is a small, concrete step toward this vision."
          primary={{ href: "/programs", label: "See the workshop" }}
          secondary={{ href: "/facts", label: "Read the research" }}
          tone="coral"
        />
      </Container>
    </>
  );
}
