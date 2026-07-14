interface ImagePlaceholderProps {
  src?: string | null
  alt: string
  className?: string
  aspectRatio?: string
  /** How the image fills its box — use "contain" when you must not crop */
  fit?: 'cover' | 'contain'
  fadeIn?: boolean
  floatHint?: boolean
}

export function ImagePlaceholder({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  fit = 'cover',
  fadeIn = false,
  floatHint = false,
}: ImagePlaceholderProps) {
  const animationClass = [
    fadeIn ? 'animate-fade-in-up' : '',
    floatHint ? 'animate-scroll-hint' : '',
  ]
    .filter(Boolean)
    .join(' ')
  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover'

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`block w-full ${fitClass} ${aspectRatio} ${animationClass} ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex w-full items-center justify-center bg-placeholder/60 ${aspectRatio} ${animationClass} ${className}`}
      role="img"
      aria-label={alt}
    />
  )
}
