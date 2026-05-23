<script>
  import { services } from '$lib/data.js';
  import Reveal from './Reveal.svelte';
</script>

<section id="services" aria-labelledby="services-head">
  <div class="shell">
    <div class="sec-head">
      <div>
        <Reveal as="span" className="eyebrow">{#snippet children()}/ Services{/snippet}</Reveal>
        <Reveal as="h2" delay={1}>
          {#snippet children()}Everything you need to ship the thing.{/snippet}
        </Reveal>
        <span id="services-head" hidden>Services</span>
      </div>
      <Reveal as="p" delay={2}>
        {#snippet children()}
          One person, end-to-end. Strategy, design, code, deploy. You stop juggling four freelancers and one agency.
        {/snippet}
      </Reveal>
    </div>

    <ul class="svc-grid">
      {#each services as s, i}
        <Reveal as="li" className="svc" delay={Math.min((i % 3) + 1, 4)}>
          {#snippet children()}
            <span class="num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          {/snippet}
        </Reveal>
      {/each}
    </ul>
  </div>
</section>

<style>
  .svc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
    list-style: none;
  }
  @media (max-width: 920px) { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .svc-grid { grid-template-columns: 1fr; } }
  :global(.svc) {
    padding: 36px 32px 32px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    transition: background 0.2s;
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-height: 240px;
  }
  :global(.svc:hover) { background: var(--bg-2); }
  :global(.svc:hover .num) { color: var(--accent); }
  .num {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--ink-3);
    letter-spacing: 0.04em;
    transition: color 0.2s;
  }
  h3 { font-size: 22px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.15; }
  p { color: var(--ink-2); font-size: 14.5px; line-height: 1.55; margin-top: auto; }
  @media (max-width: 560px) {
    :global(.svc) {
      padding: 28px 22px 24px;
      min-height: auto;
    }
  }
</style>
