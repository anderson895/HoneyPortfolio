import { testimonials } from '../data'
import { QuoteIcon, StarIcon } from './Icons'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-20 bg-cream-50/70 py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Kind words from the brands and businesses I’ve had the pleasure of working with."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="reveal flex flex-col rounded-3xl border border-forest-100 bg-cream-50 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-600/10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <QuoteIcon className="h-9 w-9 text-forest-200" />
              <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-forest-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-forest-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-500 font-display text-lg text-cream-50">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-forest-700">{t.author}</p>
                  <p className="text-sm text-forest-500/80">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-forest-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
