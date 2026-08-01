import type { Metadata } from "next";
import { Roboto_Slab, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Euclid City Plumbing Service | Licensed Plumbers Since 1911",
  description:
    "Serving Euclid and Northeast Ohio since 1911. The Larick family handles drain cleaning, water heaters, sump pumps, main water lines, boilers, and more. Call (216) 354-4770.",
  keywords:
    "plumber Euclid OH, plumbing repair Cleveland, drain cleaning, water heater installation, sump pump, licensed plumber Ohio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${inter.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          fontFamily: "var(--ds-font-body)",
          background: "var(--ds-bg)",
          color: "var(--ds-text)",
        }}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
