import { useEffect, useRef } from 'react';

/**
 * React hook to reveal elements as they enter the viewport using IntersectionObserver.
 * Returns a ref to attach to the container element containing items with the class '.reveal-init'.
 * When visible, elements will get the class '.reveal-active'.
 */
export const useScrollReveal = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -80px 0px', // trigger slightly before entering viewport fully
      threshold: 0.1, // 10% visibility
      ...options
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target); // only animate once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (containerRef.current) {
      // Find all child elements with .reveal-init class
      const revealItems = containerRef.current.querySelectorAll('.reveal-init');
      revealItems.forEach((item) => observer.observe(item));
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return containerRef;
};
