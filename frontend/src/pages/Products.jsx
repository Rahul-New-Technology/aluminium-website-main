import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import ProductCard from '../components/ProductCard';
import CTABand from '../components/CTABand';
import products from '../data/products';
import site from '../config/site';

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Aluminium scrap and material categories — FINE ALLOYS',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.desc,
      image: site.url + p.img,
      brand: { '@type': 'Organization', name: 'FINE ALLOYS' },
    },
  })),
};

export default function Products() {
  return (
    <>
      <SEO
        title="Products | Aluminium Scrap, UBC, Extrusion, Casting & More — FINE ALLOYS"
        description="Aluminium scrap categories handled by FINE ALLOYS, Thane: extrusion scrap, UBC can scrap, sheet, casting, wire, turnings, mixed scrap and recycled aluminium material."
        path="/products"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]}
        jsonLd={itemListLd}
      />
      <PageHero
        eyebrow="OUR PRODUCTS"
        lines={['Aluminium scrap,', 'graded & ready']}
        lede="Ten categories of aluminium scrap and recycled material — sorted, graded and supplied on enquiry from Thane, Maharashtra."
        bg="/images/hero/hero-banner.jpg"
        crumbs={[{ name: 'Products', path: '/products' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="MATERIAL CATEGORIES"
            title={<>What we <span className="text-accent">deal in</span></>}
            lede="Every lot is visually inspected and graded before dispatch. Click ENQUIRE NOW on any category to send us your requirement."
          />
          <div className="grid-3">
            {products.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="CAN'T FIND YOUR MATERIAL?"
        title={<>Tell us the grade — <span className="text-accent">we'll take it from there</span></>}
        lede="Mixed lots and unusual material are welcome. Send a photo and details, and we will evaluate."
        location="products-bottom"
      />
    </>
  );
}
