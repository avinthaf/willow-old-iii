import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  CalendarCheck,
  Star,
  Award,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

const milestones = [
  { year: "2012", event: "Five Star Plumbing and Heating LLC founded in Parma, OH" },
  { year: "2014", event: "Earned BBB A+ accreditation — a status maintained ever since" },
  { year: "2018", event: "Reached 50+ five-star Google reviews without a single complaint" },
  { year: "2024", event: "Surpassed 80 Google reviews with a perfect 5.0-star rating" },
  { year: "Today", event: "Still the same owner on every job — same phone, same standard" },
];

const values = [
  {
    icon: Clock,
    title: "Show Up On Time",
    desc: "We respect your schedule. Reviews consistently mention punctuality as a standout trait.",
  },
  {
    icon: ShieldCheck,
    title: "Stand Behind Every Job",
    desc: "Every job comes with a free one-year warranty on labor and materials — no asterisks.",
  },
  {
    icon: Award,
    title: "Charge a Fair Price",
    desc: "Multiple customers report our quotes came in at half of competitor estimates, without cutting corners.",
  },
  {
    icon: CheckCircle,
    title: "Explain Everything",
    desc: "We tell you what's wrong, what we're doing to fix it, and how to prevent it from happening again.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-14 lg:py-20"
        style={{
          background: "linear-gradient(135deg, var(--ds-secondary) 0%, var(--ds-primary-dark) 100%)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Our Story
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            About Five Star Plumbing
          </h1>
          <p className="text-lg opacity-80 max-w-2xl" style={{ fontFamily: "var(--ds-font-body)" }}>
            Built on a handshake, a fair quote, and a promise that every job
            will be done right the first time.
          </p>
        </div>
      </section>

      {/* About copy */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs font-semibold mb-3 uppercase tracking-widest"
                style={{ color: "var(--ds-accent)" }}
              >
                Locally Owned and Operated Since 2012
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
              >
                Parma&apos;s Most Trusted Plumber Since 2012
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ds-text-muted)" }}>
                <p>
                  Five Star Plumbing and Heating has been serving Parma, Parma
                  Heights, Middleburg Heights, Seven Hills, and the surrounding
                  Greater Cleveland area since 2012. The owner built the
                  business on a simple idea: show up on time, charge a fair
                  price, and stand behind every job with a free one-year
                  warranty on labor and materials.
                </p>
                <p>
                  That approach has earned Five Star a 5.0-star rating across
                  more than 80 reviews on Google, a BBB A+ accreditation, and
                  loyal customers who recommend Five Star to their neighbors by
                  name.
                </p>
                <p>
                  When you call Five Star Plumbing, you get the owner — not a
                  dispatcher routing calls to an unknown technician. The owner
                  answers the phone, gives you an honest assessment, shows up
                  on time, and completes the work at the quoted price. No surprises.
                </p>
                <p>
                  Over 20 years of hands-on trade experience goes into
                  every job. He&apos;s fully insured, bonded, and BBB accredited —
                  and he&apos;s proud to offer a military discount to those who have
                  served.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="tel:4402125756">
                  <Button
                    size="lg"
                    className="font-bold"
                    style={{
                      backgroundColor: "var(--ds-primary)",
                      color: "var(--ds-primary-fg)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Directly
                  </Button>
                </a>
                <Link href="/booking">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold"
                    style={{
                      borderColor: "var(--ds-primary)",
                      color: "var(--ds-primary)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <CalendarCheck className="w-5 h-5 mr-2" />
                    Book a Visit
                  </Button>
                </Link>
              </div>
            </div>

            {/* Credentials card */}
            <div className="space-y-6">
              {/* Credentials */}
              <Card
                className="border shadow-sm"
                style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
              >
                <CardContent className="p-6">
                  <h3
                    className="font-bold text-lg mb-4"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                  >
                    Credentials &amp; Accreditations
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { icon: Award, text: "BBB A+ Accredited — Since June 3, 2014" },
                      { icon: ShieldCheck, text: "Fully Insured and Bonded" },
                      { icon: Star, text: "5.0 Stars · 80+ Google Reviews" },
                      { icon: CheckCircle, text: "Free 1-Year Warranty on All Labor & Materials" },
                      { icon: CheckCircle, text: "Military Discount Available" },
                      { icon: CheckCircle, text: "20+ Years Trade Experience" },
                    ].map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <Icon
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--ds-accent)" }}
                        />
                        <span className="text-sm" style={{ color: "var(--ds-text)" }}>
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Stars callout */}
              <Card
                className="border shadow-sm"
                style={{
                  borderColor: "var(--ds-secondary)",
                  borderRadius: "var(--ds-radius)",
                  backgroundColor: "var(--ds-secondary)",
                  color: "var(--ds-primary-fg)",
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-current"
                        style={{ color: "var(--ds-star)" }}
                      />
                    ))}
                  </div>
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: "var(--ds-font-heading)" }}
                  >
                    5.0
                  </div>
                  <div className="text-sm opacity-80">
                    Perfect rating across 80+ Google reviews
                  </div>
                  <Badge
                    className="mt-3 text-xs"
                    style={{
                      backgroundColor: "var(--ds-accent)",
                      color: "var(--ds-accent-fg)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    No complaints filed with BBB
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="py-14 border-t"
        style={{ backgroundColor: "var(--ds-surface)", borderColor: "var(--ds-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
            >
              The Five Star Standard
            </h2>
            <p className="mt-2 text-base" style={{ color: "var(--ds-text-muted)" }}>
              Four things we do on every single job — not just the big ones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="border shadow-sm text-center"
                style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
              >
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "var(--ds-primary)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "white" }} />
                  </div>
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
      <section className="py-14" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
          >
            A Track Record You Can Trust
          </h2>
          <div className="space-y-6">
            {milestones.map(({ year, event }) => (
              <div key={year} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-16 text-right font-bold text-sm pt-1"
                  style={{ color: "var(--ds-accent)", fontFamily: "var(--ds-font-heading)" }}
                >
                  {year}
                </div>
                <div
                  className="flex-shrink-0 w-px self-stretch"
                  style={{ backgroundColor: "var(--ds-border)" }}
                />
                <div
                  className="text-sm leading-relaxed pt-1"
                  style={{ color: "var(--ds-text)" }}
                >
                  {event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
