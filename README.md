# Honey Jeremae M. Sy — Portfolio

A single-page portfolio for **Honey Jeremae M. Sy**, Marketing Management graduate and
Certified Digital Marketing Professional. Built with **React + TypeScript + Tailwind CSS**
(Vite).

## Sections

- **Home** — hero with portrait, floating credential badges, headline stats, and a credential marquee
- **About** — bio, "Why hire me" cards, and a results band (3× growth, 50K+ views, etc.)
- **What I Offer** — six service areas plus Skills & Expertise and Tools & Software
- **My Projects** — filterable gallery (Graphics & Pubmats / Logos / Cover Pages) with a lightbox,
  video showcase (advertisement + reel), reach/views proof, and a client list
- **Testimonials** — client quotes with ratings
- **Contact** — info card + message form (opens the visitor's mail client, no backend needed)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/      UI sections (Navbar, Hero, About, Offer, Projects, Testimonials, Contact, Footer)
  hooks/useReveal  scroll-reveal animation observer
  data.ts          all editable content (profile, services, projects, testimonials, …)
  index.css        Tailwind layers + theme utilities
public/assets/     images and videos used across the site
```

## Editing content

Almost all copy, services, project entries, and testimonials live in **`src/data.ts`** —
update that file to change what's shown. Images live in `public/assets/`.

## Design

- **Palette:** cream / off-white backgrounds with forest-green accents
- **Type:** Playfair Display (display) + Cormorant Garamond (serif quotes) + Inter (body)
- Theme tokens are defined in `tailwind.config.js` (`cream`, `forest`, fonts, animations).

## Media hosting (Cloudinary)

The images and videos are **not committed to git** — they're too heavy for GitHub and Vercel.
Instead they live on [Cloudinary](https://cloudinary.com) (free tier is plenty), and the site
builds their URLs at runtime.

How it works:

- `src/assets.ts` exposes a single `asset('projects/social-1.png')` helper.
- If `VITE_CLOUDINARY_CLOUD_NAME` is set, it returns an **optimized Cloudinary URL**
  (`f_auto,q_auto` for images, `q_auto` for video).
- If it's **not** set, it falls back to local files in `public/assets/`, so the site still
  works in dev without Cloudinary.

### One-time setup

1. Create a free Cloudinary account and open the **Dashboard** to get your
   *Cloud name*, *API Key*, and *API Secret*.
2. Copy the env template and fill it in:
   ```bash
   cp .env.example .env
   ```
3. Upload all media (reads `public/assets/`, uploads under the `honey-portfolio/` folder):
   ```bash
   npm run upload:assets
   ```

To change or add media later: drop files into `public/assets/` (same folder layout),
re-run `npm run upload:assets`, and reference them with `asset('your/file.png')`.

## Deploying to Vercel

1. Push this repo to GitHub. The heavy folders (`public/assets/`, `VISUALS AND VIDEOS/`,
   `referenceUI/`) are git-ignored, so the repo stays small.
2. In Vercel, **Import** the repo. Framework preset: **Vite** (auto-detected).
   Build command `npm run build`, output dir `dist`.
3. Add an Environment Variable in Vercel:
   - `VITE_CLOUDINARY_CLOUD_NAME` = your Cloudinary cloud name
   (The API key/secret are **not** needed on Vercel — they're only for the upload script.)
4. Deploy. Images and videos are served straight from Cloudinary's CDN.

## Notes

- Large source `.MOV` reels and raw files from the original brief are **not** uploaded; only
  web-friendly `.mp4` and compressed images under `public/assets/` are used.
- The contact form uses a `mailto:` link, so no server or API key is required.
