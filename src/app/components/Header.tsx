
import { useState, useEffect } from 'react';
import logo from '../../assets/logo_sin_fondo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

        <nav className="hidden md:flex items-center gap-8">
          <a href="#producto" className="text-slate-700 hover:text-blue-700 transition-colors relative group">
            Producto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#como-funciona" className="text-slate-700 hover:text-blue-700 transition-colors relative group">
            Cómo Funciona
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#suscripcion" className="text-slate-700 hover:text-blue-700 transition-colors relative group">
            Suscripción
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#seguridad" className="text-slate-700 hover:text-blue-700 transition-colors relative group">
            Seguridad
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-medium shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
            Solicitar Demo
          </button>
        </nav>
      </div>
    </header>
  );
}