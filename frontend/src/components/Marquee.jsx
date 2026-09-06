import React from 'react';

const ITEMS = [
  'Aluminium Scrap',
  'Recycling',
  'Refining',
  'Processing',
  'Bulk Supply',
  'Thane · Maharashtra · India',
  'Quality · Trust · Value',
];

export default function Marquee() {
  const row = (
    <>
      {ITEMS.map((t) => (
        <span className="marquee-item" key={t}>
          {t} <i aria-hidden="true" />
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
