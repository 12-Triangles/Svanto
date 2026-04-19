<script>
  import { onMount } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import { link } from 'svelte-spa-router'

  /** Crossfade-friendly transition; final frame matches `.hero-image.is-visible` */
  function heroImageTransition(node, { duration = 480 } = {}) {
    return {
      duration,
      easing: cubicOut,
      css: (t) => {
        const opacity = 0.44 * t
        const blur = 14 * t
        const scale = 1 + 0.08 * t
        const saturate = 0.95 + 0.07 * t
        return `opacity: ${opacity}; transform: scale(${scale}); filter: blur(${blur}px) saturate(${saturate});`
      }
    }
  }

  const defaultHero = {
    id: '12triangles',
    title: '12 Triangles',
    subtitle: 'Thoughtfully crafted AI services and digital product development',
    // description:
    //   'We build useful systems, sharp interfaces, and practical AI workflows that help ideas become products instead of staying stuck as concepts.',
    heroMode: 'logo',
    // heroAccent: 'rgba(111, 31, 143, 0.18)',
    // heroTint: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
    logo: '/assets/12Triangles.svg'
  }

  const projects = [
    {
      id: 'dodici',
      title: 'AI Systems',
      href: '/dodici',
      internal: true,
      label: 'Research',
      description:
        'Notes, case studies, and experiments co-created with AI Agents',
      heroMode: 'wordmark',
      logo: '/assets/dodici.png',
      heroTitle: 'Dodici',
      heroSubtitle: 'Openclaw + Claude + Obsidian',
      heroDescription:
        'Case studies, workflow notes, and product thinking from an AI business partner taking shape inside 12 Triangles',
      heroAccent: 'rgba(111, 31, 143, 0.16)',
      heroTint:
        'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(244, 234, 236, 0.38), rgba(111, 31, 143, 0.05), rgba(235, 108, 133, 0.04))',
      heroBlur: 'radial-gradient(circle at 20% 25%, rgba(255,255,255,0.28), transparent 30%), radial-gradient(circle at 80% 30%, rgba(235,108,133,0.32), transparent 26%), radial-gradient(circle at 50% 80%, rgba(111,31,143,0.32), transparent 32%)'
    },
    {
      id: 'icg',
      title: 'Instant Card Grading',
      href: 'https://instantcardgrading.com',
      internal: false,
      label: 'Product',
      description:
        'Quickly calculate card centering sub-grade before sending for official grading',
      heroMode: 'image',
      logo: '/assets/bigBoltWeb.png',
      heroTitle: 'Instant Card Grading',
      heroSubtitle: 'AI powered 2.0 coming soon! Stay tuned!',
      heroDescription:
        'ICG 1.0 calculates card centering to help determine if your card is worth official grading',
      heroAccent: '#4e2f84',
      heroTint: 'linear-gradient(135deg, rgba(27, 21, 53, 0.78), rgba(78, 47, 132, 0.68), rgba(185, 145, 255, 0.32))',
      heroImage: '/assets/icgPreview.jpg',
      heroBlur: 'radial-gradient(circle at 18% 22%, rgba(255,255,255,0.22), transparent 26%), radial-gradient(circle at 82% 26%, rgba(170,132,255,0.3), transparent 28%), radial-gradient(circle at 60% 82%, rgba(76,41,126,0.3), transparent 32%)'
    },
    {
      id: 'flair',
      title: 'Say it with Flair',
      href: 'https://sayitwithflair.com',
      internal: false,
      label: 'Product',
      description:
        'Flair makes it fast and easy to create and share your own custom stickers',
      heroMode: 'image',
      logo: '/assets/flairLogo.svg',
      heroTitle: 'Say it with Flair',
      heroSubtitle: 'Easily create and share custom digital stickers',
      heroDescription:
        'A more expressive product world built around delight, motion, and consumer-facing design sensibility.',
        heroAccent: '#4e2f84',
        heroTint: 'linear-gradient(135deg, rgba(27, 21, 53, 0.78), rgba(78, 47, 132, 0.68), rgba(185, 145, 255, 0.32))',
      heroImage: '/assets/flairPreview.jpg',
      heroBlur: 'radial-gradient(circle at 18% 22%, rgba(255,255,255,0.22), transparent 26%), radial-gradient(circle at 82% 26%, rgba(170,132,255,0.3), transparent 28%), radial-gradient(circle at 60% 82%, rgba(76,41,126,0.3), transparent 32%)'
    }
  ]

  /** Set while pointer is over a project row; cleared on list mouseleave */
  let hoveredProject = null
  /** After the first project hover, this drives the hero when nothing is hovered */
  let lastHoveredProject = null

  $: activeHero = hoveredProject ?? lastHoveredProject ?? defaultHero
  $: heroStyle = `--hero-accent: ${activeHero.heroAccent || '#6f1f8f'}; --hero-tint: ${activeHero.heroTint || 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))'}; --hero-blur: ${activeHero.heroBlur || 'none'};`

  onMount(() => {
    window.scrollTo(0, 0)
  })

  function activateProject(project) {
    hoveredProject = project
    lastHoveredProject = project
  }

  function clearHover() {
    hoveredProject = null
  }
</script>

