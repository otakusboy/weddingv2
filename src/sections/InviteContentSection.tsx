import { CountdownTimer } from '../components/CountdownTimer'
import { CalendarStrip } from '../components/CalendarStrip'
import { SectionDivider } from '../components/SectionDivider'
import { events, invitation, quote } from '../constants/siteContent'

/** Invite section layout — matches the reference image order */
export function InviteContentSection() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 px-8 py-8">
      <CountdownTimer />

      <div className="text-center">
        <p className="font-arabic text-[32px] leading-loose text-espresso">
          {quote.arabic}
        </p>
        <p className="mt-4 font-body text-sm italic leading-relaxed text-warm-brown">
          {quote.text}
        </p>
        <p className="mt-3 font-body text-sm text-muted-brown">
          {quote.source}
        </p>
      </div>

      <SectionDivider />

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
  )
}
