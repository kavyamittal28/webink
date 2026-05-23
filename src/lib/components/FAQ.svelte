<script>
  import { faqs } from '$lib/data.js';
  import Reveal from './Reveal.svelte';

  let openIdx = $state(0);
</script>

<section id="faq" aria-labelledby="faq-head">
  <div class="shell">
    <div class="sec-head center">
      <div>
        <Reveal as="span" className="eyebrow">{#snippet children()}/ FAQ{/snippet}</Reveal>
        <Reveal as="h2" delay={1}>{#snippet children()}Questions you'd ask on the call.{/snippet}</Reveal>
        <span id="faq-head" hidden>FAQ</span>
      </div>
    </div>

    <div class="list" role="list">
      {#each faqs as f, i}
        <div class={`item ${openIdx === i ? 'open' : ''}`} role="listitem">
          <button class="q" aria-expanded={openIdx === i} aria-controls={`faq-a-${i}`} onclick={() => (openIdx = openIdx === i ? -1 : i)}>
            <span>{f.q}</span>
            <span class="plus" aria-hidden="true"></span>
          </button>
          <div class="a" id={`faq-a-${i}`} role="region">{f.a}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .center { justify-content: center; text-align: center; }
  .list {
    max-width: 880px;
    margin: 0 auto;
    border-top: 1px solid var(--line);
  }
  .item {
    border-bottom: 1px solid var(--line);
  }
  .q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 26px 4px;
    width: 100%;
    text-align: left;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: -0.015em;
    transition: color 0.15s;
  }
  .q:hover { color: var(--accent); }
  .plus {
    width: 22px; height: 22px;
    position: relative;
    flex-shrink: 0;
    color: var(--ink-2);
    transition: color 0.15s;
  }
  .plus::before, .plus::after {
    content: '';
    position: absolute;
    background: currentColor;
    left: 50%; top: 50%;
  }
  .plus::before { width: 14px; height: 1.5px; transform: translate(-50%, -50%); }
  .plus::after { width: 1.5px; height: 14px; transform: translate(-50%, -50%); transition: transform 0.25s; }
  .item.open .plus::after { transform: translate(-50%, -50%) rotate(90deg); }
  .item.open .plus { color: var(--accent); }
  .a {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    color: var(--ink-2);
    font-size: 15.5px;
    line-height: 1.6;
    padding: 0 60px 0 4px;
  }
  .item.open .a {
    max-height: 240px;
    padding-bottom: 26px;
  }
  @media (max-width: 600px) {
    .q {
      font-size: 16px;
      gap: 16px;
      padding: 22px 2px;
    }
    .a {
      padding: 0 0 0 4px;
      font-size: 14.5px;
    }
    .item.open .a {
      max-height: 320px;
    }
  }
</style>
