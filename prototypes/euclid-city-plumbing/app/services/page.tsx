import { AnchorButton, ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Phone,
  Droplets,
  Flame,
  Wrench,
  Shield,
  Waves,
  Thermometer,
  Zap,
  Container,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Droplets,
    title: "Drain & Sewer Cleaning",
    description:
      "Electric snake service to clear clogs in kitchen, bathroom, and basement drains fast. We don't just break the clog — we clear the line.",
    details: [
      "Kitchen and bathroom drain clearing",
      "Basement floor drain service",
      "Electric snake — not chemicals",
      "Main sewer line cleaning",
    ],
  },
  {
    icon: Flame,
    title: "Water Heater Repair & Installation",
    description:
      "Tank and tankless water heater service, same-day replacement available. If your water isn't hot, we fix it today.",
    details: [
      "Tank water heater repair and replacement",
      "Tankless water heater installation",
      "Same-day replacement available",
      "All major brands serviced",
    ],
  },
  {
    icon: Wrench,
    title: "Toilet & Faucet Repair",
    description:
      "Leaks, running toilets, dripping faucets — fixed completely, not patched. We do it right so you don't call twice.",
    details: [
      "Running toilet repair",
      "Faucet drip and leak repair",
      "Complete fixture replacement",
      "Shut-off valve replacement",
    ],
  },
  {
    icon: Shield,
    title: "Sump Pump Service & Installation",
    description:
      "Keep your basement dry with pump installation, testing, and emergency replacement. We've been keeping Euclid basements dry for over a century.",
    details: [
      "Sump pump installation",
      "Existing pump inspection and testing",
      "Emergency replacement",
      "Backup pump installation",
    ],
  },
  {
    icon: Waves,
    title: "Main Water Line Repair",
    description:
      "Leak detection, pipe repair, and full water line replacement for Euclid homes. We handle the full job, start to finish.",
    details: [
      "Water line leak detection",
      "Pipe repair and patching",
      "Full main water line replacement",
      "Service connections",
    ],
  },
  {
    icon: Thermometer,
    title: "Boiler Service",
    description:
      "Hydronic heating system service and repair. We are a licensed Ohio Hydronics Contractor (HY.14882) — not every plumber can say that.",
    details: [
      "Boiler inspection and tune-up",
      "Hydronic system repair",
      "Pressure relief valve service",
      "OH Hydronics License HY.14882",
    ],
  },
  {
    icon: Zap,
    title: "Gas Line Piping",
    description:
      "Licensed gas line installation and repair for residential properties. Precision work — done safely for over a century.",
    details: [
      "New gas line installation",
      "Gas line repair and rerouting",
      "Appliance gas connections",
      "Leak detection and testing",
    ],
  },
  {
    icon: Container,
    title: "Sewer Lateral & Septic Service",
    description:
      "Full sewer lateral repair and septic tank/system work. From camera inspection to complete replacement — we handle the whole job.",
    details: [
      "Sewer lateral repair and replacement",
      "Septic tank pumping and service",
      "Septic system inspection",
      "Root intrusion clearing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      {/* Page header */}
      <section style={{ background: "var(--ds-primary)" }} className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <Badge
            className="mb-4 uppercase tracking-widest text-xs"
            style={{
              background: "var(--ds-accent)",
              color: "var(--ds-accent-fg)",
              borderRadius: "var(--ds-radius)",
            }}
          >
            Plumbing Services
          </Badge>
          <h1
            style={{
              fontFamily: "var(--ds-font-heading)",
              fontWeight: "var(--ds-fw-heading)",
              color: "white",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            Everything Plumbing. One Call.
          </h1>
          <p
            className="mt-3 text-base"
            style={{ color: "rgba(255,255,255,0.78)", maxWidth: "36rem" }}
          >
            Licensed for plumbing, hydronics, and HVAC in Ohio. We&apos;ve been handling
            the full range of residential plumbing work since 1911.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map(({ icon: Icon, title, description, details }) => (
            <Card
              key={title}
              style={{
                borderRadius: "var(--ds-radius-lg)",
                border: "1px solid var(--ds-border)",
                boxShadow: "var(--ds-shadow-sm)",
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--ds-primary)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <Icon size={22} color="white" />
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--ds-font-heading)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "var(--ds-text)",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </h2>
                </div>
              </CardHeader>
              <CardContent>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--ds-text-muted)" }}
                >
                  {description}
                </p>
                <ul className="space-y-1.5">
                  {details.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--ds-text)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--ds-accent)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "var(--ds-primary)", color: "white" }}>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2
              style={{
                fontFamily: "var(--ds-font-heading)",
                fontWeight: "var(--ds-fw-heading)",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Don&apos;t see what you need? Call us.
            </h2>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              If it&apos;s plumbing, we&apos;ve seen it before. 115 years covers a lot of ground.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <AnchorButton
              href="tel:2163544770"
              size="lg"
              className="flex items-center gap-2"
              style={{
                background: "var(--ds-accent)",
                color: "var(--ds-accent-fg)",
                borderRadius: "var(--ds-radius)",
                fontWeight: 700,
              }}
            >
              <Phone size={18} />
              (216) 354-4770
            </AnchorButton>
            <ButtonLink
              href="/contact"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                color: "white",
                background: "transparent",
                borderRadius: "var(--ds-radius)",
                fontWeight: 600,
              }}
            >
              Get a Quote
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
