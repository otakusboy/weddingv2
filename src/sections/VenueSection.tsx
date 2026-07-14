import { venue } from '../constants/siteContent'

export function VenueSection() {
  return (
    <div className="px-8 py-8 text-center">
      <h2 className="font-script text-4xl text-espresso">Lokasi</h2>
        <p className="mt-6 font-body text-2xl font-semibold text-espresso">
          {venue.name}
        </p>
      <p className="mx-auto mt-3 w-4/5 font-body text-xs leading-relaxed text-muted-brown">
        {venue.address}
      </p>
      <a
        href={venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block font-body text-xs uppercase tracking-wider text-amber-950 underline underline-offset-4 transition-colors hover:text-amber-950/80"
      >
        Buka di Google Maps
      </a>
    </div>
  )
}
