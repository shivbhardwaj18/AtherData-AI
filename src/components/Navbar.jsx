import React, { useState, useCallback, useEffect } from 'react';
import cubeLogo from '../assets/cube-16-solid.svg';
import xMarkIcon from '../assets/x-mark.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Monitor scroll behavior to add glassmorphism style dynamically
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'border-b border-white/10 bg-oceanic-noir/80 backdrop-blur-md py-3 shadow-lg shadow-black/10' 
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Main Navigation">
        {/* Logo and Branding */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-forsythia"
          aria-label="AetherData AI Home"
        >
          <img src={cubeLogo} alt="" className="h-6 w-6 text-forsythia animate-float" aria-hidden="true" />
          <span className="font-mono text-lg font-bold tracking-tight text-white">
            AETHER<span className="text-forsythia">DATA</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="nav-link text-sm font-medium text-arctic-powder/75 hover:text-white transition-colors duration-150">
            Features
          </a>
          <a href="#bento" className="nav-link text-sm font-medium text-arctic-powder/75 hover:text-white transition-colors duration-150">
            Analytics
          </a>
          <a href="#pricing" className="nav-link text-sm font-medium text-arctic-powder/75 hover:text-white transition-colors duration-150">
            Pricing
          </a>
          <a href="#testimonials" className="nav-link text-sm font-medium text-arctic-powder/75 hover:text-white transition-colors duration-150">
            Testimonials
          </a>
          <a href="#faq" className="nav-link text-sm font-medium text-arctic-powder/75 hover:text-white transition-colors duration-150">
            FAQ
          </a>
        </div>

        {/* Desktop Call to Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a 
            href="#pricing" 
            className="text-sm font-medium text-arctic-powder hover:text-white transition-colors duration-150 focus-visible:outline"
          >
            Sign In
          </a>
          <a 
            href="#pricing"
            className="btn-press rounded-lg bg-forsythia px-4.5 py-2 text-sm font-bold text-oceanic-noir hover:bg-deep-saffron transition-all duration-150 hover:-translate-y-0.5 shadow-md shadow-forsythia/10 hover:shadow-deep-saffron/10 focus-visible:outline"
          >
            Deploy Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-nocturnal-expedition/40 text-arctic-powder hover:bg-nocturnal-expedition/80 md:hidden focus-visible:outline transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          {isOpen ? (
            <img src={xMarkIcon} alt="" className="h-5 w-5 invert brightness-200" aria-hidden="true" />
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-[65px] z-40 bg-oceanic-noir/60 backdrop-blur-sm md:hidden transition-opacity duration-300" 
          onClick={toggleMenu} 
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 top-[65px] z-50 w-full max-w-sm border-l border-white/10 bg-oceanic-noir p-6 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col gap-6">
          <a
            href="#features"
            onClick={toggleMenu}
            className="text-lg font-medium text-arctic-powder/85 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            Features
          </a>
          <a
            href="#bento"
            onClick={toggleMenu}
            className="text-lg font-medium text-arctic-powder/85 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            Analytics
          </a>
          <a
            href="#pricing"
            onClick={toggleMenu}
            className="text-lg font-medium text-arctic-powder/85 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            onClick={toggleMenu}
            className="text-lg font-medium text-arctic-powder/85 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            onClick={toggleMenu}
            className="text-lg font-medium text-arctic-powder/85 hover:text-white transition-colors py-2 border-b border-white/5"
          >
            FAQ
          </a>

          <div className="mt-4 flex flex-col gap-4">
            <a
              href="#pricing"
              onClick={toggleMenu}
              className="flex w-full items-center justify-center rounded-lg border border-white/10 py-3 text-center text-base font-medium text-arctic-powder hover:bg-white/5 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              onClick={toggleMenu}
              className="flex w-full items-center justify-center rounded-lg bg-forsythia py-3 text-center text-base font-bold text-oceanic-noir hover:bg-deep-saffron transition-all"
            >
              Deploy Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
