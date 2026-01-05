import React from 'react';
import { PAIN_POINTS } from '../constants';
import { ArrowDown } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight break-keep">
            "혹시 이런 고민 있지 않으신가요?"
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium break-keep leading-relaxed">
            수많은 브랜드가 겪는
            <br className="block md:hidden" />
            <span className="text-slate-900 underline decoration-brand-300 decoration-4 underline-offset-4 ml-2">
              공동구매·기획전 과정에서의 불편함
            </span>
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PAIN_POINTS.map((item) => (
            <div key={item.id} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 border border-slate-100 hover:border-brand-100 relative overflow-hidden">
              
              {/* Hover Blob Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6">
                  <item.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors break-keep">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-[15px] break-keep">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Arrow Indicator */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-px h-20 bg-gradient-to-b from-slate-200 to-brand-400" />
          <div className="bg-white border border-brand-100 text-brand-700 px-8 py-3 rounded-full text-sm font-bold mt-6 flex items-center shadow-xl shadow-brand-100/50 animate-bounce">
            <ArrowDown size={16} className="mr-2" />
            이제 AI 데이터로 해결하세요
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProblemSolution;
