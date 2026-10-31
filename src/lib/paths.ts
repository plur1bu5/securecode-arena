/** Build a public URL that works both locally and under a GitHub Pages project path. */
export function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
