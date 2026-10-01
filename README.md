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
- In the client's EmailJS account, connect the company's Gmail under **Email Services**, then create an email template addressed to `africadining1@gmail.com`.
- Set the template's **Reply-To** field to `{{email}}`. Use `{{name}}`, `{{email}}`, `{{phone}}`, `{{country}}`, `{{destination}}`, `{{travel_date}}`, `{{adults}}`, `{{children}}`, `{{experience}}`, `{{price}}`, and `{{notes}}` for booking details in the subject/body.
- Add the EmailJS service ID, template ID, and public key to Vercel as `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`, then redeploy. These are browser-side EmailJS identifiers, not private passwords; do not use an EmailJS private key here.
- Copy `.env.example` to `.env.local` for local development and fill in the same three values.
- In EmailJS **Security → Allowed domains**, allow the production site domain. Add `localhost` only if local testing is needed.

## Notes
- The contact form remains a UI-only placeholder.
- All photography is embedded directly in src/App.jsx as base64 data.
  This keeps the project self-contained for review, but the JS bundle is
  large (~13MB+) as a result. Before a real public launch, migrate images
  to hosted URLs (Vercel Blob, Cloudinary, S3) — IMAGE_LIBRARY near the
  top of src/App.jsx is the one place that needs updating to do that.
