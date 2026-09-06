// ─────────────────────────────────────────────────────────────────────────────
// FINE ALLOYS — central site configuration.
// Update business details, lead endpoint and analytics IDs here only.
// ─────────────────────────────────────────────────────────────────────────────

const site = {
  name: 'FINE ALLOYS',
  tagline: 'Aluminium Scrap Recycling, Refining & Supply',
  url: 'https://www.finealuminium.com',
  domain: 'www.finealuminium.com',

  phoneDisplay: '96195 11363',
  phoneRaw: '9619511363',
  tel: 'tel:+919619511363',
  whatsapp: 'https://wa.me/919619511363',
  whatsappPrefill:
    'https://wa.me/919619511363?text=' +
    encodeURIComponent('Hello FINE ALLOYS, I have an enquiry regarding aluminium scrap.'),
  email: 'finealloys@gmail.com',

  addressLines: [
    'Dahisar Pimpr, SR NO 02 H No 10,',
    'Thakurpada, Near Shamshan Bhumi,',
    'Thane, 400612, Maharashtra, India',
  ],
  addressOneLine:
    'Dahisar Pimpr, SR NO 02 H No 10, Thakurpada, Near Shamshan Bhumi, Thane, 400612, Maharashtra, India',
  addressShort: 'Thane, Maharashtra, India',

  // ── LEAD CAPTURE (Google Sheets) ─────────────────────────────────────────
  // PASTE your deployed Google Apps Script Web App URL below (ends with /exec).
  // See scripts/google-apps-script.js for the ready-to-deploy Apps Script code
  // and README.md for step-by-step setup instructions.
  // When empty, forms run in "demo mode" (no data leaves the browser).
  leadEndpoint: '',

  // ── ANALYTICS / CONVERSION TRACKING ──────────────────────────────────────
  // Fill these in to enable GA4 + Google Ads conversion tracking.
  gaMeasurementId: '', // e.g. 'G-XXXXXXXXXX'  (GA_MEASUREMENT_ID)
  adsConversionId: '', // e.g. 'AW-XXXXXXXXX/xxxxxxxx' (GOOGLE_ADS_CONVERSION_ID)
};

export const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'PRODUCTS', to: '/products' },
  { label: 'SERVICES', to: '/services' },
  { label: 'OUR PROCESS', to: '/process' },
  { label: 'WHY US', to: '/why-us' },
  { label: 'GALLERY', to: '/gallery' },
  { label: 'CONTACT US', to: '/contact' },
];

export default site;
