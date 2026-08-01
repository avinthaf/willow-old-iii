import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--ds-secondary)",
        color: "var(--ds-primary-fg)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-current"
                  style={{ color: "var(--ds-star)" }}
                />
              ))}
            </div>
            <div
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "var(--ds-font-heading)" }}
            >
              Five Star Plumbing
            </div>
            <div className="text-sm opacity-80 mb-4">and Heating LLC</div>
            <p className="text-sm opacity-70 leading-relaxed">
              Serving Parma and surrounding communities since 2012. Owned and
              operated since 2012.
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
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/booking", label: "Book a Visit" },
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
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                <a href="tel:4402125756" className="hover:opacity-100">
                  (440) 212-5756
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                <span>6310 Rousseau Dr<br />Parma, OH 44129</span>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                <span>
                  Mon–Fri: 8:00 AM – 5:00 PM
                  <br />
                  <span className="opacity-70">Sat–Sun: Closed</span>
                </span>
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
              <li>BBB A+ Accredited (since 2014)</li>
              <li>Fully Insured &amp; Bonded</li>
              <li>5.0 Stars · 80+ Google Reviews</li>
              <li>Free 1-Year Labor &amp; Materials Warranty</li>
              <li style={{ color: "var(--ds-primary)" }} className="font-semibold opacity-100">
                Military Discount Available
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-50"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <span>
            &copy; {year} Five Star Plumbing and Heating LLC. All rights reserved.
          </span>
          <span>Parma, OH · Serving the Greater Cleveland Area</span>
        </div>
      </div>
    </footer>
  );
}
