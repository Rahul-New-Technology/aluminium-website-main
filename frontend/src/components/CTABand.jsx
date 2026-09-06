import React from 'react';
import Reveal from './Reveal';
import CTAGroup from './CTAGroup';

export default function CTABand({ eyebrow = 'GET STARTED', title, lede, bg = '/images/cta/molten-sparks.webp', location = 'band' }) {
  return (
    <section className="quote-band section" style={{ '--quote-bg': `url(${bg})` }}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h-2" style={{ marginTop: '1rem', maxWidth: '20ch' }}>{title}</h2>
          {lede && <p className="lede" style={{ color: '#a9b8cd', marginTop: '1rem' }}>{lede}</p>}
          <div style={{ marginTop: '2rem' }}>
            <CTAGroup location={location} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
