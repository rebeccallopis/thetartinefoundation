# tARTine — Explore. Experiment. Create.

Public website for tARTine, an early-stage foundation bringing art, experimentation, and
multidisciplinary learning to young people. Built with Next.js (App Router), TypeScript,
Tailwind CSS v4, and Motion (Framer Motion) for the scroll-linked toast hero.

## What's here

- **Interactive toast hero** ([`src/components/ToastHero.tsx`](src/components/ToastHero.tsx)) —
  a scroll-scrubbed animation: toast appears, butter spreads as you scroll, the tARTine
  wordmark reveals. Has a static, non-animated fallback for `prefers-reduced-motion`.
- **Pages**: Home, About, Mission + Vision, Programs, The Facts, Team, Get Involved, Contact
  (`src/app/*`).
- **Design system**: color/type tokens in [`src/app/globals.css`](src/app/globals.css), shared
  components in `src/components/`.
- **Content data**: `src/content/facts.ts`, `team.ts`, `programs.ts` — structured so a
  non-technical editor (or a future CMS) can update entries without touching components.
- **Logo system**: `src/components/Logo.tsx` (mark, wordmark, full lockup, badge) and
  `public/favicon.svg`.

## Content honesty rules (please keep following these)

This site is for an organization that is genuinely just getting started. Per the original
brief:

- Every statistic on **The Facts** must trace to a real, checkable source — see
  `src/content/facts.ts` for the citation format. Don't add a stat without a source.
- Team members, program launch dates, funding numbers, and school partnerships must not be
  presented as confirmed until they actually are. Use the existing "in development" /
  "in conversation" status patterns.
- Don't invent an Instagram handle, GoFundMe URL, or contact email — the placeholders in
  `Footer.tsx`, `get-involved/page.tsx`, and `contact/page.tsx` are intentionally marked as
  placeholders. Replace them once the real ones exist.

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The contact form (`src/app/contact/actions.ts`) works without any configuration — it validates
and sanitizes input, but if no email provider is configured it tells the visitor to email you
directly instead of pretending to deliver a message it can't send.

To make it actually send email, set these (e.g. in `.env.local`, and in your host's
environment variable settings for production) using a [Resend](https://resend.com) account:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_INBOX_EMAIL=hello@your-real-domain.org
```

Never commit `.env.local` — it's already covered by `.gitignore`.

## Before you go live

A few placeholders need real values — search for "placeholder" and "coming soon" across the
codebase, or check these specifically:

- `src/app/layout.tsx` — `metadataBase` / `siteUrl` (currently
  `https://thetartinefoundation.vercel.app` — update once you have a custom domain)
- `src/app/sitemap.ts` and `src/app/robots.ts` — same placeholder domain
- `src/components/Footer.tsx` and `src/app/contact/page.tsx` — email address
- `src/app/get-involved/page.tsx` — Instagram link and GoFundMe/fundraising URL
- `src/content/team.ts` — replace once Dylan, Mariam, Lionel, and the founder profile are
  confirmed
- `public/favicon.svg` and `src/app/opengraph-image.tsx` — fine as-is, but swap if the logo
  changes

## Deploying (Vercel)

1. This repo lives on GitHub at
   [rllopis1234/thetartinefoundation](https://github.com/rllopis1234/thetartinefoundation).
2. Import it at [vercel.com/new](https://vercel.com/new) — pick that repo, and name the Vercel
   project `thetartinefoundation` to match (so it deploys to
   `thetartinefoundation.vercel.app`).
3. Add the environment variables above in the Vercel project settings.
4. Deploy. Add a custom domain under Project → Settings → Domains once you have one, and
   update `metadataBase` / sitemap / robots to match it.

## What's intentionally not in this repo

Per the original project brief, internal-only research and planning materials — the Los
Angeles school outreach list, legal/safety compliance checklist for working with minors, and
detailed workshop run-of-show — should **not** be published on the public site. Keep those as
separate internal documents, not as pages here.
