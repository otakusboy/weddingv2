interface BlueBannerProps {
  text?: string
}

export function BlueBanner({ text = 'Inviting you to' }: BlueBannerProps) {
  return (
    <div className="bg-banner-blue px-6 py-2.5 text-center">
      <p className="font-body text-sm font-medium tracking-wide text-white">
        {text}
      </p>
    </div>
  )
}
