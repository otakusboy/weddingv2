import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  GOOGLE_APPS_SCRIPT_URL,
  RSVP_FIELD_MAP,
  rsvp,
} from '../constants/siteContent'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const GUEST_COUNTS = Array.from(
  { length: rsvp.guestCountMax },
  (_, i) => i + 1,
)

export function RSVPSection() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<'Yes' | 'No' | ''>('')
  const [guestCount, setGuestCount] = useState<number | ''>('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [nameError, setNameError] = useState('')
  const [guestError, setGuestError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const trimmedName = name.trim()
    if (!trimmedName) {
      setNameError('Nama wajib diisi.')
      return
    }
    if (trimmedName.length > rsvp.nameMaxLength) {
      setNameError(`Nama maksimal ${rsvp.nameMaxLength} karakter.`)
      return
    }
    if (!attendance) {
      return
    }
    if (attendance === 'Yes' && guestCount === '') {
      setGuestError('Jumlah tamu wajib diisi.')
      return
    }

    setNameError('')
    setGuestError('')
    setStatus('submitting')

    const guests =
      attendance === 'Yes' && typeof guestCount === 'number' ? guestCount : 0

    try {
      const payload = {
        [RSVP_FIELD_MAP.name]: trimmedName,
        [RSVP_FIELD_MAP.attendance]: attendance,
        [RSVP_FIELD_MAP.guestCount]: guests,
      }

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.type === 'opaque' || response.ok) {
        setStatus('success')
        return
      }

      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="px-8 py-8 text-center">
        <h2 className="font-script text-4xl text-maroon">Terima Kasih</h2>
        <p className="mt-6 font-body text-sm leading-relaxed text-warm-brown">
          {rsvp.successMessage}
        </p>
      </div>
    )
  }

  const canSubmit =
    Boolean(attendance) &&
    (attendance === 'No' || guestCount !== '') &&
    status !== 'submitting'

  return (
    <div className="px-8 py-8">
      <h2 className="text-center font-script text-4xl leading-tight text-maroon">
        {rsvp.heading}
      </h2>
      <p className="mt-5 text-center font-body text-sm leading-relaxed text-warm-brown">
        {rsvp.description}
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-8" noValidate>
        <div>
          <label
            htmlFor="rsvp-name"
            className="block font-body text-[11px] font-medium uppercase tracking-wider text-espresso"
          >
            Nama <span className="text-maroon">*</span>
          </label>
          <div className="relative mt-2">
            <input
              id="rsvp-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value.slice(0, rsvp.nameMaxLength))
                if (nameError) setNameError('')
              }}
              placeholder="Your full name"
              maxLength={rsvp.nameMaxLength}
              className="w-full rounded-sm bg-input-bg px-4 py-3 font-body text-sm text-espresso placeholder:text-muted-brown/60 focus:outline-none focus:ring-1 focus:ring-border-brown/40"
              disabled={status === 'submitting'}
            />
            <span className="pointer-events-none absolute bottom-2 right-3 font-body text-[10px] text-muted-brown">
              {name.length} / {rsvp.nameMaxLength}
            </span>
          </div>
          {nameError && (
            <p className="mt-2 font-body text-xs text-maroon">{nameError}</p>
          )}
        </div>

        <fieldset>
          <legend className="block font-body text-[11px] font-medium uppercase tracking-wider text-espresso">
            Apakah akan datang ke venue ?
          </legend>
          <div className="mt-4 flex gap-8">
            {(['Yes', 'No'] as const).map((option) => (
              <label
                key={option}
                className="inline-flex cursor-pointer items-center gap-2.5 font-body text-sm text-espresso"
              >
                <input
                  type="radio"
                  name="attendance"
                  value={option}
                  checked={attendance === option}
                  onChange={() => {
                    setAttendance(option)
                    if (option === 'No') {
                      setGuestCount('')
                      setGuestError('')
                    }
                  }}
                  disabled={status === 'submitting'}
                  className="h-4 w-4 accent-maroon"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        {attendance === 'Yes' && (
          <fieldset>
            <legend className="block font-body text-[11px] font-medium uppercase tracking-wider text-espresso">
              Berapa tamu <span className="text-maroon">*</span>
            </legend>
            <div className="mt-4 flex gap-8">
              {GUEST_COUNTS.map((count) => (
                <label
                  key={count}
                  className="inline-flex cursor-pointer items-center gap-2.5 font-body text-sm text-espresso"
                >
                  <input
                    type="radio"
                    name="guestCount"
                    value={count}
                    checked={guestCount === count}
                    onChange={() => {
                      setGuestCount(count)
                      if (guestError) setGuestError('')
                    }}
                    disabled={status === 'submitting'}
                    className="h-4 w-4 accent-maroon"
                  />
                  {count}
                </label>
              ))}
            </div>
            {guestError && (
              <p className="mt-2 font-body text-xs text-maroon">{guestError}</p>
            )}
          </fieldset>
        )}

        {status === 'error' && (
          <p className="text-center font-body text-xs text-maroon">
            {rsvp.errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-sm bg-maroon py-3.5 font-body text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-maroon-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Mengirim...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}
