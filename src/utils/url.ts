const raw = import.meta.env.BASE_URL || '/';

/** BASE_URL guaranteed to end with a trailing slash. */
export const base = raw.endsWith('/') ? raw : `${raw}/`;

/** Resolve a public asset path against the site base. */
export const asset = (path: string) => `${base}${path.replace(/^\//, '')}`;
