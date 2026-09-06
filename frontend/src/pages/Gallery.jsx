import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import GalleryGrid from '../components/GalleryGrid';
import CTABand from '../components/CTABand';
import galleryItems, { galleryCategories } from '../data/gallery';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | Aluminium Scrap, Sorting, Processing & Refining — FINE ALLOYS"
        description="Photo gallery of FINE ALLOYS operations: aluminium scrap, sorting, processing, refining, material, warehouse, loading and delivery."
        path="/gallery"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]}
      />
      <PageHero
        eyebrow="GALLERY"
        lines={['Inside our', 'operations']}
        lede="Aluminium scrap, sorting lines, processing, refining and dispatch — a working view of FINE ALLOYS, Thane."
        bg="/images/hero/hero-banner.jpg"
        crumbs={[{ name: 'Gallery', path: '/gallery' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="ON THE GROUND"
            title={<>Scrap to supply, <span className="text-accent">in frames</span></>}
            lede="Filter by category and tap any image to view it larger."
          />
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>

      <CTABand
        eyebrow="LIKE HOW WE WORK?"
        title={<>Bring us your <span className="text-accent">next lot</span></>}
        lede="Call, WhatsApp or send an enquiry — we respond during business hours."
        location="gallery-bottom"
      />
    </>
  );
}
