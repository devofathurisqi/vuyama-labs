# Vuyama Labs

Website profil studio digital untuk UMKM, brand independen, usaha jasa, profesional, organisasi, dan perusahaan. Jasa website, katalog, dashboard, aplikasi custom, AI automation, sistem bisnis, dan integrasi. Next.js 15 + React 19 + TypeScript + Tailwind 4 + Motion. Output statis, tidak membutuhkan backend untuk alur konsultasi.

Produksi: **https://vuyama-labs.vercel.app**. Repository `devofathurisqi/vuyama-labs`, branch produksi **`prod`**, deployment otomatis melalui integrasi Git Vercel. Project `dropshipper_catalog_vuyama` hanya dibaca sebagai sumber riset.

## Menjalankan

```powershell
npm.cmd ci
npm.cmd run dev
```

Buka http://localhost:3000. Produksi: `npm.cmd run build`; hasil export berada di `out/`. Pemeriksaan: `npm test`, `npm run typecheck`, `npm run lint`, dan `npm run verify:export`. Preview produksi: `npm run preview` pada http://127.0.0.1:4198 (opsional `PORT`). Node.js 24.10+ digunakan untuk skrip pengujian yang membaca TypeScript secara native. Lockfile telah disinkronkan untuk clean install.

## Konten dan identitas

- `lib/content.ts`: layanan, demo, FAQ, nomor WhatsApp, dan event pengukuran.
- `lib/catalog.ts`: sumber tunggal delapan layanan, harga mulai, fitur, perbandingan, FAQ, serta pesan brief.
- `lib/work.ts`: enam karya, status website aktif/demo, screenshot asli, dan tautan publik.
- `lib/config.ts`: origin website untuk metadata dan sitemap; sesuaikan ketika domain berubah.
- `components/home.tsx`: beranda dan form konsultasi.
- `components/pricelist.tsx`: pencarian/filter layanan, tabel perbandingan, pemilihan layanan, form dan preview brief.
- `components/studio.tsx`: kartu paket, portofolio, dan cakupan audience.
- `app/studio.css`: tampilan tambahan pricelist dan karya.
- `app/brand.css`, `lib/brand.ts`, dan `docs/BRAND.md`: identitas terracotta, lettering VUYAMA LABS dari foto pemilik, dan tipografi geometris yang lebih ringan.
- `docs/PORTFOLIO-SOURCES.md`: sumber harga, fitur, situs aktif, serta screenshot.
- `components/playground.tsx`: demo automation, asisten skenario, katalog interaktif, dan dashboard.
- `components/enhancements.tsx`: hero tiga adegan dengan tilt, carousel showcase, katalog dengan pilihan warna/perangkat/keranjang demo, serta simulasi waktu kerja.
- `app/globals.css`: desain, breakpoint, animasi, dan reduced motion.
- `app/enhancements.css`: komposisi hero, showcase editorial, simulasi, dan tampilan katalog responsif.
- `public/logo.svg`, `public/brand-seal.svg`, `public/favicon.svg`: wordmark dan logo lingkaran terracotta sesuai foto pemilik.
- `public/images/*.webp`: empat visual demo konsep yang dihasilkan dengan imagegen.

Form mengolah informasi di browser dan menyusun tautan WhatsApp. Pesan tidak disimpan atau otomatis dikirim. Demo chat berbasis skenario lokal, tidak menggunakan API AI. Showcase bukan proyek pelanggan.

Simulasi waktu menghitung jam pekerjaan rutin × persentase yang dipilih pengunjung, dengan proyeksi empat minggu. Angka merupakan ilustrasi input, bukan klaim penghematan. Pilihan ini bisa dibawa ke diskusi melalui tautan WhatsApp. Keranjang katalog hanya mengubah state lokal, tanpa pembayaran atau transaksi.

## Marketing dan hosting

29 halaman konten: beranda, delapan detail pricelist, indeks pricelist, enam detail karya, indeks karya, enam detail layanan, indeks showcase, empat detail demo, dan privasi. Metadata, canonical produksi, sitemap, robots, favicon, preview sosial, dan structured data katalog layanan disiapkan. `.openai/hosting.json` merupakan konfigurasi hosting terdahulu; target produksi saat ini adalah Vercel melalui branch `prod`.

Event `vuyama:analytics` belum diteruskan ke penyedia eksternal. Hubungkan ke akun analytics yang dipilih sebelum mengklaim pengukuran berjalan. Tidak ada data form dalam event.

Font DM Sans dan Manrope dibundel secara lokal melalui Fontsource; tidak membutuhkan koneksi Google Fonts saat halaman dimuat. Wordmark VUYAMA LABS ditelusuri menjadi artwork SVG dari foto logo yang diberikan pemilik. Palet terracotta `#B0483B`, tinta cokelat gelap, latar krem, dan judul geometris yang ringan mengikuti arah logo tersebut. Instagram `@vuyama.labs` ditautkan di footer.

## Pricelist, karya, dan cakupan

`/pricelist/` berisi delapan layanan, pencarian, filter kategori, tiga paket katalog, perbandingan 16 baris, brief dengan kebutuhan tambahan, serta FAQ biaya dan scope. `/pricelist/[slug]/` menjelaskan target pengguna, fitur, hasil serah terima, pengembangan tambahan, dan contoh implementasi relevan.

Harga katalog mulai Rp150.000 / Rp250.000 / Rp350.000 adalah biaya pembuatan satu kali untuk scope yang disepakati. Essential memakai layout yang dikurasi, Signature menekankan desain dan halaman pendukung lebih personal, Dashboard menambahkan pengelolaan produk mandiri. Jumlah konten, halaman, revisi, dan jadwal dikonfirmasi di awal. Layanan custom memakai proposal. Domain, hosting, database, API, dan pemeliharaan mengikuti kebutuhan serta ketentuan penyedia. Stok dashboard diperbarui manual. Payment gateway, ongkir, dan stok otomatis perlu cakupan tambahan.

Brief menyusun pilihan layanan, biaya referensi, dan kebutuhan tambahan di browser, lalu membuka WhatsApp `6287824315008` setelah pengunjung memeriksa pesan. Tidak menyimpan form ke database atau mengirim otomatis. Kebutuhan tambahan berlabel perlu penawaran dan tidak dijumlahkan memakai harga rekaan.

`/karya/` menampilkan lima website aktif dengan screenshot langsung serta Aruna Rent, demo sistem rental dengan data fiktif yang diuji lokal. `/showcase/` dan Playground tetap berlabel konsep/simulasi. Tidak ada klaim jumlah klien atau hasil penjualan.

`npm test` memeriksa harga bersumber, relasi layanan-karya, status demo/aktif, biaya custom, kebutuhan tambahan, dan encoding WhatsApp. `verify:export` memeriksa rute, gambar, tautan, origin, sitemap, serta structured data hasil build. Browser diperiksa pada 1440, 820, 390, dan 320 px, termasuk filter, pencarian, form wajib, preview brief, deep link, navigasi HP, dan scroll tabel. Pemeriksaan viewport bukan pengujian perangkat fisik.
