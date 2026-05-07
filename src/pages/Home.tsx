import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target, Code, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home({ onOpenBrief }: { onOpenBrief: () => void }) {
  const stats = [
    { label: 'Revenue Generated', value: '$47M+' },
    { label: 'Growth Achieved', value: '5400%' },
    { label: 'Affiliates Recruited', value: '10,000+' },
    { label: 'Active Clients', value: '500+' },
  ];

  const services = [
    { id: '01', name: 'Affiliate Marketing', path: '/affiliate', desc: 'Build an army of high-performing partners.', icon: Users },
    { id: '02', name: 'SEO Strategy', path: '/seo', desc: 'Own the search results that matter for B2B.', icon: TrendingUp },
    { id: '03', name: 'Content Engine', path: '/content', desc: 'Strategic assets that convert readers to leads.', icon: Target },
    { id: '04', name: 'IT & Dev Ops', path: '/it-dev', desc: 'Enterprise-grade WordPress & tech infra.', icon: Code },
  ];

  const caseStudies = [
    { sector: 'SaaS', growth: '412%', title: 'Enterprise CRM Growth' },
    { sector: 'FinTech', growth: '280%', title: 'Consumer Banking Scaling' },
    { sector: 'Logistics', growth: '150%', title: 'Supply Chain Revenue Op' },
  ];

  const testimonials = [
    { name: 'Adam Jensen', role: 'CMO, TechFlow', quote: "MonsterClaw didn't just give us a strategy. They gave us a massive new revenue stream in 90 days." },
    { name: 'Sarah Miller', role: 'Founder, SaaSGenius', quote: "The most direct agency we've ever worked with. They care about our P&L as much as we do." },
  ];

  const steps = [
    { num: '01', title: 'Brief Your Project', desc: 'Tell us your goals, budget, and pain points via our high-speed briefing form.' },
    { num: '02', title: 'Strategy Call', desc: 'A 30-minute deep dive where we map out your revenue machine architecture.' },
    { num: '03', title: 'Execution & Growth', desc: 'We integrate with your team and start the merciliess process of scaling.' },
  ];

  return (
    <div>
      <SEO 
        title="B2B Revenue Growth Agency" 
        description="MonsterClaw LLC is an award-winning B2B digital marketing agency specializing in Affiliate, SEO, Content, and IT revenue machines. Scale your business with data-backed execution."
        keywords="B2B digital marketing agency, growth marketing, revenue generation, SEO expert services, affiliate recruitment"
      />
      {/* 1. Hero Section */}
      <section className="min-h-screen pt-40 pb-20 px-6 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-h1 mb-8"
          >
            We Don't Run Campaigns.<br />
            <span className="text-brand-red">We Build Revenue Machines.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted max-w-2xl mb-12"
          >
            Award-winning B2B digital marketing. <br className="hidden md:block" />
            Affiliate, SEO, Content, and IT execution for scale.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 max-w-lg"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-surface border border-white/10 p-5 outline-none focus:border-brand-red transition-all"
            />
            <button
              onClick={onOpenBrief}
              className="bg-brand-red text-white px-8 py-5 font-display text-xl uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Start Briefing <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Scrolling Ticker */}
      <section className="bg-surface py-12 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-20 px-10 items-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="text-4xl md:text-5xl font-display text-brand-red">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Why Choose Us (The Monster Advantage) */}
      <section className="section-padding px-6 bg-bg-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-6 block">The Monster Advantage</span>
              <h2 className="text-h2 mb-8 lowercase leading-[0.8]">
                BEYOND THE <br />
                <span className="text-white">CONVENTIONAL</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed mb-12">
                While other agencies charge for "hours worked," we charge for "revenue built." 
                Our team doesn't just manage budgets; we architect your entire growth funnel 
                from technical foundation to high-conversion content.
              </p>
              <ul className="space-y-6">
                {[
                  { t: 'Performance Only Focus', d: 'Zero-cost strategy till we hit your primary KPIs.' },
                  { t: 'Deep Tech Integration', d: 'We build the tools and infra needed to scale, no third-party reliance.' },
                  { t: 'Strategic Authority', d: 'Google Premier Partners and Clutch #1 B2B Agency rating.' }
                ].map(item => (
                  <li key={item.t} className="flex gap-4">
                    <div className="w-6 h-6 bg-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-display uppercase">{item.t}</h4>
                      <p className="text-muted text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-surface border border-white/10 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-display text-brand-red">#01</span>
                  <p className="text-sm uppercase tracking-widest font-bold mt-2">B2B Agency</p>
                </div>
                <div className="aspect-[3/4] bg-brand-red p-8 flex flex-col justify-end text-white">
                  <span className="text-5xl font-display">98%</span>
                  <p className="text-sm uppercase tracking-widest font-bold mt-2">Retention</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] bg-surface border border-white/10 p-8 flex flex-col justify-end">
                  <span className="text-5xl font-display">12M+</span>
                  <p className="text-sm uppercase tracking-widest font-bold mt-2">Clicks</p>
                </div>
                <div className="aspect-square bg-surface border border-white/10 p-8 flex flex-col justify-end">
                   <Users className="text-brand-red mb-4" size={40} />
                   <p className="text-sm uppercase tracking-widest font-bold">500+ Teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Industries We Dominate */}
      <section className="section-padding px-6 bg-white text-bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-h2 text-bg-dark">Vertical <br/>Specialization</h2>
            <p className="text-xl max-w-md font-medium">We don't serve everyone. We serve those who are ready to dominate these specific sectors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-bg-dark/10">
            {[
              { t: 'Enterprise SaaS', d: 'Scaling PLG and SLG motions for high-ACV software companies.' },
              { t: 'FinTech & Banks', d: 'Compliance-ready affiliate and SEO strategies for high-trust sectors.' },
              { t: 'Global Logistics', d: 'Revenue infrastructure for trade, supply chain, and e-commerce giants.' }
            ].map((ind, idx) => (
              <div key={idx} className="p-12 border-r border-bg-dark/10 last:border-0 hover:bg-bg-dark hover:text-white transition-all cursor-default group">
                <div className="text-xs uppercase tracking-[0.2em] font-bold mb-12 opacity-50">Sector 0{idx+1}</div>
                <h3 className="text-4xl font-display mb-6">{ind.t}</h3>
                <p className="opacity-70 group-hover:opacity-100 transition-opacity">{ind.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-h2 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-brand-red" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-surface p-8 border border-white/5 hover:border-brand-red transition-all group"
              >
                <div className="text-sm font-display text-muted mb-8 tracking-tighter group-hover:text-brand-red transition-colors flex justify-between items-center">
                  <span>{service.id}</span>
                  <service.icon size={20} />
                </div>
                <h3 className="text-h3 mb-4">{service.name}</h3>
                <p className="text-muted mb-8">{service.desc}</p>
                <Link to={service.path} className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold group-hover:text-brand-red">
                  Explore <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Comparison Section - The Anti-Agency Block */}
      <section className="section-padding bg-bg-dark px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10 shadow-2xl">
            <div className="p-12 md:p-20 bg-bg-dark relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />
              <h3 className="text-h3 mb-12 text-muted">Traditional Agencies</h3>
              <ul className="space-y-8 opacity-40">
                <li className="flex items-center gap-4 text-lg">
                  <X className="text-white" size={20} />
                  Monthly retainer with no accountability
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <X className="text-white" size={20} />
                  Generic stock photo content
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <X className="text-white" size={20} />
                  Vanity metrics over revenue growth
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <X className="text-white" size={20} />
                  Slow, bureaucratic communication
                </li>
              </ul>
            </div>
            <div className="p-12 md:p-20 bg-surface relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-red/[0.02] pointer-events-none" />
              <h3 className="text-h3 mb-12 text-brand-red">The MonsterClaw Way</h3>
              <ul className="space-y-8">
                <li className="flex items-center gap-4 text-lg font-medium">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  Results-oriented, performance models
                </li>
                <li className="flex items-center gap-4 text-lg font-medium">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  Strategic authority and proprietary assets
                </li>
                <li className="flex items-center gap-4 text-lg font-medium">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  Direct line to execution specialists
                </li>
                <li className="flex items-center gap-4 text-lg font-medium">
                  <CheckCircle2 className="text-brand-red" size={20} />
                  Monthly P&L reviews and growth auditing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agitation Block */}
      <section className="section-padding bg-surface px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-display text-white/[0.02] pointer-events-none select-none">
            REVENUE
          </div>
          <h2 className="text-h2 tracking-tighter">
            Tired of fancy reports with no money in the bank?
          </h2>
          <p className="text-xl md:text-2xl text-muted leading-relaxed">
            Most agencies sell you vanity metrics and glossy PDFs. We sell merciliess execution. 
            We integrate with your team to drive results that actually impact the bottom line. 
            No fluff. Just growth.
          </p>
          <div className="pt-8">
            <button
               onClick={onOpenBrief}
               className="border border-white/20 px-10 py-4 uppercase font-display tracking-widest hover:bg-brand-red hover:border-brand-red transition-all"
            >
              Stop Wasting Budget
            </button>
          </div>
        </div>
      </section>

      {/* 5. Results Cards */}
      <section className="section-padding px-6 bg-bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.title} className="space-y-6">
                <span className="text-sm uppercase tracking-widest text-brand-red font-bold font-sans">
                  {caseStudy.sector} Excellence
                </span>
                <div className="text-[6rem] md:text-[8rem] font-display leading-none text-white">
                  {caseStudy.growth}
                </div>
                <h3 className="text-3xl font-display">{caseStudy.title}</h3>
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted hover:text-white transition-colors">
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <section className="section-padding px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 mb-20 text-center">Engine of Growth</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.num} className="space-y-6">
                <div className="text-4xl font-display text-brand-red">{step.num}</div>
                <h3 className="text-3xl font-display">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Logos */}
      <section className="py-24 px-6 border-y border-white/5 grayscale opacity-30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12 text-muted">
           <span className="text-2xl font-display">LogoOne</span>
           <span className="text-2xl font-display">BrandTwo</span>
           <span className="text-2xl font-display">SaaSThree</span>
           <span className="text-2xl font-display">FinCorp</span>
           <span className="text-2xl font-display">TechVentures</span>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((t) => (
              <div key={t.name} className="p-12 bg-surface border-l-4 border-brand-red space-y-6">
                <p className="text-2xl font-medium leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <h4 className="text-xl font-display">{t.name}</h4>
                  <p className="text-brand-red text-sm uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-40 px-6 bg-brand-red text-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-h2 md:text-8xl">Ready to Grow?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={onOpenBrief}
              className="bg-white text-brand-red px-12 py-6 text-2xl font-display uppercase tracking-widest hover:bg-bg-dark hover:text-white transition-all shadow-xl"
            >
              Brief Your Project
            </button>
            <a
              href="#"
              className="bg-bg-dark text-white px-12 py-6 text-2xl font-display uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-xl"
            >
              Book Strategy Call
            </a>
          </div>
          <p className="text-white/80 font-medium">No sales pitch. Just strategy.</p>
        </div>
      </section>
    </div>
  );
}
