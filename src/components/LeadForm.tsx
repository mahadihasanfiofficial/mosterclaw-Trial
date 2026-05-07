import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [] as string[],
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = ['Affiliate Marketing', 'SEO Services', 'Content Services', 'IT / WordPress Dev'];
  const budgets = ['$1,000 - $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+'];

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-surface border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Progress Bar */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 transition-all duration-500 ${
                        step >= i ? 'bg-brand-red' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-h3">Step 1: The Basics</h3>
                      <div className="space-y-4">
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-red transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                          required
                          type="email"
                          placeholder="Work Email"
                          className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-red transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <input
                          required
                          type="text"
                          placeholder="Company Name"
                          className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-red transition-colors"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.name || !formData.email || !formData.company}
                        className="w-full bg-brand-red text-white py-4 font-display text-xl uppercase tracking-wider hover:brightness-110 disabled:grayscale transition-all"
                      >
                        Next Step
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-h3">Step 2: Service Interest</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`p-4 text-left border transition-all ${
                              formData.services.includes(s)
                                ? 'bg-brand-red/20 border-brand-red text-white'
                                : 'bg-white/5 border-white/10 text-muted hover:border-white/30'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex-1 bg-white/5 text-white py-4 font-display text-xl uppercase tracking-wider hover:bg-white/10 transition-all"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={formData.services.length === 0}
                          className="flex-1 bg-brand-red text-white py-4 font-display text-xl uppercase tracking-wider hover:brightness-110 disabled:grayscale transition-all"
                        >
                          Next Step
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-h3">Step 3: Budget & Goals</h3>
                      <div className="space-y-4">
                        <select
                          required
                          className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-red transition-colors appearance-none"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="" disabled className="bg-surface">Monthly Budget Range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b} className="bg-surface">
                              {b}
                            </option>
                          ))}
                        </select>
                        <textarea
                          placeholder="Briefly describe your project goals..."
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-brand-red transition-colors"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex-1 bg-white/5 text-white py-4 font-display text-xl uppercase tracking-wider hover:bg-white/10 transition-all"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !formData.budget}
                          className="flex-1 bg-brand-red text-white py-4 font-display text-xl uppercase tracking-wider hover:brightness-110 disabled:grayscale transition-all"
                        >
                          {isSubmitting ? 'Sending...' : 'Start Briefing'}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-red/20 text-brand-red">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-h2">Brief Received</h3>
                <p className="text-muted text-lg max-w-sm mx-auto">
                  Our growth strategists will review your project and get back to you within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="bg-white text-bg-dark px-8 py-3 font-display text-lg uppercase hover:bg-brand-red hover:text-white transition-all"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
