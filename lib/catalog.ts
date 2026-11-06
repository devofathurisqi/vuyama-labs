export type OfferCategory = "Katalog" | "Website" | "Sistem & Aplikasi" | "AI & Integrasi";
export type Offer = {
  slug: string;
  number: string;
  title: string;
  category: OfferCategory;
  price: number | null;
  label: string;
  summary: string;
  forWhom: string;
  icon: "store" | "palette" | "dashboard" | "globe" | "app" | "sparkles" | "workflow" | "layers";
  featured?: boolean;
  features: string[];
  scope: { title: string; items: string[] }[];
  deliverables: string[];
  boundaries: string[];
  related: string[];
};

const storefront = [
  "Katalog produk dengan kategori, pencarian, filter, dan pengurutan",
  "Halaman atau dialog detail, galeri foto, pilihan varian, dan jumlah",
  "Favorit dan keranjang yang tersimpan di browser pelanggan",
  "Ringkasan produk, varian, jumlah, dan subtotal menuju WhatsApp",
  "Tampilan responsif untuk HP, tablet, dan desktop",
];

export const offers: Offer[] = [
  {
    slug: "katalog-essential", number: "01", title: "Katalog Essential", category: "Katalog", price: 150000,
    label: "Mulai punya katalog sendiri", icon: "store",
    summary: "Satu link untuk menampilkan produk dan merapikan pesanan WhatsApp.",
    forWhom: "Usaha baru, reseller, toko rumahan, dan brand yang membutuhkan katalog praktis.",
    features: ["Layout dikurasi sesuai identitas brand", "Pencarian, kategori, filter & urutkan", "Galeri produk & pilihan varian", "Favorit & keranjang belanja", "Checkout melalui WhatsApp", "Responsif & metadata dasar"],
    scope: [
      { title: "Pengalaman pelanggan", items: storefront },
      { title: "Identitas & publikasi", items: ["Logo, warna, kontak, dan konten memakai identitas bisnis Anda", "Optimasi gambar dan metadata dasar untuk dibagikan", "Setup publikasi website sesuai hosting yang disepakati"] },
      { title: "Pengelolaan katalog", items: ["Konten awal disiapkan dari data dan foto yang Anda berikan", "Perubahan produk setelah serah terima dibantu melalui pengembang"] },
    ],
    deliverables: ["Website katalog dengan identitas bisnis Anda", "Alur pesanan menuju nomor WhatsApp bisnis", "Petunjuk penggunaan katalog dan serah terima"],
    boundaries: ["Pengelolaan produk melalui dashboard belum termasuk", "Stok, ongkir, pembayaran, dan konfirmasi pesanan ditangani penjual", "Jumlah konten awal dan perubahan desain disepakati sebelum pengerjaan"],
    related: ["ameraah", "novola"],
  },
  {
    slug: "katalog-signature", number: "02", title: "Katalog Signature", category: "Katalog", price: 250000,
    label: "Lebih terasa seperti brand Anda", icon: "palette",
    summary: "Katalog dengan arah visual dan susunan halaman yang lebih personal.",
    forWhom: "Brand yang ingin membangun kesan lebih kuat melalui katalog dan cerita usahanya.",
    features: ["Seluruh fitur Katalog Essential", "Arah visual & komposisi lebih personal", "Halaman cerita brand / panduan belanja", "Tata letak koleksi yang disesuaikan", "Metadata halaman & preview tautan", "Navigasi sesuai perjalanan pelanggan"],
    scope: [
      { title: "Pengalaman pelanggan", items: storefront },
      { title: "Presentasi brand", items: ["Komposisi, tipografi, dan alur halaman disesuaikan dengan karakter brand", "Halaman cerita brand atau panduan belanja sesuai konten yang disepakati", "Penyusunan koleksi dan navigasi yang mengikuti kebutuhan toko", "Metadata halaman, gambar berbagi, dan struktur halaman untuk pencarian dasar"] },
      { title: "Pengelolaan katalog", items: ["Konten awal disiapkan dari materi bisnis Anda", "Update katalog berikutnya melalui pengembang; dashboard dapat dibahas sebagai pengembangan"] },
    ],
    deliverables: ["Website katalog dengan arah desain yang lebih personal", "Halaman pendukung sesuai ruang lingkup", "Alur WhatsApp, setup publikasi, dan panduan penggunaan"],
    boundaries: ["Dashboard pengelola belum termasuk", "Jumlah halaman, konten, dan putaran revisi ditetapkan dalam kesepakatan", "Transaksi akhir dan pengiriman tetap dikonfirmasi melalui penjual"],
    related: ["ameraah", "laraya"],
  },
  {
    slug: "katalog-dashboard", number: "03", title: "Katalog + Dashboard", category: "Katalog", price: 350000,
    label: "Kelola produk Anda sendiri", icon: "dashboard", featured: true,
    summary: "Website katalog dan ruang admin untuk memperbarui produk tanpa mengedit kode.",
    forWhom: "Toko dan brand yang rutin mengubah produk, foto, harga, kategori, atau stok.",
    features: ["Katalog lengkap & checkout WhatsApp", "Login dashboard pengelola", "Kelola produk, kategori, harga & stok", "Galeri & foto setiap varian", "Optimasi foto otomatis saat upload", "Draft, publikasi, duplikasi & aktivitas"],
    scope: [
      { title: "Katalog pelanggan", items: [...storefront, "Produk milik bisnis Anda sendiri; materi supplier bersifat opsional sesuai kebutuhan"] },
      { title: "Dashboard pengelola", items: ["Login untuk mengelola produk, kategori, harga, kontak, dan pengaturan toko", "Tambah, edit, duplikasi, serta atur draft dan publikasi produk", "Galeri produk, foto per varian, dan stok yang diperbarui manual", "Upload JPG, PNG, dan WebP dengan optimasi gambar otomatis", "Riwayat aktivitas dan pemeriksaan konflik ketika data diedit bersamaan"] },
      { title: "Penyimpanan & serah terima", items: ["Data katalog tersimpan online dengan akses pengelola sesuai toko", "Panduan penggunaan dashboard dan alur pembaruan konten", "Library supplier dapat dibahas bila sumber data dan hak penggunaan tersedia"] },
    ],
    deliverables: ["Website katalog publik dan dashboard pengelola", "Konfigurasi penyimpanan data, akses admin, dan publikasi", "Panduan pengelolaan produk, foto, harga, dan stok"],
    boundaries: ["Stok dicatat manual; pesanan WhatsApp tidak otomatis mengurangi stok", "Payment gateway, ongkir otomatis, dan akun pelanggan perlu ruang lingkup tambahan", "Pemakaian database, penyimpanan, dan layanan lain mengikuti paket penyedianya"],
    related: ["bunave", "novola", "laraya", "gallerygeulis"],
  },
  {
    slug: "website-bisnis", number: "04", title: "Website Bisnis", category: "Website", price: null,
    label: "Company profile & landing page", icon: "globe",
    summary: "Perkenalkan usaha, jelaskan layanan, dan arahkan pengunjung menjadi calon pelanggan.",
    forWhom: "Usaha jasa, profesional, UMKM, organisasi, dan perusahaan dari berbagai bidang.",
    features: ["Landing page / company profile", "Profil, layanan & portofolio", "Kontak & form inquiry", "Responsif & SEO dasar", "Identitas visual bisnis", "Struktur konten sesuai tujuan"],
    scope: [
      { title: "Konten & pengalaman", items: ["Pemetaan tujuan pengunjung dan struktur halaman", "Profil usaha, layanan, portofolio, FAQ, dan kontak sesuai kebutuhan", "Tampilan responsif dengan identitas brand Anda"] },
      { title: "Konversi & publikasi", items: ["Tombol WhatsApp atau formulir sesuai alur yang disepakati", "Metadata, tautan berbagi, dan struktur pencarian dasar", "Konfigurasi publikasi serta petunjuk pembaruan konten"] },
    ],
    deliverables: ["Website bisnis sesuai struktur halaman yang disepakati", "Kontak dan alur inquiry yang bisa digunakan", "Setup publikasi dan serah terima"],
    boundaries: ["Harga ditentukan oleh halaman, konten, desain, dan kebutuhan formulir", "CMS, copywriting, fotografi, serta versi bahasa tambahan dapat dibahas terpisah"],
    related: ["ameraah"],
  },
  {
    slug: "sistem-aplikasi", number: "05", title: "Sistem & Aplikasi Custom", category: "Sistem & Aplikasi", price: null,
    label: "Mengikuti cara tim Anda bekerja", icon: "app",
    summary: "Dashboard, booking, inventory, portal, dan aplikasi dengan alur kerja yang dirancang khusus.",
    forWhom: "Bisnis jasa, rental, tim operasional, dan organisasi yang membutuhkan proses lebih terstruktur.",
    features: ["Pemetaan proses & peran pengguna", "Dashboard & pengelolaan data", "Booking / inventory / CRM", "Hak akses sesuai peran", "Laporan & dokumen operasional", "Pengembangan bertahap"],
    scope: [
      { title: "Modul sesuai proses", items: ["Analisis alur saat ini dan prioritas modul", "Dashboard dan pengelolaan data yang sesuai kebutuhan", "Pemesanan, jadwal, stok, pelanggan, invoice, atau laporan sesuai proposal"] },
      { title: "Akses & operasional", items: ["Alur login dan peran pengguna sesuai kebutuhan", "Validasi aturan bisnis dan pengujian alur utama", "Rencana penyimpanan, deployment, dokumentasi, dan pengembangan lanjutan"] },
    ],
    deliverables: ["Spesifikasi modul dan tahapan yang disepakati", "Aplikasi dengan alur utama yang diuji", "Dokumentasi, serah terima, dan rencana operasional"],
    boundaries: ["Setiap modul, jumlah peran, dan integrasi ditentukan dalam proposal", "Kebutuhan aplikasi mobile native dibahas berdasarkan platform dan publikasinya"],
    related: ["aruna-rent", "bunave"],
  },
  {
    slug: "ai-automation", number: "06", title: "AI & Automation", category: "AI & Integrasi", price: null,
    label: "Kurangi pekerjaan yang berulang", icon: "sparkles",
    summary: "Asisten informasi, alur administrasi, serta rekap yang membantu pekerjaan sehari-hari.",
    forWhom: "Tim admin, layanan pelanggan, dan usaha yang memiliki pekerjaan rutin berulang.",
    features: ["Pemetaan workflow berulang", "Asisten berbasis informasi bisnis", "Alur pengalihan ke manusia", "Otomatisasi dokumen & rekap", "Pemantauan & penanganan gagal", "Uji dengan skenario bisnis"],
    scope: [
      { title: "Pemetaan & sumber informasi", items: ["Memilih pekerjaan yang layak dibantu AI atau otomatisasi", "Menyiapkan sumber informasi dan batas tugas asisten", "Menentukan kapan proses perlu ditangani manusia"] },
      { title: "Workflow & pengujian", items: ["Integrasi kanal dan tools yang mendukung akses yang diperlukan", "Alur pemicu, pemrosesan, hasil, serta penanganan kegagalan", "Uji skenario dan pembahasan biaya penggunaan layanan"] },
    ],
    deliverables: ["Peta alur dan batas kerja otomatisasi", "Workflow sesuai skenario yang disepakati", "Panduan operasional dan kebutuhan layanan pihak ketiga"],
    boundaries: ["Biaya API AI, kanal pesan, dan infrastruktur mengikuti pemakaian serta penyedia", "Kemampuan mengikuti data, akses API, dan aturan platform yang tersedia"],
    related: [],
  },
  {
    slug: "integrasi", number: "07", title: "Integrasi Sistem", category: "AI & Integrasi", price: null,
    label: "Tools terhubung, data lebih rapi", icon: "workflow",
    summary: "Hubungkan aplikasi, pembayaran, notifikasi, atau sumber data yang sudah Anda gunakan.",
    forWhom: "Bisnis yang memindahkan data secara manual di antara beberapa tools.",
    features: ["Evaluasi API & akses data", "Sinkronisasi data antarsistem", "Webhook & notifikasi", "Integrasi pembayaran sesuai akses", "Validasi & penanganan error", "Dokumentasi alur integrasi"],
    scope: [
      { title: "Evaluasi teknis", items: ["Pemeriksaan dokumentasi API, akses, dan batas penyedia", "Pemetaan data asal, tujuan, serta arah sinkronisasi", "Penentuan pemicu dan frekuensi pertukaran data"] },
      { title: "Implementasi", items: ["Koneksi API atau webhook sesuai dukungan platform", "Validasi, pencatatan hasil, dan penanganan gagal", "Pengujian alur serta dokumentasi untuk tim pengelola"] },
    ],
    deliverables: ["Alur pertukaran data yang disepakati", "Integrasi dan pengujian skenario utama", "Dokumentasi konfigurasi dan operasional"],
    boundaries: ["Kelayakan tergantung akses API dan kebijakan platform", "Langganan tools dan biaya transaksi penyedia dibahas terpisah"],
    related: [],
  },
  {
    slug: "website-interaktif", number: "08", title: "Website Interaktif & 3D", category: "Website", price: null,
    label: "Pengalaman brand yang bisa dijelajahi", icon: "layers",
    summary: "Microsite, visual produk interaktif, dan pengalaman 3D untuk presentasi brand.",
    forWhom: "Brand, kampanye, pameran, dan presentasi produk yang membutuhkan pengalaman interaktif.",
    features: ["Konsep pengalaman & storyboard", "Interaksi dan motion sesuai tujuan", "Eksplorasi produk / ruang 3D", "Kontrol desktop & mobile", "Optimasi aset & performa", "CTA menuju kebutuhan bisnis"],
    scope: [
      { title: "Konsep pengalaman", items: ["Penentuan cerita, tujuan interaksi, dan alur pengunjung", "Eksplorasi bentuk, material, kamera, dan gerak sesuai konsep", "Integrasi informasi produk atau brand ke dalam pengalaman"] },
      { title: "Pengembangan", items: ["Interaksi desktop dan mobile sesuai rancangan", "Optimasi aset dan pengujian pada cakupan perangkat yang disepakati", "Penghubung dari pengalaman ke kontak atau inquiry bisnis"] },
    ],
    deliverables: ["Konsep interaksi dan arah visual", "Website interaktif sesuai adegan yang disepakati", "Publikasi dan dokumentasi pengelolaan"],
    boundaries: ["Harga mengikuti adegan, model 3D, animasi, dan interaksi", "Kebutuhan aset 3D baru serta target perangkat ditentukan sebelum pengerjaan"],
    related: [],
  },
];

