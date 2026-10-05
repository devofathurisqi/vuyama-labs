"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  Workflow,
  Shapes,
  Check,
  ChevronDown,
  Plus,
  MessageCircle,
  Play,
  Send,
} from "lucide-react";
import { services, projects, faq, track } from "@/lib/content";
import { Reveal, SectionLabel, WhatsAppLink } from "./site";
import {
  ProductTheater,
  FeaturedShowcase,
  TimeEstimator,
} from "./enhancements";
import { Playground } from "./playground";
const icons = {
  Globe,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  Workflow,
  Shapes,
};
function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-pattern" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-eyebrow">
              <span className="status-dot" /> YOUR NEXT TECHNOLOGY PARTNER
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Ide Anda.
              <br />
              Kami buat
              <br />
              <span>
                jadi nyata.
                <svg viewBox="0 0 430 18" aria-hidden="true">
                  <path d="M3 14Q210-7 425 10" />
                </svg>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Website, aplikasi, hingga AI automation.
              <br />
              Solusi digital yang dibangun untuk kebutuhan
              <br className="desktop-break" /> bisnis Anda. Sederhana maupun
              kompleks.
            </p>
            <div className="hero-actions">
              <Link href="#diskusi" className="button button-blue">
                Diskusikan ide Anda <ArrowUpRight size={18} />
              </Link>
              <Link href="#showcase" className="text-button">
                Lihat karya konsep <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-note">
              <span className="note-symbol">✳</span>
              <span>
                Untuk UMKM yang bertumbuh.
                <br />
                <strong>Dan bisnis dengan ide besar.</strong>
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-visual-v2" delay={0.18}>
          <ProductTheater />
        </Reveal>
      </div>
      <div className="container hero-bottom">
        <span>SMALL BUSINESS. BIG POSSIBILITIES.</span>
        <Link href="#layanan">
          Scroll to explore <span>↓</span>
        </Link>
      </div>
    </section>
  );
}
function CapabilityStrip() {
  return (
    <div className="capability-strip">
      <div className="container">
        <span>
          ONE PARTNER.
          <br />
          <strong>MANY POSSIBILITIES.</strong>
        </span>
        {[
          { icon: Globe, text: "Websites" },
          { icon: Smartphone, text: "Applications" },
          { icon: Sparkles, text: "AI & Automation" },
          { icon: LayoutDashboard, text: "Business Systems" },
          { icon: Workflow, text: "Integrations" },
        ].map((i) => (
          <div key={i.text}>
            <i.icon size={21} />
            <strong>{i.text}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
function Services() {
  return (
    <section id="layanan" className="section services-section container">
      <Reveal>
        <SectionLabel>WHAT WE CAN BUILD</SectionLabel>
        <div className="section-heading">
          <h2>
            Kebutuhan Anda.
            <br />
            <span>Kemampuan kami.</span>
          </h2>
          <p>
            Butuh website sederhana? Bisa.
            <br />
            Punya ide sistem yang lebih kompleks? Juga bisa.
            <br />
            Kita mulai dari yang bisnis Anda butuhkan.
          </p>
        </div>
      </Reveal>
      <div className="services-grid">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal delay={(i % 3) * 0.07} key={s.slug}>
              <Link href={`/layanan/${s.slug}/`} className="service-card">
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </span>
                  <span className="service-number">/{s.number}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="service-card-bottom">
                  <span>Jelajahi solusi</span>
                  <span className="round-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
function SolutionFinder() {
  const [selected, setSelected] = useState(0);
  const s = services[selected];
  const Icon = icons[s.icon];
  return (
    <section className="finder-section">
      <div className="container finder-layout">
        <Reveal>
          <SectionLabel>START WITH YOUR CHALLENGE</SectionLabel>
          <h2>
            Sering kepikiran,
            <br />
            <span>
              “harusnya bisa
              <br />
              lebih gampang”?
            </span>
          </h2>
          <p>
            Pilih kebutuhan yang paling dekat dengan Anda.
            <br />
            Ada jalan untuk membuatnya lebih baik.
          </p>
        </Reveal>
        <Reveal className="finder-interactive">
          <div className="finder-options" aria-label="Pilih kebutuhan bisnis">
            {services.map((s, i) => (
              <button
                key={s.slug}
                className={selected === i ? "active" : ""}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
              >
                <span>{s.problem}</span>
                {selected === i ? <Check size={17} /> : <Plus size={17} />}
              </button>
            ))}
          </div>
          <div className="finder-result" aria-live="polite">
            <span className="finder-result-icon">
              <Icon size={25} />
            </span>
            <span className="overline">MULAI DARI SOLUSI INI</span>
            <h3>{s.title}</h3>
            <p>{s.tagline}</p>
            <ul>
              {s.benefits.map((b) => (
                <li key={b}>
                  <Check size={14} />
                  {b}
                </li>
              ))}
            </ul>
            <Link href={`/layanan/${s.slug}/`} className="text-button">
              Lihat lebih lanjut <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function ShowcaseGrid({ full = false }: { full?: boolean }) {
  const [filter, setFilter] = useState("Semua");
  const filtered = projects.filter(
    (p) => filter === "Semua" || p.category === filter,
  );
  return (
    <>
      <div className="showcase-filters" aria-label="Filter showcase">
        {[
          "Semua",
          "Website",
          "Aplikasi",
          "AI & Automation",
          "Sistem Bisnis",
        ].map((f) => (
          <button
            className={filter === f ? "active" : ""}
            aria-pressed={filter === f}
            key={f}
            onClick={() => {
              setFilter(f);
              track("showcase_filter", { category: f });
            }}
          >
            {f}
            {f === "Semua" && <span>04</span>}
          </button>
        ))}
      </div>
      <div className={`showcase-grid ${full ? "full" : ""}`}>
        {filtered.map((p) => (
          <Reveal key={p.slug}>
            <Link
              href={`/showcase/${p.slug}/`}
              className={`project-card ${p.color}`}
            >
              <div className="project-image">
                <span className="concept-badge">
                  <span /> DEMO KONSEP
                </span>
                <Image
                  src={p.image}
                  alt={`Visual konsep ${p.title}: ${p.description}`}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                <span className="project-open">
                  <ArrowUpRight size={24} />
                </span>
              </div>
              <div className="project-info">
                <div>
                  <span>{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <ArrowUpRight size={24} />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
function Showcase() {
  return (
    <section id="showcase" className="section showcase-section container">
      <Reveal>
        <SectionLabel>IMAGINE THE POSSIBILITIES</SectionLabel>
        <div className="section-heading">
          <h2>
            Bukan sekadar ide.
            <br />
            <span>Begini bentuknya.</span>
          </h2>
          <div>
            <p>
              Jelajahi contoh solusi yang bisa kita bangun.
              <br />
              Setiap bisnis punya cerita. Ini beberapa kemungkinan.
            </p>
            <span className="honest-note">
              Showcase berikut adalah demo konsep, bukan proyek klien.
            </span>
          </div>
        </div>
      </Reveal>
      <FeaturedShowcase />
    </section>
  );
}
function Lab() {
  return (
    <section id="playground" className="lab-section">
      <div className="container">
        <Reveal>
          <div className="lab-heading">
            <div>
              <SectionLabel light>LESS TALK. MORE INTERACTION.</SectionLabel>
              <h2>
                Jangan cuma lihat.
                <br />
                <span>Coba sendiri.</span>
                <span className="lab-star">✳</span>
              </h2>
            </div>
            <div>
              <p>
                Teknologi lebih mudah dipahami saat dicoba.
                <br />
                Masuk ke playground kecil kami dan lihat
                <br />
                bagaimana solusi bekerja.
              </p>
              <span className="lab-tag">
                <Play size={12} /> THE VUYAMA PLAYGROUND
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <Playground />
        </Reveal>
      </div>
    </section>
  );
}
function Process() {
  const items = [
    [
      "Cerita dulu.",
      "Kita dengarkan kebutuhan, kendala, dan tujuan bisnis Anda. Tidak perlu membawa istilah teknis.",
    ],
    [
      "Susun arahnya.",
      "Anda menerima usulan solusi, ruang lingkup, biaya, dan tahapan pengerjaan yang jelas.",
    ],
    [
      "Bangun bersama.",
      "Desain dan pengembangan berjalan dengan ruang untuk feedback di tahap yang disepakati.",
    ],
    [
      "Siap digunakan.",
      "Pengujian, peluncuran, dan serah terima. Dukungan lanjutan dibahas sesuai kebutuhan.",
    ],
  ];
  return (
    <section id="cara-kerja" className="section container process-section">
      <Reveal>
        <SectionLabel>GOOD WORK STARTS WITH A CONVERSATION</SectionLabel>
        <div className="section-heading">
          <h2>
            Dari obrolan.
            <br />
            <span>Menjadi solusi.</span>
          </h2>
          <p>
            Proses yang jelas, dari awal sampai digunakan.
            <br />
            Anda tahu apa yang dibangun dan ke mana arahnya.
          </p>
        </div>
      </Reveal>
      <div className="process-grid">
        {items.map(([title, desc], i) => (
          <Reveal delay={i * 0.08} key={title}>
            <div className="process-card">
              <div className="process-number">
                0{i + 1}
                <span>
                  {i === 3 ? <Check size={18} /> : <ArrowRight size={18} />}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="brand-note">
          <span className="brand-note-mark">
            V<span>↗</span>
          </span>
          <div>
            <span className="overline">BERANGKAT DARI DUNIA USAHA</span>
            <h3>Teknologi dekat dengan bisnis Anda.</h3>
            <p>
              Vuyama Labs lahir dari keinginan membantu bisnis bergerak lebih
              baik. Berawal dari kebutuhan UMKM dan jaringan Vuyama, terbuka
              untuk ide dan bisnis dari berbagai bidang.
            </p>
          </div>
          <Link href="#diskusi" className="text-button">
            Kenalan lewat diskusi <ArrowUpRight size={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="faq-section container">
      <Reveal>
        <SectionLabel>A LITTLE MORE CLARITY</SectionLabel>
        <h2>
          Mungkin ini
          <br />
          <span>yang Anda pikirkan.</span>
        </h2>
        <p>
          Masih ada pertanyaan lain?
          <br />
          <WhatsAppLink source="faq" className="text-button">
            Tanyakan langsung <ArrowUpRight size={15} />
          </WhatsAppLink>
        </p>
      </Reveal>
      <div className="faq-list">
        {faq.map(([q, a], i) => (
          <div key={q} className={`faq-item ${active === i ? "active" : ""}`}>
            <h3>
              <button
                onClick={() => setActive(active === i ? null : i)}
                aria-expanded={active === i}
                aria-controls={`faq-${i}`}
              >
                {q}
                <Plus size={19} />
              </button>
            </h3>
            <div id={`faq-${i}`} className="faq-answer" hidden={active !== i}>
              <p>{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Consultation() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState("Website & E-commerce");
  const [details, setDetails] = useState("");
  const [ready, setReady] = useState(false);
  const message = `Halo Vuyama Labs! Saya ${name.trim()} dari ${business.trim()}.\n\nSaya ingin diskusi tentang: ${need}.\nKebutuhan saya: ${details.trim()}\n\nBoleh kita diskusi lebih lanjut?`;
  return (
    <section id="diskusi" className="consultation-section">
      <div className="container consultation-layout">
        <Reveal>
          <SectionLabel light>YOUR IDEA STARTS HERE</SectionLabel>
          <h2>
            Bisnis Anda punya
            <br />
            cerita berikutnya.
            <br />
            <span>
              Kita bangun
              <br />
              bersama.
            </span>
            <ArrowUpRight className="consult-arrow" />
          </h2>
          <p>
            Website pertama, aplikasi baru, atau proses
            <br />
            yang ingin dibuat lebih mudah. Ceritakan saja.
          </p>
          <WhatsAppLink className="consult-direct" source="direct-contact">
            <MessageCircle size={18} /> Langsung chat juga boleh{" "}
            <ArrowUpRight size={16} />
          </WhatsAppLink>
        </Reveal>
        <Reveal className="consultation-form-wrap">
          <span className="overline">MULAI DENGAN PERKENALAN SINGKAT</span>
          <h3>Apa yang ingin Anda bangun?</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setReady(true);
              track("consultation_prepared", { service: need });
            }}
            onChange={() => setReady(false)}
          >
            <div className="form-row">
              <label>
                Nama Anda
                <input
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama panggilan"
                  maxLength={80}
                />
              </label>
              <label>
                Nama bisnis
                <input
                  required
                  autoComplete="organization"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="Bisnis Anda"
                  maxLength={120}
                />
              </label>
            </div>
            <label>
              Saya tertarik dengan
              <div className="select-wrap">
                <select value={need} onChange={(e) => setNeed(e.target.value)}>
                  {services.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                  <option>Masih ingin diskusi dulu</option>
                </select>
                <ChevronDown size={17} />
              </div>
            </label>
            <label>
              Ceritakan sedikit kebutuhan Anda
              <textarea
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Misalnya: saya ingin katalog online agar pelanggan bisa lihat produk dan pesan lewat WhatsApp…"
                rows={3}
                maxLength={1500}
              />
            </label>
            {!ready ? (
              <button
                className="button button-dark consult-submit"
                type="submit"
              >
                Siapkan pesan diskusi <ArrowRight size={17} />
              </button>
            ) : (
              <div className="message-preview" aria-live="polite">
                <strong>
                  <Check size={15} /> Pesan siap. Periksa, lalu lanjutkan.
                </strong>
                <p>{message}</p>
                <WhatsAppLink
                  message={message}
                  className="button button-dark consult-submit"
                  source="consultation-form"
                >
                  Lanjut ke WhatsApp <Send size={16} />
                </WhatsAppLink>
              </div>
            )}
            <p className="form-privacy">
              Form ini menyusun pesan di perangkat Anda. Pesan dikirim setelah
              Anda mengirimkannya di WhatsApp.{" "}
              <Link href="/privasi/">Privasi</Link>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <CapabilityStrip />
      <Services />
      <SolutionFinder />
      <Showcase />
      <Lab />
      <TimeEstimator />
      <Process />
      <FAQ />
      <Consultation />
    </main>
  );
}
