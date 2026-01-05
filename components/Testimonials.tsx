import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Sparkles } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 mb-6 md:mb-8 shadow-sm">
            <Sparkles size={14} className="text-brand-600" fill="currentColor" />
            <span className="text-xs font-bold text-brand-700 tracking-wide uppercase">With Us</span>
          </div>
          
          <h2 className="text-[32px] sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 md:mb-8 break-keep leading-[1.2] md:leading-[1.15]">
            <span className="block mb-1 md:mb-0.5">
              이미 수만 명의 팔로워가 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 mx-2">선택한 AI</span>
              ,
            </span>
            <span className="block text-slate-800">
              직접 
              <span className="relative inline-block ml-2">
                무료로 경험하세요.
                <div className="absolute bottom-1 md:bottom-0 left-0 w-full h-2 md:h-3 bg-brand-100/70 -z-10 rounded-full transform -rotate-1" />
              </span>
            </span>
          </h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((item, idx) => {
            const isDarkCard = idx === 2;
            
            // Extract the brand letter
            // Priority 1: Check role for a capital letter (e.g. "브랜드 R사")
            // Priority 2: Check author for a capital letter (e.g. "Brand A")
            // Priority 3: First character of author
            const brandLetter = item.role.match(/[A-Z]/)?.[0] || item.author.match(/[A-Z]/)?.[0] || item.author.charAt(0);
            
            return (
              <div 
                key={idx}
                className={`
                  rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2
                  ${isDarkCard 
                    ? 'bg-[#1e1b4b] text-white shadow-2xl shadow-brand-900/30' 
                    : 'bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-brand-100'}
                `}
              >
                <div className="mb-10">
                  {/* Brand Logo */}
                  <div className="flex items-center gap-2 mb-8 opacity-80">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isDarkCard ? 'bg-white/10' : 'bg-brand-100'}`}>
                      <Sparkles size={12} className={isDarkCard ? 'text-white' : 'text-brand-600'} fill="currentColor" />
                    </div>
                    <span className={`text-sm font-bold font-logo tracking-normal ${isDarkCard ? 'text-white' : 'text-slate-900'}`}>Celebeauty</span>
                  </div>
                  
                  {/* Reduced font size for longer text */}
                  <p className={`text-[15px] md:text-[19px] font-medium leading-[1.6] tracking-tight break-keep ${isDarkCard ? 'text-slate-100' : 'text-slate-800'}`}>"{item.quote}"</p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className={`font-bold text-base mb-1 ${isDarkCard ? 'text-white' : 'text-slate-900'}`}>{item.author}</p>
                    <p className={`text-sm font-medium ${isDarkCard ? 'text-slate-400' : 'text-slate-500'}`}>{item.role}</p>
                  </div>
                  
                  {/* Letter Circle */}
                  <div className={`
                    w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center 
                    text-xl md:text-2xl font-black border-2
                    ${isDarkCard 
                      ? 'bg-white/10 border-white/10 text-white' 
                      : 'bg-slate-50 border-white shadow-md text-slate-400'}
                  `}>
                    {brandLetter}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;