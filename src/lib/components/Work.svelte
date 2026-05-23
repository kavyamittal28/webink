<script>
  import { projects } from "$lib/data.js";
  import Reveal from "./Reveal.svelte";
  import Thumb from "./Thumb.svelte";

  let trackEl = $state(null);
  let paused = $state(false);
  let isDragging = false;
  let dragStartX = 0;
  let dragOffset = 0;

  function onPointerDown(e) {
    if (e.target.closest('a')) return;
    isDragging = true;
    paused = true;
    dragStartX = e.clientX;
    dragOffset = 0;
    trackEl.style.animationPlayState = 'paused';
    trackEl.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    dragOffset = e.clientX - dragStartX;
    trackEl.style.marginLeft = `${dragOffset}px`;
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    trackEl.style.marginLeft = '';
    trackEl.style.animationPlayState = '';
    paused = false;
  }
</script>

<section id="work" aria-labelledby="work-head">
  <div class="shell">
    <div class="sec-head">
      <div>
        <Reveal as="span" className="eyebrow"
          >{#snippet children()}/ Selected work{/snippet}</Reveal
        >
        <Reveal as="h2" delay={1}>
          {#snippet children()}Stuff I've shipped <span class="serif"
              >recently</span
            >.{/snippet}
        </Reveal>
        <span id="work-head" hidden>Selected work</span>
      </div>
      <Reveal as="p" delay={2}>
        {#snippet children()}Our top picks from different domains. Click
          any to talk through how it was built.{/snippet}
      </Reveal>
    </div>
  </div>

  <div class="scroll-wrap" class:paused>
    <ul
      class="track"
      bind:this={trackEl}
      onpointerdown={onPointerDown}
      onpointermove={onPointerMove}
      onpointerup={onPointerUp}
      onpointercancel={onPointerUp}
    >
      {#each [0, 1] as copy}
        <li class="set" aria-hidden={copy === 1 ? "true" : undefined}>
          {#each projects as project, i}
            <div class="card">
              <a
                href={project.url || "#contact"}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                aria-label={`${project.title} — ${project.tags}`}
              >
                <div class="thumb">
                  <Thumb id={project.id} altText={project.altText} />
                  <span class="tag">{project.tags}</span>
                  {#if project.url}<span class="live">Live ↗</span>{/if}
                </div>
                <div class="meta">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span class="yr">{project.year}</span>
                </div>
              </a>
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
    cursor: grab;
  }
  .scroll-wrap:active {
    cursor: grabbing;
  }
  .track {
    display: flex;
    gap: 28px;
    list-style: none;
    width: max-content;
    animation: scroll 40s linear infinite;
    touch-action: pan-y;
  }
  .track:hover,
  .paused .track {
    animation-play-state: paused;
  }
  .set {
    display: flex;
    gap: 28px;
  }
  @keyframes scroll {
    to {
      transform: translateX(calc(-50% - 14px));
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: clamp(320px, 38vw, 560px);
    flex-shrink: 0;
  }
  .card a {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--bg-2);
    border: 1px solid var(--line);
    transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .card:hover .thumb {
    transform: translateY(-4px);
  }
  .card:hover .thumb :global(.art) {
    transform: scale(1.04);
  }
  .tag,
  .live {
    position: absolute;
    top: 14px;
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 6px 10px;
    border-radius: 999px;
  }
  .tag {
    left: 14px;
    background: rgba(10, 10, 10, 0.7);
    color: #fff;
    backdrop-filter: blur(8px);
  }
  .live {
    right: 14px;
    background: var(--accent);
    color: var(--accent-ink);
    font-weight: 600;
  }
  .meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 24px;
    padding: 0 4px;
  }
  h3 {
    font-size: 24px;
  }
  p {
    color: var(--ink-2);
    font-size: 14.5px;
    margin-top: 4px;
  }
  .yr {
    font-family: var(--mono);
    font-size: 12.5px;
    color: var(--ink-3);
    letter-spacing: 0.05em;
    flex-shrink: 0;
    padding-top: 6px;
  }
  .serif {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    color: var(--ink-2);
  }
  @media (max-width: 480px) {
    .card {
      width: 85vw;
    }
    .track, .set {
      gap: 16px;
    }
    @keyframes scroll {
      to {
        transform: translateX(calc(-50% - 8px));
      }
    }
    .tag, .live {
      top: 10px;
      font-size: 10px;
      padding: 5px 8px;
    }
    .tag { left: 10px; }
    .live { right: 10px; }
    h3 { font-size: 20px; }
    .meta { gap: 16px; }
  }
</style>
