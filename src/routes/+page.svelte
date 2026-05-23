<script>
  import { site, services, projects, testimonials, faqs } from '$lib/data.js';
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Marquee from '$lib/components/Marquee.svelte';
  import Services from '$lib/components/Services.svelte';
  import Work from '$lib/components/Work.svelte';
  import Process from '$lib/components/Process.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Socials from '$lib/components/Socials.svelte';

  const title = `${site.name} — ${site.tagline}`;
  const canonical = site.url;
  const ogImage = `${site.url}/og-image.png`;

  // JSON-LD: ProfessionalService + WebSite + FAQPage. Search engines love this.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#business`,
        name: site.name,
        description: site.description,
        url: site.url,
        image: ogImage,
        priceRange: '₹₹',
        email: site.email,
        telephone: site.phone,
        sameAs: [site.social.instagram],
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        makesOffer: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.t, description: s.d }
        })),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: testimonials.length,
          bestRating: '5'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${site.url}/#business` },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      },
      {
        '@type': 'ItemList',
        name: 'Selected work',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'CreativeWork',
            name: p.t,
            description: p.d,
            url: p.url || site.url
          }
        }))
      }
    ]
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={site.description} />
  <meta name="keywords" content={site.keywords.join(', ')} />
  <meta name="author" content={site.name} />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={site.description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{site.name} — freelance web studio" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={site.description} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Structured data -->
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<Nav />

<main id="main">
  <Hero />
  <Marquee />
  <Services />
  <Work />
  <Process />
  <Testimonials />
  <Pricing />
  <FAQ />
  <Contact />
</main>

<Footer />
<Socials />
