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
  'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

// Field names sent in the POST body — keep in sync with your Apps Script
export const RSVP_FIELD_MAP = {
  name: 'name',
  attendance: 'attendance',
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
  calendarImage: null as string | null,
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

// ─── RSVP ─────────────────────────────────────────────────────────────────────
export const rsvp = {
  heading: 'Kami tunggu kehadiranmu',
  description:
    'Mohon konfirmasi kehadiran Anda untuk acara akad dan resepsi pernikahan kami pada 22 Agustus 2026.',
  nameMaxLength: 20,
  successMessage:
    'Terima kasih atas konfirmasi kehadiran Anda. Sampai jumpa di hari bahagia kami.',
  errorMessage:
    'Maaf, konfirmasi belum terkirim. Silakan coba lagi dalam beberapa saat.',
} as const

// ─── Venue ────────────────────────────────────────────────────────────────────
export const venue = {
  name: 'Kopi Keboen Klaten',
  address:
    'Jl. Merbabu No.8, Gondangrejo, Klaten Selatan, Klaten, Jawa Tengah 57418',
  mapsUrl: 'https://maps.google.com/?q=Kopi+Keboen+Klaten',
  qrLabel: 'Scan untuk lokasi',
  // Replace with your QR image path when ready, e.g. '/src/assets/qr-code.png'
  qrImage: null as string | null,
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
} as const

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  subtitle: 'The Wedding of',
  // Replace with your scroll CTA image when ready, e.g. '/src/assets/scroll.png'
  scrollImage: null as string | null,
  // Couple photo in the hero polaroid frame
  image: null as string | null,
  // Small image shown to the right of the groom's name — e.g. ring icon, monogram, or photo
  groomAccentImage: null as string | null,
} as const
