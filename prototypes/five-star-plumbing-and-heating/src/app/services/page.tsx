import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  CalendarCheck,
  Droplets,
  Wrench,
  ShieldCheck,
  Flame,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Water Leak Detection",
    desc: "Fast, accurate pinpointing of hidden leaks before they cause costly structural damage.",
    bullets: [
      "Non-invasive detection techniques",
      "Hidden pipe leaks behind walls and under slabs",
      "Quick diagnosis to minimize water damage",
      "Written quote before any work begins",
    ],
  },
  {
    icon: Wrench,
    title: "Drain Cleaning",
    desc: "Clearing clogged sinks, toilets, bathtubs, and floor drains with professional-grade equipment.",
    bullets: [
      "Kitchen sink and garbage disposal clogs",
      "Bathroom sink, tub, and shower drains",
      "Toilet clogs and slow-drain diagnosis",
      "Floor drain and basement drain cleaning",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Sump Pump Installation and Repair",
    desc: "Keep your basement dry with a properly sized and installed sump pump system.",
    bullets: [
      "New sump pump installation",
      "Existing pump inspection and repair",
      "Battery backup system installation",
      "Discharge line routing and waterproofing consultation",
    ],
  },
  {
    icon: Flame,
    title: "Hot Water Heater Installation and Repair",
    desc: "All major brands. Same-day service available when your water heater goes out.",
    bullets: [
      "Tank and tankless water heater installation",
      "All major brands — Rheem, Bradford White, AO Smith, and more",
      "Emergency same-day replacement available",
      "Anode rod and sediment flush maintenance",
    ],
  },
  {
    icon: Wrench,
    title: "Kitchen Plumbing",
    desc: "Faucet installation, sink replacement, dishwasher hookups, and leak repairs in the kitchen.",
    bullets: [
      "Kitchen faucet installation and replacement",
      "Undermount and drop-in sink installation",
      "Dishwasher water line hookup",
      "Garbage disposal installation and repair",
    ],
  },
  {
    icon: Wrench,
    title: "Bathroom Plumbing and Remodeling",
    desc: "Full bathroom plumbing from new construction rough-in to complete fixture replacement.",
    bullets: [
      "Toilet installation and repair",
      "Vanity and sink replacement",
      "Shower valve and faucet installation",
      "New construction rough-in plumbing",
    ],
  },
  {
    icon: Droplets,
    title: "Bathtub and Shower Installation",
    desc: "Bathtub bases, standing showers, and shower faucet installation done right the first time.",
    bullets: [
      "Bathtub base replacement and installation",
      "Standing shower pan and enclosure installation",
      "Shower faucet and valve replacement",
      "Tile-ready shower base installation",
    ],
  },
  {
    icon: Wrench,
    title: "Toilet Installation and Repair",
    desc: "New toilet installation and leaky or running toilet repairs.",
    bullets: [
      "New toilet installation (supply your own or we source)",
      "Running toilet repair — flapper, fill valve, flush valve",
      "Leaking toilet base repair",
      "Wax ring replacement",
    ],
  },
  {
    icon: Wrench,
    title: "Faucet and Sink Installation",
    desc: "Kitchen and bathroom faucet replacement with clean, professional results.",
    bullets: [
      "Single and double-handle faucet installation",
      "Supply line replacement",
      "Shut-off valve repair and replacement",
      "Leaky faucet repair — cartridge, O-ring, seat",
    ],
  },
  {
    icon: Droplets,
    title: "House Re-Piping",
    desc: "Full residential re-piping for aging or failing pipe systems.",
    bullets: [
      "Copper and PEX re-piping for entire homes",
      "Galvanized pipe replacement",
      "Partial re-pipe for problem sections",
      "Water pressure testing before and after",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
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
            Five Star Plumbing and Heating LLC
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Our Plumbing Services
          </h1>
          <p className="text-lg opacity-80 max-w-2xl" style={{ fontFamily: "var(--ds-font-body)" }}>
            Every service comes with upfront pricing, same-day availability
            when possible, and our free one-year warranty on labor and
            materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="tel:4402125756">
              <Button
                size="lg"
                className="font-bold"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Same-Day Service
              </Button>
            </a>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold"
                style={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.6)",
                  background: "transparent",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Schedule Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promise strip */}
      <section
        className="py-4 border-b"
        style={{
          backgroundColor: "var(--ds-surface)",
          borderColor: "var(--ds-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              "Upfront quotes before work begins",
              "Free 1-year labor & materials warranty",
              "Same-day service available Mon–Fri",
              "Fully insured and bonded",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--ds-primary)" }}
                />
                <span style={{ color: "var(--ds-text)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, bullets }) => (
              <Card
                key={title}
                className="border shadow-sm hover:shadow-md transition-shadow"
                style={{
                  borderColor: "var(--ds-border)",
                  borderRadius: "var(--ds-radius)",
                  backgroundColor: "var(--ds-surface)",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-11 h-11 flex items-center justify-center flex-shrink-0"
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
                    <div>
                      <h2
                        className="font-bold text-lg leading-tight"
                        style={{
                          fontFamily: "var(--ds-font-heading)",
                          color: "var(--ds-text)",
                        }}
                      >
                        {title}
                      </h2>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--ds-text-muted)" }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--ds-accent)" }}
                        />
                        <span style={{ color: "var(--ds-text)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Military discount callout */}
      <section
        className="py-10 border-t border-b"
        style={{
          backgroundColor: "var(--ds-surface)",
          borderColor: "var(--ds-border)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            className="mb-4 text-sm px-4 py-1 font-semibold"
            style={{
              backgroundColor: "var(--ds-accent)",
              color: "var(--ds-accent-fg)",
              borderRadius: "var(--ds-radius)",
            }}
          >
            Military Discount Available
          </Badge>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
          >
            We Honor Those Who Serve
          </h3>
          <p className="text-base" style={{ color: "var(--ds-text-muted)" }}>
            Five Star Plumbing is proud to offer a military discount for active
            duty, veterans, and their families. Mention your service when you
            call — no documentation required.
          </p>
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
            Not Sure What You Need?
          </h2>
          <p
            className="opacity-80 text-base mb-8"
            style={{ fontFamily: "var(--ds-font-body)" }}
          >
            Call us and describe the problem. We&apos;ll give you an honest
            assessment and a clear quote — no pressure, no upselling.
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
            <Link href="/contact">
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
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
