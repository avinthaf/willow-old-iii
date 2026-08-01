"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, ChevronLeft, ChevronRight, CheckCircle, Phone, Leaf } from "lucide-react";

// ─── Static calendar data ───────────────────────────────────────────────────
const MONTH_NAME = "August 2026";
const DAYS_IN_MONTH = 31;
const FIRST_DAY_OF_WEEK = 6; // Saturday (0=Sun)

// Booked = unavailable; available = true; past = false
const availability: Record<number, boolean> = {
  4: true, 5: true,
  7: false, 8: false, 9: false, 10: false, 11: true, 12: true,
  14: true, 15: false, 16: true, 17: true, 18: true, 19: true,
  21: true, 22: false, 23: false, 24: true, 25: true, 26: true,
  28: true, 29: true, 30: false, 31: true,
};

const PAST_DAYS = [1, 2, 3]; // Already passed

const TIME_SLOTS = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
];

const BOOKED_SLOTS: Record<number, string[]> = {
  7: ["8:00 AM", "9:00 AM", "10:00 AM"],
  8: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
  15: TIME_SLOTS,
  22: TIME_SLOTS,
  23: ["8:00 AM", "10:00 AM", "1:00 PM"],
  30: TIME_SLOTS,
};

type Step = "date" | "time" | "info" | "success";