export const categories = ["Semua", "Katalog", "Website", "Sistem & Aplikasi", "AI & Integrasi"] as const;
export const catalogPlans = offers.filter(offer => offer.category === "Katalog");
export const formatRupiah = (amount: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);

export const comparison = [
  { feature: "Arah tampilan", values: ["Layout dikurasi", "Lebih personal", "Sesuai brand"] },
  { feature: "Responsif di HP & desktop", values: [true, true, true] },
  { feature: "Pencarian, filter & kategori", values: [true, true, true] },
  { feature: "Galeri & pilihan varian", values: [true, true, true] },
  { feature: "Favorit & keranjang", values: [true, true, true] },
  { feature: "Ringkasan pesanan WhatsApp", values: [true, true, true] },
  { feature: "Metadata & optimasi gambar dasar", values: [true, true, true] },
  { feature: "Cerita brand / panduan belanja", values: ["Sesuai layout", "Sesuai scope", "Sesuai scope"] },
  { feature: "Update produk setelah selesai", values: ["Melalui pengembang", "Melalui pengembang", "Kelola sendiri"] },
  { feature: "Login & dashboard pengelola", values: [false, false, true] },
  { feature: "Kelola produk, harga & kategori", values: [false, false, true] },
  { feature: "Galeri & foto per varian dari admin", values: [false, false, true] },
  { feature: "Optimasi foto otomatis saat upload", values: [false, false, true] },
  { feature: "Draft, publikasi & duplikasi", values: [false, false, true] },
  { feature: "Stok manual & riwayat aktivitas", values: [false, false, true] },
  { feature: "Payment gateway & ongkir otomatis", values: ["Pengembangan tambahan", "Pengembangan tambahan", "Pengembangan tambahan"] },
] satisfies { feature: string; values: (string | boolean)[] }[];

