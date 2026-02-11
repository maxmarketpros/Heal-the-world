import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heal The World — Rock n' Roll Memorabilia Collection",
  description:
    "A premier archive of authenticated, artist-signed instruments and artifacts spanning nearly 70 years of rock history. Museum-grade provenance. Private inquiries only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-charcoal antialiased font-sans">
        <PasswordGate>
          {/* Announcement Bar */}
          <div className="bg-charcoal text-ivory/80 text-center text-xs tracking-[0.25em] uppercase py-2.5 font-sans">
            Private Inquiries&ensp;•&ensp;Museum-Grade Provenance&ensp;•&ensp;By
            Appointment
          </div>

          <Navbar />

          <main>{children}</main>

          <Footer />
        </PasswordGate>
      </body>
    </html>
  );
}
