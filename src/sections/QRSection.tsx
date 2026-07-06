import { venue } from '../constants/siteContent'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

export function QRSection() {
  return (
    <div className="px-8 pb-4">
      <div className="mx-auto w-full max-w-[180px]">
        <ImagePlaceholder
          src={venue.qrImage}
          alt="QR code lokasi venue"
          aspectRatio="aspect-square"
          className="rounded-sm"
        />
      </div>
      <p className="mt-4 text-center font-body text-xs text-muted-brown">
        {venue.qrLabel}
      </p>
    </div>
  )
}
