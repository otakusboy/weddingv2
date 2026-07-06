/**
 * Google Apps Script for RSVP → Google Sheets
 * ───────────────────────────────────────────
 * 1. Create a Google Sheet with headers: Timestamp | Name | Attendance
 * 2. Extensions → Apps Script → paste this file
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into src/constants/siteContent.ts → GOOGLE_APPS_SCRIPT_URL
 *
 * Field names must match RSVP_FIELD_MAP in siteContent.ts:
 *   - name
 *   - attendance  ("Yes" or "No")
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.attendance || '',
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
