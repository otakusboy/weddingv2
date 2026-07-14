import { weddingDate } from '../constants/siteContent'
import { ImagePlaceholder } from './ImagePlaceholder'

export function CalendarStrip() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <h2 className="mb-5 text-center font-script text-[2.75rem] leading-none text-espresso">
        {weddingDate.monthYear}
      </h2>
      <ImagePlaceholder
        src={weddingDate.calendarImage}
        alt={`Kalender ${weddingDate.monthYear}`}
        aspectRatio="aspect-[300/109]"
        fit="contain"
        className="rounded-sm"
      />
    </div>
  )
}
