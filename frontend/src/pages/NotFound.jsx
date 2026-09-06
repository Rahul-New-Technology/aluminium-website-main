import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | FINE ALLOYS" description="The page you are looking for does not exist." path="/404" noindex />
      <section className="section section-navy" style={{ minHeight: 'calc(100svh - 7.6rem)', display: 'grid', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>ERROR 404</span>
          <h1 className="h-1" style={{ marginTop: '1rem' }} data-testid="notfound-heading">
            Page not <span className="text-accent">found</span>
          </h1>
          <p className="lede" style={{ margin: '1.2rem auto 0', color: '#a9b8cd' }}>
            The page you are looking for may have moved. Let us take you back.
          </p>
          <div className="cta-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/" className="btn btn-primary" data-testid="notfound-home-button">
              <ArrowLeft size={16} aria-hidden="true" /> BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
