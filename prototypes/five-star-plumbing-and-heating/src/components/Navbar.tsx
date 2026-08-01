"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Star } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Book a Visit" },
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
      {/* Top strip */}
      <div
        className="text-xs text-center py-1 flex items-center justify-center gap-2"
        style={{ backgroundColor: "var(--ds-secondary)", color: "white" }}
      >
        <Star className="w-3 h-3 fill-current" />
        <span style={{ letterSpacing: "var(--ds-ls-label)", textTransform: "var(--ds-tt-label)" as React.CSSProperties["textTransform"] }}>
          5.0 Stars · 80+ Google Reviews · BBB A+ Accredited · Military Discount Available
        </span>
        <Star className="w-3 h-3 fill-current" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="flex items-center gap-1"
              style={{ color: "var(--ds-primary-fg)" }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "white" }}
                  />
                ))}
              </div>
              <div className="ml-2">
                <div
                  className="text-lg font-bold leading-tight"
                  style={{ fontFamily: "var(--ds-font-heading)" }}
                >
                  Five Star Plumbing
                </div>
                <div className="text-xs opacity-80" style={{ fontFamily: "var(--ds-font-body)" }}>
                  &amp; Heating LLC · Parma, OH
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
            <a href="tel:4402125756" className="hidden sm:flex items-center gap-2">
              <Button
                style={{
                  backgroundColor: "var(--ds-secondary)",
                  color: "white",
                  borderRadius: "var(--ds-radius)",
                  fontFamily: "var(--ds-font-body)",
                }}
                className="font-semibold"
              >
                <Phone className="w-4 h-4" />
                (440) 212-5756
              </Button>
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
                      Five Star Plumbing
                    </div>
                    <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                      &amp; Heating LLC
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
                  <a href="tel:4402125756">
                    <Button
                      className="w-full font-semibold"
                      style={{
                        backgroundColor: "var(--ds-primary)",
                        color: "var(--ds-primary-fg)",
                        borderRadius: "var(--ds-radius)",
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      (440) 212-5756
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
