import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import LeadForm from '../components/LeadForm';
import site from '../config/site';

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  'Thakurpada, Near Shamshan Bhumi, Thane, 400612, Maharashtra, India'
)}&output=embed`;

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | FINE ALLOYS — Thane, Maharashtra | Call 9619511363"
        description="Contact FINE ALLOYS for aluminium scrap collection, purchase or supply. Call or WhatsApp 9619511363, or visit us at Thakurpada, Thane 400612, Maharashtra, India."
        path="/contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]}
      />
      <PageHero
        eyebrow="CONTACT US"
        lines={["Let's talk", 'aluminium']}
        lede="Call, WhatsApp, email or visit — whichever suits you. We respond during business hours."
        bg="/images/hero/hero-banner.png"
        crumbs={[{ name: 'Contact Us', path: '/contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <Reveal>
              <div className="info-card" data-testid="contact-phone-card">
                <span className="info-ico"><Phone size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Phone</h3>
                  <a className="val" href={site.tel}>{site.phoneDisplay}</a>
                  <p>Tap to call directly</p>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="info-card" data-testid="contact-whatsapp-card">
                <span className="info-ico"><MessageCircle size={20} aria-hidden="true" /></span>
                <span>
                  <h3>WhatsApp</h3>
                  <a className="val" href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}</a>
                  <p>Chat with us on WhatsApp</p>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="info-card" data-testid="contact-email-card">
                <span className="info-ico"><Mail size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Email</h3>
                  <a className="val" href={`mailto:${site.email}`}>{site.email}</a>
                  <p>Send photos &amp; lot details</p>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.21}>
              <div className="info-card" data-testid="contact-website-card">
                <span className="info-ico"><Globe size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Website</h3>
                  <a className="val" href={site.url}>{site.domain}</a>
                  <p>Products, services &amp; process</p>
                </span>
              </div>
            </Reveal>
          </div>

          <div className="split" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}>
            <Reveal>
              <span className="eyebrow">VISIT US</span>
              <h2 className="h-2" style={{ marginTop: '1rem', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>
                FINE ALLOYS — <span className="text-accent">Thane</span>
              </h2>
              <div className="info-card" style={{ marginTop: '1.6rem' }} data-testid="contact-address-card">
                <span className="info-ico"><MapPin size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Address</h3>
                  <p>
                    {site.addressLines.map((l) => <React.Fragment key={l}>{l}<br /></React.Fragment>)}
                  </p>
                </span>
              </div>
              <div className="cta-row" style={{ marginTop: '1.6rem' }}>
                <a href={site.tel} className="btn btn-primary" onClick={() => window.gtag?.('event', 'phone_click', { location: 'contact_page' })} data-testid="contact-call-button">
                  <Phone size={17} aria-hidden="true" /> CALL NOW
                </a>
                <a href={site.whatsappPrefill} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" onClick={() => window.gtag?.('event', 'whatsapp_click', { location: 'contact_page' })} data-testid="contact-whatsapp-button">
                  <MessageCircle size={17} aria-hidden="true" /> WHATSAPP US
                </a>
              </div>
              <div className="map-embed" style={{ marginTop: '2rem' }}>
                <iframe
                  title="FINE ALLOYS location map — Thakurpada, Thane, Maharashtra"
                  src={MAP_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <LeadForm sourcePage="Contact Page" variant="contact" title="Send Us a Message" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
