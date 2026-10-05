export const services = [
  {
    slug: "website",
    number: "01",
    title: "Website & E-commerce",
    short: "Website",
    icon: "Globe",
    description:
      "Buat bisnis Anda mudah ditemukan. Dari company profile hingga toko online yang siap menerima pesanan.",
    tagline: "Kesan pertama yang membuka peluang.",
    problem: "Butuh website untuk bisnis",
    benefits: [
      "Company profile & landing page",
      "Katalog produk & toko online",
      "Website responsif & SEO dasar",
    ],
    detail:
      "Pelanggan mencari informasi sebelum memutuskan. Kami membuat website yang menjelaskan bisnis Anda, menampilkan produk dengan baik, dan memudahkan mereka menghubungi Anda.",
    examples: [
      "Company profile untuk usaha jasa",
      "Katalog hijab dengan pemesanan WhatsApp",
      "Toko online dengan alur checkout",
    ],
    demo: "aruna",
    color: "peach",
  },
  {
    slug: "aplikasi",
    number: "02",
    title: "Aplikasi Custom",
    short: "Aplikasi",
    icon: "Smartphone",
    description:
      "Punya ide aplikasi? Kami wujudkan aplikasi web dan mobile yang mengikuti cara bisnis Anda bekerja.",
    tagline: "Dari ide di kepala, jadi aplikasi di tangan.",
    problem: "Ingin membuat aplikasi sendiri",
    benefits: [
      "Aplikasi web & mobile",
      "Portal pelanggan & reseller",
      "Antarmuka sesuai kebutuhan",
    ],
    detail:
      "Setiap bisnis punya cara kerja sendiri. Aplikasi custom membantu pelanggan, reseller, dan tim Anda beraktivitas dengan alur yang sesuai kebutuhan, dari pemesanan sampai pemantauan pekerjaan.",
    examples: [
      "Portal pemesanan reseller",
      "Aplikasi booking layanan",
      "Aplikasi operasional tim",
    ],
    demo: "usaha-go",
    color: "mint",
  },
  {
    slug: "ai-automation",
    number: "03",
    title: "AI & Automation",
    short: "AI & Automation",
    icon: "Sparkles",
    description:
      "Kurangi pekerjaan berulang. Gunakan AI dan otomatisasi untuk membantu tim bekerja lebih efektif.",
    tagline: "Kerja rutin berjalan. Tim fokus berkembang.",
    problem: "Admin terlalu banyak pekerjaan rutin",
    benefits: [
      "AI customer service",
      "Otomatisasi invoice & laporan",
      "Workflow antar aplikasi",
    ],
    detail:
      "Kami memetakan pekerjaan berulang, menentukan bagian yang dapat diotomatisasi, dan membangun alurnya. AI dapat membantu menjawab pertanyaan dengan sumber informasi yang disepakati dan mengalihkan percakapan ke manusia saat diperlukan.",
    examples: [
      "Asisten informasi produk",
      "Pembuatan invoice dari pesanan",
      "Rekap laporan terjadwal",
    ],
    demo: "teman-ai",
    color: "lavender",
  },
  {
    slug: "sistem-bisnis",
    number: "04",
    title: "Sistem Bisnis",
    short: "Sistem Bisnis",
    icon: "LayoutDashboard",
    description:
      "Stok, pesanan, pelanggan, dan laporan. Kelola operasional bisnis dari satu tempat yang lebih rapi.",
    tagline: "Operasional rapi. Keputusan lebih jelas.",
    problem: "Stok dan pesanan sulit dipantau",
    benefits: [
      "Inventory & order management",
      "CRM & pengelolaan pelanggan",
      "Dashboard & laporan bisnis",
    ],
    detail:
      "Saat data tersebar di chat dan spreadsheet, pekerjaan menjadi sulit dilacak. Kami membantu merancang sistem untuk menyatukan data, mengatur akses tim, dan menampilkan informasi yang dibutuhkan.",
    examples: [
      "Sistem stok lintas gudang",
      "Dashboard pesanan reseller",
      "Pengelolaan database pelanggan",
    ],
    demo: "ruang-usaha",
    color: "blue",
  },
  {
    slug: "integrasi",
    number: "05",
    title: "Integrasi Sistem",
    short: "Integrasi",
    icon: "Workflow",
    description:
      "Hubungkan tools yang sudah Anda pakai, supaya data mengalir dan pekerjaan tidak perlu diulang.",
    tagline: "Tools terhubung. Bisnis terus bergerak.",
    problem: "Sering memindahkan data antar tools",
    benefits: [
      "Integrasi API & payment",
      "Koneksi WhatsApp & sistem bisnis",
      "Sinkronisasi data antar aplikasi",
    ],
    detail:
      "Kami memeriksa akses dan kemampuan tools yang Anda gunakan, lalu menghubungkannya melalui API atau alur integrasi yang tersedia. Ruang lingkup disesuaikan dengan dukungan masing-masing platform.",
    examples: [
      "Notifikasi status pesanan",
      "Pembayaran terhubung ke pesanan",
      "Sinkronisasi data produk",
    ],
    demo: "ruang-usaha",
    color: "blue",
  },
  {
    slug: "solusi-custom",
    number: "06",
    title: "Solusi Digital Lainnya",
    short: "Solusi Custom",
    icon: "Shapes",
    description:
      "Kebutuhan Anda belum ada di daftar? Ceritakan. Kita cari pendekatan teknologi yang paling sesuai.",
    tagline: "Mulai dari kebutuhan Anda.",
    problem: "Belum tahu solusi yang tepat",
    benefits: [
      "Diskusi & pemetaan kebutuhan",
      "Prototipe ide bisnis",
      "Pengembangan solusi bertahap",
    ],
    detail:
      "Anda tidak perlu datang dengan spesifikasi teknis. Ceritakan proses saat ini, kendala, dan tujuan bisnis Anda. Kami bantu menentukan prioritas, opsi solusi, dan tahapan yang masuk akal.",
    examples: [
      "Validasi ide produk digital",
      "Modernisasi proses spreadsheet",
      "Prototipe sistem internal",
    ],
    demo: "usaha-go",
    color: "mint",
  },
] as const;
export const projects = [
  {
    slug: "ruang-usaha",
    title: "Ruang Usaha",
    category: "Sistem Bisnis",
    label: "OPERATIONS, SIMPLIFIED",
    description:
      "Satu pusat kendali untuk stok, pesanan, dan perkembangan usaha.",
    image: "/images/inventory.webp",
    color: "blue",
    services: ["sistem-bisnis", "integrasi"],
    features: [
      "Ringkasan penjualan",
      "Pengelolaan stok",
      "Status pesanan",
      "Laporan operasional",
    ],
    problem:
      "Data stok dan pesanan tersebar membuat tim sulit melihat kondisi usaha.",
    approach:
      "Konsep dashboard yang menyatukan ringkasan, katalog, dan daftar pesanan dalam antarmuka yang mudah dipantau.",
  },
  {
    slug: "aruna",
    title: "Aruna Store",
    category: "Website",
    label: "A BETTER SHOPPING EXPERIENCE",
    description:
      "Etalase digital yang membawa karakter brand ke setiap produk.",
    image: "/images/commerce.webp",
    color: "peach",
    services: ["website"],
    features: [
      "Katalog responsif",
      "Kategori koleksi",
      "Detail produk",
      "Pemesanan WhatsApp",
    ],
    problem:
      "Produk hanya terlihat di chat dan pelanggan sulit menjelajahi koleksi.",
    approach:
      "Konsep website fashion dengan fotografi editorial, katalog terstruktur, dan jalur pemesanan yang jelas.",
  },
  {
    slug: "teman-ai",
    title: "Teman AI",
    category: "AI & Automation",
    label: "LESS REPETITION, MORE CONNECTION",
    description:
      "Asisten untuk pertanyaan rutin, dengan manusia tetap di dalam alur.",
    image: "/images/ai.webp",
    color: "lavender",
    services: ["ai-automation"],
    features: [
      "Informasi produk",
      "Skenario percakapan",
      "Pengalihan ke admin",
      "Ringkasan percakapan",
    ],
    problem: "Pertanyaan serupa datang berulang dan menghabiskan waktu admin.",
    approach:
      "Konsep inbox yang membantu menjawab pertanyaan umum dari basis informasi bisnis dan meneruskan kebutuhan khusus ke tim.",
  },
  {
    slug: "usaha-go",
    title: "Usaha Go",
    category: "Aplikasi",
    label: "YOUR BUSINESS, WITH YOU",
    description: "Aplikasi operasional yang menemani bisnis, di mana saja.",
    image: "/images/mobile.webp",
    color: "mint",
    services: ["aplikasi", "solusi-custom"],
    features: [
      "Ringkasan harian",
      "Daftar pesanan",
      "Katalog produk",
      "Tampilan mobile",
    ],
    problem:
      "Pemilik usaha membutuhkan akses operasional yang praktis ketika berada di luar toko.",
    approach:
      "Konsep aplikasi mobile yang menempatkan pesanan, produk, dan ringkasan bisnis dalam navigasi ringkas.",
  },
] as const;
export const faq = [
  [
    "Kalau hanya butuh website sederhana, bisa?",
    "Tentu. Kami juga membuat landing page, company profile, dan katalog sederhana. Ruang lingkup disesuaikan dengan kebutuhan Anda; tidak harus membuat sistem yang besar.",
  ],
  [
    "Saya belum tahu harus membuat apa. Bisa diskusi dulu?",
    "Bisa. Ceritakan bisnis Anda, proses yang sedang berjalan, dan bagian yang ingin diperbaiki. Kita mulai dari sana untuk menentukan solusi dan prioritasnya.",
  ],
  [
    "Berapa biaya dan lama pengerjaannya?",
    "Biaya dan waktu mengikuti fitur, kompleksitas, konten, dan integrasi yang dibutuhkan. Setelah diskusi, Anda akan menerima usulan ruang lingkup, biaya, dan tahapan sebelum pengerjaan dimulai.",
  ],
  [
    "Apakah bisa menghubungkan sistem yang sudah saya pakai?",
    "Bisa kita evaluasi. Ketersediaan API, akses data, dan aturan platform menentukan integrasi yang memungkinkan. Kami membahas kelayakannya sebelum menyepakati pengerjaan.",
  ],
  [
    "Bagaimana dukungan setelah website atau aplikasi selesai?",
    "Serah terima, dokumentasi, serta opsi pemeliharaan dan dukungan dibahas dalam proposal. Dengan begitu, Anda mengetahui apa yang termasuk dan bagaimana melanjutkan pengembangan.",
  ],
  [
    "Apakah showcase ini proyek pelanggan?",
    "Showcase saat ini adalah demo konsep yang dibuat untuk menggambarkan kemampuan dan kemungkinan solusi. Visual dan data di dalamnya merupakan ilustrasi, bukan hasil proyek pelanggan.",
  ],
] as const;
export function whatsapp(
  message = "Halo Vuyama Labs, saya ingin diskusi kebutuhan digital untuk bisnis saya.",
) {
  return `https://wa.me/6287824315008?text=${encodeURIComponent(message)}`;
}
export function track(name: string, details: Record<string, string> = {}) {
  if (typeof window !== "undefined")
    window.dispatchEvent(
      new CustomEvent("vuyama:analytics", { detail: { name, ...details } }),
    );
}
