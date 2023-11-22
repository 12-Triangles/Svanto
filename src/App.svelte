<script>
  import Router from 'svelte-spa-router'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
</script>

<style>
  .nav-bar {
    width: 100%;
    text-transform: uppercase;
    justify-content: space-between;
    background-color: #222;
    height: 42px;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
  }

  .home-button {
    background: linear-gradient(219.01deg, #eb6c85 0%, #c265e8 100%);
    padding: 12px;
    color: #f4eaec;
    font-weight: 700;
    display: flex;
    flex-direction: column;
  }

  .links {
    color: white;
    font-weight: 700;
    height: 42px;
    display: flex;
  }

  a {
    color: #fff !important;
    background-color: #222;
    text-decoration: none;
  }

  a:hover {
    background-color: #444;
    text-shadow: none;
  }

  .link {
    padding: 12px;
    display: flex;
    flex-direction: column;
  }

  .copyright {
    padding: 16px 16px 16px;
    color: #222;
    text-align: center;
    font-size: 12px;
  }
  @media (min-width: 640px) {
  }

  :global(body) {
    font-family: 'Inter', sans-serif;
    background-color: #f4eaec;
    margin: 0px;
  }
</style>

<Router routes={{ '/': Home, '/about': About, '*': Home }} />

<div class="nav-bar">
  <a href="/" class="home-button">12 Triangles</a>
  <div class="links">
    <a class="link" href="https://sayitwithflair.com">Flair</a>
    <a class="link" href="https://ionhipster.com">Blog</a>
  </div>
</div>
<div class="copyright">© 12 Triangles LLC, 2024</div>
