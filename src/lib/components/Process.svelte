<script>
  import { procSteps } from '$lib/data.js';
  import Reveal from './Reveal.svelte';
</script>

<section id="process" aria-labelledby="process-head">
  <div class="shell">
    <div class="sec-head">
      <div>
        <Reveal as="span" className="eyebrow">{#snippet children()}/ How it works{/snippet}</Reveal>
        <Reveal as="h2" delay={1}>{#snippet children()}Four steps. <span class="serif">No drama.</span>{/snippet}</Reveal>
        <span id="process-head" hidden>Process</span>
      </div>
      <Reveal as="p" delay={2}>{#snippet children()}Most projects ship in 2–4 weeks. You'll always know what's happening, why, and when.{/snippet}</Reveal>
    </div>

    <ol class="grid">
      {#each procSteps as s, i}
        <Reveal as="li" className="step" delay={(i % 4) + 1}>
          {#snippet children()}
            <span class="num">0{i + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          {/snippet}
        </Reveal>
      {/each}
    </ol>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-top: 1px solid var(--line);
    list-style: none;
  }
  @media (max-width: 820px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
  :global(.step) {
    padding: 36px 28px 32px;
    border-right: 1px solid var(--line);
    min-height: 220px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  :global(.step:last-child) { border-right: 0; }
  @media (max-width: 820px) {
    :global(.step) { border-bottom: 1px solid var(--line); }
    :global(.step:nth-child(even)) { border-right: 0; }
  }
  .num {
    font-family: var(--serif);
    font-style: italic;
    font-size: 48px;
    color: var(--accent);
    line-height: 1;
  }
  h3 { font-size: 20px; font-weight: 600; }
  p { font-size: 14px; color: var(--ink-2); line-height: 1.55; margin-top: auto; }
  @media (max-width: 480px) {
    :global(.step) {
      padding: 28px 20px 24px;
      min-height: auto;
    }
    .num { font-size: 36px; }
  }
  .serif {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    color: var(--ink-2);
  }
</style>
