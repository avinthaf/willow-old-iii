import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BookingEmbed } from "@/components/booking-embed";
import { Clock, Phone, Calendar, CheckCircle2 } from "lucide-react";

export default function BookingPage() {
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
            Book Online
          </Badge>
          <h1
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              color: "white",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            Schedule a Service Call
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.78)", maxWidth: "36rem" }}
          >
            Book online 24/7 — no phone call needed for non-emergency appointments. We&apos;ll
            confirm your time and show up when we say we will.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Sidebar info */}
        <div className="md:col-span-1 space-y-5">
          <div
            className="p-5"
            style={{
              background: "var(--ds-surface)",
              border: "1px solid var(--ds-border)",
              borderRadius: "var(--ds-radius-lg)",
              boxShadow: "var(--ds-shadow-sm)",
            }}
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--ds-text)",
              }}
            >
              Before You Book
            </h2>
            <ul className="space-y-3">
              {[
                "Select the service type closest to your issue",
                "Pick a date and time that works for you",
                "We confirm within a few hours",
                "Lou or Hugh arrives at your door on time",
              ].map((step) => (
                <li key={step} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--ds-text-muted)" }}>
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--ds-accent)" }} />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-5"
            style={{
              background: "var(--ds-primary)",
              borderRadius: "var(--ds-radius-lg)",
              color: "white",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} style={{ color: "var(--ds-accent)" }} />
              <h3
                style={{
                  fontFamily: "var(--ds-font-heading)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "white",
                }}
              >
                Need Help Today?
              </h3>
            </div>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
              For same-day service, call us directly. Online booking is for scheduling in advance.
            </p>
            <a
              href="tel:2163544770"
              className="flex items-center gap-2 font-semibold text-base"
              style={{ color: "var(--ds-accent)" }}
            >
              <Phone size={16} />
              (216) 354-4770
            </a>
            <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              Call by 2 PM for same-day availability
            </p>
          </div>

          <div
            className="p-5"
            style={{
              background: "var(--ds-surface)",
              border: "1px solid var(--ds-border)",
              borderRadius: "var(--ds-radius-lg)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={15} style={{ color: "var(--ds-primary)" }} />
              <h3
                style={{
                  fontFamily: "var(--ds-font-heading)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--ds-text)",
                }}
              >
                Hours
              </h3>
            </div>
            <p className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
              Monday – Sunday<br />
              9:00 AM – 5:00 PM
            </p>
            <p className="mt-2 text-xs" style={{ color: "var(--ds-text-muted)" }}>
              23745 Lake Shore Blvd<br />Euclid, OH 44123
            </p>
          </div>
        </div>

        {/* Cal.com embed */}
        <div
          className="md:col-span-2"
          style={{
            background: "var(--ds-surface)",
            border: "1px solid var(--ds-border)",
            borderRadius: "var(--ds-radius-lg)",
            overflow: "hidden",
            minHeight: "640px",
          }}
        >
          <div
            className="px-5 py-3 border-b"
            style={{ borderColor: "var(--ds-border)" }}
          >
            <p
              className="text-sm font-semibold"
              style={{
                fontFamily: "var(--ds-font-heading)",
                color: "var(--ds-text)",
              }}
            >
              Choose a Date &amp; Time
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--ds-text-muted)" }}>
              Powered by Cal.com — the owner connects their calendar before launch
            </p>
          </div>
          <BookingEmbed />
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
