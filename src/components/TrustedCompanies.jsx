import React from 'react';

const COMPANIES = [
  { name: 'Acme Data', logo: (
    <svg className="h-6 opacity-45 hover:opacity-100 hover:text-forsythia text-arctic-powder transition-all duration-200" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 18H20L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <text x="32" y="17" fill="currentColor" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold">ACME DATA</text>
    </svg>
  )},
  { name: 'NovaCloud', logo: (
    <svg className="h-6 opacity-45 hover:opacity-100 hover:text-forsythia text-arctic-powder transition-all duration-200" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="12" r="7" stroke="currentColor" strokeWidth="2"/>
      <circle cx="16" cy="12" r="5" fill="currentColor"/>
      <text x="30" y="17" fill="currentColor" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold">NOVACLOUD</text>
    </svg>
  )},
  { name: 'Logiq AI', logo: (
    <svg className="h-6 opacity-45 hover:opacity-100 hover:text-forsythia text-arctic-powder transition-all duration-200" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 9H13V13H9V9Z" fill="currentColor"/>
      <text x="28" y="17" fill="currentColor" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold">LOGIQ.AI</text>
    </svg>
  )},
  { name: 'Spectra', logo: (
    <svg className="h-6 opacity-45 hover:opacity-100 hover:text-forsythia text-arctic-powder transition-all duration-200" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12L12 4L20 12L12 20L4 12Z" stroke="currentColor" strokeWidth="2"/>
      <text x="30" y="17" fill="currentColor" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold">SPECTRA</text>
    </svg>
  )},
  { name: 'Kortex', logo: (
    <svg className="h-6 opacity-45 hover:opacity-100 hover:text-forsythia text-arctic-powder transition-all duration-200" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H10L16 20H10L4 4Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 4H10L4 20H10L16 4Z" stroke="currentColor" strokeWidth="2"/>
      <text x="28" y="17" fill="currentColor" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold">KORTEX</text>
    </svg>
  )},
];

const TrustedCompanies = () => {
  return (
    <section className="w-full border-b border-white/5 bg-oceanic-noir/30 py-10" aria-label="Trusted by companies worldwide">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-mono text-[10px] font-bold tracking-widest text-arctic-powder/40 uppercase">
          TRUSTED BY LEADERS AT COGNITIVE SCALE
        </h2>
        
        {/* Infinite Scrolling Marquee Wrapper */}
        <div className="relative mt-8 overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-oceanic-noir before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-oceanic-noir after:to-transparent">
          <div className="flex w-[200%] animate-marquee gap-12 items-center py-2">
            {/* Double the array elements to ensure seamless loop */}
            {[...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES].map((comp, idx) => (
              <div key={idx} className="flex min-w-[150px] justify-center items-center shrink-0">
                {comp.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TrustedCompanies);
