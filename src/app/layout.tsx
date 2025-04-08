import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/../public/assets/css/bootstrap.min.css"; // Local Bootstrap CSS
import "../fontawesome"; // FontAwesome setup
import BootstrapJSLoader from "@/components/BootstrapJSLoader"; // Loads Bootstrap JS on client side

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreamzCricket",
  description: "Fantasy Cricket Reimagined – Join DreamzCricket & Win Big",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/assets/img/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapJSLoader /> {/* ✅ Bootstrap JS loaded on client side */}
        {children}
      </body>
    </html>
  );
}
