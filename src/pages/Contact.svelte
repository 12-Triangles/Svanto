<script>
  import { onMount } from 'svelte'

  const serviceOptions = [
    'AI strategy + roadmap',
    'Workflow automation',
    'Internal AI tooling',
    'Customer-facing AI product',
    'Product design / UX',
    'Implementation support'
  ]

  const outcomeOptions = [
    'Revenue growth',
    'Cost reduction',
    'Operational speed',
    'Quality / consistency',
    'Headcount leverage',
    'Risk reduction'
  ]

  const state = {
    services: [],
    outcomes: []
  }

  onMount(() => {
    window.scrollTo(0, 0)
  })

  function toggleSelection(group, value) {
    const current = state[group]
    if (current.includes(value)) {
      state[group] = current.filter((item) => item !== value)
    } else {
      state[group] = [...current, value]
    }
  }
</script>

<style>
  .page {
    max-width: 1120px;
    margin: 0 auto;
    padding: 56px 24px 88px;
    color: #241d28;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
    gap: 42px;
    padding-bottom: 34px;
    border-bottom: 1px solid rgba(42, 24, 51, 0.1);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 700;
    color: #7c6b82;
    margin-bottom: 14px;
  }

  h1 {
    margin: 0 0 18px;
    font-size: clamp(38px, 7vw, 76px);
    line-height: 0.96;
    color: #201824;
    text-transform: uppercase;
    max-width: 10ch;
  }

  .lede {
    max-width: 56ch;
    font-size: 19px;
    line-height: 1.8;
    color: #4b4250;
  }

  .hero-panel {
    padding: 24px;
    border: 1px solid rgba(42, 24, 51, 0.1);
    background: rgba(255, 255, 255, 0.5);
  }

  .hero-panel h2,
  .section h2,
  .form-panel h2 {
    margin: 0 0 14px;
    font-size: 20px;
    color: #201824;
  }

  .hero-panel ul,
  .section ul {
    margin: 0;
    padding-left: 20px;
    line-height: 1.8;
    color: #4b4250;
  }

  .layout {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
    gap: 42px;
    margin-top: 36px;
    align-items: start;
  }

  .section + .section {
    margin-top: 28px;
  }

  .section {
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(42, 24, 51, 0.08);
  }

  .section p {
    margin: 0;
    line-height: 1.8;
    color: #4b4250;
  }

  .section p + p {
    margin-top: 14px;
  }

  .kicker {
    margin-bottom: 10px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 700;
    color: #6f1f8f;
  }

  .fit-note {
    margin-top: 18px;
    padding-left: 18px;
    border-left: 2px solid rgba(111, 31, 143, 0.18);
  }

  .form-panel {
    border: 1px solid rgba(42, 24, 51, 0.1);
    background: rgba(255, 255, 255, 0.72);
    padding: 28px;
  }

  .form-intro {
    margin: 0 0 22px;
    color: #4b4250;
    line-height: 1.75;
  }

  form {
    display: grid;
    gap: 18px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field label,
  .fieldset-title {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #372d3d;
  }

  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(42, 24, 51, 0.14);
    background: rgba(255, 255, 255, 0.95);
    color: #241d28;
    padding: 13px 14px;
    font: inherit;
    line-height: 1.5;
    border-radius: 0;
  }

  textarea {
    min-height: 132px;
    resize: vertical;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-color: rgba(111, 31, 143, 0.55);
    box-shadow: 0 0 0 3px rgba(111, 31, 143, 0.08);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .chip {
    border: 1px solid rgba(42, 24, 51, 0.14);
    background: rgba(255, 255, 255, 0.95);
    padding: 10px 12px;
    font: inherit;
    color: #372d3d;
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
  }

  .chip.active {
    border-color: rgba(111, 31, 143, 0.55);
    color: #6f1f8f;
    background: rgba(111, 31, 143, 0.07);
  }

  .help {
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    color: #6e6174;
  }

  .submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    background: #201824;
    color: #fff;
    padding: 14px 18px;
    font: inherit;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
  }

  .architecture {
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid rgba(42, 24, 51, 0.1);
  }

  .architecture-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 20px;
  }

  .architecture-card {
    padding: 20px;
    border: 1px solid rgba(42, 24, 51, 0.1);
    background: rgba(255, 255, 255, 0.5);
  }

  .architecture-card h3 {
    margin: 0 0 10px;
    font-size: 16px;
    color: #201824;
  }

  .architecture-card p {
    margin: 0;
    color: #4b4250;
    line-height: 1.7;
  }

  .recommended {
    border-color: rgba(111, 31, 143, 0.28);
    background: rgba(111, 31, 143, 0.05);
  }

  @media (max-width: 960px) {
    .hero,
    .layout,
    .architecture-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 720px) {
    .page {
      padding-top: 28px;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .form-panel {
      padding: 22px;
    }
  }
</style>

<div class="page">
  <section class="hero">
    <div>
      <div class="eyebrow">12 Triangles / Contact</div>
      <h1>Apply to work together</h1>
      <div class="lede">
        12 Triangles partners with teams that have real operational drag, a
        clear owner, and a reason to act now. This intake helps determine fit,
        project shape, and likely value before we spend time on a call.
      </div>
    </div>

    <aside class="hero-panel">
      <h2>Best fit</h2>
      <ul>
        <li>Teams with a meaningful workflow bottleneck or product opportunity</li>
        <li>Founders or operators with a concrete problem, not just vague AI curiosity</li>
        <li>Organizations prepared to move within the next 30–90 days</li>
        <li>Projects with measurable upside in speed, quality, cost, or revenue</li>
      </ul>
    </aside>
  </section>

  <div class="layout">
    <div>
      <section class="section">
        <div class="kicker">How we evaluate fit</div>
        <h2>Serious projects have stakes</h2>
        <p>
          The strongest engagements are not defined by hype. They are defined by
          a real business constraint, a meaningful upside if solved well, and a
          buyer with enough ownership to move the work forward.
        </p>
        <p class="fit-note">
          We use this intake to understand urgency, value, complexity, and
          implementation risk before moving into discovery.
        </p>
      </section>

      <section class="section">
        <div class="kicker">Probably not a fit</div>
        <h2>If you’re just exploring casually</h2>
        <ul>
          <li>No internal owner or decision-maker attached to the work</li>
          <li>No budget path or no timeline beyond “sometime later”</li>
          <li>Looking for a generic chatbot because everyone else has one</li>
          <li>No real consequence if the problem remains unsolved</li>
        </ul>
      </section>

      <section class="section">
        <div class="kicker">Value vs. complexity</div>
        <h2>What the form is designed to surface</h2>
        <ul>
          <li>Business stakes and urgency</li>
          <li>Expected upside and where it comes from</li>
          <li>Decision ownership and buying readiness</li>
          <li>Systems involved, constraints, and implementation shape</li>
        </ul>
      </section>
    </div>

    <div class="form-panel">
      <h2>Client intake</h2>
      <p class="form-intro">
        Frontend-first implementation for now. The structure is designed so it
        can be wired to Formspree immediately or upgraded later to Supabase for
        lead scoring, storage, and follow-up workflows.
      </p>

      <form>
        <div class="grid">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your full name" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" />
          </div>
        </div>

        <div class="grid">
          <div class="field">
            <label for="company">Company</label>
            <input id="company" name="company" type="text" placeholder="Company name" />
          </div>
          <div class="field">
            <label for="role">Role</label>
            <input id="role" name="role" type="text" placeholder="Founder, operator, product lead…" />
          </div>
        </div>

        <div class="field">
          <label for="website">Website</label>
          <input id="website" name="website" type="url" placeholder="https://yourcompany.com" />
        </div>

        <div class="field">
          <div class="fieldset-title">What kind of help are you looking for?</div>
          <div class="chips">
            {#each serviceOptions as option}
              <button
                type="button"
                class:active={state.services.includes(option)}
                class="chip"
                on:click={() => toggleSelection('services', option)}>{option}</button>
            {/each}
          </div>
        </div>

        <div class="field">
          <label for="problem">What problem are you trying to solve?</label>
          <textarea
            id="problem"
            name="problem"
            placeholder="Describe the workflow bottleneck, product opportunity, or business problem in plain language."></textarea>
        </div>

        <div class="field">
          <label for="now">Why does this matter now?</label>
          <textarea
            id="now"
            name="why_now"
            placeholder="What changed? Why is this becoming a priority right now?"></textarea>
        </div>

        <div class="field">
          <label for="stakes">What happens if nothing changes in the next 6–12 months?</label>
          <textarea
            id="stakes"
            name="stakes"
            placeholder="This helps surface urgency, cost of delay, and what is actually at stake."></textarea>
        </div>

        <div class="field">
          <label for="current-state">What have you already tried?</label>
          <textarea
            id="current-state"
            name="current_state"
            placeholder="Existing processes, tools, experiments, vendors, or internal attempts."></textarea>
        </div>

        <div class="field">
          <label for="systems">What systems, tools, or workflows are involved?</label>
          <textarea
            id="systems"
            name="systems"
            placeholder="CRMs, support systems, internal tools, spreadsheets, APIs, data sources, etc."></textarea>
        </div>

        <div class="field">
          <div class="fieldset-title">Where do you expect the upside?</div>
          <div class="chips">
            {#each outcomeOptions as option}
              <button
                type="button"
                class:active={state.outcomes.includes(option)}
                class="chip"
                on:click={() => toggleSelection('outcomes', option)}>{option}</button>
            {/each}
          </div>
        </div>

        <div class="grid">
          <div class="field">
            <label for="impact">Estimated upside if solved well</label>
            <select id="impact" name="impact">
              <option value="">Select one</option>
              <option>Under $25k</option>
              <option>$25k–$100k</option>
              <option>$100k–$500k</option>
              <option>$500k+</option>
              <option>Hard to quantify yet</option>
            </select>
          </div>
          <div class="field">
            <label for="timeline">Desired timeline</label>
            <select id="timeline" name="timeline">
              <option value="">Select one</option>
              <option>Immediately</option>
              <option>Within 30 days</option>
              <option>Within 90 days</option>
              <option>This quarter</option>
              <option>Exploring for later</option>
            </select>
          </div>
        </div>

        <div class="grid">
          <div class="field">
            <label for="owner">Who owns the decision?</label>
            <input id="owner" name="decision_owner" type="text" placeholder="Name, role, or buying structure" />
          </div>
          <div class="field">
            <label for="budget">Budget range</label>
            <select id="budget" name="budget_range">
              <option value="">Select one</option>
              <option>Under $10k</option>
              <option>$10k–$25k</option>
              <option>$25k–$50k</option>
              <option>$50k–$100k</option>
              <option>$100k+</option>
              <option>Not defined yet</option>
            </select>
          </div>
        </div>

        <div class="grid">
          <div class="field">
            <label for="constraints">Compliance / security / data constraints</label>
            <select id="constraints" name="constraints">
              <option value="">Select one</option>
              <option>Minimal</option>
              <option>Moderate</option>
              <option>High</option>
              <option>Unknown</option>
            </select>
          </div>
          <div class="field">
            <label for="data-state">Current data quality</label>
            <select id="data-state" name="data_state">
              <option value="">Select one</option>
              <option>Clean / structured</option>
              <option>Mixed / partly structured</option>
              <option>Messy / fragmented</option>
              <option>Unknown</option>
            </select>
          </div>
        </div>

        <div class="field">
          <label for="fit">Why do you think 12 Triangles is the right fit?</label>
          <textarea
            id="fit"
            name="why_12_triangles"
            placeholder="This helps us understand intent, context, and what resonated."></textarea>
        </div>

        <div class="field">
          <label for="anything-else">Anything else we should know?</label>
          <textarea
            id="anything-else"
            name="anything_else"
            placeholder="Important context, timing, stakeholders, or background."></textarea>
        </div>

        <input type="hidden" name="selected_services" value={state.services.join(', ')} />
        <input type="hidden" name="expected_outcomes" value={state.outcomes.join(', ')} />

        <p class="help">
          Recommended submission architecture: start with a simple form endpoint
          for speed, then promote the same payload to a database-backed intake
          pipeline when you’re ready to score and automate lead follow-up.
        </p>

        <button class="submit" type="submit">Submit intake →</button>
      </form>
    </div>
  </div>

  <section class="architecture">
    <div class="kicker">Submission architecture recommendation</div>
    <h2>Recommended rollout</h2>
    <div class="architecture-grid">
      <div class="architecture-card recommended">
        <h3>Phase 1 · Fastest path</h3>
        <p>
          Wire this exact form to Formspree or a similar endpoint. Lowest lift,
          fastest launch, and enough to start qualifying leads immediately.
        </p>
      </div>
      <div class="architecture-card">
        <h3>Phase 2 · Better internal workflow</h3>
        <p>
          Route submissions into Supabase with a lead table, intake status,
          simple scoring fields, and optional notification automation.
        </p>
      </div>
      <div class="architecture-card">
        <h3>Phase 3 · Full qualification engine</h3>
        <p>
          Add scoring logic for urgency, value, complexity, and readiness, then
          trigger follow-up sequences or internal summaries automatically.
        </p>
      </div>
    </div>
  </section>
</div>
