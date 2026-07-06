import { CountdownTimer } from '../components/CountdownTimer'
import { CalendarStrip } from '../components/CalendarStrip'
import { SectionDivider } from '../components/SectionDivider'
import { events, invitation, quote } from '../constants/siteContent'

export function InviteContentSection() {
  return (
    <div className="flex flex-1 flex-col justify-between overflow-y-auto px-8 py-6">
      <div className="flex flex-col gap-5">
        <p className="text-center font-body text-sm leading-relaxed text-espresso">
          {invitation.intro}
        </p>

        <CalendarStrip />

        <div className="text-center">
          <h3 className="font-script text-[2.75rem] leading-none text-espresso">
            {invitation.eventTitle}
          </h3>
          <p className="mt-4 font-body text-sm font-semibold text-espresso">
            {invitation.eventSchedule}
          </p>
          <p className="mt-3 font-body text-sm text-espresso">
            <span className="font-semibold">Akad:</span> {events.akad.time}
          </p>
          <p className="mt-1 font-body text-sm text-espresso">
            <span className="font-semibold">Resepsi:</span> {events.resepsi.time}
          </p>
        </div>
      </div>

      <div className="shrink-0 py-6">
        <SectionDivider />
      </div>

      <div className="flex flex-col gap-5">
        <CountdownTimer />

        <div className="text-center">
          <p className="font-body text-base leading-loose text-espresso">
            {quote.arabic}
          </p>
          <p className="mt-4 font-body text-[11px] italic leading-relaxed text-warm-brown">
            {quote.text}
          </p>
          <p className="mt-3 font-body text-[11px] text-muted-brown">
            {quote.source}
          </p>
        </div>
      </div>
    </div>
  )
}
