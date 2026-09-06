import React from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import site from '../config/site';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | FINE ALLOYS"
        description="How FINE ALLOYS collects, uses and protects the contact information you share through enquiry forms, phone, WhatsApp and email."
        path="/privacy-policy"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]}
      />
      <PageHero
        eyebrow="LEGAL"
        lines={['Privacy Policy']}
        lede="How we handle the information you share with us. Last updated: July 2026."
        bg="/images/cta/recycling-environment.png"
        crumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]}
      />
      <section className="section">
        <div className="container legal-body">
          <p>
            FINE ALLOYS ({site.domain}) respects your privacy. This policy explains what information
            we collect through this website, why we collect it and how it is handled.
          </p>

          <h2>Information We Collect</h2>
          <p>When you submit an enquiry, contact or quote form, we collect the details you provide:</p>
          <ul>
            <li>Full name and company name</li>
            <li>Phone number and email address</li>
            <li>City and state</li>
            <li>Product / scrap type, quantity, requirement type and your message</li>
            <li>The page from which the enquiry was sent</li>
          </ul>
          <p>
            We also receive information you share when you call us, message us on WhatsApp or email us
            directly.
          </p>

          <h2>Why We Collect It</h2>
          <ul>
            <li>To respond to your enquiry and discuss your requirement</li>
            <li>To evaluate material and prepare quotations</li>
            <li>To coordinate collection, delivery or supply logistics</li>
            <li>To keep a record of business communication</li>
          </ul>

          <h2>How Your Data Is Processed</h2>
          <p>
            Form submissions are delivered to us through a secure serverless endpoint (Google Apps
            Script) and recorded in a Google Sheets spreadsheet operated by FINE ALLOYS. Access to this
            data is limited to our team. We do not sell, rent or share your personal information with
            third parties for their marketing purposes.
          </p>

          <h2>Third-Party Services</h2>
          <ul>
            <li>Google Sheets / Google Apps Script — lead storage and processing</li>
            <li>WhatsApp — when you choose to message us (governed by WhatsApp&rsquo;s own policies)</li>
            <li>Google Maps — the embedded map on our contact page (governed by Google&rsquo;s policies)</li>
            <li>Google Analytics / Google Ads — only if and when enabled, for anonymous usage measurement and conversion tracking</li>
          </ul>

          <h2>Data Retention &amp; Security</h2>
          <p>
            Enquiry records are retained for as long as needed to serve the business relationship and
            meet record-keeping needs. Reasonable technical and organisational measures are used to
            protect the information we hold.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may ask us to correct or delete the information you have shared, or ask what we hold
            about you, by contacting us at <a href={`mailto:${site.email}`}>{site.email}</a> or
            calling <a href={site.tel}>{site.phoneDisplay}</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The latest version will always be available
            on this page.
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
