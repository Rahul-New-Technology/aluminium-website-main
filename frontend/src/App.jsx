import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Layout from './components/Layout';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const Process = lazy(() => import('./pages/Process'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const GetQuote = lazy(() => import('./pages/GetQuote'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <Layout>
      <Suspense fallback={<div className="route-loader" aria-label="Loading page"><span>FINE ALLOYS</span></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<GetQuote />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
