<script>
  import { site, tiers } from "$lib/data.js";
  import Reveal from "./Reveal.svelte";
</script>

{#if site.pricing}
  <section id="pricing" aria-labelledby="pricing-head">
    <div class="shell">
      <div class="sec-head">
        <div>
          <Reveal as="span" className="eyebrow"
            >{#snippet children()}/ Pricing{/snippet}</Reveal
          >
          <Reveal as="h2" delay={1}
            >{#snippet children()}Flat pricing. <span class="serif"
                >No mystery quotes.</span
              >{/snippet}</Reveal
          >
          <span id="pricing-head" hidden>Pricing</span>
        </div>
        <Reveal as="p" delay={2}
          >{#snippet children()}Prices in INR. International rates available on
            request. 50% to start, 50% on ship.{/snippet}</Reveal
        >
      </div>

      <ul class="grid">
        {#each tiers as tier, i}
          <Reveal
            as="li"
            className={`price ${tier.featured ? "featured" : ""}`}
            delay={i + 1}
          >
            {#snippet children()}
              {#if tier.tag}<span class="badge">{tier.tag}</span>{/if}
              <div class="head">
                <h3>{tier.t}</h3>
                <p>{tier.sub}</p>
              </div>
              <div class="num">
                <b>{tier.price === "Custom" ? tier.price : `₹${tier.price}`}</b>
                <span>{tier.note}</span>
              </div>
              <ul class="feats">
                {#each tier.feats as f}<li>{f}</li>{/each}
              </ul>
              <a
                href="#contact"
                class={`btn ${tier.featured ? "btn-primary" : "btn-ghost"}`}
                >{tier.cta} <span class="arr">→</span></a
              >
            {/snippet}
          </Reveal>
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    list-style: none;
  }
  @media (max-width: 880px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 480px) {
    :global(.price) {
      padding: 28px 20px 24px;
    }
    .num b {
      font-size: 36px;
    }
  }
  :global(.price) {
    padding: 34px 30px 32px;
    background: var(--bg-2);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    gap: 22px;
    position: relative;
  }
  :global(.price.featured) {
    background: var(--bg-3);
    border-color: var(--accent);
  }
  .badge {
    position: absolute;
    top: 18px;
    right: 18px;
    font-family: var(--mono);
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    background: var(--accent);
    color: var(--accent-ink);
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 600;
  }
  .head h3 {
    font-size: 22px;
    font-weight: 600;
  }
  .head p {
    font-size: 13.5px;
    color: var(--ink-2);
    margin-top: 6px;
  }
  .num {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .num b {
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.03em;
    font-family: var(--display);
  }
  .num span {
    font-size: 13px;
    color: var(--ink-3);
    font-family: var(--mono);
  }
  .feats {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 11px;
    flex: 1;
  }
  .feats li {
    font-size: 14.5px;
    color: var(--ink-2);
    display: flex;
    gap: 10px;
    align-items: flex-start;
    line-height: 1.45;
  }
  .feats li::before {
    content: "";
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    margin-top: 4px;
    background: var(--accent);
    mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3 8.5l3 3 7-7' fill='none' stroke='black' stroke-width='2'/></svg>")
      center/contain no-repeat;
    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3 8.5l3 3 7-7' fill='none' stroke='black' stroke-width='2'/></svg>")
      center/contain no-repeat;
  }
  :global(.price .btn) {
    width: 100%;
    justify-content: center;
  }
  .serif {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    color: var(--ink-2);
  }
</style>
