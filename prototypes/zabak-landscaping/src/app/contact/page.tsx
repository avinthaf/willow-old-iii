"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Phone,
  MapPin,
  CheckCircle,
  CalendarCheck,
  Leaf,
} from "lucide-react";

const services = [
  "Landscape Design & Installation",
  "Weekly Lawn & Foliage Maintenance",
  "Irrigation System Installation",
  "Hardscaping (Patios & Walkways)",
  "Pond & Fountain Installation",
  "Shrub & Bush Removal",
  "Custom Garden Design",
  "Other / Not Sure Yet",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--ds-primary)", color: "var(--ds-primary-fg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "var(--ds-ls-label)" }}
          >
            Get in Touch
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Get a Free Quote
          </h1>
          <p className="text-lg opacity-80 max-w-xl" style={{ fontFamily: "var(--ds-font-body)" }}>
            Tell Scott what you&apos;re working with and he&apos;ll get back to you
            with an honest assessment and no-pressure quote.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: Contact info */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                >
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                        Phone
                      </div>
                      <a
                        href="tel:2163989790"
                        className="text-sm hover:underline"
                        style={{ color: "var(--ds-primary)" }}
                      >
                        (216) 398-9790
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                        Service Area
                      </div>
                      <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                        4736 Spring Rd, Cleveland, OH 44131
                        <br />
                        Serving Greater Cleveland
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                        Free Consultations
                      </div>
                      <div className="text-sm" style={{ color: "var(--ds-text-muted)" }}>
                        Every quote starts with an in-person walk of your
                        property. No charge, no obligation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust card */}
              <Card
                style={{
                  borderColor: "var(--ds-border)",
                  borderRadius: "var(--ds-radius)",
                  backgroundColor: "var(--ds-surface)",
                }}
              >
                <CardContent className="p-5">
                  <div
                    className="text-sm font-bold mb-3 uppercase tracking-widest"
                    style={{
                      color: "var(--ds-text-muted)",
                      letterSpacing: "var(--ds-ls-label)",
                      fontSize: "0.7rem",
                    }}
                  >
                    Why Zabak
                  </div>
                  {[
                    "35+ years serving Cleveland",
                    "BBB A+ Accredited since 2004",
                    "5.0 rating on Angi",
                    "State licensed & fully insured",
                    "Projects completed as quoted — always",
                    "Complete cleanup after every job",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 mb-2">
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--ds-primary)" }}
                      />
                      <span className="text-sm" style={{ color: "var(--ds-text)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Book a consultation prompt */}
              <div
                className="p-5 rounded"
                style={{
                  backgroundColor: "var(--ds-primary)",
                  borderRadius: "var(--ds-radius)",
                }}
              >
                <p className="text-sm text-white mb-3">
                  Prefer to schedule a specific time? Use the online booking
                  calendar to pick a date and time that works for you.
                </p>
                <Link href="/booking">
                  <Button
                    size="sm"
                    className="w-full font-semibold cursor-pointer"
                    style={{
                      backgroundColor: "white",
                      color: "var(--ds-secondary)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <CalendarCheck className="w-4 h-4 mr-1.5" />
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Form or success */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card
                  style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "var(--ds-primary)" }}
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h2
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                    >
                      Message Received!
                    </h2>
                    <p className="text-base mb-2" style={{ color: "var(--ds-text-muted)" }}>
                      Thank you, {form.name}. Scott will reach out within one
                      business day to discuss your project.
                    </p>
                    <p className="text-sm mb-6" style={{ color: "var(--ds-text-muted)" }}>
                      Need to connect sooner? Call directly:
                    </p>
                    <a href="tel:2163989790">
                      <Button
                        size="lg"
                        className="font-bold cursor-pointer"
                        style={{
                          backgroundColor: "var(--ds-primary)",
                          color: "white",
                          borderRadius: "var(--ds-radius)",
                        }}
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        (216) 398-9790
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
                >
                  <CardContent className="p-6 lg:p-8">
                    <h2
                      className="text-xl font-bold mb-6"
                      style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                    >
                      Tell Us About Your Project
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name" style={{ color: "var(--ds-text)" }}>
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jane Smith"
                            className="mt-1"
                            style={{ borderRadius: "var(--ds-radius)" }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" style={{ color: "var(--ds-text)" }}>
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="(216) 555-0100"
                            className="mt-1"
                            style={{ borderRadius: "var(--ds-radius)" }}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" style={{ color: "var(--ds-text)" }}>
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="mt-1"
                          style={{ borderRadius: "var(--ds-radius)" }}
                        />
                      </div>

                      <div>
                        <Label htmlFor="service" style={{ color: "var(--ds-text)" }}>
                          Service Interested In
                        </Label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="mt-1 w-full px-3 py-2 text-sm border"
                          style={{
                            borderRadius: "var(--ds-radius)",
                            borderColor: "var(--ds-border)",
                            color: form.service ? "var(--ds-text)" : "var(--ds-text-muted)",
                            backgroundColor: "var(--ds-surface)",
                          }}
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message" style={{ color: "var(--ds-text)" }}>
                          Tell Us About Your Project *
                        </Label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Describe your yard, what you'd like done, your timeline, and any other details that would help Scott prepare for your consultation..."
                          className="mt-1 w-full px-3 py-2 text-sm border resize-none focus:outline-none"
                          style={{
                            borderRadius: "var(--ds-radius)",
                            borderColor: "var(--ds-border)",
                            color: "var(--ds-text)",
                            backgroundColor: "var(--ds-surface)",
                          }}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full font-bold cursor-pointer"
                        disabled={submitting}
                        style={{
                          backgroundColor: "var(--ds-primary)",
                          color: "white",
                          borderRadius: "var(--ds-radius)",
                        }}
                      >
                        {submitting ? "Sending..." : "Send My Quote Request"}
                      </Button>
                      <p className="text-xs text-center" style={{ color: "var(--ds-text-muted)" }}>
                        Scott typically responds within one business day. All
                        consultations are free — no obligation to hire.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
