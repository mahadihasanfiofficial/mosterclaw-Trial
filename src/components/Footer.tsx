import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: 'Services', items: ['Affiliate Marketing', 'SEO Audit', 'Content Strategy', 'WordPress Dev'] },
    { name: 'Agency', items: ['Case Studies', 'About Us', 'Contact', 'Press'] },
  ];

  return (
    <footer className="bg-surface border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="text-3xl font-display tracking-tight">
              <span className="text-brand-red">MONSTER</span>CLAW
            </Link>
            <p className="text-muted max-w-sm text-lg">
              Award-winning B2B digital marketing. We don't run campaigns. We build revenue machines.
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-red font-bold">Global Presence</p>
              <p className="text-muted text-sm">San Francisco · London · Singapore · Dubai</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-brand-red hover:text-brand-red transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-brand-red hover:text-brand-red transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 hover:border-brand-red hover:text-brand-red transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {links.map((group) => (
            <div key={group.name} className="space-y-6">
              <h4 className="text-sm uppercase tracking-widest text-brand-red font-bold">{group.name}</h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link to="/contact" className="text-muted hover:text-white flex items-center gap-1 group transition-colors">
                      {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-muted text-sm">
          <p>© {new Date().getFullYear()} MonsterClaw LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
