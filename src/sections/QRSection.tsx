import { venue } from '../constants/siteContent'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

export function QRSection() {
  return (
    <div className="px-8 pb-4">
      <div className="mx-auto w-full max-w-[180px] rounded-[14px] border-[3px] border-amber-950 bg-white p-3">
        <ImagePlaceholder
          src={venue.qrImage}
          alt="QR code lokasi venue"
          aspectRatio="aspect-square"
          fit="contain"
          className="rounded-sm"
        />
      </div>
      <p className="mt-4 text-center font-body text-xs text-muted-brown">
        {venue.qrLabel}
      </p>
    </div>
  )
}
