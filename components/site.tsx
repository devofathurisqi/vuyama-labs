"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { whatsapp, track } from "@/lib/content";
import { brand } from "@/lib/brand";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function BrandMark() {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true">
      <circle cx="200" cy="200" r="198" fill={brand.accent} />
      <svg x="16" y="154" width="368" height="92" viewBox={brand.wordmarkViewBox}>
        <path d={brand.wordmarkPath} fill={brand.ink} fillRule="evenodd" />
      </svg>
    </svg>
  );
}
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`} role="img" aria-label={brand.name}>
      <svg viewBox={brand.wordmarkViewBox} aria-hidden="true">
        <path d={brand.wordmarkPath} fill="currentColor" fillRule="evenodd" />
      </svg>
    </span>
  );
}
export function WhatsAppLink({
  children,
  className = "",
  message,
  source = "cta",
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
  source?: string;
}) {
  return (
    <a
      href={whatsapp(message)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { source })}
    >
      {children}
    </a>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className="site-header">
      <motion.div
        className="reading-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div className="container header-inner">
        <Link href="/" aria-label="Vuyama Labs, beranda">
          <Logo />
        </Link>
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Navigasi utama"
        >
          <Link href="/#layanan" onClick={() => setOpen(false)}>
            Layanan
          </Link>
          <Link href="/pricelist/" onClick={() => setOpen(false)} aria-current={pathname.startsWith("/pricelist") ? "page" : undefined}>
            Pricelist
          </Link>
          <Link href="/karya/" onClick={() => setOpen(false)} aria-current={pathname.startsWith("/karya") ? "page" : undefined}>
            Karya <span className="nav-count">06</span>
          </Link>
          <Link href="/#playground" onClick={() => setOpen(false)}>
            Playground <span className="nav-new">TRY IT</span>
          </Link>
          <Link href="/#cara-kerja" onClick={() => setOpen(false)}>
            Cara kerja
          </Link>
          <Link
            className="mobile-nav-cta"
            href="/#diskusi"
            onClick={() => setOpen(false)}
          >
            Mulai diskusi <ArrowUpRight size={16} />
          </Link>
        </nav>
        <Link href="/#diskusi" className="button button-dark header-cta">
          Diskusi dulu <ArrowUpRight size={16} />
        </Link>
        <button
          className="mobile-menu icon-button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="Beranda Vuyama Labs">
              <Logo light />
            </Link>
            <p>
              Teknologi yang mengikuti
              <br />
              cara bisnis Anda bekerja.
            </p>
            <span className="footer-by">DIGITAL STUDIO / UNTUK BISNIS ANDA</span>
          </div>
          <div className="footer-links">
            <span>JELAJAHI</span>
            <Link href="/#layanan">Layanan</Link>
            <Link href="/pricelist/">Pricelist & fitur</Link>
            <Link href="/karya/">Karya</Link>
            <Link href="/showcase/">Eksplorasi konsep</Link>
            <Link href="/#playground">The Playground</Link>
          </div>
          <div className="footer-links">
            <span>MARI TERHUBUNG</span>
            <WhatsAppLink source="footer">
              WhatsApp <ArrowUpRight size={14} />
            </WhatsAppLink>
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer">
              Instagram {brand.instagramHandle} <ArrowUpRight size={14} />
            </a>
            <Link href="/#diskusi">
              Diskusikan kebutuhan <ArrowRight size={14} />
            </Link>
            <span className="footer-number">+62 878 2431 5008</span>
          </div>
        </div>
        <div className="footer-word">
          LET’S BUILD<span> SOMETHING.</span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vuyama Labs.</span>
          <span>Dibangun dengan ide. Digerakkan teknologi.</span>
          <Link href="/privasi/">Privasi</Link>
        </div>
      </div>
    </footer>
  );
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-label ${light ? "light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro container">
      <Link href="/" className="back-link">
        ← Kembali ke beranda
      </Link>
      <SectionLabel>{label}</SectionLabel>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function DiscussionCTA({
  title = "Ada ide? Ada masalah? Kita mulai dari sana.",
  message,
}: {
  title?: string;
  message?: string;
}) {
  return (
    <section className="mini-cta container">
      <h2>{title}</h2>
      <WhatsAppLink
        className="button button-blue"
        message={message}
        source="detail"
      >
        Diskusikan kebutuhan <MessageCircle size={18} />
      </WhatsAppLink>
      <p>Mulai dengan cerita tentang bisnis Anda.</p>
    </section>
  );
}
