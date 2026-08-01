"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  CalendarCheck,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Phone,
  Loader2,
} from "lucide-react";

const TIME_SLOTS = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
const BOOKED_SLOTS = new Set(["9:00 AM", "1:00 PM", "3:00 PM"]);

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
  "Other / Not Sure",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type Step = "date" | "time" | "info" | "success";

export default function BookingPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [step, setStep] = useState<Step>("date");
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();

  function isWeekend(day: number) {
    const dow = new Date(viewYear, viewMonth, day).getDay();
    return dow === 0 || dow === 6;
  }

  function isPast(day: number) {
    const d = new Date(viewYear, viewMonth, day);
    return d < today;
  }

  function isAvailable(day: number) {
    return !isWeekend(day) && !isPast(day);
  }

  function goToPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  const canGoPrev = new Date(viewYear, viewMonth, 1) > new Date(today.getFullYear(), today.getMonth(), 1);

  function handleDateSelect(day: number) {
    if (!isAvailable(day)) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setStep("time");
  }

  function handleTimeSelect(t: string) {
    if (BOOKED_SLOTS.has(t)) return;
    setSelectedTime(t);
    setStep("info");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 950));
    setSubmitting(false);
    setStep("success");
  }

  const calendarDays: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const dateLabel = selectedDate
    ? new Date(viewYear, viewMonth, selectedDate).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      {/* Header */}
      <section
        className="py-12 lg:py-16"
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
            Schedule a Visit
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Book a Plumbing Visit
          </h1>
          <p className="opacity-80" style={{ fontFamily: "var(--ds-font-body)" }}>
            Pick a date and time that works for you. We&apos;ll confirm within
            the hour.
          </p>
          <p className="mt-2 text-sm opacity-60">
            Mon–Fri, 8 AM–5 PM · Same-day visits available when slots are open
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-16" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          {step !== "success" && (
            <div className="flex items-center gap-2 mb-8 text-sm">
              {(["date", "time", "info"] as Step[]).map((s, idx) => {
                const stepIdx = ["date", "time", "info"].indexOf(step);
                const active = s === step;
                const done = idx < stepIdx;
                return (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: done || active ? "var(--ds-primary)" : "var(--ds-border)",
                        color: done || active ? "var(--ds-primary-fg)" : "var(--ds-text-muted)",
                      }}
                    >
                      {done ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                    </div>
                    <span
                      className="capitalize font-medium"
                      style={{
                        color: active ? "var(--ds-text)" : "var(--ds-text-muted)",
                      }}
                    >
                      {s === "date" ? "Choose Date" : s === "time" ? "Choose Time" : "Your Info"}
                    </span>
                    {idx < 2 && (
                      <div
                        className="w-8 h-px"
                        style={{ backgroundColor: done ? "var(--ds-primary)" : "var(--ds-border)" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Step 1: Date */}
          {step === "date" && (
            <Card
              className="border shadow-sm"
              style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={goToPrevMonth}
                    disabled={!canGoPrev}
                    className="p-1 rounded transition-opacity"
                    style={{
                      color: canGoPrev ? "var(--ds-primary)" : "var(--ds-border)",
                      cursor: canGoPrev ? "pointer" : "not-allowed",
                    }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5" style={{ color: "var(--ds-primary)" }} />
                    <h2
                      className="text-xl font-bold"
                      style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                    >
                      {MONTH_NAMES[viewMonth]} {viewYear}
                    </h2>
                  </div>
                  <button
                    onClick={goToNextMonth}
                    className="p-1 rounded transition-opacity hover:opacity-70"
                    style={{ color: "var(--ds-primary)", cursor: "pointer" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div
                      key={d}
                      className="text-center text-xs font-semibold py-1"
                      style={{ color: "var(--ds-text-muted)" }}
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, idx) => {
                    if (!day) return <div key={`empty-${idx}`} />;
                    const avail = isAvailable(day);
                    return (
                      <button
                        key={day}
                        onClick={() => handleDateSelect(day)}
                        disabled={!avail}
                        className="aspect-square flex items-center justify-center text-sm font-medium transition-colors"
                        style={{
                          borderRadius: "var(--ds-radius)",
                          backgroundColor: avail ? "var(--ds-surface)" : "transparent",
                          color: avail ? "var(--ds-text)" : "var(--ds-border)",
                          border: avail ? "1px solid var(--ds-border)" : "none",
                          cursor: avail ? "pointer" : "not-allowed",
                          opacity: avail ? 1 : 0.4,
                        }}
                        onMouseEnter={(e) => {
                          if (avail) {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--ds-primary)";
                            (e.currentTarget as HTMLButtonElement).style.color = "var(--ds-primary-fg)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (avail) {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--ds-surface)";
                            (e.currentTarget as HTMLButtonElement).style.color = "var(--ds-text)";
                          }
                        }}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-4 mt-4 text-xs" style={{ color: "var(--ds-text-muted)" }}>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 inline-block"
                      style={{ backgroundColor: "var(--ds-surface)", border: "1px solid var(--ds-border)", borderRadius: "var(--ds-radius)" }}
                    />
                    Available
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 inline-block opacity-40"
                      style={{ backgroundColor: "var(--ds-bg)", borderRadius: "var(--ds-radius)" }}
                    />
                    Unavailable
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Time */}
          {step === "time" && (
            <Card
              className="border shadow-sm"
              style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
            >
              <CardContent className="p-6">
                <button
                  onClick={() => setStep("date")}
                  className="flex items-center gap-1 text-sm mb-5 hover:opacity-70 transition-opacity"
                  style={{ color: "var(--ds-primary)" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to calendar
                </button>
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5" style={{ color: "var(--ds-primary)" }} />
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                  >
                    {dateLabel}
                  </h2>
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--ds-text-muted)" }}>
                  Select an available time slot:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TIME_SLOTS.map((slot) => {
                    const booked = BOOKED_SLOTS.has(slot);
                    return (
                      <button
                        key={slot}
                        onClick={() => handleTimeSelect(slot)}
                        disabled={booked}
                        className="py-3 text-sm font-semibold transition-colors"
                        style={{
                          borderRadius: "var(--ds-radius)",
                          border: `2px solid ${booked ? "var(--ds-border)" : "var(--ds-primary)"}`,
                          backgroundColor: booked ? "var(--ds-bg)" : "var(--ds-surface)",
                          color: booked ? "var(--ds-text-muted)" : "var(--ds-primary)",
                          cursor: booked ? "not-allowed" : "pointer",
                          opacity: booked ? 0.5 : 1,
                        }}
                      >
                        {slot}
                        {booked && (
                          <div className="text-xs font-normal mt-0.5" style={{ color: "var(--ds-text-muted)" }}>
                            Booked
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Contact info */}
          {step === "info" && (
            <Card
              className="border shadow-sm"
              style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
            >
              <CardContent className="p-6">
                <button
                  onClick={() => setStep("time")}
                  className="flex items-center gap-1 text-sm mb-5 hover:opacity-70 transition-opacity"
                  style={{ color: "var(--ds-primary)" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Change time
                </button>

                {/* Summary */}
                <div
                  className="p-4 mb-6 flex items-center gap-3"
                  style={{
                    backgroundColor: "var(--ds-bg)",
                    border: "1px solid var(--ds-border)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  <CalendarCheck className="w-5 h-5 flex-shrink-0" style={{ color: "var(--ds-accent)" }} />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                      {dateLabel} at {selectedTime}
                    </div>
                    <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                      We&apos;ll confirm within the hour
                    </div>
                  </div>
                </div>

                <h2
                  className="text-xl font-bold mb-5"
                  style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                >
                  Your Contact Info
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <Label htmlFor="service" style={{ color: "var(--ds-text)" }}>
                      Type of Service *
                    </Label>
                    <Select
                      required
                      onValueChange={(v: string | null) => setForm({ ...form, service: v ?? "" })}
                    >
                      <SelectTrigger style={{ borderRadius: "var(--ds-radius)" }}>
                        <SelectValue placeholder="Select a service..." />
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
                    <Label htmlFor="notes" style={{ color: "var(--ds-text)" }}>
                      Describe the Problem (optional)
                    </Label>
                    <Input
                      id="notes"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="e.g. Kitchen sink draining slowly, noticed water under cabinet"
                      style={{ borderRadius: "var(--ds-radius)" }}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full font-bold text-base mt-2"
                    style={{
                      backgroundColor: "var(--ds-primary)",
                      color: "var(--ds-primary-fg)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        Confirm Booking Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center" style={{ color: "var(--ds-text-muted)" }}>
                    This is a booking request. We&apos;ll call to confirm your
                    appointment.
                  </p>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Success */}
          {step === "success" && (
            <Card
              className="border shadow-sm text-center"
              style={{ borderColor: "var(--ds-border)", borderRadius: "var(--ds-radius)" }}
            >
              <CardContent className="p-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    backgroundColor: "var(--ds-primary)",
                    borderRadius: "50%",
                  }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--ds-accent)" }} />
                </div>

                <Badge
                  className="mb-4 text-sm px-3 py-1"
                  style={{
                    backgroundColor: "var(--ds-accent)",
                    color: "var(--ds-accent-fg)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  Booking Request Received
                </Badge>

                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                >
                  Thanks, {form.name.split(" ")[0]}!
                </h2>
                <p className="text-base mb-2" style={{ color: "var(--ds-text-muted)" }}>
                  We received your request for
                </p>
                <p className="font-semibold text-base mb-5" style={{ color: "var(--ds-text)" }}>
                  {dateLabel} at {selectedTime}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--ds-text-muted)" }}>
                  We&apos;ll call you at <strong>{form.phone}</strong> within the hour
                  to confirm the appointment. If you haven&apos;t heard from us within
                  2 hours, call directly at:
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
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
