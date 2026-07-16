import { closing } from '../constants/siteContent'
import { SectionDivider } from '../components/SectionDivider'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

export function ClosingSection() {
  return (
    <div className="px-8 pb-10 pt-8">
      <SectionDivider />

      <div className="mt-6 space-y-4 text-center">
        <p className="font-body text-sm leading-relaxed text-warm-brown">
          {closing.paragraphs[0]}
        </p>
        <p className="font-body text-sm leading-relaxed text-warm-brown">
          {closing.paragraphs[1]}{' '}
          <span className="font-bold">{closing.noGiftsNote}</span>
        </p>
      </div>

      <p className="mt-8 text-center font-body text-sm text-warm-brown">
        {closing.signOff}
      </p>
      <p className="mt-4 text-center font-script text-3xl text-espresso">
        {closing.names}
      </p>

      <div className="mx-auto mt-10 w-24">
        <ImagePlaceholder
          src={closing.footerImage}
          alt="Ilustrasi penutup"
          aspectRatio="aspect-auto"
          fit="contain"
          className="h-auto w-full"
          floatHint
        />
      </div>
    </div>
  )
}
