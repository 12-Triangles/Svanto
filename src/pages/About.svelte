<script>
  import { onMount } from 'svelte'

  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .header {
    display: flex;
    flex-direction: column;
    /* padding: 42px 0px 0px; */
    position: relative;
  }
  
  .big-logo {
    margin: 20px auto;
    padding-top: 64px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .big-logo img {
    display: block;
    height: auto;
    max-height: 528px;
  }

  .company-text {
    text-align: center;
    font-size: 16px;
    margin: 32px auto;
    max-width: 680px;
    color: #222;
  }

  .about-text {
    text-align: center;
    font-size: 16px;
    margin: 16px auto 32px;
    max-width: 680px;
    color: #222;
  }

  .name {
    text-align: center;
    font-size: 24px;
    margin-top: 32px;
    font-weight: bold;
    color: #222;
  }

  .seperator {
    background: #6f1f8f;
    margin: auto;
    width: 96px;
    height: 2px;
  }

  .thanks {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin: 32px auto;
    color: #222;
  }
</style>

<div class="header">
  <a class="big-logo" href="/">
    <img
      src="assets/busstop.jpg"
      alt="12 Triangles Bus Stop" />
  </a>
  <div class="company-text">
    12 Triangles is a small but scrappy software startup located in Omaha, NE.
    <br />
    We love challenging what's possible and solving complex problems with simple
    solutions.
  </div>
  <div>
    <div class="seperator" />
  </div>
  <div class="name">Tyler Kuster</div>
  <div class="about-text">
    is a creative mobile product developer who has designed and built successful
    apps across entertainment, finance, transportation, and other industries
    over the last 15 years.
  </div>
  <div>
    <div class="seperator" />
  </div>
  <div class="name">Alum</div>
  <div class="about-text">
    <b>Ian Castillo</b>
    - Contributed to the development of Flair and other Angular apps. (2021)
  </div>
  <div class="thanks">Thanks for checking us out! ♥</div>
</div>
