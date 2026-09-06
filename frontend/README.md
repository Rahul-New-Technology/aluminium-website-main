# FINE ALLOYS — Business Website

Static React + Vite website for **FINE ALLOYS** — aluminium scrap recycling, refining,
processing and supply business, Thane, Maharashtra, India.
Production domain: **https://www.finealuminium.com**

## Tech Stack

- React 19 + Vite (static build, no backend required)
- React Router v7 (lazy-loaded routes)
- framer-motion (scroll reveals, masked hero reveal) · lenis (smooth scrolling)
- Plain CSS design system (`src/index.css`) — navy / white / orange-gold
- Google Sheets lead capture via Google Apps Script Web App (serverless)

## Commands

```bash
# from /frontend
npm run build     # production build → dist/
npm run dev       # local dev server
npx wrangler deploy   # deploy to Cloudflare (uses wrangler.toml)
```

Cloudflare: project root is `/frontend`, build command `npm run build`,
output `dist/`. SPA fallback is configured in `wrangler.toml`
(`not_found_handling = "single-page-application"`), so direct visits to
`/about`, `/products`, etc. work.

## Project Structure

```
/frontend
  /public
    /images
      /logo /hero /products /services /process /about
      /gallery /why-us /contact /cta
    robots.txt  sitemap.xml  _headers  favicon.svg/png
  /src
    /components   # Header, Footer, LeadForm, GalleryGrid, ...
    /pages        # 12 pages, one per route
    /data         # products, services, process, gallery, why-us
    /config/site.js   # ← business info, lead endpoint, analytics IDs
    /utils/track.js   # GA4 / Ads conversion helper (safe no-op until configured)
  index.html  vite.config.mjs  wrangler.toml
```

## Google Sheets Lead Capture (required to go live)

Forms POST to a secure Google Apps Script endpoint — no credentials in frontend code.

1. Open `/scripts/google-apps-script.js` and follow the setup steps in its header.
2. Deploy it as a Web App ("Execute as: Me", "Anyone" access).
3. Paste the Web App URL into `src/config/site.js` → `leadEndpoint`.
4. Rebuild + redeploy. Until then, forms run in demo mode (payload logged to console).

Sheet columns: Timestamp · Name · Company · Phone · Email · City · State ·
Product/Scrap Type · Quantity · Requirement · Message · Source Page.

## Analytics / Conversion Tracking (optional)

In `src/config/site.js` set:
- `gaMeasurementId` — GA4 measurement ID (`G-…`)
- `adsConversionId` — Google Ads conversion (`AW-…/…`)

That is the ONLY step needed. The gtag.js snippet loads automatically once
`gaMeasurementId` is set, and these events fire across the whole site:
- `generate_lead` — every form submission (quote / contact / homepage)
- Google Ads conversion (`trackConversion`) — fires on every successful form submit
- `phone_click` — top bar, hero, sticky mobile bar, contact page, quote page,
  thank-you page, footer (each with a `location` label)
- `whatsapp_click` — same coverage as phone clicks

Tip: in Google Ads you can also create a "Page view" conversion for
`/thank-you` — every successful enquiry lands there.

## Updating Content

- Products / services / process steps / gallery: edit files in `src/data/`.
- Business details, phone, address, endpoints: `src/config/site.js`.
- Images: replace files in `public/images/<category>/` (keep the same names,
  use `.webp`, ~1600px wide).

## SEO / Compliance Included

- Unique title, meta description, canonical, OG/Twitter tags per page
- Organization + LocalBusiness + WebSite + BreadcrumbList JSON-LD
- Product / Service structured data on respective pages (no fake prices/ratings)
- `sitemap.xml`, `robots.txt` (thank-you page excluded + noindex)
- Privacy Policy & Terms pages, honeypot spam protection, throttling in Apps Script
