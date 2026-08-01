"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, CalendarCheck, Camera } from "lucide-react";

type GalleryPair = {
  category: string;
  location: string;
  description: string;
  before: string;
  after: string;
};

const galleryPairs: GalleryPair[] = [
  {
    category: "Backyard Transformation",
    location: "Cleveland, OH",
    description:
      "Neglected backyard converted to a relaxing outdoor living space with stone patio, garden beds, and healthy lawn.",
    before: "/images/gallery-before-1.jpg",
    after: "/images/gallery-after-1.jpg",
  },
  {
    category: "Front Yard Curb Appeal",
    location: "Independence, OH",
    description:
      "Plain front yard redesigned with a stone walkway, mixed flower beds, and professionally edged lawn.",
    before: "/images/gallery-before-1.jpg",
    after: "/images/gallery-after-1.jpg",
  },
  {
    category: "Shrub Removal & Replant",
    location: "Seven Hills, OH",
    description:
      "Overgrown foundation shrubs removed and replaced with low-maintenance native plantings and fresh mulch.",
    before: "/images/gallery-before-1.jpg",
    after: "/images/gallery-after-1.jpg",
  },
  {
    category: "Hardscape Installation",
    location: "Parma, OH",
    description:
      "Bare concrete slab removed and replaced with a natural stone patio with integrated garden borders.",
    before: "/images/gallery-before-1.jpg",
    after: "/images/gallery-after-1.jpg",
  },
];

const categories = [
  "All",
  "Backyard Transformation",
  "Front Yard Curb Appeal",
  "Shrub Removal & Replant",
  "Hardscape Installation",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? galleryPairs
      : galleryPairs.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <section
        className="py-14 lg:py-20"
        style={{
          backgroundColor: "var(--ds-primary)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "var(--ds-ls-label)" }}
          >
            Before &amp; After
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Real Yards. Real Results.
          </h1>
          <p
            className="text-lg opacity-80 max-w-2xl"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            35 years of transformations across Cleveland and the surrounding
            communities. Every project started with a free consultation and ended
            with a yard the homeowner is proud of.
          </p>
        </div>
      </section>

      {/* Category filter */}
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

      {/* Gallery pairs */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.map((pair, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border"
              style={{
                borderColor: "var(--ds-border)",
                backgroundColor: "var(--ds-surface)",
                borderRadius: "var(--ds-radius)",
              }}
            >
              {/* Labels row */}
              <div className="px-6 pt-6 pb-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                    >
                      {pair.category}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                      {pair.location} &nbsp;·&nbsp; {pair.description}
                    </p>
                  </div>
                  <Badge
                    style={{
                      backgroundColor: "var(--ds-primary)",
                      color: "white",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    Zabak Landscaping Project
                  </Badge>
                </div>
              </div>

              {/* Before / After columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {(["BEFORE", "AFTER"] as const).map((label) => (
                  <div
                    key={label}
                    className="relative h-72 flex flex-col items-center justify-center gap-3"
                    style={{
                      backgroundColor: label === "BEFORE" ? "var(--ds-bg)" : "color-mix(in srgb, var(--ds-primary) 8%, var(--ds-bg))",
                      borderTop: "1px solid var(--ds-border)",
                      borderRight: label === "BEFORE" ? "1px solid var(--ds-border)" : "none",
                    }}
                  >
                    <div
                      className="absolute top-3 left-3 px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: label === "BEFORE" ? "rgba(0,0,0,0.12)" : "var(--ds-primary)",
                        color: label === "BEFORE" ? "var(--ds-text-muted)" : "white",
                        borderRadius: "var(--ds-radius)",
                      }}
                    >
                      {label}
                    </div>
                    <Camera
                      className="w-8 h-8 opacity-25"
                      style={{ color: label === "BEFORE" ? "var(--ds-text-muted)" : "var(--ds-primary)" }}
                    />
                    <div className="text-center px-6">
                      <div
                        className="font-semibold text-sm mb-1"
                        style={{ color: label === "BEFORE" ? "var(--ds-text-muted)" : "var(--ds-primary)" }}
                      >
                        Photos Coming Soon
                      </div>
                      <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                        {label === "BEFORE"
                          ? "Job site photo will be added here"
                          : "Completed project photo will be added here"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{
          backgroundColor: "var(--ds-primary)",
          color: "white",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Want Results Like These?
          </h2>
          <p className="opacity-85 text-base mb-8">
            Every transformation starts with a free consultation. Call Scott or
            schedule online — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold cursor-pointer"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:2163989790">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold cursor-pointer"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.6)",
                  background: "transparent",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                (216) 398-9790
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
