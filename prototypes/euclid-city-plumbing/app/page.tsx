import { ButtonLink, AnchorButton } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Phone,
  Wrench,
  Droplets,
  Flame,
  Shield,
  Star,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";

const SERVICES_PREVIEW = [
  { icon: Droplets, title: "Drain & Sewer Cleaning", desc: "Electric snake clears any clog, fast." },
  { icon: Flame, title: "Water Heater Service", desc: "Tank and tankless — same-day replacement." },
  { icon: Wrench, title: "Toilet & Faucet Repair", desc: "Fixed completely, not patched." },
  { icon: Shield, title: "Sump Pump Service", desc: "Keep your basement dry." },
];

const TESTIMONIALS = [
  {
    quote:
      "We have used Euclid City Plumbing for many years. They always provide excellent service at a good price.",
    name: "Gary E.",
    source: "Google",
  },
  {
    quote: "Great work! Affordable and responsive. They take care of everything needed.",
    name: "Yelp Reviewer",
    source: "Yelp",
  },
  {
    quote:
      "They are excellent about fitting you in on the same day for an urgent need. Work is done right the first time.",
    name: "Long-Term Customer",
    source: "Google",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section
        style={{ background: "var(--ds-primary)" }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 text-xs font-semibold"
              style={{
                background: "var(--ds-accent)",
                color: "var(--ds-accent-fg)",
                borderRadius: "var(--ds-radius)",
                letterSpacing: "var(--ds-ls-label)",
                textTransform: "uppercase",
              }}
            >
              Est. 1911 — 115 Years Serving Euclid
            </div>

            <h1
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: "var(--ds-fw-heading)",
                color: "white",
                fontSize: "clamp(1.9rem, 5vw, 3.25rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Serving Euclid Since 1911 —<br />
              The Larick Family Fixes It<br />
              Right the First Time
            </h1>

            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.82)", maxWidth: "36rem" }}
            >
              From leaky faucets to full sewer lines, Euclid City Plumbing has handled it all
              for 115 years — licensed, local, and on the job the same day you call.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {[
                "BBB A+ Rating",
                "Same-Day Service",
                "Licensed & Insured",
                "5.0 Stars — 15 Reviews",
              ].map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  <CheckCircle2 size={14} style={{ color: "var(--ds-accent)" }} />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AnchorButton
                href="tel:2163544770"
                size="lg"
                className="flex items-center gap-2"
                style={{
                  background: "var(--ds-accent)",
                  color: "var(--ds-accent-fg)",
                  borderRadius: "var(--ds-radius)",
                  fontFamily: "var(--ds-font-body)",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                <Phone size={18} />
                Call Now: (216) 354-4770
              </AnchorButton>
              <ButtonLink
                href="/contact"
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                style={{
                  borderColor: "rgba(255,255,255,0.45)",
                  color: "white",
                  background: "transparent",
                  borderRadius: "var(--ds-radius)",
                  fontFamily: "var(--ds-font-body)",
                  fontWeight: 600,
                }}
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        style={{
          background: "var(--ds-surface)",
          borderBottom: "2px solid var(--ds-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "115", label: "Years in Business" },
            { value: "4", label: "Generations of Laricks" },
            { value: "5.0 ★", label: "Average Rating" },
            { value: "BBB A+", label: "Rated by the BBB" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--ds-font-heading)",
                  fontWeight: "var(--ds-fw-heading)",
                  fontSize: "1.75rem",
                  color: "var(--ds-primary)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--ds-text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-3 uppercase tracking-widest text-xs">
            What We Fix
          </Badge>
          <h2
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--ds-text)",
            }}
          >
            Plumbing Services That Get It Done
          </h2>
          <p
            style={{
              color: "var(--ds-text-muted)",
              maxWidth: "38rem",
              margin: "0.5rem auto 0",
            }}
            className="text-base"
          >
            We handle everything from a dripping faucet to a full sewer replacement — for the
            same honest price we&apos;ve charged since 1911.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_PREVIEW.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              style={{
                borderRadius: "var(--ds-radius-lg)",
                border: "1px solid var(--ds-border)",
                boxShadow: "var(--ds-shadow-sm)",
              }}
            >
              <CardContent className="pt-6 pb-5 px-5">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{
                    background: "var(--ds-primary)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  <Icon size={20} color="white" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ds-font-heading)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--ds-text)",
                  }}
                >
                  {title}
                </h3>
                <p
                  className="mt-1.5 text-sm leading-snug"
                  style={{ color: "var(--ds-text-muted)" }}
                >
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink
            href="/services"
            className="inline-flex items-center gap-2"
            style={{
              background: "var(--ds-primary)",
              color: "white",
              borderRadius: "var(--ds-radius)",
              fontFamily: "var(--ds-font-body)",
              fontWeight: 600,
            }}
          >
            See All 8 Services
            <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section
        style={{
          background: "var(--ds-surface)",
          borderTop: "1px solid var(--ds-border)",
          borderBottom: "1px solid var(--ds-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-3 uppercase tracking-widest text-xs">
              Our Story
            </Badge>
            <h2
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: "var(--ds-fw-heading)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "var(--ds-text)",
                lineHeight: 1.25,
              }}
            >
              Four Generations. One Standard of Work.
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--ds-text-muted)" }}>
              Euclid City Plumbing Service has been fixing pipes, clearing drains, and keeping
              Northeast Ohio homes running since 1911. That&apos;s four generations of the Larick
              family — Lou and Hugh — doing the work themselves, showing up on time, and standing
              behind every job.
            </p>
            <ButtonLink
              href="/about"
              variant="outline"
              className="mt-6 inline-flex"
              style={{
                borderColor: "var(--ds-primary)",
                color: "var(--ds-primary)",
                borderRadius: "var(--ds-radius)",
                fontFamily: "var(--ds-font-body)",
                fontWeight: 600,
              }}
            >
              Read Our Story
            </ButtonLink>
          </div>

          <div
            className="p-8"
            style={{
              background: "var(--ds-primary)",
              borderRadius: "var(--ds-radius-lg)",
            }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "1911", label: "Founded" },
                { value: "115+", label: "Years Experience" },
                { value: "PL.14882", label: "OH Plumbing License" },
                { value: "7 Days", label: "Open Every Week" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "var(--ds-font-heading)",
                      fontWeight: "var(--ds-fw-heading)",
                      color: "var(--ds-accent)",
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-3 uppercase tracking-widest text-xs">
            What Customers Say
          </Badge>
          <h2
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--ds-text)",
            }}
          >
            5.0 Stars Across Every Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, name, source }) => (
            <Card
              key={name}
              style={{
                borderRadius: "var(--ds-radius-lg)",
                border: "1px solid var(--ds-border)",
                boxShadow: "var(--ds-shadow-sm)",
              }}
            >
              <CardContent className="pt-6 pb-5 px-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="var(--ds-accent)"
                      style={{ color: "var(--ds-accent)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed italic"
                  style={{ color: "var(--ds-text)" }}
                >
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs font-semibold" style={{ color: "var(--ds-primary)" }}>
                    — {name}
                  </p>
                  <Badge
                    variant="outline"
                    className="text-xs"
                    style={{ borderRadius: "var(--ds-radius)" }}
                  >
                    {source}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "var(--ds-secondary)", color: "white" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: "var(--ds-fw-heading)",
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                color: "white",
              }}
            >
              Need a Plumber Today?
            </h2>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              Call by 2 PM for same-day service. We pick up the phone.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <AnchorButton
              href="tel:2163544770"
              size="lg"
              className="flex items-center gap-2"
              style={{
                background: "white",
                color: "var(--ds-secondary)",
                borderRadius: "var(--ds-radius)",
                fontWeight: 700,
              }}
            >
              <Phone size={18} />
              (216) 354-4770
            </AnchorButton>
            <ButtonLink
              href="/booking"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              style={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "white",
                background: "transparent",
                borderRadius: "var(--ds-radius)",
                fontWeight: 600,
              }}
            >
              <Calendar size={18} />
              Book Online
            </ButtonLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
