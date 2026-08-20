import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://thetartinefoundation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "tARTine — Explore. Experiment. Create.",
    template: "%s — tARTine",
  },
  description:
    "tARTine is an early-stage foundation bringing art, experimentation, and multidisciplinary learning to young people through hands-on workshops.",
  keywords: [
    "arts education",
    "youth arts programs",
    "arts education Los Angeles",
    "after-school arts programs",
    "multidisciplinary education",
    "STEAM education",
    "creativity and education",
  ],
  openGraph: {
    title: "tARTine — Explore. Experiment. Create.",
    description:
      "Art as a gateway to exploration, experimentation, and multidisciplinary learning for young people.",
    url: siteUrl,
    siteName: "tARTine",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tARTine — Explore. Experiment. Create.",
    description:
      "Art as a gateway to exploration, experimentation, and multidisciplinary learning for young people.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-toast-dark">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
