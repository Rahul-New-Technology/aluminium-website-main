import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Phone, MapPin, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import CTAGroup from '../components/CTAGroup';
import CTABand from '../components/CTABand';
import TrustBadges from '../components/TrustBadges';
import StatsBand from '../components/StatsBand';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import GalleryGrid from '../components/GalleryGrid';
import LeadForm from '../components/LeadForm';
import site from '../config/site';
import products from '../data/products';
import services from '../data/services';
import processSteps from '../data/processSteps';
import whyUs from '../data/whyUs';
import galleryItems from '../data/gallery';

const HERO_LINES = [
  <>ALUMINIUM SCRAP</>,
  <><span className="accent">RECYCLING, REFINING</span></>,
  <>&amp; SUPPLY</>,
];

const TRUST = ['Quality Focused', 'Reliable Supply', 'Responsible Recycling', 'Competitive Value'];

const INDUSTRIES = ['Automotive', 'Construction', 'Electrical', 'Packaging', 'Manufacturing', 'Fabrication', 'Engineering', 'Foundries'];

const STATS = [
  { value: '10+', label: 'Scrap Categories Handled' },
  { value: '7-Step', label: 'Quality Process' },
  { value: 'Pan-India', label: 'Supply Enquiries Served' },
  { value: 'Thane, MH', label: 'Our Base of Operations' },
];

