"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Globe, Layers, LayoutDashboard, Palette, Smartphone, Sparkles, Store, Workflow } from "lucide-react";
import { catalogPlans, formatRupiah, type Offer } from "@/lib/catalog";
import { audiences, work } from "@/lib/work";
import { Reveal, SectionLabel } from "./site";

export const offerIcons = { store: Store, palette: Palette, dashboard: LayoutDashboard, globe: Globe, app: Smartphone, sparkles: Sparkles, workflow: Workflow, layers: Layers };

export function OfferCard({ offer, onChoose }: { offer: Offer; onChoose?: (slug: string) => void }) {
  const Icon = offerIcons[offer.icon];
  return (
    <article className={`offer-card ${offer.featured ? "offer-featured" : ""}`} data-offer={offer.slug}>
      <div className="offer-top"><span className="offer-icon"><Icon size={22} strokeWidth={1.6} /></span><span>{offer.featured ? "KELOLA SENDIRI" : `/${offer.number}`}</span></div>
      <span className="offer-kicker">{offer.label}</span>
      <h3><Link href={`/pricelist/${offer.slug}/`}>{offer.title}</Link></h3>
      <p className="offer-summary">{offer.summary}</p>
      <div className="offer-price">
        <span>{offer.price ? "Mulai" : "Biaya project"}</span>
        <strong>{offer.price ? formatRupiah(offer.price) : "Sesuai scope"}</strong>
        <small>{offer.price ? "sekali untuk pembuatan sesuai scope" : "penawaran setelah pemetaan kebutuhan"}</small>
      </div>
      <ul>{offer.features.map(feature => <li key={feature}><Check size={15} /><span>{feature}</span></li>)}</ul>
      <div className="offer-actions">
        {onChoose ? <button className={`button ${offer.featured ? "button-blue" : "button-dark"}`} onClick={() => onChoose(offer.slug)}>Pilih layanan <ArrowUpRight size={16} /></button> : <Link className={`button ${offer.featured ? "button-blue" : "button-dark"}`} href={`/pricelist/${offer.slug}/`}>Lihat paket <ArrowUpRight size={16} /></Link>}
        {onChoose && <Link className="offer-detail" href={`/pricelist/${offer.slug}/`}>Detail cakupan <ArrowRight size={14} /></Link>}
      </div>
    </article>
  );
}

export function PricingOverview() {
  return (
    <section className="section pricing-overview" id="paket">
      <div className="container">
        <Reveal>
          <SectionLabel>THE RIGHT START</SectionLabel>
          <div className="section-heading"><h2>Katalog sendiri.<br /><span>Mulai dari sini.</span></h2><div><p>Pilih cara Anda mulai berjualan online.<br />Fitur, pengelolaan, dan cakupannya terbuka untuk dilihat.</p><Link href="/pricelist/#perbandingan" className="text-button">Bandingkan seluruh fitur <ArrowRight size={16} /></Link></div></div>
        </Reveal>
        <div className="offers-grid">{catalogPlans.map(offer => <Reveal key={offer.slug}><OfferCard offer={offer} /></Reveal>)}</div>
        <div className="pricing-footnote"><p>Harga mulai untuk pembuatan satu kali. Konten, revisi, jadwal, serta biaya domain dan layanan pihak ketiga disepakati di awal.</p><Link href="/pricelist/" className="text-button">Semua layanan & harga <ArrowUpRight size={17} /></Link></div>
      </div>
    </section>
  );
}

export function WorkGrid({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState("Semua");
  const visible = (full ? work : work.slice(0, 3)).filter(project => filter === "Semua" || project.category === filter);
  return (
    <>
      {full && <div className="work-filters" aria-label="Filter karya">{["Semua", "Katalog + Dashboard", "Katalog Brand", "Sistem Custom"].map(category => <button key={category} aria-pressed={filter === category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div>}
      <div className={`work-grid ${full ? "work-grid-full" : ""}`}>
        {visible.map(project => (
          <article className="work-card" key={project.slug}>
            <Link href={`/karya/${project.slug}/`} className="work-image" style={{ backgroundColor: project.color }} aria-label={`Lihat karya ${project.title}`}>
              <div className="work-browser"><span><i /><i /><i /></span><small>{project.url ? new URL(project.url).hostname : "aruna-rent / demo aplikasi"}</small><ArrowUpRight size={13} /></div>
              <Image src={project.image} alt={`Tangkapan layar ${project.title}${project.status === "Demo fungsional" ? ", demo sistem rental dengan data fiktif" : ", website katalog yang aktif"}`} width={1440} height={1024} sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 33vw" />
              <span className={`work-status ${project.status === "Demo fungsional" ? "is-demo" : ""}`}><i />{project.status}</span>
            </Link>
            <div className="work-info"><div><span>{project.category}</span><h3><Link href={`/karya/${project.slug}/`}>{project.title}</Link></h3></div><Link href={`/karya/${project.slug}/`} className="work-arrow" aria-label={`Detail ${project.title}`}><ArrowUpRight size={21} /></Link></div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
      {full && <p className="work-disclosure">Website aktif ditautkan ke halaman publiknya. Aruna Rent merupakan demo fungsional dengan data fiktif. Pilih karya untuk melihat fitur dan konteks implementasinya.</p>}
    </>
  );
}

export function RealProjects() {
  return (
    <section className="section container real-work" id="karya">
      <Reveal><SectionLabel>FROM THE LAB, INTO THE WORLD</SectionLabel><div className="section-heading"><h2>Sudah jadi.<br /><span>Bisa Anda jelajahi.</span></h2><div><p>Dari etalase brand sampai alur operasional.<br />Lihat tampilan, fitur, dan cara setiap solusi bekerja.</p><Link href="/karya/" className="text-button">Jelajahi seluruh karya <ArrowUpRight size={16} /></Link></div></div></Reveal>
      <WorkGrid />
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="audience-section">
      <div className="container">
        <div className="audience-heading"><div><SectionLabel>BUILT AROUND YOUR BUSINESS</SectionLabel><h2>Bidang Anda beragam.<br /><span>Solusinya juga.</span></h2></div><p>Vuyama Labs terbuka untuk pelaku usaha, profesional, dan organisasi. Bawa identitas dan kebutuhan Anda; kita bangun solusi yang sesuai.</p></div>
        <div className="audience-grid">{audiences.map((audience, index) => <article key={audience.title}><span className="audience-number">0{index + 1} /</span><h3>{audience.title}</h3><p>{audience.description}</p><span className="audience-example">{audience.example}</span></article>)}</div>
      </div>
    </section>
  );
}
