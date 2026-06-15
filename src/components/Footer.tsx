import { profile, navLinks } from '../data'
import { MailIcon, LinkedInIcon, FacebookIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-cream-50/70">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="font-display text-2xl italic text-forest-600">
              Honey Jeremae Sy
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-forest-600/80">
              Certified Digital Marketing Professional helping brands grow through creative design,
              compelling content, and strategic marketing.
            </p>
            <div className="mt-5 flex gap-3">
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-forest-600/80 transition-colors hover:text-forest-700">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-400">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm text-forest-600/80">
              <li>{profile.location}</li>
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-forest-700">
                  {profile.email}
                </a>
              </li>
              <li>{profile.title}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-forest-100 pt-6 text-sm text-forest-500/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Honey Jeremae M. Sy. All rights reserved.</p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  )
}
