/**
 * Uploads everything under public/assets/ to Cloudinary so the heavy media
 * never has to be committed to git or deployed to Vercel.
 *
 * Each file is uploaded with a deterministic public_id that mirrors its path:
 *   public/assets/projects/social-1.png  ->  honey-portfolio/projects/social-1
 * which is exactly the URL that src/assets.ts builds at runtime.
 *
 * Credentials are read from environment variables or a local .env file:
 *   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 *
 * Run with:  npm run upload:assets
 */
import { v2 as cloudinary } from 'cloudinary'
import { readdirSync, statSync, existsSync, readFileSync } from 'node:fs'
import { join, relative, extname, sep } from 'node:path'

// --- tiny .env loader (avoids a dotenv dependency) ---------------------------
if (existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
    }
  }
}

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error(
    '\n✗ Missing Cloudinary credentials.\n' +
      '  Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET\n' +
      '  in a .env file (see .env.example) or your shell environment.\n',
  )
  process.exit(1)
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
})

const ASSETS_DIR = 'public/assets'
const FOLDER = 'honey-portfolio'
const VIDEO_EXT = new Set(['.mp4', '.mov', '.webm', '.m4v'])

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

const files = walk(ASSETS_DIR)
console.log(`\nUploading ${files.length} files to Cloudinary (cloud: ${CLOUDINARY_CLOUD_NAME})\n`)

let ok = 0
for (const file of files) {
  const rel = relative(ASSETS_DIR, file).split(sep).join('/')
  const publicId = `${FOLDER}/${rel.replace(/\.[^/.]+$/, '')}`
  const resourceType = VIDEO_EXT.has(extname(file).toLowerCase()) ? 'video' : 'image'

  try {
    await cloudinary.uploader.upload(file, {
      public_id: publicId,
      resource_type: resourceType,
      overwrite: true,
      invalidate: true,
    })
    ok++
    console.log(`  ✓ ${publicId}  (${resourceType})`)
  } catch (err) {
    console.error(`  ✗ ${publicId}  —  ${err.message ?? err}`)
  }
}

console.log(`\nDone. ${ok}/${files.length} uploaded.\n`)
if (ok < files.length) process.exit(1)
