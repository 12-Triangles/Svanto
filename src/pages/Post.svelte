<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'
  import { posts } from '../data/posts.js'
  import InsideDodici from '../content/inside-dodici.svelte'
  import SettingUpHermes from '../content/setting-up-hermes.svelte'

  let { params = {} } = $props()

  const contentMap = {
    'inside-dodici': InsideDodici,
    'setting-up-hermes': SettingUpHermes
  }

  const post = $derived(posts.find((p) => p.slug === params.slug) ?? null)
  const ContentComponent = $derived(contentMap[params.slug] ?? null)

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<svelte:head>
  <title>{post ? `${post.title} — 12 Triangles` : '12 Triangles'}</title>
</svelte:head>

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

  .not-found {
    color: #4b4250;
    font-size: 18px;
    line-height: 1.8;
  }

  @media (max-width: 760px) {
    .page {
      padding-top: 28px;
    }
  }
</style>

<div class="page">
  {#if post && ContentComponent}
    <a use:link href="/dodici" class="back-link">← Back to Dodici Blog</a>

    <header class="header">
      <div class="eyebrow">{post.category} / {post.date}</div>
      <h1>{post.title}</h1>
      <div class="standfirst">{post.standfirst}</div>
      <div class="meta">
        {#each post.tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
    </header>

    <ContentComponent />
  {:else}
    <a use:link href="/dodici" class="back-link">← Back to Dodici Blog</a>
    <p class="not-found">Post not found.</p>
  {/if}
</div>
