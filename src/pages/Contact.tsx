import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-40 pb-24">
      <SEO 
        title="Contact Our Growth Strategists" 
        description="Book a 30-minute strategy call or brief us on your B2B marketing project. Direct access to MonsterClaw LLC growth experts."
      />
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 mb-12"
          >
            Start Your <br />
            <span className="text-brand-red">Revenue Brief</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <p className="text-2xl text-muted leading-relaxed">
                We only work with a handful of high-growth B2B companies at a time. 
                Brief us on your project to see if you're a fit for our execution model.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center text-brand-red border border-white/5">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-1">Email</h3>
                    <p className="text-muted">growth@monsterclaw.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center text-brand-red border border-white/5">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-1">Response Time</h3>
                    <p className="text-muted">Under 24 hours guaranteed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface p-12 border border-white/5">
              <h2 className="text-h3 mb-8">Direct Booking</h2>
              <p className="text-muted mb-8">Skip the form and jump straight into a 30-minute strategy call with our founders.</p>
              <div className="aspect-square bg-bg-dark border border-white/10 flex items-center justify-center text-muted">
                Calendly Embed Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
