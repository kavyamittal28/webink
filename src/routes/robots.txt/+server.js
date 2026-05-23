import { site } from '$lib/data.js';

export const prerender = true;

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
