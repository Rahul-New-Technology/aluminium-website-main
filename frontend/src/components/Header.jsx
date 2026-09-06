import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import site, { NAV_LINKS } from '../config/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand-panel">
          <Link to="/" className="brand" aria-label="FINE ALLOYS — Home" data-testid="brand-logo-link">
            <img
              src="/images/logo/fine-alloys-logo.png"
              alt="FINE ALLOYS logo"
              width="200"
              height="60"
              fetchPriority="high"
            />
          </Link>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/get-a-quote" className="btn btn-navy btn-sm header-quote" data-testid="header-quote-button">
          GET A QUOTE <ArrowRight size={16} className="arrow" aria-hidden="true" />
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>

    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="mobile-menu-top">
        <Link to="/" className="brand" aria-label="FINE ALLOYS — Home" tabIndex={open ? 0 : -1}>
          <img src="/images/logo/fine-alloys-logo.png" alt="FINE ALLOYS logo" width="200" height="60" />
        </Link>
        <button className="nav-toggle" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }} aria-label="Close menu" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          <X size={22} />
        </button>
      </div>
      <nav aria-label="Mobile navigation">
        {NAV_LINKS.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            tabIndex={open ? 0 : -1}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <span className="idx">{String(i + 1).padStart(2, '0')}</span> {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="mobile-menu-cta">
        <Link to="/get-a-quote" className="btn btn-primary" tabIndex={open ? 0 : -1} data-testid="mobile-quote-button">
          GET A QUOTE <ArrowRight size={16} className="arrow" aria-hidden="true" />
        </Link>
        <a href={site.tel} className="btn btn-outline-light" tabIndex={open ? 0 : -1} data-testid="mobile-call-button">
          CALL NOW — {site.phoneDisplay}
        </a>
      </div>
    </div>
    </>
  );
}
