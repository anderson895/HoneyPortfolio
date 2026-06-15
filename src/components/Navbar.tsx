import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { ArrowIcon } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-forest-100 bg-cream-100/95 py-3 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl italic leading-none text-forest-600">Honey</span>
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-forest-400 sm:block">
            Sy
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-forest-700'
                    : 'text-forest-600/70 hover:text-forest-700'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-forest-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden lg:inline-flex">
          Let’s Work Together
          <ArrowIcon />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-200 text-forest-600 lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-100 transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[80vh] border-t border-forest-100 shadow-xl shadow-forest-900/5' : 'max-h-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-forest-700 hover:bg-cream-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Let’s Work Together
              <ArrowIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
