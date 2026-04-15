export function createTile(game) {
  const div = document.createElement("div");
  div.className = "tile";
  div.innerText = game.name;

  div.onclick = () => window.open(game.url);

  return div;
}
