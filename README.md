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
- Booking form submissions are sent to `africadining1@gmail.com` through a Vercel Function and Resend.
- Add `RESEND_API_KEY` and `BOOKING_FROM_EMAIL` as Vercel environment variables for Production and redeploy.
- `BOOKING_FROM_EMAIL` must use a domain verified in Resend. Keep the API key in Vercel's environment settings; never place it in client-side code.
- Copy `.env.example` to `.env.local` for local setup, using your own secret values.

## Notes
- The booking form uses a Vercel serverless function. The contact form remains a UI-only placeholder.
- All photography is embedded directly in src/App.jsx as base64 data.
  This keeps the project self-contained for review, but the JS bundle is
  large (~13MB+) as a result. Before a real public launch, migrate images
  to hosted URLs (Vercel Blob, Cloudinary, S3) — IMAGE_LIBRARY near the
  top of src/App.jsx is the one place that needs updating to do that.
