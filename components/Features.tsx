import React from 'react';
import { FEATURES } from '../constants';
import { 
  Sparkles, Smartphone, BarChart3, ShieldCheck, Zap, 
  Instagram, TrendingUp, ExternalLink, Rocket,
  Activity, UserCheck, Target, Settings, Package, MessageCircle, CreditCard, Link,
  FileText, Microscope, Award, ArrowRight, ArrowDown, Cpu,
  FlaskConical, HelpCircle, Tag, Gift, GitCompare, Search, CheckCircle2,
  Database, Layers, Percent, Eye, Play, Beaker, Brain, Repeat, User, ThumbsUp,
  ShoppingBag, BookOpen, Users, Heart, Calendar, AlertTriangle, Check, Star
} from 'lucide-react';

// Main Data Card (Large)
const DataCard = ({ icon: Icon, title, color, dotColor, className = "" }: { icon: any, title: string, color: string, dotColor: string, className?: string }) => (
  <div className={`bg-white p-2 sm:p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 sm:gap-2.5 w-full relative z-10 ${className}`}>
    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
      <Icon size={16} strokeWidth={2.5} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
    </div>
    <div className="flex flex-col min-w-0 flex-1">
      <div className="flex justify-between items-center mb-0.5">
          <span className="text-[9px] sm:text-[11px] font-bold text-slate-700 truncate">{title}</span>
          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
      </div>
      <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
        <div className={`h-full w-2/3 ${dotColor.replace('bg-', 'bg-opacity-50 bg-')}`} />
      </div>
    </div>
  </div>
);

// Mini Data Card (Small - for additional data)
const MiniDataCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="bg-white p-1.5 sm:p-2 rounded-lg border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-1 hover:border-brand-200 transition-colors">
    <Icon size={14} className="text-slate-400" />
    <span className="text-[8px] sm:text-[9px] font-bold text-slate-500">{title}</span>
  </div>
);

