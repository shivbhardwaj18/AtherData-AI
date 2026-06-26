import React, { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import chevronDown from '../assets/chevron-down.svg';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How does the cognitive mapping agent handle schema modifications?',
    answer: 'Our cognitive mapping agent monitors incoming payload paths in real-time. If a source schema shifts (e.g., a field type transitions from string to integer, or a new nested object is introduced), the agent evaluates the changes and automatically compiles an optimized mapping patch. The migration happens instantly without interrupting database sink processes.'
  },
  {
    id: 2,
    question: 'Is there support for custom target databases or warehousing systems?',
    answer: 'Yes. AetherData natively supports all major data warehouses including Snowflake, Google BigQuery, Amazon Redshift, and Databricks, alongside standard relational engines like PostgreSQL, MySQL, and MongoDB. Custom integration endpoints can be defined via our SDK using REST or Webhooks.'
  },
  {
    id: 3,
    question: 'How secure is my data during processing?',
    answer: 'Data security is integrated at the protocol level. We are SOC2 Type II certified. All traffic is encrypted in transit using TLS 1.3 and at rest via AES-256. For enterprise configurations, AetherData can be run entirely within your virtual private cloud (VPC), ensuring your raw payload contents never leave your network boundary.'
  },
  {
    id: 4,
    question: 'What happens if a pipeline source runs into an API rate limit?',
    answer: 'AetherData implements automatic token-bucket rate limiting and exponential backoff queues. When an API limit threshold is hit, the agent queues the incoming sync requests, pauses the source runner, and schedules safe retries. Alerts are sent to your dashboard with exact rate limit usage logs.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const containerRef = useScrollReveal();

  // Performance Log
  console.log('[FAQ Rendered]');

  const handleToggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section 
      id="faq" 
      ref={containerRef}
      className="w-full bg-oceanic-noir py-24 border-b border-white/5" 
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-init">
          <h2 className="font-mono text-xs font-bold tracking-widest text-forsythia uppercase">
            SYSTEM PARAMETERS
          </h2>
          <p className="mt-4 font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl uppercase">
            Frequently Queried
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 reveal-init reveal-delay-200">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-forsythia bg-nocturnal-expedition/20' : 'border-white/10 bg-nocturnal-expedition/10'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-sans text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <img 
                    src={chevronDown} 
                    alt="" 
                    className={`h-4.5 w-4.5 invert brightness-200 opacity-60 shrink-0 ml-4 transition-transform duration-250 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Answer Panel using CSS Grid smooth transition */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`accordion-rows transition-all duration-300 ${
                    isOpen ? 'open opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                  role="region"
                  aria-label={item.question}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-arctic-powder/75 pb-6 px-6">
                      {item.answer}
                    </p>
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

export default React.memo(FAQ);
