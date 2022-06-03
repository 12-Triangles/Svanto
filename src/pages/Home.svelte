<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'
  onMount(() => {
    window.scrollTo(0, 0)
  })
</script>

<style>
  .header {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 42px;
  }

  .big-logo {
    margin: 24px auto;
    width: 200px;
    height: 222px;
  }

  .company-text {
    text-align: center;
    font-size: 24px;
    margin: auto 64px;
    color: #6f1f8f;
  }

  .feature-link-group {
    display: flex;
    flex-wrap: wrap;
    margin: 64px auto;
    max-width: 960px;
    justify-content: center;
  }

  .quick-links {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    max-width: 320px;
    margin: auto;
    align-items: center;
    display: flex;
  }

  .quick-links a:hover {
    text-decoration: underline;
  }

  .social-image {
    filter: invert(14%) sepia(75%) saturate(3308%) hue-rotate(274deg)
      brightness(94%) contrast(94%);
    height: 24px;
    width: 24px;
    margin: auto;
  }

  .hover-effect {
    width: 240px;
    height: 240px;
    margin: auto 32px;
    border-radius: 120px;
    background-size: contain;
  }

  .hover-effect:hover {
    box-shadow: 0 0 0 16px #fff inset;
    transition: all 0.25s;
  }

  .hover-effect:not(:hover) {
    box-shadow: 0 0 0 0px #fff inset;
    transition: all 0.25s;
  }

  .flair {
    background-image: url('../assets/flairPreview.jpg');
  }

  .magnetic {
    background-image: url('../assets/magneticPreview.jpg');
  }

  .ionhipster {
    background-image: url('../assets/ionhipsterPreview.jpg');
  }

  .title {
    text-transform: uppercase;
    color: #6f1f8f;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    padding-top: 16px;
    padding-bottom: 32px;
  }

  a {
    color: #6f1f8f;
    text-decoration: none;
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
    12 Triangles is a hybrid app development company located in the Midwest.
  </div>
</div>
<div class="feature-link-group">
  <a href="https://sayitwithflair.com">
    <div class="hover-effect flair" />
    <div class="title">Say it with Flair!</div>
  </a>
  <a href="https://magnetic.photo">
    <div class="hover-effect magnetic" />
    <div class="title">Magnetic</div>
  </a>
  <a href="https://ionhipster.com">
    <div class="hover-effect ionhipster" />
    <div class="title">ionhipster</div>
  </a>
</div>
<div class="quick-links">
  <a use:link href="/about">About 12 Triangles</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://www.notion.so/Flair-Docs-3abf582e3c8c4ee689630a0714ef44c4">
    Flair Support
  </a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://twitter.com/12triangles">
    <img
      class="social-image"
      src="assets/logo-twitter.svg"
      alt="Follow us on Twitter" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.snapchat.com/add/twelvetriangles">
    <img
      class="social-image"
      src="assets/logo-snapchat.svg"
      alt="Follow us on Snapchat" />
  </a>
</div>
<!-- <div class="newsletter">Sign up for the 12 Triangles newsletter</div>
<newsletter-form buttonTitle="Subscribe" /> -->
<!-- <br />
<br />
<br /> -->
<!-- <div class="background" [ngStyle]="setBackgroundAt(hoveredFeature)">
  <div class="blurred-background" />
</div> -->
