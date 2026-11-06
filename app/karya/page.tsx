import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, DiscussionCTA } from "@/components/site";
import { WorkGrid } from "@/components/studio";

export const metadata: Metadata = { title: "Karya — Website & Sistem yang Telah Dibangun", description: "Jelajahi katalog Bunavé, Ameraah.co, Novola.fashion, LARAYA, GalleryGeulis, dan demo sistem rental Aruna Rent. Lihat fitur, tangkapan layar, dan website aktifnya.", alternates: { canonical: "/karya/" } };

export default function WorkPage() {
  return <main id="main"><section className="work-page-intro container"><Link href="/" className="back-link">← Kembali ke beranda</Link><SectionLabel>SELECTED WORK / VUYAMA LABS</SectionLabel><div className="pricelist-heading"><h1>Ide yang sudah<br /><span>menemukan bentuk.</span></h1><div><p>Website aktif dengan identitas masing-masing brand, serta demo aplikasi dengan alur kerja yang bisa dipelajari. Lihat apa yang dibangun dan fitur di dalamnya.</p><Link href="/pricelist/" className="text-button">Temukan layanan untuk Anda <ArrowUpRight size={17} /></Link></div></div></section><section className="container work-page-grid"><WorkGrid full /></section><DiscussionCTA title="Ingin membangun solusi untuk bisnis Anda?" /></main>;
}
