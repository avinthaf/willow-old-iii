import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CalendarCheck, CheckCircle, Star } from "lucide-react";

const milestones = [
  { year: "1990", text: "Scott Zabak starts the company with his father's push mower and one neighbor's lawn." },
  { year: "1995", text: "Zabak Landscaping Incorporated officially formed under Ohio state law." },
  { year: "2004", text: "Earns BBB Accreditation — a status maintained without interruption ever since." },
  { year: "2010", text: "Expands service offerings to include irrigation systems and custom water features." },
  { year: "2025", text: "35 years in business — still operated by Scott, still built on the same principles." },
];

const values = [
  { title: "Honest Pricing", desc: "What Scott quotes is what you pay. No surprises, no hidden fees, no upselling." },
  { title: "Respect for Budget", desc: "Every design starts with what you can realistically invest — and is optimized from there." },
  { title: "Meticulous Cleanup", desc: "When Zabak crews finish a job, the site is immaculate. Customers say it looks like the shrubs were never there." },
  { title: "Low-Maintenance Results", desc: "Scott designs for long-term beauty with minimal upkeep — because a landscape should be enjoyed, not maintained." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header with image */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ backgroundColor: "var(--ds-primary-dark)", color: "white" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/about-banner.jpg"
            alt="Zabak Landscaping team at work"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "var(--ds-ls-label)" }}
          >
            Our Story
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4 max-w-3xl"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            35 Years. One Landscaper. Built on Reputation.
          </h1>
          <p
            className="text-lg opacity-80 max-w-2xl"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            Scott Zabak has never run an advertisement in 35 years. Every single
            client has come through word of mouth — which says everything about
            the quality of the work.
          </p>
        </div>
      </section>

      {/* About copy */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--ds-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold mb-3 uppercase tracking-widest"
                style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
              >
                About Scott Zabak
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
              >
                A Family Name Cleveland Trusts
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ds-text-muted)" }}>
                <p>
                  Scott Zabak started his company in 1990 with his father&apos;s
                  push mower and one neighbor&apos;s lawn. Thirty-five years later,
                  Zabak Landscaping is one of Cleveland&apos;s most respected names
                  in full-service landscaping — built entirely on word of mouth,
                  honest pricing, and work that speaks for itself.
                </p>
                <p>
                  The Zabak name in Cleveland carries weight that goes beyond
                  landscaping. Scott&apos;s grandparents ran Zabak&apos;s Tavern &amp;
                  Restaurant on 78th and Union — a neighborhood institution that
                  the community still remembers fondly. That same spirit of
                  genuine service and community connection runs through everything
                  Scott does today.
                </p>
                <p>
                  A family-owned, State-licensed, A+ BBB-rated business serving
                  the Greater Cleveland area, Zabak brings the same commitment to
                  every yard: listen to what you want, respect your budget, and
                  create an outdoor space that&apos;s beautiful, low-maintenance, and
                  worth every dollar.
                </p>
              </div>

              {/* Press quote */}
              <blockquote
                className="mt-8 pl-4 border-l-4 italic text-base"
                style={{
                  borderColor: "var(--ds-primary)",
                  color: "var(--ds-text)",
                }}
              >
                &ldquo;One of NE Ohio&apos;s most sought after, highly-respected, and affordable landscapers.&rdquo;
                <footer className="mt-2 text-sm not-italic" style={{ color: "var(--ds-text-muted)" }}>
                  — Getting Fired and Other Blessings, feature article on Scott Zabak
                </footer>
              </blockquote>
            </div>

            {/* Credentials card */}
            <div className="flex flex-col gap-4 justify-center">
              {[
                { stat: "35+", label: "Years in Business", sub: "Founded 1990 in Cleveland, OH" },
                { stat: "A+", label: "BBB Rating", sub: "Accredited since 2004, zero complaints" },
                { stat: "5.0", label: "Angi Rating", sub: "Perfect score across all reviews" },
                { stat: "100%", label: "Word of Mouth", sub: "Built entirely on referrals" },
              ].map(({ stat, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-5 p-4"
                  style={{
                    border: "1px solid var(--ds-border)",
                    borderRadius: "var(--ds-radius)",
                    backgroundColor: "var(--ds-surface)",
                  }}
                >
                  <div
                    className="text-3xl font-bold flex-shrink-0 w-16 text-center"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-primary)" }}
                  >
                    {stat}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "var(--ds-text)" }}>
                      {label}
                    </div>
                    <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                      {sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
            >
              How We Work
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
            >
              The Zabak Standard
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc }) => (
              <Card
                key={title}
                className="border shadow-sm"
                style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
              >
                <CardContent className="p-6">
                  <CheckCircle
                    className="w-8 h-8 mb-3"
                    style={{ color: "var(--ds-primary)" }}
                  />
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ds-text-muted)" }}>
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-16 border-t"
        style={{ backgroundColor: "var(--ds-surface)", borderColor: "var(--ds-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
            >
              35 Years in the Making
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
            >
              Our History
            </h2>
          </div>
          <div className="relative pl-8 border-l-2" style={{ borderColor: "var(--ds-border)" }}>
            {milestones.map(({ year, text }) => (
              <div key={year} className="mb-8 relative">
                <div
                  className="absolute -left-[2.55rem] w-4 h-4 rounded-full border-2"
                  style={{
                    backgroundColor: "var(--ds-primary)",
                    borderColor: "var(--ds-surface)",
                  }}
                />
                <div
                  className="text-xs font-bold mb-1 uppercase tracking-widest"
                  style={{ color: "var(--ds-accent)" }}
                >
                  {year}
                </div>
                <p className="text-base" style={{ color: "var(--ds-text)" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{
          backgroundColor: "var(--ds-primary)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Work with Cleveland&apos;s Most Trusted Landscaper
          </h2>
          <p className="opacity-80 text-base mb-8">
            Every project starts with a free consultation. No sales pitch, no
            pressure — just an honest conversation about your yard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold cursor-pointer"
                style={{
                  backgroundColor: "white",
                  color: "var(--ds-primary)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:2163989790">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold cursor-pointer"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.6)",
                  background: "transparent",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                (216) 398-9790
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
