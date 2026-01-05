import React from 'react';
import { BRAND_LOGOS } from '../constants';

const LogoTicker: React.FC = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">BRANDS WE TRACK & ANALYZE</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        
        {/* Primary Track */}
        <div className="animate-marquee whitespace-nowrap flex space-x-20">
          {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
            <span key={idx} className="text-2xl font-extrabold text-slate-200 uppercase tracking-widest hover:text-brand-500 transition-colors cursor-default select-none">
              {logo}
            </span>
          ))}
        </div>
        
        {/* Duplicate Track */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-20">
          {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
            <span key={`dup-${idx}`} className="text-2xl font-extrabold text-slate-200 uppercase tracking-widest hover:text-brand-500 transition-colors cursor-default select-none">
              {logo}
            </span>
          ))}
        </div>
        
        {/* Left Fade */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        
        {/* Right Fade */}
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default LogoTicker;
