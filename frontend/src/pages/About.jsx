import React from 'react';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CTABand from '../components/CTABand';
import StatsBand from '../components/StatsBand';

const VALUES = [
  { t: 'Quality Commitment', d: 'Material is inspected, sorted and graded before it moves. What we commit is what we deliver.' },
  { t: 'Customer-First Approach', d: 'We shape our work around your requirement — type, form, quantity and schedule.' },
  { t: 'Responsible Recycling', d: 'Scrap is routed responsibly back into productive use, supporting a circular aluminium economy.' },
  { t: 'Supply Reliability', d: 'Clear commitments and proactive coordination keep your production or trade moving.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | FINE ALLOYS — Aluminium Scrap Recycling & Supply, Thane"
        description="Learn about FINE ALLOYS — an India-based aluminium scrap recycling, refining, processing and supply business located in Thane, Maharashtra."
        path="/about"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]}
      />
      <PageHero
        eyebrow="ABOUT US"
        lines={['The people behind', 'the metal']}
        lede="FINE ALLOYS is a Thane-based aluminium scrap recycling, refining, processing and supply business serving industries across India."
        bg="/images/hero/hero-banner.png"
        crumbs={[{ name: 'About Us', path: '/about' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="split-media">
              <img
                className="img-tall"
                src="/images/about/about-fine-alloys.webp"
                alt="Aluminium recycling facility operations"
                width="1000" height="700" loading="lazy" decoding="async"
              />
              <span className="frame-tag">THANE · MAHARASHTRA</span>
            </Reveal>
            <Reveal>
              <span className="eyebrow">WHO WE ARE</span>
              <h2 className="h-2" style={{ marginTop: '1rem' }}>
                A professional home for <span className="text-accent">aluminium scrap</span>
              </h2>
              <p className="lede" style={{ marginTop: '1.1rem' }}>
                FINE ALLOYS deals in all types of aluminium scrap. From our base at Thakurpada, Thane,
                we collect scrap from industries, factories, fabricators and dealers — then sort, grade,
                process and refine it into material that foundries, recyclers and manufacturers can rely on.
              </p>
              <p className="lede" style={{ marginTop: '1rem' }}>
                Our working principle is simple: recycling today for a better tomorrow. That means honest
                evaluation for sellers, dependable quality for buyers, and responsible handling of every
                kilogram that passes through our yard.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHead
            eyebrow="WHAT WE STAND FOR"
            title={<>The values we <span className="text-accent">work by</span></>}
            center
          />
          <div className="grid-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}>
                <div className="why-card" style={{ height: '100%' }}>
                  <span className="why-idx">{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ marginTop: '0.8rem' }}>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split split-reverse">
            <Reveal className="split-media">
              <img
                src="/images/about/quality-commitment.png"
                alt="Industrial professional overseeing quality at an aluminium operation"
                width="1000" height="700" loading="lazy" decoding="async"
              />
              <span className="frame-tag">QUALITY FIRST</span>
            </Reveal>
            <Reveal>
              <span className="eyebrow">HOW WE WORK</span>
              <h2 className="h-2" style={{ marginTop: '1rem' }}>
                A professional process, <span className="text-accent">every single time</span>
              </h2>
              <p className="lede" style={{ marginTop: '1.1rem' }}>
                Whether you are selling a one-time lot or planning a regular supply arrangement,
                the way we handle your material stays the same — structured, transparent and careful.
              </p>
              <ul className="check-list">
                <li><Check size={17} aria-hidden="true" /><span><b>Defined 7-step process</b> from collection to delivery.</span></li>
                <li><Check size={17} aria-hidden="true" /><span><b>Lot-wise inspection</b> before material is accepted or dispatched.</span></li>
                <li><Check size={17} aria-hidden="true" /><span><b>Direct communication</b> on phone and WhatsApp — no runaround.</span></li>
                <li><Check size={17} aria-hidden="true" /><span><b>Transparent enquiry</b> and evaluation, with no hidden conditions.</span></li>
              </ul>
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
        eyebrow="WORK WITH US"
        title={<>Let&rsquo;s talk about your <span className="text-accent">aluminium requirement</span></>}
        lede="Selling scrap or sourcing material — either way, we would like to hear from you."
        location="about-bottom"
      />
    </>
  );
}
