import React from 'react';
import Reveal from './Reveal';

export default function SectionHead({ eyebrow, title, lede, center = false, chapter }) {
  return (
    <>
      {chapter && (
        <span className="chapter" aria-hidden="true">
          <strong>{chapter.n}</strong> / {chapter.label}
        </span>
      )}
      <Reveal className={`section-head${center ? ' section-head-center' : ''}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h-2">{title}</h2>
        {lede && <p className="lede">{lede}</p>}
      </Reveal>
    </>
  );
}
