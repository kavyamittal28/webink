<script>
  import { site } from "$lib/data.js";
  const year = new Date().getFullYear();
</script>

<div class="foot-big" aria-hidden="true">inkweb/</div>
<footer>
  <div>© {year} {site.name}. Built by hand, with care.</div>
  <nav aria-label="Footer">
    <a href="#work">Work</a>
    <a href="#services">Services</a>
    {#if site.pricing}
      <a href="#pricing">Pricing</a>
    {/if}
    <a href="#contact">Contact</a>
  </nav>
</footer>

<style>
  .foot-big {
    font-family: var(--display);
    font-size: clamp(80px, 18vw, 260px);
    font-weight: 700;
    letter-spacing: -0.06em;
    line-height: 0.85;
    color: transparent;
    -webkit-text-stroke: 1px var(--line-2);
    padding: 60px 0 0;
    text-align: center;
    user-select: none;
    pointer-events: none;
  }
  footer {
    padding: 48px var(--pad) 36px;
    border-top: 1px solid var(--line);
    display: flex;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    color: var(--ink-3);
    font-size: 13.5px;
    font-family: var(--mono);
  }
  footer nav {
    display: flex;
    gap: 24px;
  }
  footer a:hover {
    color: var(--ink);
  }
  @media (max-width: 480px) {
    footer {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
    footer nav {
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
  }
</style>
