import { closing } from '../constants/siteContent'
import { SectionDivider } from '../components/SectionDivider'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

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

      <div className="mx-auto mt-10 w-12">
        <ImagePlaceholder
          src={closing.footerImage}
          alt="Ilustrasi penutup"
          aspectRatio="aspect-[3/2]"
          className="rounded-sm"
        />
      </div>
    </div>
  )
}
