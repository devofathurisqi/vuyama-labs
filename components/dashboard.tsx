"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  Search,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
const periods = {
  Minggu: {
    amount: "Rp 8.450.000",
    orders: "48",
    heights: [32, 46, 35, 62, 48, 82, 70],
  },
  Bulan: {
    amount: "Rp 32.850.000",
    orders: "186",
    heights: [35, 50, 42, 65, 53, 88, 74],
  },
  Tahun: {
    amount: "Rp 394.200.000",
    orders: "2.232",
    heights: [28, 40, 50, 37, 62, 72, 90],
  },
};
export function Dashboard({ compact = false }: { compact?: boolean }) {
  const [period, setPeriod] = useState<keyof typeof periods>("Bulan");
  const [tab, setTab] = useState("Ringkasan");
  const [search, setSearch] = useState("");
  const data = periods[period];
  const rows = [
    ["Nadia Putri", "VL-0248", "Rp 485.000", "Selesai"],
    ["Aulia Store", "VL-0247", "Rp 1.250.000", "Diproses"],
    ["Rina Boutique", "VL-0246", "Rp 720.000", "Selesai"],
  ].filter((r) => r.join(" ").toLowerCase().includes(search.toLowerCase()));
  return (
    <div
      inert={compact || undefined}
      className={`dashboard ${compact ? "compact" : ""}`}
    >
      <div className="browser-bar">
        <div className="browser-dots">
          <i />
          <i />
          <i />
        </div>
        <div className="browser-address">
          <span>▣</span> app.ruangusaha.demo
        </div>
        <MoreHorizontal size={14} />
      </div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="dash-brand">
            <span>
              r<span>u</span>
            </span>
          </div>
          {[
            [LayoutDashboard, "Ringkasan"],
            [ShoppingBag, "Pesanan"],
            [Package, "Produk"],
            [Users, "Pelanggan"],
          ].map(([Icon, name]) => {
            const I = Icon as typeof LayoutDashboard;
            return (
              <button
                key={String(name)}
                aria-label={String(name)}
                className={tab === name ? "active" : ""}
                onClick={() => setTab(String(name))}
              >
                <I size={17} />
              </button>
            );
          })}
          <Settings className="dash-settings" size={17} />
        </aside>
        <div className="dash-content">
          <div className="dash-heading">
            <div>
              <p>Selamat pagi, pemilik usaha ☀</p>
              <h3>
                {tab === "Ringkasan" ? "Bisnis Anda, dalam kendali." : tab}
              </h3>
            </div>
            <div className="dash-avatar">N</div>
          </div>
          <div className="dash-stat-grid">
            <div>
              <span>Total penjualan</span>
              <strong>{data.amount}</strong>
              <small>
                <TrendingUp size={11} /> +12,8% <span>dari periode lalu</span>
              </small>
            </div>
            <div>
              <span>Pesanan masuk</span>
              <strong>
                {data.orders}
                <small> pesanan</small>
              </strong>
              <small>
                <TrendingUp size={11} /> +8,2% <span>dari periode lalu</span>
              </small>
            </div>
          </div>
          {tab === "Ringkasan" ? (
            <div className="chart-card">
              <div className="chart-header">
                <strong>Overview penjualan</strong>
                <div className="period-control">
                  <select
                    aria-label="Periode penjualan"
                    value={period}
                    onChange={(e) =>
                      setPeriod(e.target.value as keyof typeof periods)
                    }
                  >
                    {Object.keys(periods).map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                  <ChevronDown size={11} />
                </div>
              </div>
              <div className="chart-area">
                <div className="chart-axis">
                  <span>10jt</span>
                  <span>5jt</span>
                  <span>0</span>
                </div>
                <div className="bars">
                  {data.heights.map((h, i) => (
                    <div key={i} className="bar-column">
                      <div className="bar" style={{ height: `${h}%` }}>
                        <span>{(h * 100000).toLocaleString("id-ID")}</span>
                      </div>
                      <label>
                        {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"][i]}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="dash-tab-note">
              <Package size={26} />
              <strong>
                {tab === "Produk"
                  ? "24 produk siap dikelola"
                  : tab === "Pelanggan"
                    ? "Kenali pelanggan Anda"
                    : "Pantau setiap pesanan"}
              </strong>
              <p>
                {tab === "Produk"
                  ? "Katalog, stok, dan kategori di satu tempat."
                  : tab === "Pelanggan"
                    ? "Riwayat pembelian membantu pelayanan lebih personal."
                    : "Cari pesanan di tabel berikut."}
              </p>
            </div>
          )}
          <div className="orders-heading">
            <strong>Pesanan terbaru</strong>
            <div className="dash-search">
              <Search size={12} />
              <input
                aria-label="Cari pesanan demo"
                placeholder="Cari pesanan"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="order-table">
            {rows.map((r, i) => (
              <div className="order-row" key={r[1]}>
                <span className={`order-avatar avatar-${i}`}>{r[0][0]}</span>
                <div>
                  <strong>{r[0]}</strong>
                  <small>{r[1]}</small>
                </div>
                <span>{r[2]}</span>
                <em className={r[3] === "Selesai" ? "done" : "pending"}>
                  {r[3]}
                </em>
              </div>
            ))}
            {rows.length === 0 && (
              <p className="no-results">Tidak ada pesanan yang cocok.</p>
            )}
          </div>
        </div>
      </div>
      <div className="dashboard-bottom">
        <span>
          <i /> Demo konsep · Data ilustrasi
        </span>
        <ArrowUpRight size={12} />
      </div>
    </div>
  );
}
