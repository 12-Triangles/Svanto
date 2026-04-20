<script>
  import { onMount } from 'svelte'
  import Router, { link, location } from 'svelte-spa-router'
  import { dispatchHomeHeroReset } from './lib/homeHeroReset.js'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Contact from './pages/Contact.svelte'
  import DodiciBlog from './pages/DodiciBlog.svelte'
  import DodiciCaseStudy from './pages/DodiciCaseStudy.svelte'

  /**
   * Scroll restoration for SPA routing:
   * - svelte-spa-router keeps the current scroll position by default
   * - we want new routes to start at the top without a visible "jump"
   */
  onMount(() => {
    // Prevent browser from trying to restore scroll on hash/history changes
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

    const unsubscribe = location.subscribe(($location) => {
      // Make the scroll reset happen as early as possible in the route-change timeline.
      // Setting both documentElement/body covers Safari + older browsers.
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    })

    return unsubscribe
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

  .links {
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 0 22px 0 16px;
  }

  .link {
    color: #ffffff !important;
    text-decoration: none;
    background: transparent;
    
    font-size: 14px;
    font-weight: 700;
    
    text-transform: uppercase;
    font-style: normal;
    transition: font-style 0.2s ease;
  }

  .link:hover {
    opacity: 0.82;
    font-style: italic;
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

    .link { 
      font-size: 10px;
    }
  }
</style>

<div class="app-shell">
  <nav class="nav-bar">
    <a
      href="https://12triangles.com"
      class="nav-brand"
      on:mouseenter={dispatchHomeHeroReset}>12 Triangles</a>
    <div class="links">
      <!-- <a class="link" href="#/contact">Work with us <span aria-hidden="true">→</span></a> -->
    </div>
  </nav>

  <div class="content">
    <Router
      routes={{
        '/': Home,
        '/about': About,
        '/contact': Contact,
        '/dodici': DodiciBlog,
        '/dodici/case-study': DodiciCaseStudy,
        '*': Home
      }}
    />
  </div>

  <div class="copyright">© 12 Triangles LLC, {new Date().getFullYear()}</div>
</div>
