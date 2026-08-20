import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "What is tARTine, why it exists, what it does, and who it's for — an early-stage foundation bringing art and experimentation to young people.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-20">
        <SectionHeading eyebrow="About" title="What is tARTine?" accent="coral" />
        <p className="mt-6 max-w-3xl text-lg text-toast-dark/80">
          tARTine is an early-stage foundation dedicated to bringing art, experimentation, and
          multidisciplinary learning to young people. We&rsquo;re not a big institution with a
          long history — we&rsquo;re just getting started, and we&rsquo;d rather be honest about
          that than pretend otherwise.
        </p>
      </Container>

      <section className="bg-cream-soft py-16">
        <Container className="grid gap-8 md:grid-cols-3">
          <Card tone="coral">
            <h2 className="font-display text-xl font-bold text-toast-dark">Why does it exist?</h2>
            <p className="mt-3 text-toast-dark/75">
              Because art gets treated like an extra — something you fit in if there&rsquo;s
              time left. We think it belongs at the center of how kids learn to think, question,
              and connect ideas across subjects. See{" "}
              <a href="/facts" className="text-coral underline decoration-mustard">
                the research
              </a>{" "}
              that backs that up.
            </p>
          </Card>
          <Card tone="teal">
            <h2 className="font-display text-xl font-bold text-toast-dark">What does it do?</h2>
            <p className="mt-3 text-toast-dark/75">
              We&rsquo;re building hands-on workshops for young people, starting with an
              after-school session in acting fundamentals. Over time, we want to add visual
              art, writing, music, design, and science-meets-art experiments. See{" "}
              <a href="/programs" className="text-teal underline decoration-mustard">
                Programs
              </a>{" "}
              for where things stand.
            </p>
          </Card>
          <Card tone="mustard">
            <h2 className="font-display text-xl font-bold text-toast-dark">Who is it for?</h2>
            <p className="mt-3 text-toast-dark/75">
              Young people roughly ages 7 to 15 — old enough to dig into real ideas, young
              enough that curiosity hasn&rsquo;t been trained out of them yet. And for the
              schools, teaching artists, and families who want to build this with us.
            </p>
          </Card>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-toast-dark">
              Young, ambitious, and a little experimental — on purpose
            </h2>
            <p className="mt-4 text-toast-dark/75">
              We&rsquo;d rather try something small and real than announce something big and
              vague. That means our first workshop is one hour, one age group, one school at a
              time. It also means this website says &ldquo;we&rsquo;re building&rdquo; instead
              of &ldquo;we serve thousands of students&rdquo; — because the first is true, and
              we want to earn the second.
            </p>
          </div>
          <Card tone="white" className="border-dashed">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-toast-dark/50">
              Photo placeholder
            </h3>
            <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl bg-toast-dark/5 text-sm text-toast-dark/40">
              Workshop / artwork photography goes here
            </div>
          </Card>
        </div>
      </Container>

      <Container className="pb-20">
        <CTA
          eyebrow="Curious?"
          title="See what we're building next."
          description="Read our Mission + Vision, or reach out if you want to help shape the first workshop."
          primary={{ href: "/mission", label: "Mission + Vision" }}
          secondary={{ href: "/contact", label: "Contact us" }}
          tone="coral"
        />
      </Container>
    </>
  );
}
