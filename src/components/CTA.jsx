import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CTA = () => {
  const containerRef = useScrollReveal();

  // Performance Log
  console.log('[CTA Rendered]');

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-oceanic-noir py-28 border-b border-white/5 overflow-hidden cyber-grid" 
      aria-label="Call to Action"
    >
      {/* Decorative gradient spot */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forsythia/5 blur-[90px] animate-pulse-glow" aria-hidden="true" />
      
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-mono text-xs font-bold tracking-widest text-forsythia uppercase reveal-init">
          PROVISION INSTANTLY
        </h2>
        <p className="mt-6 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-5xl uppercase leading-tight reveal-init reveal-delay-100">
          Ready to Automate <br />
          Your Ingestion Engine?
        </p>
        <p className="mt-6 text-arctic-powder/75 text-base sm:text-lg max-w-2xl mx-auto reveal-init reveal-delay-200">
          Scale your pipelines in seconds. Start with 5 million free monthly records. No credit card required.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4.5 reveal-init reveal-delay-300">
          <a
            href="#pricing"
            className="btn-press rounded-lg bg-forsythia px-8 py-4 text-base font-bold text-oceanic-noir hover:bg-deep-saffron transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-forsythia/10 hover:shadow-deep-saffron/10 focus-visible:outline"
          >
            Deploy Free Instance
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press rounded-lg border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all duration-150 flex items-center gap-2 focus-visible:outline"
          >
            <svg className="h-4.5 w-4.5 fill-current" aria-hidden="true">
              <use xlinkHref="/icons.svg#github-icon" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CTA);
