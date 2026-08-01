# Zabak Landscaping Inc — Website Prototype

**Business:** Zabak Landscaping Inc  
**Owner:** Scott R. Zabak  
**Location:** 4736 Spring Rd, Cleveland OH 44131  
**Phone:** (216) 398-9790  
**Founded:** 1990  

---

## Running Locally

```bash
cd prototypes/zabak-landscaping
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the prototype.

---

## Pages Built

| Route | Page | Notes |
|-------|------|-------|
| `/` | Home | Hero, trust bar, services preview, before/after preview, testimonials, service area, CTA |
| `/services` | Services | Detailed card for each of 7 services with image and bullet points |
| `/gallery` | Before & After | Filterable before/after pair gallery with category tabs |
| `/about` | About Us | Scott's story, Zabak family heritage, values, timeline |
| `/booking` | Free Consultation | 3-step mock calendar — date picker, time slots, contact form, success screen |
| `/contact` | Get a Quote | Mocked lead form with service selector; success state after submit |

---

## Stack

- **Next.js 16** (App Router) · TypeScript · Tailwind CSS v4
- **shadcn/ui** (base-nova style) — Button, Card, Badge, Input, Label, Sheet, Textarea
- **Design system:** `fresh-outdoor` — Nunito (headings), Open Sans (body), deep green primary, warm earth secondary
- **Vercel Analytics** — wired in layout.tsx, ready for production
- All third-party integrations (email, booking, CMS) are **mocked** — no external services

### Images

All visual assets are SVG placeholders in `public/images/`. When `GEMINI_API_KEY` is available, re-run the image-generator subagent to replace them with AI-generated JPEGs. Update file extensions from `.svg` to `.jpg` after regeneration.

---

## Environment Variables

No environment variables are needed to run this prototype. All integrations are mocked.

For production, you would add:
- `RESEND_API_KEY` — contact form email delivery
- `NEXT_PUBLIC_CAL_LINK` — Cal.com booking embed URL
- Supabase credentials if a contact database is added

---

## Pitch Notes

**The opportunity:** Zabak Landscaping has operated for 35 years entirely through word of mouth with zero web presence — no website, no Google Business profile, no social media. The business is completely invisible online except for third-party directory listings. Scott has earned an A+ BBB rating (22+ consecutive years), a 5.0 on Angi, and local press coverage describing him as "one of NE Ohio's most sought after, highly-respected, and affordable landscapers" — none of which any new potential customer can find.

**Key differentiators this prototype demonstrates:**
1. **Before/after gallery** — No competitor in the Cleveland landscaping market shows before/after photo pairs prominently. This is the single most persuasive visual trust signal in the category.
2. **Free consultation booking** — Zabak's in-person free consultation is his primary conversion tool; putting it online removes friction. No competitor offers online scheduling.
3. **Review prompts** — The prototype includes a "leave us a review" prompt with Angi and Google links, which can rapidly build Zabak's near-zero digital review footprint.
4. **Family story** — The Zabak name carries deep Cleveland community roots (Zabak's Tavern & Restaurant). DiCillo has a longer history but tells it coldly. Scott's story — a lawnmower and one customer in 1990 — is more human and more persuasive.

**Cold email angle:** Lead with the gap — a 35-year business with an A+ BBB rating that Google can't find. Show the prototype. Emphasize the before/after gallery as the hook because visual landscaping results are the highest-converting content in the category and no local competitor is doing it.
