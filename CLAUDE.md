# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Willow — Website Sales Agent

This project finds local businesses in Cleveland, OH and the Greater Cleveland Area that need a new or upgraded website, then builds cold-email-ready prototype sites to close deals.

## The pipeline

Every lead moves through three stages in order:

```
lead-hunter → scout → developer
```

| Stage | Trigger phrases | Subagent | Output |
|-------|----------------|----------|--------|
| Find leads | "find me plumbers", "hunt for auto shops", "go find prospects" | `lead-hunter` | `leads/candidates_<YYYYMMDD>.md` |
| Research a lead | "scout X", "research X", "gather info on X" | `scout` | `prototypes/<slug>/scout/` |
| Build prototype | "build a site for X", "develop the X site" | `developer` | `prototypes/<slug>/` |

Always delegate to the named subagent — do not attempt these tasks inline.

## Repository layout

```
design-systems/          ← CSS preset files (copy into each prototype)
  blue-collar.css        — Plumbing, HVAC, Electrical, Roofing, Contracting
  warm-family.css        — Salons, Restaurants, Florists, Spas, Childcare
  trust-professional.css — Law, Medical, Finance, Chiropractic
  fresh-outdoor.css      — Landscaping, Lawn care, Pest control, Cleaning
  industrial.css         — Auto repair, Welding, Towing, Machine shops
leads/
  candidates_<YYYYMMDD>.md   ← one file per lead-hunter run
prototypes/
  <business-slug>/
    scout/               ← profile.md, competitors.md, reviews.md
    src/app/             ← Next.js App Router pages
    src/components/      ← Navbar, Footer, shared UI
    src/app/design-system.css  ← copied from design-systems/ and customised
    public/images/       ← generated or downloaded images
```

## Prototype tech stack

All prototypes use the same stack: **Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui (base-nova)**. No Pages Router, no class components.

### Design token system

Each prototype copies a preset from `design-systems/` into `src/app/design-system.css`, imported as the first line of `globals.css`. The preset defines `--ds-*` tokens:

- `--ds-primary` / `--ds-primary-fg` — main brand color and its foreground
- `--ds-secondary` / `--ds-secondary-fg` — accent/highlight color
- `--ds-accent` / `--ds-accent-fg` — tertiary accent (e.g. gold)
- `--ds-bg` / `--ds-surface` — page background and card background
- `--ds-text` / `--ds-text-muted` — body text and muted text
- `--ds-border` — border color
- `--ds-font-heading` / `--ds-font-body` — font stacks
- `--ds-radius` / `--ds-radius-lg` — border radius values

The preset also redefines shadcn's `--primary`, `--secondary`, `--accent`, `--radius` etc., so shadcn components inherit the palette automatically.

**Critical rule:** Never hardcode hex colors in components — always use `var(--ds-*)` tokens. If `--ds-secondary` is changed at the token level, every component using it updates automatically. Hardcoding breaks this and causes palette-wide failures when the design changes.

### shadcn/ui known gotchas

- **`cursor-pointer`** — shadcn v4 omits it; add `cursor-pointer` to the base `cva` class in `components/ui/button.tsx` after `npx shadcn@latest init`
- **Outline buttons on dark backgrounds** — `variant="outline"` applies `bg-background` (white). Override via inline style: `style={{ color: "white", borderColor: "rgba(255,255,255,0.6)", background: "transparent" }}`
- **Tailwind arbitrary CSS custom property values** — `hover:text-[var(--ds-secondary)]` does not work in Tailwind v4 arbitrary brackets at build time; use the literal hex value instead (e.g. `hover:text-[#C8A951]`)

### Prototype philosophy

Prototypes are **sales demos**. All third-party integrations are mocked:

- Contact forms — client-side only with `useState` + 900ms fake delay → success state
- Booking calendars — custom static React component (date grid + time slots + multi-step flow); no Cal.com
- Payment UI — static Stripe-look-alike form with fake success; no real Stripe
- CMS/blog — 2–3 hardcoded static posts

Never install `@calcom/embed-react`, `resend`, `@supabase/supabase-js`, `stripe`, or `@stripe/stripe-js` in prototypes.

## Running a prototype locally

```bash
cd prototypes/<business-slug>
npm install
npm run dev        # starts on :3000 (or next available port)
npm run build      # verify no TypeScript/build errors before reporting done
```

## UX/UI review

When asked to review, critique, or improve design — delegate to the `ux-ui-designer` subagent. It takes screenshots via Chrome, reads source files, and scores against 9 dimensions (hierarchy, contrast, typography, spacing, conversion, trust, brand consistency, mobile, content). It requires a dev server to be running first.
