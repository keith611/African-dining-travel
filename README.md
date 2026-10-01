# Africa Dining & Travel Guide — website

## Run locally
    npm install
    npm run dev

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import that repo. Vite is auto-detected.
3. Deploy — you'll get a live *.vercel.app URL.
   Every future push redeploys the same URL automatically.

## Booking request emails
- Booking requests are sent to `africadining1@gmail.com` using EmailJS from the browser; no custom sending domain or Vercel email function is required.
- Connect a Gmail account under **Email Services**, then create a booking template. During testing, set its **To Email** to the tester; before production, set it to `africadining1@gmail.com`.
- Set the template's **Reply-To** field to `{{email}}`. Use `{{name}}`, `{{email}}`, `{{phone}}`, `{{country}}`, `{{destination}}`, `{{travel_date}}`, `{{adults}}`, `{{children}}`, `{{experience}}`, `{{price}}`, and `{{notes}}` for booking details in the subject/body.
- The browser uses the EmailJS service ID, template ID, and public key in `src/config/emailjs.js`. These are public identifiers, not private passwords; do not put an EmailJS private key in this file.
- In EmailJS **Security → Allowed domains**, allow the production site domain. Add `localhost` only if local testing is needed.

## Notes
- The contact form remains a UI-only placeholder.
- All photography is embedded directly in src/App.jsx as base64 data.
  This keeps the project self-contained for review, but the JS bundle is
  large (~13MB+) as a result. Before a real public launch, migrate images
  to hosted URLs (Vercel Blob, Cloudinary, S3) — IMAGE_LIBRARY near the
  top of src/App.jsx is the one place that needs updating to do that.
