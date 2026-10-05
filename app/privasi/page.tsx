import type { Metadata } from "next";
import { PageIntro } from "@/components/site";
export const metadata: Metadata = {
  title: "Informasi Privasi",
  description:
    "Informasi penggunaan form konsultasi, WhatsApp, dan demo di website Vuyama Labs.",
};
export default function PrivacyPage() {
  return (
    <main id="main">
      <PageIntro
        label="INFORMASI PENGGUNAAN"
        title="Privasi & demo."
        description="Penjelasan sederhana tentang cara website ini menggunakan informasi yang Anda masukkan."
      />
      <article className="container legal-content">
        <h2>Form konsultasi</h2>
        <p>
          Nama, nama bisnis, dan kebutuhan yang Anda isi digunakan di perangkat
          Anda untuk menyusun pesan konsultasi. Website ini tidak menyimpan
          formulir tersebut ke database. Pesan tidak otomatis dikirim; Anda
          dapat memeriksanya dan memilih mengirim di WhatsApp.
        </p>
        <h2>Tautan WhatsApp</h2>
        <p>
          Jika Anda melanjutkan diskusi, Anda akan membuka WhatsApp, layanan
          milik pihak lain. Informasi yang Anda kirim di sana digunakan untuk
          membahas kebutuhan Anda. Hindari memasukkan kata sandi atau informasi
          sensitif dalam pesan awal.
        </p>
        <h2>Demo interaktif</h2>
        <p>
          Dashboard, percakapan asisten, dan automation merupakan simulasi di
          browser dengan data ilustrasi. Chat demo memakai jawaban skenario dan
          tidak terhubung ke layanan AI. Data demo akan direset ketika halaman
          dimuat ulang.
        </p>
        <h2>Pengukuran website</h2>
        <p>
          Versi ini menyiapkan penanda interaksi untuk klik konsultasi dan
          filter showcase. Belum ada layanan analytics eksternal yang
          dihubungkan, sehingga penanda tersebut tidak dikirim ke penyedia
          analytics.
        </p>
        <h2>Pertanyaan</h2>
        <p>
          Anda dapat mendiskusikan pertanyaan tentang penggunaan informasi
          melalui WhatsApp Vuyama Labs di +62 878 2431 5008.
        </p>
      </article>
    </main>
  );
}
