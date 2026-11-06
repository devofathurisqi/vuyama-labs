import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../out');
const port = Number(process.env.PORT || 4198);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2', '.woff': 'font/woff', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  let file = path.resolve(root, `.${pathname}`);
  if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
  const found = existsSync(file) && statSync(file).isFile();
  if (!found) file = path.join(root, '404.html');
  res.writeHead(found ? 200 : 404, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  if (req.method === 'HEAD') res.end(); else res.end(readFileSync(file));
}).listen(port, '127.0.0.1', () => console.log(`Vuyama Labs production preview: http://127.0.0.1:${port}`));