export const additionalNeeds = ["Domain sendiri", "Bantuan menyiapkan konten", "Input / migrasi produk", "Payment gateway", "Integrasi sistem lain", "Pemeliharaan berkala"];

export function buildBrief(offer: Offer, name: string, business: string, details: string, extras: string[]) {
  return [
    "Halo Vuyama Labs, saya ingin mendiskusikan kebutuhan digital.",
    `Nama: ${name.trim()}`,
    `Bisnis / organisasi: ${business.trim()}`,
    `Layanan: ${offer.title}`,
    `Referensi biaya: ${offer.price ? `mulai ${formatRupiah(offer.price)} sekali untuk pembuatan sesuai scope` : "penawaran sesuai ruang lingkup"}`,
    extras.length ? `Kebutuhan tambahan untuk dibahas: ${extras.join(", ")}` : "",
    `Kebutuhan saya: ${details.trim()}`,
    "Mohon bantu konfirmasi cakupan, materi yang perlu disiapkan, jadwal, biaya akhir, dan biaya layanan pihak ketiga bila ada.",
  ].filter(Boolean).join("\n\n");
}

export const pricingFaq = [
  ["Apakah layanan ini terbuka untuk umum?", "Ya. Vuyama Labs melayani UMKM, brand independen, usaha jasa, profesional, organisasi, dan perusahaan. Anda dapat memakai produk, materi, dan identitas bisnis Anda sendiri."],
  ["Apa perbedaan paket Rp150 ribu, Rp250 ribu, dan Rp350 ribu?", "Essential berfokus pada katalog dengan layout yang dikurasi. Signature memberikan arah desain dan halaman pendukung yang lebih personal. Paket Katalog + Dashboard menambahkan ruang admin untuk memperbarui produk, foto, harga, kategori, dan stok sendiri. Bandingkan rinciannya di tabel fitur."],
  ["Apakah harganya sekali bayar?", "Harga paket katalog adalah biaya pembuatan satu kali untuk ruang lingkup yang disepakati. Domain, hosting, database, API, layanan berlangganan, dan pemeliharaan dapat memiliki biaya tersendiri sesuai kebutuhan serta ketentuan penyedia. Semua biaya dikonfirmasi sebelum pengerjaan."],
  ["Berapa produk, halaman, revisi, dan lama pengerjaannya?", "Kita sepakati setelah melihat data produk, kesiapan foto dan teks, arah desain, serta fitur yang diperlukan. Rincian jumlah konten, halaman, putaran revisi, dan jadwal dituliskan dalam kesepakatan sebelum pekerjaan dimulai."],
  ["Apakah katalog bisa untuk produk di luar fashion?", "Bisa. Pola katalog dapat disesuaikan untuk makanan, kerajinan, kebutuhan rumah, produk kecantikan, dan produk lain. Varian, informasi produk, serta alur order mengikuti kebutuhan bisnis Anda. Contoh yang ditampilkan adalah implementasi yang tersedia saat ini."],
  ["Apakah checkout langsung membayar dan memotong stok?", "Paket katalog menyusun rincian pesanan dan membukanya di WhatsApp. Penjual mengonfirmasi ketersediaan, ongkir, total, dan pembayaran. Stok pada dashboard diperbarui manual. Pembayaran online dan pembaruan stok otomatis bisa dibahas sebagai pengembangan tambahan."],
  ["Bagaimana kalau saya perlu aplikasi atau AI automation?", "Pilih layanan yang paling dekat, lalu isi brief singkat. Kita petakan modul, pengguna, alur data, integrasi, dan kebutuhan operasional. Anda menerima penawaran berdasarkan ruang lingkup, karena kompleksitas setiap sistem berbeda."],
  ["Apa yang perlu saya siapkan?", "Logo, informasi bisnis, kontak, daftar layanan atau produk, harga, foto yang boleh digunakan, serta contoh arah desain bila ada. Bila materi belum siap, kebutuhan bantuan konten dapat dimasukkan ke pembahasan."],
] as const;
