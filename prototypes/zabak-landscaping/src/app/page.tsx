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
  CheckCircle,
  MapPin,
  Sprout,
  Hammer,
  Waves,
  Scissors,
  FlowerIcon,
  Droplets,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Landscape Design & Installation",
    desc: "Custom outdoor space planning from initial concept through final installation, tailored to your goals and budget.",
  },
  {
    icon: Scissors,
    title: "Weekly Lawn & Foliage Maintenance",
    desc: "Recurring mowing, trimming, edging, and seasonal care to keep your property looking its best year-round.",
  },
  {
    icon: Droplets,
    title: "Irrigation System Installation",
    desc: "Efficient sprinkler and drip systems designed to protect your investment and reduce water waste.",
  },
  {
    icon: Hammer,
    title: "Hardscaping (Patios & Walkways)",
    desc: "Durable, attractive patios, stone walkways, and retaining structures that extend your living space outdoors.",
  },
  {
    icon: Waves,
    title: "Pond & Fountain Installation",
    desc: "Custom water features that add character and tranquility to any residential or commercial landscape.",
  },
  {
    icon: FlowerIcon,
    title: "Custom Garden Design",
    desc: "Curated planting plans that combine curb appeal with low-maintenance beauty and lasting ROI.",
  },
];

const testimonials = [
  {
    quote:
      "Great people, easy to work with and they completed the project exactly as they quoted. We had several very large bushes to be removed and their clean up job makes it like they were never there.",
    name: "Verified Customer",
    platform: "BBB",
    date: "",
  },
  {
    quote:
      "One of NE Ohio's most sought after, highly-respected, and affordable landscapers.",
    name: "Feature Review",
    platform: "Getting Fired and Other Blessings",
    date: "",
  },
  {
    quote: "[Additional verified review — to be provided by Scott Zabak]",
    name: "Client Name",
    platform: "Source",
    date: "",
    placeholder: true,
  },
];

