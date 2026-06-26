import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import cogIcon from '../assets/cog-8-tooth.svg';
import chartIcon from '../assets/chart-pie.svg';
import trendingIcon from '../assets/arrow-trending-up.svg';

const FEATURES = [
  {
    id: 1,
    title: 'Cognitive Mapping',
    description: 'Auto-detect fields, data types, nested records, and relationships. Builds schemas dynamically with 99.98% accuracy.',
    icon: cogIcon,
    badge: 'Cognitive Engine',
    delayClass: 'reveal-delay-100'
  },
  {
    id: 2,
    title: 'Unified Warehousing',
    description: 'Sync unstructured data streams into Snowflake, BigQuery, Postgres, or Databricks without writing custom mapping scripts.',
    icon: chartIcon,
    badge: 'Analytics Sink',
    delayClass: 'reveal-delay-200'
  },
  {
    id: 3,
    title: 'Auto-Healing Pipelines',
    description: 'Platform automatically detects API schema shifts, retries failed batches, and alerts with exact code-level resolutions.',
    icon: trendingIcon,
    badge: 'Zero-Downtime',
    delayClass: 'reveal-delay-300'
  }
];

const Features = () => {
  const containerRef = useScrollReveal();

  return (
    <section 
      id="features" 
      ref={containerRef}
      className="w-full bg-oceanic-noir py-24 border-b border-white/5" 
      aria-label="Key Platform Features"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-init">
          <h2 className="font-mono text-xs font-bold tracking-widest text-forsythia uppercase">
            PLATFORM CAPABILITIES
          </h2>
          <p className="mt-4 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase">
            Data Automation, Refined
          </p>
          <p className="mt-4 text-arctic-powder/75 text-base sm:text-lg">
            Stop writing boilerplate ingestion scripts. AetherData automates complex schemas using deep-reasoning mapping agents.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feat) => (
            <div 
              key={feat.id}
              className={`group reveal-init ${feat.delayClass} hover-lift relative rounded-xl border border-white/10 bg-nocturnal-expedition/10 p-8 hover:border-forsythia/35 transition-all duration-300 hover:shadow-xl hover:shadow-forsythia/5`}
            >
              {/* Card Spotlight background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-forsythia/0 to-forsythia/0 group-hover:from-forsythia/[0.02] group-hover:to-transparent pointer-events-none transition-colors" />

              {/* Icon Container */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-nocturnal-expedition/40 text-forsythia group-hover:bg-nocturnal-expedition/80 group-hover:border-forsythia/30 transition-all duration-300">
                <img src={feat.icon} alt="" className="h-6 w-6 text-forsythia group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
              </div>

              {/* Card Label */}
              <div className="mt-6 font-mono text-[10px] font-bold tracking-wider text-forsythia uppercase">
                {feat.badge}
              </div>

              {/* Title */}
              <h3 className="mt-2.5 font-mono text-lg font-bold text-white uppercase tracking-tight">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="mt-3.5 text-sm leading-relaxed text-arctic-powder/70">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(Features);
