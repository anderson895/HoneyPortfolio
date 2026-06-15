import { services, skillGroups, toolGroups } from '../data'
import { ServiceIcon, CheckIcon } from './Icons'
import SectionHeading from './SectionHeading'

export default function Offer() {
  return (
    <section id="offer" className="relative scroll-mt-20 bg-cream-50/70 py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I Offer"
          title="Services built to grow your brand"
          description="From eye-catching design to full social media management — everything you need to build a strong, consistent, and engaging online presence."
        />

        {/* Services grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group card hover:-translate-y-1 hover:border-forest-200 hover:shadow-xl hover:shadow-forest-600/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-500 transition-colors group-hover:bg-forest-500 group-hover:text-cream-50">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="mt-5 font-display text-xl text-forest-700">{service.title}</h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-forest-600/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills + Tools */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Skills */}
          <div className="reveal">
            <h3 className="font-display text-2xl text-forest-700">Skills &amp; Expertise</h3>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-forest-100 bg-cream-50 px-4 py-1.5 text-sm text-forest-600 transition-colors hover:border-forest-300 hover:bg-forest-50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="reveal">
            <h3 className="font-display text-2xl text-forest-700">Tools &amp; Software</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {toolGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-forest-100 bg-cream-50 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400">
                    {group.title}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {group.tools.map((tool) => (
                      <li key={tool} className="flex items-center gap-2 text-sm text-forest-600/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-forest-300" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-forest-500/80">
              Professional equipment ensures high-quality visuals, stable footage, and engaging
              content production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
