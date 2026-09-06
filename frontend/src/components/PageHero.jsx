import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import CTAGroup from './CTAGroup';

export default function PageHero({ eyebrow, lines, lede, bg, crumbs = [] }) {
  const reduce = useReducedMotion();
  return (
    <section className="page-hero" style={{ '--ph-bg': bg ? `url(${bg})` : 'none' }}>
      <div className="container page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c, i) => (
            <React.Fragment key={c.name}>
              <span className="sep" aria-hidden="true">/</span>
              {i === crumbs.length - 1 ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <Link to={c.path}>{c.name}</Link>
              )}
            </React.Fragment>
          ))}
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h-1">
          {lines.map((line, i) => (
            <span className="line" key={line}>
              <motion.span
                initial={reduce ? false : { y: '112%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.08 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        {lede && (
          <motion.p
            className="lede"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {lede}
          </motion.p>
        )}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{ marginTop: '2rem' }}
        >
          <CTAGroup location={`pagehero-${crumbs.length ? crumbs[crumbs.length - 1].name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'page'}`} />
        </motion.div>
      </div>
      <span className="scroll-hint" aria-hidden="true">Scroll</span>
    </section>
  );
}
