import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/manrope";
import "./globals.css";
import "./enhancements.css";
import { SiteHeader, SiteFooter, MotionProvider } from "@/components/site";
import { siteUrl } from "@/lib/config";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vuyama Labs — Ide Anda. Kami buat jadi nyata.",
    template: "%s | Vuyama Labs",
  },
  description:
    "Jasa website, aplikasi custom, sistem bisnis, AI automation, dan integrasi untuk UMKM dan bisnis umum. Diskusikan kebutuhan Anda bersama Vuyama Labs.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Vuyama Labs — Teknologi untuk bisnis Anda",
    description:
      "Dari website sederhana sampai aplikasi dan AI automation. Jelajahi solusi dan diskusikan kebutuhan bisnis Anda.",
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
