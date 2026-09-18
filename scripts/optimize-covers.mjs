import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
await mkdir('public/covers', { recursive: true });
for (const file of await readdir('.local/screenshots')) {
  if (!file.endsWith('.png') || file.startsWith('site-')) continue;
  const output = 'public/covers/' + file.replace('.png', '.webp');
  await sharp('.local/screenshots/' + file).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 85 }).toFile(output);
  console.log('COVER_OK: ' + output);
}
