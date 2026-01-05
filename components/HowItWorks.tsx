import React, { useState, useRef, useEffect } from 'react';
import { HOW_IT_WORKS } from '../constants';
import Button from './ui/Button';
import { ChevronRight, Check, Eye, Users, ArrowUpRight, MoreHorizontal, CheckCircle, Package, Truck, Wallet, Microscope, MessageSquare, ScanSearch, Sparkles, Headphones, Zap, FileText, User } from 'lucide-react';

// --- Visual Components for each step ---

const Step1Visual = () => (
  <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 w-full max-w-[380px] mx-auto transform transition-all hover:scale-105 duration-500">
    <h4 className="text-xl font-bold text-slate-800 mb-6">AI 제품 심층 분석</h4>
    <div className="space-y-4">
      {/* Ingredient Analysis */}
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
            <Microscope size={22} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400">성분 안전성</p>
            <p className="text-lg font-bold text-slate-900">EWG 그린</p>
          </div>
        </div>
        <span className="font-extrabold text-xl text-emerald-500">Pass</span>
      </div>

      {/* Review Analysis */}
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
            <MessageSquare size={22} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400">리뷰 감성 분석</p>
            <p className="text-lg font-bold text-slate-900">긍정 반응 94%</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pl-1">
             <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold text-slate-600">#촉촉해요</span>
             <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-bold text-slate-600">#순해요</span>
             <span className="px-2 py-1 bg-brand-100 border border-brand-200 rounded-md text-[10px] font-bold text-brand-600">#재구매</span>
        </div>
      </div>
    </div>

    {/* Bottom Metrics */}
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm group hover:border-brand-200 transition-colors">
        <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight group-hover:text-brand-600 transition-colors">98점</div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">상세페이지 점수</div>
      </div>
      <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm group hover:border-brand-200 transition-colors">
        <div className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
           S<span className="text-lg text-slate-400 ml-0.5 align-top font-bold">등급</span>
        </div>
        <div className="text-xs text-rose-500 font-bold mb-1 flex items-center gap-1">
          상위 1% 경쟁력 <ArrowUpRight size={10} />
        </div>
        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">시장성 분석</div>
      </div>
    </div>
  </div>
);

const Step2Visual = () => (
  <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 w-full max-w-[400px] mx-auto transform transition-all hover:scale-105 duration-500">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
          <ScanSearch size={20} />
        </div>
        <h4 className="text-xl font-bold text-slate-800">AI 매칭 리포트</h4>
      </div>
      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100 flex items-center gap-1">
        <CheckCircle size={12} /> 매칭 완료
      </span>
    </div>

    {/* Matched Profile */}
    <div className="relative p-5 rounded-2xl border border-slate-100 bg-slate-50/50 mb-6 group hover:border-brand-200 transition-colors">
      <div className="absolute top-4 right-4 text-xs font-bold text-slate-400">#01</div>
      <div className="flex items-center gap-4">
        <div className="relative">
            <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-white shadow-md overflow-hidden">
                 <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=Aria" alt="Celeb" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-brand-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                <Sparkles size={10} fill="currentColor" />
            </div>
        </div>
        <div>
           <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
             인플루언서 나룽이
             <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
           </div>
           <div className="text-xs text-slate-500 font-medium mb-2">뷰티/스킨케어 · 3040 타겟</div>
           <div className="flex gap-1.5">
              <span className="text-[10px] font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">#진정성</span>
              <span className="text-[10px] font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">#완판이력</span>
           </div>
        </div>
      </div>
    </div>

    {/* Synergy Metrics */}
    <div className="grid grid-cols-2 gap-3">
       <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 flex flex-col justify-center">
          <p className="text-[10px] font-bold text-brand-400 uppercase tracking-wider mb-1">Brand Fit</p>
          <div className="flex items-end gap-1.5">
             <span className="text-3xl font-extrabold text-brand-600 leading-none">98</span>
             <span className="text-sm font-bold text-brand-400 mb-0.5">%</span>
          </div>
       </div>
       <div className="p-4 rounded-2xl bg-white border border-slate-100 flex flex-col justify-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Exp. Revenue</p>
          <div className="flex items-center gap-1.5">
             <span className="text-lg font-extrabold text-slate-900">High</span>
             <ArrowUpRight size={14} className="text-emerald-500" />
          </div>
          <p className="text-[10px] text-slate-400 font-medium">상위 5% 예상</p>
       </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-500">매칭 분석 리포트 생성됨</span>
            <span className="text-brand-600 flex items-center gap-1 cursor-pointer hover:underline">
                자세히 보기 <ChevronRight size={12} />
            </span>
        </div>
    </div>
  </div>
);

