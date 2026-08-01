"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, CalendarCheck, Star } from "lucide-react";

type GalleryItem = {
  label: string;
  category: string;
  bgColor: string;
  textColor: string;
  note: string;
};

const galleryItems: GalleryItem[] = [
  {
    label: "Water Heater\nReplacement",
    category: "Hot Water Heater",
    bgColor: "#1B3A6B",
    textColor: "#FFFFFF",
    note: "Same-day install, Parma",
  },
  {
    label: "Drain\nCleaning",
    category: "Drain Service",
    bgColor: "#E8A020",
    textColor: "#111111",
    note: "Kitchen sink cleared, Seven Hills",
  },
  {
    label: "Sump Pump\nInstall",
    category: "Sump Pump",
    bgColor: "#0d2447",
    textColor: "#FFFFFF",
    note: "New system with battery backup, Parma Heights",
  },
  {
    label: "Bathroom\nRemodel — Before",
    category: "Bathroom Plumbing",
    bgColor: "#5A5A5A",
    textColor: "#FFFFFF",
    note: "Original fixtures, Middleburg Heights",
  },
  {
    label: "Bathroom\nRemodel — After",
    category: "Bathroom Plumbing",
    bgColor: "#1B3A6B",
    textColor: "#FFFFFF",
    note: "New vanity, faucets, and toilet, Middleburg Heights",
  },
  {
    label: "Leaky Pipe\nRepair",
    category: "Leak Detection",
    bgColor: "#C82A1C",
    textColor: "#FFFFFF",
    note: "Copper pipe repair, Seven Hills",
  },
  {
    label: "Standing Shower\nInstall",
    category: "Shower Installation",
    bgColor: "#0d2447",
    textColor: "#FFFFFF",
    note: "New shower base and valve, Parma",
  },
  {
    label: "Kitchen Faucet\nReplacement",
    category: "Kitchen Plumbing",
    bgColor: "#E8A020",
    textColor: "#111111",
    note: "Pull-down faucet install, Berea",
  },
  {
    label: "House\nRe-Pipe",
    category: "Re-Piping",
    bgColor: "#1B3A6B",
    textColor: "#FFFFFF",
    note: "Full PEX re-pipe, 1950s home, Parma",
  },
];

const categories = [
  "All",
  "Hot Water Heater",
  "Drain Service",
  "Sump Pump",
  "Bathroom Plumbing",
  "Kitchen Plumbing",
  "Re-Piping",
  "Shower Installation",
  "Leak Detection",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <section
        className="py-14 lg:py-20"
        style={{
          background: "linear-gradient(135deg, var(--ds-secondary) 0%, var(--ds-primary-dark) 100%)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Before &amp; After
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Our Work Speaks for Itself
          </h1>
          <p className="text-lg opacity-80 max-w-2xl" style={{ fontFamily: "var(--ds-font-body)" }}>
            Real jobs completed for Cleveland-area homeowners. Every project
            backed by a free one-year warranty on labor and materials.
          </p>
        </div>
      </section>

      {/* Category strip */}
      <section
        className="py-4 border-b overflow-x-auto"
        style={{ backgroundColor: "var(--ds-surface)", borderColor: "var(--ds-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => {
              const active = cat === selectedCategory;
              return (
                <Badge
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="cursor-pointer text-xs px-3 py-1.5 font-medium"
                  style={{
                    backgroundColor: active ? "var(--ds-primary)" : "var(--ds-bg)",
                    color: active ? "var(--ds-primary-fg)" : "var(--ds-text)",
                    border: `1px solid ${active ? "transparent" : "var(--ds-border)"}`,
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  {cat}
                </Badge>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden group"
                style={{
                  borderRadius: "var(--ds-radius)",
                  minHeight: "220px",
                  backgroundColor: item.bgColor,
                }}
              >
                {/* Subtle texture */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px",
                  }}
                />

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-between min-h-[220px]">
                  <div>
                    <Badge
                      className="text-xs mb-3 font-medium"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: item.textColor,
                        borderRadius: "var(--ds-radius)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      {item.category}
                    </Badge>
                    <h3
                      className="text-xl font-bold leading-tight whitespace-pre-line"
                      style={{
                        fontFamily: "var(--ds-font-heading)",
                        color: item.textColor,
                      }}
                    >
                      {item.label}
                    </h3>
                  </div>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-current"
                          style={{ color: "var(--ds-star)" }}
                        />
                      ))}
                    </div>
                    <p
                      className="text-xs mt-1 opacity-75"
                      style={{ color: item.textColor }}
                    >
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{
          background: "linear-gradient(135deg, var(--ds-secondary) 0%, var(--ds-primary-dark) 100%)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Want Results Like These?
          </h2>
          <p className="opacity-80 text-base mb-8">
            Call us today for a same-day visit and an upfront quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4402125756">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                (440) 212-5756
              </Button>
            </a>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.6)",
                  background: "transparent",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
