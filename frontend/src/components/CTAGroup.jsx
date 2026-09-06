import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import site from '../config/site';
import { trackEvent } from '../utils/track';

export default function CTAGroup({ quote = true, call = true, whatsapp = true, location = 'section' }) {
  return (
    <div className="cta-row">
      {quote && (
        <Link to="/get-a-quote" className="btn btn-primary" data-testid={`cta-quote-${location}`}>
          GET A QUOTE <ArrowRight size={16} className="arrow" aria-hidden="true" />
        </Link>
      )}
      {call && (
        <a
          href={site.tel}
          className="btn btn-outline-light"
          onClick={() => trackEvent('phone_click', { location })}
          data-testid={`cta-call-${location}`}
        >
          <Phone size={17} aria-hidden="true" /> CALL NOW
        </a>
      )}
      {whatsapp && (
        <a
          href={site.whatsappPrefill}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          onClick={() => trackEvent('whatsapp_click', { location })}
          data-testid={`cta-whatsapp-${location}`}
        >
          <MessageCircle size={17} aria-hidden="true" /> WHATSAPP US
        </a>
      )}
    </div>
  );
}
