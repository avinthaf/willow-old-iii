"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
  Send,
} from "lucide-react";

const SERVICE_TYPES = [
  "Water Leak Detection",
  "Drain Cleaning",
  "Sump Pump Installation or Repair",
  "Hot Water Heater Service",
  "Kitchen Plumbing",
  "Bathroom Plumbing or Remodeling",
  "Bathtub or Shower Installation",
  "Toilet Installation or Repair",
  "Faucet or Sink Installation",
  "House Re-Piping",
  "General Question",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

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
            Get in Touch
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Get a Free Quote
          </h1>
          <p className="text-lg opacity-80 max-w-2xl" style={{ fontFamily: "var(--ds-font-body)" }}>
            Describe your plumbing problem and we&apos;ll get back to you with
            an honest quote — fast, and at no charge.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              <Card
                className="border shadow-sm"
                style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
              >
                <CardContent className="p-6 space-y-5">
                  <h3
                    className="font-bold text-lg"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                  >
                    Prefer to Call?
                  </h3>

                  <div className="flex items-start gap-3">
                    <Phone
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--ds-accent)" }}
                    />
                    <div>
                      <a
                        href="tel:4402125756"
                        className="font-bold text-lg hover:opacity-80 transition-opacity"
                        style={{ color: "var(--ds-primary)" }}
                      >
                        (440) 212-5756
                      </a>
                      <div className="text-xs mt-0.5" style={{ color: "var(--ds-text-muted)" }}>
                        Owner answers directly
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--ds-accent)" }}
                    />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--ds-text)" }}>
                        Monday – Friday
                      </div>
                      <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                        8:00 AM – 5:00 PM
                      </div>
                      <div className="text-xs mt-1" style={{ color: "var(--ds-text-muted)" }}>
                        Sat &amp; Sun: Closed
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--ds-accent)" }}
                    />
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--ds-text)" }}>
                        Based in Parma, OH
                      </div>
                      <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                        6310 Rousseau Dr, Parma OH 44129
                      </div>
                      <div className="text-xs mt-1" style={{ color: "var(--ds-text-muted)" }}>
                        Serving SW Greater Cleveland
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="border shadow-sm"
                style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
              >
                <CardContent className="p-6">
                  <h3
                    className="font-bold text-base mb-3"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                  >
                    What to Expect
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Response within 1–2 business hours",
                      "Upfront quote before any work begins",
                      "No trip charge to come and assess",
                      "Same-day service often available",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--ds-primary)" }}
                        />
                        <span style={{ color: "var(--ds-text)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div
                className="p-4 text-center"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  color: "var(--ds-primary-fg)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <Badge
                  className="mb-2 text-xs"
                  style={{
                    backgroundColor: "var(--ds-accent)",
                    color: "var(--ds-accent-fg)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  Military Discount Available
                </Badge>
                <p className="text-sm opacity-80">
                  Active duty, veterans, and their families — mention it when
                  you call or submit your form.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card
                className="border shadow-sm"
                style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
              >
                <CardContent className="p-6 lg:p-8">
                  {!submitted ? (
                    <>
                      <h2
                        className="text-2xl font-bold mb-6"
                        style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                      >
                        Tell Us About Your Problem
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="name" style={{ color: "var(--ds-text)" }}>
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Jane Smith"
                              style={{ borderRadius: "var(--ds-radius)" }}
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="phone" style={{ color: "var(--ds-text)" }}>
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              required
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="(440) 555-0100"
                              style={{ borderRadius: "var(--ds-radius)" }}
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="email" style={{ color: "var(--ds-text)" }}>
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jane@example.com"
                            style={{ borderRadius: "var(--ds-radius)" }}
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="service" style={{ color: "var(--ds-text)" }}>
                            Type of Service *
                          </Label>
                          <Select
                            required
                            onValueChange={(v: string | null) => setForm({ ...form, service: v ?? "" })}
                          >
                            <SelectTrigger style={{ borderRadius: "var(--ds-radius)" }}>
                              <SelectValue placeholder="What can we help with?" />
                            </SelectTrigger>
                            <SelectContent>
                              {SERVICE_TYPES.map((s) => (
                                <SelectItem key={s} value={s}>
                                  {s}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="message" style={{ color: "var(--ds-text)" }}>
                            Describe the Problem *
                          </Label>
                          <Textarea
                            id="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="e.g. My kitchen sink has been draining slowly for a week, and I noticed water pooling under the cabinet. Parma, OH 44129."
                            style={{ borderRadius: "var(--ds-radius)" }}
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={submitting}
                          className="w-full font-bold text-base"
                          style={{
                            backgroundColor: "var(--ds-primary)",
                            color: "var(--ds-primary-fg)",
                            borderRadius: "var(--ds-radius)",
                          }}
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Sending Your Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send My Request
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-center" style={{ color: "var(--ds-text-muted)" }}>
                          Your information is never sold or shared. We&apos;ll
                          respond personally.
                        </p>
                      </form>
                    </>
                  ) : (
                    /* Success state */
                    <div className="py-8 text-center">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                        style={{ backgroundColor: "var(--ds-primary)", borderRadius: "50%" }}
                      >
                        <CheckCircle
                          className="w-8 h-8"
                          style={{ color: "var(--ds-accent)" }}
                        />
                      </div>

                      <Badge
                        className="mb-4 text-sm px-3 py-1"
                        style={{
                          backgroundColor: "var(--ds-accent)",
                          color: "var(--ds-accent-fg)",
                          borderRadius: "var(--ds-radius)",
                        }}
                      >
                        Message Sent
                      </Badge>

                      <h2
                        className="text-2xl font-bold mb-3"
                        style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                      >
                        Thanks, {form.name.split(" ")[0]}!
                      </h2>
                      <p
                        className="text-base leading-relaxed mb-6 max-w-md mx-auto"
                        style={{ color: "var(--ds-text-muted)" }}
                      >
                        We received your message about{" "}
                        <strong style={{ color: "var(--ds-text)" }}>{form.service}</strong>.
                        We&apos;ll call you at{" "}
                        <strong style={{ color: "var(--ds-text)" }}>{form.phone}</strong>{" "}
                        within 1–2 business hours with an honest quote.
                      </p>
                      <p
                        className="text-sm mb-6"
                        style={{ color: "var(--ds-text-muted)" }}
                      >
                        Need to speak with us sooner? Call directly:
                      </p>
                      <a href="tel:4402125756">
                        <Button
                          className="font-bold"
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
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
