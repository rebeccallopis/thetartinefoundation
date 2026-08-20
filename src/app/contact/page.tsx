import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with tARTine — school partnerships, teaching artist and volunteer inquiries, donor questions, or general hello.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;

  return (
    <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div>
        <SectionHeading eyebrow="Contact" title="Say hello" accent="pink" />
        <p className="mt-6 max-w-md text-toast-dark/75">
          Whether you&rsquo;re a school, a teaching artist, a future volunteer, or just curious —
          we&rsquo;d love to hear from you.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Card tone="cream" className="flex flex-col gap-1">
            <span className="font-display text-sm font-semibold text-toast-dark/50">Email</span>
            <a href="mailto:hello@tartine.org" className="font-semibold text-coral">
              hello@tartine.org
            </a>
            <span className="text-xs text-toast-dark/40">(placeholder — update once confirmed)</span>
          </Card>
          <Card tone="cream" className="flex flex-col gap-1">
            <span className="font-display text-sm font-semibold text-toast-dark/50">Instagram</span>
            <span className="text-toast-dark/60">Coming soon</span>
          </Card>
          <Card tone="cream" className="flex flex-col gap-1">
            <span className="font-display text-sm font-semibold text-toast-dark/50">
              Location / service area
            </span>
            <span className="text-toast-dark/80">Los Angeles, CA</span>
          </Card>
        </div>
      </div>

      <Card tone="white">
        <ContactForm initialReason={reason} />
      </Card>
    </Container>
  );
}
