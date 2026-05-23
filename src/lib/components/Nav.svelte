<script>
  import { site } from "$lib/data.js";
  let scrolled = $state(false);

  $effect(() => {
    const on = () => (scrolled = window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  });

  // smooth anchor scrolling (offset for fixed nav)
  function scrollTo(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 70,
      behavior: "smooth",
    });
  }
</script>

<svelte:window onclick={scrollTo} />

<nav class={scrolled ? "nav scrolled" : "nav"} aria-label="Primary">
  <a href="#top" class="brand" aria-label="inkweb — home">
    <span class="brand-mark" aria-hidden="true">i</span>
    <span>inkweb<span class="muted">/studio</span></span>
  </a>
  <ul class="nav-links">
    <li><a href="#work">Work</a></li>
    <li><a href="#services">Services</a></li>
    {#if site.pricing}
      <li><a href="#pricing">Pricing</a></li>
    {/if}
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a href="#contact" class="nav-cta"
    ><span class="dot" aria-hidden="true"></span>Let's talk</a
  >
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px var(--pad);
    transition:
      background 0.25s,
      backdrop-filter 0.25s,
      border-color 0.25s;
    border-bottom: 1px solid transparent;
  }
  .nav.scrolled {
    background: color-mix(in oklab, var(--bg) 78%, transparent);
    backdrop-filter: blur(18px) saturate(140%);
    -webkit-backdrop-filter: blur(18px) saturate(140%);
    border-bottom-color: var(--line);
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    letter-spacing: -0.02em;
    font-size: 18px;
  }
  .brand-mark {
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    background: var(--accent);
    color: var(--accent-ink);
    border-radius: 7px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.04em;
  }
  .muted {
    color: var(--ink-3);
    font-weight: 400;
  }
  .nav-links {
    display: flex;
    gap: 28px;
    align-items: center;
    list-style: none;
  }
  .nav-links a {
    font-size: 14px;
    color: var(--ink-2);
    transition: color 0.15s;
  }
  .nav-links a:hover {
    color: var(--ink);
  }
  .nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px 9px 16px;
    background: var(--ink);
    color: var(--bg);
    border-radius: 999px;
    font-size: 13.5px;
    font-weight: 500;
    transition: transform 0.15s;
  }
  .nav-cta:hover {
    transform: translateY(-1px);
  }
  .nav-cta .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent);
  }
  @media (max-width: 760px) {
    .nav-links {
      display: none;
    }
  }
</style>
