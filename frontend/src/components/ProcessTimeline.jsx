import React from 'react';
import Reveal from './Reveal';

export default function ProcessTimeline({ steps, dark = false }) {
  return (
    <div className="timeline">
      {steps.map((s, i) => (
        <Reveal key={s.n} delay={0.05}>
          <div className="tstep" data-testid={`process-step-${s.n}`}>
            <span className="tstep-num" aria-hidden="true">{s.n}</span>
            <div className="tstep-body">
              <div>
                <h3><span>Step {s.n}</span> — {s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <img src={s.img} alt={s.alt} width="360" height="240" loading={i < 2 ? 'eager' : 'lazy'} decoding="async" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
