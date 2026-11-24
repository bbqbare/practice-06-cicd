export function slugify(text) {
  if (typeof text !== 'string') {
    throw new TypeError('text має бути рядком');
  }

  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
