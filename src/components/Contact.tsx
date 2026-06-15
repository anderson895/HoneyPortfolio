import { useState } from 'react'
import { profile } from '../data'
import SectionHeading from './SectionHeading'
import { MailIcon, LinkedInIcon, FacebookIcon, LocationIcon, ArrowIcon } from './Icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open the user's email client pre-filled — no backend required.
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'your website'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const contactMethods = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <LinkedInIcon className="h-5 w-5" />,
      label: 'LinkedIn',
      value: profile.linkedin,
      href: 'https://www.linkedin.com/',
    },
    {
      icon: <FacebookIcon className="h-5 w-5" />,
      label: 'Facebook',
      value: profile.facebook,
      href: 'https://www.facebook.com/',
    },
  ]

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s create something great"
          description="Have a project in mind or need a creative partner for your brand? I’d love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info card */}
          <div className="reveal flex flex-col justify-between rounded-3xl border border-forest-100 bg-gradient-to-br from-forest-600 to-forest-800 p-8 text-cream-50 md:p-10">
            <div>
              <h3 className="font-display text-2xl">{profile.name}</h3>
              <p className="mt-1 text-sm text-cream-200">{profile.title}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-cream-200">
                <LocationIcon className="h-4 w-4" />
                {profile.location}
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {contactMethods.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-cream-50/15 bg-cream-50/5 p-4 transition-colors hover:bg-cream-50/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50">
                      {m.icon}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-cream-200/80">{m.label}</span>
                      <span className="block font-medium">{m.value}</span>
                    </span>
                    <ArrowIcon className="ml-auto h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="reveal rounded-3xl border border-forest-100 bg-cream-50 p-8 md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-forest-500">
                  <MailIcon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-forest-700">Thank you!</h3>
                <p className="mt-2 max-w-sm text-forest-600/80">
                  Your email app should have opened with your message ready to send. I’ll get back to
                  you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your Name"
                    id="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Juan Dela Cruz"
                  />
                  <Field
                    label="Email Address"
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-forest-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, goals, or how I can help…"
                    className="w-full resize-none rounded-xl border border-forest-200 bg-cream-100/50 px-4 py-3 text-forest-700 outline-none transition-colors placeholder:text-forest-400/60 focus:border-forest-400 focus:bg-cream-50"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <ArrowIcon />
                </button>
                <p className="text-center text-xs text-forest-500/70">
                  Prefer email? Reach me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="font-medium text-forest-600 underline">
                    {profile.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-forest-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-forest-200 bg-cream-100/50 px-4 py-3 text-forest-700 outline-none transition-colors placeholder:text-forest-400/60 focus:border-forest-400 focus:bg-cream-50"
      />
    </div>
  )
}
