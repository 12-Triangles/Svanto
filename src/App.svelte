<script>
  import Router, { router } from 'svelte-spa-router'
  import { wrap } from 'svelte-spa-router/wrap'
  import { requestHomeHeroReset } from './lib/homeHeroReset.js'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import DodiciBlog from './pages/DodiciBlog.svelte'

  const Contact = wrap({ asyncComponent: () => import('./pages/Contact.svelte') })
  const Post = wrap({ asyncComponent: () => import('./pages/Post.svelte') })
  const LegacyCaseStudy = wrap({ asyncComponent: () => import('./pages/LegacyCaseStudy.svelte') })

  /**
   * Scroll restoration for SPA routing: reset to top on every route change
   * (setting both documentElement/body covers Safari + older browsers).
   */
  if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  $effect(() => {
    router.location
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)
  })
</script>

<style>
  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .nav-bar {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    min-height: 42px;
    position: fixed;
    z-index: 20;
    background: #222222;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    align-self: stretch;
    text-decoration: none;
    color: #ffffff !important;
    background: linear-gradient(219.01deg, #eb6c85 0%, #c265e8 100%);
    font-weight: 700;
    text-transform: uppercase;
    padding: 12px;
  }

  .nav-brand:hover {
    filter: brightness(1.06);
  }

  .content {
    flex: 1;
  }

  .copyright {
    padding: 18px 20px 24px;
    color: #6f6474;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  :global(body) {
    font-family: 'Inter', sans-serif;
    background-color: #f4eaec;
    margin: 0;
    color: #241d28;
  }

  @media (max-width: 320px) {
    .nav-bar {
      font-size: 12px;
    }
  }
</style>

<div class="app-shell">
  <nav class="nav-bar">
    <a
      href="https://12triangles.com"
      class="nav-brand"
      onmouseenter={requestHomeHeroReset}>12 Triangles</a>
  </nav>

  <div class="content">
    <Router
      routes={{
        '/': Home,
        '/about': About,
        '/contact': Contact,
        '/dodici': DodiciBlog,
        '/dodici/case-study': LegacyCaseStudy,
        '/dodici/:slug': Post,
        '*': Home
      }}
    />
  </div>

  <div class="copyright">© 12 Triangles LLC, {new Date().getFullYear()}</div>
</div>
