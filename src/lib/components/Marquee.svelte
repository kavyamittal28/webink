<script>
  const items = ['React', 'SvelteKit', 'Next.js', 'Framer', 'Shopify', 'Webflow', 'Tailwind', 'Node', 'Supabase', 'Stripe', 'Figma', 'GSAP'];
</script>

<div class="marquee" aria-hidden="true">
  <div class="track">
    {#each [0, 1] as _}
      <span class="row">
        {#each items as t, i}
          <span class="item">{t}</span><span class="sep">/</span>
        {/each}
      </span>
    {/each}
  </div>
</div>

<style>
  .marquee {
    overflow: hidden;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 22px 0;
    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
  }
  .track {
    display: flex;
    gap: 64px;
    width: max-content;
    animation: marquee 34s linear infinite;
    font-family: var(--mono);
    font-size: 15px;
    color: var(--ink-2);
    white-space: nowrap;
  }
  .row {
    display: inline-flex;
    align-items: center;
    gap: 64px;
  }
  .sep { color: var(--accent); }
  @keyframes marquee {
    to { transform: translateX(-50%); }
  }
</style>
