import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  CalendarCheck,
  CheckCircle,
  Sprout,
  Hammer,
  Waves,
  Scissors,
  FlowerIcon,
  Droplets,
  Trash2,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Landscape Design & Installation",
    desc: "Custom outdoor space planning from initial concept through final installation, tailored to your goals and budget. Scott works directly with every homeowner to understand the vision, then brings it to life with plants, materials, and craftsmanship built to last.",
    image: "/images/hero.jpg",
    bullets: [
      "Full concept-to-completion project management",
      "Tailored to your budget and lifestyle",
      "Low-maintenance designs that age beautifully",
      "Free initial design consultation",
    ],
  },
  {
    icon: Scissors,
    title: "Weekly Lawn & Foliage Maintenance",
    desc: "Recurring mowing, trimming, edging, and seasonal care to keep your property looking its best year-round. Zabak Landscaping handles everything on a regular schedule so you never have to think about it.",
    image: "/images/about-banner.jpg",
    bullets: [
      "Weekly or bi-weekly mowing schedules",
      "Professional edging and trimming",
      "Seasonal cleanups (spring and fall)",
      "Foliage shaping and hedge care",
    ],
  },
  {
    icon: Droplets,
    title: "Irrigation System Installation",
    desc: "Efficient sprinkler and drip systems designed to protect your investment and reduce water waste. A properly installed irrigation system keeps your lawn and garden healthy with minimal effort.",
    image: "/images/hero.jpg",
    bullets: [
      "Customized zone layouts for every yard",
      "Water-efficient drip and spray systems",
      "Smart timer setup and programming",
      "Seasonal startup and winterization",
    ],
  },
  {
    icon: Hammer,
    title: "Hardscaping (Patios & Walkways)",
    desc: "Durable, attractive patios, stone walkways, and retaining structures that extend your living space outdoors. Zabak builds hardscapes that complement your landscape and stand up to Cleveland's demanding seasons.",
    image: "/images/about-banner.jpg",
    bullets: [
      "Natural stone, brick, and paver patios",
      "Custom walkways and step installations",
      "Retaining walls and garden borders",
      "Drainage solutions integrated into design",
    ],
  },
  {
    icon: Waves,
    title: "Pond & Fountain Installation",
    desc: "Custom water features that add character and tranquility to any residential or commercial landscape. From small decorative fountains to full backyard ponds, Zabak designs and installs water features that become the centerpiece of your outdoor space.",
    image: "/images/hero.jpg",
    bullets: [
      "Custom pond and waterfall design",
      "Fountain and bubbler installations",
      "Fish-friendly ecosystem ponds",
      "Water feature maintenance and repair",
    ],
  },
  {
    icon: Trash2,
    title: "Shrub & Bush Removal",
    desc: "Safe, clean removal of overgrown or unwanted shrubs with thorough cleanup — they were never there. Zabak's crews remove shrubs of any size and leave your property spotless, ready for new plantings or hardscape.",
    image: "/images/about-banner.jpg",
    bullets: [
      "Shrubs and bushes of any size",
      "Stump grinding available",
      "Complete debris haul-away",
      "Site ready for replanting same day",
    ],
  },
  {
    icon: FlowerIcon,
    title: "Custom Garden Design",
    desc: "Curated planting plans that combine curb appeal with low-maintenance beauty and lasting ROI. Scott selects plant varieties suited to Northeast Ohio's climate and designs beds that look great every season with minimal upkeep.",
    image: "/images/hero.jpg",
    bullets: [
      "Perennial and annual mixed designs",
      "Native Ohio plants for low maintenance",
      "Foundation bed and border design",
      "Seasonal color planning",
    ],
  },
];

export default function ServicesPage() {
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
            What We Offer
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Complete Landscaping Services
          </h1>
          <p
            className="text-lg opacity-80 max-w-2xl"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            From concept to completion — Zabak Landscaping handles every aspect
            of your outdoor space. No job too small or too large, and every
            project starts with a free consultation.
          </p>
          <div className="flex gap-4 mt-8">
            <Link href="/booking">
              <Button
                size="lg"
                className="font-bold cursor-pointer"
                style={{
                  backgroundColor: "white",
                  color: "var(--ds-primary)",
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
                className="font-semibold cursor-pointer"
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

      {/* Service detail cards */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--ds-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map(({ icon: Icon, title, desc, image, bullets }, idx) => (
            <Card
              key={title}
              className="border shadow-sm overflow-hidden"
              style={{
                borderColor: "var(--ds-border)",
                borderRadius: "var(--ds-radius)",
              }}
            >
              <CardContent className="p-0">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image placeholder */}
                  <div
                    className={`h-64 lg:h-auto min-h-[260px] flex flex-col items-center justify-center gap-3 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                    style={{
                      backgroundColor: "var(--ds-surface)",
                      borderRight: idx % 2 === 0 ? "1px solid var(--ds-border)" : "none",
                      borderLeft: idx % 2 === 1 ? "1px solid var(--ds-border)" : "none",
                    }}
                  >
                    <Camera className="w-8 h-8 opacity-20" style={{ color: "var(--ds-primary)" }} />
                    <div className="text-center px-8">
                      <div className="font-semibold text-sm mb-1" style={{ color: "var(--ds-text-muted)" }}>
                        Photos Coming Soon
                      </div>
                      <div className="text-xs" style={{ color: "var(--ds-text-muted)", opacity: 0.7 }}>
                        Project photos will be added here
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: "var(--ds-primary)",
                        borderRadius: "var(--ds-radius)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "var(--ds-primary-fg)" }}
                      />
                    </div>
                    <h2
                      className="text-2xl font-bold mb-3"
                      style={{
                        fontFamily: "var(--ds-font-heading)",
                        color: "var(--ds-text)",
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      className="text-base leading-relaxed mb-5"
                      style={{ color: "var(--ds-text-muted)" }}
                    >
                      {desc}
                    </p>
                    <ul className="space-y-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: "var(--ds-primary)" }}
                          />
                          <span style={{ color: "var(--ds-text)" }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{
          backgroundColor: "var(--ds-primary)",
          color: "var(--ds-primary-fg)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="opacity-80 text-base mb-8">
            Call Scott directly or book a free consultation online. He&apos;ll walk
            your property, listen to your goals, and put together an honest plan
            that fits your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="w-full sm:w-auto font-bold cursor-pointer"
                style={{
                  backgroundColor: "white",
                  color: "var(--ds-primary)",
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
