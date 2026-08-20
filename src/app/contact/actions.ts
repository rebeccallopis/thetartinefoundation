"use server";

type ContactPayload = {
  name: string;
  email: string;
  organization: string;
  reason: string;
  message: string;
  company: string; // honeypot — real users never fill this in
};

export type ContactResult = { ok: true; delivered: boolean } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 120, email: 200, organization: 200, reason: 60, message: 3000 };

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

export async function submitContactForm(_: ContactResult | null, formData: FormData): Promise<ContactResult> {
  const payload: ContactPayload = {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    organization: clean(formData.get("organization")),
    reason: clean(formData.get("reason")),
    message: clean(formData.get("message")),
    company: clean(formData.get("company")),
  };

  // Honeypot: bots fill every field, humans never see this one.
  if (payload.company) {
    return { ok: true, delivered: true };
  }

  if (!payload.name || payload.name.length > MAX_LENGTHS.name) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!EMAIL_RE.test(payload.email) || payload.email.length > MAX_LENGTHS.email) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!payload.message || payload.message.length > MAX_LENGTHS.message) {
    return { ok: false, error: "Please enter a message (up to 3000 characters)." };
  }
  if (payload.organization.length > MAX_LENGTHS.organization || payload.reason.length > MAX_LENGTHS.reason) {
    return { ok: false, error: "One of the fields is too long — please shorten it." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_INBOX_EMAIL;

  if (!apiKey || !toAddress) {
    // No email provider configured yet — don't pretend to deliver something we can't.
    return { ok: true, delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "tARTine website <onboarding@resend.dev>",
      to: [toAddress],
      reply_to: payload.email,
      subject: `New contact form message${payload.reason ? ` — ${payload.reason}` : ""}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nOrganization/School: ${payload.organization || "—"}\nReason: ${payload.reason || "—"}\n\n${payload.message}`,
    }),
  });

  if (!res.ok) {
    return { ok: false, error: "Something went wrong sending your message. Please try again." };
  }

  return { ok: true, delivered: true };
}
