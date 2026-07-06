import { venue } from '../constants/siteContent'

export function VenueSection() {
  return (
    <div className="px-8 py-8 text-center">
      <h2 className="font-script text-4xl text-espresso">Lokasi</h2>
      <p className="mt-6 font-body text-base font-semibold text-espresso">
        {venue.name}
      </p>
      <p className="mt-3 font-body text-xs leading-relaxed text-muted-brown">
        {venue.address}
      </p>
      <a
        href={venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block font-body text-xs uppercase tracking-wider text-maroon underline underline-offset-4 transition-colors hover:text-maroon-dark"
      >
        Buka di Google Maps
      </a>
    </div>
  )
}
