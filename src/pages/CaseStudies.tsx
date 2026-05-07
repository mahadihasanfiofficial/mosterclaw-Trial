import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, BarChart3, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Enterprise CRM Scaling',
      sector: 'SaaS',
      metric: '412%',
      label: 'Organic Revenue Lift',
      desc: 'How we helped a leading CRM provider dominate mid-market search terms and reduce CAC by 65%.',
      icon: BarChart3,
      tags: ['SEO', 'Content Engine']
    },
    {
      title: 'FinTech Affiliate Blitz',
      sector: 'Finance',
      metric: '5400%',
      label: 'Partner Traffic Growth',
      desc: 'Recruiting 2,000+ top-tier financial influencers to drive consistent organic acquisition.',
      icon: TrendingUp,
      tags: ['Affiliate', 'Strategy']
    },
    {
      title: 'Global Logistics Portal',
      sector: 'Supply Chain',
      metric: '$12M',
      label: 'Attributed Revenue',
      desc: 'Redrafting the IT infrastructure and SEO content clusters for a multi-regional logistics giant.',
      icon: Database,
      tags: ['IT/Dev', 'SEO']
    },
  ];

  return (
    <div className="pt-40">
      <SEO 
        title="B2B Marketing Case Studies" 
        description="Explore real-world results from MonsterClaw LLC. Our case studies demonstrate significant ROI and growth across SaaS, Finance, and Enterprise IT sectors."
        keywords="marketing ROI, B2B case studies, SaaS growth examples, SEO results"
      />

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-h1 mb-8">Proof of <span className="text-brand-red">Concept</span></h1>
            <p className="text-2xl text-muted max-w-2xl">
              We don't just talk about growth. We show it. Explore how we've transformed B2B brands through mercifully effective execution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-surface border border-white/5 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center hover:border-brand-red transition-all"
            >
              <div className="lg:w-1/3 aspect-square bg-bg-dark border border-white/5 flex flex-col items-center justify-center p-12 text-center group-hover:bg-brand-red/5 transition-colors">
                <div className="text-brand-red mb-6">
                   <c.icon size={64} />
                </div>
                <div className="text-6xl font-display group-hover:scale-110 transition-transform">{c.metric}</div>
                <div className="text-xs uppercase tracking-widest text-muted mt-2">{c.label}</div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex gap-3">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 text-muted">{tag}</span>
                  ))}
                </div>
                <div className="space-y-4">
                  <span className="text-brand-red uppercase text-sm font-bold">{c.sector}</span>
                  <h2 className="text-4xl font-display">{c.title}</h2>
                  <p className="text-xl text-muted leading-relaxed max-w-2xl">
                    {c.desc}
                  </p>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 font-display text-xl uppercase tracking-wider group-hover:text-brand-red transition-colors">
                  Get Similar Results <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-red px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-h2">Your Project Could Be Next</h2>
          <p className="text-xl font-medium">Ready to see your revenue numbers on this page? Start your brief today.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-bg-dark px-12 py-5 font-display text-xl uppercase tracking-widest hover:bg-bg-dark hover:text-white transition-all shadow-2xl"
          >
            Start Briefing
          </Link>
        </div>
      </section>
    </div>
  );
}
