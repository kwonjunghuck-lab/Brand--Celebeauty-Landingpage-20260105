import React, { useRef, useState } from 'react';
import { STATS_DATA } from '../constants';

const Stats: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Center Glow */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-500 opacity-20 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight break-keep leading-[1.2]">
            데이터로 증명하는 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 ml-2">압도적 성과</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto break-keep leading-relaxed">
            감이나 운에 맡기지 마세요. 셀럽뷰티는 수십만 건의 커머스 데이터를 기반으로 확실한 결과를 만듭니다.
          </p>
        </div>
        
        {/* Stats Cards Container */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            flex md:grid md:grid-cols-3 gap-4 md:gap-8 
            overflow-x-auto md:overflow-visible 
            pt-6 pb-8 md:py-0 
            -mx-4 px-4 md:mx-0 md:px-0 
            snap-x snap-mandatory 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
            ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab md:cursor-auto'}
          `}
        >
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 flex-shrink-0 snap-center group relative bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-[2rem] text-center hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 select-none">
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 text-brand-300 group-hover:text-brand-200 group-hover:scale-110 transition-all duration-300 border border-white/5">
                  <stat.icon size={32} />
                </div>
                
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 tracking-tighter">
                  {stat.value}
                </div>
                
                <div className="text-lg md:text-xl font-semibold text-slate-300 mb-2 break-keep">
                  {stat.label}
                </div>
                
                <div className="text-sm text-slate-500 font-medium break-keep">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Stats;
