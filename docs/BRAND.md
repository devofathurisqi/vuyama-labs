# Identitas Vuyama Labs

Acuan utama adalah foto logo yang diberikan langsung oleh pemilik pada 6 November 2026 (`1-Photo-1.jpg`). Acuan ini menggantikan identitas V biru pada website lama.

- Warna utama: **terracotta `#B0483B`**, diambil dari median area merah logo. Token `--blue` dipertahankan namanya untuk kompatibilitas komponen, dengan nilai terracotta.
- Warna tinta: **cokelat gelap `#2A0E06`**, diambil dari tulisan pada foto. Latar krem `#FBF7F2`, garis dan permukaan sekunder bernuansa hangat.
- Logo adalah lettering **VUYAMA / LABS**, dengan huruf M khas dan garis kiri-kanan LABS. Bentuknya ditelusuri menjadi path SVG dari area tulisan foto; status bar, tombol edit, dan UI Instagram tidak masuk aset publik.
- `lib/brand.ts` menyimpan path wordmark dan warna acuan. Header/footer memakai wordmark tersebut. `BrandMark`, `public/brand-seal.svg`, dan favicon memakai segel lingkaran terracotta sesuai foto.
- `public/logo.svg` adalah wordmark transparan. `public/og-brand.svg` dan PNG-nya menyajikan logo untuk preview tautan sosial.
- Tipografi antarmuka memakai **Manrope Variable** dengan bobot judul lebih ringan dan bentuk geometris, serta **DM Sans Variable** untuk isi/kontrol. Keduanya disajikan lokal. Logo merupakan artwork SVG, bukan penggantian dengan font generik.
- Palet hangat diterapkan ke halaman profil, layanan, pricelist, perbandingan, brief, playground, footer, dan browser theme color. Foto karya dan warna produk pada demo dipertahankan sesuai identitas aslinya.
- Instagram: https://www.instagram.com/vuyama.labs/ dengan handle `@vuyama.labs`, sesuai referensi akun yang sudah tercatat pada project Vuyama Labs lainnya. Tautan ditampilkan di footer.

Pemeriksaan langsung Instagram sebelumnya tidak selesai karena akses browser dihentikan. Foto logo yang kemudian diberikan pemilik menjadi sumber visual yang digunakan; tidak memerlukan penelusuran Instagram lebih lanjut.

Sesuai arahan pemilik, penyelesaian revisi dibatasi sampai pemeriksaan lokal, commit, dan push branch `prod`, tanpa pemeriksaan deployment setelah push.
