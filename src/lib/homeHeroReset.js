import { writable } from 'svelte/store'

/**
 * Bumped whenever something outside Home wants Home to clear its sticky hero
 * (e.g. hovering the brand link in the nav). Home subscribes and reacts.
 */
export const homeHeroResetSignal = writable(0)

export function requestHomeHeroReset() {
  homeHeroResetSignal.update((n) => n + 1)
}
