import { AnchorButton, ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Phone, ArrowRight, Camera } from "lucide-react";

const GALLERY_ITEMS = [
  { label: "Water Heater Replacement", location: "Euclid, OH", tag: "Water Heater", bg: "#1B3A6B" },
  { label: "Main Sewer Line Repair", location: "Euclid, OH", tag: "Sewer", bg: "#2d5a9e" },
  { label: "Sump Pump Installation", location: "Willoughby, OH", tag: "Sump Pump", bg: "#1B3A6B" },
  { label: "Basement Drain Clearing", location: "Euclid, OH", tag: "Drain Cleaning", bg: "#B5651D" },
  { label: "Tankless Water Heater", location: "Cleveland Heights, OH", tag: "Water Heater", bg: "#2d5a9e" },
  { label: "Boiler Service & Repair", location: "Euclid, OH", tag: "Boiler", bg: "#1B3A6B" },
  { label: "Gas Line Installation", location: "South Euclid, OH", tag: "Gas Line", bg: "#B5651D" },
  { label: "Toilet & Faucet Overhaul", location: "Euclid, OH", tag: "Fixtures", bg: "#2d5a9e" },
  { label: "Sewer Lateral Replacement", location: "Euclid, OH", tag: "Sewer", bg: "#1B3A6B" },
];

export default function GalleryPage() {
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
            Project Gallery
          </Badge>
          <h1
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              color: "white",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            115 Years of Work. Finished Right.
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.78)", maxWidth: "36rem" }}
          >
            A sample of jobs completed across Euclid and Northeast Ohio. Every project, every
            time — done once and done right.
          </p>
        </div>
      </section>

      {/* Gallery note */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <div
          className="flex items-center gap-2 px-3 py-2 text-sm"
          style={{
            background: "var(--ds-surface)",
            border: "1px solid var(--ds-border)",
            color: "var(--ds-text-muted)",
            borderRadius: "var(--ds-radius)",
          }}
        >
          <Camera size={15} style={{ color: "var(--ds-primary)" }} />
          <span>
            Photos of completed jobs will be added here before launch. This gallery shows job
            categories — owner to supply photos.
          </span>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="max-w-6xl mx-auto px-4 py-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map(({ label, location, tag, bg }) => (
            <div
              key={label}
              className="overflow-hidden"
              style={{
                borderRadius: "var(--ds-radius-lg)",
                border: "1px solid var(--ds-border)",
                boxShadow: "var(--ds-shadow-sm)",
              }}
            >
              {/* Placeholder image area */}
              <div
                className="h-48 flex flex-col items-center justify-center gap-3"
                style={{ background: bg }}
              >
                <Camera size={32} color="rgba(255,255,255,0.3)" />
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--ds-font-body)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Photo Coming Soon
                </span>
              </div>
              {/* Caption */}
              <div className="px-4 py-3" style={{ background: "var(--ds-surface)" }}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                    >
                      {label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--ds-text-muted)" }}>
                      {location}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs shrink-0"
                    style={{ borderRadius: "var(--ds-radius)" }}
                  >
                    {tag}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ds-primary)", color: "white" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: "var(--ds-fw-heading)",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Ready to Add Your Job to the List?
            </h2>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              Same-day service available. Call by 2 PM.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <AnchorButton
              href="tel:2163544770"
              size="lg"
              className="flex items-center gap-2"
              style={{
                background: "var(--ds-accent)",
                color: "var(--ds-accent-fg)",
                borderRadius: "var(--ds-radius)",
                fontWeight: 700,
              }}
            >
              <Phone size={18} />
              (216) 354-4770
            </AnchorButton>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                color: "white",
                background: "transparent",
                borderRadius: "var(--ds-radius)",
                fontWeight: 600,
              }}
            >
              Get a Quote
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
