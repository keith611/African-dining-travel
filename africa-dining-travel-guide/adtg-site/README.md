# Africa Dining & Travel Guide — website

## Run locally
    npm install
    npm run dev

## Deploy to Vercel

### Option A — no local setup, via GitHub (easiest)
1. Create a new GitHub repo and push this folder to it.
2. Go to vercel.com → "Add New… → Project" → import that repo.
3. Vercel auto-detects Vite. Leave settings as default and click Deploy.
4. You'll get a live `*.vercel.app` URL to share for review.

### Option B — from your own machine, via Vercel CLI
    npm install -g vercel
    vercel login
    vercel        # first deploy, follow prompts
    vercel --prod # promote to production URL

Either way, every future push/redeploy updates the same URL, so you can
keep iterating and just tell the client "refresh the link."

## Notes
- This is a fully static site (no backend) — booking and contact forms are
  UI-only placeholders, as discussed.
- Real photos are embedded directly in `src/App.jsx` as base64 data for now,
  which keeps everything self-contained for this review build but makes the
  JS bundle large (~4.6MB). Before a real launch, swap these for hosted image
  URLs (Vercel Blob, Cloudinary, S3, etc.) — the `IMAGE_LIBRARY` object at the
  top of `src/App.jsx` is the one place that needs updating to do that.
