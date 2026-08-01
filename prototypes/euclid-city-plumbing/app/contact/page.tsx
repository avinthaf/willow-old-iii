import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";

export default function ContactPage() {
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
            Get a Quote
          </Badge>
          <h1
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              color: "white",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            Tell Us What&apos;s Going On
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.78)", maxWidth: "36rem" }}
          >
            Fill out the form and we&apos;ll get back to you within a few hours. For urgent
            issues, call us directly — we pick up the phone.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-5 gap-10">
        {/* Form — left */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        {/* Contact info — right */}
        <div className="md:col-span-2 space-y-5">
          {/* Primary contact */}
          <div
            className="p-6"
            style={{
              background: "var(--ds-primary)",
              borderRadius: "var(--ds-radius-lg)",
              color: "white",
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
              }}
            >
              Prefer to Call?
            </h2>
            <a
              href="tel:2163544770"
              className="flex items-center gap-2 text-xl font-bold"
              style={{ color: "var(--ds-accent)", fontFamily: "var(--ds-font-heading)" }}
            >
              <Phone size={20} />
              (216) 354-4770
            </a>
            <p className="mt-1.5 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Primary line — Lou &amp; Hugh Larick
            </p>

            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <a
                href="mailto:euclidcityplumbing@att.net"
                className="flex items-center gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <Mail size={14} />
                euclidcityplumbing@att.net
              </a>
            </div>
          </div>

          {/* Address + hours */}
          <div
            className="p-6 space-y-4"
            style={{
              background: "var(--ds-surface)",
              border: "1px solid var(--ds-border)",
              borderRadius: "var(--ds-radius-lg)",
            }}
          >
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--ds-primary)" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                  Location
                </p>
                <p className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                  23745 Lake Shore Blvd<br />Euclid, OH 44123
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0" style={{ color: "var(--ds-primary)" }} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                  Hours
                </p>
                <p className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                  Monday – Sunday<br />9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Rating badge */}
          <div
            className="p-5 flex items-center gap-4"
            style={{
              background: "var(--ds-surface)",
              border: "1px solid var(--ds-border)",
              borderRadius: "var(--ds-radius-lg)",
            }}
          >
            <div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--ds-accent)"
                    style={{ color: "var(--ds-accent)" }}
                  />
                ))}
              </div>
              <p
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--ds-font-heading)",
                  color: "var(--ds-text)",
                }}
              >
                5.0 Stars · 15 Reviews
              </p>
              <p className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                Google · Yelp · Birdeye
              </p>
            </div>
          </div>

          {/* Same-day badge */}
          <div
            className="px-5 py-4"
            style={{
              background: "var(--ds-accent)",
              color: "var(--ds-accent-fg)",
              borderRadius: "var(--ds-radius-lg)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: 700,
                fontSize: "0.95rem",
              }}
            >
              Same-Day Service Available
            </p>
            <p className="text-xs mt-1" style={{ opacity: 0.8 }}>
              Call by 2 PM — we&apos;ll be there today.
            </p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
