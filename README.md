# Chibi — Link Directory (v2)
Updated package: chibi static link directory with chibi logo, clear instructions, donation links, and grouped categories.

## What changed
- Prominent instruction telling users to download Brave or use uBlock before clicking links.
- Donation line placed near the top.
- Chibi dog SVG used as logo (vector, inline).
- Hover overlay title and denser layout.
- Remote placeholder images used to avoid 404s if you haven't uploaded thumbnails.

## Deploy
Upload files to repo root and enable Pages (branch main, / root).

## Analytics
This package uses a privacy-first local visit counter (stored in each visitor's browser). To collect cross-user site-wide analytics for free, use Cloudflare (free plan) after you register a domain and route it through Cloudflare — their dashboard shows requests and basic analytics without extra cost.

## Edit links
Open `script.js` and edit `LINKS` array. Each entry needs: id, title, url, category, image.
