import React, { useState, useCallback } from 'react';
import cubeLogo from '../assets/cube-16-solid.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API registration
    setStatus('Subscribed! Welcome to the loop.');
    setEmail('');
    setTimeout(() => setStatus(''), 4000);
  }, [email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <footer className="w-full border-t border-white/10 bg-oceanic-noir py-16 text-arctic-powder/70" aria-label="AetherData AI Footer">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6 lg:gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={cubeLogo} alt="" className="h-6 w-6" aria-hidden="true" />
              <span className="font-mono text-lg font-bold tracking-tight text-white">
                AETHER<span className="text-forsythia">DATA</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-arctic-powder/50">
              Autonomous data pipelines and cognitive analytics for modern engineering teams. No configuration required.
            </p>
            {/* Social Links using SVG symbols */}
            <div className="flex gap-4.5 mt-2" aria-label="Social links">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-nocturnal-expedition/30 text-arctic-powder/75 hover:border-forsythia hover:text-forsythia transition-all duration-150 focus-visible:outline"
                aria-label="Follow us on X"
              >
                <svg className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                  <use xlinkHref="/icons.svg#x-icon" />
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-nocturnal-expedition/30 text-arctic-powder/75 hover:border-forsythia hover:text-forsythia transition-all duration-150 focus-visible:outline"
                aria-label="Follow us on GitHub"
              >
                <svg className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                  <use xlinkHref="/icons.svg#github-icon" />
                </svg>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-nocturnal-expedition/30 text-arctic-powder/75 hover:border-forsythia hover:text-forsythia transition-all duration-150 focus-visible:outline"
                aria-label="Join our Discord Server"
              >
                <svg className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                  <use xlinkHref="/icons.svg#discord-icon" />
                </svg>
              </a>
              <a 
                href="https://bluesky.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-nocturnal-expedition/30 text-arctic-powder/75 hover:border-forsythia hover:text-forsythia transition-all duration-150 focus-visible:outline"
                aria-label="Follow us on Bluesky"
              >
                <svg className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                  <use xlinkHref="/icons.svg#bluesky-icon" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-white uppercase">Product</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#features" className="hover:text-forsythia transition-colors duration-150">Autonomous Engine</a>
              <a href="#bento" className="hover:text-forsythia transition-colors duration-150">Visual Pipelines</a>
              <a href="#pricing" className="hover:text-forsythia transition-colors duration-150">Pricing Plans</a>
              <a href="#faq" className="hover:text-forsythia transition-colors duration-150">Security Standards</a>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-white uppercase">Resources</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#" className="hover:text-forsythia transition-colors duration-150">Developer Docs</a>
              <a href="#" className="hover:text-forsythia transition-colors duration-150">API Reference</a>
              <a href="#" className="hover:text-forsythia transition-colors duration-150">Platform Status</a>
              <a href="#" className="hover:text-forsythia transition-colors duration-150">Open Source</a>
            </div>
          </div>

          {/* Links Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#" className="hover:text-forsythia transition-colors duration-150">About</a>
              <a href="#" className="hover:text-forsythia transition-colors duration-150">Blog</a>
              <a href="#" className="hover:text-forsythia transition-colors duration-150">Careers</a>
              <a href="#" className="hover:text-forsythia transition-colors duration-150">Contact</a>
            </div>
          </div>

          {/* Newsletter Input Column */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="font-mono text-sm font-semibold tracking-wider text-white uppercase">Stay Synced</h3>
            <p className="text-sm text-arctic-powder/50">
              Get technical updates, system patches, and new features straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="name@company.com"
                  className="w-full rounded-lg border border-white/10 bg-nocturnal-expedition/30 px-3.5 py-2 text-sm text-arctic-powder placeholder:text-arctic-powder/35 focus:border-forsythia focus:outline-none"
                  aria-label="Email address for newsletter"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-forsythia px-4.5 py-2 text-sm font-bold text-oceanic-noir hover:bg-deep-saffron transition-colors cursor-pointer shrink-0 focus-visible:outline"
              >
                Subscribe
              </button>
            </form>
            {status && (
              <p className="text-xs font-medium text-forsythia animate-fade-in-up" role="status">
                {status}
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-arctic-powder/45">
          <p>&copy; {new Date().getFullYear()} AetherData AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-150">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-150">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-150">Security (SOC2)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
