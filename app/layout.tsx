import type { Metadata } from "next";
import { Permanent_Marker, Poppins, Caveat } from "next/font/google";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const brush = Permanent_Marker({
  variable: "--font-brush",
  weight: "400",
  subsets: ["latin"],
});

const body = Poppins({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hand",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const title = `${profile.name} · Portafolio`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.tagline,
  // Vista previa al compartir el link por WhatsApp, LinkedIn, etc.
  openGraph: {
    title,
    description: profile.tagline,
    url: "/",
    siteName: title,
    locale: "es_CO",
    type: "website",
    images: [{ url: profile.photo, width: 640, height: 640, alt: profile.name }],
  },
  twitter: { card: "summary", title, description: profile.tagline, images: [profile.photo] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${brush.variable} ${body.variable} ${hand.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
