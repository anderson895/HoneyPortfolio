type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: Props) {
  const isCenter = align === 'center'
  return (
    <div
      className={`reveal flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      <span className="eyebrow">
        <span className="h-px w-7 bg-forest-300" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl leading-tight text-forest-700 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed text-forest-600/80 ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
