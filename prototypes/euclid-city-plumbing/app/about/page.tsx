import { AnchorButton, ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Phone, Shield, ArrowRight } from "lucide-react";

const TIMELINE = [
  {
    year: "1911",
    event: "Euclid City Plumbing Service founded in Euclid, Ohio.",
  },
  {
    year: "1950s",
    event: "Second generation of the Larick family takes over day-to-day operations.",
  },
  {
    year: "1970s–80s",
    event: "Third generation joins. Hydronics and boiler service added to the offering.",
  },
  {
    year: "Today",
    event: "Lou and Hugh Larick lead the fourth generation — still doing the work themselves.",
  },
];

const LICENSES = [
  { code: "PL.14882", label: "Ohio Plumbing Contractor", status: "Active" },
  { code: "HY.14882", label: "Ohio Hydronics Contractor", status: "Active" },
  { code: "HV.14882", label: "Ohio HVAC Contractor", status: "Active" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      {/* Page header */}
      <section style={{ background: "var(--ds-primary)" }} className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <Badge
            className="mb-4 uppercase tracking-widest text-xs"
            style={{
              background: "var(--ds-accent)",
              color: "var(--ds-accent-fg)",
              borderRadius: "var(--ds-radius)",
            }}
          >
            About Us
          </Badge>
          <h1
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              color: "white",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            The Larick Family. Since 1911.
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.78)", maxWidth: "36rem" }}
          >
            Four generations of doing the work ourselves and standing behind every job.
          </p>
        </div>
      </section>

      {/* Main about copy */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-5 gap-12">
        {/* Copy */}
        <div className="md:col-span-3 space-y-6">
          <h2
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
              color: "var(--ds-text)",
              lineHeight: 1.3,
            }}
          >
            We serve Euclid the same way we always have: honest pricing, same-day availability,
            and work done right.
          </h2>

          <p className="leading-relaxed text-base" style={{ color: "var(--ds-text-muted)" }}>
            Euclid City Plumbing Service has been fixing pipes, clearing drains, and keeping
            Northeast Ohio homes running since 1911. That&apos;s four generations of the Larick
            family — Lou and Hugh — doing the work themselves, showing up on time, and standing
            behind every job.
          </p>

          <p className="leading-relaxed text-base" style={{ color: "var(--ds-text-muted)" }}>
            We serve Euclid and the surrounding communities the same way we always have: honest
            pricing, same-day availability when you need it most, and work done right so you
            don&apos;t have to call twice.
          </p>

          <p className="leading-relaxed text-base" style={{ color: "var(--ds-text-muted)" }}>
            At 115 years, we&apos;ve outlasted every other plumbing company in Northeast Ohio that
            has a working website. That&apos;s not an accident. It&apos;s what happens when you do
            good work at a fair price and treat customers like neighbors — because in Euclid, they
            usually are.
          </p>

          <div className="flex gap-3 pt-2 flex-wrap">
            <AnchorButton
              href="tel:2163544770"
              className="flex items-center gap-2"
              style={{
                background: "var(--ds-primary)",
                color: "white",
                borderRadius: "var(--ds-radius)",
                fontFamily: "var(--ds-font-body)",
                fontWeight: 600,
              }}
            >
              <Phone size={16} />
              Call Lou or Hugh
            </AnchorButton>
            <ButtonLink
              href="/contact"
              variant="outline"
              className="flex items-center gap-2"
              style={{
                borderColor: "var(--ds-primary)",
                color: "var(--ds-primary)",
                borderRadius: "var(--ds-radius)",
                fontFamily: "var(--ds-font-body)",
                fontWeight: 600,
              }}
            >
              Get a Quote
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>

        {/* Sidebar — licenses + address */}
        <div className="md:col-span-2 space-y-6">
          {/* Licenses */}
          <div
            className="p-6"
            style={{
              background: "var(--ds-surface)",
              border: "1px solid var(--ds-border)",
              borderRadius: "var(--ds-radius-lg)",
              boxShadow: "var(--ds-shadow-sm)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield size={18} style={{ color: "var(--ds-primary)" }} />
              <h3
                style={{
                  fontFamily: "var(--ds-font-heading)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--ds-text)",
                }}
              >
                Ohio Licenses &amp; Certifications
              </h3>
            </div>
            <ul className="space-y-3">
              {LICENSES.map((lic) => (
                <li key={lic.code} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                      {lic.label}
                    </p>
                    <p className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                      License {lic.code}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs shrink-0"
                    style={{
                      background: "#d1fae5",
                      color: "#065f46",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    {lic.status}
                  </Badge>
                </li>
              ))}
            </ul>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <p className="font-semibold" style={{ color: "var(--ds-text)" }}>
                BBB Rating: A+
              </p>
              <p style={{ color: "var(--ds-text-muted)" }}>
                BuildZoom Score: 92 (Top 32% of Ohio contractors)
              </p>
            </div>
          </div>

          {/* Contact card */}
          <div
            className="p-6"
            style={{
              background: "var(--ds-primary)",
              borderRadius: "var(--ds-radius-lg)",
            }}
          >
            <p
              className="text-sm mb-1"
              style={{
                color: "rgba(255,255,255,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.7rem",
              }}
            >
              Come See Us
            </p>
            <p
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: 700,
                color: "white",
                fontSize: "0.95rem",
                lineHeight: 1.5,
              }}
            >
              23745 Lake Shore Blvd<br />
              Euclid, OH 44123
            </p>
            <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Mon – Sun · 9:00 AM – 5:00 PM
            </p>
            <a
              href="tel:2163544770"
              className="mt-3 flex items-center gap-2 font-semibold"
              style={{ color: "var(--ds-accent)" }}
            >
              <Phone size={15} />
              (216) 354-4770
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          background: "var(--ds-surface)",
          borderTop: "1px solid var(--ds-border)",
          borderBottom: "1px solid var(--ds-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2
            className="mb-10 text-center"
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
              color: "var(--ds-text)",
            }}
          >
            115 Years. Four Generations.
          </h2>

          <div className="relative">
            <div
              className="absolute left-16 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "var(--ds-border)" }}
            />
            <div className="space-y-8 md:space-y-6">
              {TIMELINE.map(({ year, event }) => (
                <div key={year} className="flex items-start gap-6">
                  <div
                    className="w-16 shrink-0 text-right"
                    style={{
                      fontFamily: "var(--ds-font-heading)",
                      fontWeight: 700,
                      color: "var(--ds-primary)",
                      fontSize: "1rem",
                    }}
                  >
                    {year}
                  </div>
                  {/* dot */}
                  <div
                    className="hidden md:block w-4 h-4 rounded-full shrink-0 mt-0.5 z-10"
                    style={{
                      background: "var(--ds-accent)",
                      border: "2px solid white",
                      boxShadow: "0 0 0 2px var(--ds-accent)",
                    }}
                  />
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--ds-text-muted)" }}
                  >
                    {event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
