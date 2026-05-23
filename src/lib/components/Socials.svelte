<script>
  import { site } from '$lib/data.js';
</script>

<nav class="socials" aria-label="Social links">
  <a href={site.social.instagram} aria-label="Instagram — @inkweb.official" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  </a>
  <a href={site.social.whatsapp} aria-label="WhatsApp — +91 79733 90266" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.05 4.91A10 10 0 0012 2a10 10 0 00-8.6 15.04L2 22l5.07-1.33A10 10 0 0022 12a9.94 9.94 0 00-2.95-7.09zM12 20.13a8.13 8.13 0 01-4.15-1.13l-.3-.18-3 .79.8-2.93-.2-.31A8.13 8.13 0 1120.13 12 8.13 8.13 0 0112 20.13zm4.47-6.09c-.24-.12-1.45-.71-1.67-.79s-.39-.12-.55.12-.63.79-.78.96-.29.18-.53.06a6.66 6.66 0 01-1.95-1.2 7.34 7.34 0 01-1.36-1.69c-.14-.24 0-.37.11-.49l.36-.42a1.62 1.62 0 00.24-.4.44.44 0 000-.42c-.06-.12-.55-1.33-.75-1.81s-.4-.41-.55-.42h-.47a.91.91 0 00-.65.3 2.74 2.74 0 00-.86 2 4.76 4.76 0 001 2.54 10.9 10.9 0 004.18 3.69 14.13 14.13 0 001.4.52 3.36 3.36 0 001.54.1 2.52 2.52 0 001.65-1.16 2 2 0 00.14-1.16c-.05-.1-.21-.16-.45-.28z"/></svg>
  </a>
  <a href={site.social.email} aria-label="Email — inkweb.officials@gmail.com">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
  </a>
</nav>

<style>
  .socials {
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 40;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    border: 1px solid var(--line-2);
    border-radius: 999px;
    background: color-mix(in oklab, var(--bg) 70%, transparent);
    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }
  .socials a {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: background 0.15s, color 0.15s, transform 0.15s;
    color: var(--ink-2);
  }
  .socials a:hover {
    background: var(--accent);
    color: var(--accent-ink);
    transform: scale(1.06);
  }
  .socials svg { width: 16px; height: 16px; }
  @media (max-width: 560px) {
    .socials { right: 14px; bottom: 14px; padding: 6px; gap: 6px; }
    .socials a { width: 34px; height: 34px; }
  }
</style>
