<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'

  const posts = [
    {
      title: 'Dodici Case Study',
      slug: '/dodici/case-study',
      category: 'Case Study',
      date: 'March 2026',
      summary:
        'How Dodici evolved into a business-partner style AI operator for 12 Triangles—blending execution, memory, and product thinking into a practical internal system.'
    }
  ]

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .page {
    padding: 106px 24px 48px;
    max-width: 1040px;
    margin: 0 auto;
    color: #222;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 700;
    color: #6f1f8f;
    margin-bottom: 16px;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 32px;
    align-items: stretch;
    margin-bottom: 48px;
  }

  .hero-copy {
    background: linear-gradient(145deg, rgba(111, 31, 143, 0.08), rgba(235, 108, 133, 0.08));
    border: 1px solid rgba(111, 31, 143, 0.15);
    border-radius: 28px;
    padding: 32px;
    box-shadow: 0 20px 60px rgba(111, 31, 143, 0.08);
  }

  h1 {
    font-size: clamp(40px, 7vw, 72px);
    line-height: 0.95;
    margin: 0 0 20px;
    color: #2a1833;
    text-transform: uppercase;
  }

  .lede {
    font-size: 18px;
    line-height: 1.7;
    max-width: 58ch;
    margin-bottom: 24px;
  }

  .hero-note {
    border-left: 3px solid #eb6c85;
    padding-left: 16px;
    color: #5f5068;
    line-height: 1.6;
  }

  .hero-panel {
    border-radius: 28px;
    padding: 32px;
    color: #fff;
    background: linear-gradient(160deg, #29102f 0%, #6f1f8f 52%, #eb6c85 100%);
    box-shadow: 0 20px 60px rgba(111, 31, 143, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
  }

  .hero-panel-title {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: rgba(255, 255, 255, 0.7);
  }

  .hero-panel strong {
    display: block;
    font-size: 32px;
    line-height: 1.1;
  }

  .hero-panel p {
    margin: 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.88);
  }

  .section-title {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #6f1f8f;
    margin: 0 0 20px;
  }

  .post-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }

  .post-card {
    display: flex;
    flex-direction: column;
    gap: 18px;
    text-decoration: none;
    color: inherit;
    background: #fff;
    border-radius: 26px;
    padding: 28px;
    border: 1px solid rgba(111, 31, 143, 0.12);
    box-shadow: 0 20px 40px rgba(42, 24, 51, 0.06);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 28px 50px rgba(42, 24, 51, 0.11);
    border-color: rgba(235, 108, 133, 0.28);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    font-weight: 700;
    color: #8c7596;
  }

  .post-title {
    font-size: 28px;
    color: #2a1833;
    margin: 0;
  }

  .summary {
    line-height: 1.7;
    color: #4d4154;
    margin: 0;
  }

  .cta {
    margin-top: auto;
    font-weight: 700;
    color: #6f1f8f;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.12em;
  }

  @media (max-width: 820px) {
    .hero {
      grid-template-columns: 1fr;
    }

    .page {
      padding-top: 88px;
    }

    .hero-copy,
    .hero-panel,
    .post-card {
      padding: 24px;
    }
  }
</style>

<div class="page">
  <div class="hero">
    <section class="hero-copy">
      <div class="eyebrow">12 Triangles · Dodici Blog</div>
      <h1>Operating notes from the edge of building.</h1>
      <div class="lede">
        A growing archive of case studies, product thinking, experiments, and
        execution notes around Dodici—our AI business partner system for 12
        Triangles.
      </div>
      <div class="hero-note">
        The goal isn’t thought leadership theater. It’s documenting what works,
        what breaks, and how AI becomes operationally useful inside a real small
        business.
      </div>
    </section>

    <aside class="hero-panel">
      <div>
        <div class="hero-panel-title">Featured</div>
        <strong>Dodici Case Study</strong>
      </div>
      <p>
        The first long-form writeup on the system, workflow, and practical value
        behind building Dodici as a proactive operator instead of a passive chat
        bot.
      </p>
      <a use:link href="/dodici/case-study" class="post-card" style="padding: 18px; background: rgba(255,255,255,0.08); color: #fff; border-color: rgba(255,255,255,0.12); box-shadow: none;">
        <div class="meta">
          <span>Case Study</span>
          <span>Read now</span>
        </div>
        <div class="post-title" style="color: #fff; font-size: 22px;">Inside Dodici</div>
      </a>
    </aside>
  </div>

  <section>
    <div class="section-title">Posts</div>
    <div class="post-grid">
      {#each posts as post}
        <a use:link href={post.slug} class="post-card">
          <div class="meta">
            <span>{post.category}</span>
            <span>{post.date}</span>
          </div>
          <h2 class="post-title">{post.title}</h2>
          <p class="summary">{post.summary}</p>
          <div class="cta">Open article →</div>
        </a>
      {/each}
    </div>
  </section>
</div>
