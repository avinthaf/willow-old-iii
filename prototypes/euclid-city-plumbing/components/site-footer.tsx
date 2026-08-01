import Link from "next/link";
import { Phone, MapPin, Clock, Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      style={{ background: "var(--ds-primary)", color: "rgba(255,255,255,0.85)" }}
      className="mt-auto"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 — About */}
        <div>
          <h3
            style={{
              fontFamily: "var(--ds-font-heading)",
              color: "white",
              fontSize: "1.1rem",
              marginBottom: "0.75rem",
            }}
          >
            Euclid City Plumbing
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            The Larick family has been fixing plumbing problems in Northeast Ohio since 1911.
            Four generations. Honest pricing. Work done right.
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span
              style={{
                background: "var(--ds-accent)",
                color: "var(--ds-accent-fg)",
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                padding: "2px 8px",
                borderRadius: "var(--ds-radius)",
                fontWeight: 600,
              }}
            >
              BBB A+
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                padding: "2px 8px",
                borderRadius: "var(--ds-radius)",
                fontWeight: 600,
              }}
            >
              PL.14882
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                fontSize: "0.7rem",
                letterSpacing: "0.06em",
                padding: "2px 8px",
                borderRadius: "var(--ds-radius)",
                fontWeight: 600,
              }}
            >
              HY.14882
            </span>
          </div>
        </div>

        {/* Column 2 — Contact */}
        <div>
          <h3
            style={{
              fontFamily: "var(--ds-font-heading)",
              color: "white",
              fontSize: "1.1rem",
              marginBottom: "0.75rem",
            }}
          >
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 shrink-0" style={{ color: "var(--ds-accent)" }} />
              <div>
                <a
                  href="tel:2163544770"
                  className="font-semibold hover:underline"
                  style={{ color: "white" }}
                >
                  (216) 354-4770
                </a>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>Primary line</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--ds-accent)" }} />
              <span style={{ color: "rgba(255,255,255,0.8)" }}>
                23745 Lake Shore Blvd<br />Euclid, OH 44123
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={15} className="mt-0.5 shrink-0" style={{ color: "var(--ds-accent)" }} />
              <span style={{ color: "rgba(255,255,255,0.8)" }}>
                Monday – Sunday<br />9:00 AM – 5:00 PM
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3 — Quick links */}
        <div>
          <h3
            style={{
              fontFamily: "var(--ds-font-heading)",
              color: "white",
              fontSize: "1.1rem",
              marginBottom: "0.75rem",
            }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/services", label: "Our Services" },
              { href: "/gallery", label: "Project Gallery" },
              { href: "/booking", label: "Book a Service Call" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Get a Quote" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ color: "rgba(255,255,255,0.75)" }}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.45)",
          fontSize: "0.75rem",
        }}
        className="text-center py-4"
      >
        <div className="flex items-center justify-center gap-1">
          <Shield size={12} />
          <span>
            Ohio Licensed Plumbing Contractor PL.14882 · Hydronics HY.14882 · HVAC HV.14882
          </span>
        </div>
        <p className="mt-1">
          © {new Date().getFullYear()} Euclid City Plumbing Service Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
