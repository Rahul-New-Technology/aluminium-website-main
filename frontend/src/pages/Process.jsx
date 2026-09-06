import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import ProcessTimeline from '../components/ProcessTimeline';
import CTABand from '../components/CTABand';
import Reveal from '../components/Reveal';
import processSteps from '../data/processSteps';

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process | Collection to Delivery in 7 Steps — FINE ALLOYS, Thane"
        description="The FINE ALLOYS 7-step aluminium scrap process: collection, inspection, sorting, grading, processing & refining, quality check, and supply & delivery."
        path="/process"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Our Process', path: '/process' }]}
      />
      <PageHero
        eyebrow="OUR PROCESS"
        lines={['Seven steps.', 'Zero shortcuts.']}
        lede="Every lot of aluminium scrap moves through the same disciplined process — so quality stays consistent and timelines stay honest."
        bg="/images/hero/hero-banner.jpg"
        crumbs={[{ name: 'Our Process', path: '/process' }]}
      />

      <section className="section section-soft">
        <div className="container" style={{ maxWidth: '64rem' }}>
          <SectionHead
            eyebrow="THE TIMELINE"
            title={<>How material moves through <span className="text-accent">FINE ALLOYS</span></>}
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="split" style={{ alignItems: 'center' }}>
            <Reveal>
              <span className="eyebrow">WHY IT MATTERS</span>
              <h2 className="h-2" style={{ marginTop: '1rem' }}>
                A defined process means <span className="text-accent">predictable outcomes</span>
              </h2>
              <p className="lede" style={{ marginTop: '1.1rem' }}>
                Sellers know their material is evaluated fairly. Buyers know dispatched material matches
                the agreed grade. And every step in between is handled by people who do it every day.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {['Traceable lots', 'Honest grading', 'Clean handling', 'On-time dispatch'].map((t, i) => (
                  <div className="why-card" key={t} style={{ textAlign: 'center' }}>
                    <span className="why-idx">{String(i + 1).padStart(2, '0')}</span>
                    <h3 style={{ marginTop: '0.6rem', fontSize: '1rem' }}>{t}</h3>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="PUT US TO WORK"
        title={<>Start the process with <span className="text-accent">one enquiry</span></>}
        lede="Send your material details and we will take it from collection onwards."
        location="process-bottom"
      />
    </>
  );
}
