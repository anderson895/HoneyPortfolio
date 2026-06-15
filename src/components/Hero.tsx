import { profile, heroStats, floatingBadges, heroPhoto } from '../data'
import { ArrowIcon, LocationIcon, LinkedInIcon, FacebookIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* Soft background arc / blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-forest-100/50 blur-3xl" />
        <div className="absolute left-[-15%] top-1/3 h-[420px] w-[420px] rounded-full bg-cream-300/40 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-12 pb-16 md:pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left copy */}
        <div className="reveal">
          <span className="eyebrow mb-5">
            <span className="h-px w-7 bg-forest-300" />
            {profile.tagline}
          </span>

          <h1 className="font-display text-5xl leading-[1.05] text-forest-700 sm:text-6xl md:text-7xl">
            <span className="block italic">Honey</span>
            <span className="block">Jeremae Sy</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-600/85">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-forest-600/80">
            <span className="inline-flex items-center gap-2">
              <LocationIcon className="h-4 w-4 text-forest-400" />
              {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-forest-200 sm:block" />
            <span className="font-medium text-forest-600">{profile.title}</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Let’s Work Together
              <ArrowIcon />
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-200 text-forest-500 transition-colors hover:bg-forest-500 hover:text-cream-50"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-200 text-forest-500 transition-colors hover:bg-forest-500 hover:text-cream-50"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-200 text-forest-500 transition-colors hover:bg-forest-500 hover:text-cream-50"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right portrait */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* Arch frame */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-t-[200px] rounded-b-[36px] border border-forest-100 bg-forest-100 shadow-2xl shadow-forest-600/20">
              <img
                src={heroPhoto}
                alt={profile.name}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating badge — certification */}
            <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-forest-100 bg-cream-50/95 px-4 py-3 shadow-xl shadow-forest-600/10 backdrop-blur sm:block">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-forest-400">Certified</p>
              <p className="text-sm font-semibold text-forest-700">Digital Marketing Pro</p>
            </div>

            {/* Floating badge — award */}
            <div
              className="absolute -right-4 bottom-24 hidden animate-float rounded-2xl border border-forest-100 bg-cream-50/95 px-4 py-3 shadow-xl shadow-forest-600/10 backdrop-blur sm:block"
              style={{ animationDelay: '1.5s' }}
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-forest-400">Awarded</p>
              <p className="text-sm font-semibold text-forest-700">PACSB Outstanding Student</p>
            </div>

            {/* Stats strip */}
            <div className="relative z-10 mx-auto -mt-8 grid max-w-sm grid-cols-3 gap-2 rounded-2xl border border-forest-100 bg-cream-50 p-4 shadow-xl shadow-forest-600/10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl text-forest-600">{stat.value}</p>
                  <p className="mt-1 text-[0.65rem] leading-tight text-forest-500/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating credential marquee */}
      <div className="border-y border-forest-100 bg-cream-50/60 py-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
            {[...floatingBadges, ...floatingBadges].map((badge, i) => (
              <span
                key={i}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-forest-100 bg-cream-50 px-4 py-1.5 text-xs font-medium text-forest-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-forest-300" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
