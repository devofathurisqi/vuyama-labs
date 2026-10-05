import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Info, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { PageIntro, DiscussionCTA, SectionLabel } from "@/components/site";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.title,
    description: p?.description,
    alternates: { canonical: `/showcase/${slug}/` },
    openGraph: {
      title: p?.title,
      description: p?.description,
      images: p ? [p.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: p?.title,
      description: p?.description,
      images: p ? [p.image] : [],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <main id="main">
      <PageIntro
        label={`${p.category.toUpperCase()} / DEMO KONSEP`}
        title={p.title}
        description={p.description}
      />
      <div className="container">
        <div className="detail-hero-image">
          <span className="concept-badge">DEMO KONSEP · VISUAL ILUSTRASI</span>
          <Image
            src={p.image}
            alt={`Visual demo konsep ${p.title}`}
            width={1536}
            height={1024}
            priority
          />
        </div>
        <div className="detail-note">
          <Info size={18} />
          <p>
            Ini adalah demo konsep dengan visual hasil generate dan data
            ilustrasi. Nama produk merupakan nama konsep; tidak mewakili proyek
            pelanggan atau layanan yang sudah diluncurkan.
          </p>
        </div>
      </div>
      <section className="detail-body container">
        <div>
          <SectionLabel>{p.label}</SectionLabel>
          <h2>Berangkat dari kebutuhan nyata.</h2>
          <p>{p.problem}</p>
          <p>{p.approach}</p>
        </div>
        <div>
          <h2>Yang bisa dikembangkan</h2>
          <ul className="detail-list">
            {p.features.map((f) => (
              <li key={f}>
                <Check size={18} />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/#playground" className="text-button">
            Coba demo interaktif di playground <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <DiscussionCTA
        title="Tertarik dengan konsep seperti ini?"
        message={`Halo Vuyama Labs, saya melihat demo konsep ${p.title}. Saya ingin mendiskusikan solusi serupa untuk bisnis saya.`}
      />
    </main>
  );
}
