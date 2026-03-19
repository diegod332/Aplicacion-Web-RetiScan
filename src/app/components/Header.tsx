import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/logo_sin_fondo.png';

const navLinks = [
  { id: 'producto', label: 'Producto' },
  { id: 'como-funciona', label: 'Cómo Funciona' },
  { id: 'suscripcion', label: 'Suscripción' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'contacto', label: 'Contacto' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic using getBoundingClientRect
      let currentSection = '';
      let minDistance = Infinity;

      // Distance threshold from top of viewport (e.g. 150px)
      const threshold = 150;

      for (const { id } of navLinks) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Determine if section is currently active
          // A section is active if its top is above the threshold AND its bottom is below the threshold
          if (rect.top <= threshold && rect.bottom > threshold) {
            currentSection = id;
            break;
          }

          // Fallback: If no section strictly encompasses the threshold, find the closest one below it
          const distance = Math.abs(rect.top - threshold);
          if (distance < minDistance) {
            minDistance = distance;
            // Only consider it if it's relatively close (e.g. within viewport)
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              currentSection = id;
            }
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < window.innerHeight / 2) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/98 backdrop-blur-md shadow-lg shadow-slate-900/5 py-2'
        : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
          />
          <span className={`font-semibold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
            RetiScan
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors relative py-1 group ${activeSection === link.id ? 'text-slate-800 font-medium' : 'text-slate-600 hover:text-slate-800'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-blue-600 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-lg font-medium ${activeSection === link.id ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-slate-100 my-4" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}