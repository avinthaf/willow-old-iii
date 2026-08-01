# Euclid City Plumbing Service — Website Prototype

Demo-quality website prototype for Euclid City Plumbing Service Inc (also operates as Larick Plumbing), a 115-year-old family-owned plumbing contractor in Euclid, OH with zero current web presence.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The site works fully without any env vars — the contact form shows a success state, but no emails are sent and no leads are stored until you wire up the backend.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, trust stats, services preview, about teaser, testimonials |
| `/services` | Full 8-service card grid with details |
| `/about` | Larick family story, licenses, timeline |
| `/gallery` | Project gallery (photo placeholders — owner supplies photos before launch) |
| `/booking` | Cal.com inline embed for online scheduling |
| `/contact` | Lead capture form — saves to Supabase, sends emails via Resend |

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values.

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@euclidcityplumbing.com
```

### Supabase setup

1. Create a project at https://supabase.com
2. Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_type text,
  message text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_only" ON leads USING (false);
```

### Resend setup

1. Create an account at https://resend.com
2. Add and verify the domain you want to send from
3. Create an API key and paste it into `.env.local`

### Cal.com setup (Booking page)

The booking page uses `@calcom/embed-react` with the cal link `euclidcityplumbing/service-call`. Before launch:

1. Owner creates an account at https://cal.com
2. Creates an event type called "Service Call"
3. Their username becomes the `calLink` value in `components/booking-embed.tsx`

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + shadcn/ui (base-ui components)
- Design system: `blue-collar` preset (Roboto Slab + Inter, navy/copper palette)
- Vercel Analytics
- Resend (contact form emails)
- Supabase (lead storage)
- Cal.com embed-react (online booking)

## Pitch Notes

Euclid City Plumbing Service is a 115-year-old, fourth-generation family business with zero web presence — no website, unclaimed Google Business Profile, inconsistent phone numbers across directories. They have a 5.0-star rating across all platforms and documented same-day service capability, but are completely invisible to anyone searching for plumbers in Euclid or Northeast Ohio.

Three of their direct competitors (Bellman Plumbing, Approved Plumbing, Critical Plumbing) have functioning websites — none of them display actual customer review quotes, none make same-day service a hero-level promise, and none have been in business longer than 86 years. This prototype does all three.

The pitch: at 115 years, Lou and Hugh Larick have more credibility than any plumber in Northeast Ohio with a working website. This site shows what that credibility looks like when someone can actually find them.

Owner contact: euclidcityplumbing@att.net | (216) 354-4770 | 23745 Lake Shore Blvd, Euclid, OH 44123
