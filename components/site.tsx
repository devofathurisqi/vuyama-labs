"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { whatsapp, track } from "@/lib/content";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`}>
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M3 6h9l13 28h-9zM27 6h10L23 34l-5-11z" fill="currentColor" />
      </svg>
      <span>
        vuyama
        <span className="logo-labs">
          labs<span className="logo-dot">.</span>
        </span>
      </span>
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
          <Link href="/#showcase" onClick={() => setOpen(false)}>
            Showcase <span className="nav-count">04</span>
          </Link>
          <Link href="/#playground" onClick={() => setOpen(false)}>
            The Playground <span className="nav-new">TRY IT</span>
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
            <span className="footer-by">PART OF THE VUYAMA JOURNEY</span>
          </div>
          <div className="footer-links">
            <span>JELAJAHI</span>
            <Link href="/#layanan">Layanan</Link>
            <Link href="/showcase/">Showcase</Link>
            <Link href="/#playground">The Playground</Link>
          </div>
          <div className="footer-links">
            <span>MARI TERHUBUNG</span>
            <WhatsAppLink source="footer">
              WhatsApp <ArrowUpRight size={14} />
            </WhatsAppLink>
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
