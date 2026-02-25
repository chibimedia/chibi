# Chibi — Link Directory
Static link directory with categorized clickable image tiles. Drop files into the repo root to deploy on GitHub Pages.

## Quick deploy (GitHub Pages)
1. Create a repo (already done).
2. Upload these files to the repo root: `index.html`, `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`.
3. (Optional) Upload your thumbnails to `assets/images/` and update `script.js` image paths.
4. Settings → Pages → Branch: `main` and folder `/ (root)`. Save.
5. Visit `https://<your-account>.github.io/<repo>/`

## Analytics
This package includes a **privacy-preserving local stub** (counts visits in the user's browser only). To add Plausible or Fathom, insert their snippet in `index.html` where noted (see plausible.io for account setup).

## Sitemap / robots
Add `sitemap.xml` and `robots.txt` to the repo root (examples included).

## Edit links
Open `script.js` and edit the `LINKS` array. Each entry needs: `id`, `title`, `url`, `category`, `image`.

## Notes
- Images use remote placeholders by default to avoid 404s. Replace with your thumbnails when ready.
- Manage panel stores preferences in localStorage (hidden links and category order) — per browser only.
