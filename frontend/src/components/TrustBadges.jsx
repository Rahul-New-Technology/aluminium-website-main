import React from 'react';
import { Medal, ShieldCheck, Recycle, BadgeIndianRupee } from 'lucide-react';
import Reveal from './Reveal';

const BADGES = [
  { icon: Medal, title: 'Premium Quality', sub: 'Inspected & graded material' },
  { icon: ShieldCheck, title: 'Trusted Supplier', sub: 'Clear, honest dealing' },
  { icon: Recycle, title: 'Eco Friendly Recycling', sub: 'Responsible material routing' },
  { icon: BadgeIndianRupee, title: 'Best Value For Scrap', sub: 'Fair, transparent evaluation' },
];

export default function TrustBadges() {
  return (
    <div className="badges" data-testid="trust-badges">
      {BADGES.map((b, i) => (
        <Reveal key={b.title} delay={i * 0.07}>
          <div className="badge">
            <span className="badge-ico"><b.icon size={24} aria-hidden="true" /></span>
            <span>
              <b>{b.title}</b>
              <small>{b.sub}</small>
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
