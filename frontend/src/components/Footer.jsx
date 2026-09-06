import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import site, { NAV_LINKS } from '../config/site';
import products from '../data/products';
import services from '../data/services';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow">READY TO TALK SCRAP?</span>
            <h2>Let&rsquo;s discuss your aluminium requirement.</h2>
          </div>
          <div className="cta-row">
            <a href={site.tel} className="btn btn-primary" onClick={() => window.gtag?.('event', 'phone_click', { location: 'footer_cta' })} data-testid="footer-call-button">
              <Phone size={17} aria-hidden="true" /> CALL NOW
            </a>
            <Link to="/get-a-quote" className="btn btn-outline-light" data-testid="footer-quote-button">
              GET A QUOTE <ArrowRight size={16} className="arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo/fine-alloys-logo.png" alt="FINE ALLOYS logo" width="200" height="60" loading="lazy" />
            <p>
              Aluminium scrap collection, sorting, grading, processing, refining and reliable material
              supply — from Thane, Maharashtra, to industries across India. Recycling today for a better tomorrow.
            </p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
              <li><Link to="/get-a-quote">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}><Link to={`/products#${p.slug}`}>{p.name}</Link></li>
              ))}
              <li><Link to="/products">View All Products</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Phone size={16} aria-hidden="true" />
                <span>
                  <a href={site.tel} onClick={() => window.gtag?.('event', 'phone_click', { location: 'footer_contact' })} data-testid="footer-phone-link">{site.phoneDisplay}</a>
                  {' '}·{' '}
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => window.gtag?.('event', 'whatsapp_click', { location: 'footer_contact' })} data-testid="footer-whatsapp-link">
                    <MessageCircle size={12} aria-hidden="true" style={{ display: 'inline', verticalAlign: '-1px' }} /> WhatsApp
                  </a>
                </span>
              </li>
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <span>{site.addressOneLine}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FINE ALLOYS. All Rights Reserved.</span>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
