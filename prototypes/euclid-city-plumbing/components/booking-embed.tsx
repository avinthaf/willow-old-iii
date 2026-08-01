"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, CheckCircle2, Loader2, Phone } from "lucide-react";

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const SERVICES = [
  "Drain & Sewer Cleaning",
  "Water Heater Repair or Installation",
  "Toilet & Faucet Repair",
  "Sump Pump Service or Installation",
  "Main Water Line Repair",
  "Boiler Service",
  "Gas Line Piping",
  "Other / Not Sure",
];

const TIME_SLOTS = [
  { label: "9:00 AM",  avail: true },
  { label: "10:00 AM", avail: true },
  { label: "11:00 AM", avail: false },
  { label: "1:00 PM",  avail: true },
  { label: "2:00 PM",  avail: false },
  { label: "3:00 PM",  avail: true },
  { label: "4:00 PM",  avail: true },
];

const BOOKED_DAYS = new Set([2, 7, 13, 16, 19, 22, 26]);

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

type Step = "calendar" | "time" | "info" | "done";

const INPUT_STYLE = {
  borderColor: "var(--ds-border)",
  borderRadius: "var(--ds-radius)",
  background: "white",
  color: "var(--ds-text)",
  fontFamily: "var(--ds-font-body)",
};

export function BookingEmbed() {
  const now = new Date(2026, 7, 1); // Aug 2026
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("calendar");
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [loading, setLoading] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const startDow = getFirstDayOfWeek(year, month);
  const today = { y: now.getFullYear(), m: now.getMonth(), d: now.getDate() };

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDay(null);
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDay(null);
  }

  function isDayAvailable(day: number) {
    const dow = new Date(year, month, day).getDay();
    const isPast = year < today.y || (year === today.y && month < today.m) ||
      (year === today.y && month === today.m && day < today.d);
    return !isPast && dow !== 0 && dow !== 6 && !BOOKED_DAYS.has(day);
  }

  async function handleConfirm() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="flex flex-col items-center justify-center text-center px-8 py-16 h-full">
        <div
          className="w-14 h-14 flex items-center justify-center mb-5"
          style={{ background: "#d1fae5", borderRadius: "var(--ds-radius)" }}
        >
          <CheckCircle2 size={28} color="#065f46" />
        </div>
        <h3
          style={{
            fontFamily: "var(--ds-font-heading)",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "var(--ds-text)",
          }}
        >
          You&apos;re All Set, {form.name.split(" ")[0]}!
        </h3>
        <p className="mt-2 text-sm max-w-xs" style={{ color: "var(--ds-text-muted)" }}>
          Your appointment request for{" "}
          <strong style={{ color: "var(--ds-text)" }}>
            {MONTH_NAMES[month]} {selectedDay}, {year} at {selectedTime}
          </strong>{" "}
          has been received. Lou or Hugh will call to confirm within a few hours.
        </p>
        <p className="mt-4 text-xs" style={{ color: "var(--ds-text-muted)" }}>
          Need it faster?{" "}
          <a href="tel:2163544770" className="font-semibold underline" style={{ color: "var(--ds-primary)" }}>
            Call (216) 354-4770
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-2 text-xs" style={{ color: "var(--ds-text-muted)" }}>
        {(["calendar","time","info"] as const).map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span
              className="w-5 h-5 flex items-center justify-center text-[0.7rem] font-bold"
              style={{
                borderRadius: "50%",
                background: step === s ? "var(--ds-primary)" : s === "calendar" && step !== "calendar" ? "var(--ds-secondary)" : "var(--ds-border)",
                color: step === s || (s === "calendar" && step !== "calendar") ? "white" : "var(--ds-text-muted)",
              }}
            >
              {i + 1}
            </span>
            <span style={{ color: step === s ? "var(--ds-text)" : "var(--ds-text-muted)", fontWeight: step === s ? 600 : 400 }}>
              {s === "calendar" ? "Pick a Date" : s === "time" ? "Choose a Time" : "Your Info"}
            </span>
            {i < 2 && <span>›</span>}
          </span>
        ))}
      </div>

      {/* STEP 1: Calendar */}
      {step === "calendar" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth} className="p-1 rounded hover:opacity-70 transition-opacity">
              <ChevronLeft size={18} style={{ color: "var(--ds-text)" }} />
            </button>
            <span style={{ fontFamily: "var(--ds-font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--ds-text)" }}>
              {MONTH_NAMES[month]} {year}
            </span>
            <button onClick={nextMonth} className="p-1 rounded hover:opacity-70 transition-opacity">
              <ChevronRight size={18} style={{ color: "var(--ds-text)" }} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
              <div key={d} className="text-xs font-semibold py-1" style={{ color: "var(--ds-text-muted)" }}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: startDow }).map((_, i) => <div key={`e-${i}`} />)}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
              const avail = isDayAvailable(day);
              const selected = selectedDay === day;
              return (
                <button
                  key={day}
                  onClick={() => avail && setSelectedDay(day)}
                  disabled={!avail}
                  className="aspect-square flex items-center justify-center text-sm font-medium transition-colors"
                  style={{
                    borderRadius: "var(--ds-radius)",
                    background: selected ? "var(--ds-primary)" : avail ? "var(--ds-surface)" : "transparent",
                    color: selected ? "white" : avail ? "var(--ds-text)" : "var(--ds-border)",
                    border: avail && !selected ? "1px solid var(--ds-border)" : "none",
                    cursor: avail ? "pointer" : "default",
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs" style={{ color: "var(--ds-text-muted)" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 inline-block" style={{ background: "var(--ds-surface)", border: "1px solid var(--ds-border)", borderRadius: "2px" }} />
              Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 inline-block" style={{ background: "var(--ds-primary)", borderRadius: "2px" }} />
              Selected
            </span>
          </div>

          <Button
            className="w-full mt-5"
            disabled={!selectedDay}
            onClick={() => setStep("time")}
            style={{
              background: selectedDay ? "var(--ds-primary)" : "var(--ds-border)",
              color: "white",
              borderRadius: "var(--ds-radius)",
              fontFamily: "var(--ds-font-body)",
              fontWeight: 700,
            }}
          >
            {selectedDay ? `Continue — ${MONTH_NAMES[month]} ${selectedDay}` : "Select a Date"}
          </Button>
        </div>
      )}

      {/* STEP 2: Time slot */}
      {step === "time" && (
        <div>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--ds-text)", fontFamily: "var(--ds-font-heading)" }}>
            Available times — {MONTH_NAMES[month]} {selectedDay}, {year}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map(({ label, avail }) => {
              const sel = selectedTime === label;
              return (
                <button
                  key={label}
                  disabled={!avail}
                  onClick={() => avail && setSelectedTime(label)}
                  className="py-2.5 text-sm font-medium transition-colors"
                  style={{
                    borderRadius: "var(--ds-radius)",
                    border: sel ? "2px solid var(--ds-primary)" : "1px solid var(--ds-border)",
                    background: sel ? "var(--ds-primary)" : avail ? "var(--ds-surface)" : "var(--ds-bg)",
                    color: sel ? "white" : avail ? "var(--ds-text)" : "var(--ds-text-muted)",
                    cursor: avail ? "pointer" : "default",
                    fontFamily: "var(--ds-font-body)",
                  }}
                >
                  {label}{!avail && <span className="ml-1 text-xs opacity-60">(booked)</span>}
                </button>
              );
            })}
          </div>

          <div className="flex gap-3 mt-5">
            <Button
              variant="outline"
              onClick={() => { setStep("calendar"); setSelectedTime(null); }}
              style={{ borderRadius: "var(--ds-radius)", fontFamily: "var(--ds-font-body)" }}
            >
              Back
            </Button>
            <Button
              className="flex-1"
              disabled={!selectedTime}
              onClick={() => setStep("info")}
              style={{
                background: selectedTime ? "var(--ds-primary)" : "var(--ds-border)",
                color: "white",
                borderRadius: "var(--ds-radius)",
                fontFamily: "var(--ds-font-body)",
                fontWeight: 700,
              }}
            >
              {selectedTime ? `Continue — ${selectedTime}` : "Select a Time"}
            </Button>
          </div>
        </div>
      )}

      {/* STEP 3: Info */}
      {step === "info" && (
        <div className="space-y-4">
          <div
            className="px-4 py-3 text-sm"
            style={{
              background: "var(--ds-bg)",
              borderRadius: "var(--ds-radius)",
              color: "var(--ds-text-muted)",
              fontFamily: "var(--ds-font-body)",
            }}
          >
            📅 <strong style={{ color: "var(--ds-text)" }}>{MONTH_NAMES[month]} {selectedDay}, {year}</strong> at{" "}
            <strong style={{ color: "var(--ds-text)" }}>{selectedTime}</strong>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="bk-name" style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}>
              Full Name <span style={{ color: "var(--ds-secondary)" }}>*</span>
            </Label>
            <Input id="bk-name" placeholder="John Smith" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={INPUT_STYLE} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="bk-phone" style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}>
              Phone Number <span style={{ color: "var(--ds-secondary)" }}>*</span>
            </Label>
            <Input id="bk-phone" type="tel" placeholder="(216) 555-0100" value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} style={INPUT_STYLE} />
          </div>

          <div className="space-y-1.5">
            <Label style={{ fontFamily: "var(--ds-font-body)", color: "var(--ds-text)", fontWeight: 600 }}>
              Service Type
            </Label>
            <Select onValueChange={(val) => setForm(f => ({ ...f, service: val as string }))}>
              <SelectTrigger style={INPUT_STYLE}>
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-1">
            <Button variant="outline" onClick={() => setStep("time")}
              style={{ borderRadius: "var(--ds-radius)", fontFamily: "var(--ds-font-body)" }}>
              Back
            </Button>
            <Button
              className="flex-1"
              disabled={!form.name || !form.phone || loading}
              onClick={handleConfirm}
              style={{
                background: "var(--ds-primary)",
                color: "white",
                borderRadius: "var(--ds-radius)",
                fontFamily: "var(--ds-font-body)",
                fontWeight: 700,
              }}
            >
              {loading ? <><Loader2 size={16} className="animate-spin mr-2" />Confirming...</> : "Confirm Appointment"}
            </Button>
          </div>

          <p className="text-xs text-center" style={{ color: "var(--ds-text-muted)" }}>
            <Phone size={11} className="inline mr-1" />
            Urgent? Call <a href="tel:2163544770" style={{ color: "var(--ds-primary)", fontWeight: 600 }}>(216) 354-4770</a>
          </p>
        </div>
      )}
    </div>
  );
}
