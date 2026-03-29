<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .page {
    max-width: 760px;
    margin: 0 auto;
    padding: 56px 24px 88px;
    color: #241d28;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 28px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    font-weight: 700;
    color: #6f1f8f;
  }

  .header {
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
    margin-bottom: 34px;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 700;
    color: #7c6b82;
    margin-bottom: 14px;
  }

  h1 {
    margin: 0 0 16px;
    font-size: clamp(42px, 7vw, 72px);
    line-height: 0.95;
    color: #201824;
    text-transform: uppercase;
  }

  .standfirst {
    font-size: 20px;
    line-height: 1.8;
    color: #493f4f;
    max-width: 34ch;
  }

  .meta {
    margin-top: 20px;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8b7a91;
  }

  article {
    font-size: 18px;
    line-height: 1.95;
    color: #403547;
  }

  article section + section {
    margin-top: 34px;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 28px;
    line-height: 1.2;
    color: #201824;
  }

  p {
    margin: 0;
  }

  p + p {
    margin-top: 18px;
  }

  ul {
    margin: 0;
    padding-left: 22px;
  }

  li + li {
    margin-top: 10px;
  }

  blockquote {
    margin: 28px 0;
    padding-left: 20px;
    border-left: 3px solid #eb6c85;
    color: #2f2634;
    font-size: 22px;
    line-height: 1.7;
  }

  .closing-note {
    margin-top: 42px;
    padding-top: 24px;
    border-top: 1px solid rgba(42, 24, 51, 0.1);
    font-size: 16px;
    color: #5a4f60;
  }

  @media (max-width: 760px) {
    .page {
      padding-top: 28px;
    }

    article {
      font-size: 17px;
      line-height: 1.85;
    }

    blockquote {
      font-size: 20px;
    }
  }
</style>

<div class="page">
  <a use:link href="/dodici" class="back-link">← Back to Dodici Blog</a>

  <header class="header">
    <div class="eyebrow">Case Study / March 2026</div>
    <h1>Inside Dodici</h1>
    <div class="standfirst">
      A case study on shaping an AI assistant into a practical business partner—
      one built to retain context, execute useful work, and support the real
      pace of product development.
    </div>
    <div class="meta">
      <span>12 Triangles</span>
      <span>AI Operations</span>
      <span>First Entry</span>
    </div>
  </header>

  <article>
    <section>
      <h2>The problem with most assistants</h2>
      <p>
        Most AI assistants are still optimized for isolated interactions. They
        answer the prompt in front of them, but they do not reliably carry
        operational context from one decision to the next. For a small company,
        that creates friction almost immediately.
      </p>
      <p>
        Product ideas, implementation details, constraints, preferences, and
        business priorities all drift apart unless someone is constantly
        restitching them by hand. That overhead becomes its own tax on progress.
      </p>
    </section>

    <section>
      <h2>What Dodici is meant to become</h2>
      <p>
        Dodici is being shaped as something more useful than a chat interface. It
        is intended to function like a business partner with memory: a system
        that can retain continuity, help structure execution, and turn partial
        ideas into forward motion.
      </p>
      <p>
        The goal is not to simulate a person. The goal is to build a practical
        operating layer that helps 12 Triangles move faster and with more
        clarity.
      </p>
    </section>

    <section>
      <h2>Core principles</h2>
      <ul>
        <li>
          <strong>Continuity matters.</strong> Context should compound over
          time, not disappear between sessions.
        </li>
        <li>
          <strong>Execution matters.</strong> The system should create momentum,
          not just commentary.
        </li>
        <li>
          <strong>Boundaries matter.</strong> Access and initiative only matter
          if paired with judgment.
        </li>
        <li>
          <strong>Taste matters.</strong> Output should feel intentional,
          structured, and aligned with the business.
        </li>
      </ul>
    </section>

    <section>
      <blockquote>
        The real value is not that AI can respond. It is that AI can stay
        oriented, remain useful, and participate in the work without constant
        re-briefing.
      </blockquote>
    </section>

    <section>
      <h2>Why this matters for a small business</h2>
      <p>
        In a small team, every context switch has a cost. Strategy, delivery,
        client work, internal tools, product bets, and experiments all compete
        for the same limited bandwidth. A useful AI system needs to reduce that
        load, not add another interface to babysit.
      </p>
      <p>
        That is where Dodici starts to become interesting: not as a novelty, but
        as a force multiplier for focus, continuity, and follow-through.
      </p>
    </section>

    <section>
      <h2>What comes next</h2>
      <p>
        This is the first post in a broader Dodici blog. Future entries can go
        deeper into workflow design, memory systems, product execution patterns,
        automation decisions, and the practical lessons that come from making AI
        genuinely useful inside a real operating environment.
      </p>
    </section>
  </article>

  <div class="closing-note">
    This page is intended as the foundation for a longer-running archive of
    Dodici notes, case studies, and implementation writeups.
  </div>
</div>
