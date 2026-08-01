"use client";

import Link from "next/link";
import { useState } from "react";
import { AnchorButton } from "@/components/ui/button-link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Online" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get a Quote" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ background: "var(--ds-primary)", borderBottom: "3px solid var(--ds-accent)" }}
      className="sticky top-0 z-50 shadow-md"
    >
      {/* Top bar */}
      <div
        style={{ background: "var(--ds-accent)", color: "var(--ds-accent-fg)" }}
        className="text-center py-1 text-sm font-semibold tracking-wide"
      >
        Same-Day Service Available — Call by 2 PM &nbsp;|&nbsp;
        <a href="tel:2163544770" className="font-bold underline underline-offset-2">
          (216) 354-4770
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / wordmark */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              color: "white",
              fontSize: "1.25rem",
              lineHeight: "1.2",
            }}
          >
            Euclid City Plumbing
          </span>
          <span
            style={{
              color: "var(--ds-accent)",
              fontSize: "0.7rem",
              letterSpacing: "var(--ds-ls-label)",
              textTransform: "uppercase" as const,
              fontFamily: "var(--ds-font-body)",
            }}
          >
            Licensed Since 1911 · PL.14882
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--ds-font-body)" }}
              className="px-3 py-1.5 text-sm font-medium rounded hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <AnchorButton
            href="tel:2163544770"
            size="sm"
            className="ml-2 font-semibold flex items-center gap-1.5"
            style={{
              background: "var(--ds-accent)",
              color: "var(--ds-accent-fg)",
              borderRadius: "var(--ds-radius)",
            }}
          >
            <Phone size={14} />
            (216) 354-4770
          </AnchorButton>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <AnchorButton
            href="tel:2163544770"
            size="sm"
            className="flex items-center justify-center"
            style={{
              background: "var(--ds-accent)",
              color: "var(--ds-accent-fg)",
              borderRadius: "var(--ds-radius)",
            }}
          >
            <Phone size={16} />
          </AnchorButton>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            style={{ color: "white" }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              side="right"
              style={{ background: "var(--ds-primary)", border: "none" }}
            >
              <nav className="flex flex-col gap-2 mt-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      color: "white",
                      fontFamily: "var(--ds-font-body)",
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                    }}
                    className="py-3 px-2 text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