export default function BookingPage() {
  const [step, setStep] = useState<Step>("date");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Build calendar grid
  const calendarCells: (number | null)[] = [
    ...Array(FIRST_DAY_OF_WEEK).fill(null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ];

  const getSlotStatus = (day: number, slot: string) => {
    const booked = BOOKED_SLOTS[day] ?? [];
    return booked.includes(slot) ? "booked" : "available";
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitting(false);
    setStep("success");
  };

  const dayLabel = selectedDay
    ? `${MONTH_NAME.split(" ")[0]} ${selectedDay}, ${MONTH_NAME.split(" ")[1]}`
    : "";

  return (
    <>
      {/* Header */}
      <section
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--ds-primary)", color: "var(--ds-primary-fg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold mb-3 uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "var(--ds-ls-label)" }}
          >
            Free — No Obligation
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--ds-font-heading)" }}
          >
            Book a Free Consultation
          </h1>
          <p className="text-lg opacity-80 max-w-xl" style={{ fontFamily: "var(--ds-font-body)" }}>
            Scott will walk your property, listen to your goals, and give you an
            honest assessment — no pressure, no commitment required.
          </p>
        </div>
      </section>

      {/* Booking flow */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "var(--ds-bg)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Step indicators */}
          {step !== "success" && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {(["date", "time", "info"] as Step[]).map((s, idx) => {
                const stepIndex = { date: 0, time: 1, info: 2 }[step]!;
                const isActive = s === step;
                const isDone = idx < stepIndex;
                return (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        backgroundColor: isDone || isActive ? "var(--ds-primary)" : "var(--ds-border)",
                        color: isDone || isActive ? "white" : "var(--ds-text-muted)",
                      }}
                    >
                      {isDone ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                    </div>
                    <span
                      className="text-sm font-medium hidden sm:inline"
                      style={{ color: isActive ? "var(--ds-text)" : "var(--ds-text-muted)" }}
                    >
                      {s === "date" ? "Pick a Date" : s === "time" ? "Pick a Time" : "Your Info"}
                    </span>
                    {idx < 2 && (
                      <div className="w-8 h-px mx-1" style={{ backgroundColor: "var(--ds-border)" }} />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* STEP 1: Pick a date */}
          {step === "date" && (
            <Card style={{ borderRadius: "var(--ds-radius)", borderColor: "var(--ds-border)" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <button
                    className="p-2 rounded cursor-pointer"
                    style={{ color: "var(--ds-text-muted)" }}
                    disabled
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h2
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                  >
                    {MONTH_NAME}
                  </h2>
                  <button
                    className="p-2 rounded cursor-pointer"
                    style={{ color: "var(--ds-text-muted)" }}
                    disabled
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Weekday headers */}
                <div className="grid grid-cols-7 mb-2">
                  {weekdays.map((d) => (
                    <div
                      key={d}
                      className="text-center text-xs font-semibold py-1"
                      style={{ color: "var(--ds-text-muted)" }}
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Calendar cells */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((day, idx) => {
                    if (!day) return <div key={`empty-${idx}`} />;
                    const isPast = PAST_DAYS.includes(day);
                    const isAvail = availability[day] === true && !isPast;
                    const isSelected = day === selectedDay;
                    const isBooked = availability[day] === false;

                    return (
                      <button
                        key={day}
                        disabled={!isAvail}
                        onClick={() => { setSelectedDay(day); }}
                        className="aspect-square flex items-center justify-center text-sm font-medium transition-all"
                        style={{
                          borderRadius: "var(--ds-radius)",
                          backgroundColor: isSelected
                            ? "var(--ds-primary)"
                            : isAvail
                            ? "var(--ds-surface)"
                            : "transparent",
                          color: isSelected
                            ? "white"
                            : isPast || isBooked
                            ? "var(--ds-text-muted)"
                            : "var(--ds-text)",
                          opacity: isPast || isBooked ? 0.35 : 1,
                          border: isAvail && !isSelected
                            ? "1px solid var(--ds-border)"
                            : isSelected
                            ? "none"
                            : "none",
                          cursor: isAvail ? "pointer" : "default",
                        }}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex gap-4 mt-4 text-xs" style={{ color: "var(--ds-text-muted)" }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded border" style={{ borderColor: "var(--ds-border)", backgroundColor: "var(--ds-surface)" }} />
                    Available
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: "var(--ds-primary)" }} />
                    Selected
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: "var(--ds-border)" }} />
                    Unavailable
                  </div>
                </div>

                <Button
                  className="w-full mt-6 font-semibold cursor-pointer"
                  disabled={!selectedDay}
                  onClick={() => setStep("time")}
                  style={{
                    backgroundColor: selectedDay ? "var(--ds-primary)" : undefined,
                    color: selectedDay ? "white" : undefined,
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  Continue to Time Selection
                </Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 2: Pick a time */}
          {step === "time" && (
            <Card style={{ borderRadius: "var(--ds-radius)", borderColor: "var(--ds-border)" }}>
              <CardContent className="p-6">
                <button
                  onClick={() => { setSelectedTime(null); setStep("date"); }}
                  className="flex items-center gap-1 text-sm mb-6 cursor-pointer"
                  style={{ color: "var(--ds-text-muted)" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to calendar
                </button>

                <h2
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                >
                  Select a Time
                </h2>
                <p className="text-sm mb-6" style={{ color: "var(--ds-text-muted)" }}>
                  {dayLabel}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {TIME_SLOTS.map((slot) => {
                    const status = selectedDay ? getSlotStatus(selectedDay, slot) : "available";
                    const isBooked = status === "booked";
                    const isSelected = slot === selectedTime;
                    return (
                      <button
                        key={slot}
                        disabled={isBooked}
                        onClick={() => setSelectedTime(slot)}
                        className="py-3 px-4 text-sm font-medium text-left transition-all cursor-pointer"
                        style={{
                          borderRadius: "var(--ds-radius)",
                          backgroundColor: isSelected
                            ? "var(--ds-primary)"
                            : isBooked
                            ? "var(--ds-bg)"
                            : "var(--ds-surface)",
                          color: isSelected
                            ? "white"
                            : isBooked
                            ? "var(--ds-text-muted)"
                            : "var(--ds-text)",
                          border: isSelected
                            ? "none"
                            : `1px solid var(--ds-border)`,
                          opacity: isBooked ? 0.5 : 1,
                          cursor: isBooked ? "default" : "pointer",
                        }}
                      >
                        {slot}
                        {isBooked && (
                          <span className="ml-2 text-xs opacity-60">Booked</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <Button
                  className="w-full mt-6 font-semibold cursor-pointer"
                  disabled={!selectedTime}
                  onClick={() => setStep("info")}
                  style={{
                    backgroundColor: selectedTime ? "var(--ds-primary)" : undefined,
                    color: selectedTime ? "white" : undefined,
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 3: Contact info */}
          {step === "info" && (
            <Card style={{ borderRadius: "var(--ds-radius)", borderColor: "var(--ds-border)" }}>
              <CardContent className="p-6">
                <button
                  onClick={() => setStep("time")}
                  className="flex items-center gap-1 text-sm mb-6 cursor-pointer"
                  style={{ color: "var(--ds-text-muted)" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                {/* Booking summary */}
                <div
                  className="flex items-center gap-3 p-3 mb-6 rounded"
                  style={{
                    backgroundColor: "var(--ds-bg)",
                    border: "1px solid var(--ds-border)",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  <CalendarCheck className="w-5 h-5 flex-shrink-0" style={{ color: "var(--ds-primary)" }} />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--ds-text)" }}>
                      {dayLabel} &nbsp;·&nbsp; {selectedTime}
                    </div>
                    <div className="text-xs" style={{ color: "var(--ds-text-muted)" }}>
                      Free Consultation with Scott Zabak
                    </div>
                  </div>
                </div>

                <h2
                  className="text-lg font-bold mb-5"
                  style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                >
                  Your Contact Info
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" style={{ color: "var(--ds-text)" }}>
                      Full Name *
                    </Label>
                    <Input
                      id="name"
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
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(216) 555-0100"
                      className="mt-1"
                      style={{ borderRadius: "var(--ds-radius)" }}
                    />
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
                    <Label htmlFor="notes" style={{ color: "var(--ds-text)" }}>
                      What would you like help with?
                    </Label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Tell Scott a bit about your yard and what you're hoping to achieve..."
                      className="mt-1 w-full px-3 py-2 text-sm border resize-none focus:outline-none"
                      style={{
                        borderRadius: "var(--ds-radius)",
                        borderColor: "var(--ds-border)",
                        color: "var(--ds-text)",
                        backgroundColor: "var(--ds-surface)",
                      }}
                    />
                  </div>
                </div>

                <Button
                  className="w-full mt-6 font-semibold cursor-pointer"
                  disabled={!form.name || !form.phone || submitting}
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "var(--ds-primary)",
                    color: "white",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  {submitting ? "Booking..." : "Confirm Free Consultation"}
                </Button>
                <p className="text-xs text-center mt-3" style={{ color: "var(--ds-text-muted)" }}>
                  No payment required. Scott will confirm your appointment by phone.
                </p>
              </CardContent>
            </Card>
          )}

          {/* STEP 4: Success */}
          {step === "success" && (
            <Card style={{ borderRadius: "var(--ds-radius)", borderColor: "var(--ds-border)" }}>
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--ds-primary)" }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--ds-font-heading)", color: "var(--ds-text)" }}
                >
                  You&apos;re All Set!
                </h2>
                <p className="text-base mb-4" style={{ color: "var(--ds-text-muted)" }}>
                  Your free consultation has been requested for:
                </p>
                <Badge
                  className="text-sm px-4 py-2 mb-6 font-semibold"
                  style={{
                    backgroundColor: "var(--ds-primary)",
                    color: "white",
                    borderRadius: "var(--ds-radius)",
                  }}
                >
                  <CalendarCheck className="w-4 h-4 mr-2 inline" />
                  {dayLabel} &nbsp;·&nbsp; {selectedTime}
                </Badge>
                <p className="text-sm mb-6" style={{ color: "var(--ds-text-muted)" }}>
                  Scott will call you to confirm within one business day. If you
                  need to reach him sooner, call directly:
                </p>
                <a href="tel:2163989790">
                  <Button
                    size="lg"
                    className="font-bold cursor-pointer"
                    style={{
                      backgroundColor: "white",
                      color: "var(--ds-primary)",
                      borderRadius: "var(--ds-radius)",
                    }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (216) 398-9790
                  </Button>
                </a>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm" style={{ color: "var(--ds-text-muted)" }}>
                  <Leaf className="w-4 h-4" style={{ color: "var(--ds-primary)" }} />
                  No obligation. No payment. Just an honest conversation about your yard.
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
