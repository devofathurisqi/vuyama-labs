import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/manrope";
import "./globals.css";
import "./enhancements.css";
import "./studio.css";
import { SiteHeader, SiteFooter, MotionProvider } from "@/components/site";
import { siteUrl } from "@/lib/config";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vuyama Labs — Website, Sistem & Solusi Digital untuk Bisnis Anda",
    template: "%s | Vuyama Labs",
  },
  description:
    "Studio digital untuk UMKM, brand, profesional, dan organisasi. Katalog mulai Rp150.000, dashboard, website bisnis, aplikasi custom, AI automation, dan integrasi. Lihat fitur, pricelist, dan karya Vuyama Labs.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Vuyama Labs — Teknologi untuk bisnis Anda",
    description:
      "Katalog mulai Rp150.000, website bisnis, aplikasi, dan AI automation. Jelajahi pricelist, fitur, dan website yang telah dibangun.",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Vuyama Labs — contoh dashboard bisnis",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">
            Langsung ke konten
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
