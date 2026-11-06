import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { offers } from '../lib/catalog.ts';
import { work } from '../lib/work.ts';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../out');
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://vuyama-labs.vercel.app').replace(/\/$/, '');
const routes = ['/', '/pricelist/', '/karya/', ...offers.map(offer => `/pricelist/${offer.slug}/`), ...work.map(project => `/karya/${project.slug}/`)];
for (const route of routes) assert.ok(existsSync(path.join(root, route, 'index.html')), `Missing route ${route}`);
const sitemap = readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const route of routes) assert.ok(sitemap.includes(`${origin}${route}`), `Missing sitemap URL ${route}`);
let checkedPages = 0, checkedLinks = 0;
for (const entry of readdirSync(root, { recursive: true, withFileTypes: true }).filter(entry => entry.isFile() && entry.name.endsWith('.html'))) {
  const file = path.join(entry.parentPath, entry.name);
  const html = readFileSync(file, 'utf8');
  assert.doesNotMatch(html, /vuyama-labs\.equal-fox-9631\.chatgpt\.site/, file);
  if (!entry.name.startsWith('404')) assert.match(html, /<html[^>]+lang="id"/, file);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const resource = decodeURIComponent(match[1]);
    if (resource.startsWith('//')) continue;
    const destination = path.join(root, resource);
    assert.ok(existsSync(destination) || existsSync(path.join(destination, 'index.html')) || existsSync(`${destination}.html`), `Broken URL ${resource} in ${file}`);
    checkedLinks++;
  }
  checkedPages++;
}
for (const project of work) assert.ok(existsSync(path.join(root, project.image)), project.image);
const catalogHtml = readFileSync(path.join(root, 'pricelist/index.html'), 'utf8');
assert.match(catalogHtml, /application\/ld\+json/);
assert.match(catalogHtml, /"@type":"OfferCatalog"/);
assert.match(catalogHtml, /150\.000/); assert.match(catalogHtml, /250\.000/); assert.match(catalogHtml, /350\.000/);
console.log(JSON.stringify({ passed: true, checkedPages, checkedLinks, requiredNewRoutes: routes.length, portfolioImages: work.length }, null, 2));
