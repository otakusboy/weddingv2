# Iqbal & Putria — Digital Wedding Invitation

A mobile-first Indonesian digital wedding invitation built with React, Vite, and Tailwind CSS. Designed to match a traditional elegant invitation aesthetic and deploy easily to Netlify.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
src/
├── components/          # Shared UI pieces (banner, divider, placeholders)
├── constants/
│   └── siteContent.ts   # ← Edit names, dates, venue, RSVP, Apps Script URL
├── sections/            # One component per invitation section
│   ├── HeroCover.tsx
│   ├── InvitationIntro.tsx
│   ├── CountdownSection.tsx
│   ├── QuoteSection.tsx
│   ├── EventDetailsSection.tsx
│   ├── CalendarHighlightSection.tsx
│   ├── VenueSection.tsx
│   ├── QRSection.tsx
│   ├── RSVPSection.tsx
│   └── ClosingSection.tsx
├── App.tsx
└── index.css
```

---

## 1. How to change names and text

Open **`src/constants/siteContent.ts`** and edit:

| Constant | What it controls |
|---|---|
| `couple` | Groom, bride, and display names |
| `invitation` | Banner text, intro paragraph, event title |
| `quote` | Arabic verse, translation, source |
| `closing` | Final thank-you paragraphs and sign-off |
| `rsvp` | RSVP heading, description, deadline, messages |
| `hero` | Cover subtitle and scroll button label |

---

## 2. How to change schedule / date / time

In **`src/constants/siteContent.ts`**:

```ts
export const weddingDate = {
  iso: '2026-08-22T08:00:00+07:00',  // Countdown target (ISO with timezone)
  monthYear: 'Agustus 2026',
  dayName: 'Sabtu',
  fullDate: '22 Agustus 2026',
  calendarDays: [16, 17, 18, 19, 20, 21, 22],
  highlightedDay: 22,
}

export const events = {
  akad: { label: 'Akad Nikah', time: '08.00 WIB' },
  resepsi: { label: 'Resepsi', time: '10.00 – selesai' },
}
```

---

## 3. How to replace image placeholders

### Couple photo (hero)

1. Add your image to `src/assets/` (e.g. `couple.jpg`)
2. In `siteContent.ts`, set:

```ts
export const hero = {
  // ...
  image: '/src/assets/couple.jpg',  // or import and use the imported path
}
```

For production, import the image in `siteContent.ts` or `HeroCover.tsx`:

```ts
import couplePhoto from '../assets/couple.jpg'
// hero.image = couplePhoto
```

Grey placeholder boxes appear automatically when `image` is `null`.

---

## 4. How to replace the QR image

1. Add your QR code image to `src/assets/` (e.g. `qr-location.png`)
2. In `siteContent.ts`:

```ts
export const venue = {
  // ...
  qrImage: '/src/assets/qr-location.png',
}
```

---

## 5. Connect Google Sheets with Google Apps Script

### Step A — Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Add headers in row 1, for example:

| Timestamp | Name | Attendance | GuestCount |
|---|---|---|---|

### Step B — Add the Apps Script

1. In the sheet: **Extensions → Apps Script**
2. Paste the script from `docs/google-apps-script.gs` (or below)
3. Save the project

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.attendance || '',
      data.guestCount ?? '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step C — Deploy as Web App

1. Click **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Copy the Web App URL

### Step D — Connect the site

In **`src/constants/siteContent.ts`**:

```ts
export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
```

Field mapping (keep in sync with the script):

```ts
export const RSVP_FIELD_MAP = {
  name: 'name',             // → data.name
  attendance: 'attendance', // → data.attendance ("Yes" | "No")
  guestCount: 'guestCount', // → data.guestCount (1–3, or 0 if No)
}
```

> **Note:** The RSVP form uses `fetch` with `mode: 'no-cors'` because Google Apps Script does not always return CORS headers for cross-origin POST requests. If the request reaches the script without a network error, the form shows success. Test by submitting once and checking your sheet.

---

## 6. Deploy to Netlify

### Option A — Git-based deploy (recommended)

1. Push this repo to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://netlify.com) → **Add new site → Import an existing project**
3. Build settings (auto-detected from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy

### Option B — Manual deploy

```bash
npm run build
```

Drag the `dist/` folder to Netlify's deploy UI, or:

```bash
npx netlify deploy --prod --dir=dist
```

The included `netlify.toml` handles SPA routing so all paths serve `index.html`.

---

## Build

```bash
npm run build
npm run preview   # preview production build locally
```

---

## Design notes

- **Mobile-first** invitation inside a centered ~460px frame on desktop
- **Black outer background** with **25px rounded corners** on the invitation shell
- **Fonts:** Great Vibes (script headings) + Poppins (body) via Google Fonts
- **Colors:** warm ivory background, espresso/maroon typography, cerulean section banners

---

## License

Private — for personal wedding use.
