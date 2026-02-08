# Luna Piena Website - Backend Setup Guide

A complete guide to deploying and connecting all the backend functionality for the Luna Piena boutique hotel website using **free tools only**.

---

## Table of Contents

1. [Hosting Setup (Netlify)](#1-hosting-setup-netlify)
2. [Form Handling (Netlify Forms)](#2-form-handling-netlify-forms)
3. [Guest Portal Dynamic URLs](#3-guest-portal-dynamic-urls)
4. [Email Notifications (EmailJS)](#4-email-notifications-emailjs)
5. [Language Toggle (i18n)](#5-language-toggle-i18n)
6. [Analytics (Google Analytics)](#6-analytics-google-analytics)
7. [Optional: CMS for Blog (Decap CMS)](#7-optional-cms-for-blog-decap-cms)
8. [Domain Setup](#8-domain-setup)
9. [Quick Reference](#9-quick-reference)

---

## 1. Hosting Setup (Netlify)

Netlify offers free hosting with HTTPS, continuous deployment, and form handling.

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Upload Your Site**
   
   **Option A: Drag & Drop (Easiest)**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the entire `luna-piena-v2` folder
   - Your site is live instantly!

   **Option B: Connect to GitHub (Recommended for updates)**
   - Create a GitHub repository
   - Upload all files to the repo
   - In Netlify: "Add new site" → "Import an existing project"
   - Connect your GitHub repo
   - Deploy settings: Leave defaults
   - Click "Deploy site"

3. **Your Site URL**
   - Netlify gives you a URL like: `random-name-123.netlify.app`
   - You can change this in Site Settings → Domain Management → Custom domain

---

## 2. Form Handling (Netlify Forms)

Netlify Forms is **free for up to 100 submissions/month** and requires no backend code.

### Setup Booking Form (index.html, rooms.html):

Add `netlify` attribute and a hidden form-name field to your forms:

```html
<form id="bookingForm" netlify name="booking">
    <input type="hidden" name="form-name" value="booking">
    <!-- rest of your form fields -->
</form>
```

### Setup Events Inquiry Form (events.html):

```html
<form id="eventForm" netlify name="event-inquiry">
    <input type="hidden" name="form-name" value="event-inquiry">
    <!-- rest of your form fields -->
</form>
```

### Setup Newsletter Form (blog.html):

```html
<form class="newsletter-form" netlify name="newsletter">
    <input type="hidden" name="form-name" value="newsletter">
    <input type="email" name="email" placeholder="Your email address" required>
    <button type="submit">Subscribe</button>
</form>
```

### View Submissions:

1. Go to your Netlify dashboard
2. Click on your site
3. Go to "Forms" tab
4. View all submissions organized by form name

### Email Notifications:

1. In Netlify: Forms → Form notifications
2. Add email notification
3. Enter your email address
4. You'll receive an email for every submission!

---

## 3. Guest Portal Dynamic URLs

The guest portal needs to display personalized greetings based on the URL path like `/guest/SmithJohn`.

### Option A: Netlify Redirects (Simplest)

Create a file called `_redirects` in your root folder:

```
/guest/*  /guest.html  200
```

This tells Netlify to serve `guest.html` for any URL starting with `/guest/`.

### Option B: netlify.toml Configuration

Create `netlify.toml` in your root folder:

```toml
[[redirects]]
  from = "/guest/*"
  to = "/guest.html"
  status = 200
```

### How It Works:

- URL: `yoursite.com/guest/SmithJohn`
- The JavaScript in `guest.html` reads the URL path
- Extracts "SmithJohn" and formats it as "John Smith"
- Displays: "Hello, John Smith"

### Creating Guest Links:

For each guest, create their URL:
- Format: `https://yoursite.com/guest/LastnameFirstname`
- Example: `https://lunapiena.com/guest/GarciaMaría`

You can share these links via:
- Email confirmation
- QR code in the room
- NFC tag programmed with the URL

---

## 4. Email Notifications (EmailJS)

For more customized emails (like booking confirmations to guests), use EmailJS. **Free tier: 200 emails/month**.

### Setup:

1. **Create Account**
   - Go to [emailjs.com](https://emailjs.com)
   - Sign up for free

2. **Add Email Service**
   - Dashboard → Email Services → Add New Service
   - Choose Gmail, Outlook, or other
   - Follow connection steps

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Design your booking confirmation email
   - Use variables like `{{guest_name}}`, `{{checkin_date}}`

4. **Get Your Keys**
   - Dashboard → Account → Copy your Public Key
   - Note your Service ID and Template ID

5. **Add to Your Site**

Add before `</body>` in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
    
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Send to EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            guest_name: data.name,
            guest_email: data.email,
            checkin: data.checkin,
            checkout: data.checkout,
            room: data.room
        }).then(function() {
            alert('Thank you! Check your email for confirmation.');
        });
        
        // Also submit to Netlify Forms
        fetch('/', {
            method: 'POST',
            body: new URLSearchParams(formData).toString(),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    });
</script>
```

---

## 5. Language Toggle (Automatic Translation)

The site now includes **automatic translation** between English and Spanish using a pre-built translation system.

### How It Works:

1. **translations.js** contains all text in both languages
2. Elements with `data-i18n="key"` attributes get translated automatically
3. User's language preference is saved in localStorage
4. Clicking EN/ES instantly switches all text

### Already Implemented:

The translation system is already connected! When a user clicks "ES":
- Navigation changes to Spanish
- All headings, descriptions, and buttons translate
- Form labels and placeholders update
- Preference is remembered for next visit

### To Add New Translatable Text:

1. Add the `data-i18n` attribute to your HTML element:
```html
<h2 data-i18n="my_new_text">My New Text</h2>
```

2. Add the translation key to `translations.js`:
```javascript
en: {
    my_new_text: "My New Text",
    // ...
},
es: {
    my_new_text: "Mi Nuevo Texto",
    // ...
}
```

### Manual Language Switch (JavaScript):
```javascript
// Switch to Spanish
LunaPiena.setLanguage('es');

// Switch to English  
LunaPiena.setLanguage('en');

// Get current language
LunaPiena.getCurrentLanguage(); // returns 'en' or 'es'
```

### Adding More Languages:

To add a new language (e.g., Italian):

1. Add to `translations.js`:
```javascript
it: {
    nav_rooms: "Camere",
    nav_dining: "Ristorazione",
    // ... all other keys
}
```

2. Add to the language toggle in HTML:
```html
<div class="lang-toggle">
    <a href="#">EN</a>
    <a href="#">ES</a>
    <a href="#">IT</a>
</div>
```

---

## 6. Analytics (Google Analytics)

Track visitors for free with Google Analytics 4.

### Setup:

1. **Create Account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign in with Google account
   - Create new property for your website

2. **Get Tracking Code**
   - Admin → Data Streams → Add stream → Web
   - Enter your website URL
   - Copy the Measurement ID (starts with G-)

3. **Add to Your Site**

Add this to the `<head>` of every page:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

---

## 7. Optional: CMS for Blog (Decap CMS)

If you want to easily add/edit blog posts without touching code, use Decap CMS (formerly Netlify CMS). **Completely free**.

### Setup:

1. **Create Admin Folder**

Create folder structure:
```
/admin
  ├── index.html
  └── config.yml
```

2. **admin/index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luna Piena CMS</title>
</head>
<body>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

3. **admin/config.yml**

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "images"
public_folder: "/images"

collections:
  - name: "blog"
    label: "Blog Posts"
    folder: "_posts"
    create: true
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Category", name: "category", widget: "string" }
      - { label: "Featured Image", name: "image", widget: "image" }
      - { label: "Body", name: "body", widget: "markdown" }
```

4. **Enable Netlify Identity**
   - Netlify Dashboard → Site Settings → Identity → Enable Identity
   - Settings → Registration → Invite only
   - Identity → Invite users → Add your email

5. **Access CMS**
   - Go to `yoursite.com/admin`
   - Log in with your email
   - Add/edit blog posts visually!

---

## 8. Domain Setup

### Free Subdomain:
Your Netlify site comes with a free `*.netlify.app` subdomain that you can customize.

### Custom Domain:

1. **Purchase Domain** (~$10-15/year)
   - Recommended: [Namecheap](https://namecheap.com), [Porkbun](https://porkbun.com), [Google Domains](https://domains.google)

2. **Connect to Netlify**
   - Netlify → Site Settings → Domain Management
   - Add custom domain
   - Follow DNS configuration instructions
   - Netlify provides free SSL automatically!

---

## 9. Quick Reference

### File Structure

```
luna-piena-v2/
├── index.html          # Homepage
├── rooms.html          # Rooms page
├── dining.html         # Dining page
├── events.html         # Events + inquiry form
├── about.html          # About page
├── blog.html           # Blog listing
├── article.html        # Blog article template
├── guest.html          # Guest portal
├── logo.png            # Logo
├── translations.js     # EN/ES translation system
├── _redirects          # Netlify redirects
└── admin/              # Optional CMS
    ├── index.html
    └── config.yml
```

### Free Tools Summary

| Feature | Tool | Free Tier |
|---------|------|-----------|
| Hosting | Netlify | 100GB bandwidth/month |
| Forms | Netlify Forms | 100 submissions/month |
| Email | EmailJS | 200 emails/month |
| Analytics | Google Analytics | Unlimited |
| CMS | Decap CMS | Unlimited |
| Domain | Netlify subdomain | Free forever |

### Checklist Before Launch

- [ ] Upload site to Netlify
- [ ] Add `netlify` attribute to all forms
- [ ] Create `_redirects` file for guest portal
- [ ] Set up form email notifications
- [ ] Add Google Analytics code
- [ ] Test all forms
- [ ] Test guest portal with sample URL
- [ ] Create Spanish translations (if needed)
- [ ] Set up custom domain (optional)

---

## Need Help?

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **EmailJS Docs**: [emailjs.com/docs](https://www.emailjs.com/docs/)
- **Decap CMS Docs**: [decapcms.org/docs](https://decapcms.org/docs/)

---

*Luna Piena by Lupo — Every Night Like a Full Moon* 🌕
