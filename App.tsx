import React, { useState, useEffect } from 'react';
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
import { Contact } from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      setCurrentPage(hash || 'home');
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    // Set initial page based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark">
      <NavBar />
      {currentPage === 'contact' ? (
        <Contact />
      ) : (
        <>
          <Hero />
          <WhyColiving />
          <AnalogySection />
          <FloorplanSection />
          <DemographicsSection />
          <FinancingSection />
          <ProcessSection />
          <Testimonials />
          <CTASection />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;