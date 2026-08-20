import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Ways to get involved with tARTine — schools, teaching artists, volunteers, and donors who want to help bring art and experimentation to young people.",
};

const paths = [
  {
    title: "Schools",
    tone: "coral" as const,
    body: "Thinking about hosting a pilot workshop? We'd love to talk through what a first session could look like at your school.",
    cta: "School partnership inquiry",
  },
  {
    title: "Teaching artists",
    tone: "teal" as const,
    body: "Acting, visual art, writing, music, design — if you teach it and love working with young people, we want to meet you.",
    cta: "Teaching artist inquiry",
  },
  {
    title: "Volunteers",
    tone: "mustard" as const,
    body: "From workshop support to spreading the word, there are early, hands-on ways to help before we're at full scale.",
    cta: "Volunteer inquiry",
  },
  {
    title: "Donors",
    tone: "pink" as const,
    body: "Contributions help fund workshops, teaching artists, materials, and school partnerships as we get off the ground.",
    cta: "Donor inquiry",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <Container className="py-20">
        <SectionHeading
          eyebrow="Get Involved"
          title="There's a place for you here"
          description="tARTine is early-stage — which means the people who get involved now genuinely shape what this becomes."
          accent="coral"
        />
      </Container>

      <Container className="pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {paths.map((path) => (
            <Card key={path.title} tone={path.tone} className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-bold text-toast-dark">{path.title}</h2>
              <p className="text-toast-dark/80">{path.body}</p>
              <Button href={`/contact?reason=${encodeURIComponent(path.title)}`} variant="secondary" className="mt-auto w-fit">
                {path.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>

      <section id="support" className="scroll-mt-24 bg-toast-dark py-20 text-cream-soft">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-mustard">
            Support tARTine
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Donations help fund the first workshop.
          </h2>
          <p className="max-w-xl text-lg text-cream-soft/80">
            Contributions go toward teaching artists, workshop materials, and building school
            partnerships. We don&rsquo;t have confirmed dollar figures to share yet, so we&rsquo;re
            not going to invent them — we&rsquo;ll share real numbers as soon as we have them.
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="cursor-not-allowed rounded-full bg-cream-soft/20 px-6 py-3 font-display font-semibold text-cream-soft/60">
              Give via GoFundMe (coming soon)
            </span>
            <p className="text-xs text-cream-soft/50">
              We haven&rsquo;t launched a fundraising page yet — this button will connect once it
              exists.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Follow along" title="Instagram" accent="teal" />
          <p className="mt-4 max-w-2xl text-toast-dark/75">
            Our account isn&rsquo;t live yet — once it is, we&rsquo;ll link it here. In the
            meantime, here&rsquo;s what our first few posts will cover.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { n: "Post 1", t: "Introduction to tARTine" },
              { n: "Post 2", t: "What does “art as education” mean?" },
              { n: "Post 3", t: "Announcement / invitation for the first workshop" },
            ].map((post) => (
              <Card key={post.n} tone="cream" className="flex aspect-square flex-col items-center justify-center gap-2 text-center">
                <span className="font-display text-xs font-semibold uppercase tracking-wide text-coral">
                  {post.n}
                </span>
                <p className="font-display font-semibold text-toast-dark">{post.t}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
