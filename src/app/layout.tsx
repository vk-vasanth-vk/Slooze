'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Cursor from "./Cursor"; // Import the cursor component
import "./globals.css";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Cursor />

        <div className="cursor-dot" data-cursor-dot></div>
        <div className="cursor-outline" data-cursor-outline></div>
      </body>
    </html>
  );
}
