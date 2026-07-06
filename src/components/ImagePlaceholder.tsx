interface ImagePlaceholderProps {
  src?: string | null
  alt: string
  className?: string
  aspectRatio?: string
  fadeIn?: boolean
  floatHint?: boolean
}

export function ImagePlaceholder({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/5]',
  fadeIn = false,
  floatHint = false,
}: ImagePlaceholderProps) {
  const animationClass = [
    fadeIn ? 'animate-fade-in-up' : '',
    floatHint ? 'animate-scroll-hint' : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`block w-full object-cover ${aspectRatio} ${animationClass} ${className}`}
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
