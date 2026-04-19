<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'

  const posts = [
    {
      title: 'Inside Dodici',
      slug: '/dodici/case-study',
      category: 'Case Study',
      date: 'March 2026',
      summary:
        'A first look at shaping Dodici into an AI business partner focused on continuity, execution, and practical operating value.'
    }
  ]

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .page {
    max-width: 980px;
    margin: 0 auto;
    padding: 56px 24px 72px;
    color: #241d28;
  }

  .intro {
    padding: 18px 0 38px;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
    margin-bottom: 24px;
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
    margin: 0 0 18px;
    font-size: clamp(40px, 7vw, 76px);
    line-height: 0.96;
    color: #201824;
    text-transform: uppercase;
    max-width: 8ch;
  }

  .lede {
    max-width: 52ch;
    font-size: 19px;
    line-height: 1.8;
    color: #4b4250;
  }

  .post-list {
    display: flex;
    flex-direction: column;
  }

  .post {
    display: grid;
    grid-template-columns: 170px minmax(0, 1fr);
    gap: 28px;
    padding: 28px 0;
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
    transition: transform 0.2s ease;
  }

  /* .post:hover {
    transform: translateX(6px);
  } */

  .meta {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #8b7a91;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .post-title {
    margin: 0 0 12px;
    font-size: 32px;
    color: #201824;
    line-height: 1.08;
  }

  .summary {
    margin: 0;
    max-width: 58ch;
    line-height: 1.8;
    color: #4d4254;
  }

  .cta {
    margin-top: 16px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #6f1f8f;
  }

  @media (max-width: 760px) {
    .page {
      padding-top: 28px;
    }

    .post {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .post-title {
      font-size: 28px;
    }
  }
</style>

<div class="page">
  <section class="intro">
    <div class="eyebrow">12 Triangles / Dodici</div>
    <h1>Dodici Blog</h1>
    <div class="lede">
      Notes from building an AI business partner in the real world—case studies,
      implementation details, product thinking, and operating lessons from
      inside 12 Triangles.
    </div>
  </section>

  <section class="post-list">
    {#each posts as post}
      <a use:link href={post.slug} class="post">
        <div class="meta">
          <span>{post.date}</span>
          <span>{post.category}</span>
        </div>

        <div>
          <h2 class="post-title">{post.title}</h2>
          <p class="summary">{post.summary}</p>
          <div class="cta">Read article →</div>
        </div>
      </a>
    {/each}
  </section>
</div>
