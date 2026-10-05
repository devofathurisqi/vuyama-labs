import { readdirSync,readFileSync,existsSync,statSync } from 'node:fs';
import { join,relative,resolve } from 'node:path';
const root=resolve('out');
function pages(dir){return readdirSync(dir).flatMap(n=>{const p=join(dir,n);return statSync(p).isDirectory()?pages(p):p.endsWith('.html')?[p]:[]})}
let count=0;const errors=[];
for(const file of pages(root)){
 const html=readFileSync(file,'utf8');
 if(!/<h1\b/.test(html))errors.push(`${relative(root,file)}: missing h1`);
 if(!/<title>[^<]+<\/title>/.test(html))errors.push(`${relative(root,file)}: missing title`);
 for(const match of html.matchAll(/(?:src|href)="(\/[^"\s]*)"/g)){
  const url=match[1].split(/[?#]/)[0];if(!url||url.startsWith('//'))continue;
  const path=join(root,decodeURIComponent(url));
  if(!existsSync(path)&&!existsSync(join(path,'index.html')))errors.push(`${relative(root,file)}: missing ${url}`);
 }
 count++;
}
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1)}
console.log(`Verified ${count} HTML outputs: titles, headings, local routes and referenced assets exist.`);
