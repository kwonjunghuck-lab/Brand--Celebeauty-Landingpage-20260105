import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChannelTalkBtn: React.FC = () => {
  return (
    <a 
      href="http://pf.kakao.com/_nLgxmn/chat" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group" 
      aria-label="카카오톡 상담하기"
    >
      {/* Tooltip Bubble */}
      <div className="absolute -top-12 right-0 w-32 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 mb-2 text-center">
        실시간 상담 문의
        <div className="absolute bottom-[-4px] right-6 w-2 h-2 bg-slate-900 rotate-45" />
      </div>
      
      {/* Main Button */}
      <div className="flex items-center gap-2.5 px-5 py-3.5 bg-[#FEE500] text-[#191919] rounded-full shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#FEE500]">
        <div className="relative">
          <MessageCircle size={24} fill="currentColor" className="text-[#191919]" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
          </span>
        </div>
        <span className="text-sm font-bold tracking-tight">카카오톡 문의</span>
      </div>
    </a>
  );
};

export default ChannelTalkBtn;
