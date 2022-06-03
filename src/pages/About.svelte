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
    padding: 42px 48px 0px;
    position: relative;
  }

  .big-logo {
    margin: 24px auto;
    width: 200px;
    height: 222px;
  }

  .company-text {
    text-align: center;
    font-size: 16px;
    margin: auto;
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
    color: #222;
  }
</style>

<div class="header">
  <a class="big-logo" href="/">
    <img
      class="big-logo"
      src="assets/12Triangles.svg"
      alt="12 Triangles logo" />
  </a>
  <br />
  <br />
  <br />
  <div class="company-text">
    12 Triangles is a small but scrappy software startup located in Omaha, NE.
    <br />
    We love challenging what's possible and solving complex problems with simple
    solutions.
  </div>
  <br />
  <br />
  <div>
    <div class="seperator" />
  </div>
  <div class="name">Tyler Kuster</div>
  <br />

  <div class="company-text">
    is a creative mobile product developer who has designed and built successful
    apps across entertainment, finance, transportation, and other industries
    over the last 15 years.
  </div>
  <br />
  <br />
  <div>
    <div class="seperator" />
  </div>
  <div class="name">Alum</div>
  <br />

  <div class="company-text">
    <b>Ian Castillo</b>
    - Contributed to the development of Flair and other Angular apps. (2021)
  </div>
  <br />
  <br />
  <br />
  <br />
  <div class="thanks">Thanks for checking us out! ♥</div>
  <br />
</div>
