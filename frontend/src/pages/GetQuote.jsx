import React from 'react';
import { Phone, MessageCircle, ClipboardList, PhoneCall, FileCheck } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import LeadForm from '../components/LeadForm';
import site from '../config/site';

const NEXT_STEPS = [
  { icon: ClipboardList, t: 'You submit the form', d: 'Share material type, quantity and location — takes under a minute.' },
  { icon: PhoneCall, t: 'We call you back', d: 'Our team reviews your enquiry and contacts you during business hours.' },
  { icon: FileCheck, t: 'You get a clear offer', d: 'Transparent evaluation and next steps — collection, purchase or supply.' },
];

export default function GetQuote() {
  return (
    <>
      <SEO
        title="Get a Quote | Aluminium Scrap Enquiry — FINE ALLOYS, Thane"
        description="Request a quote for aluminium scrap collection, purchase or supply. Fill the enquiry form or call/WhatsApp FINE ALLOYS on 9619511363."
        path="/get-a-quote"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Get a Quote', path: '/get-a-quote' }]}
      />
      <PageHero
        eyebrow="GET A QUOTE"
        lines={['Tell us what', 'you have — or need']}
        lede="One form, one call or one WhatsApp message. That is all it takes to start."
        bg="/images/hero/hero-banner.jpg"
        crumbs={[{ name: 'Get a Quote', path: '/get-a-quote' }]}
      />

      <section className="section section-soft">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <Reveal delay={0.05}>
              <LeadForm sourcePage="Get a Quote Page" variant="quote" title="Submit Your Enquiry" />
            </Reveal>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <Reveal delay={0.12}>
                <div className="form-card" style={{ background: 'var(--navy-900)', border: 'none', color: '#dbe4f0' }}>
                  <h3 className="h-3" style={{ color: '#fff' }}>Prefer to talk?</h3>
                  <p style={{ color: '#a9b8cd', marginTop: '0.6rem', fontSize: '0.97rem' }}>
                    Skip the form — reach us directly and describe your material.
                  </p>
                  <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1.4rem' }}>
                    <a href={site.tel} className="btn btn-primary" onClick={() => window.gtag?.('event', 'phone_click', { location: 'quote_sidebar' })} data-testid="quote-call-button">
                      <Phone size={17} aria-hidden="true" /> CALL NOW — {site.phoneDisplay}
                    </a>
                    <a href={site.whatsappPrefill} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" onClick={() => window.gtag?.('event', 'whatsapp_click', { location: 'quote_sidebar' })} data-testid="quote-whatsapp-button">
                      <MessageCircle size={17} aria-hidden="true" /> CHAT ON WHATSAPP
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="form-card">
                  <h3 className="h-3">What happens next</h3>
                  <div style={{ display: 'grid', gap: '1.1rem', marginTop: '1.2rem' }}>
                    {NEXT_STEPS.map((s, i) => (
                      <div key={s.t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <span className="info-ico" style={{ width: '2.6rem', height: '2.6rem', borderRadius: '50%', background: 'var(--navy-800)', color: 'var(--gold)', display: 'grid', placeItems: 'center', flex: 'none' }}>
                          <s.icon size={17} aria-hidden="true" />
                        </span>
                        <span>
                          <b style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--navy-800)' }}>
                            {i + 1}. {s.t}
                          </b>
                          <p style={{ color: 'var(--steel)', fontSize: '0.92rem', marginTop: '0.2rem' }}>{s.d}</p>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
