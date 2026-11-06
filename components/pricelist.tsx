"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MessageCircle, Minus, Search, SlidersHorizontal, X } from "lucide-react";
import { additionalNeeds, buildBrief, catalogPlans, categories, comparison, formatRupiah, offers, pricingFaq } from "@/lib/catalog";
import { track } from "@/lib/content";
import { OfferCard, offerIcons } from "./studio";
import { SectionLabel, WhatsAppLink } from "./site";

function ComparisonTable() {
  return (
    <section className="comparison-section container" id="perbandingan">
      <SectionLabel>SIDE BY SIDE</SectionLabel>
      <div className="section-heading"><h2>Bedanya di mana?<br /><span>Lihat satu per satu.</span></h2><p>Semua paket katalog membantu pelanggan memilih produk.<br />Pilih kedalaman desain dan cara pengelolaan yang Anda butuhkan.</p></div>
      <p className="table-scroll-hint"><SlidersHorizontal size={14} />Geser tabel untuk melihat semua paket.</p>
      <div className="comparison-scroll" role="region" aria-label="Perbandingan fitur tiga paket katalog" tabIndex={0}>
        <table className="comparison-table">
          <caption className="sr-only">Perbandingan Katalog Essential, Signature, dan Katalog + Dashboard</caption>
          <thead><tr><th scope="col">Fitur & pengelolaan</th>{catalogPlans.map(offer => <th scope="col" key={offer.slug}><Link href={`/pricelist/${offer.slug}/`}>{offer.title}</Link><span>Mulai {formatRupiah(offer.price!)}</span></th>)}</tr></thead>
          <tbody>{comparison.map(row => <tr key={row.feature}><th scope="row">{row.feature}</th>{row.values.map((value, index) => <td key={index}>{typeof value === "boolean" ? value ? <span className="comparison-yes"><Check size={17} /><span className="sr-only">Termasuk</span></span> : <span className="comparison-no"><Minus size={17} /><span className="sr-only">Belum termasuk</span></span> : value}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <p className="comparison-note">Rincian konten, halaman, revisi, dan jadwal dikonfirmasi sebelum pengerjaan. Pembayaran online dan integrasi tambahan dibahas sesuai kebutuhan.</p>
    </section>
  );
}

function BriefBuilder({ selected, onSelect }: { selected: string; onSelect: (slug: string) => void }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [details, setDetails] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const offer = offers.find(item => item.slug === selected) ?? offers[0];
  const Icon = offerIcons[offer.icon];
  const message = buildBrief(offer, name, business, details, extras);
  useEffect(() => { setReady(false); }, [selected]);
  return (
    <section className="brief-section" id="brief">
      <div className="container brief-layout">
        <div className="brief-copy"><SectionLabel light>LET’S MAKE IT YOURS</SectionLabel><h2>Sudah ada<br />gambaran?<br /><span>Ceritakan sedikit.</span></h2><p>Pilih layanan, tulis kebutuhan, lalu periksa ringkasan sebelum melanjutkan ke WhatsApp.</p><div className="brief-steps"><span><i>01</i>Pilih yang paling dekat</span><span><i>02</i>Lengkapi brief singkat</span><span><i>03</i>Diskusikan scope & biaya</span></div><WhatsAppLink className="text-button" source="pricelist-direct">Lebih nyaman chat langsung? <ArrowUpRight size={17} /></WhatsAppLink></div>
        <form className="brief-form" onChange={() => setReady(false)} onSubmit={event => { event.preventDefault(); setReady(true); track("pricing_brief_prepared", { offer: selected }); }}>
          <label htmlFor="brief-offer">Layanan yang Anda pilih</label>
          <div className="brief-select"><select id="brief-offer" value={selected} onChange={event => onSelect(event.target.value)}>{offers.map(item => <option key={item.slug} value={item.slug}>{item.title}</option>)}</select><ChevronDown size={18} /></div>
          <div className="brief-selection"><span><Icon size={22} /></span><div><strong>{offer.price ? `Mulai ${formatRupiah(offer.price)}` : "Penawaran sesuai scope"}</strong><p>{offer.price ? "Pembuatan satu kali. Kebutuhan tambahan dibahas terpisah." : "Biaya mengikuti modul, pengguna, dan integrasi yang disepakati."}</p></div></div>
          <div className="form-row"><label>Nama Anda<input required value={name} onChange={event => setName(event.target.value)} autoComplete="name" maxLength={80} placeholder="Nama panggilan" pattern=".*\S.*" /></label><label>Bisnis / organisasi<input required value={business} onChange={event => setBusiness(event.target.value)} autoComplete="organization" maxLength={120} placeholder="Nama bisnis atau rencana usaha" pattern=".*\S.*" /></label></div>
          <label>Ceritakan kebutuhan Anda<textarea required rows={4} maxLength={1500} minLength={10} value={details} onChange={event => { setDetails(event.target.value); event.target.setCustomValidity(event.target.value.trim().length >= 10 ? "" : "Tuliskan kebutuhan Anda minimal 10 karakter."); }} placeholder="Bidang usaha, fitur yang dibutuhkan, jumlah konten, dan target waktu bila ada…" /></label>
          <fieldset className="brief-extras"><legend>Ingin sekalian membahas? <span>Opsional · perlu penawaran</span></legend><div>{additionalNeeds.map(extra => <label key={extra}><input type="checkbox" checked={extras.includes(extra)} onChange={event => setExtras(previous => event.target.checked ? [...previous, extra] : previous.filter(item => item !== extra))} /><span>{extra}</span></label>)}</div></fieldset>
          {ready ? <div className="brief-preview" aria-live="polite"><strong><Check size={17} />Ringkasan siap diperiksa</strong><p>{message}</p><WhatsAppLink className="button button-blue" source="pricing-brief" message={message}>Lanjut ke WhatsApp <MessageCircle size={17} /></WhatsAppLink><button className="brief-edit" type="button" onClick={() => setReady(false)}>Ubah brief</button></div> : <button className="button button-dark brief-submit" type="submit">Periksa ringkasan kebutuhan <ArrowRight size={17} /></button>}
          <p className="brief-privacy">Brief disusun di browser Anda. Pesan dikirim setelah Anda melanjutkan dan mengirimkannya di WhatsApp. <Link href="/privasi/">Privasi</Link></p>
        </form>
      </div>
    </section>
  );
}

export function PricelistCatalog() {
  const [category, setCategory] = useState<string>("Semua");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("katalog-dashboard");
  const filtered = offers.filter(offer => (category === "Semua" || offer.category === category) && `${offer.title} ${offer.summary} ${offer.features.join(" ")}`.toLocaleLowerCase("id").includes(search.trim().toLocaleLowerCase("id")));
  useEffect(() => { const requested = new URLSearchParams(window.location.search).get("paket"); if (offers.some(offer => offer.slug === requested)) setSelected(requested!); }, []);
  function choose(slug: string) { setSelected(slug); document.getElementById("brief")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }
  return (
    <>
      <section className="pricelist-hero container">
        <Link href="/" className="back-link">← Kembali ke beranda</Link><SectionLabel>SERVICES / PRICELIST</SectionLabel>
        <div className="pricelist-heading"><h1>Jelas layanannya.<br /><span>Pas kebutuhannya.</span></h1><div><p>Dari katalog pertama hingga sistem yang membantu tim Anda bekerja. Jelajahi fitur, bandingkan paket, dan tentukan langkah berikutnya.</p><div className="pricelist-hero-links"><a href="#perbandingan" className="text-button">Bandingkan katalog <ArrowRight size={16} /></a><a href="#brief" className="text-button">Buat brief singkat <ArrowUpRight size={16} /></a></div></div></div>
        <div className="pricing-facts"><span><Check size={15} />Terbuka untuk semua bisnis</span><span><Check size={15} />Pakai identitas brand Anda</span><span><Check size={15} />Scope disepakati di awal</span></div>
      </section>
      <section className="catalog-section container" id="daftar-layanan" aria-label="Katalog layanan dan harga">
        <div className="catalog-toolbar"><div className="catalog-filters" aria-label="Kategori layanan">{categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={category === item ? "active" : ""}>{item}</button>)}</div><label className="catalog-search"><Search size={17} /><span className="sr-only">Cari layanan atau fitur</span><input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Cari layanan atau fitur…" />{search && <button type="button" aria-label="Hapus pencarian" onClick={() => setSearch("")}><X size={15} /></button>}</label></div>
        <div className="catalog-count" role="status">{filtered.length} layanan <span>Harga pembuatan mulai · kebutuhan tambahan mengikuti penawaran</span></div>
        {filtered.length ? <div className="offers-grid">{filtered.map(offer => <OfferCard offer={offer} onChoose={choose} key={offer.slug} />)}</div> : <div className="catalog-empty"><Search size={30} /><h2>Layanan belum ditemukan.</h2><p>Coba kata seperti katalog, dashboard, booking, atau AI.</p><button className="button button-dark" onClick={() => { setSearch(""); setCategory("Semua"); }}>Tampilkan semua layanan</button></div>}
        <div className="price-scope-note"><span>BIAYA YANG JELAS</span><p>Harga paket katalog merupakan biaya pembuatan satu kali sesuai cakupan. Domain, hosting, database, API, input konten tambahan, dan pemeliharaan dibahas sesuai kebutuhan. Anda menerima cakupan dan biaya akhir sebelum pengerjaan.</p></div>
      </section>
      <ComparisonTable />
      <section className="scope-steps container"><SectionLabel>BEFORE WE BUILD</SectionLabel><div className="scope-steps-grid">{[["01", "Kebutuhannya apa?", "Kita lihat bisnis, pengunjung, materi yang tersedia, dan fitur yang paling penting."], ["02", "Apa yang termasuk?", "Konten, halaman, fitur, revisi, jadwal, dan biaya ditulis dalam kesepakatan."], ["03", "Siap dipakai.", "Alur utama diuji, website dipublikasikan, dan penggunaan diserahterimakan."]].map(([number, title, description]) => <article key={number}><span>{number} /</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <BriefBuilder selected={selected} onSelect={setSelected} />
      <section className="pricing-faq container"><div><SectionLabel>A LITTLE MORE CLARITY</SectionLabel><h2>Sebelum<br /><span>memutuskan.</span></h2><p>Jawaban untuk hal yang biasanya ingin Anda pastikan lebih dulu.</p></div><div>{pricingFaq.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>
    </>
  );
}
