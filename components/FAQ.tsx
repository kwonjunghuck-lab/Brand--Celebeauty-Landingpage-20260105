import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Minus, Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 break-keep">궁금한 점이 있으신가요?</h2>
        </div>
        
        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === idx 
                  ? 'border-brand-200 bg-brand-50/30 ring-4 ring-brand-50 shadow-md' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Question Button */}
              <button 
                onClick={() => toggleFAQ(idx)} 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
              >
                <h3 className={`font-bold text-lg pr-8 transition-colors break-keep ${openIndex === idx ? 'text-brand-700' : 'text-slate-900 group-hover:text-slate-700'}`}>
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === idx 
                    ? 'bg-brand-600 text-white rotate-180' 
                    : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'
                }`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              {/* Answer Panel */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent font-medium break-keep whitespace-pre-wrap">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
