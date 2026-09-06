import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import ServiceCard from '../components/ServiceCard';
import CTABand from '../components/CTABand';
import services from '../data/services';
import site from '../config/site';

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Aluminium scrap services — FINE ALLOYS',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.desc,
      provider: { '@id': `${site.url}/#business` },
      areaServed: { '@type': 'Country', name: 'India' },
    },
  })),
};

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Aluminium Scrap Collection, Sorting, Refining & Supply — FINE ALLOYS"
        description="FINE ALLOYS services: aluminium scrap collection, sorting, grading, processing, recycling, refining, quality inspection, bulk supply and logistics coordination across India."
        path="/services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]}
        jsonLd={serviceLd}
      />
      <PageHero
        eyebrow="OUR SERVICES"
        lines={['From scrap pickup', 'to refined supply']}
        lede="Nine connected services that move aluminium scrap from your gate to its next life — with one accountable team."
        bg="/images/hero/hero-banner.png"
        crumbs={[{ name: 'Services', path: '/services' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="WHAT WE DO"
            title={<>End-to-end <span className="text-accent">scrap solutions</span></>}
            lede="Use one service or the full chain — every engagement starts with a clear, no-obligation enquiry."
          />
          <div className="grid-3">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} withImage />)}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="START WITH AN ENQUIRY"
        title={<>Describe your material — <span className="text-accent">we'll respond with next steps</span></>}
        lede="Call, WhatsApp or send the enquiry form. We respond during business hours."
        location="services-bottom"
      />
    </>
  );
}
