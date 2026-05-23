import { site } from "$lib/data.js";

export const prerender = true;

export async function GET() {
  // 1. Create the base array with everything EXCEPT pricing
  const urls = [
    { loc: site.url, priority: "1.0", changefreq: "weekly" },
    { loc: `${site.url}/#work`, priority: "0.9", changefreq: "monthly" },
    { loc: `${site.url}/#services`, priority: "0.9", changefreq: "monthly" },
    { loc: `${site.url}/#contact`, priority: "0.8", changefreq: "monthly" },
  ];

  // 2. Only push the pricing URL if site.pricing is true
  if (site.pricing) {
    urls.push({
      loc: `${site.url}/#pricing`,
      priority: "0.8",
      changefreq: "monthly",
    });
  }

  const today = new Date().toISOString().split("T")[0];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
      )
      .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600",
    },
  });
}
