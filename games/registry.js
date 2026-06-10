/**
 * @typedef {Object} GameEntry
 * @property {string} name
 * @property {string} description
 * @property {string} path
 */

/** @type {GameEntry[]} */
export const games = [
  {
    name: 'Example Game',
    description: 'Starter page to demonstrate the game-folder pattern.',
    path: '/games/example-game/',
  },
  {
    name: 'Flappy Bird',
    description: 'Tap or press Space to flap the bird through the pipes.',
    path: '/games/flappy-bird/',
  },
];
