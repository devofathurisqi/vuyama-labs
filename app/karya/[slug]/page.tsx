import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { work } from "@/lib/work";
import { offers } from "@/lib/catalog";
import { DiscussionCTA, SectionLabel } from "@/components/site";

export function generateStaticParams() { return work.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find(item => item.slug === slug);
  return { title: project ? `${project.title} — Karya` : "Karya", description: project?.description, alternates: { canonical: `/karya/${slug}/` }, openGraph: { images: project ? [project.image] : [] } };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = work.find(item => item.slug === slug);
  if (!project) notFound();
  const offer = offers.find(item => item.slug === project.offer)!;
  return <main id="main"><section className="work-detail-intro container"><Link href="/karya/" className="back-link">← Semua karya</Link><SectionLabel>{project.category.toUpperCase()} / {project.status.toUpperCase()}</SectionLabel><div><div><h1>{project.title}</h1><p>{project.description}</p></div>{project.url && <a href={project.url} className="button button-dark" target="_blank" rel="noopener noreferrer">Lihat website <ArrowUpRight size={17} /></a>}</div></section><div className="container"><div className="work-detail-image" style={{ backgroundColor: project.color }}><Image src={project.image} alt={`Tangkapan layar ${project.title}`} width={1440} height={1024} priority sizes="(max-width: 700px) 90vw, 80vw" /></div><p className="work-detail-note">{project.note}</p></div><section className="work-detail-body container"><div><SectionLabel>THE BRIEF & THE BUILD</SectionLabel><h2>Dari kebutuhan.<br /><span>Menjadi cara kerja.</span></h2><h3>Kebutuhan</h3><p>{project.challenge}</p><h3>Implementasi</h3><p>{project.solution}</p></div><aside><h2>Fitur yang dibangun</h2><ul>{project.features.map(feature => <li key={feature}><Check size={17} /><span>{feature}</span></li>)}</ul><Link className="text-button" href={`/pricelist/${offer.slug}/`}>Lihat layanan {offer.title} <ArrowUpRight size={17} /></Link></aside></section><DiscussionCTA title="Punya kebutuhan yang mirip?" message={`Halo Vuyama Labs, saya melihat karya ${project.title}. Saya ingin mendiskusikan solusi yang sesuai untuk bisnis saya.`} /></main>;
}
