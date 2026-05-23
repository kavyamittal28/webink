<script>
  import Reveal from "./Reveal.svelte";
</script>

<section class="hero" id="top">
  <div class="shell">
    <Reveal as="p" className="hero-status">
      {#snippet children()}
        <span class="dot" aria-hidden="true"></span>
        <span>Accepting Brands · 3 project slots left</span>
      {/snippet}
    </Reveal>

    <h1 class="hero-h">
      <Reveal as="span">
        {#snippet children()}We build tools that{/snippet}
      </Reveal>
      <Reveal as="span" delay={2}>
        {#snippet children()}
          grow <span class="accent">brands.</span>{/snippet}
      </Reveal>
    </h1>

    <Reveal as="p" delay={3} className="hero-sub">
      {#snippet children()}
        We are <b>inkweb.officials</b>. We engineer custom websites, custom
        applications, and automated internal tools designed to eliminate daily
        operational friction while aggressively marketing your brand to maximize
        conversion.
      {/snippet}
    </Reveal>

    <Reveal delay={4} className="hero-cta">
      {#snippet children()}
        <a href="#work" class="btn btn-primary"
          >Explore our solutions <span class="arr">→</span></a
        >
        <a href="#contact" class="btn btn-ghost">Grow your business</a>
      {/snippet}
    </Reveal>

    <Reveal delay={4} className="hero-meta">
      {#snippet children()}
        <div class="hero-meta-item"><b>100%</b><span>custom builds</span></div>
        <div class="hero-meta-item">
          <b>25+</b><span>workflows automated</span>
        </div>
        <div class="hero-meta-item">
          <b>3.5x</b><span>avg marketing ROI</span>
        </div>
        <div class="hero-meta-item">
          <b>95+</b><span>performance score</span>
        </div>
      {/snippet}
    </Reveal>
  </div>
</section>

<style>
  .hero {
    padding-top: clamp(140px, 18vw, 220px);
    padding-bottom: clamp(60px, 8vw, 100px);
    border-top: 0;
  }
  :global(.hero-status) {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px 13px 7px 11px;
    border: 1px solid var(--line-2);
    border-radius: 999px;
    font-size: 13px;
    color: var(--ink-2);
    margin-bottom: 32px;
  }
  :global(.hero-status .dot) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3ecf6a;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(62, 207, 106, 0.5);
    }
    50% {
      box-shadow: 0 0 0 7px rgba(62, 207, 106, 0);
    }
  }
  .hero-h {
    display: block;
  }
  .accent {
    color: var(--accent);
  }
  :global(.hero-sub) {
    max-width: 580px;
    margin-top: 36px;
    font-size: clamp(16px, 1.4vw, 19px);
    color: var(--ink-2);
    line-height: 1.5;
  }
  :global(.hero-sub b) {
    color: var(--ink-1);
    font-weight: 600;
  }
  :global(.hero-cta) {
    display: flex;
    gap: 12px;
    margin-top: 36px;
    flex-wrap: wrap;
  }
  :global(.hero-meta) {
    display: flex;
    gap: 36px;
    margin-top: 80px;
    flex-wrap: wrap;
  }
  :global(.hero-meta-item) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 120px;
  }
  :global(.hero-meta-item b) {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.03em;
    font-feature-settings: "tnum";
  }
  :global(.hero-meta-item span) {
    font-size: 12.5px;
    color: var(--ink-3);
    font-family: var(--mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  @media (max-width: 600px) {
    :global(.hero-meta) {
      gap: 24px 20px;
      margin-top: 48px;
    }
    :global(.hero-meta-item) {
      min-width: 100px;
    }
    :global(.hero-meta-item b) {
      font-size: 22px;
    }
    :global(.hero-cta) {
      flex-direction: column;
    }
    :global(.hero-cta .btn) {
      text-align: center;
      justify-content: center;
    }
  }
</style>
