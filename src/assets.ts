/**
 * Single source of truth for media URLs.
 *
 * In production we serve everything from Cloudinary (so the heavy image/video
 * files never have to live in git or on Vercel). When `VITE_CLOUDINARY_CLOUD_NAME`
 * is set, `asset()` returns an optimized Cloudinary URL; otherwise it falls back
 * to the local files under `public/assets/` so the site still works in dev.
 *
 * Paths passed to `asset()` are relative to `public/assets/`, e.g.
 *   asset('projects/social-1.png')  ->  /assets/projects/social-1.png            (dev)
 *                                   ->  https://res.cloudinary.com/<cloud>/...   (prod)
 *
 * The Cloudinary public_id mirrors that path (minus extension) under a single
 * folder, which is exactly what `scripts/upload-to-cloudinary.mjs` produces.
 */
const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined
const FOLDER = 'honey-portfolio'

const VIDEO_RE = /\.(mp4|mov|webm|m4v)$/i

function stripExt(path: string): string {
  return path.replace(/\.[^/.]+$/, '')
}

export function asset(path: string): string {
  if (!CLOUD) return `/assets/${path}`

  const publicId = `${FOLDER}/${stripExt(path)}`

  if (VIDEO_RE.test(path)) {
    // q_auto lets Cloudinary pick an efficient bitrate; deliver as mp4.
    return `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto/${publicId}.mp4`
  }

  // f_auto = best format (AVIF/WebP) per browser, q_auto = smart compression.
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto/${publicId}`
}
