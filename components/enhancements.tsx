"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Dashboard } from "./dashboard";
import { Reveal, SectionLabel, WhatsAppLink } from "./site";
import { projects, track } from "@/lib/content";

const scenes = [
  {
    id: "system",
    name: "Business app",
    icon: LayoutDashboard,
    caption: "Semua yang penting. Satu tampilan.",
    color: "#2554ed",
  },
  {
    id: "website",
    name: "Website",
    icon: Globe,
    caption: "Brand Anda, dengan kesan yang tepat.",
    color: "#a47658",
  },
  {
    id: "ai",
    name: "AI automation",
    icon: Sparkles,
    caption: "Dari percakapan, menjadi tindakan.",
    color: "#7c60d4",
  },
] as const;

function CommerceScene() {
  return (
    <div className="theater-commerce">
      <div className="commerce-browser">
        <span>
          <i />
          <i />
          <i />
        </span>
        <small>aruna.store · demo konsep</small>
        <Globe size={12} />
      </div>
      <div className="commerce-scene-nav">
        <strong>ARUNA</strong>
        <span>
          Collection <span>Our story</span>
        </span>
        <ShoppingBag size={15} />
      </div>
      <div className="commerce-scene-image">
        <Image
          src="/images/commerce.webp"
          alt="Contoh website fashion Aruna Store"
          width={1536}
          height={1024}
          sizes="(max-width: 700px) 90vw, 45vw"
          priority
        />
        <span className="commerce-caption">
          A little everyday
          <br />
          <em>extraordinary.</em>
        </span>
      </div>
      <div className="commerce-scene-bottom">
        <span>Thoughtfully made. Beautifully presented.</span>
        <span>
          Explore the collection <ArrowUpRight size={12} />
        </span>
      </div>
    </div>
  );
}

function AIScene() {
  return (
    <div className="theater-ai">
      <div className="theater-ai-heading">
        <span>
          <Sparkles size={19} />
        </span>
        <div>
          <strong>Teman AI</strong>
          <small>
            <i /> Asisten bisnis · Demo konsep
          </small>
        </div>
        <span className="theater-ai-version">ASSISTANT / 01</span>
      </div>
      <div className="theater-ai-conversation">
        <div className="theater-bubble incoming">
          Halo, mau pesan 3 hijab warna Sage. Bisa?
        </div>
        <div className="theater-bubble outgoing">
          Bisa! Stok tersedia. Saya siapkan ringkasan pesanannya, ya.{" "}
          <Sparkles size={13} />
        </div>
        <div className="theater-order">
          <div>
            <ShoppingBag size={17} />
            <strong>Ringkasan pesanan</strong>
            <span>DEMO</span>
          </div>
          <p>
            Hijab Voal · Sage <span>3 × Rp 95.000</span>
          </p>
          <footer>
            <span>Total</span>
            <strong>Rp 285.000</strong>
          </footer>
        </div>
      </div>
      <div className="theater-ai-flow">
        <span>
          <MessageCircle size={14} /> Chat
        </span>
        <ChevronRight size={13} />
        <span>
          <LayoutDashboard size={14} /> Order
        </span>
        <ChevronRight size={13} />
        <span>
          <Check size={14} /> Siap diproses
        </span>
      </div>
    </div>
  );
}

