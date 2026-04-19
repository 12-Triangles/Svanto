/** Dispatched so Home can clear sticky project hero (nav hover, etc.). */
export const HOME_HERO_RESET = 'svanto-home-hero-reset'

export function dispatchHomeHeroReset() {
  window.dispatchEvent(new CustomEvent(HOME_HERO_RESET))
}
