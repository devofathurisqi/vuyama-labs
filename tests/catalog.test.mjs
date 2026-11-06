import test from 'node:test';
import assert from 'node:assert/strict';
import { offers, catalogPlans, categories, buildBrief } from '../lib/catalog.ts';
import { work } from '../lib/work.ts';
import { whatsapp } from '../lib/content.ts';

test('only the three evidenced catalog tiers carry a published starting price', () => {
  assert.deepEqual(catalogPlans.map(plan => [plan.slug, plan.price]), [['katalog-essential', 150000], ['katalog-signature', 250000], ['katalog-dashboard', 350000]]);
  for (const offer of offers.filter(offer => offer.category !== 'Katalog')) assert.equal(offer.price, null);
});
test('every service resolves to one category and unique, shareable detail route', () => {
  assert.equal(new Set(offers.map(offer => offer.slug)).size, offers.length);
  for (const offer of offers) { assert.ok(categories.includes(offer.category)); assert.match(offer.slug, /^[a-z0-9-]+$/); }
});
test('work references and services never point to missing records', () => {
  for (const offer of offers) for (const slug of offer.related) assert.ok(work.some(project => project.slug === slug), slug);
  for (const project of work) assert.ok(offers.some(offer => offer.slug === project.offer), project.title);
});
test('active works have HTTPS destinations and the local rental demo is not passed off as a live site', () => {
  for (const project of work.filter(project => project.status === 'Website aktif')) assert.equal(new URL(project.url).protocol, 'https:');
  const rental = work.find(project => project.slug === 'aruna-rent');
  assert.equal(rental.status, 'Demo fungsional');
  assert.equal(rental.url, null);
});
test('a priced brief carries the selected tier and scope qualifier', () => {
  const brief = buildBrief(offers.find(offer => offer.slug === 'katalog-dashboard'), ' Rani ', ' Kopi Harian ', 'Produk minuman dan varian ukuran.', []);
  assert.match(brief, /Nama: Rani/); assert.match(brief, /Bisnis \/ organisasi: Kopi Harian/);
  assert.match(brief, /Katalog \+ Dashboard/); assert.match(brief, /350\.000/); assert.match(brief, /sesuai scope/);
});
test('unpriced custom work requests a proposal instead of a zero-price quote', () => {
  const brief = buildBrief(offers.find(offer => offer.slug === 'sistem-aplikasi'), 'Dina', 'Studio Jasa', 'Butuh booking dan kalender.', []);
  assert.match(brief, /penawaran sesuai ruang lingkup/); assert.doesNotMatch(brief, /Rp\s*0|350\.000|150\.000/);
});
test('optional services are clearly additional requests and do not silently change the tier price', () => {
  const brief = buildBrief(catalogPlans[0], 'Dina', 'Studio', 'Katalog produk usaha sendiri.', ['Domain sendiri', 'Payment gateway']);
  assert.match(brief, /Kebutuhan tambahan untuk dibahas: Domain sendiri, Payment gateway/);
  assert.match(brief, /150\.000/); assert.match(brief, /biaya akhir/);
  assert.equal(catalogPlans[0].price, 150000);
});
test('WhatsApp preserves Unicode, punctuation, and multiline customer briefs at the studio destination', () => {
  const brief = buildBrief(catalogPlans[1], 'Ayu & Bima', 'Kedai É / Rasa', 'Kopi & pastry? Ukuran 250 ml + 500 ml.\nButuh katalog.', ['Domain sendiri']);
  const url = new URL(whatsapp(brief)); assert.equal(url.hostname, 'wa.me'); assert.equal(url.pathname, '/6287824315008'); assert.equal(url.searchParams.get('text'), brief);
});
