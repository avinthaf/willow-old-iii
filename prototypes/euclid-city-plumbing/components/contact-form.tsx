"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";

const SERVICE_OPTIONS = [
  "Drain & Sewer Cleaning",
  "Water Heater Repair or Installation",
  "Toilet & Faucet Repair",
  "Sump Pump Service or Installation",
  "Main Water Line Repair",
  "Boiler Service",
  "Gas Line Piping",
  "Sewer Lateral or Septic Service",
  "Other / Not Sure",
];

const INPUT_STYLE = {
  borderColor: "var(--ds-border)",
  borderRadius: "var(--ds-radius)",
  background: "white",
  color: "var(--ds-text)",
  fontFamily: "var(--ds-font-body)",
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in your name, phone, and email.");
      return;
    }

    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
    toast.success("We got your request! We'll be in touch shortly.");
  };

  if (submitted) {
    return (
      <div
        className="p-8 text-center"
        style={{
          background: "var(--ds-surface)",
          border: "1px solid var(--ds-border)",
          borderRadius: "var(--ds-radius-lg)",
        }}
      >
        <div
          className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
          style={{ background: "#d1fae5", borderRadius: "var(--ds-radius)" }}
        >
          <Send size={22} color="#065f46" />
        </div>
        <h3
          style={{
            fontFamily: "var(--ds-font-heading)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--ds-text)",
          }}
        >
          Request Received
        </h3>
        <p className="mt-2 text-sm" style={{ color: "var(--ds-text-muted)" }}>
          Thank you, {form.name}. We&apos;ll call or email you back shortly. For urgent help,
          call us at{" "}
          <a
            href="tel:2163544770"
            className="font-semibold underline"
            style={{ color: "var(--ds-primary)" }}
          >
            (216) 354-4770
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      style={{
        background: "var(--ds-surface)",
        border: "1px solid var(--ds-border)",
        borderRadius: "var(--ds-radius-lg)",
        padding: "1.75rem",
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="name"
            style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}
          >
            Full Name <span style={{ color: "var(--ds-secondary)" }}>*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            style={INPUT_STYLE}
          />
        </div>
        <div className="space-y-1.5">
          <Label
            htmlFor="phone"
            style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}
          >
            Phone Number <span style={{ color: "var(--ds-secondary)" }}>*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(216) 555-0100"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            style={INPUT_STYLE}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="email"
          style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}
        >
          Email Address <span style={{ color: "var(--ds-secondary)" }}>*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          style={INPUT_STYLE}
        />
      </div>

      <div className="space-y-1.5">
        <Label
          style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}
        >
          Service Needed
        </Label>
        <Select onValueChange={(val) => handleChange("serviceType", val as string)}>
          <SelectTrigger style={{ ...INPUT_STYLE }}>
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {SERVICE_OPTIONS.map((svc) => (
              <SelectItem key={svc} value={svc}>
                {svc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="message"
          style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}
        >
          Describe the Problem
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us what&apos;s going on — the more detail, the faster we can help."
          rows={4}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          style={INPUT_STYLE}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full"
        style={{
          background: "var(--ds-primary)",
          color: "white",
          borderRadius: "var(--ds-radius)",
          fontFamily: "var(--ds-font-body)",
          fontWeight: 700,
          fontSize: "1rem",
        }}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send My Request
          </>
        )}
      </Button>

      <p className="text-xs text-center" style={{ color: "var(--ds-text-muted)" }}>
        We respond within a few hours. For urgent help, call{" "}
        <a
          href="tel:2163544770"
          className="font-semibold"
          style={{ color: "var(--ds-primary)" }}
        >
          (216) 354-4770
        </a>
        .
      </p>
    </form>
  );
}
