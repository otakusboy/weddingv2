import { weddingDate } from '../constants/siteContent'
import { ImagePlaceholder } from './ImagePlaceholder'

export function CalendarStrip() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <ImagePlaceholder
        src={weddingDate.calendarImage}
        alt={`Kalender ${weddingDate.monthYear}`}
        aspectRatio="aspect-[300/109]"
        className="rounded-sm"
      />
    </div>
  )
}
