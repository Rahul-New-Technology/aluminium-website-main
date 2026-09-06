import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import site from '../config/site';

export default function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | FINE ALLOYS"
        description="Terms and conditions governing the use of the FINE ALLOYS website and business enquiries."
        path="/terms-and-conditions"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms-and-conditions' }]}
      />
      <PageHero
        eyebrow="LEGAL"
        lines={['Terms & Conditions']}
        lede="The terms that govern use of this website and enquiries made through it. Last updated: July 2026."
        bg="/images/hero/hero-banner.png"
        crumbs={[{ name: 'Terms & Conditions', path: '/terms-and-conditions' }]}
      />
      <section className="section">
        <div className="container legal-body">
          <p>
            These terms govern the use of {site.url} (the &ldquo;Website&rdquo;), operated by FINE ALLOYS,
            Thane, Maharashtra, India. By using this Website you accept these terms.
          </p>

          <h2>About the Website</h2>
          <p>
            The Website presents information about FINE ALLOYS and its aluminium scrap recycling,
            refining, processing and supply business. Content is provided for general information and
            enquiry purposes.
          </p>

          <h2>Enquiries and Quotations</h2>
          <ul>
            <li>Submitting a form, calling or messaging us creates an enquiry, not a contract.</li>
            <li>Any quotation is provided separately after evaluation of material, quantity and logistics.</li>
            <li>Material descriptions, grades and availability are confirmed during direct communication.</li>
            <li>Final terms of any transaction are agreed between the parties before execution.</li>
          </ul>

          <h2>Accuracy of Information</h2>
          <p>
            We work to keep website content accurate and current, but do not warrant that all
            descriptions or imagery represent a specific lot. Product photographs are illustrative of
            material categories.
          </p>

          <h2>Acceptable Use</h2>
          <ul>
            <li>Do not submit false, misleading or fraudulent enquiries.</li>
            <li>Do not attempt to disrupt, scrape or misuse the Website or its forms.</li>
            <li>Do not use the Website for any unlawful purpose.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The FINE ALLOYS name, logo and website content belong to FINE ALLOYS. You may not reuse
            them without written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            The Website is provided &ldquo;as is&rdquo;. To the extent permitted by law, FINE ALLOYS is not
            liable for indirect losses arising from use of the Website or reliance on its general content.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Courts at Thane, Maharashtra shall have
            jurisdiction over disputes relating to the Website.
          </p>

          <h2>Contact</h2>
          <p>
            FINE ALLOYS<br />
            {site.addressOneLine}<br />
            Phone: <a href={site.tel}>{site.phoneDisplay}</a> · Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