const Step3Visual = () => (
  <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 w-full max-w-[380px] mx-auto transform transition-all hover:scale-105 duration-500 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />
    
    {/* Header: Manager Profile */}
    <div className="flex items-center gap-4 mb-8 relative z-10">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center text-slate-400">
             <User size={32} fill="currentColor" className="opacity-80" />
        </div>
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 border-[3px] border-white rounded-full">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
            <h4 className="text-lg font-bold text-slate-900">김민지 매니저</h4>
            <span className="px-2 py-0.5 bg-brand-50 text-brand-600 text-[10px] font-bold rounded-full border border-brand-100">1:1 전담</span>
        </div>
        <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
           <Headphones size={12} className="text-brand-500" />
           실시간 케어 중 · 응답률 100%
        </p>
      </div>
    </div>

    {/* Live Operations Feed */}
    <div className="relative pl-4 space-y-5 mb-8 z-10">
       {/* Vertical Line */}
       <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-100"></div>

       {/* Item 1 */}
       <div className="relative flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 group-hover:border-brand-200 group-hover:scale-110 transition-all">
             <CheckCircle size={16} className="text-blue-500" />
          </div>
          <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
             <p className="text-xs font-bold text-slate-800 mb-0.5">셀럽 일정·콘텐츠 조율</p>
             <p className="text-[10px] text-slate-500">오전 10:00 · 조율 완료</p>
          </div>
       </div>

       {/* Item 2 */}
       <div className="relative flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 group-hover:border-brand-200 group-hover:scale-110 transition-all">
             <MessageSquare size={16} className="text-rose-500" />
          </div>
          <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
             <p className="text-xs font-bold text-slate-800 mb-0.5">배송/CS 이슈 대응</p>
             <p className="text-[10px] text-slate-500">오후 02:15 · 처리 완료</p>
          </div>
       </div>

       {/* Item 3 */}
       <div className="relative flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center z-10 group-hover:border-brand-200 group-hover:scale-110 transition-all">
             <FileText size={16} className="text-brand-500" />
          </div>
          <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
             <p className="text-xs font-bold text-slate-800 mb-0.5">정산 리포트 발행</p>
             <p className="text-[10px] text-slate-500">방금 전 · 자동 정산</p>
          </div>
       </div>
    </div>

    {/* Bottom Status */}
    <div className="bg-slate-900 rounded-xl p-4 flex items-center justify-between text-white shadow-lg relative z-10 overflow-hidden group cursor-default">
       <div className="absolute inset-0 bg-brand-600 opacity-0 group-hover:opacity-10 transition-opacity" />
       <div>
           <p className="text-[10px] text-slate-400 font-bold mb-1">BRAND STATUS</p>
           <p className="text-sm font-bold flex items-center gap-1.5">
              업무 부담 0%
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              매출 집중 100%
           </p>
       </div>
       <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <Zap size={16} className="text-brand-400" fill="currentColor" />
       </div>
    </div>

  </div>
);

