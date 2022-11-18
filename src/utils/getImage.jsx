import placeholder from "../img/palomitas-de-maiz.png";
export function getImage(width, path) {
  return path ? `https:///image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
