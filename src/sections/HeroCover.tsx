import { useState } from 'react'
import { couple, hero } from '../constants/siteContent'
import { ImagePlaceholder } from '../components/ImagePlaceholder'

const HERO_INTRO_KEY = 'hero-intro-seen'

function shouldPlayHeroIntro() {
  try {
    if (sessionStorage.getItem(HERO_INTRO_KEY)) return false
    sessionStorage.setItem(HERO_INTRO_KEY, '1')
    return true
  } catch {
    return true
  }
}

export function HeroCover() {
  const [fadeIn] = useState(shouldPlayHeroIntro)

  return (
    <div className="flex flex-1 flex-col items-center px-8 pb-10 pt-8">
      <div className="flex w-full flex-1 flex-col items-center justify-center">
        <p className="mb-6 font-script text-3xl font-bold text-amber-950">
          {hero.subtitle}
        </p>

        <div className="w-full max-w-[220px]">
          <ImagePlaceholder
            src={hero.image}
            alt={`${couple.displayNames} — foto pasangan`}
            aspectRatio="aspect-auto"
            fit="contain"
            className="rounded-sm"
            fadeIn={fadeIn}
          />
        </div>

        <h1 className="mt-10 flex flex-col items-center gap-4 text-center font-script leading-none text-espresso">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 text-7xl">
              {couple.groom}
            </span>
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-sm">
              <ImagePlaceholder
                src={hero.groomAccentImage}
                alt={`${couple.groom} — accent`}
                aspectRatio="aspect-square"
                fit="contain"
                className="h-full w-full"
              />
            </div>
          </div>
          <span className="text-4xl">&amp;</span>
          <span className="text-7xl">{couple.bride}</span>
        </h1>
      </div>

      <div className="flex justify-center pb-2">
        <button
          type="button"
          onClick={() =>
            document.getElementById('invite-section')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
          className="animate-scroll-hint inline-flex h-12 items-center justify-center gap-4 rounded-full bg-white px-4 font-body text-base font-semibold text-espresso transition-opacity hover:opacity-80"
          aria-label="Scroll ke undangan"
        >
          Scroll
          <svg
            aria-hidden="true"
            viewBox="0 0 12 8"
            className="h-2.5 w-3 fill-current"
          >
            <path d="M1.41 0.59 6 5.17 10.59 0.59 12 2 6 8 0 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
