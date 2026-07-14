import { VenueSection } from './VenueSection'
import { QRSection } from './QRSection'
import { RSVPSection } from './RSVPSection'
import { ClosingSection } from './ClosingSection'

export function GuestFlowSection() {
  return (
    <>
      <VenueSection />
      <QRSection />
      <div>
        <RSVPSection />
        <ClosingSection />
      </div>
    </>
  )
}
