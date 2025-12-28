
import React from 'react';

const Logos: React.FC = () => {
  const logos = [
    { name: 'Google', color: 'text-slate-400' },
    { name: 'avast', color: 'text-slate-400' },
    { name: 'ebay', color: 'text-slate-400' },
    { name: 'PayPal', color: 'text-slate-400' },
    { name: 'HubSpot', color: 'text-slate-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 border-y border-slate-100">
      <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo) => (
          <span key={logo.name} className={`text-2xl font-bold ${logo.color} tracking-tight`}>
            {logo.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logos;
