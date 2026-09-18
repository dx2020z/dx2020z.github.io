import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(
  'User-agent: *\nAllow: /\n' + (site && !['localhost','127.0.0.1'].includes(site.hostname) ? 'Sitemap: ' + new URL(import.meta.env.BASE_URL + 'sitemap-index.xml', site).href + '\n' : ''),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
