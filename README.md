# Chibi — Link Directory (v3)

This package integrates the provided categorized site list and makes the UI tidy and ready to drop into your GitHub Pages repo.

## What's included
- `index.html`, `styles.css`, `script.js`
- `README.md`, `sitemap.xml`, `robots.txt`
- `script.js` auto-builds the link grid from the embedded category list (from Claude). Upload logos to `assets/logo/...` following the paths in the data.

## Deploy
1. Upload files to repo root and commit.
2. Upload logos to `assets/logo/` if you want site-specific thumbnails (paths in the dataset use e.g. `assets/logo/movies_shows/1shows.png`).
3. Enable GitHub Pages (Settings → Pages → Branch: main, folder: /root).
4. Hard refresh the page.

## Free analytics via Cloudflare
1. Register your domain and add it to Cloudflare (free).
2. Update your domain registrar to use Cloudflare's nameservers.
3. Cloudflare dashboard → Analytics will show request counts and basic traffic metrics for free.
Cloudflare is a reliable free option for cross-visitor analytics once you have a domain.