export function ProductTheater() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const scene = scenes[selected];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const softX = useSpring(x, { stiffness: 130, damping: 25 });
  const softY = useSpring(y, { stiffness: 130, damping: 25 });
  const rotateX = useTransform(softY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(softX, [-0.5, 0.5], [-5, 5]);
  return (
    <div className={`product-theater scene-${scene.id}`}>
      <div className="theater-mesh" aria-hidden="true" />
      <div className="theater-grid" aria-hidden="true" />
      <div className="theater-orbit" aria-hidden="true" />
      <div className="theater-orbit second" aria-hidden="true" />
      <div className="theater-topline">
        <span>
          <i /> THE POSSIBILITIES ARE REAL
        </span>
        <span>V/L — 001</span>
      </div>
      <div
        className="theater-stage"
        onPointerMove={(e) => {
          if (reduced || e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - r.left) / r.width - 0.5);
          y.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <motion.div
          className="theater-device"
          style={
            reduced ? {} : { rotateX, rotateY, transformPerspective: 1100 }
          }
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{
                duration: reduced ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {scene.id === "system" ? (
                <Dashboard compact />
              ) : scene.id === "website" ? (
                <CommerceScene />
              ) : (
                <AIScene />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="theater-floating-note"
          animate={reduced ? {} : { y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>
            <Zap size={17} />
          </span>
          <div>
            <strong>
              {scene.id === "website"
                ? "First impressions, upgraded."
                : scene.id === "ai"
                  ? "Percakapan → Pesanan"
                  : "Less busywork. More business."}
            </strong>
            <small>
              {scene.id === "website"
                ? "Desktop & mobile, beautifully connected."
                : scene.id === "ai"
                  ? "Terhubung dengan alur bisnis Anda."
                  : "Tools yang mengikuti cara kerja Anda."}
            </small>
          </div>
          <span className="theater-note-check">
            <Check size={12} />
          </span>
        </motion.div>
        <div className="theater-cursor" aria-hidden="true">
          <ArrowUpRight size={22} />
          <span>Your next big idea</span>
        </div>
      </div>
      <div className="theater-controls">
        <div
          className="theater-scene-tabs"
          role="tablist"
          aria-label="Jelajahi kemampuan Vuyama Labs"
        >
          {scenes.map((s, i) => (
            <button
              id={`scene-tab-${s.id}`}
              role="tab"
              aria-selected={selected === i}
              aria-controls="hero-scene-panel"
              tabIndex={selected === i ? 0 : -1}
              key={s.id}
              className={selected === i ? "active" : ""}
              onClick={() => setSelected(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const next =
                    (selected +
                      (e.key === "ArrowRight" ? 1 : -1) +
                      scenes.length) %
                    scenes.length;
                  setSelected(next);
                  e.currentTarget.parentElement
                    ?.querySelectorAll("button")
                    [next]?.focus();
                }
              }}
            >
              <s.icon size={14} />
              {s.name}
            </button>
          ))}
        </div>
        <div
          id="hero-scene-panel"
          role="tabpanel"
          aria-labelledby={`scene-tab-${scene.id}`}
          className="theater-caption"
          aria-live="polite"
        >
          <span>0{selected + 1} / 03</span>
          {scene.caption}
        </div>
      </div>
      <span className="theater-side-text" aria-hidden="true">
        DESIGNED FOR YOUR NEXT CHAPTER
      </span>
    </div>
  );
}

export function FeaturedShowcase() {
  const [index, setIndex] = useState(0);
  const p = projects[index];
  const reduced = useReducedMotion();
  const [direction, setDirection] = useState(1);
  const startX = useRef(0);
  function select(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + projects.length) % projects.length);
    track("featured_showcase", {
      project: projects[(next + projects.length) % projects.length].slug,
    });
  }
  return (
    <div className={`featured-showcase featured-${p.color}`}>
      <div className="featured-main">
        <div className="featured-story">
          <div className="featured-kicker">
            <span>SELECTED CONCEPT</span>
            <span>0{index + 1} / 04</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: reduced ? 0 : 0.22 }}
            >
              <span className="featured-category">{p.category}</span>
              <h3>
                {p.title}
                <span>↗</span>
              </h3>
              <p>{p.description}</p>
              <div className="featured-features">
                {p.features.slice(0, 3).map((f) => (
                  <span key={f}>
                    <Check size={12} />
                    {f}
                  </span>
                ))}
              </div>
              <Link
                href={`/showcase/${p.slug}/`}
                className="button button-dark"
              >
                Jelajahi konsep <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </AnimatePresence>
          <div className="featured-pagination">
            <button
              className="icon-button"
              aria-label="Konsep sebelumnya"
              onClick={() => select(index - 1)}
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              {projects.map((item, i) => (
                <button
                  aria-label={`Lihat konsep ${item.title}`}
                  aria-pressed={index === i}
                  key={item.slug}
                  onClick={() => select(i)}
                  className={index === i ? "active" : ""}
                />
              ))}
            </div>
            <button
              className="icon-button"
              aria-label="Konsep berikutnya"
              onClick={() => select(index + 1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div
          className="featured-art"
          onTouchStart={(e) => {
            startX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(delta) > 65) select(index + (delta < 0 ? 1 : -1));
          }}
        >
          <span className="featured-demo">
            <i /> DEMO KONSEP · VISUAL ILUSTRASI
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={p.slug}
              className="featured-image-wrap"
              initial={{ opacity: 0, x: direction * 25, scale: 1.03 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -15 }}
              transition={{
                duration: reduced ? 0 : 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src={p.image}
                alt={`Konsep ${p.title}: ${p.description}`}
                width={1536}
                height={1024}
                sizes="(max-width: 700px) 100vw, 65vw"
              />
              <Link
                className="featured-image-open"
                href={`/showcase/${p.slug}/`}
                aria-label={`Buka detail ${p.title}`}
              >
                <ArrowUpRight size={24} />
              </Link>
            </motion.div>
          </AnimatePresence>
          <span className="featured-art-caption">{p.label}</span>
        </div>
      </div>
      <div className="featured-thumbnails" aria-label="Pilih konsep showcase">
        {projects.map((item, i) => (
          <button
            key={item.slug}
            className={i === index ? "active" : ""}
            aria-pressed={i === index}
            onClick={() => select(i)}
          >
            <span className="thumbnail-image">
              <Image src={item.image} alt="" width={120} height={80} />
            </span>
            <span>
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </span>
            <ArrowUpRight size={15} />
          </button>
        ))}
      </div>
      <div className="featured-endnote">
        <span>
          Setiap konsep bisa menjadi awal solusi yang berbeda untuk bisnis Anda.
        </span>
        <Link href="/showcase/">
          Lihat semua konsep <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export function TimeEstimator() {
  const [hours, setHours] = useState(20);
  const [percent, setPercent] = useState(40);
  const saved = (hours * percent) / 100;
  const format = (n: number) =>
    n.toLocaleString("id-ID", { maximumFractionDigits: 1 });
  return (
    <section className="time-section">
      <div className="container time-layout">
        <Reveal>
          <SectionLabel>MAKE ROOM FOR WHAT MATTERS</SectionLabel>
          <h2>
            Waktu tim Anda.
            <br />
            <span>
              Untuk hal yang
              <br />
              lebih berarti.
            </span>
          </h2>
          <p>
            Balas pertanyaan yang sama. Salin data pesanan. Rekap laporan.
            Bayangkan sebagian pekerjaan rutin itu bisa terbantu.
          </p>
          <div className="time-narrative">
            <span>
              <Workflow size={19} />
            </span>
            <p>
              Mulai dari proses kecil.
              <br />
              <strong>Bangun ruang untuk berkembang.</strong>
            </p>
            <ArrowDown size={18} />
          </div>
        </Reveal>
        <Reveal className="time-calculator">
          <div className="time-calculator-heading">
            <span>
              <Zap size={17} /> SIMULASI WAKTU
            </span>
            <span>COBA GESER ↔</span>
          </div>
          <label htmlFor="routine-hours">
            Waktu untuk pekerjaan rutin per minggu<strong>{hours} jam</strong>
          </label>
          <input
            id="routine-hours"
            type="range"
            min={5}
            max={60}
            step={1}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            style={
              {
                "--range-fill": `${((hours - 5) / 55) * 100}%`,
              } as React.CSSProperties
            }
          />
          <div className="range-extents">
            <span>5 jam</span>
            <span>60 jam</span>
          </div>
          <label htmlFor="automated-percent">
            Bagian yang Anda bayangkan bisa terbantu<strong>{percent}%</strong>
          </label>
          <input
            id="automated-percent"
            type="range"
            min={10}
            max={80}
            step={5}
            value={percent}
            onChange={(e) => setPercent(Number(e.target.value))}
            style={
              {
                "--range-fill": `${((percent - 10) / 70) * 100}%`,
              } as React.CSSProperties
            }
          />
          <div className="range-extents">
            <span>10%</span>
            <span>80%</span>
          </div>
          <div className="time-result" aria-live="polite">
            <span>RUANG WAKTU DALAM SKENARIO INI</span>
            <div>
              <strong>{format(saved)}</strong>
              <span>
                jam / minggu
                <br />
                <small>≈ {format(saved * 4)} jam per 4 minggu</small>
              </span>
              <span className="time-result-symbol">✳</span>
            </div>
          </div>
          <p className="time-disclaimer">
            Ilustrasi dari input Anda, bukan janji hasil. Perhitungan: jam
            pekerjaan rutin × persentase yang dipilih. Kelayakan automation
            perlu dibahas dari proses bisnis Anda.
          </p>
          <WhatsAppLink
            className="time-discuss"
            source="time-simulation"
            message={`Halo Vuyama Labs, saya ingin diskusi automation. Dalam simulasi saya, pekerjaan rutin sekitar ${hours} jam per minggu dan saya ingin mengevaluasi apakah ${percent}% bisa terbantu. Prosesnya ingin saya ceritakan lebih lanjut.`}
          >
            Diskusikan proses bisnis saya <ArrowUpRight size={17} />
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}

export function WebsitePreview() {
  const [device, setDevice] = useState("desktop");
  const [color, setColor] = useState(0);
  const [added, setAdded] = useState(false);
  const choices = [
    { name: "Sage", color: "#a1b4a0" },
    { name: "Sand", color: "#cbb69a" },
    { name: "Dusty Pink", color: "#c39e9d" },
  ];
  return (
    <div className="website-preview">
      <div className="website-preview-toolbar">
        <span>
          <Monitor size={15} /> ARUNA STORE / DEMO
        </span>
        <div>
          {["desktop", "mobile"].map((d) => (
            <button
              aria-pressed={device === d}
              className={device === d ? "active" : ""}
              key={d}
              onClick={() => setDevice(d)}
            >
              {d === "desktop" ? "Desktop" : "Mobile"}
            </button>
          ))}
        </div>
      </div>
      <div className={`preview-shop preview-${device}`}>
        <div className="preview-shop-header">
          <strong>ARUNA</strong>
          <span>Everyday, beautifully.</span>
          <ShoppingBag size={16} />
        </div>
        <div className="preview-shop-content">
          <div
            className="preview-product-art"
            style={
              { "--fabric-color": choices[color].color } as React.CSSProperties
            }
          >
            <span className="fabric-fold one" />
            <span className="fabric-fold two" />
            <span className="fabric-fold three" />
            <span className="preview-art-label">THE EVERYDAY COLLECTION</span>
          </div>
          <div className="preview-product-copy">
            <span>SOFT. SIMPLE. YOURS.</span>
            <h3>
              Hijab Voal{" "}
              <br />
              Everyday.
            </h3>
            <strong>Rp 95.000</strong>
            <p>
              Konsep katalog produk yang membantu pelanggan memilih dengan
              nyaman.
            </p>
            <fieldset>
              <legend>Pilih warna: {choices[color].name}</legend>
              <div>
                {choices.map((c, i) => (
                  <button
                    key={c.name}
                    className={i === color ? "selected" : ""}
                    style={{ background: c.color }}
                    type="button"
                    aria-label={`Pilih warna ${c.name}`}
                    aria-pressed={i === color}
                    onClick={() => {
                      setColor(i);
                      setAdded(false);
                    }}
                  />
                ))}
              </div>
            </fieldset>
            <button className="preview-add" onClick={() => setAdded(!added)}>
              {added ? <Check size={15} /> : <ShoppingBag size={15} />}{" "}
              {added
                ? "Ditambahkan ke keranjang demo"
                : "Tambah ke keranjang demo"}
            </button>
            <small aria-live="polite">
              {added
                ? `1 Hijab Voal · ${choices[color].name}. Simulasi, tanpa transaksi.`
                : "Coba warna, keranjang, dan tampilan perangkat."}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
