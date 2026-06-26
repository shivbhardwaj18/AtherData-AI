import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero.png';
import cubeIcon from '../assets/cube-16-solid.svg';
import arrowPathIcon from '../assets/arrow-path.svg';
import arrowTrendingIcon from '../assets/arrow-trending-up.svg';

const Hero = () => {
  const [syncedCount, setSyncedCount] = useState(8429104);
  const [logs, setLogs] = useState([
    { id: 1, type: 'info', text: 'Cognitive agent initializing...' },
    { id: 2, type: 'success', text: 'Connected to schema source postgres://main' },
    { id: 3, type: 'info', text: 'Mapping unstructured schema nodes (1.2M lines)' }
  ]);

  // Simulate record count updating live
  useEffect(() => {
    const timer = setInterval(() => {
      setSyncedCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Simulate scrolling console logs
  useEffect(() => {
    const logTexts = [
      'Indexed new JSON payload (184kb)',
      'Optimized query execution paths',
      'Flushed batch buffer to destination Warehouse',
      'Model validation: 99.98% semantic accuracy',
      'API query threshold OK (ping 14ms)',
      'Auto-healing pipeline node #2A',
      'Refined entity linking weights'
    ];
    const logTypes = ['info', 'success', 'warning', 'info'];

    const timer = setInterval(() => {
      const newText = logTexts[Math.floor(Math.random() * logTexts.length)];
      const newType = logTypes[Math.floor(Math.random() * logTypes.length)];
      setLogs((prev) => {
        const next = [...prev, { id: Date.now(), type: newType, text: newText }];
        if (next.length > 5) next.shift();
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-oceanic-noir pt-24 pb-16 md:pt-32 md:pb-24 grid-glow-spotlight" aria-label="AetherData AI Hero">
      
      {/* Decorative background glow rings */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forsythia/5 blur-[120px] animate-pulse-glow" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nocturnal-expedition/30 blur-[100px] animate-float" aria-hidden="true" />
      
      <div className="mx-auto max-w-7xl px-6 text-center">
        
        {/* Release Pill - Entranced immediately */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-nocturnal-expedition/30 px-3 py-1 text-xs font-medium text-arctic-powder/90 backdrop-blur-md mb-8 animate-fade-in-up [animation-fill-mode:forwards]">
          <span className="flex h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider text-forsythia font-bold">RELEASE 2.4</span>
          <span className="text-white/20">|</span>
          <span>Zero-Code Schema Automation</span>
        </div>

        {/* Hero Heading - Staggered delay 150ms */}
        <h1 className="mx-auto max-w-4xl font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.1] uppercase opacity-0 animate-fade-in-up [animation-delay:150ms] [animation-fill-mode:forwards] will-change-transform">
          Autonomous Data Pipelines <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-forsythia to-deep-saffron bg-clip-text text-transparent">
            Powered by Cognitive AI
          </span>
        </h1>

        {/* Subtitle - Staggered delay 300ms */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-arctic-powder/70 leading-relaxed md:text-lg opacity-0 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:forwards] will-change-transform">
          Ingest, map, normalize, and load any dataset into your warehouse in real-time. No engineering overhead. Just reliable automation.
        </p>

        {/* CTAs - Staggered delay 450ms */}
        <div className="mt-10 flex flex-wrap justify-center gap-4.5 opacity-0 animate-fade-in-up [animation-delay:450ms] [animation-fill-mode:forwards] will-change-transform">
          <a
            href="#pricing"
            className="btn-press rounded-lg bg-forsythia px-7 py-3.5 text-base font-bold text-oceanic-noir hover:bg-deep-saffron transition-all duration-150 hover:-translate-y-0.5 shadow-lg shadow-forsythia/10 hover:shadow-deep-saffron/10 focus-visible:outline"
          >
            Start Deploying Free
          </a>
          <a
            href="#features"
            className="btn-press rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 hover:border-white/25 transition-all duration-150 focus-visible:outline"
          >
            Explore Platform Docs
          </a>
        </div>

        {/* Stats Section - Staggered delay 600ms */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-white/5 py-8 sm:grid-cols-4 max-w-5xl mx-auto opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards] will-change-transform">
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-white">99.98%</div>
            <div className="text-xs text-arctic-powder/55 mt-1">Accuracy Index</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-forsythia">
              {syncedCount.toLocaleString()}
            </div>
            <div className="text-xs text-arctic-powder/55 mt-1">Daily Records Processed</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-white">&lt; 1.5s</div>
            <div className="text-xs text-arctic-powder/55 mt-1">Average Latency</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-white">SOC2</div>
            <div className="text-xs text-arctic-powder/55 mt-1">Enterprise Grade</div>
          </div>
        </div>

        {/* Interactive Dashboard Mockup - Staggered delay 750ms */}
        <div className="mt-16 md:mt-24 lg:mt-28 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-nocturnal-expedition/10 p-2 backdrop-blur-xl shadow-2xl opacity-0 animate-fade-in-up [animation-delay:750ms] [animation-fill-mode:forwards] will-change-transform">
          {/* Dashboard Window Header */}
          <div className="flex items-center justify-between border-b border-white/5 bg-oceanic-noir/50 px-4 py-3 rounded-t-lg">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="rounded border border-white/10 bg-nocturnal-expedition/30 px-6 py-0.5 font-mono text-[10px] tracking-wide text-white/50">
              aetherdata-dashboard.local/console
            </div>
            <div className="w-12" />
          </div>

          {/* Dashboard Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-oceanic-noir/90 p-4 rounded-b-lg gap-4 text-left font-sans">
            
            {/* Left Panel - Jobs List */}
            <div className="rounded-lg border border-white/5 bg-nocturnal-expedition/10 p-4">
              <h3 className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider mb-4 flex items-center justify-between">
                Active Sources
                <img src={arrowPathIcon} alt="" className="h-3.5 w-3.5 animate-spin invert opacity-50 [animation-duration:8s]" />
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-2.5 rounded bg-nocturnal-expedition/30 border border-white/5 transition-colors duration-200">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-forsythia animate-pulse" />
                    <span className="text-xs font-semibold text-white">PostgreSQL Sink</span>
                  </div>
                  <span className="text-[10px] font-mono text-forsythia">STREAMING</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-nocturnal-expedition/10 border border-white/5 opacity-75">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                    <span className="text-xs font-semibold text-white">Salesforce API</span>
                  </div>
                  <span className="text-[10px] font-mono text-arctic-powder/40">READY</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-nocturnal-expedition/10 border border-white/5 opacity-75">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                    <span className="text-xs font-semibold text-white">Zendesk JSON</span>
                  </div>
                  <span className="text-[10px] font-mono text-arctic-powder/40">READY</span>
                </div>
              </div>
            </div>

            {/* Center Panel - Dashboard Flow Visualization */}
            <div className="relative rounded-lg border border-white/5 bg-nocturnal-expedition/20 p-4 flex flex-col justify-between overflow-hidden min-h-[220px]">
              <div className="absolute inset-0 cyber-grid opacity-30" aria-hidden="true" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={cubeIcon} alt="" className="h-4.5 w-4.5 text-forsythia animate-float" />
                  <span className="text-xs font-bold text-white">Aether Engine v2</span>
                </div>
                <div className="flex items-center gap-1.5 bg-forsythia/10 border border-forsythia/20 rounded px-2 py-0.5 transition-colors">
                  <img src={arrowTrendingIcon} alt="" className="h-3 w-3" />
                  <span className="text-[9px] font-mono text-forsythia font-bold">12k rec/s</span>
                </div>
              </div>

              {/* Central Visual Image overlay */}
              <div className="relative flex justify-center items-center my-4 h-24">
                <img 
                  src={heroImage} 
                  alt="AetherData flow graphic" 
                  className="max-h-full max-w-full object-contain rounded opacity-75 transition-opacity hover:opacity-90 duration-200" 
                />
                {/* Floating data dots traversing path */}
                <div className="absolute top-1/2 left-4 h-2.5 w-2.5 rounded-full bg-forsythia shadow-lg shadow-forsythia/50 animate-ping" />
                <div className="absolute top-1/3 right-8 h-2 w-2 rounded-full bg-deep-saffron shadow-lg shadow-deep-saffron/50 animate-bounce [animation-duration:2.5s]" />
              </div>

              <div className="relative z-10 text-[10px] font-mono text-arctic-powder/55 text-center bg-oceanic-noir/80 py-1.5 rounded border border-white/5">
                Mapping structure automatically via embeddings
              </div>
            </div>

            {/* Right Panel - Live Streaming Console */}
            <div className="rounded-lg border border-white/5 bg-nocturnal-expedition/10 p-4 flex flex-col">
              <h3 className="font-mono text-xs font-bold text-white/40 uppercase tracking-wider mb-4">
                Cognitive Console
              </h3>
              <div className="flex flex-col gap-2 font-mono text-[10px] leading-relaxed flex-grow justify-end h-full">
                {logs.map((log) => (
                  <div key={log.id} className="flex gap-2 transition-all duration-300 animate-fade-in-up [animation-fill-mode:forwards]">
                    <span className={`font-semibold shrink-0 uppercase ${
                      log.type === 'success' ? 'text-forsythia' : log.type === 'warning' ? 'text-deep-saffron' : 'text-arctic-powder/55'
                    }`}>
                      {`[${log.type}]`}
                    </span>
                    <span className="text-arctic-powder/85 truncate">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(Hero);
