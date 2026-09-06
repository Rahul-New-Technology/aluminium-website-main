import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="card" id={product.slug} data-testid={`product-card-${product.slug}`}>
        <div className="card-media">
          <img src={product.img} alt={product.alt} width="800" height="600" loading="lazy" decoding="async" />
        </div>
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <ul className="card-points">
            {product.points.map((pt) => (
              <li key={pt}><Check size={15} aria-hidden="true" /> {pt}</li>
            ))}
          </ul>
          <div className="card-foot">
            <span className="card-src">{product.source}</span>
            <br />
            <Link
              to={`/get-a-quote?product=${product.slug}`}
              className="link-arrow"
              style={{ marginTop: '0.6rem' }}
              data-testid={`product-enquire-${product.slug}`}
            >
              ENQUIRE NOW <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
