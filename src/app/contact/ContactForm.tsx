"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactResult } from "./actions";

const reasons = [
  "School partnership inquiry",
  "Teaching artist inquiry",
  "Volunteer inquiry",
  "Donor inquiry",
  "Something else",
];

export function ContactForm({ initialReason }: { initialReason?: string }) {
  const [state, formAction, pending] = useActionState<ContactResult | null, FormData>(
    submitContactForm,
    null,
  );

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {/* honeypot — hidden from real users via CSS, not display:none, to fool basic bots */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block font-display text-sm font-semibold text-toast-dark">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          className="w-full rounded-xl border-2 border-toast-dark/20 bg-white px-4 py-3 text-toast-dark focus-visible:border-coral"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block font-display text-sm font-semibold text-toast-dark">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full rounded-xl border-2 border-toast-dark/20 bg-white px-4 py-3 text-toast-dark focus-visible:border-coral"
        />
      </div>

      <div>
        <label htmlFor="organization" className="mb-1 block font-display text-sm font-semibold text-toast-dark">
          Organization / School <span className="font-normal text-toast-dark/50">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          maxLength={200}
          className="w-full rounded-xl border-2 border-toast-dark/20 bg-white px-4 py-3 text-toast-dark focus-visible:border-coral"
        />
      </div>

      <div>
        <label htmlFor="reason" className="mb-1 block font-display text-sm font-semibold text-toast-dark">
          Reason for contacting
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue={initialReason && reasons.includes(initialReason) ? initialReason : ""}
          className="w-full rounded-xl border-2 border-toast-dark/20 bg-white px-4 py-3 text-toast-dark focus-visible:border-coral"
        >
          <option value="" disabled>
            Choose one
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block font-display text-sm font-semibold text-toast-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          className="w-full rounded-xl border-2 border-toast-dark/20 bg-white px-4 py-3 text-toast-dark focus-visible:border-coral"
        />
      </div>

      <p className="text-xs text-toast-dark/60">
        We only use this information to respond to your message — we don&rsquo;t sell or share
        it, and we won&rsquo;t add you to a mailing list without asking first.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-fit rounded-full bg-coral px-6 py-3 font-display font-semibold text-cream-soft shadow-[3px_3px_0_0_var(--color-toast-dark)] transition-all hover:bg-jam hover:shadow-[1px_1px_0_0_var(--color-toast-dark)] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      {state?.ok === true && state.delivered && (
        <p role="status" className="rounded-xl bg-teal/15 px-4 py-3 text-sm font-semibold text-teal">
          Thanks — your message is on its way. We&rsquo;ll get back to you soon.
        </p>
      )}
      {state?.ok === true && !state.delivered && (
        <p role="status" className="rounded-xl bg-mustard/20 px-4 py-3 text-sm text-toast-dark">
          Our contact form isn&rsquo;t fully wired up to email yet — in the meantime, please
          reach us directly at{" "}
          <a href="mailto:hello@tartine.org" className="font-semibold underline">
            hello@tartine.org
          </a>
          .
        </p>
      )}
      {state?.ok === false && (
        <p role="alert" className="rounded-xl bg-jam/10 px-4 py-3 text-sm font-semibold text-jam">
          {state.error}
        </p>
      )}
    </form>
  );
}