const serviceArea = [
  "Cleveland",
  "Independence",
  "Parma",
  "Seven Hills",
  "Broadview Heights",
  "North Royalton",
  "Brecksville",
  "Garfield Heights",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--ds-primary-dark)", color: "white" }}
      >
        {/* Hero image overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Zabak Landscaping — beautiful Cleveland backyard transformation"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Trust badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: "var(--ds-accent)" }}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold opacity-90">
                5.0 on Angi &nbsp;·&nbsp; BBB A+ Since 2004
              </span>
            </div>

            <h1
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--ds-font-heading)" }}
            >
              Cleveland&apos;s Trusted Landscaper Since 1990 —{" "}
              <span style={{ color: "#a8d08d" }}>
                Your Yard, Done Right the First Time
              </span>
            </h1>

            <p
              className="text-lg lg:text-xl opacity-85 leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: "var(--ds-font-body)" }}
            >
              Zabak Landscaping brings 35 years of Northeast Ohio expertise to
              every project — from weekly lawn care to complete landscape
              transformations. Free consultations. No job too small or too large.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold text-base cursor-pointer"
                  style={{
                    backgroundColor: "white",
                    color: "var(--ds-primary)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Book a Free Consultation
                </Button>
              </Link>
              <a href="tel:2163989790">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-semibold text-base cursor-pointer"
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
              { label: "35 Years in Business", sublabel: "Founded 1990 by Scott Zabak" },
              { label: "BBB A+ Accredited", sublabel: "22+ consecutive years" },
              { label: "5.0 on Angi", sublabel: "Verified homeowner reviews" },
              { label: "State Licensed & Insured", sublabel: "Your property is protected" },
              { label: "Free Consultations", sublabel: "No obligation, ever" },
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
              style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "var(--ds-font-heading)",
                color: "var(--ds-text)",
              }}
            >
              Full-Service Landscaping for Cleveland Homeowners
            </h2>
            <p
              className="mt-3 text-base max-w-2xl mx-auto"
              style={{ color: "var(--ds-text-muted)" }}
            >
              From a single overgrown shrub to a complete outdoor transformation —
              every job gets the same attention and honest pricing.
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
                    className="text-base leading-relaxed"
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
                className="font-semibold cursor-pointer"
                style={{
                  borderColor: "var(--ds-primary)",
                  color: "var(--ds-primary)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                View All Services
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                className="font-semibold cursor-pointer"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CalendarCheck className="w-4 h-4 mr-1.5" />
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER PREVIEW */}
      <section
        className="py-16 border-t"
        style={{
          backgroundColor: "var(--ds-surface)",
          borderColor: "var(--ds-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
            >
              The Zabak Difference
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
            >
              Real Yards. Real Results.
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: "var(--ds-text-muted)" }}>
              See what 35 years of craftsmanship looks like — before and after shots from
              recent Cleveland-area projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["Before", "After"] as const).map((label) => (
              <div key={label} className="space-y-2">
                <div
                  className="h-64 flex flex-col items-center justify-center gap-3"
                  style={{
                    borderRadius: "var(--ds-radius)",
                    backgroundColor: label === "Before" ? "var(--ds-surface)" : "color-mix(in srgb, var(--ds-primary) 8%, var(--ds-surface))",
                    border: "1px solid var(--ds-border)",
                  }}
                >
                  <Camera className="w-8 h-8 opacity-25" style={{ color: label === "Before" ? "var(--ds-text-muted)" : "var(--ds-primary)" }} />
                  <div className="text-center px-6">
                    <div className="font-semibold text-sm mb-1" style={{ color: label === "Before" ? "var(--ds-text-muted)" : "var(--ds-primary)" }}>
                      Photos Coming Soon
                    </div>
                    <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                      {label === "Before" ? "Job site photo will be added here" : "Completed project photo will be added here"}
                    </div>
                  </div>
                </div>
                <Badge
                  style={{
                    backgroundColor: label === "Before" ? "var(--ds-text-muted)" : "var(--ds-primary)",
                    color: "white",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  {label}
                </Badge>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button
                className="font-semibold cursor-pointer"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                See More Before &amp; After Photos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FREE CONSULTATION CALLOUT */}
      <section
        className="py-12"
        style={{
          backgroundColor: "var(--ds-primary)",
          color: "white",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: "white", opacity: 0.9 }}
          />
          <h2
            className="text-2xl lg:text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Every Project Starts with a Free Consultation
          </h2>
          <p
            className="text-base opacity-85 max-w-xl mx-auto mb-6"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            Scott listens to what you want, respects your budget, and designs a
            low-maintenance outdoor space that&apos;s beautiful and built to last.
            No pressure. No obligation.
          </p>
          <Badge
            className="text-sm px-4 py-1 font-semibold mb-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "var(--ds-radius)",
            }}
          >
            &ldquo;No job is too small or too large.&rdquo; — Scott Zabak
          </Badge>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/booking">
              <Button
                size="lg"
                className="font-bold cursor-pointer"
                style={{
                  backgroundColor: "white",
                  color: "var(--ds-primary)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Schedule My Free Consultation
              </Button>
            </Link>
            <a href="tel:2163989790">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold cursor-pointer"
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

      {/* TESTIMONIALS */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--ds-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-widest"
              style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
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
              35 Years of Happy Cleveland Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, platform, date, placeholder }) => (
              <Card
                key={name + quote.slice(0, 20)}
                className="border shadow-sm"
                style={{
                  borderColor: placeholder ? "var(--ds-border)" : "var(--ds-border)",
                  borderRadius: "var(--ds-radius)",
                  opacity: placeholder ? 0.5 : 1,
                  borderStyle: placeholder ? "dashed" : "solid",
                }}
              >
                <CardContent className="p-6">
                  {!placeholder && (
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          style={{ color: "#F06B1C" }}
                        />
                      ))}
                    </div>
                  )}
                  <p
                    className="text-sm leading-relaxed mb-4 italic"
                    style={{ color: placeholder ? "var(--ds-text-muted)" : "var(--ds-text)" }}
                  >
                    {placeholder ? quote : <>&ldquo;{quote}&rdquo;</>}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: placeholder ? "var(--ds-text-muted)" : "var(--ds-primary)" }}
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

          <div className="text-center mt-8">
            <p className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
              Happy with Zabak&apos;s work?{" "}
              <a
                href="https://www.angi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
                style={{ color: "var(--ds-primary)" }}
              >
                Leave a review on Angi
              </a>
              {" "}or{" "}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
                style={{ color: "var(--ds-primary)" }}
              >
                Google
              </a>
            </p>
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
                style={{ color: "var(--ds-accent)", letterSpacing: "var(--ds-ls-label)" }}
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
                Serving Greater Cleveland for 35 Years
              </h2>
              <p className="text-base mb-6" style={{ color: "var(--ds-text-muted)" }}>
                Zabak Landscaping is based in Cleveland and serves the surrounding
                Greater Cleveland communities. Call to confirm service at your address.
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
              className="flex flex-col gap-4 justify-center"
              style={{
                backgroundColor: "var(--ds-bg)",
                border: "2px solid var(--ds-border)",
                borderRadius: "var(--ds-radius-lg)",
                padding: "2rem",
              }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--ds-primary)" }} />
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--ds-text)", fontFamily: "var(--ds-font-heading)" }}>
                    Based in Cleveland, OH
                  </div>
                  <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>4736 Spring Rd · Cleveland, OH 44131</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--ds-primary)" }} />
                <div>
                  <a href="tel:2163989790" className="font-bold text-sm hover:opacity-75 transition-opacity" style={{ color: "var(--ds-primary)" }}>
                    (216) 398-9790
                  </a>
                  <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>Call to confirm we serve your area</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--ds-primary)" }} />
                <div>
                  <div className="font-bold text-sm" style={{ color: "var(--ds-text)", fontFamily: "var(--ds-font-heading)" }}>
                    35+ Years Serving Greater Cleveland
                  </div>
                  <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                    Cleveland · Independence · Parma · Seven Hills · Broadview Heights · North Royalton · Brecksville · Garfield Heights
                  </div>
                </div>
              </div>
              <a href="tel:2163989790" className="mt-2">
                <Button
                  className="w-full font-semibold cursor-pointer"
                  style={{
                    backgroundColor: "var(--ds-primary)",
                    color: "var(--ds-primary-fg)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Confirm Your Address — Call Us
                </Button>
              </a>
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
            Ready to Transform Your Yard?
          </h2>
          <p
            className="text-base mb-8 opacity-85"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            Call us directly or request a free consultation online. Scott will
            get back to you with an honest assessment and no-pressure quote.
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
