import { games } from './games/registry.js';

const gameList = document.getElementById('game-list');

if (gameList) {
  for (const game of games) {
    const item = document.createElement('li');
    item.className = 'game-item';

    const link = document.createElement('a');
    link.href = game.path;
    link.textContent = game.name;

    const description = document.createElement('p');
    description.textContent = game.description;

    item.append(link, description);
    gameList.append(item);
  }
}
