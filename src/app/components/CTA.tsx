import { Calendar, ArrowRight, PhoneCall } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SplitText } from '@/app/components/SplitText';
import { MagneticButton } from '@/app/components/MagneticButton';

export function CTA() {
  const paragraph = useScrollReveal('fade-up', { delay: 200 });
  const buttons = useScrollReveal('fade-up', { delay: 400 });
  const info = useScrollReveal('fade', { delay: 600 });

  return (
    <section className="relative py-24 overflow-hidden noise-overlay">
      {/* Gradient background */}
      <div className="absolute inset-0 animated-gradient" style={{
        background: 'linear-gradient(110deg, #001a4d 0%, #0044cc 25%, #00ccff 50%, #0044cc 75%, #001a4d 100%)',
        backgroundSize: '300% 300%',
      }}></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <SplitText as="h2" className="text-4xl lg:text-5xl font-bold text-white mb-6" baseDelay={200}>
          ¿Listo para Transformar Tu Práctica?
        </SplitText>
        <p ref={paragraph.ref} style={paragraph.style} className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Únete a los oftalmólogos y directores clínicos líderes que confían en RetiScan
          para screening de retinopatía diabética preciso y eficiente. Agenda tu
          demostración personalizada hoy.
        </p>

        <div ref={buttons.ref} style={buttons.style} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MagneticButton className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold text-lg shadow-2xl shadow-orange-900/50 hover:shadow-orange-900/70 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            Agendar una Demo
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 rounded-xl font-bold text-lg hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center gap-3">
            <PhoneCall className="w-6 h-6" />
            Hablar con Ventas
          </MagneticButton>
        </div>

        <div ref={info.ref} style={info.style} className="mt-10 flex items-center justify-center gap-8 text-sm text-white">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Prueba Gratuita 14 Días</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Sin Tarjeta de Crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Configuración en 24 Horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}