import React from 'react';
import Button from './ui/Button';
import { Sparkles, ArrowRight, FileText, User, MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleApply = () => {
    window.open('https://walla.my/a/celebeautybrand.apply', '_blank');
  };

  const handleOpenServiceIntro = () => {
    window.open('https://drive.google.com/file/d/1hCk-8PEb_yEMoTrQOWvrl18HznZKMjvR/view?usp=sharing', '_blank');
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Top Decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Section */}
        <div className="relative rounded-[3rem] overflow-hidden mb-24 border border-white/10 group shadow-2xl shadow-brand-900/40">
          
          {/* Background Layers */}
          <div className="absolute inset-0 bg-[#4c1d95]" />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-900 to-slate-900 opacity-90" />
          
          {/* Blobs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 -translate-x-1/2 -translate-y-1/2 animate-blob" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
          
          {/* Content */}
          <div className="relative z-10 p-8 md:p-24 text-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-violet-200 text-sm font-semibold mb-8 backdrop-blur-md">
              <Sparkles size={14} className="text-violet-300" fill="currentColor" />
              <span>Limited Free Analysis</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-[1.2] md:leading-[1.4] break-keep">
              최적의 셀럽과 제품이<br className="block md:hidden" />
              <span className="hidden md:inline"> </span>만드는<br className="hidden md:block" />
              <span className="md:hidden"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">매출 성장</span>,
              <br className="block md:hidden" />
              <span className="hidden md:inline"> </span>지금 바로 경험하세요!
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed break-keep">
              우리 제품에 <span className="text-violet-200 font-semibold">최적화된 셀럽</span>이
              <br className="block md:hidden" />
              <span className="text-white font-bold md:ml-1.5">직접 우리 제품을 유통</span>해 드립니다!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto px-4 mb-10">
              <Button 
                variant="secondary" 
                onClick={handleApply}
                className="w-full sm:w-auto px-8 py-4 font-bold text-brand-900 hover:bg-violet-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 group-hover:gap-3"
              >
                셀럽 무료 매칭 받기 
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleOpenServiceIntro}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 backdrop-blur-md group"
              >
                <FileText size={18} className="text-violet-200 group-hover:text-white transition-colors" />
                서비스 소개서 보기
              </Button>
            </div>

            {/* Secondary CTA Link */}
            <div className="text-center">
              <a 
                href="https://www.celebeauty.co.kr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-violet-200 hover:text-white transition-colors underline underline-offset-4 decoration-violet-400 hover:decoration-white"
              >
                셀럽이신가요? 셀럽 협력 문의는 여기로!
              </a>
            </div>
          </div>
        </div>
        
        {/* Business Info Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-slate-400 text-sm leading-relaxed border-b border-slate-900 pb-16">
            
            {/* Column 1: Company Details */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-6">
                <span className="font-logo font-bold">Celebeauty</span>
                <span className="ml-2">I (주) 꿈선생</span>
              </h4>
              <div className="flex items-center gap-2">
                <User size={14} className="text-slate-500" />
                <span>대표이사 권정혁</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-slate-500 mt-1" />
                <span className="break-keep">부산광역시 남구 문현금융로 40, 55층</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={14} className="text-slate-500" />
                <span>사업자등록번호 : 713-81-03266</span>
              </div>
            </div>
            
            {/* Column 2: Customer Inquiry */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-6">고객 문의</h4>
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Phone size={14} className="text-brand-400" />
                <span>010-2402-0924</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-slate-500" />
                <span>고객 문의 매니저 : 김준성</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-slate-500 mt-1" />
                <span>
                  10:00 ~ 18:00 
                  <span className="text-slate-600 ml-1">주말 · 공휴일 제외</span>
                </span>
              </div>
            </div>
            
            {/* Column 3: Support */}
            <div className="space-y-4">
              <h4 className="text-white text-lg font-bold mb-6">서포트 이메일</h4>
              <div className="flex items-center gap-2 text-brand-300 font-medium">
                <Mail size={14} />
                <a href="mailto:dkssud374@celebeauty.co.kr" className="hover:underline">dkssud374@celebeauty.co.kr</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;