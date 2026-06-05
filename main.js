import { games } from './games/registry.js';

const gameList = document.getElementById('game-list');

if (gameList) {
  if (games.length === 0) {
    const emptyItem = document.createElement('li');
    emptyItem.className = 'game-item';
    emptyItem.textContent = 'No games available yet. Check back soon.';
    gameList.append(emptyItem);
  }

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
