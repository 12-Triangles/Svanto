---
name: write-blog-post
description: Write and publish a blog post to a 12 Triangles-style Svelte SPA blog (Dodici and sibling sites). Use when asked to write, draft, add, or publish a blog post / article / case study / Dodici entry. Handles the full three-file wiring (posts metadata, content component, route registration), applies the brand voice for the active site, and runs the human-voice (anti-AI) checklist before finishing.
---

# Write a blog post

This skill publishes a post to a Svelte single-page-app blog of the kind used by
12 Triangles (the Dodici archive) and its sibling properties. These sites have **no
markdown pipeline** — a post is three coordinated edits. Getting any one wrong makes
the post 404 or render unstyled, so follow the mechanics exactly.

## Before drafting

1. **Get a brief.** If the user hasn't given you a topic + angle, ask — or fill in
   `post-brief-template.md` with them. Never start drafting without a thesis. A post
   that doesn't argue something is the #1 source of AI-sounding filler.
2. **Load the voice guide** for the active site from `voice/`. Default to
   `voice/12-triangles.md` (the Dodici blog). If you're in a different repo/site and
   no matching voice guide exists, say so and offer to create one before writing.
3. **Read one existing post** in the target repo (e.g. `src/content/inside-dodici.svelte`)
   as a structural and tonal reference. Match its rhythm, not just its rules.

## The three edits (Dodici / 12 Triangles layout)

Paths below are for this repo. Other sites use the same shape; confirm paths first.

### 1. Metadata — `src/data/posts.js`
Prepend a new object to the `posts` array (newest first):
```js
{
  slug: 'kebab-case-slug',
  title: 'Title Case Title',
  category: 'Case Study', // or 'Field Note', 'Operating Lesson', etc.
  date: 'Month YYYY',      // e.g. 'June 2026' — month name + year, no day
  summary:
    'One sentence for the blog index card. Plain, concrete, no hype.',
  standfirst:
    'A longer one- to two-sentence framing shown under the title on the post page.',
  tags: ['12 Triangles', 'Topic', 'Topic']
}
```

### 2. Body — `src/content/<slug>.svelte`
Create a new component. **Copy the `<style>` block verbatim from
`src/content/inside-dodici.svelte`** — styling lives per-component, so a new post
without it renders unstyled. Then write the body using only this vocabulary:

- `<article>` wraps everything.
- `<section>` per logical beat; sections are auto-spaced.
- `<h2>` section heading, `<p>` paragraphs (`p + p` auto-spaces).
- `<ul><li>` for principle lists; lead each `<li>` with `<strong>…</strong>` when listing named principles.
- `<blockquote>` for a single pull-quote — the emotional/thesis peak, used once.
- A trailing `<div class="closing-note">…</div>` *outside* `<article>` for a brief forward-looking note.

Do not introduce new class names, inline styles, scripts, or imports in a content
component. Keep it semantic HTML inside the established CSS.

### 3. Route — `src/pages/Post.svelte`
Import the new component and add it to `contentMap`:
```js
import NewPost from '../content/<slug>.svelte'
// ...
const contentMap = {
  'inside-dodici': InsideDodici,
  '<slug>': NewPost,
}
```

## Voice

The mechanics above are identical across sites. The **sound is not** — it comes
entirely from the per-site voice guide in `voice/`. Apply it, then run every draft
through `human-voice-checklist.md` before you call the post done. Treat the checklist
as a gate, not a suggestion.

## Finish

1. Verify all three edits are in place — especially the `contentMap` registration
   (the easiest step to forget).
2. Build to confirm nothing broke: `npm run build`.
3. Summarize for the user: title, slug, the thesis, and which voice guide you used.

## Files in this skill
- `voice/12-triangles.md` — Dodici / 12 Triangles brand voice. Copy this as a
  template for new sites.
- `human-voice-checklist.md` — shared anti-AI-tells gate, brand-agnostic.
- `post-brief-template.md` — the inputs to collect before drafting.
