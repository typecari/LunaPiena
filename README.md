# Luna Piena — Website

Boutique hotel website for **Luna Piena by Lupo**. Built with plain HTML, CSS, and JavaScript. No frameworks, no build tools — deploy directly from GitHub.

---

## 📁 File Structure

```
/
├── styles.css          ← Shared stylesheet (all pages link here)
├── index.html          ← Homepage
├── about.html          ← Who We Are
├── dining.html         ← Dining page
├── events.html         ← Events page
├── blog.html           ← Journal / Blog
├── article.html        ← Blog article template
├── booking.html        ← Booking form (Formspree)
├── guest.html          ← Guest portal (URL-based)
├── blocked-dates.js    ← Manage unavailable dates here
├── translations.js     ← EN/ES language strings
├── logo.png            ← Site logo
└── Images/             ← All local images
```

---

## 🚀 Deploying to GitHub Pages

1. Push all files to a GitHub repository (e.g., `typecari/LunaPiena`)
2. Go to **Settings → Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose `main` branch, `/ (root)` folder → click **Save**
5. Your site will be live at:
   `https://typecari.github.io/LunaPiena/`

> **Custom domain?** Add a `CNAME` file to the repo root containing your domain (e.g., `lunapienaboutique.com`), then configure your DNS to point to GitHub Pages.

---

## 📬 Setting Up Booking Emails (Formspree)

Guests submit the booking form → you receive an email. Free, no server needed.

### Steps

1. Go to [formspree.io](https://formspree.io) and create a **free account**
2. Click **+ New Form** → name it "Luna Piena Bookings"
3. Copy your **Form ID** (looks like `xpwzabcd`)
4. Open `booking.html` and find this line:

   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

5. Replace `YOUR_FORM_ID` with your actual ID:

   ```html
   action="https://formspree.io/f/xpwzabcd"
   ```

6. Also update the newsletter form in `blog.html` with the same or a separate form ID.

### What you'll receive

Each booking email will include:
- Guest name, email, phone
- Selected room
- Check-in and check-out dates
- Number of guests
- Special requests

### Free tier limits
Formspree free plan: **50 submissions/month**. For a boutique property this is typically sufficient. Upgrade to paid ($10/mo) for unlimited.

---

## 🌙 Guest Portal

Share a personalized welcome page with each guest — no logins, no database.

### How it works

Send guests this URL:
```
https://yourdomain.com/guest.html?name=Smith
```

The page reads the `?name=` parameter and looks up that guest in a data table you maintain directly in `guest.html`.

### Adding a new guest

Open `guest.html` and find the `GUEST_DATA` object near the top:

```javascript
const GUEST_DATA = {

    "smith": {
        greeting:   "Hello, Smith Family",
        subgreeting:"Welcome back, dear friends!",
        checkin:    "March 10, 2026",
        checkout:   "March 14, 2026",
        room:       "Garden Suite",
        note:       ""
    },

    // Add more guests here...
};
```

**Rules:**
- The key (e.g., `"smith"`) must be **lowercase**
- The URL param is **case-insensitive** — `?name=Smith`, `?name=SMITH`, and `?name=smith` all work
- Leave any field as `""` to hide it from the page

### Example URLs

| Guest | URL |
|-------|-----|
| Smith family | `guest.html?name=Smith` |
| Rodriguez | `guest.html?name=Rodriguez` |
| Unknown / fallback | `guest.html` (shows default) |

### Checklist feature
The "Before You Leave" checklist is interactive — guests can tap each item to check it off.

---

## 🛏 Booking Pre-Selection (Room Links)

When a guest clicks "Book" on a specific room page, the booking form pre-selects that room automatically.

### How to link to a pre-selected room

```html
<a href="booking.html?room=Garden+Suite">Book Garden Suite</a>
<a href="booking.html?room=Moonlight+Room">Book Moonlight Room</a>
<a href="booking.html?room=Luna+Suite">Book Luna Suite</a>
```

The `?room=` parameter must match a room name in the `room-selector` in `booking.html` (case-insensitive).

### Adding or renaming rooms

In `booking.html`, find the `room-selector` div and add/edit room cards:

```html
<div class="room-option" data-room="Your Room Name" onclick="selectRoom(this)">
    <div class="room-name">Your Room Name</div>
    <div class="room-price">Contact for pricing</div>
</div>
```

---

## 🚫 Managing Blocked Dates

Edit `blocked-dates.js` to add or remove unavailable periods. The booking form reads this file automatically to validate guest date selections.

```javascript
ranges: [
    { start: "2026-03-04", end: "2026-03-10" },
    { start: "2026-04-05", end: "2026-04-26" },
    // Add more ranges here...
]
```

**Format:** `YYYY-MM-DD`. Both start and end dates are inclusive.

---

## 🎨 Updating Shared Styles

All pages link to `styles.css`. Changes there apply everywhere instantly.

- **Colors** — edit the `:root` variables at the top of `styles.css`
- **Fonts** — the Google Fonts import is in `styles.css` (not per-page)
- **Page-specific styles** — each HTML file has a small `<style>` block for overrides

---

## 🌐 Adding a New Page

1. Copy any existing page (e.g., `about.html`) as a starting point
2. Update the `<title>` tag
3. Update `class="active"` on the correct nav link
4. Keep `<link rel="stylesheet" href="styles.css">` in the `<head>`
5. Add a link to the new page in `footer-links` on every other page

---

## ✅ Known Issues Fixed

| File | Issue | Fix Applied |
|------|-------|-------------|
| `about.html` | `hero-bg` background had broken CSS (URL and `background-size` merged on same line) | Rewrote as shorthand property |
| `blog.html` | `<h1>` missing `z-index` — could render behind overlay | Added `position: relative; z-index: 2` |
| `blog.html` | `nav-right` wrapper div missing | Added wrapper |
| `blog.html` | Social links missing `aria-label` | Added labels |
| `guest.html` | `<img>` tag for Lucy had malformed `alt` attribute | Fixed |
| `guest.html` | Script referenced `#guestName` but element had id `guest` | Rewrote with consistent IDs |
| All pages | `translations.js` loaded without `defer` (blocked render) | Added `defer` |
| All pages | Parallax used bare `scroll` event (jank on low-end devices) | Wrapped in `requestAnimationFrame` |

---

## 📞 Support & Contact

This site is managed by **@typecari** on GitHub.  
For questions about the codebase, open an issue in the repository.

