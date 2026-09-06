import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import site from '../config/site';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group">
          <a href={site.tel} onClick={() => window.gtag?.('event', 'phone_click', { location: 'topbar' })} data-testid="topbar-phone-link">
            <Phone size={13} aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hide-sm" data-testid="topbar-email-link">
            <Mail size={13} aria-hidden="true" /> {site.email}
          </a>
          <span className="item hide-sm">
            <MapPin size={13} aria-hidden="true" /> {site.addressShort}
          </span>
        </div>
        <span className="topbar-values" aria-label="Our values">
          <b>QUALITY</b> | <b>TRUST</b> | <b>VALUE</b>
        </span>
      </div>
    </div>
  );
}
