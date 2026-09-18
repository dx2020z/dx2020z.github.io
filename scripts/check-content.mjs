import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { parse } from 'yaml';
import { workSchema } from '../src/lib/model.mjs';

const contentDir = resolve('src/content/works');
const names = (await readdir(contentDir)).filter(name => name.endsWith('.md') && !name.startsWith('_'));
const slugs = new Set();
let local = 0;
for (const name of names) {
  const text = await readFile(join(contentDir, name), 'utf8');
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) throw new Error(name + ': 缺少 front matter');
  const parsed = workSchema.safeParse(parse(frontmatter[1]));
  if (!parsed.success) throw new Error(name + ': ' + parsed.error.message);
  const w = parsed.data;
  if (slugs.has(w.slug)) throw new Error('重复 slug: ' + w.slug);
  slugs.add(w.slug);
  if (w.type === 'local') {
    const file = resolve('public/demos', w.slug, 'index.html');
    await access(file).catch(() => { throw new Error(name + ': 本地作品入口不存在 ' + file); });
    const html = await readFile(file, 'utf8');
    if (/sk-[A-Za-z0-9_-]{24,}|ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}/.test(html)) throw new Error(name + ': 发现疑似凭据，停止构建');
    local++;
  }
  if (w.cover) await access(resolve('public', '.' + w.cover)).catch(() => { throw new Error(name + ': 封面不存在 ' + w.cover); });
}
console.log('CONTENT_OK: ' + names.length + ' works, ' + local + ' local, ' + (names.length - local) + ' external; unique slugs and assets verified.');
