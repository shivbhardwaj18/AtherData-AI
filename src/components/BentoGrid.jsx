import React, { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import chevronDown from '../assets/chevron-down.svg';

const BENTO_ITEMS = [
  {
    id: 0,
    title: 'Aether Ingestion Core',
    subtitle: 'COGNITIVE MAPPING ENGINE',
    description: 'Autonomous schema recognition engine. Resolves data variations, nested JSON arrays, and key-value shifts dynamically.',
    content: (
      <div className="flex flex-col gap-3 font-mono text-[10px] text-arctic-powder/75">
        <div className="flex justify-between items-center bg-nocturnal-expedition/30 p-2.5 rounded border border-white/5">
          <span className="text-forsythia">INPUT STREAM</span>
          <span className="text-white font-bold">14,204 payloads/sec</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-nocturnal-expedition/20 p-2.5 rounded border border-white/5 text-center">
            <span className="block text-[8px] text-arctic-powder/40">JSON ARRAY</span>
            <span className="text-white font-semibold">AUTO-RESOLVED</span>
          </div>
          <div className="flex-1 bg-nocturnal-expedition/20 p-2.5 rounded border border-white/5 text-center">
            <span className="block text-[8px] text-arctic-powder/40">NESTED SCHEMAS</span>
            <span className="text-white font-semibold">MAPPED</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: 'Real-time Node Health',
    subtitle: 'TELEMETRY ENGINE',
    description: 'Active monitoring of edge execution units. Continuous monitoring checks node thresholds and manages memory usage dynamically.',
    content: (
      <div className="flex flex-col gap-3.5 h-full justify-between">
        <div className="flex flex-col gap-1.5 font-mono text-[10px]">
          <div className="flex justify-between text-arctic-powder/50">
            <span>NODE_US_EAST</span>
            <span className="text-[#27C93F] font-bold">99.9%</span>
          </div>
          <div className="w-full bg-white/10 h-1 rounded overflow-hidden">
            <div className="bg-[#27C93F] h-full w-[99.9%]" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 font-mono text-[10px]">
          <div className="flex justify-between text-arctic-powder/50">
            <span>NODE_EU_WEST</span>
            <span className="text-[#27C93F] font-bold">99.8%</span>
          </div>
          <div className="w-full bg-white/10 h-1 rounded overflow-hidden">
            <div className="bg-[#27C93F] h-full w-[99.8%]" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 font-mono text-[10px]">
          <div className="flex justify-between text-arctic-powder/50">
            <span>NODE_AP_SOUTH</span>
            <span className="text-forsythia font-bold">94.1%</span>
          </div>
          <div className="w-full bg-white/10 h-1 rounded overflow-hidden">
            <div className="bg-forsythia h-full w-[94.1%]" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Latency Index',
    subtitle: 'PERFORMANCE BENCHMARK',
    description: 'Sub-millisecond processing. Global edge deployment routes events with minimized packet serialization times.',
    content: (
      <div className="flex flex-col items-center justify-center p-3 text-center">
        <div className="font-mono text-3xl font-extrabold text-forsythia animate-pulse-glow">0.82 ms</div>
        <div className="text-[9px] font-mono tracking-wider text-arctic-powder/40 uppercase mt-1">Average Edge Time</div>
      </div>
    )
  },
  {
    id: 3,
    title: 'SDK & Integration',
    subtitle: 'DEVELOPER EXPERIENCE',
    description: 'Deploy schemas via code. A simple NPM module gives you absolute control over pipeline triggers, events, and targets.',
    content: (
      <pre className="rounded-lg bg-black/40 p-3.5 font-mono text-[9px] text-arctic-powder/80 overflow-x-auto border border-white/5 leading-relaxed">
        <code className="block">
          <span className="text-forsythia">import</span> &#123; Aether &#125; <span className="text-forsythia">from</span> <span className="text-[#FF9932]">'@aether/sdk'</span>;<br />
          <span className="text-forsythia">const</span> client = <span className="text-forsythia">new</span> Aether(&#123; key: <span className="text-[#FF9932]">'sk_live_...'</span> &#125;);<br /><br />
          <span className="text-arctic-powder/40">// Auto-generate pipeline</span><br />
          <span className="text-forsythia">await</span> client.pipelines.create(&#123;<br />
          &nbsp;&nbsp;source: <span className="text-[#FF9932]">'postgres://...'</span>,<br />
          &nbsp;&nbsp;sink: <span className="text-[#FF9932]">'bigquery://...'</span><br />
          &#125;);
        </code>
      </pre>
    )
  }
];

const BentoGrid = () => {
  const [activeId, setActiveId] = useState(0);
  const containerRef = useScrollReveal();

  const handleCardSelect = useCallback((id) => {
    setActiveId(id);
  }, []);

  return (
    <section 
      id="bento" 
      ref={containerRef}
      className="w-full bg-oceanic-noir py-24 border-b border-white/5" 
      aria-label="Platform Analytics & Bento Grid"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left reveal-init">
          <h2 className="font-mono text-xs font-bold tracking-widest text-forsythia uppercase">
            AETHER TELEMETRY
          </h2>
          <p className="mt-4 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase">
            Interactive Insights
          </p>
          <p className="mt-4 text-arctic-powder/75 text-base sm:text-lg">
            Hover over the grids to inspect key telemetry values. The grid automatically synchronizes selected states during window resizing.
          </p>
        </div>

        {/* 1. Desktop Bento Grid View (hidden below md) */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-fr reveal-init reveal-delay-200">
          
          {/* Card 0: Ingestion Core (col-span-2) */}
          <div
            onClick={() => handleCardSelect(0)}
            onMouseEnter={() => handleCardSelect(0)}
            className={`group rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between hover-lift col-span-2 ${
              activeId === 0 ? 'border-beam-card-active' : 'border-beam-card'
            }`}
            aria-selected={activeId === 0}
            role="tab"
          >
            <div>
              <div className="font-mono text-[9px] font-bold text-forsythia tracking-widest uppercase">
                {BENTO_ITEMS[0].subtitle}
              </div>
              <h3 className="mt-2.5 font-mono text-xl font-bold text-white uppercase">
                {BENTO_ITEMS[0].title}
              </h3>
              <p className="mt-3.5 text-sm text-arctic-powder/70 max-w-xl">
                {BENTO_ITEMS[0].description}
              </p>
            </div>
            <div className="mt-8 transition-transform duration-300 group-hover:translate-x-1">
              {BENTO_ITEMS[0].content}
            </div>
          </div>

          {/* Card 1: Node Health (col-span-1, row-span-2) */}
          <div
            onClick={() => handleCardSelect(1)}
            onMouseEnter={() => handleCardSelect(1)}
            className={`group rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between hover-lift row-span-2 ${
              activeId === 1 ? 'border-beam-card-active' : 'border-beam-card'
            }`}
            aria-selected={activeId === 1}
            role="tab"
          >
            <div>
              <div className="font-mono text-[9px] font-bold text-forsythia tracking-widest uppercase">
                {BENTO_ITEMS[1].subtitle}
              </div>
              <h3 className="mt-2.5 font-mono text-xl font-bold text-white uppercase">
                {BENTO_ITEMS[1].title}
              </h3>
              <p className="mt-3.5 text-sm text-arctic-powder/70">
                {BENTO_ITEMS[1].description}
              </p>
            </div>
            <div className="mt-12 transition-all duration-350 group-hover:scale-[1.02]">
              {BENTO_ITEMS[1].content}
            </div>
          </div>

          {/* Card 2: Latency Index (col-span-1) */}
          <div
            onClick={() => handleCardSelect(2)}
            onMouseEnter={() => handleCardSelect(2)}
            className={`group rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between hover-lift col-span-1 ${
              activeId === 2 ? 'border-beam-card-active' : 'border-beam-card'
            }`}
            aria-selected={activeId === 2}
            role="tab"
          >
            <div>
              <div className="font-mono text-[9px] font-bold text-forsythia tracking-widest uppercase">
                {BENTO_ITEMS[2].subtitle}
              </div>
              <h3 className="mt-2.5 font-mono text-xl font-bold text-white uppercase">
                {BENTO_ITEMS[2].title}
              </h3>
              <p className="mt-3.5 text-sm text-arctic-powder/70">
                {BENTO_ITEMS[2].description}
              </p>
            </div>
            <div className="mt-8 transition-transform duration-350 group-hover:-translate-y-1">
              {BENTO_ITEMS[2].content}
            </div>
          </div>

          {/* Card 3: SDK & Integration (col-span-2) */}
          <div
            onClick={() => handleCardSelect(3)}
            onMouseEnter={() => handleCardSelect(3)}
            className={`group rounded-xl p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between hover-lift col-span-2 ${
              activeId === 3 ? 'border-beam-card-active' : 'border-beam-card'
            }`}
            aria-selected={activeId === 3}
            role="tab"
          >
            <div>
              <div className="font-mono text-[9px] font-bold text-forsythia tracking-widest uppercase">
                {BENTO_ITEMS[3].subtitle}
              </div>
              <h3 className="mt-2.5 font-mono text-xl font-bold text-white uppercase">
                {BENTO_ITEMS[3].title}
              </h3>
              <p className="mt-3.5 text-sm text-arctic-powder/70 max-w-xl">
                {BENTO_ITEMS[3].description}
              </p>
            </div>
            <div className="mt-6 transition-all duration-300 group-hover:shadow-2xl">
              {BENTO_ITEMS[3].content}
            </div>
          </div>

        </div>

        {/* 2. Mobile Accordion View (hidden above md) */}
        <div className="block md:hidden flex flex-col gap-4 reveal-init reveal-delay-200">
          {BENTO_ITEMS.map((item) => {
            const isItemOpen = activeId === item.id;
            return (
              <div 
                key={item.id} 
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isItemOpen ? 'border-forsythia bg-nocturnal-expedition/20' : 'border-white/10 bg-nocturnal-expedition/10'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => handleCardSelect(item.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isItemOpen}
                  aria-controls={`accordion-body-${item.id}`}
                >
                  <div className="flex flex-col">
                    <span className="font-mono text-[8px] font-bold tracking-wider text-forsythia uppercase">
                      {item.subtitle}
                    </span>
                    <span className="font-mono text-base font-bold text-white uppercase mt-0.5">
                      {item.title}
                    </span>
                  </div>
                  <img 
                    src={chevronDown} 
                    alt="" 
                    className={`h-4.5 w-4.5 invert brightness-200 opacity-60 transition-transform duration-250 ${
                      isItemOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                    aria-hidden="true"
                  />
                </button>

                {/* Accordion Expandable Content Panel using CSS Grid row height transition */}
                <div
                  id={`accordion-body-${item.id}`}
                  className={`accordion-rows transition-all duration-300 ${
                    isItemOpen ? 'open opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={!isItemOpen}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-sm text-arctic-powder/70 mb-5 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-2">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default React.memo(BentoGrid);
