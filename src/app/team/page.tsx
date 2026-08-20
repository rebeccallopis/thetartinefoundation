import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { Card } from "@/components/Card";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description: "The people building tARTine — founders, teaching artists, advisors, and collaborators.",
};

export default function TeamPage() {
  return (
    <>
      <Container className="py-20">
        <SectionHeading
          eyebrow="Team"
          title="Who's behind tARTine"
          description="We're a small, early team. Profiles below will fill in as roles are confirmed — we'd rather show you an honest work-in-progress than fake credentials."
          accent="teal"
        />
      </Container>

      <Container className="pb-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>

      <Container className="pb-20">
        <Card tone="mustard" className="flex flex-col gap-3">
          <h2 className="font-display text-lg font-bold text-toast-dark">
            Interested in joining as a teaching artist, advisor, or volunteer?
          </h2>
          <p className="text-toast-dark/80">
            We&rsquo;re actively building this team.{" "}
            <a href="/contact" className="font-semibold text-jam underline">
              Reach out
            </a>{" "}
            — tell us what you do and how you&rsquo;d want to be involved.
          </p>
        </Card>
      </Container>
    </>
  );
}
