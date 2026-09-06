import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import { initAnalytics } from '../utils/track';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <StickyCTA />
    </>
  );
}