<style>
  .page {
    max-width: 1080px;
    margin: 0 auto;
    padding: 56px 24px 72px;
  }

  .hero {
    padding: 28px 0 8px;
  }

  .hero-frame {
    position: relative;
    min-height: 420px;
    overflow: hidden;
    /* border: 1px solid rgba(42, 24, 51, 0.1); */
    /* background: rgba(255, 255, 255, 0.34); */
  }

  .hero-plate,
  .hero-image,
  .hero-noise,
  .hero-orb {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .hero-plate {
    background: var(--hero-tint);
    /* transition: background 380ms ease, transform 520ms ease, opacity 320ms ease; */
  }

  .hero-image {
    background-image: var(--hero-image);
    background-size: cover;
    background-position: center;
    opacity: 0;
    filter: blur(0px) saturate(0.95);
  }

  .hero-image.is-visible {
    opacity: 0.44;
    transform: scale(1.08);
    filter: blur(14px) saturate(1.02);
  }

  .hero-noise {
    background-image: var(--hero-blur);
    opacity: 0.9;
    /* transition: opacity 320ms ease; */
  }

  .hero-orb {
    inset: auto -60px -80px auto;
    width: 240px;
    height: 240px;
    border-radius: 999px;
    background: radial-gradient(circle, color-mix(in srgb, var(--hero-accent) 28%, transparent) 0%, transparent 68%);
    filter: blur(8px);
    opacity: 0.8;
    transition: transform 520ms ease, background 380ms ease;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    min-height: 420px;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 54px 42px;
  }

  .hero-copy {
    max-width: 700px;
    transition: transform 340ms ease, opacity 280ms ease;
  }

  .hero-kicker {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 700;
    color: #7c6b82;
    margin-bottom: 18px;
  }

  .hero-logo {
    display: block;
    width: auto;
    height: 288px;
    
    margin: 0 auto 22px;
    filter: drop-shadow(0 10px 30px rgba(42, 24, 51, 0.08));
  }

  .hero-wordmark {
    margin: 0 0 18px;
    font-size: clamp(50px, 8vw, 96px);
    line-height: 0.94;
    text-transform: uppercase;
    letter-spacing: -0.04em;
    color: #201824;
  }

  .hero-title {
    margin: 0 0 18px;
    font-size: clamp(30px, 5vw, 56px);
    line-height: 1;
    color: #201824;
  }

  .hero-subtitle {
    max-width: 56ch;
    margin: 32px auto 0;
    font-size: 22px;
    line-height: 1.55;
    color: #413747;
  }

  .hero-description {
    max-width: 46ch;
    margin: 20px auto 0;
    font-size: 16px;
    line-height: 1.75;
    color: #564a5b;
  }

  .section {
    padding-top: 36px;
  }

  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0;
    border-top: 1px solid rgba(42, 24, 51, 0.1);
  }

  .project {
    display: block;
    text-decoration: none;
    color: inherit;
    padding: 12px;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
    /* transition: transform 0.2s ease, color 0.2s ease; */
  }

  .project:hover,
  .project:focus-visible {
    color: #6f1f8f;
    outline: none;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #8b7a91;
  }

  .project-title {
    margin: 0 0 10px;
    font-size: 28px;
    line-height: 1.15;
    color: #201824;
  }

  .project-copy {
    margin: 0;
    max-width: 42ch;
    line-height: 1.75;
    color: #4d4254;
  }

  .footer-links {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    /* gap: 18px; */
    padding-top: 36px;
    /* flex-wrap: wrap; */
  }

  .footer-links a {
    text-decoration: none;
    color: #6f1f8f;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 860px) {
    .page {
      padding-top: 28px;
    }

    .hero-frame,
    .hero-inner {
      min-height: 360px;
    }

    .hero-inner {
      padding: 38px 26px;
    }

    .hero-subtitle {
      font-size: 19px;
    }
  }
</style>

<div class="page">
  <section class="hero">
    <div
      class:is-project={!!(hoveredProject ?? lastHoveredProject)}
      class="hero-frame"
      style={heroStyle}>
      <div class="hero-plate" />
      {#if activeHero.heroMode === 'image' && activeHero.heroImage}
        {#key activeHero.heroImage}
          <div
            class="hero-image is-visible"
            in:heroImageTransition
            out:heroImageTransition
            style={`--hero-image: url(${activeHero.heroImage});`} />
        {/key}
      {/if}
      <!-- <div class="hero-noise" /> -->
      

      <div class="hero-inner">
        <div class="hero-copy">
            <img
              class="hero-logo"
              src={activeHero.logo}
              alt={activeHero.subtitle}
              width="auto"
              height="288" />
          <div class="hero-subtitle">{activeHero.heroSubtitle || activeHero.subtitle || ""}</div>
          <!-- <div class="hero-description">{activeHero.heroDescription || activeHero.description || ""}</div> -->
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="project-list" on:mouseleave={clearHover}>
      {#each projects as project}
        {#if project.internal}
          <a
            use:link
            href={project.href}
            class="project"
            on:mouseenter={() => activateProject(project)}
            on:focus={() => activateProject(project)}>
            <div class="meta">
              <span>{project.label}</span>
              <span>&nbsp;</span>
            </div>
            <h2 class="project-title">{project.title}</h2>
            <p class="project-copy">{project.description}</p>
          </a>
        {:else}
          <a
            href={project.href}
            class="project"
            on:mouseenter={() => activateProject(project)}
            on:focus={() => activateProject(project)}>
            <div class="meta">
              <span>{project.label}</span>
              <span>&nbsp;</span>
            </div>
            <h2 class="project-title">{project.title}</h2>
            <p class="project-copy">{project.description}</p>
          </a>
        {/if}
      {/each}
    </div>
  </section>

  <div class="footer-links">
    <a use:link href="/about">About 12 Triangles</a>
    <!-- <a href="https://x.com/12triangles">Twitter</a> -->
  </div>
</div>
