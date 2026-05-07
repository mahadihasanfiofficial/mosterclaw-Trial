import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SEO from './SEO';

interface ServicePageProps {
  title: string;
  heroText: string;
  deliverables: { title: string; desc: string }[];
  proof: string;
  onOpenBrief: () => void;
  faqs?: { q: string; a: string }[];
}

export default function ServicePage({ title, heroText, deliverables, proof, onOpenBrief, faqs = [] }: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const defaultFaqs = [
    { q: `How long does it take to see results from ${title}?`, a: "Most clients see initial growth signs within 45-60 days, with full revenue machine maturity reaching peak efficiency at the 6-month mark." },
    { q: "Do you integrate with our existing CRM?", a: "Yes, our team handles technical integration with HubSpot, Salesforce, and custom tech stacks as part of our IT implementation process." }
  ];

  const actualFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="pt-40">
      <SEO 
        title={`${title} for B2B Growth`} 
        description={`Scale your company with our enterprise-grade ${title} services. Proven results, expert execution, and $47M+ in attributed revenue.`}
      />

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 mb-8"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-muted max-w-3xl leading-relaxed"
          >
            {heroText}
          </motion.p>
        </div>
      </section>

      <section className="section-padding px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 mb-16">The Deliverables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className="p-8 border border-white/10 bg-bg-dark flex gap-6 hover:border-brand-red transition-all">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-brand-red/10 text-brand-red">
                  <Check size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto text-center border-y border-white/5 py-24">
          <span className="text-brand-red uppercase tracking-widest font-bold text-sm block mb-4">Hard Proof</span>
          <div className="text-5xl md:text-8xl font-display mb-12">{proof}</div>
          <button
            onClick={onOpenBrief}
            className="bg-brand-red text-white px-12 py-5 font-display text-xl uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-4 mx-auto"
          >
            Start Your Briefing <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* FAQ Section for SEO/Voice Search Optimization */}
      <section className="section-padding px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="text-brand-red mx-auto mb-6" size={48} />
            <h2 className="text-h2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {actualFaqs.map((faq, i) => (
              <div key={i} className="border border-white/5 bg-bg-dark overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors gap-4"
                >
                  <span className="text-xl font-display uppercase tracking-wider">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                  } border-t border-white/5 text-muted leading-relaxed`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
