<script>
  import { testimonials } from '$lib/data.js';
  import Reveal from './Reveal.svelte';
</script>

<section id="testimonials" aria-labelledby="testimonials-head">
  <div class="shell">
    <div class="sec-head">
      <div>
        <Reveal as="span" className="eyebrow">{#snippet children()}/ Words from clients{/snippet}</Reveal>
        <Reveal as="h2" delay={1}>{#snippet children()}People who paid me, <span class="serif">unprompted</span>.{/snippet}</Reveal>
        <span id="testimonials-head" hidden>Testimonials</span>
      </div>
      <Reveal as="p" delay={2}>{#snippet children()}Real reviews from real founders. Names linked to LinkedIn on request.{/snippet}</Reveal>
    </div>
  </div>

  <div class="scroll-wrap">
    <ul class="track">
      {#each [0, 1] as copy}
        <li class="set" aria-hidden={copy === 1 ? "true" : undefined}>
          {#each testimonials as t}
            <div class="tst">
              <figure>
                <div class="stars" aria-label="5 out of 5 stars">
                  {#each Array(5) as _}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-4-6 4 1.5-8L2 9.5 9 9z"/></svg>
                  {/each}
                </div>
                <blockquote class="quote"><span class="q">"</span>{t.q}</blockquote>
                <figcaption class="by">
                  <div class="av" aria-hidden="true">{t.a}</div>
                  <div><b>{t.n}</b><span>{t.r}</span></div>
                </figcaption>
              </figure>
            </div>
          {/each}
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .scroll-wrap {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 4%, #000 96%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 4%, #000 96%, transparent);
  }
  .track {
    display: flex;
    gap: 20px;
    list-style: none;
    width: max-content;
    animation: scroll 35s linear infinite;
  }
  .track:hover {
    animation-play-state: paused;
  }
  .set {
    display: flex;
    gap: 20px;
  }
  @keyframes scroll {
    to {
      transform: translateX(calc(-50% - 10px));
    }
  }
  .tst {
    padding: 32px 28px;
    background: var(--bg-2);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    width: clamp(300px, 30vw, 400px);
    flex-shrink: 0;
  }
  .tst figure {
    display: flex;
    flex-direction: column;
    gap: 22px;
    height: 100%;
  }
  .stars { display: flex; gap: 3px; color: var(--accent); }
  .quote {
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: var(--ink);
    flex: 1;
  }
  .q {
    font-family: var(--serif);
    font-style: italic;
    font-size: 32px;
    line-height: 0;
    vertical-align: -0.2em;
    color: var(--accent);
    margin-right: 6px;
  }
  .by { display: flex; align-items: center; gap: 12px; }
  .av {
    width: 38px; height: 38px;
    border-radius: 50%;
    flex-shrink: 0;
    background: linear-gradient(135deg, var(--bg-3), var(--ink-3));
    display: grid; place-items: center;
    font-weight: 600; font-size: 14px;
    color: var(--ink);
  }
  .by b { display: block; font-size: 14px; font-weight: 600; font-style: normal; }
  .by span { display: block; font-size: 12.5px; color: var(--ink-3); font-family: var(--mono); }
  .serif {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    color: var(--ink-2);
  }
  @media (max-width: 480px) {
    .tst {
      width: 85vw;
      padding: 24px 20px;
    }
    .track, .set {
      gap: 14px;
    }
    @keyframes scroll {
      to {
        transform: translateX(calc(-50% - 7px));
      }
    }
  }
</style>
