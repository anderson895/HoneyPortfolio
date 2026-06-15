import { useState } from 'react'
import { projects, logoSamples, coverSamples, viewSamples, clients, videoAd, reels } from '../data'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'

type Tab = 'all' | 'graphics' | 'logos' | 'covers'

const tabs: { id: Tab; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'graphics', label: 'Graphics & Pubmats' },
  { id: 'logos', label: 'Logo Design' },
  { id: 'covers', label: 'Cover Pages' },
]

export default function Projects() {
  const [tab, setTab] = useState<Tab>('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const showGraphics = tab === 'all' || tab === 'graphics'
  const showLogos = tab === 'all' || tab === 'logos'
  const showCovers = tab === 'all' || tab === 'covers'

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="My Projects"
          title="Work that speaks for itself"
          description="A selection of design, branding, and content I’ve created for brands, businesses, and organizations across Bacolod and beyond."
        />

        {/* Filter tabs */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                tab === t.id
                  ? 'bg-forest-500 text-cream-50'
                  : 'border border-forest-200 text-forest-600 hover:bg-cream-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Graphics & pubmats */}
        {showGraphics && (
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {projects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setLightbox(project.image)}
                className="reveal group relative block w-full overflow-hidden rounded-2xl border border-forest-100 text-left shadow-sm transition-all hover:shadow-xl hover:shadow-forest-600/10"
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.client}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-cream-200">
                    {project.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg leading-tight text-cream-50">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cream-200/90">{project.client}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Logos */}
        {showLogos && (
          <div className="mt-12">
            <h3 className="reveal mb-5 font-display text-2xl text-forest-700">Logo Design &amp; Enhancement</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {logoSamples.map((logo, i) => (
                <button
                  key={logo}
                  type="button"
                  onClick={() => setLightbox(logo)}
                  className="reveal group flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-forest-100 bg-cream-50 p-4 transition-all hover:border-forest-200 hover:shadow-lg hover:shadow-forest-600/10"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <img
                    src={logo}
                    alt={`Logo sample ${i + 1}`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Cover pages */}
        {showCovers && (
          <div className="mt-12">
            <h3 className="reveal mb-5 font-display text-2xl text-forest-700">Cover Pages &amp; Layouts</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coverSamples.map((cover, i) => (
                <button
                  key={cover}
                  type="button"
                  onClick={() => setLightbox(cover)}
                  className="reveal group overflow-hidden rounded-2xl border border-forest-100 shadow-sm transition-all hover:shadow-xl hover:shadow-forest-600/10"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={cover}
                    alt={`Cover page sample ${i + 1}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Video production */}
        {tab === 'all' && (
          <div className="mt-16">
            <h3 className="reveal mb-5 font-display text-2xl text-forest-700">Video Production &amp; Editing</h3>

            {/* Featured advertisement (landscape) + highlight */}
            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div className="reveal overflow-hidden rounded-2xl border border-forest-100 bg-forest-900 shadow-lg">
                <video
                  src={videoAd}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-forest-900"
                />
                <div className="flex items-center justify-between bg-cream-50 px-5 py-3">
                  <p className="font-medium text-forest-700">Advertisement Video</p>
                  <span className="text-xs uppercase tracking-wider text-forest-400">Promo</span>
                </div>
              </div>

              <div className="reveal flex flex-col justify-center rounded-2xl border border-forest-100 bg-gradient-to-br from-forest-600 to-forest-800 p-8 text-cream-50">
                <p className="font-display text-5xl">50K+</p>
                <p className="mt-3 text-cream-200">
                  Video views generated across reels &amp; short-form content on Facebook and TikTok —
                  100% produced and edited in-house.
                </p>
              </div>
            </div>

            {/* Reels gallery (portrait 9:16) */}
            <div className="reveal mt-10 flex items-center justify-between">
              <h4 className="font-display text-xl text-forest-700">Reels — FB &amp; TikTok</h4>
              <span className="text-xs uppercase tracking-wider text-forest-400">Short-form · 9:16</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {reels.map((reel, i) => (
                <div
                  key={reel}
                  className="reveal group overflow-hidden rounded-2xl border border-forest-100 bg-forest-900 shadow-sm transition-all hover:shadow-xl hover:shadow-forest-600/10"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <video
                    src={reel}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] w-full bg-forest-900 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Views / reach proof */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {viewSamples.map((view, i) => (
                <button
                  key={view}
                  type="button"
                  onClick={() => setLightbox(view)}
                  className="reveal group overflow-hidden rounded-2xl border border-forest-100 shadow-sm transition-all hover:shadow-lg hover:shadow-forest-600/10"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <img
                    src={view}
                    alt={`Reel reach & views ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Clients */}
        <div className="reveal mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-forest-400">
            Brands &amp; Organizations I’ve Worked With
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {clients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-forest-100 bg-cream-50 px-4 py-2 text-sm font-medium text-forest-600"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}
