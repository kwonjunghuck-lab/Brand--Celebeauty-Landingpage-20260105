import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApply = () => {
    window.open('https://walla.my/a/celebeautybrand.apply', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Group */}
        <div className="flex items-center cursor-pointer group" onClick={scrollToTop}>
          <span className="text-3xl sm:text-[34px] font-logo text-brand-600 tracking-tight transition-transform duration-300 group-hover:scale-105 select-none">Celebeauty</span>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-[15px] font-medium text-slate-600 hover:text-brand-600 px-4 py-2 rounded-full hover:bg-slate-100/50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* CTA Area */}
        <div className="flex items-center gap-4">
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleApply} 
              className="shadow-brand-500/25 hover:shadow-brand-500/40"
            >
              셀럽 무료 매칭 받기
            </Button>
          </div>
          
          {/* Mobile Toggle */}
          {NAV_LINKS.length > 0 && (
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 hover:text-slate-900">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          )}
          
          {/* Mobile Apply Button (Only if no nav links to toggle) */}
          {NAV_LINKS.length === 0 && (
            <div className="md:hidden">
              <Button 
                variant="primary" 
                size="sm" 
                onClick={handleApply}
                className="text-[11px] px-3.5 font-bold tracking-tight h-9"
              >
                셀럽 무료 매칭 받기
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && NAV_LINKS.length > 0 && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 p-6 shadow-xl flex flex-col space-y-4 animate-fade-in-up">
          {NAV_LINKS.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="text-lg font-medium text-slate-800 block p-3 hover:bg-slate-50 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button onClick={handleApply} className="w-full h-12 text-lg">
              셀럽 무료 매칭 받기
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;