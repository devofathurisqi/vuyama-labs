export const work = [
  {
    slug: "bunave", title: "Bunavé", category: "Katalog + Dashboard", status: "Website aktif", image: "/images/work/bunave.jpg", url: "https://bunave.vercel.app", color: "#f1e8dc",
    description: "Katalog bernuansa hangat dengan dashboard untuk mengelola koleksi sendiri.",
    challenge: "Produk, warna, foto, dan harga perlu mudah dijelajahi pelanggan sekaligus bisa diperbarui pengelola toko.",
    solution: "Storefront sesuai identitas Bunavé, pencarian dan detail varian, keranjang WhatsApp, serta dashboard pengelola dengan penyimpanan data online.",
    features: ["Pencarian, kategori, dan detail varian", "Keranjang dan ringkasan pesanan WhatsApp", "Kelola produk, kategori, harga, dan stok", "Galeri dan foto setiap varian", "Optimasi foto otomatis saat upload", "Draft, publikasi, dan riwayat aktivitas"],
    offer: "katalog-dashboard", note: "Tangkapan layar website publik. Dashboard dan upload telah diimplementasikan; data pengelola tetap berada di ruang admin.",
  },
  {
    slug: "ameraah", title: "Ameraah.co", category: "Katalog Brand", status: "Website aktif", image: "/images/work/ameraah.jpg", url: "https://ameraah-co.vercel.app", color: "#f2e5e8",
    description: "Identitas maroon dan komposisi editorial untuk koleksi yang lebih mudah ditemukan.",
    challenge: "Menghadirkan karakter brand yang konsisten sambil membantu pelanggan memilih koleksi dan varian yang tepat.",
    solution: "Katalog responsif dengan logo asli, halaman produk, galeri, pilihan varian, favorit, dan keranjang yang menyiapkan pesanan WhatsApp.",
    features: ["Identitas visual mengikuti brand", "Katalog, pencarian, dan filter", "Galeri produk dan pilihan varian", "Favorit dan keranjang tersimpan", "Ringkasan pesanan WhatsApp", "Halaman produk dengan metadata"],
    offer: "katalog-signature", note: "Website katalog aktif. Tautan menampilkan kondisi situs yang dikelola pemilik saat ini; fitur tambahan dapat berbeda mengikuti kesepakatan tiap project.",
  },
  {
    slug: "aruna-rent", title: "Aruna Rent", category: "Sistem Custom", status: "Demo fungsional", image: "/images/work/aruna-rent.jpg", url: null, color: "#e4eee8",
    description: "Sistem operasional rental: booking, armada, kalender, invoice, dan pengembalian.",
    challenge: "Operasional rental memerlukan jadwal yang tidak bentrok, pembagian peran, serta pencatatan pembayaran dan deposit yang jelas.",
    solution: "Demo aplikasi dengan autentikasi dan database, validasi konflik booking, kalender armada, invoice, pencatatan pembayaran manual, dan alur serah terima sampai pengembalian.",
    features: ["Booking dan pemeriksaan bentrok jadwal", "Kalender, armada, dan maintenance", "Peran owner, admin, dan operasional", "Invoice serta pembayaran manual", "Pencatatan deposit dan pengembalian", "Validasi aturan bisnis di server"],
    offer: "sistem-aplikasi", note: "Demo fungsional dengan brand dan data fiktif, telah diuji secara lokal. Demonstrasi dapat dibahas melalui konsultasi; bukan sistem pelanggan yang dipublikasikan.",
  },
  {
    slug: "novola", title: "Novola.fashion", category: "Katalog + Dashboard", status: "Website aktif", image: "/images/work/novola.jpg", url: "https://vernola-fashion.vercel.app", color: "#fce5e7",
    description: "Katalog beridentitas pink dengan ruang admin untuk produk milik brand sendiri.",
    challenge: "Pemilik membutuhkan katalog yang dapat mengikuti perubahan koleksi dan tetap terasa konsisten dengan identitas brand.",
    solution: "Website katalog dan dashboard dengan produk mandiri, kategori dinamis, galeri, harga, stok, publikasi, serta checkout WhatsApp yang membawa rincian pilihan pelanggan.",
    features: ["Tampilan pink mengikuti identitas brand", "Produk milik brand sendiri", "Tambah dan edit produk melalui dashboard", "Foto per varian dan optimasi upload", "Draft dan publikasi produk", "Keranjang dengan rincian harga dan catatan"],
    offer: "katalog-dashboard", note: "Brand publik adalah Novola.fashion. Alamat teknis vernola-fashion dipertahankan pada deployment yang aktif.",
  },
  {
    slug: "laraya", title: "LARAYA", category: "Katalog + Dashboard", status: "Website aktif", image: "/images/work/laraya.jpg", url: "https://laraya-six.vercel.app", color: "#e9e7ed",
    description: "Katalog responsif dan pengelolaan produk dalam satu identitas LARAYA.",
    challenge: "Pelanggan perlu menemukan produk dengan cepat, sementara pemilik perlu mengelola informasi koleksi dari satu tempat.",
    solution: "Katalog pelanggan dipadukan dengan dashboard produk, kategori, foto, harga, stok manual, dan pengaturan kontak toko.",
    features: ["Katalog dengan pencarian dan kategori", "Detail, varian, dan galeri", "Favorit dan keranjang", "Pemesanan melalui WhatsApp", "Dashboard pengelola toko", "Optimasi foto saat diunggah"],
    offer: "katalog-dashboard", note: "Tangkapan layar website publik aktif. Alur pengelola memiliki akses terpisah dari pelanggan.",
  },
  {
    slug: "gallerygeulis", title: "GalleryGeulis", category: "Katalog + Dashboard", status: "Website aktif", image: "/images/work/gallerygeulis.jpg", url: "https://gallerygeulis.vercel.app", color: "#f1e9f4",
    description: "Produk brand dan koleksi pilihan tersusun dalam katalog dengan pengelolaan mandiri.",
    challenge: "Memadukan beberapa jenis produk dengan foto dan informasi yang dapat diperbarui pengelola tanpa mengubah kode.",
    solution: "Storefront dengan kategori dan detail produk, pilihan varian, keranjang WhatsApp, serta dashboard untuk foto, harga, stok, dan status publikasi.",
    features: ["Produk dan kategori dinamis", "Pilihan varian dan foto produk", "Keranjang dengan catatan pelanggan", "Dashboard produk dan stok manual", "Optimasi foto otomatis", "Pengaturan kontak dan publikasi"],
    offer: "katalog-dashboard", note: "Tangkapan layar website publik aktif. Materi, koleksi, dan identitas mengikuti kebutuhan masing-masing brand.",
  },
] as const;

export const audiences = [
  { title: "Brand & toko", description: "Fashion, makanan, kecantikan, kerajinan, dan produk pilihan Anda.", example: "Katalog → pilihan produk → WhatsApp" },
  { title: "Jasa & profesional", description: "Jelaskan keahlian, layanan, dan cara calon pelanggan menghubungi Anda.", example: "Profil → layanan → inquiry" },
  { title: "Tim & organisasi", description: "Rapikan jadwal, data, pekerjaan admin, dan alur operasional.", example: "Dashboard → workflow → laporan" },
] as const;
