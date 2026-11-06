import type { Metadata } from "next";
import { PricelistCatalog } from "@/components/pricelist";
import { siteUrl } from "@/lib/config";
import { catalogPlans } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Pricelist & Katalog Layanan",
  description: "Bandingkan paket katalog mulai Rp150.000, Rp250.000, dan Rp350.000 dengan dashboard. Lihat fitur website bisnis, aplikasi custom, AI automation, dan integrasi untuk bisnis Anda.",
  alternates: { canonical: "/pricelist/" },
};

export default function PricelistPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "OfferCatalog", name: "Katalog Layanan Vuyama Labs", url: `${siteUrl}/pricelist/`,
    itemListElement: catalogPlans.map(offer => ({ "@type": "Offer", name: offer.title, priceCurrency: "IDR", price: offer.price, description: `Harga mulai untuk biaya pembuatan satu kali sesuai ruang lingkup. ${offer.summary}`, url: `${siteUrl}/pricelist/${offer.slug}/`, itemOffered: { "@type": "Service", name: offer.title, provider: { "@type": "Organization", name: "Vuyama Labs" } } })),
  };
  return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><PricelistCatalog /></main>;
}
