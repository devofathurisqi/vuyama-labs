import type { Metadata } from "next";
import { PageIntro, DiscussionCTA } from "@/components/site";
import { ShowcaseGrid } from "@/components/home";
export const metadata: Metadata = {
  title: "Showcase — Jelajahi Demo Konsep",
  description:
    "Jelajahi demo konsep website, aplikasi mobile, dashboard bisnis, dan AI customer service Vuyama Labs.",
};
export default function ShowcasePage() {
  return (
    <main id="main">
      <PageIntro
        label="SHOWCASE / DEMO KONSEP"
        title="Sebuah ide. Banyak kemungkinan."
        description="Contoh visual dan konsep solusi untuk membantu Anda membayangkan apa yang bisa dibangun. Seluruh showcase merupakan demo konsep, bukan proyek pelanggan."
      />
      <section className="container showcase-page-grid">
        <ShowcaseGrid full />
      </section>
      <DiscussionCTA />
    </main>
  );
}
