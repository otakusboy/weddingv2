import { SectionShell } from './components/SectionShell'
import { HeroCover } from './sections/HeroCover'
import { InviteContentSection } from './sections/InviteContentSection'
import { GuestFlowSection } from './sections/GuestFlowSection'

function App() {
  return (
    <div className="h-dvh bg-ivory sm:h-screen sm:bg-black sm:p-8">
      <main className="mx-auto h-full w-full snap-y snap-mandatory overflow-y-auto scroll-smooth bg-ivory sm:max-w-[460px] sm:rounded-[25px]">
        <SectionShell id="hero" className="justify-center">
          <HeroCover />
        </SectionShell>

        <SectionShell id="invite-section" flow>
          <InviteContentSection />
        </SectionShell>

        <SectionShell id="guest-flow" flow>
          <GuestFlowSection />
        </SectionShell>
      </main>
    </div>
  )
}

export default App
