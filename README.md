# Africa Dining & Travel Guide — website

## Run locally
    npm install
    npm run dev

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import that repo. Vite is auto-detected.
3. Deploy — you'll get a live *.vercel.app URL.
   Every future push redeploys the same URL automatically.

## Notes
- Fully static site (no backend) — booking and contact forms are UI-only
  placeholders: submitting shows a confirmation but nothing is delivered
  anywhere yet.
- All photography is embedded directly in src/App.jsx as base64 data.
  This keeps the project self-contained for review, but the JS bundle is
  large (~13MB+) as a result. Before a real public launch, migrate images
  to hosted URLs (Vercel Blob, Cloudinary, S3) — IMAGE_LIBRARY near the
  top of src/App.jsx is the one place that needs updating to do that.
