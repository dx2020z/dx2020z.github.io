import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';

const base = (process.env.BASE_PATH || '/').replace(/\/$/, '') + '/';
async function pages(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['demos', '_astro'].includes(entry.name)) continue;
    const file = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await pages(file));
    else if (entry.name.endsWith('.html')) result.push(file);
  }
  return result;
}
const files = await pages('dist');
let checked = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  assert.match(html, /<html[^>]*lang="zh-CN"/, file + ': missing language');
  assert.match(html, /<title>[^<]+<\/title>/, file + ': missing title');
  assert.ok(html.includes('dx2020z'), file + ': missing contact');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    assert.ok(url.startsWith(base), file + ': missing base in ' + url);
    const path = url.slice(base.length).split(/[?#]/)[0];
    const target = resolve('dist', decodeURIComponent(path) + (path.endsWith('/') || !path ? 'index.html' : ''));
    assert.ok((await stat(target).catch(() => null))?.isFile(), file + ': broken asset or link ' + url);
    checked++;
  }
}
assert.ok(files.length >= 26);
console.log('STATIC_OK: ' + files.length + ' pages; ' + checked + ' internal links/assets checked; base=' + base);
