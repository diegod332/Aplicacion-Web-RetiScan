
import logo from '../../assets/logo_sin_fondo.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} className="h-10 w-auto object-contain"/>
          <span className="text-2xl font-semibold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            RetiScan
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#producto" className="text-slate-700 hover:text-blue-700 transition-colors">
            Producto
          </a>
          <a href="#como-funciona" className="text-slate-700 hover:text-blue-700 transition-colors">
            Cómo Funciona
          </a>
          <a href="#suscripcion" className="text-slate-700 hover:text-blue-700 transition-colors">
            Suscripción
          </a>
          <a href="#seguridad" className="text-slate-700 hover:text-blue-700 transition-colors">
            Seguridad
          </a>
          <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-medium shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
            Solicitar Demo
          </button>
        </nav>
      </div>
    </header>
  );
}