const IntegrationVisual = () => (
  <div className="w-full mt-4 bg-slate-50/50 rounded-[2rem] border border-slate-100 flex flex-col p-3.5 sm:p-5 h-full min-h-[520px] relative overflow-hidden">
    
    {/* HEADER Badge */}
    <div className="flex justify-center mb-4 sm:mb-5 relative z-10">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">AI Data Collection</span>
      </div>
    </div>

    {/* DATA COLLECTION SECTION */}
    <div className="relative z-10 flex flex-col gap-2">
      {/* Primary Data Row 1 */}
      <div className="grid grid-cols-2 gap-2">
          <DataCard 
            icon={Link} 
            title="제품 상세페이지" 
            color="bg-indigo-50 text-indigo-500" 
            dotColor="bg-indigo-400" 
          />
          <DataCard 
            icon={Microscope} 
            title="전성분 데이터" 
            color="bg-emerald-50 text-emerald-500" 
            dotColor="bg-emerald-400" 
          />
      </div>
      {/* Primary Data Row 2 */}
      <div className="grid grid-cols-2 gap-2">
          <DataCard 
            icon={MessageCircle} 
            title="구매 리뷰" 
            color="bg-rose-50 text-rose-500" 
            dotColor="bg-rose-400" 
          />
           <DataCard 
            icon={Instagram} 
            title="마케팅 콘텐츠" 
            color="bg-purple-50 text-purple-500" 
            dotColor="bg-purple-400" 
          />
      </div>
      {/* Secondary Data Row */}
      <div className="grid grid-cols-4 gap-2 mt-1">
        <MiniDataCard icon={Tag} title="가격" />
        <MiniDataCard icon={GitCompare} title="경쟁사" />
        <MiniDataCard icon={HelpCircle} title="Q&A" />
        <MiniDataCard icon={TrendingUp} title="트렌드" />
      </div>
    </div>

    {/* PIPELINE FLOW SECTION */}
    <div className="flex-1 relative flex flex-col items-center justify-center -my-1 min-h-[140px]">
       
       {/* Upper Pipe (Connecting Data Grid to CPU) */}
       <div className="flex-1 w-[2px] bg-brand-100/50 relative overflow-hidden min-h-[40px]">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-100 via-brand-300 to-brand-500 opacity-30"></div>
          {/* Animated Flow Particle - Enhanced Visibility */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-8 bg-brand-500 rounded-full blur-[2px] shadow-[0_0_10px_#8b5cf6] animate-[drop_1.5s_linear_infinite]"></div>
       </div>

       {/* Central CPU Hub */}
       <div className="relative z-10 flex items-center justify-center py-2">
          {/* Processing Nodes (Left) - Hidden on Mobile to prevent overflow/clutter */}
          <div className="absolute right-full mr-3 flex flex-col gap-1.5 items-end opacity-0 sm:opacity-100 animate-fade-in-up" style={{animationDelay: '100ms'}}>
             <div className="px-1.5 py-0.5 bg-white border border-slate-100 rounded text-[8px] font-bold text-slate-400 shadow-sm whitespace-nowrap">Keyword</div>
             <div className="px-1.5 py-0.5 bg-white border border-slate-100 rounded text-[8px] font-bold text-slate-400 shadow-sm whitespace-nowrap">Review</div>
          </div>
          
          {/* Processing Nodes (Right) - Hidden on Mobile */}
          <div className="absolute left-full ml-3 flex flex-col gap-1.5 opacity-0 sm:opacity-100 animate-fade-in-up" style={{animationDelay: '200ms'}}>
             <div className="px-1.5 py-0.5 bg-white border border-slate-100 rounded text-[8px] font-bold text-slate-400 shadow-sm whitespace-nowrap">Ingredient</div>
             <div className="px-1.5 py-0.5 bg-white border border-slate-100 rounded text-[8px] font-bold text-slate-400 shadow-sm whitespace-nowrap">Sentiment</div>
          </div>

          {/* Connection Lines to Nodes */}
          <div className="absolute inset-x-[-12px] h-[1px] bg-brand-200/50 top-1/2 -translate-y-1/2 -z-10 sm:block hidden"></div>

          {/* The CPU */}
          <div className="relative w-14 h-14 bg-white rounded-2xl border border-brand-100 shadow-[0_0_25px_rgba(139,92,246,0.3)] flex items-center justify-center z-20">
             <div className="absolute inset-0 bg-brand-50 rounded-2xl transform rotate-6 scale-90 -z-10 border border-brand-100/50"></div>
             <Cpu size={26} className="text-brand-600" strokeWidth={1.5} />
             <div className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full border border-slate-100 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
             </div>
          </div>
       </div>

       {/* Lower Pipe (Connecting CPU to Splitter) */}
       <div className="h-8 w-[2px] bg-gradient-to-b from-brand-500 to-brand-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-brand-500 rounded-full blur-[2px] shadow-[0_0_10px_#8b5cf6] animate-[drop_1.5s_linear_infinite]" style={{animationDelay: '0.75s'}}></div>
       </div>
       
       {/* Splitter Structure */}
       <div className="w-[60%] h-4 border-t-2 border-brand-200/50 relative mb-2">
          {/* Vertical Drops to Cards */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-brand-200/50"></div>
          <div className="absolute right-0 top-0 w-[1px] h-full bg-brand-200/50"></div>
          
          {/* Connection Point */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-brand-500 rounded-full border-2 border-white shadow-[0_0_10px_#8b5cf6] z-10"></div>
       </div>
    </div>

    {/* OUTPUTS SECTION */}
    <div className="grid grid-cols-2 gap-2 sm:gap-3 relative z-10">
      {/* USP Card (Enhanced Design - Filled Space) */}
      <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-brand-100 shadow-sm flex flex-col justify-between h-full min-h-[120px] relative overflow-hidden group">
         <div className="flex justify-between items-start mb-2 relative z-10">
            <div className="flex items-center gap-1.5">
                <div className="p-1 bg-brand-50 rounded text-brand-600"><Award size={12}/></div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-800">핵심 USP 도출</span>
            </div>
            <span className="px-1.5 py-0.5 bg-brand-600 text-white text-[8px] font-bold rounded-full shadow-sm">Score 98</span>
         </div>

         <div className="space-y-1.5 relative z-10 flex-1">
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <Check size={10} className="text-brand-500 shrink-0" strokeWidth={3} /> 
                <span className="text-[9px] font-bold text-slate-700 truncate">속건조 해결 및 수분지속</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <Check size={10} className="text-brand-500 shrink-0" strokeWidth={3} /> 
                <span className="text-[9px] font-bold text-slate-700 truncate">민감성 무자극 인증</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <Check size={10} className="text-brand-500 shrink-0" strokeWidth={3} /> 
                <span className="text-[9px] font-bold text-slate-700 truncate">2030 재구매율 1위</span>
            </div>
         </div>
      </div>

      {/* Target Card (Dark Mode Persona - Improved Typography & Spacing) */}
      <div className="bg-slate-900 rounded-xl p-2.5 sm:p-3 border border-slate-800 shadow-md relative overflow-hidden flex flex-col h-full min-h-[120px]">
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500 rounded-full blur-2xl opacity-20 -mr-10 -mt-10"></div>
         
         <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-1.5 mb-2.5">
               <Target size={12} className="text-brand-400" />
               <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-300 uppercase">최적 타겟</span>
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
                <div className="bg-white/5 rounded-lg p-2 sm:p-2.5 border border-white/5 backdrop-blur-sm mb-2">
                   <p className="text-[9px] font-medium text-slate-400 mb-0.5">Best Persona</p>
                   <p className="text-sm font-bold text-white tracking-wide">30대 워킹맘</p>
                </div>
                
                <div className="flex items-end justify-between mt-auto">
                   <span className="text-[9px] text-slate-500 font-medium mb-1.5">Match Score</span>
                   <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 leading-none">98%</span>
                </div>
            </div>
         </div>
      </div>
    </div>

  </div>
);

const ReportingVisual = () => (
  <div className="relative w-full mt-4 h-full flex flex-col min-h-[520px]">
    {/* Main Report Card */}
    <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 p-4 sm:p-6 flex flex-col relative overflow-hidden group">
      
      {/* Decorative Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-400 via-purple-500 to-indigo-500" />
      
      {/* Top Section: Score & Identity */}
      <div className="relative z-10 flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 border-[2px] border-white shadow-lg overflow-hidden flex items-center justify-center ring-1 ring-slate-100">
               <User className="w-6 h-6 sm:w-7 sm:h-7 text-slate-300" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-[2px] border-white rounded-full shadow-sm" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
               <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">인플루언서 B</h4>
               <ShieldCheck size={14} className="text-blue-500 fill-blue-50" />
            </div>
            <div className="flex items-center gap-1.5">
               <span className="text-[11px] sm:text-xs text-slate-500 font-bold">뷰티/라이프스타일</span>
               <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
               <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">3040 타겟</span>
            </div>
          </div>
        </div>
        
        {/* Tier Badge */}
        <div className="text-right">
          <div className="inline-flex flex-col items-center justify-center bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-lg px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-sm">
             <div className="flex items-baseline gap-0.5 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600">
                <span className="text-xl sm:text-2xl font-black leading-none italic">S</span>
                <span className="text-[11px] font-bold uppercase tracking-wider">Tier</span>
             </div>
             <span className="text-[9px] font-bold text-slate-400 mt-0.5">상위 1% 매칭</span>
          </div>
        </div>
      </div>

      {/* Hashtags Section */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-4">
         {['#꼼꼼한리뷰', '#스킨케어전문', '#완판요정'].map((tag, i) => (
            <span key={i} className="text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md">
               {tag}
            </span>
         ))}
      </div>

      {/* Middle Section: Chart & Metrics - Flex Grow to fill space */}
      <div className="relative z-10 flex flex-col gap-3 mb-4 flex-grow">
         
         {/* Chart Card */}
         <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 relative overflow-hidden flex-grow flex flex-col">
            <div className="flex justify-between items-start z-10 mb-2">
               <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-0.5">Engagement Rate</span>
                  <div className="flex items-center gap-1.5">
                     <span className="text-sm font-black text-slate-900">매우 높음</span>
                     <span className="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                        <TrendingUp size={10} /> +12.5%
                     </span>
                  </div>
               </div>
            </div>
            
            {/* Chart Visual - Increased Bar Heights */}
            <div className="relative w-full flex items-end justify-between gap-2 px-1 mt-auto h-[100px] sm:h-auto min-h-[80px]">
               {[45, 60, 75, 65, 95, 80, 70].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end group h-full relative z-10">
                     <div 
                        className={`w-full rounded-t-sm transition-all duration-300 ${i === 4 ? 'bg-gradient-to-t from-brand-600 to-brand-400 opacity-100 shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-brand-200 opacity-70'}`} 
                        style={{ height: `${h}%` }}
                     />
                  </div>
               ))}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible" preserveAspectRatio="none">
                  <path 
                    d="M 5 70 C 20 60, 40 40, 60 50 S 100 10, 140 20 S 180 30, 200 60"
                    fill="none" 
                    stroke="#8b5cf6" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    className="opacity-40"
                    vectorEffect="non-scaling-stroke"
                  />
               </svg>
            </div>
         </div>
         
         {/* Metrics Row */}
         <div className="grid grid-cols-2 gap-2 sm:gap-3 h-20 shrink-0">
            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex flex-col justify-between">
               <div className="flex items-center gap-1.5">
                  <div className="p-1 bg-rose-50 rounded text-rose-500">
                    <Heart size={12} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 truncate">팬덤 충성도</span>
               </div>
               <div>
                  <span className="text-base sm:text-lg font-black text-slate-800">High</span>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                     <div className="h-full bg-rose-500 w-[85%] rounded-full" />
                  </div>
               </div>
            </div>
            
            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex flex-col justify-between">
               <div className="flex items-center gap-1.5">
                  <div className="p-1 bg-indigo-50 rounded text-indigo-500">
                     <Zap size={12} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 truncate">구매 전환력</span>
               </div>
               <div>
                  <span className="text-base sm:text-lg font-black text-slate-800">92.4%</span>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                     <div className="h-full bg-indigo-500 w-[92%] rounded-full" />
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Bottom Section: AI Insight */}
      <div className="relative z-10 bg-slate-900 text-white rounded-2xl p-4 shadow-lg border border-slate-700/50 mt-auto shrink-0">
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
               <Sparkles size={12} className="text-brand-300" />
               <span className="text-[10px] font-bold text-brand-100 uppercase tracking-widest">AI Insight</span>
            </div>
            <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
         </div>
         <p className="text-[11px] leading-relaxed text-slate-300 break-keep font-medium">
            "동일 카테고리 대비 <span className="text-white font-bold border-b border-brand-500/50">3040 타겟 반응률이 2.5배</span> 높으며, 
            진정성 있는 리뷰로 구매 전환 유도가 탁월함."
         </p>
      </div>

    </div>
  </div>
);

const BrandPoolVisual = () => (
  <div className="relative w-full h-44 mt-4 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-inner">
    <div className="flex justify-between items-center mb-5">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-brand-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full">PREMIUM</span>
          <span className="text-xs font-black text-slate-900 tracking-tight">셀럽 POOL 200+</span>
        </div>
        <p className="text-[10px] text-slate-400 ">매 달 업데이트 되는 라인업</p>
      </div>
      <div className="flex -space-x-2">
        {[1,2,3].map(i => (
          <div key={i} className="w-7 h-7 sm:w-8 h-8 rounded-full border-2 border-white bg-brand-50 flex items-center justify-center overflow-hidden shadow-sm">
            <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=brand${i}`} className="w-full h-full object-cover" alt={`brand ${i}`} />
          </div>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
        <ShieldCheck size={12} className="text-emerald-500" />
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-700">엄선된 기준 +</span>
      </div>
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-2">
        <ShieldCheck size={12} className="text-emerald-500" />
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-700">검증된 지표 +</span>
      </div>
      <div className="col-span-2 bg-brand-50/50 rounded-xl p-2 border border-brand-100 flex items-center justify-center">
        <span className="text-[9px] sm:text-[10px] font-black text-brand-600">압도적 선택지를 경험하세요</span>
      </div>
    </div>
  </div>
);

const SourcingVisual = () => (
  <div className="relative w-full h-44 mt-4 bg-slate-50 rounded-[1.5rem] border border-slate-100 overflow-hidden flex flex-col p-4 shadow-inner group">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <Target size={14} className="text-brand-600" />
        <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Optimization</span>
      </div>
      <div className="bg-brand-600 px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold text-white">AI 선별 완료</div>
    </div>
    <div className="bg-white rounded-xl sm:rounded-2xl border border-brand-100 shadow-lg p-3 sm:p-4 mb-2 flex items-center gap-3 sm:gap-4 transition-all">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-brand-500/20 overflow-hidden p-2.5">
        <User className="w-full h-full text-white drop-shadow-sm" />
      </div>
      <div className="flex-1">
        <p className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mb-0.5">실시간 정밀 추천 리스트</p>
        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">맞춤 매칭 셀럽 5명</p>
      </div>
    </div>
    <div className="flex items-center gap-2 self-start">
      <div className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full text-[8px] sm:text-[9px] font-bold">
        셀럽 소싱 실시간 업데이트 중 🚀
      </div>
    </div>
  </div>
);

const OpsZeroVisual = () => (
  <div className="relative w-full h-44 mt-4 bg-slate-950 rounded-[1.5rem] border border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center group">
    {/* Background Grid & Effects */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:15px_15px] opacity-20" />
    
    {/* Center Core */}
    <div className="relative z-20 w-12 h-12 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center text-brand-400 shadow-[0_0_40px_rgba(139,92,246,0.3)] overflow-hidden p-2">
      <Settings size={28} strokeWidth={1.5} className="animate-[spin_8s_linear_infinite]" />
    </div>

    {/* 1. Top Left - 일정 조율 */}
    <div className="absolute top-3 left-3 sm:left-6 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <Calendar size={10} className="text-blue-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">일정 조율</span>
    </div>

    {/* 2. Top Center - 진행 현황 */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <Activity size={10} className="text-emerald-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">진행 현황</span>
    </div>

    {/* 3. Top Right - 셀럽 소통 */}
    <div className="absolute top-3 right-3 sm:right-6 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <MessageCircle size={10} className="text-pink-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">셀럽 소통</span>
    </div>

    {/* 4. Mid Left - 이벤트 운영 */}
    <div className="absolute top-1/2 -translate-y-1/2 left-2 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <Gift size={10} className="text-purple-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">이벤트 운영</span>
    </div>

    {/* 5. Mid Right - 데이터 분석 */}
    <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <BarChart3 size={10} className="text-orange-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">데이터 분석</span>
    </div>

    {/* 6. Bottom Left - 이슈 관리 */}
    <div className="absolute bottom-3 left-3 sm:left-6 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <AlertTriangle size={10} className="text-rose-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">이슈 관리</span>
    </div>

    {/* 7. Bottom Center - 후속 관리 */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <Repeat size={10} className="text-cyan-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">후속 관리</span>
    </div>

    {/* 8. Bottom Right - 정산 현황 */}
    <div className="absolute bottom-3 right-3 sm:right-6 bg-slate-900/90 border border-slate-800 px-2 py-1 rounded-lg shadow-lg flex items-center gap-1.5 z-10">
      <CreditCard size={10} className="text-yellow-400 sm:w-3 sm:h-3" />
      <span className="text-[8px] sm:text-[9px] font-bold text-white">정산 현황</span>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <style>{`
        @keyframes drop {
          0% { top: -20%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold mb-4 sm:mb-6 border border-brand-100 shadow-sm">
            <Sparkles size={14} fill="currentColor" />
            <span>핵심 가치</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight break-keep leading-[1.25] sm:leading-[1.2]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">우리는 '이렇게'</span>
            <br />
            브랜드의 성장을 만듭니다.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed break-keep max-w-2xl mx-auto">
            단순한 매칭을 넘어, 정량적 수치와 정성적 팬덤 분석까지,
            <br className="hidden md:block" />
            최적화된 셀럽을 통해 브랜드의 가치를 극대화합니다.
          </p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6">
          
          {/* Feature 1 - Large Card */}
          <div className="md:col-span-3 group bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col h-full">
            <div className="mb-2 sm:mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-600 mb-4 sm:mb-8">
                <Smartphone size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h4 className="text-xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4">{FEATURES[0].title}</h4>
              <p className="text-slate-500 font-bold break-keep text-sm sm:text-[16px] leading-relaxed max-w-sm whitespace-pre-line">{FEATURES[0].desc}</p>
            </div>
            {/* Added flex-1 to push visual to fill available height */}
            <div className="flex-1 min-h-0">
               <IntegrationVisual />
            </div>
          </div>
          
          {/* Feature 2 - Large Card */}
          <div className="md:col-span-3 group bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col h-full">
            <div className="mb-2 sm:mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-600 mb-4 sm:mb-8">
                <BarChart3 size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h4 className="text-xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4">{FEATURES[1].title}</h4>
              <p className="text-slate-500 font-bold break-keep text-sm sm:text-[16px] leading-relaxed max-w-sm whitespace-pre-line">{FEATURES[1].desc}</p>
            </div>
            {/* Added flex-1 to push visual to fill available height */}
            <div className="flex-1 min-h-0">
               <ReportingVisual />
            </div>
          </div>
          
          {/* Feature 3 - Small Card */}
          <div className="md:col-span-2 group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">{FEATURES[2].title}</h4>
            <p className="text-slate-500 font-bold text-[12px] sm:text-[13px] leading-relaxed break-keep whitespace-pre-line">{FEATURES[2].desc}</p>
            <BrandPoolVisual />
          </div>
          
          {/* Feature 4 - Small Card */}
          <div className="md:col-span-2 group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">{FEATURES[3].title}</h4>
            <p className="text-slate-500 font-bold text-[12px] sm:text-[13px] leading-relaxed break-keep whitespace-pre-line">{FEATURES[3].desc}</p>
            <SourcingVisual />
          </div>
          
          {/* Feature 5 - Small Card */}
          <div className="md:col-span-2 group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-brand-100 transition-all duration-500 flex flex-col">
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1 sm:mb-2">{FEATURES[4].title}</h4>
            <p className="text-slate-500 font-bold text-[12px] sm:text-[13px] leading-relaxed break-keep whitespace-pre-line">{FEATURES[4].desc}</p>
            <OpsZeroVisual />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;