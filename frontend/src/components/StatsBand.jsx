import React from 'react';
import Reveal from './Reveal';

export default function StatsBand({ stats }) {
  return (
    <div className="stats" data-testid="stats-band">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div className="stat">
            <div className="num">{s.value}</div>
            <div className="lbl">{s.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
