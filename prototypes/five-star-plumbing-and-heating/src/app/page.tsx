import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  CalendarCheck,
  ShieldCheck,
  Star,
  Award,
  Clock,
  DollarSign,
  Wrench,
  Droplets,
  Flame,
  CheckCircle,
  MapPin,
  Waves,
  UtensilsCrossed,
  Bath,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Water Leak Detection",
    desc: "Fast, accurate pinpointing of hidden leaks before they cause costly structural damage.",
  },
  {
    icon: Waves,
    title: "Drain Cleaning",
    desc: "Clearing clogged sinks, toilets, bathtubs, and floor drains with professional-grade equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Sump Pump Installation",
    desc: "Keep your basement dry with a properly sized and installed sump pump system.",
  },
  {
    icon: Flame,
    title: "Hot Water Heater Service",
    desc: "All major brands. Same-day service available when your water heater goes out.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kitchen Plumbing",
    desc: "Faucet installation, sink replacement, dishwasher hookups, and leak repairs.",
  },
  {
    icon: Bath,
    title: "Bathroom Plumbing",
    desc: "Full bathroom plumbing from new construction rough-in to complete fixture replacement.",
  },
];

const testimonials = [
  {
    quote:
      "Price was half of what other estimates came in at and he was able to do everything same day.",
    name: "BestProsInTown Member",
    platform: "BestProsInTown",
    date: "October 2025",
  },
  {
    quote:
      "The owner was friendly, professional, and knowledgeable — gave me some great pointers to prevent issues cropping up in the future.",
    name: "BestProsInTown Member",
    platform: "BestProsInTown",
    date: "January 2026",
  },
  {
    quote:
      "Excellent, friendly, prompt service! Five Star is our new plumber for life!",
    name: "Cristin",
    platform: "Facebook",
    date: "",
  },
  {
    quote:
      "He was on time and got the job done at the promised price, despite significantly more work than anticipated.",
    name: "Justin",
    platform: "Facebook",
    date: "",
  },
  {
    quote:
      "Karman was very kind and courteous, he explained exactly what was going on and was fair on pricing.",
    name: "Becky",
    platform: "Facebook",
    date: "",
  },
  {
    quote: "He arrived on time and was very professional and patient.",
    name: "Zach",
    platform: "Facebook",
    date: "",
  },
];

