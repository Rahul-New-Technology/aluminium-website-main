import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CTABand from '../components/CTABand';
import StatsBand from '../components/StatsBand';
import whyUs from '../data/whyUs';

export default function WhyUs() {
  return (
    <>
      <SEO
        title="Why Choose FINE ALLOYS | Aluminium Scrap Partner in Thane, Maharashtra"
        description="Why businesses choose FINE ALLOYS: quality-focused approach, reliable communication, proper material handling, consistent process and transparent dealings."
        path="/why-us"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Why Us', path: '/why-us' }]}
      />
      <PageHero
        eyebrow="WHY CHOOSE US"
        lines={['Built on quality,', 'trust and value']}
        lede="Eight reasons businesses across Maharashtra and India trust FINE ALLOYS with their aluminium scrap."
        bg="/images/hero/hero-banner.jpg"
        crumbs={[{ name: 'Why Us', path: '/why-us' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="THE FINE ALLOYS DIFFERENCE"
            title={<>Reasons to work <span className="text-accent">with us</span></>}
            lede="No exaggerated claims — just the way we actually work, every day."
          />
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.07}>
                <div className="why-card" style={{ height: '100%' }}>
                  <span className="why-idx">{String(i + 1).padStart(2, '0')}</span>
                  <w.icon size={30} className="why-ico" aria-hidden="true" />
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <Reveal className="split-media">
              <img
                src="/images/why-us/why-fine-alloys.png"
                alt="Industrial aluminium operations at scale"
                width="1000" height="700" loading="lazy" decoding="async"
              />
              <span className="frame-tag">QUALITY · TRUST · VALUE</span>
            </Reveal>
            <Reveal>
              <span className="eyebrow">OUR PROMISE</span>
              <h2 className="h-2" style={{ marginTop: '1rem' }}>
                Simple promises, <span className="text-accent">kept well</span>
              </h2>
              <p className="lede" style={{ marginTop: '1.1rem' }}>
                We would rather make a small promise and keep it than a large one and explain it.
                When you work with FINE ALLOYS you get honest evaluation, clear communication and
                material that matches its commitment — that is the whole business model.
              </p>
              <div style={{ marginTop: '2rem' }} className="cta-row">
                <a href="/get-a-quote" className="btn btn-primary" data-testid="whyus-quote-button">GET A QUOTE</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand stats={[
        { value: '10+', label: 'Scrap Categories Handled' },
        { value: '7-Step', label: 'Quality Process' },
        { value: 'Pan-India', label: 'Supply Enquiries Served' },
        { value: 'Thane, MH', label: 'Our Base of Operations' },
      ]} />

      <CTABand
        eyebrow="SEE FOR YOURSELF"
        title={<>Send one lot. <span className="text-accent">Judge us on it.</span></>}
        lede="The fastest way to evaluate a scrap partner is to work with them once."
        location="whyus-bottom"
      />
    </>
  );
}
