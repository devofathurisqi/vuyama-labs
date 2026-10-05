import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <h1>404</h1>
      <h2>Halaman belum ditemukan.</h2>
      <p>Mari kembali menjelajahi solusi untuk bisnis Anda.</p>
      <Link href="/" className="button button-blue">
        Kembali ke beranda ↗
      </Link>
    </main>
  );
}
