"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Database,
  Package,
  FileText,
  Bell,
  Play,
  RotateCcw,
  Sparkles,
  Send,
  Workflow,
  LayoutDashboard,
  Globe,
} from "lucide-react";
import { Dashboard } from "./dashboard";
import { WebsitePreview } from "./enhancements";
const steps = [
  {
    icon: MessageCircle,
    title: "Order masuk",
    desc: "Pesanan dari pelanggan",
    detail: "Pesanan #DEMO-0249 diterima: 3 produk, Rp 285.000.",
  },
  {
    icon: Database,
    title: "Data tercatat",
    desc: "Tanpa input ulang",
    detail: "Nama pelanggan, produk, dan alamat masuk ke sistem contoh.",
  },
  {
    icon: Package,
    title: "Stok diperbarui",
    desc: "Terhubung otomatis",
    detail: "Stok ilustrasi berubah dari 48 menjadi 45 unit.",
  },
  {
    icon: FileText,
    title: "Invoice dibuat",
    desc: "Dokumen siap dikirim",
    detail: "Invoice demo disiapkan dari informasi pesanan.",
  },
  {
    icon: Bell,
    title: "Tim diberi tahu",
    desc: "Siap untuk diproses",
    detail: "Notifikasi contoh: pesanan baru siap diproses oleh tim.",
  },
];
function Automation() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => {
      if (step >= 4) {
        setRunning(false);
      } else setStep(step + 1);
    }, 850);
    return () => clearTimeout(timer);
  }, [running, step]);
  return (
    <div className="automation-demo">
      <div className="demo-topline">
        <span>
          <i /> ORDER WORKFLOW
        </span>
        <span>SIMULASI</span>
      </div>
      <div className="workflow-steps">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              className={`workflow-step ${step >= i ? "completed" : ""} ${step === i ? "current" : ""}`}
              key={s.title}
            >
              <button
                aria-label={`Lihat tahap ${s.title}`}
                onClick={() => {
                  setRunning(false);
                  setStep(i);
                }}
              >
                <Icon size={24} />
                {step >= i && (
                  <span className="step-check">
                    <Check size={11} />
                  </span>
                )}
              </button>
              <strong>{s.title}</strong>
              <small>{s.desc}</small>
              {i < 4 && (
                <div className="workflow-connector">
                  <span />
                  <ArrowRight size={15} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="workflow-log" aria-live="polite">
        <span className="log-dot" />
        <span>
          {step < 0
            ? "Satu pesanan. Lima pekerjaan. Coba jalankan alurnya."
            : steps[step].detail}
        </span>
      </div>
      <div className="workflow-controls">
        <button
          className="button button-blue"
          disabled={running}
          onClick={() => {
            setStep(-1);
            setRunning(true);
          }}
        >
          {running ? (
            <span className="spinner" />
          ) : step === 4 ? (
            <RotateCcw size={16} />
          ) : (
            <Play size={16} />
          )}{" "}
          {running
            ? "Menjalankan alur…"
            : step >= 0
              ? "Jalankan ulang"
              : "Coba jalankan automation"}
        </button>
        <span>
          {step === 4
            ? "Alur selesai. Tim bisa fokus ke pelanggan."
            : "Klik setiap tahap untuk menjelajah."}
        </span>
      </div>
    </div>
  );
}
type Message = { role: "user" | "assistant"; text: string };
function getReply(text: string) {
  const t = text.toLowerCase();
  if (/admin|manusia|komplain|keluhan|refund/.test(t))
    return "Untuk kebutuhan khusus seperti ini, percakapan perlu diteruskan ke admin. Dalam sistem nyata, tim Anda akan menerima konteks percakapannya.";
  if (/stok|sage|warna/.test(t))
    return "Dalam katalog demo, warna Sage tersedia 45 unit. Sistem nyata dapat mengambil informasi dari inventori bisnis Anda.";
  if (/harga|katalog|produk/.test(t))
    return "Produk ilustrasi: Hijab Voal Sage, Rp 95.000. Asisten nyata akan memakai katalog dan harga yang Anda tentukan.";
  if (/kirim|ongkir|pengiriman/.test(t))
    return "Pengiriman pada contoh ini membutuhkan alamat tujuan. Dalam sistem nyata, ongkir dapat diperiksa melalui integrasi ekspedisi yang tersedia.";
  return "Demo ini menggunakan jawaban skenario untuk stok, katalog, pengiriman, dan pengalihan ke admin. Coba salah satu pertanyaan di bawah. Kebutuhan AI bisnis Anda bisa kita diskusikan lebih lanjut.";
}
function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Halo! Saya Teman AI, asisten demo. Mau cek stok, katalog, atau informasi pengiriman?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const log = useRef<HTMLDivElement>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  useEffect(() => {
    log.current?.scrollTo({
      top: log.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);
  function send(text: string) {
    if (!text.trim() || typing) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: text.trim() }]);
    setTyping(true);
    timer.current = setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: getReply(text) }]);
      setTyping(false);
    }, 850);
  }
  return (
    <div className="chat-demo">
      <div className="chat-demo-header">
        <span className="ai-avatar">
          <Sparkles size={23} />
        </span>
        <div>
          <strong>Teman AI</strong>
          <small>
            <i /> Asisten demo · Jawaban skenario
          </small>
        </div>
        <button
          className="icon-button"
          aria-label="Reset percakapan"
          onClick={() => {
            if (timer.current) clearTimeout(timer.current);
            setTyping(false);
            setMessages([
              {
                role: "assistant",
                text: "Halo! Mau cek stok, katalog, atau pengiriman?",
              },
            ]);
          }}
        >
          <RotateCcw size={16} />
        </button>
      </div>
      <div className="chat-messages" ref={log} aria-live="polite">
        {messages.map((m, i) => (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`chat-message ${m.role}`}
            key={i}
          >
            {m.text}
          </motion.div>
        ))}
        {typing && (
          <div className="chat-message assistant typing">
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
      <div className="chat-suggestions">
        {["Stok warna Sage?", "Lihat katalog", "Bicara dengan admin"].map(
          (t) => (
            <button key={t} disabled={typing} onClick={() => send(t)}>
              {t}
              <ArrowRight size={12} />
            </button>
          ),
        )}
      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Coba tanyakan sesuatu…"
          aria-label="Pesan untuk asisten demo"
          maxLength={300}
        />
        <button disabled={typing || !input.trim()} aria-label="Kirim pesan">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
export function Playground() {
  const [tab, setTab] = useState("automation");
  return (
    <div className="playground">
      <div className="playground-tabs" role="tablist" aria-label="Pilih demo">
        {[
          { id: "automation", icon: Workflow, name: "Automation" },
          { id: "ai", icon: Sparkles, name: "AI Assistant" },
          { id: "website", icon: Globe, name: "Website Preview" },
          {
            id: "dashboard",
            icon: LayoutDashboard,
            name: "Business Dashboard",
          },
        ].map((t) => (
          <button
            id={`tab-${t.id}`}
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={tab === t.id ? "active" : ""}
          >
            <t.icon size={17} />
            {t.name}
            {tab === t.id && <span className="tab-dot" />}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="playground-panel"
          key={tab}
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {tab === "automation" ? (
            <Automation />
          ) : tab === "ai" ? (
            <Chat />
          ) : tab === "website" ? (
            <WebsitePreview />
          ) : (
            <div className="dashboard-demo">
              <Dashboard />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <p className="playground-disclaimer">
        Demo interaktif dengan data ilustrasi. Integrasi dan AI produksi
        disesuaikan dengan kebutuhan bisnis Anda.
      </p>
    </div>
  );
}
