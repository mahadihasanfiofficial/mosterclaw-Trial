import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBrief: () => void;
}

export default function Navbar({ onOpenBrief }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Affiliate', path: '/affiliate' },
    { name: 'SEO', path: '/seo' },
    { name: 'Content', path: '/content' },
    { name: 'IT/Dev', path: '/it-dev' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-bg-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display tracking-tight hover:text-brand-red transition-colors flex items-center gap-2">
          <span className="text-brand-red">MONSTER</span>CLAW
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                location.pathname === link.path ? 'text-brand-red' : 'text-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={onOpenBrief}
            className="bg-brand-red text-white px-6 py-2 text-sm font-display uppercase tracking-wider hover:brightness-110 transition-all ml-4"
          >
            Brief Project
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-bg-dark z-30 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-4xl font-display hover:text-brand-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBrief();
              }}
              className="mt-4 bg-brand-red text-white py-4 text-2xl font-display uppercase tracking-wider"
            >
              Brief Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { AnimatePresence } from 'motion/react';