const serviceArea = [
  "Parma",
  "Parma Heights",
  "Middleburg Heights",
  "Seven Hills",
  "Brooklyn",
  "Berea",
  "North Royalton",
  "Strongsville",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{
          backgroundColor: "#0d2447",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: "var(--ds-star)" }}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold opacity-90">
                  5.0 Stars · 80+ Google Reviews
                </span>
              </div>

              <h1
                className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
                style={{ fontFamily: "var(--ds-font-heading)" }}
              >
                Parma&apos;s 5-Star Plumber —{" "}
                <span style={{ color: "white", opacity: 0.9 }}>
                  Same-Day Service
                </span>
                , Honest Pricing, and a Free One-Year Warranty
              </h1>

              <p
                className="text-lg opacity-85 leading-relaxed mb-8"
                style={{ fontFamily: "var(--ds-font-body)" }}
              >
                The Five Star team has earned a perfect rating
                from over 80 Cleveland-area homeowners — and every job is backed
                by our free one-year labor and materials guarantee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4402125756">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto font-bold text-base"
                    style={{
                      backgroundColor: "var(--ds-accent)",
                      color: "var(--ds-accent-fg)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (440) 212-5756
                  </Button>
                </a>
                <Link href="/booking">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto font-semibold text-base"
                    style={{
                      color: "white",
                      borderColor: "rgba(255,255,255,0.6)",
                      background: "transparent",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <CalendarCheck className="w-5 h-5 mr-2" />
                    Book a Visit
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero photo */}
            <div className="hidden lg:block relative">
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: "var(--ds-radius-lg)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src="/images/hero-2.jpg"
                  alt="Five Star Plumbing — licensed plumber at work in a Cleveland home"
                  width={960}
                  height={540}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating trust badge */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 flex items-center gap-3"
                style={{
                  backgroundColor: "var(--ds-secondary)",
                  borderRadius: "var(--ds-radius)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: "var(--ds-star)" }} />
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">5.0 · 80+ Reviews</div>
                  <div className="text-white text-xs opacity-70">BBB A+ Accredited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section
        className="py-4 border-b"
        style={{
          backgroundColor: "var(--ds-surface)",
          borderColor: "var(--ds-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-sm font-semibold">
            {[
              { label: "BBB A+ Accredited", sublabel: "Since June 2014" },
              {
                label: "Fully Insured & Bonded",
                sublabel: "Your home is protected",
              },
              { label: "5.0 on Google", sublabel: "80+ verified reviews" },
              { label: "Free 1-Year Warranty", sublabel: "Labor & materials" },
              {
                label: "Military Discount",
                sublabel: "Thank you for your service",
              },
            ].map(({ label, sublabel }) => (
              <div key={label} className="flex items-center gap-2 py-2">
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--ds-primary)" }}
                />
                <div>
                  <div style={{ color: "var(--ds-text)" }}>{label}</div>
                  <div
                    className="text-xs font-normal"
                    style={{ color: "var(--ds-text-muted)" }}
                  >
                    {sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ color: "var(--ds-accent)" }}
            >
              What We Fix
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "var(--ds-font-heading)",
                color: "var(--ds-text)",
              }}
            >
              Full-Service Plumbing for Parma Homeowners
            </h2>
            <p
              className="mt-3 text-base max-w-2xl mx-auto"
              style={{ color: "var(--ds-text-muted)" }}
            >
              From a dripping faucet to a full re-pipe — we handle it all
              with upfront pricing and same-day availability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="border shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderColor: "var(--ds-border)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CardContent className="p-6">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "var(--ds-primary)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "var(--ds-primary-fg)" }}
                    />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{
                      fontFamily: "var(--ds-font-heading)",
                      color: "var(--ds-text)",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--ds-text-muted)" }}
                  >
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link href="/services">
              <Button
                variant="outline"
                className="font-semibold"
                style={{
                  borderColor: "var(--ds-primary)",
                  color: "var(--ds-primary)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                View All Services
              </Button>
            </Link>
            <a href="tel:4402125756">
              <Button
                className="font-semibold"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Call for Same-Day Service
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* WARRANTY CALLOUT */}
      <section
        className="py-12"
        style={{
          backgroundColor: "var(--ds-secondary)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: "var(--ds-primary)" }}
          />
          <h2
            className="text-2xl lg:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Free One-Year Warranty on Every Job
          </h2>
          <p
            className="text-base opacity-80 max-w-xl mx-auto mb-6"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            Every repair and installation comes backed by a free one-year
            warranty on labor and materials. If something isn&apos;t right, we come
            back at no charge. That&apos;s our promise to every Parma homeowner.
          </p>
          <Badge
            className="text-sm px-4 py-1 font-semibold"
            style={{
              backgroundColor: "var(--ds-primary)",
              color: "white",
              borderRadius: "var(--ds-radius)",
            }}
          >
            No fine print. No exceptions.
          </Badge>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--ds-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ color: "var(--ds-accent)" }}
            >
              What Customers Say
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "var(--ds-font-heading)",
                color: "var(--ds-text)",
              }}
            >
              5.0 Stars Across 80+ Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, platform, date }) => (
              <Card
                key={name + quote.slice(0, 20)}
                className="border shadow-sm"
                style={{
                  borderColor: "var(--ds-border)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: "var(--ds-accent)" }}
                      />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4 italic"
                    style={{ color: "var(--ds-text)" }}
                  >
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--ds-primary)" }}
                    >
                      {name}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--ds-text-muted)" }}
                    >
                      {platform}
                      {date ? ` · ${date}` : ""}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section
        className="py-14 border-t"
        style={{
          backgroundColor: "var(--ds-surface)",
          borderColor: "var(--ds-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p
                className="text-xs font-semibold mb-2 uppercase tracking-widest"
                style={{ color: "var(--ds-accent)" }}
              >
                Where We Work
              </p>
              <h2
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "var(--ds-font-heading)",
                  color: "var(--ds-text)",
                }}
              >
                Serving Parma and the Greater Cleveland Area
              </h2>
              <p className="text-base mb-6" style={{ color: "var(--ds-text-muted)" }}>
                Five Star Plumbing is based in Parma and serves surrounding
                communities throughout southwest Greater Cleveland. Call to
                confirm service at your address.
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceArea.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium"
                    style={{
                      backgroundColor: "var(--ds-bg)",
                      color: "var(--ds-text)",
                      border: "1px solid var(--ds-border)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <MapPin
                      className="w-3 h-3"
                      style={{ color: "var(--ds-primary)" }}
                    />
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex items-center justify-center"
              style={{
                backgroundColor: "var(--ds-bg)",
                border: "2px solid var(--ds-border)",
                borderRadius: "var(--ds-radius-lg)",
                minHeight: "280px",
              }}
            >
              <div className="text-center p-8">
                <MapPin
                  className="w-16 h-16 mx-auto mb-3"
                  style={{ color: "var(--ds-primary)" }}
                />
                <div
                  className="text-lg font-bold mb-1"
                  style={{
                    fontFamily: "var(--ds-font-heading)",
                    color: "var(--ds-text)",
                  }}
                >
                  Parma, OH 44129
                </div>
                <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                  6310 Rousseau Dr
                </div>
                <div
                  className="mt-4 text-sm"
                  style={{ color: "var(--ds-text-muted)" }}
                >
                  Serving a 15-mile radius across
                  <br />
                  Southwest Greater Cleveland
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="py-16"
        style={{
          backgroundColor: "var(--ds-primary)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Ready to Get It Fixed Today?
          </h2>
          <p
            className="text-base mb-8"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            Call us directly or fill out our quick form. We&apos;ll get back to
            you fast with an upfront quote — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4402125756">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold"
                style={{
                  backgroundColor: "var(--ds-secondary)",
                  color: "white",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (440) 212-5756
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.6)",
                  background: "transparent",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
