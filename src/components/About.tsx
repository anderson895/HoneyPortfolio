import { profile, whyHireMe, resultStats, heroPhoto } from '../data'
import { LeafDecoration } from './Icons'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Portrait with leaf accent */}
          <div className="reveal relative order-2 lg:order-1">
            <LeafDecoration className="absolute -left-8 -top-10 hidden h-48 w-28 text-forest-300 md:block" />
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-[36px] border border-forest-100 shadow-xl shadow-forest-600/15">
                <img src={heroPhoto} alt={profile.name} className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-forest-100 bg-forest-500 px-6 py-4 text-cream-50 shadow-xl shadow-forest-600/30">
                <p className="font-display text-3xl">4+</p>
                <p className="text-xs tracking-wide text-cream-200">Years of Creative Work</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-7 bg-forest-300" />
                About Me
              </span>
              <h2 className="mt-4 font-display text-3xl leading-tight text-forest-700 sm:text-4xl md:text-[2.75rem]">
                A creative marketer who turns ideas into results.
              </h2>
            </div>

            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-forest-600/85">
              {profile.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                As a Marketing Management graduate and Certified Digital Marketing Professional, I
                blend creative execution with marketing strategy — producing work that looks
                beautiful and performs.
              </p>
            </div>

            {/* Why hire me */}
            <div className="reveal mt-9 grid gap-4 sm:grid-cols-2">
              {whyHireMe.map((card) => (
                <div key={card.title} className="card hover:border-forest-200 hover:shadow-lg hover:shadow-forest-600/5">
                  <h3 className="font-display text-lg text-forest-700">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-600/80">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results band */}
        <div className="reveal mt-20 rounded-3xl border border-forest-100 bg-gradient-to-br from-forest-600 to-forest-800 px-6 py-10 text-cream-50 md:px-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {resultStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-cream-200/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
