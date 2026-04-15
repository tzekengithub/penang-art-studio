import type { Metadata } from "next";
import { Fraunces, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Odd Crafter Studio — Art Workshops in George Town, Penang",
  description:
    "Hands-on art workshops in George Town, Penang. Totebag painting, batik, candle-making and more. Book by appointment.",
  openGraph: {
    title: "Odd Crafter Studio",
    description: "Make something beautiful today.",
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
