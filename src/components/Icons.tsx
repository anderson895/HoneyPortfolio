type IconProps = {
  className?: string
}

const base = 'h-6 w-6'

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const cls = className ?? base
  switch (name) {
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-4.2-4-7.4-9-7.4Z" />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
          <circle cx="10" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="14" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="11" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'share':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" />
        </svg>
      )
    case 'film':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
        </svg>
      )
    case 'camera':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M4 8h2.5l1.2-1.8a1 1 0 0 1 .83-.45h6.94a1 1 0 0 1 .83.45L17.5 8H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M3 11v2a1 1 0 0 0 1 1h2l8 5V5L6 10H4a1 1 0 0 0-1 1Z" />
          <path d="M18 8a4 4 0 0 1 0 8" />
        </svg>
      )
    case 'sparkle':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={cls}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
        </svg>
      )
  }
}

export function LeafDecoration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M60 195C60 130 35 70 8 30c40 18 62 60 62 105"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M60 195c0-65 25-125 52-165-40 18-62 60-62 105"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <g opacity="0.45" fill="currentColor">
        <path d="M40 90c-8-4-18-3-26 2 8 5 18 6 26 2Z" />
        <path d="M50 120c-9-3-19-1-27 5 9 4 19 4 27-1Z" />
        <path d="M80 90c8-4 18-3 26 2-8 5-18 6-26 2Z" />
        <path d="M70 120c9-3 19-1 27 5-9 4-19 4-27-1Z" />
      </g>
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  )
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'h-8 w-8'}>
      <path d="M9.5 6C6.5 7.5 5 10 5 13v5h6v-6H8c0-2 .8-3.5 2.5-4.5L9.5 6Zm9 0C15.5 7.5 14 10 14 13v5h6v-6h-3c0-2 .8-3.5 2.5-4.5L18.5 6Z" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className ?? base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'h-5 w-5'}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9V9Z" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'h-5 w-5'}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'h-4 w-4'}>
      <path d="m12 2 2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2Z" />
    </svg>
  )
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className ?? 'h-4 w-4'}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
