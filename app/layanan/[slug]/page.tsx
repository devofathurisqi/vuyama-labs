import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { services, projects } from "@/lib/content";
import { PageIntro, DiscussionCTA, SectionLabel } from "@/components/site";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s?.title,
    description: s?.description,
    alternates: { canonical: `/layanan/${slug}/` },
    openGraph: {
      title: s?.title,
      description: s?.description,
      images: ["/og.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: s?.title,
      description: s?.description,
      images: ["/og.jpg"],
    },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const p = projects.find((p) => p.slug === s.demo)!;
  return (
    <main id="main">
      <PageIntro
        label={`LAYANAN / ${s.number}`}
        title={s.title}
        description={s.description}
      />
      <section className="detail-benefits">
        <div className="container">
          {s.benefits.map((b) => (
            <div className="detail-benefit" key={b}>
              <Check size={20} />
              {b}
            </div>
          ))}
        </div>
      </section>
      <section className="detail-body container">
        <div>
          <SectionLabel>BUILT FOR YOUR BUSINESS</SectionLabel>
          <h2>{s.tagline}</h2>
          <p>{s.detail}</p>
        </div>
        <div>
          <h2>Contoh kebutuhan</h2>
          <ul className="detail-list">
            {s.examples.map((e) => (
              <li key={e}>
                <Check size={17} />
                {e}
              </li>
            ))}
          </ul>
          <p>
            Fitur, waktu, biaya, dan kebutuhan integrasi ditentukan setelah kita
            memahami tujuan dan proses bisnis Anda.
          </p>
        </div>
      </section>
      <section className="detail-related container">
        <SectionLabel>LIHAT KEMUNGKINANNYA</SectionLabel>
        <h2>Bayangkan solusi untuk bisnis Anda.</h2>
        <div className="showcase-grid">
          <Link href={`/showcase/${p.slug}/`} className="project-card">
            <div className="project-image">
              <span className="concept-badge">DEMO KONSEP</span>
              <Image
                src={p.image}
                alt={`Demo konsep ${p.title}`}
                width={1536}
                height={1024}
              />
            </div>
            <div className="project-info">
              <div>
                <span>{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <ArrowUpRight size={23} />
            </div>
          </Link>
        </div>
      </section>
      <DiscussionCTA
        title={`Mari diskusikan kebutuhan ${s.short.toLowerCase()} Anda.`}
        message={`Halo Vuyama Labs, saya tertarik dengan layanan ${s.title}. Saya ingin diskusi kebutuhan bisnis saya.`}
      />
    </main>
  );
}
