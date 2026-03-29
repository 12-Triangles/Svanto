<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'

  const projects = [
    {
      title: 'Dodici Blog',
      href: '/dodici',
      internal: true,
      label: 'AI Systems Journal',
      description:
        'Notes, case studies, and practical operating lessons from building Dodici into a useful business partner.'
    },
    {
      title: 'Instant Card Grading',
      href: 'https://instantcardgrading.com',
      internal: false,
      label: 'Product',
      description:
        'AI-powered sports card grading workflows, tooling, and product exploration from the ICG ecosystem.'
    },
    {
      title: 'Say it with Flair',
      href: 'https://sayitwithflair.com',
      internal: false,
      label: 'Product',
      description:
        'A playful consumer experience built with the same care for design, motion, and sharp product execution.'
    }
  ]

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .page {
    max-width: 1080px;
    margin: 0 auto;
    padding: 56px 24px 72px;
  }

  .hero {
    padding: 30px 0 56px;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 700;
    color: #7c6b82;
    margin-bottom: 18px;
  }

  .hero-title-img {
    display: block;
    width: min(100%, clamp(200px, 45vw, 280px));
    height: auto;
    margin: 0 auto 22px;
  }

  .lede {
    font-size: 21px;
    line-height: 1.7;
    color: #413747;
    margin: 48px auto 0;
    text-align: center;
  }

  .hero-note {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-left: 24px;
    border-left: 2px solid rgba(111, 31, 143, 0.2);
    color: #4d4254;
    line-height: 1.8;
  }

  .hero-note.page-bottom-note {
    margin-top: 36px;
    padding-top: 36px;
    border-top: 1px solid rgba(42, 24, 51, 0.1);
  }

  .section {
    padding-top: 36px;
  }

  .section-title {
    margin: 0 0 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #6f1f8f;
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
    padding: 26px 0;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .project:hover {
    transform: translateX(6px);
    color: #6f1f8f;
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
    gap: 18px;
    padding-top: 36px;
    flex-wrap: wrap;
  }

  .footer-links a {
    text-decoration: none;
    color: #6f1f8f;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 860px) {
    .page {
      padding-top: 28px;
    }

    .hero-note {
      padding-left: 18px;
    }
  }
</style>

<div class="page">
  <section class="hero">
    <div>
      <!-- <div class="eyebrow">12 Triangles</div> -->
      <img
        class="hero-title-img"
        src="/assets/12Triangles.svg"
        alt="Thoughtfully crafted AI services and digital product development"
        width="280"
        height="310"
      />
      <div class="lede">
        Thoughtfully crafted AI services and digital product development
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-title">Selected Work</div>
    <div class="project-list">
      {#each projects as project}
        {#if project.internal}
          <a use:link href={project.href} class="project">
            <div class="meta">
              <span>{project.label}</span>
              <span>Explore</span>
            </div>
            <h2 class="project-title">{project.title}</h2>
            <p class="project-copy">{project.description}</p>
          </a>
        {:else}
          <a href={project.href} class="project">
            <div class="meta">
              <span>{project.label}</span>
              <span>Visit</span>
            </div>
            <h2 class="project-title">{project.title}</h2>
            <p class="project-copy">{project.description}</p>
          </a>
        {/if}
      {/each}
    </div>
  </section>

  <!-- <div class="hero-note page-bottom-note">
    <div>
      12 Triangles works across AI tooling, internal systems, and digital
      product execution with an emphasis on clarity, taste, and real utility.
    </div>
    <div>
      The work spans experiments, products, and operating infrastructure—each
      built to be functional first and memorable second.
    </div>
  </div> -->

  <div class="footer-links">
    <a use:link href="/about">About 12 Triangles</a>
    <a href="https://twitter.com/12triangles">Twitter</a>
    <a href="https://www.snapchat.com/add/twelvetriangles">Snapchat</a>
  </div>
</div>
