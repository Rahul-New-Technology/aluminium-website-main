import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import site from '../config/site';
import { trackEvent } from '../utils/track';

export default function StickyCTA() {
  const { pathname } = useLocation();
  if (pathname === '/thank-you') return null;
  return (
    <nav className="sticky-cta" aria-label="Quick contact actions">
      <a href={site.tel} onClick={() => trackEvent('phone_click', { location: 'sticky_bar' })} data-testid="sticky-call-button">
        <Phone size={19} aria-hidden="true" /> CALL NOW
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { location: 'sticky_bar' })}
        data-testid="sticky-whatsapp-button"
      >
        <MessageCircle size={19} aria-hidden="true" /> WHATSAPP
      </a>
      <Link to="/get-a-quote" data-testid="sticky-quote-button">
        <FileText size={19} aria-hidden="true" /> GET QUOTE
      </Link>
    </nav>
  );
}
