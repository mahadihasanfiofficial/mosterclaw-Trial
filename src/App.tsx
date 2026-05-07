import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import LeadForm from './components/LeadForm';
import ServicePage from './components/ServicePage';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  const handleOpenBrief = () => setIsBriefOpen(true);

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar onOpenBrief={handleOpenBrief} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenBrief={handleOpenBrief} />} />
            <Route path="/affiliate" element={
              <ServicePage 
                onOpenBrief={handleOpenBrief}
                title="Affiliate Marketing"
                heroText="Recruit, manage, and scale an elite army of high-performing partners that drive revenue without overhead. Our platform integrations ensure zero-friction recruitment and global scale."
                proof="10,000+ Affiliates Recruited"
                deliverables={[
                  { title: 'Partner Strategy', desc: 'Custom commission structures and recruitment blueprints optimized for B2B influencers.' },
                  { title: 'Platform Setup', desc: 'Secure tracking and management infra with WordPress and CRM integration.' },
                  { title: 'Relationship Ops', desc: 'Daily management and optimization of affiliate performance across 12+ regions.' },
                  { title: 'Fraud Prevention', desc: 'Advanced monitoring to protect your revenue and brand from malicious traffic.' },
                  { title: 'Geo-Targeted Recruitment', desc: 'On-the-ground partner scouting in key markets: US, EMEA, and APAC.' },
                  { title: 'Creator Network', desc: 'Direct access to verified B2B content creators with high domain authority.' }
                ]}
                faqs={[
                  { q: "How do you vet affiliates?", a: "Every partner undergoes a strict 5-point verification process including domain authority checks, audience authenticity, and past performance audits." },
                  { q: "Is the tracking real-time?", a: "Yes, our custom infrastructure provides sub-second tracking and pixel-perfect attribution across all devices." }
                ]}
              />
            } />
            <Route path="/seo" element={
              <ServicePage 
                onOpenBrief={handleOpenBrief}
                title="SEO Strategy"
                heroText="Stop chasing vanity keywords. Own the search terms that drive high-intent B2B traffic and organic revenue. Our SEO machine is built for enterprise scale, focusing on AI-readiness and local superiority."
                proof="5400% Peak Growth"
                deliverables={[
                  { title: 'Technical SEO Audit', desc: 'Deep-dive into site health, core web vitals, speed, and indexing efficiency.' },
                  { title: 'Keyword Domination', desc: 'Targeting commercial intent keywords your competitors missed in AI and search.' },
                  { title: 'Link Authority', desc: 'Earning high-quality backlinks from relevant authority B2B domains.' },
                  { title: 'Content Clustering', desc: 'Building topical authority through strategic internal linking and pillar pages.' },
                  { title: 'Local SEO Mastery', desc: 'Optimizing geographic presence for multi-location B2B enterprises.' },
                  { title: 'Voice & AI Search', desc: 'Future-proofing your visibility for Gemini, ChatGPT, and Voice assistants.' }
                ]}
                faqs={[
                  { q: "How do you handle AI search ranking?", a: "We optimize for Large Language Model (LLM) visibility by structuring data for entities and verified facts that AI agents prioritize." },
                  { q: "What is your typical SEO turnaround?", a: "We start seeing indexing shifts within 3 weeks, with major rank movements usually occurring by month 3." }
                ]}
              />
            } />
            <Route path="/content" element={
              <ServicePage 
                onOpenBrief={handleOpenBrief}
                title="Content Engine"
                heroText="Strategic content assets designed to educate your audience and convert them into high-value leads. We build 'Searchable Authority' that ranks and scales."
                proof="1500+ Campaigns Launched"
                deliverables={[
                  { title: 'Content Mapping', desc: 'Aligning assets with every stage of the B2B buyer journey including AI discovery paths.' },
                  { title: 'Authority Pieces', desc: 'Whitepapers, case studies, and long-form guides that build immense trust and links.' },
                  { title: 'SEO Optimized Blog', desc: 'Consistent top-of-funnel traffic drivers that rank for high-volume B2B intent.' },
                  { title: 'Sales Enablement', desc: 'Assets your sales team actually wants to use in their closing process to build urgency.' },
                  { title: 'Multi-Format Engine', desc: 'Transforming lone assets into video, social, and podcast ready content.' },
                  { title: 'E-E-A-T Optimization', desc: 'Ensuring all authors and content meet the highest standards of Expertise and Trust.' }
                ]}
                faqs={[
                  { q: "Do you write for technical audiences?", a: "Our team includes subject matter experts who specialize in deep-tech, fintech, and enterprise SaaS content writing." },
                  { q: "How do you measure content ROI?", a: "We track full-funnel attribution, from first-touch discovery to final-close attributed revenue." }
                ]}
              />
            } />
            <Route path="/it-dev" element={
              <ServicePage 
                onOpenBrief={handleOpenBrief}
                title="IT & Dev Ops"
                heroText="Enterprise-grade WordPress development and infrastructure that powers seamless growth. We build fast, secure, and infinitely scalable B2B platforms."
                proof="99.9% Tech Reliability"
                deliverables={[
                  { title: 'Custom WP Dev', desc: 'Lightweight, fast, and secure WordPress themes and custom block plugins.' },
                  { title: 'Growth Infra', desc: 'Scalable hosting and server configurations optimized for high-traffic campaigns.' },
                  { title: 'Lead Gen Flow', desc: 'Building custom multi-step forms, Calendly syncs, and CRM integrations.' },
                  { title: 'Security Hardening', desc: '24/7 protection of your digital assets from external threats and downtime.' },
                  { title: 'API Integrations', desc: 'Connecting your front-facing stack with internal ERPs and marketing tools.' },
                  { title: 'Speed Optimization', desc: 'Achieving perfect Lighthouse scores for better ranking and user retention.' }
                ]}
              />
            } />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <LeadForm isOpen={isBriefOpen} onClose={() => setIsBriefOpen(false)} />
      </div>
    </Router>
    </HelmetProvider>
  );
}
