<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .page {
    padding: 106px 24px 64px;
    max-width: 860px;
    margin: 0 auto;
    color: #241d28;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 24px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    font-weight: 700;
    color: #6f1f8f;
  }

  .hero {
    margin-bottom: 40px;
    padding: 36px;
    border-radius: 30px;
    background: linear-gradient(135deg, rgba(111, 31, 143, 0.08), rgba(235, 108, 133, 0.14));
    border: 1px solid rgba(111, 31, 143, 0.15);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 700;
    color: #6f1f8f;
    margin-bottom: 14px;
  }

  h1 {
    margin: 0 0 18px;
    font-size: clamp(38px, 7vw, 68px);
    line-height: 0.95;
    text-transform: uppercase;
    color: #2a1833;
  }

  .standfirst {
    font-size: 19px;
    line-height: 1.75;
    color: #493f4f;
    max-width: 60ch;
  }

  .meta {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .pill {
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(111, 31, 143, 0.12);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    font-weight: 700;
    color: #6f1f8f;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  section {
    background: rgba(255, 255, 255, 0.75);
    border-radius: 24px;
    padding: 28px;
    border: 1px solid rgba(111, 31, 143, 0.08);
    box-shadow: 0 12px 32px rgba(42, 24, 51, 0.04);
  }

  h2 {
    margin: 0 0 14px;
    font-size: 24px;
    color: #2a1833;
  }

  p {
    margin: 0;
    line-height: 1.8;
    color: #4b4250;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    color: #4b4250;
    line-height: 1.8;
  }

  li + li {
    margin-top: 10px;
  }

  .quote {
    border-left: 4px solid #eb6c85;
    padding-left: 18px;
    font-size: 18px;
    color: #332a38;
  }

  .next-step {
    background: linear-gradient(155deg, #2a1833 0%, #6f1f8f 100%);
    color: #fff;
  }

  .next-step h2,
  .next-step p,
  .next-step li {
    color: #fff;
  }

  @media (max-width: 720px) {
    .page {
      padding-top: 88px;
    }

    .hero,
    section {
      padding: 24px;
    }
  }
</style>

<div class="page">
  <a use:link href="/dodici" class="back-link">← Back to Dodici Blog</a>

  <div class="hero">
    <div class="eyebrow">Case Study · Dodici</div>
    <h1>Inside Dodici</h1>
    <div class="standfirst">
      A case study on shaping an AI assistant into a practical business partner:
      one that can track context, execute work, and help move products forward
      without becoming noise.
    </div>
    <div class="meta">
      <div class="pill">12 Triangles</div>
      <div class="pill">AI Operations</div>
      <div class="pill">March 2026</div>
    </div>
  </div>

  <article>
    <section>
      <h2>The problem</h2>
      <p>
        Most AI assistants are reactive. They wait for prompts, answer in a
        vacuum, and forget the operating context that actually matters to a
        business. For a small company juggling product work, experiments, client
        delivery, and internal systems, that model breaks down quickly.
      </p>
    </section>

    <section>
      <h2>What Dodici is meant to be</h2>
      <p>
        Dodici is being shaped as a business-partner style operator for 12
        Triangles. The goal is not novelty. The goal is leverage: clearer
        continuity, better execution, and fewer drops between idea, decision,
        and implementation.
      </p>
    </section>

    <section>
      <h2>Design principles</h2>
      <ul>
        <li>
          <strong>Persistent context over stateless chat.</strong> Important
          decisions, goals, and operating constraints need durable memory.
        </li>
        <li>
          <strong>Execution over conversation.</strong> Useful assistants should
          produce artifacts, edits, summaries, drafts, and next steps.
        </li>
        <li>
          <strong>Structured boundaries.</strong> Internal access should not
          turn into careless sharing or overreach.
        </li>
        <li>
          <strong>Taste matters.</strong> Output should feel deliberate,
          opinionated, and aligned with the business—not generic AI filler.
        </li>
      </ul>
    </section>

    <section>
      <h2>Why it matters</h2>
      <p class="quote">
        The real unlock is not “AI that can answer questions.” It’s AI that can
        carry operational context forward and make itself useful inside a living
        workflow.
      </p>
    </section>

    <section>
      <h2>Current value</h2>
      <ul>
        <li>Capturing continuity across projects and discussions</li>
        <li>Reducing overhead when switching between business contexts</li>
        <li>Turning rough ideas into structured plans faster</li>
        <li>Helping close the gap between strategy and execution</li>
      </ul>
    </section>

    <section class="next-step">
      <h2>Where this goes next</h2>
      <p>
        This page is the first post in a dedicated Dodici blog section. From
        here, the site can expand with deeper writeups on workflows, product
        experiments, automation systems, lessons learned, and the mechanics of
        making AI useful in a small business environment.
      </p>
    </section>
  </article>
</div>
