import React, { useState, useMemo, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Pricing Matrix Configuration
const PRICING_MATRIX = {
  USD: {
    symbol: '$',
    code: 'USD',
    plans: {
      starter: { basePrice: 29, features: ['3 active pipelines', '5,000,000 records / mo', '15-min sync intervals', 'Community support'] },
      business: { basePrice: 79, features: ['Unlimited pipelines', '50,000,000 records / mo', 'Real-time sync latency', 'Priority email support', 'Advanced transform mappings'] },
      enterprise: { basePrice: 249, features: ['Unlimited records / mo', 'Custom schema agents', 'Dedicated execution nodes', 'SLA guaranteed (99.9%)', '24/7 dedicated engineer access'] }
    }
  },
  EUR: {
    symbol: '€',
    code: 'EUR',
    plans: {
      starter: { basePrice: 27, features: ['3 active pipelines', '5,000,000 records / mo', '15-min sync intervals', 'Community support'] },
      business: { basePrice: 73, features: ['Unlimited pipelines', '50,000,000 records / mo', 'Real-time sync latency', 'Priority email support', 'Advanced transform mappings'] },
      enterprise: { basePrice: 229, features: ['Unlimited records / mo', 'Custom schema agents', 'Dedicated execution nodes', 'SLA guaranteed (99.9%)', '24/7 dedicated engineer access'] }
    }
  },
  INR: {
    symbol: '₹',
    code: 'INR',
    plans: {
      starter: { basePrice: 1999, features: ['3 active pipelines', '5,000,000 records / mo', '15-min sync intervals', 'Community support'] },
      business: { basePrice: 5999, features: ['Unlimited pipelines', '50,000,000 records / mo', 'Real-time sync latency', 'Priority email support', 'Advanced transform mappings'] },
      enterprise: { basePrice: 19999, features: ['Unlimited records / mo', 'Custom schema agents', 'Dedicated execution nodes', 'SLA guaranteed (99.9%)', '24/7 dedicated engineer access'] }
    }
  }
};

const Pricing = () => {
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
  const containerRef = useScrollReveal();

  // Performance Log: Show that this is executing
  console.log('[Pricing Rendered] Pricing component recalculated.');

  const handleCurrencyChange = useCallback((cur) => {
    setCurrency(cur);
  }, []);

  const handleCycleChange = useCallback((cycle) => {
    setBillingCycle(cycle);
  }, []);

  // Compute calculated prices using useMemo
  const currentPricingData = useMemo(() => {
    const config = PRICING_MATRIX[currency];
    const discountFactor = billingCycle === 'annual' ? 0.8 : 1.0; // 20% discount

    return {
      symbol: config.symbol,
      code: config.code,
      plans: Object.entries(config.plans).map(([key, details]) => {
        const originalMonthly = details.basePrice;
        const computedMonthly = Math.floor(originalMonthly * discountFactor);
        const computedAnnualTotal = computedMonthly * 12;

        return {
          id: key,
          name: key.toUpperCase(),
          monthlyRate: computedMonthly,
          annualTotal: computedAnnualTotal,
          features: details.features
        };
      })
    };
  }, [currency, billingCycle]);

  return (
    <section 
      id="pricing" 
      ref={containerRef}
      className="w-full bg-oceanic-noir py-24 border-b border-white/5" 
      aria-label="Flexible Pricing Options"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-init">
          <h2 className="font-mono text-xs font-bold tracking-widest text-forsythia uppercase">
            PRICING SCHEMAS
          </h2>
          <p className="mt-4 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase">
            Scale Dynamically
          </p>
          <p className="mt-4 text-arctic-powder/75 text-base sm:text-lg">
            Choose a plan tailored to your team’s scale. Shift currencies and cycles instantly without impacting page telemetry.
          </p>

          {/* Pricing Controls: Currency & Billing Switchers */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {/* Currency Selector */}
            <div className="flex rounded-lg bg-nocturnal-expedition/30 border border-white/10 p-1" role="tablist" aria-label="Select Currency">
              {['USD', 'EUR', 'INR'].map((cur) => (
                <button
                  key={cur}
                  type="button"
                  role="tab"
                  aria-selected={currency === cur}
                  onClick={() => handleCurrencyChange(cur)}
                  className={`rounded-md px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none ${
                    currency === cur
                      ? 'bg-forsythia text-oceanic-noir font-bold'
                      : 'text-arctic-powder/60 hover:text-white'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>

            {/* Billing Cycle Switcher */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleCycleChange('monthly')}
                className={`font-sans text-xs font-medium transition-colors cursor-pointer ${
                  billingCycle === 'monthly' ? 'text-white font-semibold' : 'text-arctic-powder/50 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => handleCycleChange(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-nocturnal-expedition/60 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-forsythia focus:ring-offset-2 focus:ring-offset-oceanic-noir"
                aria-checked={billingCycle === 'annual'}
                role="switch"
                aria-label="Toggle annual billing cycle (20% discount)"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-forsythia shadow ring-0 transition duration-200 ease-in-out ${
                    billingCycle === 'annual' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <button
                type="button"
                onClick={() => handleCycleChange('annual')}
                className={`font-sans text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'annual' ? 'text-white font-semibold' : 'text-arctic-powder/50 hover:text-white'
                }`}
              >
                Annual
                <span className="rounded bg-forsythia/10 border border-forsythia/25 px-1.5 py-0.5 font-mono text-[9px] font-bold text-forsythia uppercase">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch max-w-6xl mx-auto reveal-init reveal-delay-200">
          {currentPricingData.plans.map((plan) => {
            const isBusiness = plan.id === 'business';
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-xl p-8 hover-lift duration-300 relative ${
                  isBusiness 
                    ? 'border-beam-card-active bg-nocturnal-expedition/20 shadow-xl shadow-forsythia/5' 
                    : 'border-beam-card bg-nocturnal-expedition/10'
                }`}
              >
                {isBusiness && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forsythia px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-oceanic-noir uppercase">
                    RECOMMENDED Plan
                  </span>
                )}

                <div>
                  <h3 className="font-mono text-sm font-bold tracking-widest text-arctic-powder/55 uppercase">
                    {plan.name}
                  </h3>
                  
                  {/* Price presentation with stable transitions */}
                  <div className="mt-6 flex items-baseline gap-1 font-mono transition-all duration-200">
                    <span className="text-4xl font-extrabold text-white">
                      {currentPricingData.symbol}{plan.monthlyRate}
                    </span>
                    <span className="text-xs text-arctic-powder/45">/ month</span>
                  </div>

                  <div className="h-4 mt-1">
                    {billingCycle === 'annual' ? (
                      <div className="font-mono text-[10px] text-forsythia font-medium transition-all duration-200 animate-fade-in-up [animation-fill-mode:forwards]">
                        Billed annually ({currentPricingData.symbol}{plan.annualTotal}/yr)
                      </div>
                    ) : (
                      <div className="font-mono text-[10px] text-transparent" aria-hidden="true">
                        Spacer
                      </div>
                    )}
                  </div>

                  <div className="mt-8 border-t border-white/5 pt-8">
                    <ul className="flex flex-col gap-4 text-sm text-arctic-powder/75">
                      {plan.features.map((feat, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="h-4.5 w-4.5 text-forsythia shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    className={`w-full rounded-lg py-3 text-center text-sm font-bold transition-all duration-150 cursor-pointer focus-visible:outline btn-press ${
                      isBusiness
                        ? 'bg-forsythia text-oceanic-noir hover:bg-deep-saffron shadow-lg shadow-forsythia/10 hover:shadow-deep-saffron/10 hover:-translate-y-0.5'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25'
                    }`}
                  >
                    {plan.id === 'enterprise' ? 'Contact Architecture Team' : 'Provision Instance'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
