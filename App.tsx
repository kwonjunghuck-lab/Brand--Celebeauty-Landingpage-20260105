import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import ProblemSolution from './components/ProblemSolution';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChannelTalkBtn from './components/ChannelTalkBtn';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <ProblemSolution />
        <Stats />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <ChannelTalkBtn />
    </div>
  );
};

export default App;
