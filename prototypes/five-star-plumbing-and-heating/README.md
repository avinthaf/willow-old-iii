# Five Star Plumbing and Heating LLC — Website Prototype

Demo-quality prototype built for cold email outreach to Five Star Plumbing and Heating LLC, Parma OH.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

No environment variables are needed. All integrations are mocked client-side.

## Pages Built

| Page | Route | Notes |
|------|-------|-------|
| Home | `/` | Hero, trust bar, services preview, warranty callout, testimonials (verbatim), service area |
| Services | `/services` | Full 10-service card grid with bullet points, military discount callout |
| About | `/about` | Owner story, credentials, milestone timeline, The Five Star Standard values |
| Gallery | `/gallery` | Before & after placeholder grid by service category |
| Booking | `/booking` | 3-step mock flow: date picker → time slots → contact info → success screen |
| Contact | `/contact` | Mock quote form with 900ms fake delay and success state; no API route |

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (base-ui components)
- Vercel Analytics
- Design system: blue-collar preset (Roboto Slab headings, Inter body)

## Mock Integrations

All third-party services are mocked for the prototype:

- Contact form — client-side only, useState + 900ms delay + success flip. No email sent.
- Booking calendar — static August 2026 grid with hardcoded available/booked dates and time slots. No Cal.com.
- No Stripe, no Supabase, no Resend installed.

Production wiring order: contact form (Resend) → booking (Cal.com embed) → optional Supabase for lead storage.

## Pitch Notes

Five Star Plumbing and Heating has the strongest review profile in the Parma market (5.0 stars, 80+ Google reviews, BBB A+) but their current WordPress site has a 2014 copyright footer, no contact form, no booking capability, no CTA buttons, and no mention of their one-year warranty or military discount. Every competitor — WyattWorks, 1st Choice Plumbing, Mayer Plumbing — has a more functional site. The single biggest differentiator this prototype exploits is owner identity: customers consistently refer to Kamran by name in reviews ("Kamran was on time," "Kamran explained everything"), so his name appears throughout the hero and about page in a way no multi-truck competitor can replicate. The prototype also surfaces the free one-year warranty as a visual badge and calls out the military discount prominently — two conversion tools none of the three main competitors currently use on their sites.
