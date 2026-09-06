import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Reveal from './Reveal';

export default function GalleryGrid({ items, categories = [], limit }) {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const visible = items
    .filter((it) => filter === 'All' || it.cat === filter)
    .slice(0, limit || items.length);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      {categories.length > 0 && (
        <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
          {categories.map((c) => (
            <button
              key={c}
              className={filter === c ? 'active' : ''}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              data-testid={`gallery-filter-${c.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {visible.map((it, i) => (
          <Reveal key={it.src} delay={(i % 3) * 0.07}>
            <button
              className="gallery-item"
              onClick={() => setActive(it)}
              aria-label={`Open image: ${it.alt}`}
              data-testid="gallery-item"
            >
              <img src={it.src} alt={it.alt} width="800" height="600" loading="lazy" decoding="async" />
              <figcaption>
                <b>{it.cat}</b>
                <span>{it.alt}</span>
              </figcaption>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close image viewer" data-testid="lightbox-close">
            <X size={22} />
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.cat} — {active.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