const StepDescription: React.FC<{ index: number }> = ({ index }) => {
  if (index === 0) {
    return (
      <>
        AI가 제품의 전성분부터 상세페이지, 리뷰, 마케팅 정보를
        <br className="block" />
        정밀 분석하여 제품에 대한 핵심 USP 및 포인트를 도출합니다.
      </>
    );
  }
  if (index === 1) {
    return (
      <>
        AI가 제품의 핵심 타겟과 USP에 최적화된 셀럽을 선별 소싱하고,
        <br className="hidden md:block" />
        해당 셀럽의 검증된 셀링 포인트와 시너지 리포트를 상세히 제공합니다.
      </>
    );
  }
  if (index === 2) {
    return (
      <>
        셀럽 소통, 운영 조율, 정산 등 전담 매니저가
        <br className="block md:hidden" />
        {' '}캠페인 운영 전반을 담당합니다.
        <br className="block" />
        브랜드는 제품과 매출 성장에만 몰입하세요.
      </>
    );
  }
  return null;
};

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeBtn = container.querySelector(`button[data-idx="${activeTab}"]`) as HTMLElement;
      
      if (activeBtn) {
        const containerWidth = container.clientWidth;
        const btnWidth = activeBtn.offsetWidth;
        const btnLeft = activeBtn.offsetLeft;
        const targetScrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);
        
        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  const handleApply = () => {
    window.open('https://walla.my/a/celebeautybrand.apply', '_blank');
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -translate-y-1/2 -z-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight break-keep">How it works</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium break-keep leading-relaxed">
            복잡한 분석과 소싱은 AI와 전문가에게,
            <br />
            브랜드는 제품과 매출 성장에만 집중하세요.
          </p>
        </div>
        
        <div className="w-full">
          
          {/* Tab Navigation */}
          <div className="relative mb-8 md:mb-20 z-20">
            <div 
              ref={scrollContainerRef}
              className="flex items-center gap-4 overflow-x-auto py-12 px-8 md:justify-center scrollbar-hide snap-x no-scrollbar"
              style={{ scrollPadding: '0 2rem' }}
            >
              {HOW_IT_WORKS.map((item, idx) => (
                <React.Fragment key={idx}>
                  <button 
                    data-idx={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`
                      flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-[1.5rem] text-[15px] font-bold transition-all duration-500 snap-center outline-none
                      ${activeTab === idx 
                        ? 'bg-brand-600 text-white shadow-[0_15px_40px_-10px_rgba(124,58,237,0.5)] scale-110 z-30' 
                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 opacity-80'}
                    `}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black ${activeTab === idx ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-400'}`}>
                      {idx + 1}
                    </div>
                    <span className="whitespace-nowrap tracking-tight">{item.title}</span>
                  </button>
                  
                  {idx < HOW_IT_WORKS.length - 1 && (
                    <div className="flex-shrink-0 flex items-center hidden md:flex">
                      <ChevronRight className="text-slate-200" size={18} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Progress Indicator (Desktop) */}
            <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md h-0.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-500 transition-all duration-500 ease-out"
                style={{ width: '33.33%', transform: `translateX(${activeTab * 100}%)` }}
              />
            </div>
          </div>
          
          {/* Content Panels */}
          <div className="relative min-h-[600px] md:min-h-[500px] z-10">
            {HOW_IT_WORKS.map((item, idx) => (
              <div 
                key={idx}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center transition-all duration-700 ease-out top-0 left-0 w-full
                  ${activeTab === idx ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 translate-x-8 absolute pointer-events-none z-0'}
                `}
              >
                
                {/* Text Content */}
                <div className={`order-1 lg:order-none transition-all duration-700 delay-100 ${activeTab === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  
                  <div className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 rounded-full text-[10px] sm:text-xs font-bold mb-4 md:mb-6 uppercase tracking-widest shadow-sm border border-brand-100">{item.step}</div>
                  
                  <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight leading-[1.2] break-keep">{item.subtitle}</h3>
                  
                  <div className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-10 font-medium break-keep whitespace-pre-wrap">
                    <StepDescription index={idx} />
                  </div>
                  
                  {/* Feature List */}
                  <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-slate-700 font-bold bg-slate-50/50 p-3 rounded-xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-sm transition-all duration-300 text-sm md:text-base">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-100 flex items-center justify-center mr-3 flex-shrink-0 text-brand-600">
                          <Check size={14} strokeWidth={3} className="md:w-4 md:h-4" />
                        </div>
                        <span className="break-keep">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="hidden md:block">
                    <Button onClick={handleApply} variant="primary" size="lg" className="shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30">
                      셀럽 무료 매칭 받기
                    </Button>
                  </div>
                  <div className="md:hidden flex justify-center">
                    <Button onClick={handleApply} variant="primary" size="md" className="w-full shadow-xl shadow-brand-500/20">
                      셀럽 무료 매칭 받기
                    </Button>
                  </div>
                </div>
                
                {/* Visual Content */}
                <div className={`
                  order-2 lg:order-none
                  relative flex justify-center items-center lg:h-[500px] perspective-1000
                  transition-all duration-1000 delay-200
                  ${activeTab === idx ? 'opacity-100 scale-100 rotate-y-0' : 'opacity-0 scale-95 rotate-y-12'}
                `}>
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/50 to-purple-100/50 rounded-[3rem] transform -rotate-3 scale-95 opacity-70 -z-10 blur-xl" />
                  
                  <div className="relative z-10 w-full mb-8 lg:mb-0">
                    {idx === 0 && <Step1Visual />}
                    {idx === 1 && <Step2Visual />}
                    {idx === 2 && <Step3Visual />}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      
    </section>
  );
};

export default HowItWorks;