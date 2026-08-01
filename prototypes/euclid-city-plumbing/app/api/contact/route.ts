import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseClient } from "@/lib/supabase";

const OWNER_EMAIL = "euclidcityplumbing@att.net";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "noreply@euclidcityplumbing.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, serviceType, message } = body as {
      name: string;
      phone: string;
      email: string;
      serviceType: string;
      message: string;
    };

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase (non-blocking — gracefully skipped if not configured)
    const supabase = getSupabaseClient();
    if (supabase) {
      const { error: dbError } = await supabase.from("leads").insert([
        {
          name,
          phone,
          email,
          service_type: serviceType,
          message,
          created_at: new Date().toISOString(),
        },
      ]);
      if (dbError) {
        console.error("Supabase insert error:", dbError.message);
      }
    }

    // 2. Send emails via Resend (skipped if API key not configured)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Notification to owner
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [OWNER_EMAIL],
        subject: `New Quote Request — ${serviceType || "General Inquiry"} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
            <h2 style="color:#1B3A6B;margin-bottom:4px;">New Lead — Euclid City Plumbing</h2>
            <p style="color:#5A5A5A;margin-top:0;font-size:13px;">Submitted via euclidcityplumbing.com</p>
            <table style="width:100%;border-collapse:collapse;margin-top:16px;">
              <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#111;font-weight:600;width:120px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#333;">${name}</td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#111;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#333;"><a href="tel:${phone}" style="color:#1B3A6B;">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#111;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#333;"><a href="mailto:${email}" style="color:#1B3A6B;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#111;font-weight:600;">Service</td><td style="padding:8px 0;border-bottom:1px solid #e5e5e5;color:#333;">${serviceType || "Not specified"}</td></tr>
              <tr><td style="padding:8px 0;color:#111;font-weight:600;vertical-align:top;">Message</td><td style="padding:8px 0;color:#333;">${message || "No message provided."}</td></tr>
            </table>
          </div>
        `,
      }).catch((e) => console.error("Owner email error:", e));

      // Confirmation to customer
      await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "We got your request — Euclid City Plumbing",
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
            <h2 style="color:#1B3A6B;">Thanks, ${name}!</h2>
            <p style="color:#333;">We received your request for <strong>${serviceType || "plumbing service"}</strong> and will be in touch shortly.</p>
            <p style="color:#333;">For urgent needs, call us directly:</p>
            <p style="font-size:1.25rem;font-weight:bold;"><a href="tel:2163544770" style="color:#1B3A6B;text-decoration:none;">(216) 354-4770</a></p>
            <p style="color:#5A5A5A;font-size:13px;margin-top:24px;">
              Euclid City Plumbing Service Inc<br>
              23745 Lake Shore Blvd, Euclid, OH 44123<br>
              Mon–Sun &middot; 9 AM &ndash; 5 PM
            </p>
          </div>
        `,
      }).catch((e) => console.error("Customer email error:", e));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Server error. Please call us directly." },
      { status: 500 }
    );
  }
}
