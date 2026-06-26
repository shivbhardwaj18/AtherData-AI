import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import Features from './components/Features';
import BentoGrid from './components/BentoGrid';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  // Performance Log: Monitor root renders
  console.log('[App Rendered] Root App component mounted/updated.');

  return (
    <div className="min-h-screen bg-oceanic-noir text-arctic-powder selection:bg-forsythia selection:text-oceanic-noir">
      {/* Structural Semantic Tags */}
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <TrustedCompanies />
        <Features />
        <BentoGrid />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
