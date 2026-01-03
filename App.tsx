
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

function PageContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash.slice(1);
      setCurrentPage(hash || 'home');
      window.scrollTo(0, 0);
    };

    handleHashChange();
  }, [location]);

  return (
    <>
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
    </>
  );
}

function Layout() {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && ['en', 'es'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Validate language
  if (lang && !['en', 'es'].includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-brand-dark">
      <PageContent />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<Layout />} />
      <Route path="/" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}

export default App;