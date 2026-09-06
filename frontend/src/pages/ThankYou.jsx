import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, MessageCircle, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import site from '../config/site';

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | Enquiry Received — FINE ALLOYS"
        description="Your enquiry has been received successfully. The FINE ALLOYS team will contact you regarding your requirement."
        path="/thank-you"
        noindex
      />
      <section className="section section-navy" style={{ minHeight: 'calc(100svh - 7.6rem)', display: 'grid', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '44rem' }}>
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            style={{ display: 'grid', placeItems: 'center', marginBottom: '2rem' }}
          >
            <span className="thankyou-check"><Check size={42} strokeWidth={3} aria-hidden="true" /></span>
          </motion.div>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>ENQUIRY RECEIVED</span>
          <h1 className="h-1" style={{ marginTop: '1rem' }} data-testid="thankyou-heading">
            Thank <span className="text-accent">You!</span>
          </h1>
          <p className="lede" style={{ margin: '1.2rem auto 0', color: '#a9b8cd' }}>
            Your enquiry has been received successfully. Our team will contact you regarding
            your requirement during business hours.
          </p>

          <div className="cta-row" style={{ justifyContent: 'center', marginTop: '2.2rem' }}>
            <a href={site.tel} className="btn btn-primary" onClick={() => window.gtag?.('event', 'phone_click', { location: 'thank_you' })} data-testid="thankyou-call-button">
              <Phone size={17} aria-hidden="true" /> CALL NOW
            </a>
            <a href={site.whatsappPrefill} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" onClick={() => window.gtag?.('event', 'whatsapp_click', { location: 'thank_you' })} data-testid="thankyou-whatsapp-button">
              <MessageCircle size={17} aria-hidden="true" /> WHATSAPP US
            </a>
            <Link to="/" className="btn btn-outline-light" data-testid="thankyou-home-button">
              <Home size={17} aria-hidden="true" /> BACK TO HOME
            </Link>
          </div>

          <div className="grid-3" style={{ marginTop: '3.5rem', textAlign: 'left' }}>
            {[
              { n: '01', t: 'We review your enquiry', d: 'Material type, quantity and location are checked by our team.' },
              { n: '02', t: 'We contact you', d: 'Expect a call or WhatsApp message during business hours.' },
              { n: '03', t: 'We move material', d: 'Collection, purchase or supply is coordinated on confirmation.' },
            ].map((s) => (
              <div className="why-card" key={s.n} style={{ background: 'var(--navy-850)', borderColor: 'var(--line-dark)' }}>
                <span className="why-idx">{s.n}</span>
                <h3 style={{ color: '#fff', marginTop: '0.7rem', fontSize: '1.02rem' }}>{s.t}</h3>
                <p style={{ color: '#a9b8cd' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
