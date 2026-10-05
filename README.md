# Vuyama Labs

Website marketing berbahasa Indonesia untuk jasa website, aplikasi custom, AI automation, sistem bisnis, dan integrasi. Next.js 15 + React 19 + TypeScript + Tailwind 4 + Motion. Output statis, tidak membutuhkan backend untuk alur konsultasi.

## Menjalankan

```powershell
npm.cmd install
npm.cmd run dev
```

Buka http://localhost:3000. Produksi: `npm.cmd run build`; hasil export berada di `out/`. Pemeriksaan: `npm.cmd run typecheck` dan `npm.cmd run lint`.

## Konten dan identitas

- `lib/content.ts`: layanan, demo, FAQ, nomor WhatsApp, dan event pengukuran.
- `lib/config.ts`: origin website untuk metadata dan sitemap; sesuaikan ketika domain berubah.
- `components/home.tsx`: beranda dan form konsultasi.
- `components/playground.tsx`: demo automation, asisten skenario, katalog interaktif, dan dashboard.
- `components/enhancements.tsx`: hero tiga adegan dengan tilt, carousel showcase, katalog dengan pilihan warna/perangkat/keranjang demo, serta simulasi waktu kerja.
- `app/globals.css`: desain, breakpoint, animasi, dan reduced motion.
- `app/enhancements.css`: komposisi hero, showcase editorial, simulasi, dan tampilan katalog responsif.
- `public/favicon.svg`: logo simbol V.
- `public/images/*.webp`: empat visual demo konsep yang dihasilkan dengan imagegen.

Form mengolah informasi di browser dan menyusun tautan WhatsApp. Pesan tidak disimpan atau otomatis dikirim. Demo chat berbasis skenario lokal, tidak menggunakan API AI. Showcase bukan proyek pelanggan.

Simulasi waktu menghitung jam pekerjaan rutin × persentase yang dipilih pengunjung, dengan proyeksi empat minggu. Angka merupakan ilustrasi input, bukan klaim penghematan. Pilihan ini bisa dibawa ke diskusi melalui tautan WhatsApp. Keranjang katalog hanya mengubah state lokal, tanpa pembayaran atau transaksi.

## Marketing dan hosting

13 halaman konten: beranda, enam detail layanan, indeks showcase, empat detail demo, privasi. Metadata halaman, sitemap, robots, favicon, dan preview sosial disiapkan. Preview awal di Sites bersifat privat. Publikasi umum/custom domain serta akun analytics memerlukan konfigurasi lanjutan.

Event `vuyama:analytics` belum diteruskan ke penyedia eksternal. Hubungkan ke akun analytics yang dipilih sebelum mengklaim pengukuran berjalan. Tidak ada data form dalam event.

Font DM Sans dan Manrope dibundel secara lokal melalui Fontsource; tidak membutuhkan koneksi Google Fonts saat halaman dimuat. Font sistem menjadi fallback jika tidak tersedia. Brand visual merupakan identitas baru untuk Labs, bukan reproduksi pedoman resmi Vuyama.
