# Willow

AI-powered website sales agent. Finds local businesses in Cleveland, OH that need a new or upgraded website, researches them, and builds cold-email-ready prototype sites to close deals.

## How it works

```
lead-hunter → scout → developer
```

1. **lead-hunter** — searches directories (Yelp, BBB, Angi, Chamber of Commerce, Ohio SOS) for businesses with weak or missing websites and writes ranked candidates to `leads/`.
2. **scout** — researches a specific business in depth: copy, brand details, competitor gaps, and review quotes. Writes findings to `prototypes/<slug>/scout/`.
3. **developer** — builds a polished Next.js prototype using the scout research and a matching design system preset. Drops the site in `prototypes/<slug>/`.

Run the full pipeline by asking Claude Code in natural language:
- *"Find me some HVAC companies"* → lead-hunter
- *"Scout Euclid City Plumbing"* → scout
- *"Build a site for Euclid City Plumbing"* → developer

## Repository layout

```
design-systems/       ← CSS design presets (blue-collar, fresh-outdoor, etc.)
leads/                ← lead-hunter output, one file per run
prototypes/           ← one folder per business
  <business-slug>/
    scout/            ← profile.md, competitors.md, reviews.md
    src/              ← Next.js app source
    public/images/    ← hero and service images
```

## Prototypes

| Business | Design System | Status |
|----------|--------------|--------|
| [Five Star Plumbing & Heating](prototypes/five-star-plumbing-and-heating/) | blue-collar | Built |
| [Zabak Landscaping](prototypes/zabak-landscaping/) | fresh-outdoor | Built |
| [Euclid City Plumbing](prototypes/euclid-city-plumbing/) | blue-collar | Built |

## Tech stack

Each prototype is a standalone Next.js app:

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS v4** + **shadcn/ui** (base-nova)
- Design token system (`--ds-*` CSS custom properties)
- All third-party integrations mocked — prototypes are demos, not production

To run any prototype locally:

```bash
cd prototypes/<business-slug>
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and fill in any keys needed (Gemini for image generation).
