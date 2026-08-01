import Link from "next/link";
import { Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--ds-primary)",
        color: "var(--ds-primary-fg)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5" style={{ color: "var(--ds-secondary)" }} />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--ds-font-heading)" }}
              >
                Zabak Landscaping
              </span>
            </div>
            <div className="text-sm opacity-80 mb-1">Inc. · Cleveland, OH</div>
            <div className="text-sm opacity-60 mb-4">Est. 1990 · Owner: Scott R. Zabak</div>
            <p className="text-sm opacity-70 leading-relaxed">
              35 years of Cleveland landscaping built on word of mouth, honest
              pricing, and work that speaks for itself.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-widest opacity-60"
              style={{ fontFamily: "var(--ds-font-body)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Before & After" },
                { href: "/about", label: "About Us" },
                { href: "/booking", label: "Free Consultation" },
                { href: "/contact", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-widest opacity-60"
              style={{ fontFamily: "var(--ds-font-body)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-secondary)" }} />
                <a href="tel:2163989790" className="hover:opacity-100">
                  (216) 398-9790
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-secondary)" }} />
                <span>4736 Spring Rd<br />Cleveland, OH 44131</span>
              </li>
              <li className="text-sm opacity-80 mt-2">
                Free consultations available.<br />
                <span className="opacity-70">No job too small or too large.</span>
              </li>
            </ul>
          </div>

          {/* Trust signals */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-widest opacity-60"
              style={{ fontFamily: "var(--ds-font-body)" }}
            >
              Trust &amp; Credentials
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>BBB A+ Accredited Since 2004</li>
              <li>State Licensed &amp; Fully Insured</li>
              <li>5.0 Rating on Angi</li>
              <li>35+ Years in Business</li>
              <li style={{ color: "var(--ds-secondary)" }} className="font-semibold opacity-100">
                Free Consultations — Always
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-50"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <span>
            &copy; {year} Zabak Landscaping Inc. All rights reserved.
          </span>
          <span>Cleveland, OH &nbsp;·&nbsp; Serving Greater Cleveland Since 1990</span>
        </div>
      </div>
    </footer>
  );
}