export default function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%']);

  return (
    <>
      <SEO
        title="FINE ALLOYS | Aluminium Scrap Recycling, Refining & Supply — Thane, India"
        description="FINE ALLOYS — aluminium scrap collection, sorting, grading, processing, refining and bulk material supply from Thane, Maharashtra, India. Call 9619511363 or send an enquiry."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="container hero-inner">
          <div>
            <div className="hero-eyebrow">
              <motion.span
                className="eyebrow"
                initial={reduce ? false : { opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                FINE ALLOYS · THANE, MAHARASHTRA
              </motion.span>
            </div>
            <h1 className="h-display" data-testid="hero-headline">
              {HERO_LINES.map((line, i) => (
                <span className="line" key={i}>
                  <motion.span
                    initial={reduce ? false : { y: '112%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              className="hero-sub"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              We deal in all types of aluminium scrap — collection, sorting, grading, processing,
              refining and dependable material supply for industries across India.
              Recycling today for a better tomorrow.
            </motion.p>
            <motion.ul
              className="trust-points"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
            >
              {TRUST.map((t) => (
                <li key={t}><Check size={15} aria-hidden="true" /> {t}</li>
              ))}
            </motion.ul>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <CTAGroup location="hero" />
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="frame">
              <motion.img
                src="/images/hero/aluminium-melting-pour.webp"
                alt="Molten aluminium being poured from a foundry ladle during refining"
                width="1200"
                height="900"
                fetchPriority="high"
                decoding="async"
                style={{ y: imgY }}
              />
            </div>
            <span className="slash-line" aria-hidden="true" />
            <span className="slash-line-2" aria-hidden="true" />
            <span className="slash-accent" aria-hidden="true" />
            <div className="hero-plate">
              <div className="num">7-STEP</div>
              <div className="lbl">Quality Process</div>
            </div>
          </motion.div>

          <div className="hero-plate hero-plate-float" aria-hidden="true">
            <div className="num">7-STEP</div>
            <div className="lbl">Quality Process</div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ── TRUST BADGES ── */}
      <section className="section" style={{ paddingBlock: 'clamp(3rem, 6vw, 4.5rem)' }}>
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* ── 01 ABOUT ── */}
      <section className="section section-soft">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>01</strong> / WHO WE ARE</span>
          <div className="split">
            <Reveal className="split-media">
              <img
                className="img-tall"
                src="/images/about/about-fine-alloys.webp"
                alt="Aluminium processing facility of an aluminium recycling business"
                width="1000" height="700" loading="lazy" decoding="async"
              />
              <span className="frame-tag">FINE ALLOYS · THANE</span>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">ABOUT FINE ALLOYS</span>
                <h2 className="h-2" style={{ marginTop: '1rem' }}>
                  Aluminium scrap, handled <span className="text-accent">the right way.</span>
                </h2>
                <p className="lede" style={{ marginTop: '1.1rem' }}>
                  FINE ALLOYS is an India-based aluminium scrap recycling, refining, processing and
                  supply business located in Thane, Maharashtra. We work with industries, fabricators,
                  dealers and recyclers who need their aluminium scrap handled professionally — and
                  buyers who need material they can trust.
                </p>
                <ul className="check-list">
                  <li><Check size={17} aria-hidden="true" /><span><b>End-to-end handling</b> — collection to delivery under one roof.</span></li>
                  <li><Check size={17} aria-hidden="true" /><span><b>Honest grading</b> — clear evaluation of every lot we trade.</span></li>
                  <li><Check size={17} aria-hidden="true" /><span><b>Responsible recycling</b> — material routed through the right channels.</span></li>
                </ul>
                <div style={{ marginTop: '2rem' }}>
                  <Link to="/about" className="btn btn-outline-dark" data-testid="home-about-link">
                    MORE ABOUT US <ArrowRight size={16} className="arrow" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 PRODUCTS ── */}
      <section className="section">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>02</strong> / MATERIALS</span>
          <SectionHead
            eyebrow="OUR PRODUCTS"
            title={<>Aluminium scrap &amp; material we <span className="text-accent">deal in</span></>}
            lede="From extrusion offcuts to UBC can bales and recycled ingots — every category is sorted, graded and supplied on enquiry."
          />
          <div className="grid-3">
            {products.slice(0, 6).map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
          <Reveal style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/products" className="btn btn-outline-dark" data-testid="home-products-link">
              VIEW ALL PRODUCTS <ArrowRight size={16} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 03 SERVICES ── */}
      <section className="section section-navy">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>03</strong> / CAPABILITIES</span>
          <SectionHead
            eyebrow="OUR SERVICES"
            title={<>End-to-end solutions for <span className="text-accent">aluminium scrap</span></>}
            lede="Collection, sorting, grading, processing, refining, inspection, supply and logistics — coordinated by one accountable team."
          />
          <div className="grid-3">
            {services.slice(0, 6).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
          <Reveal style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary" data-testid="home-services-link">
              EXPLORE ALL SERVICES <ArrowRight size={16} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 04 PROCESS ── */}
      <section className="section">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>04</strong> / HOW WE WORK</span>
          <SectionHead
            eyebrow="OUR PROCESS"
            title={<>Seven steps. <span className="text-accent">Zero shortcuts.</span></>}
            lede="A defined process from collection to delivery keeps every lot consistent, traceable and on schedule."
          />
          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="why-card" style={{ padding: '1.4rem 1.2rem' }}>
                  <span className="why-idx">STEP</span>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--navy-800)', lineHeight: 1, margin: '0.35rem 0 0.5rem' }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize: '0.98rem' }}>{s.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/process" className="btn btn-outline-dark" data-testid="home-process-link">
              SEE THE FULL PROCESS <ArrowRight size={16} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 05 WHY US ── */}
      <section className="section section-navy">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>05</strong> / THE DIFFERENCE</span>
          <SectionHead
            eyebrow="WHY CHOOSE FINE ALLOYS"
            title={<>Built on quality, trust <span className="text-accent">and value</span></>}
            lede="We keep our promises simple and keep them well — honest evaluation, careful handling and dependable coordination."
          />
          <div className="why-grid">
            {whyUs.slice(0, 4).map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="why-card">
                  <span className="why-idx">{String(i + 1).padStart(2, '0')}</span>
                  <w.icon size={30} className="why-ico" aria-hidden="true" />
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/why-us" className="btn btn-primary" data-testid="home-whyus-link">
              WHY FINE ALLOYS <ArrowRight size={16} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 06 QUALITY & RECYCLING ── */}
      <section className="section section-soft">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>06</strong> / RESPONSIBILITY</span>
          <div className="split split-reverse">
            <Reveal className="split-media">
              <img
                src="/images/cta/recycling-environment.png"
                alt="Aluminium material prepared for responsible recycling"
                width="1000" height="700" loading="lazy" decoding="async"
              />
              <span className="frame-tag">RESPONSIBLE RECYCLING</span>
            </Reveal>
            <div>
              <Reveal>
                <span className="eyebrow">QUALITY &amp; ENVIRONMENT</span>
                <h2 className="h-2" style={{ marginTop: '1rem' }}>
                  Recycling that respects <span className="text-accent">the metal and the planet</span>
                </h2>
                <p className="lede" style={{ marginTop: '1.1rem' }}>
                  Aluminium can be recycled repeatedly without losing its properties, and recycling it
                  uses a fraction of the energy of primary production. Our job is to make sure scrap
                  finds its way back into productive use — cleanly, honestly and efficiently.
                </p>
                <ul className="check-list">
                  <li><Check size={17} aria-hidden="true" /><span><b>Quality assurance</b> — incoming and outgoing checks on every lot.</span></li>
                  <li><Check size={17} aria-hidden="true" /><span><b>Lower footprint</b> — routing scrap back into the circular economy.</span></li>
                  <li><Check size={17} aria-hidden="true" /><span><b>Proper handling</b> — clean storage, careful loading, safe dispatch.</span></li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section" style={{ paddingBlock: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        <div className="container">
          <SectionHead
            eyebrow="INDUSTRIES WE SERVE"
            title="Material for every aluminium application"
            center
          />
          <Reveal>
            <div className="chips" style={{ justifyContent: 'center' }}>
              {INDUSTRIES.map((ind) => <span className="chip" key={ind}><i aria-hidden="true" />{ind}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <StatsBand stats={STATS} />

      {/* ── 07 GALLERY PREVIEW ── */}
      <section className="section section-soft">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>07</strong> / ON THE GROUND</span>
          <SectionHead
            eyebrow="GALLERY"
            title={<>Inside our <span className="text-accent">operations</span></>}
            lede="Scrap, sorting, processing, refining and dispatch — a look at how material moves through FINE ALLOYS."
          />
          <GalleryGrid items={galleryItems} limit={6} />
          <Reveal style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-outline-dark" data-testid="home-gallery-link">
              VIEW FULL GALLERY <ArrowRight size={16} className="arrow" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 08 QUOTE ── */}
      <section className="quote-band section section-compact">
        <div className="container">
          <span className="chapter" aria-hidden="true"><strong>08</strong> / ENQUIRE</span>
          <div className="split" style={{ alignItems: 'start', gridTemplateColumns: '1fr' }}>
            <Reveal delay={0.12}>
              <div className="form-compact">
                <LeadForm sourcePage="Homepage" variant="quote" title="Request a Call Back" />
              </div>
            </Reveal>
            <Reveal>
              <span className="eyebrow">GET A QUOTE</span>
              <h2 className="h-2" style={{ marginTop: '1rem' }}>
                Tell us what you have — <span className="text-accent">or what you need.</span>
              </h2>
              <p className="lede" style={{ color: '#a9b8cd', marginTop: '1.1rem' }}>
                Share your material type, quantity and location. Our team will evaluate your enquiry
                and get back to you with next steps. Prefer to talk? Call or WhatsApp us directly.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <CTAGroup quote={false} location="home-quote" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <section className="section">
        <div className="container">
          <div className="grid-3">
            <Reveal>
              <a href={site.tel} className="info-card" data-testid="home-contact-call">
                <span className="info-ico"><Phone size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Call Us</h3>
                  <span className="val">{site.phoneDisplay}</span>
                  <p>Mon–Sat, business hours IST</p>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a href={`mailto:${site.email}`} className="info-card" data-testid="home-contact-email">
                <span className="info-ico"><Mail size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Email Us</h3>
                  <span className="val">{site.email}</span>
                  <p>Send drawings, photos or lot details</p>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <Link to="/contact" className="info-card" data-testid="home-contact-visit">
                <span className="info-ico"><MapPin size={20} aria-hidden="true" /></span>
                <span>
                  <h3>Visit Us</h3>
                  <span className="val">Thakurpada, Thane — 400612</span>
                  <p>Maharashtra, India</p>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
