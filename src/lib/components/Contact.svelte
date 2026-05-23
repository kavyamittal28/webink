<script>
  import { site } from "$lib/data.js";
  import Reveal from "./Reveal.svelte";

  let form = $state({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
  });
  let errs = $state({});
  let sent = $state(false);

  // const budgets = ["< ₹50k", "₹50k–1L", "₹1L–3L", "₹3L+"];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Need a name";
    if (!form.email.trim()) e.email = "Need an email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "That email looks off";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Tell me a bit more (10+ chars)";
    errs = e;
    return Object.keys(e).length === 0;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    // No backend by default. Open a prefilled mailto so the message is captured immediately.
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\nBudget: ${form.budget || "—"}\n\n${form.message}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`New enquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    sent = true;
  }
</script>

<section id="contact" aria-labelledby="contact-head">
  <div class="shell">
    <div class="wrap">
      <div>
        <Reveal as="span" className="eyebrow"
          >{#snippet children()}/ Contact{/snippet}</Reveal
        >
        <Reveal as="h2" className="contact-h" delay={1}
          >{#snippet children()}Got an idea?<br />Let's
            <span class="serif accent">build it.</span>{/snippet}</Reveal
        >
        <span id="contact-head" hidden>Contact</span>
        <Reveal as="p" delay={2} className="lede"
          >{#snippet children()}Tell me what you're working on. I reply within a
            business day — usually a lot faster. No pitch decks needed, a
            paragraph is enough.{/snippet}</Reveal
        >
        <Reveal delay={3} className="info">
          {#snippet children()}
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="ico"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  d="M19.05 4.91A10 10 0 0012 2a10 10 0 00-8.6 15.04L2 22l5.07-1.33A10 10 0 0022 12a9.94 9.94 0 00-2.95-7.09zM12 20.13a8.13 8.13 0 01-4.15-1.13l-.3-.18-3 .79.8-2.93-.2-.31A8.13 8.13 0 1120.13 12 8.13 8.13 0 0112 20.13zm4.47-6.09c-.24-.12-1.45-.71-1.67-.79s-.39-.12-.55.12-.63.79-.78.96-.29.18-.53.06a6.66 6.66 0 01-1.95-1.2 7.34 7.34 0 01-1.36-1.69c-.14-.24 0-.37.11-.49l.36-.42a1.62 1.62 0 00.24-.4.44.44 0 000-.42c-.06-.12-.55-1.33-.75-1.81s-.4-.41-.55-.42h-.47a.91.91 0 00-.65.3 2.74 2.74 0 00-.86 2 4.76 4.76 0 001 2.54 10.9 10.9 0 004.18 3.69 14.13 14.13 0 001.4.52 3.36 3.36 0 001.54.1 2.52 2.52 0 001.65-1.16 2 2 0 00.14-1.16c-.05-.1-.21-.16-.45-.28z"
                /></svg
              >
              {site.phoneDisplay} · WhatsApp
            </a>
            <a href={`tel:${site.phone}`}>
              <svg
                class="ico"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                aria-hidden="true"
                ><path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                /></svg
              >
              {site.phoneDisplay} · Call
            </a>
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="ico"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                aria-hidden="true"
                ><rect x="2" y="2" width="20" height="20" rx="5" /><circle
                  cx="12"
                  cy="12"
                  r="5"
                /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg
              >
              @{site.instagram}
            </a>
          {/snippet}
        </Reveal>
      </div>

      {#if !sent}
        <form class="form" onsubmit={submit} novalidate>
          <div class={`field ${errs.name ? "err" : ""}`}>
            <label for="cf-name">Your name</label>
            <input
              id="cf-name"
              type="text"
              autocomplete="name"
              placeholder="Aarav Mehta"
              bind:value={form.name}
            />
            <div class="msg">{errs.name || ""}</div>
          </div>
          <div class={`field ${errs.email ? "err" : ""}`}>
            <label for="cf-email">Email</label>
            <input
              id="cf-email"
              type="email"
              autocomplete="email"
              placeholder="aarav@yourcompany.com"
              bind:value={form.email}
            />
            <div class="msg">{errs.email || ""}</div>
          </div>
          <div class="field">
            <label for="cf-co">Company (optional)</label>
            <input
              id="cf-co"
              type="text"
              autocomplete="organization"
              placeholder="Paperback Books"
              bind:value={form.company}
            />
            <div class="msg"></div>
          </div>
          <!-- <div class="field">
            <label>Budget</label>
            <div class="budgets" role="radiogroup" aria-label="Budget">
              {#each budgets as b}
                <button
                  type="button"
                  class={`bdg ${form.budget === b ? "on" : ""}`}
                  role="radio"
                  aria-checked={form.budget === b}
                  onclick={() => (form.budget = b)}>{b}</button
                >
              {/each}
            </div>
          </div> -->
          <div class={`field ${errs.message ? "err" : ""}`}>
            <label for="cf-msg">What are you building?</label>
            <textarea
              id="cf-msg"
              rows="4"
              placeholder="A 6-page site for our new D2C brand, launching in August…"
              bind:value={form.message}
            ></textarea>
            <div class="msg">{errs.message || ""}</div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary"
              >Send the message <span class="arr">→</span></button
            >
          </div>
        </form>
      {:else}
        <div class="sent">
          <div class="check" aria-hidden="true">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
            >
          </div>
          <h3>Message landed.</h3>
          <p>
            I'll reply within a business day. If it's urgent — WhatsApp the
            number on the left.
          </p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .wrap {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: start;
  }
  @media (max-width: 900px) {
    .wrap {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }
  :global(.contact-h) {
    font-size: clamp(44px, 6vw, 84px);
    letter-spacing: -0.035em;
    line-height: 0.98;
    margin-top: 22px;
  }
  .accent {
    color: var(--accent);
  }
  .serif {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
  }
  :global(.lede) {
    margin-top: 28px;
    font-size: 16px;
    color: var(--ink-2);
    max-width: 460px;
    line-height: 1.55;
  }
  :global(.info) {
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  :global(.info a) {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 15.5px;
    color: var(--ink-2);
    transition: color 0.15s;
  }
  :global(.info a:hover) {
    color: var(--ink);
  }
  :global(.info .ico) {
    width: 18px;
    height: 18px;
    color: var(--accent);
    flex-shrink: 0;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 34px 32px;
    background: var(--bg-2);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .field label {
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink-3);
  }
  .field input,
  .field textarea {
    font: inherit;
    font-size: 15px;
    color: var(--ink);
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--line-2);
    padding: 10px 0;
    outline: none;
    transition: border-color 0.2s;
    width: 100%;
    font-family: var(--display);
  }
  .field textarea {
    resize: vertical;
    min-height: 90px;
    line-height: 1.5;
  }
  .field input:focus,
  .field textarea:focus {
    border-bottom-color: var(--accent);
  }
  .field input::placeholder,
  .field textarea::placeholder {
    color: var(--ink-3);
  }
  .field.err input,
  .field.err textarea {
    border-bottom-color: #ff6b5e;
  }
  .msg {
    font-size: 12px;
    font-family: var(--mono);
    color: #ff6b5e;
    margin-top: 2px;
    min-height: 14px;
  }
  .form .btn {
    justify-content: center;
    width: 100%;
  }
  .sent {
    padding: 34px;
    background: var(--bg-2);
    border: 1px solid var(--accent);
    border-radius: var(--radius-lg);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
  }
  .check {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: var(--accent);
    color: var(--accent-ink);
    display: grid;
    place-items: center;
  }
  .sent h3 {
    font-size: 24px;
  }
  .sent p {
    color: var(--ink-2);
    font-size: 15px;
  }
  @media (max-width: 480px) {
    .form {
      padding: 24px 18px;
    }
    .sent {
      padding: 24px;
    }
    :global(.lede) {
      max-width: 100%;
    }
    :global(.info) {
      margin-top: 32px;
    }
  }
</style>
