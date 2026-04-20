---
name: Svanto speed and simplicity cleanup
overview: Reduce page weight, modernize the toolchain, and remove dead/duplicate code so the site loads faster and stays easy to maintain.
todos:
  - id: dedup
    content: Delete src/assets/ duplicate, scripts/setupTypeScript.js, .DS_Store files; update .gitignore
    status: completed
  - id: home-cleanup
    content: "Fix Home.svelte: remove dead if= attribute, collapse to {#if}{:else}, consolidate internal/external <a> branches, strip commented code"
    status: completed
  - id: about-fix
    content: Fix About.svelte asset path to leading slash for hash-route safety
    status: completed
  - id: hero-reset
    content: Replace homeHeroReset CustomEvent with a small Svelte store
    status: completed
  - id: lazy-contact
    content: Lazy-load Contact and DodiciCaseStudy routes via svelte-spa-router wrap() + dynamic import
    status: completed
  - id: vite
    content: Migrate build from Rollup to Vite; remove deprecated plugins and sirv-cli; drop production sourcemaps
    status: completed
  - id: svelte5
    content: Upgrade Svelte 3 -> 5 (mount API, runes for state/derived, event syntax); run svelte-migrate
    status: completed
  - id: firebase
    content: Add Cache-Control headers to firebase.json for /build and /assets; fix rewrite destination to /index.html
    status: completed
  - id: images-attrs
    content: Add width/height, loading=lazy, decoding=async to non-hero images
    status: completed
isProject: false
---

# Svanto speed and simplicity cleanup
