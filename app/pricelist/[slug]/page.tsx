import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { offers, formatRupiah } from "@/lib/catalog";
import { work } from "@/lib/work";
import { SectionLabel, WhatsAppLink } from "@/components/site";

export function generateStaticParams() { return offers.map(offer => ({ slug: offer.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offer = offers.find(item => item.slug === slug);
  return { title: offer ? `${offer.title}${offer.price ? ` mulai ${formatRupiah(offer.price)}` : ""}` : "Layanan", description: offer?.summary, alternates: { canonical: `/pricelist/${slug}/` } };
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = offers.find(item => item.slug === slug);
  if (!offer) notFound();
  const examples = work.filter(project => offer.related.includes(project.slug)).slice(0, 3);
  return (
    <main id="main">
      <section className="offer-detail-hero container"><Link href="/pricelist/" className="back-link">← Semua layanan & harga</Link><SectionLabel>{offer.category.toUpperCase()} / {offer.number}</SectionLabel><div className="offer-detail-heading"><div><span className="offer-detail-label">{offer.label}</span><h1>{offer.title}</h1><p>{offer.summary}</p></div><aside><span>{offer.price ? "Biaya pembuatan mulai" : "Biaya project"}</span><strong>{offer.price ? formatRupiah(offer.price) : "Sesuai scope"}</strong><p>{offer.price ? "Satu kali untuk cakupan yang disepakati." : "Penawaran setelah pemetaan kebutuhan."}</p><Link href={`/pricelist/?paket=${offer.slug}#brief`} className="button button-blue">Diskusikan layanan ini <ArrowUpRight size={17} /></Link></aside></div></section>
      <section className="offer-for-whom"><div className="container"><span>COCOK UNTUK</span><p>{offer.forWhom}</p></div></section>
      <section className="offer-detail-body container"><div><SectionLabel>THE SCOPE</SectionLabel><h2>Yang kita bangun.<br /><span>Terlihat jelas.</span></h2><div className="scope-groups">{offer.scope.map(group => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul></article>)}</div></div><aside className="deliverables-card"><span className="overline">SAAT SERAH TERIMA</span><h2>Yang Anda terima</h2><ul>{offer.deliverables.map(item => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul><hr /><h3>Cakupan & pengembangan</h3>{offer.boundaries.map(item => <p key={item}>{item}</p>)}<p>Domain, hosting, pemeliharaan, dan layanan pihak ketiga dikonfirmasi sesuai kebutuhan sebelum pengerjaan.</p></aside></section>
      {examples.length > 0 && <section className="offer-examples container"><SectionLabel>SEE IT IN ACTION</SectionLabel><div className="section-heading"><h2>Lihat implementasinya.</h2><p>Referensi fitur dan tampilan yang telah dibangun.<br />Cakupan setiap project mengikuti kebutuhannya.</p></div><div className="offer-example-grid">{examples.map(project => <Link href={`/karya/${project.slug}/`} key={project.slug}><Image src={project.image} alt={`Tangkapan layar ${project.title}`} width={1440} height={1024} sizes="(max-width: 700px) 90vw, 33vw" /><div><span>{project.status}</span><h3>{project.title}<ArrowUpRight size={19} /></h3></div></Link>)}</div></section>}
      <section className="offer-next container"><div><SectionLabel>YOUR NEXT STEP</SectionLabel><h2>Mulai dari kebutuhan Anda.</h2><p>Kita sepakati fitur, materi, revisi, jadwal, dan biaya sebelum mulai membangun.</p></div><div><Link href={`/pricelist/?paket=${offer.slug}#brief`} className="button button-blue">Isi brief singkat <ArrowRight size={17} /></Link><WhatsAppLink className="text-button" source="offer-detail" message={`Halo Vuyama Labs, saya tertarik dengan ${offer.title}${offer.price ? ` (mulai ${formatRupiah(offer.price)})` : ""}. Saya ingin mendiskusikan cakupan dan kebutuhan bisnis saya.`}>Langsung diskusi <ArrowUpRight size={17} /></WhatsAppLink></div></section>
    </main>
  );
}
