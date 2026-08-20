import { ToastHero } from "@/components/ToastHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FactCard } from "@/components/FactCard";
import { ProgramCard } from "@/components/ProgramCard";
import { TeamCard } from "@/components/TeamCard";
import { facts } from "@/content/facts";
import { programs } from "@/content/programs";
import { team } from "@/content/team";

export default function Home() {
  const featuredFacts = facts.slice(0, 3);
  const featuredProgram = programs[0];
  const featuredTeam = team.slice(0, 3);

  return (
    <>
      <ToastHero />

      {/* Hero statement */}
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <h1 className="max-w-3xl font-display text-4xl font-bold text-toast-dark sm:text-5xl">
          Art is how we learn to explore.
        </h1>
        <p className="max-w-2xl text-lg text-toast-dark/75">
          tARTine creates opportunities for young people to explore ideas through art,
          experimentation, and multidisciplinary learning — because a great idea, like a good
          spread, needs room to reach every corner.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/about" variant="primary">
            Explore tARTine
          </Button>
          <Button href="/get-involved" variant="secondary">
            Get Involved
          </Button>
        </div>
      </Container>

      {/* What is tARTine? */}
      <section className="bg-cream-soft py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="What is tARTine?"
              title="A young foundation, building something hands-on."
              accent="teal"
            />
            <p className="mt-6 text-lg text-toast-dark/80">
              tARTine is an early-stage foundation bringing art, experimentation, and
              multidisciplinary learning to young people. We&rsquo;re starting small and
              deliberately — one workshop, one relationship, one idea at a time — because the
              best things, like a good tartine, are made by hand.
            </p>
            <p className="mt-4 text-toast-dark/70">
              We&rsquo;re building this from the ground up. That means you&rsquo;ll see honest
              language here about what exists today and what we&rsquo;re still working on — not
              inflated claims about scale we haven&rsquo;t reached yet.
            </p>
            <Button href="/about" variant="ghost" className="mt-6">
              Read our full story →
            </Button>
          </div>
          <Card tone="mustard" className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold text-toast-dark">Why the name?</h3>
            <p className="text-toast-dark/80">
              A tartine is an open-faced slice of bread, spread with something good and topped
              with whatever you&rsquo;re inspired to add. <strong>tARTine</strong> spreads
              art — with ART hiding in plain sight, right in the middle of the word.
            </p>
          </Card>
        </Container>
      </section>

      {/* Mission + Vision */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card tone="coral" className="flex flex-col gap-4">
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-coral">
                Mission
              </span>
              <p className="text-xl text-toast-dark">
                We use art as a gateway to exploration, experimentation, collaboration,
                confidence, communication, and interdisciplinary learning.
              </p>
            </Card>
            <Card tone="teal" className="flex flex-col gap-4">
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-teal">
                Vision
              </span>
              <p className="text-xl text-toast-dark">
                A world where young people are encouraged to make things, ask questions,
                experiment, perform, draw, build, collaborate, fail safely, try again, and
                connect seemingly different subjects.
              </p>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button href="/mission" variant="ghost">
              Read our full Mission + Vision →
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Art */}
      <section className="bg-toast-dark py-20 text-cream-soft">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Art is not an extracurricular afterthought.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cream-soft/80">
            It&rsquo;s a powerful way of learning — one that teaches kids to sit with
            uncertainty, iterate on a bad first draft, and find their voice. That&rsquo;s the
            case we make on <span className="text-mustard">The Facts</span>, backed by real
            research, not talking points.
          </p>
        </Container>
      </section>

      {/* Facts preview */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="The Facts"
            title="What the research actually shows"
            description="Every claim here links to a real, checkable source — peer-reviewed studies, government data, and major research institutions."
            accent="mustard"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredFacts.map((fact) => (
              <FactCard key={fact.title} fact={fact} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/facts" variant="secondary">
              See all the research
            </Button>
          </div>
        </Container>
      </section>

      {/* Programs preview */}
      <section className="bg-cream-soft py-20">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Our first workshop"
            description="Small, hands-on, and honest about where it stands: we're confirming school and safety requirements before we schedule a single session."
            accent="pink"
          />
          <div className="mt-10 max-w-xl">
            <ProgramCard program={featuredProgram} />
          </div>
          <div className="mt-8">
            <Button href="/programs" variant="ghost">
              See all program concepts →
            </Button>
          </div>
        </Container>
      </section>

      {/* Team preview */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Team" title="Who's behind tARTine" accent="teal" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeam.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/team" variant="ghost">
              Meet the full team →
            </Button>
          </div>
        </Container>
      </section>

      {/* Get involved + Fundraiser */}
      <section className="pb-20">
        <Container className="flex flex-col gap-8">
          <CTA
            eyebrow="Get Involved"
            title="Help us spread the butter a little further."
            description="Whether you're a school, a teaching artist, or someone who just believes kids deserve more room to create — there's a place for you here."
            primary={{ href: "/get-involved", label: "Get Involved" }}
            secondary={{ href: "/contact", label: "Contact us" }}
            tone="coral"
          />
          <CTA
            eyebrow="Support tARTine"
            title="Chip in to help us build the first workshop."
            description="Donations help fund teaching artists, materials, and school partnerships as we get off the ground. Our fundraising page is coming soon — check back shortly."
            primary={{ href: "/get-involved#support", label: "Support tARTine" }}
            tone="teal"
          />
        </Container>
      </section>
    </>
  );
}
