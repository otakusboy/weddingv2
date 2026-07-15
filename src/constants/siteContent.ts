/**
 * Site content & configuration
 * ─────────────────────────────
 * Edit this file to update names, dates, venue, RSVP deadline, and the
 * Google Apps Script endpoint for form submissions.
 */

// ─── Google Apps Script ───────────────────────────────────────────────────────
// Replace with your deployed Web App URL after setting up Google Sheets.
// See README.md → "Connect Google Sheets with Google Apps Script"
export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzi3RbATj6t5DtNTNCBjsbNvw_iLIr-iaeo1BadT9ajMCsVsJ8ti-XQPtOk5HiHfdOc/exec'

// Field names sent in the POST body — keep in sync with your Apps Script
export const RSVP_FIELD_MAP = {
  name: 'name',
  attendance: 'attendance',
  guestCount: 'guestCount',
} as const

// ─── Couple ───────────────────────────────────────────────────────────────────
export const couple = {
  groom: 'Iqbal',
  bride: 'Putria',
  displayNames: 'Iqbal & Putria',
} as const

// ─── Wedding date & countdown target ──────────────────────────────────────────
export const weddingDate = {
  iso: '2026-08-22T08:00:00+07:00',
  monthYear: 'Agustus 2026',
  dayName: 'Sabtu',
  fullDate: '22 Agustus 2026',
  calendarDays: [16, 17, 18, 19, 20, 21, 22],
  highlightedDay: 22,
  // Replace with your calendar image when ready, e.g. '/src/assets/calendar.png'
  calendarImage: '/calendar.svg',
} as const

export const events = {
  akad: {
    label: 'Akad',
    time: '15:00 WIB',
  },
  resepsi: {
    label: 'Resepsi',
    time: '16:00 WIB',
  },
} as const

export const calendar = {
  addToGoogleUrl:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Iqbal+%26+Putria+Wedding&dates=20260822T150000/20260822T160000',
  addToGoogleLabel: 'Add to Google Calendar',
} as const

// ─── RSVP ─────────────────────────────────────────────────────────────────────
export const rsvp = {
  heading: 'Kami tunggu kehadiranmu',
  description:
    'Mohon konfirmasi kehadiran Anda untuk acara akad dan resepsi pernikahan kami pada 22 Agustus 2026.',
  nameMaxLength: 20,
  guestCountMax: 3,
  successMessage:
    'Terima kasih atas konfirmasi kehadiran Anda.',
  successMessageAttending:
    'Terima kasih atas konfirmasi kehadiran Anda. Sampai jumpa di hari bahagia kami — jangan lupa buat pengingat di Google Kalender melalui tombol di bawah.',
  errorMessage:
    'Maaf, konfirmasi belum terkirim. Silakan coba lagi dalam beberapa saat.',
} as const

// ─── Venue ────────────────────────────────────────────────────────────────────
export const venue = {
  name: 'Kopi Keboen Klaten',
  address:
    'Jl. Srigading, Dusun 2, Tonggalan, Kec. Klaten Tengah, Kabupaten Klaten, Jawa Tengah 57424',
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Kopi+Keboen+Klaten',
  qrLabel: 'Scan untuk lokasi',
  // Replace with your QR image path when ready, e.g. '/qr.svg'
  qrImage: '/qr.svg',
} as const

// ─── Quote / verse ────────────────────────────────────────────────────────────
export const quote = {
  arabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
  text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  source: 'Q.S. Ar Rum:21',
} as const

// ─── Invitation copy ────────────────────────────────────────────────────────
export const invitation = {
  banner: 'Inviting you to',
  intro:
    'Dengan penuh rasa syukur dan bahagia, kami ingin mengundang anda pada pernikahan kami yang akan berlangsung pada:',
  eventTitle: 'Akad & Resepsi',
  eventSchedule: `${weddingDate.dayName}, ${weddingDate.fullDate}`,
} as const

// ─── Closing ──────────────────────────────────────────────────────────────────
export const closing = {
  paragraphs: [
    'Setelah bertahun-tahun menapaki perjalanan cinta, kami bersyukur atas segala rahmat yang telah diberikan. Kehadiran dan doa restu Anda akan menjadi kebahagiaan tersendiri bagi kami berdua.',
    'Atas perhatian dan doa restu yang Bapak/Ibu/Saudara/i berikan, kami ucapkan terima kasih.',
  ],
  signOff: 'Salam hangat dari kami yang berbahagia,',
  names: couple.displayNames,
  // Replace with your footer illustration when ready, e.g. '/envelope.svg'
  footerImage: '/envelope.svg',
} as const

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  subtitle: 'The Wedding of',
  // Couple photo in the hero polaroid frame
  image: '/header.svg',
  // Small image shown to the right of the groom's name — e.g. ring icon, monogram, or photo
  groomAccentImage: '/ring.svg',
} as const
