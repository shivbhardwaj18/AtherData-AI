import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'We migrated 400 pipelines from custom Python cron jobs to AetherData in a single afternoon. The cognitive mapping agent mapped our legacy schemas flawlessly.',
    author: 'Aarav Mehta',
    role: 'Principal Data Architect',
    company: 'NovaCloud',
    initials: 'AM'
  },
  {
    id: 2,
    quote: 'Pipeline maintenance went from 20 hours a week of engineer firefighting to literally zero. The auto-healing mappings saved us from three major upstream API breaks.',
    author: 'Elena Rostova',
    role: 'VP of Engineering',
    company: 'Logiq AI',
    initials: 'ER'
  },
  {
    id: 3,
    quote: 'The Edge latency of 0.8ms is true to specification. Having absolute sub-millisecond sync mapping has unlocked real-time user event analytics that we could never achieve before.',
    author: 'Marcus Vance',
    role: 'Lead Systems Engineer',
    company: 'Spectra',
    initials: 'MV'
  }
];

const Testimonials = () => {
  const containerRef = useScrollReveal();

  // Performance Log
  console.log('[Testimonials Rendered]');

  return (
    <section 
      id="testimonials" 
      ref={containerRef}
      className="w-full bg-oceanic-noir py-24 border-b border-white/5" 
      aria-label="Client Testimonials"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-init">
          <h2 className="font-mono text-xs font-bold tracking-widest text-forsythia uppercase">
            USER CONSOLE
          </h2>
          <p className="mt-4 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase">
            Validated by Builders
          </p>
          <p className="mt-4 text-arctic-powder/75 text-base sm:text-lg">
            See how scaling engineering teams run their data layers without infrastructure friction.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 reveal-init reveal-delay-200">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-nocturnal-expedition/10 p-8 hover-lift hover:border-forsythia/25 transition-all duration-300"
            >
              <div>
                {/* Visual quote indicator */}
                <span className="font-mono text-4xl font-extrabold text-forsythia/35 leading-none">“</span>
                <p className="mt-2 text-sm leading-relaxed text-arctic-powder/80 italic">
                  {t.quote}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nocturnal-expedition border border-white/10 font-mono text-xs font-bold text-forsythia transition-colors group-hover:border-forsythia">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-arctic-powder/55">
                    {t.role} at <span className="font-mono font-medium text-forsythia">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(Testimonials);
