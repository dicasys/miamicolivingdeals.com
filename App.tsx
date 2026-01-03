import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { WhyColiving } from './components/WhyColiving';
import { AnalogySection } from './components/AnalogySection';
import { FloorplanSection } from './components/FloorplanSection';
import { DemographicsSection } from './components/DemographicsSection';
import { FinancingSection } from './components/FinancingSection';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark">
      <NavBar />
      <Hero />
      <WhyColiving />
      <AnalogySection />
      <FloorplanSection />
      <DemographicsSection />
      <FinancingSection />
      <ProcessSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;