import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nwose Onyeka Divine | Frontend Developer",
  description:
    "Frontend developer with 5+ years of experience building modern, responsive and scalable web applications with React, Next.js and Tailwind CSS.",
  openGraph: {
    title: "Nwose Onyeka Divine | Frontend Developer",
    description: "Modern, responsive and scalable web applications with React, Next.js and Tailwind CSS.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
