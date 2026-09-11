import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import { ComingSoon } from "@/components/coming-soon";
import "./globals.css";

const showComingSoon = process.env.SHOW_COMING_SOON === "true";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const amithen = localFont({
  src: "./fonts/Amithen.otf",
  variable: "--font-amithen-face",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: showComingSoon ? "Coming Soon | Swaddeep" : "Swaddeep",
    template: "%s | Swaddeep",
  },
  description: "Swaddeep brand and packaging design studio.",
  robots: showComingSoon ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${workSans.variable} ${amithen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {showComingSoon ? <ComingSoon /> : children}
      </body>
    </html>
  );
}
