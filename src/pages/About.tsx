import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Zap, Award } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    { title: 'Data-Backed Execution', desc: 'We don\'t guess. We use real-time market data to architect revenue paths.', icon: Target },
    { title: 'Uncompromising Quality', desc: 'From clean code to premium content, everything we build is enterprise-grade.', icon: Shield },
    { title: 'High-Velocity Growth', desc: 'We minimize friction and maximize output. Speed is our competitive advantage.', icon: Zap },
    { title: 'Award-Winning Results', desc: 'Recognized globally for defining the next era of B2B digital marketing.', icon: Award },
  ];

  return (
    <div className="pt-40">
      <SEO 
        title="About Our Agency" 
        description="MonsterClaw LLC is an award-winning B2B digital marketing agency. We build revenue machines through merciless execution and data-backed strategy."
        keywords="B2B growth agency, marketing agency history, digital marketing experts"
      />

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-h1 mb-8">The Anti-Agency <br/><span className="text-brand-red">Philosophy</span></h1>
              <p className="text-2xl text-muted leading-relaxed">
                Most agencies focus on awards and vanity metrics. MonsterClaw was born out of a frustration with mediocrity. 
                Our mission is simple: To build high-performance revenue machines for B2B companies that are ready to scale.
              </p>
            </div>
            <div className="aspect-[4/3] bg-surface border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-brand-red opacity-10">
                 <Target size={300} />
               </div>
               <div className="absolute inset-0 flex items-center justify-center p-12">
                 <p className="text-3xl font-display text-center leading-tight">
                   "We don't run campaigns. We architect the future of your revenue."
                 </p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 mb-20">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-bg-dark border border-white/5 space-y-6 hover:border-brand-red transition-all">
                <v.icon className="text-brand-red" size={32} />
                <h3 className="text-2xl font-display">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-dark px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 relative">
               <div className="text-[12rem] font-display text-white/[0.03] absolute -top-20 -left-10 select-none">EST. 2014</div>
               <h2 className="text-h2 mb-8">A Decade of <br/><span className="text-brand-red">Dominance</span></h2>
               <div className="space-y-6 text-lg text-muted leading-relaxed">
                 <p>
                   Founded in 2014, MonsterClaw started as a small group of performance engineers dedicated to breaking the traditional agency mold. 
                   We realized that B2B companies were being underserved by generalist marketing firms that didn't understand the complexity of long sales cycles.
                 </p>
                 <p>
                   Over ten years, we have evolved into a global force, specializing in the intersection of Affiliate Marketing, SEO, and Enterprise IT. 
                   Our growth hasn't been accidental; it has been engineered.
                 </p>
               </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-surface p-8 border border-white/5 space-y-4">
                 <div className="text-4xl font-display text-brand-red">500+</div>
                 <p className="text-xs uppercase tracking-widest font-bold">Success Stories</p>
               </div>
               <div className="bg-surface p-8 border border-white/5 space-y-4 pt-16">
                 <div className="text-4xl font-display text-brand-red">47M+</div>
                 <p className="text-xs uppercase tracking-widest font-bold">Revenue Generated</p>
               </div>
               <div className="bg-surface p-8 border border-white/5 space-y-4">
                 <div className="text-4xl font-display text-brand-red">10Y+</div>
                 <p className="text-xs uppercase tracking-widest font-bold">Industry Experience</p>
               </div>
               <div className="bg-brand-red p-8 space-y-4 pt-16">
                 <div className="text-4xl font-display text-white">#01</div>
                 <p className="text-xs uppercase tracking-widest font-bold text-white">B2B Rankings</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 mb-20 text-center">Meet the Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Marcus Steel', role: 'CEO & Founder', bio: 'Former head of growth for Fortune 500 tech firms.' },
              { name: 'Elena Vance', role: 'Chief Strategy Officer', bio: 'Architect of some of the world\'s largest affiliate networks.' },
              { name: 'David Chen', role: 'Head of IT & Dev', bio: 'Enterprise security specialist and full-stack architecture expert.' }
            ].map((leader, i) => (
              <div key={i} className="group cursor-default">
                 <div className="aspect-[3/4] bg-surface border border-white/10 mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8">
                       <h4 className="text-2xl font-display">{leader.name}</h4>
                       <p className="text-brand-red text-xs uppercase tracking-widest font-bold">{leader.role}</p>
                    </div>
                 </div>
                 <p className="text-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   {leader.bio}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-h2">Global Expertise</h2>
          <p className="text-xl text-muted leading-loose">
            Since our inception, we have partnered with over 500+ clients across the globe, generating over $47M in revenue. 
            From San Francisco to Singapore, our remote-first team of specialists operates around the clock to ensure 
            your growth never stops. We are a Google Premier Partner and have been named the #1 B2B Agency by Clutch.
          </p>
        </div>
      </section>
    </div>
  );
}
