import { couple, hero } from '../constants/siteContent'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

export function HeroCover() {
  return (
    <div className="flex flex-1 flex-col items-center px-8 pb-10 pt-8">
      <p className="font-script text-2xl text-espresso/90">{hero.subtitle}</p>

      <div className="mt-8 w-full max-w-[220px]">
        <ImagePlaceholder
          src={hero.image}
          alt={`${couple.displayNames} — foto pasangan`}
          className="rounded-sm"
          fadeIn
        />
      </div>

      <h1 className="mt-10 text-center font-script text-5xl leading-tight text-espresso">
        <div className="inline-flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2">
            {couple.groom}
          </span>
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm">
            <ImagePlaceholder
              src={hero.groomAccentImage}
              alt={`${couple.groom} — accent`}
              aspectRatio="aspect-square"
              className="h-full w-full"
            />
          </div>
        </div>
        <br />
        <span className="text-4xl">&amp;</span>
        <br />
        {couple.bride}
      </h1>

      <div className="mt-auto flex justify-center pt-12 pb-2">
        <button
          type="button"
          onClick={() =>
            document.getElementById('invite-section')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
          className="block h-10 w-32 rounded-full transition-opacity hover:opacity-80"
          aria-label="Scroll ke undangan"
        >
          <ImagePlaceholder
            src={hero.scrollImage}
            alt="Scroll ke bawah"
            aspectRatio="aspect-auto"
            className="h-full w-full rounded-full object-cover"
            floatHint
          />
        </button>
      </div>
    </div>
  )
}
