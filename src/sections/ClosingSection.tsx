import { closing } from '../constants/siteContent'
import { SectionDivider } from '../components/SectionDivider'

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="mx-auto mt-10 h-8 w-12 text-espresso/50"
      aria-hidden="true"
    >
      <path d="M2 6h44v20H2z" />
      <path d="M2 6l22 14L46 6" />
      <path d="M8 26l6-8M40 26l-6-8" strokeLinecap="round" />
    </svg>
  )
}

export function ClosingSection() {
  return (
    <div className="px-8 py-8">
      <SectionDivider />

      <div className="mt-10 space-y-5 text-center">
        {closing.paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="font-body text-sm leading-relaxed text-warm-brown"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-8 text-center font-body text-sm text-warm-brown">
        {closing.signOff}
      </p>
      <p className="mt-2 text-center font-script text-3xl text-espresso">
        {closing.names}
      </p>

      <EnvelopeIcon />
    </div>
  )
}
