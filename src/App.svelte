<script>
  import Router from 'svelte-spa-router'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import DodiciBlog from './pages/DodiciBlog.svelte'
  import DodiciCaseStudy from './pages/DodiciCaseStudy.svelte'
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
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(244, 234, 236, 0.94);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(42, 24, 51, 0.08);
  }

  .brand {
    color: #2a1833 !important;
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    background: transparent;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .link {
    color: #4c4053 !important;
    text-decoration: none;
    background: transparent;
    padding: 10px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .link:hover {
    background: rgba(111, 31, 143, 0.08);
    color: #6f1f8f !important;
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

  @media (max-width: 640px) {
    .nav-bar {
      height: auto;
      padding: 14px 16px;
      gap: 12px;
      align-items: flex-start;
      flex-direction: column;
    }

    .links {
      flex-wrap: wrap;
      gap: 6px;
    }
  }
</style>

<div class="app-shell">
  <div class="nav-bar">
    <a href="/" class="brand">12 Triangles</a>
    <div class="links">
      <a class="link" href="https://instantcardgrading.com">ICG</a>
      <a class="link" href="#/dodici">Dodici</a>
      <a class="link" href="https://sayitwithflair.com">Flair</a>
      <a class="link" href="#/about">About</a>
    </div>
  </div>

  <div class="content">
    <Router
      routes={{
        '/': Home,
        '/about': About,
        '/dodici': DodiciBlog,
        '/dodici/case-study': DodiciCaseStudy,
        '*': Home
      }}
    />
  </div>

  <div class="copyright">© 12 Triangles LLC, 2024</div>
</div>
