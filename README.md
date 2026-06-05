# DarthGames

This repository hosts multiple games that can be played in a web browser.

## Local development

Serve the repository with any static file server from the project root, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Game pattern

- Each game lives in its own folder under `/games/<game-name>/`.
- The game entry page should be `/games/<game-name>/index.html`.
- Add the game to `/games/registry.js` so it appears on the library homepage.
