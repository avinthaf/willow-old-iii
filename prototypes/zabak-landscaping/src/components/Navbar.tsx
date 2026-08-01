"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Leaf } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Before & After" },
  { href: "/about", label: "About Us" },
  { href: "/booking", label: "Free Consultation" },
  { href: "/contact", label: "Get a Quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b shadow-sm"
      style={{
        backgroundColor: "var(--ds-primary)",
        borderColor: "var(--ds-primary)",
      }}
    >
      {/* Trust strip */}
      <div
        className="text-xs text-center py-1 flex items-center justify-center gap-2"
        style={{ backgroundColor: "var(--ds-primary-dark)", color: "white" }}
      >
        <Leaf className="w-3 h-3 fill-current" />
        <span
          style={{
            letterSpacing: "var(--ds-ls-label)",
            textTransform: "var(--ds-tt-label)" as React.CSSProperties["textTransform"],
          }}
        >
          BBB A+ Accredited Since 2004 &nbsp;·&nbsp; 5.0 on Angi &nbsp;·&nbsp; State Licensed &amp; Insured &nbsp;·&nbsp; Free Consultations
        </span>
        <Leaf className="w-3 h-3 fill-current" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--ds-primary-fg)" }}
            >
              <Leaf className="w-6 h-6" style={{ color: "var(--ds-secondary)" }} />
              <div>
                <div
                  className="text-lg font-bold leading-tight"
                  style={{ fontFamily: "var(--ds-font-heading)" }}
                >
                  Zabak Landscaping
                </div>
                <div className="text-xs opacity-75" style={{ fontFamily: "var(--ds-font-body)" }}>
                  Cleveland, OH &nbsp;·&nbsp; Est. 1990
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-80 outline-none"
                style={{ color: "var(--ds-primary-fg)", fontFamily: "var(--ds-font-body)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a href="tel:2163989790" className="hidden sm:flex items-center gap-2">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "var(--ds-primary)",
                  borderRadius: "var(--ds-radius)",
                  fontFamily: "var(--ds-font-body)",
                }}
                className="font-semibold cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                (216) 398-9790
              </Button>
            </a>

            {/* Mobile phone icon */}
            <a
              href="tel:2163989790"
              className="sm:hidden flex items-center justify-center w-10 h-10"
              style={{ color: "var(--ds-primary-fg)" }}
              aria-label="Call Zabak Landscaping"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="lg:hidden flex items-center justify-center w-10 h-10 bg-transparent border-0 cursor-pointer"
                style={{ color: "var(--ds-primary-fg)" }}
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 mt-8">
                  <div>
                    <div
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-primary)" }}
                    >
                      Zabak Landscaping
                    </div>
                    <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                      Cleveland, OH · Est. 1990
                    </div>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium border-b pb-2 hover:opacity-70 transition-opacity"
                        style={{
                          color: "var(--ds-text)",
                          borderColor: "var(--ds-border)",
                          fontFamily: "var(--ds-font-body)",
                        }}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <a href="tel:2163989790">
                    <Button
                      className="w-full font-semibold cursor-pointer"
                      style={{
                        backgroundColor: "var(--ds-primary)",
                        color: "var(--ds-primary-fg)",
                        borderRadius: "var(--ds-radius)",
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      (216) 398-9790
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
