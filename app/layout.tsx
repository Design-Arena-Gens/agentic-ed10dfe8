import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iceem.tn - Professional Cleaning & Maintenance Services",
  description: "Transform your space with Iceem's professional cleaning and maintenance services in Tunisia. Quality, reliability, and excellence guaranteed.",
  keywords: "cleaning services, maintenance, Tunisia, professional cleaning, Iceem",
  openGraph: {
    title: "Iceem.tn - Professional Cleaning & Maintenance Services",
    description: "Transform your space with Iceem's professional cleaning and maintenance services in Tunisia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
