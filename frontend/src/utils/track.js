// Analytics helper — safe no-op until IDs are configured in src/config/site.js.
// Configure GA_MEASUREMENT_ID / GOOGLE_ADS_CONVERSION_ID there to activate.
import site from '../config/site';

let gtagReady = false;

export function initAnalytics() {
  if (gtagReady || !site.gaMeasurementId) return;
  gtagReady = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', site.gaMeasurementId);
}

export function trackEvent(name, params = {}) {
  if (window.gtag) window.gtag('event', name, params);
}

export function trackConversion() {
  if (window.gtag && site.adsConversionId) {
    window.gtag('event', 'conversion', { send_to: site.adsConversionId });
  }
}
