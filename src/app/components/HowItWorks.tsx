import { Camera, Brain, FileText } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SplitText } from '@/app/components/SplitText';
import { GlowCard } from '@/app/components/GlowCard';

const steps = [
  {
    icon: Camera,
    step: '01',
    title: 'Captura de Imagen Retinal',
    description: 'Captura imágenes de fondo de ojo de alta resolución usando cámaras de smartphone, cámaras de fondo de ojo o dispositivos de imagen integrados. Nuestra PWA soporta múltiples formatos y estándares de calidad de imagen.',
    gradient: 'from-cyan-500 to-cyan-600',
    glowColor: 'rgba(0, 204, 255, 0.12)'
  },
  {
    icon: Brain,
    step: '02',
    title: 'Análisis por Aprendizaje Profundo',
    description: 'Nuestra red neuronal convolucional entrenada con más de 1.2M de imágenes retinales validadas analiza microaneurismas, hemorragias, exudados duros y manchas algodonosas para graduar la severidad de la retinopatía diabética.',
    gradient: 'from-blue-600 to-blue-700',
    glowColor: 'rgba(37, 99, 235, 0.12)'
  },
  {
    icon: FileText,
    step: '03',
    title: 'Generación de Reporte Clínico',
    description: 'Recibe reportes diagnósticos completos con gradación de severidad ETDRS, hallazgos anotados, recomendaciones de referencia e historial de paciente rastreable—todo conforme a HIPAA y listo para auditoría.',
    gradient: 'from-orange-500 to-orange-600',
    glowColor: 'rgba(249, 115, 22, 0.12)'
  }
];

export function HowItWorks() {
  const card0 = useScrollReveal('fade-up', { delay: 100 });
  const card1 = useScrollReveal('fade-up', { delay: 300 });
  const card2 = useScrollReveal('fade-up', { delay: 500 });
  const cardReveals = [card0, card1, card2];
  const trust = useScrollReveal('zoom-in', { delay: 200 });

  return (
    <section id="como-funciona" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-700">FLUJO CLÍNICO</span>
          </div>
          <SplitText as="h2" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Proceso Diagnóstico Optimizado
          </SplitText>
          <SplitText as="p" className="text-xl text-slate-600" baseDelay={200} stagger={50}>
            Desde la captura de imagen hasta el apoyo en decisiones clínicas en menos de 2 minutos. Integra screening impulsado por IA sin interrupciones en tu flujo de trabajo existente.
          </SplitText>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const reveal = cardReveals[index];
            return (
              <div key={index} ref={reveal.ref} style={reveal.style} className="relative group">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-slate-200 to-slate-100 z-0"></div>
                )}

                <GlowCard glowColor={step.glowColor} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                    <span className="text-sm font-bold text-slate-700">{step.step}</span>
                  </div>

                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </GlowCard>
              </div>
            );
          })}
        </div>

        {/* Trust indicator */}
        <div ref={trust.ref} style={trust.style} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-900">
              Dispositivo Médico FDA Clase II • 94.7% Sensibilidad • 97.3% Especificidad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}