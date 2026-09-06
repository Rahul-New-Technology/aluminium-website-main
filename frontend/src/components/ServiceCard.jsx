import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function ServiceCard({ service, index = 0, withImage = false }) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className={`card${withImage ? '' : ' card-service'}`} id={service.slug} data-testid={`service-card-${service.slug}`}>
        {withImage && (
          <div className="card-media">
            <img src={service.img} alt={service.alt} width="800" height="600" loading="lazy" decoding="async" />
          </div>
        )}
        <div className={withImage ? 'card-body' : undefined}>
          {!withImage && (
            <span className="svc-ico"><Icon size={26} aria-hidden="true" /></span>
          )}
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
          <ul>
            {service.benefits.map((b) => (
              <li key={b}><Check size={15} aria-hidden="true" /> {b}</li>
            ))}
          </ul>
          <div className="card-foot">
            <Link
              to={`/get-a-quote?service=${service.slug}`}
              className="link-arrow"
              data-testid={`service-enquire-${service.slug}`}
            >
              ENQUIRE NOW <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
