import { Check, X, Zap, Building, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SplitText } from '@/app/components/SplitText';

const plans = [
  {
    name: 'Especialista',
    billing: 'Mensual',
    icon: Zap,
    description: 'Para consultorios individuales y prácticas independientes pequeñas',
    monthlyPrice: 299,
    annualPrice: 239,
    popular: false,
    gradient: 'from-slate-600 to-slate-700',
    features: [
      { name: 'Escaneos de IA ilimitados', included: true },
      { name: 'Almacenamiento seguro de expedientes (PHI)', included: true },
      { name: 'Reportes automáticos en PDF', included: true },
      { name: 'Cifrado de datos conforme a HIPAA', included: true },
      { name: 'Soporte por email (48 horas)', included: true },
      { name: 'Cuenta de un solo especialista', included: true },
      { name: 'Cuentas para múltiples especialistas', included: false },
      { name: 'Prioridad en procesamiento de IA', included: false },
      { name: 'Panel de analítica avanzada', included: false },
      { name: 'Acceso API para integración EHR', included: false }
    ]
  },
  {
    name: 'Clínica',
    billing: 'Anual',
    icon: Building,
    description: 'Para centros médicos que requieren acceso multiusuario y funciones avanzadas',
    monthlyPrice: 899,
    annualPrice: 719,
    popular: true,
    gradient: 'from-cyan-500 to-blue-600',
    features: [
      { name: 'Escaneos de IA ilimitados', included: true },
      { name: 'Almacenamiento seguro de expedientes (ilimitado)', included: true },
      { name: 'Reportes automáticos en PDF personalizables', included: true },
      { name: 'Cifrado de datos conforme a HIPAA', included: true },
      { name: 'Soporte técnico prioritario (24 horas)', included: true },
      { name: 'Hasta 10 cuentas de especialistas', included: true },
      { name: 'Prioridad en procesamiento de IA', included: true },
      { name: 'Panel de analítica avanzada', included: true },
      { name: 'Acceso API para integración EHR', included: true },
      { name: 'Gestor de cuenta dedicado', included: true }
    ]
  }
];

export function PricingSpanish() {
  const [isAnnual, setIsAnnual] = useState(false);
  const savingsPercentage = 20;

  const title = useScrollReveal('fade-up');
  const toggle = useScrollReveal('fade-up', { delay: 200 });
  const cardLeft = useScrollReveal('fade-right', { delay: 300 });
  const cardRight = useScrollReveal('fade-left', { delay: 500 });
  const bottomInfo = useScrollReveal('fade-up', { delay: 300 });

  return (
    <section
      id="suscripcion"
      className="relative py-24 text-white overflow-hidden noise-overlay animated-gradient"
      style={{
        background: 'linear-gradient(110deg, #001a4d 0%, #0044cc 25%, #00ccff 50%, #0044cc 75%, #001a4d 100%)',
        backgroundSize: '300% 300%',
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={title.ref} style={title.style} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-cyan-300">MODELO DE NEGOCIO</span>
          </div>
          <SplitText as="h2" className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Planes de Suscripción Transparentes
          </SplitText>
          <p className="text-xl text-white">
            Modelos de suscripción flexibles diseñados para prácticas de todos los tamaños.
            Escala según creces con capacidades diagnósticas de nivel empresarial.
          </p>
        </div>

        {/* Billing Toggle */}
        <div ref={toggle.ref} style={toggle.style} className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-white/70'}`}>
            Mensual
          </span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-20 h-10 rounded-full transition-all duration-300 hover:shadow-lg"
            style={{
              background: isAnnual
                ? 'linear-gradient(to right, rgb(6 182 212), rgb(37 99 235))'
                : 'linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.4))'
            }}
          >
            <div
              className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg transition-transform duration-300"
              style={{
                transform: isAnnual ? 'translateX(40px)' : 'translateX(0)'
              }}
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-white' : 'text-white/70'}`}>
              Anual
            </span>
            <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
              <span className="text-sm font-bold text-white">-{savingsPercentage}%</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards — these stay white for contrast */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual ? (plan.monthlyPrice - plan.annualPrice) : 0;

            return (
              <div
                key={index}
                ref={index === 0 ? cardLeft.ref : cardRight.ref}
                style={index === 0 ? cardLeft.style : cardRight.style}
                className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="text-sm font-bold text-white">Mejor Valor</span>
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-white rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 ${plan.popular
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 hover:shadow-[0_30px_60px_-15px_rgba(0,204,255,0.3)]'
                    : 'border-white/50 shadow-lg hover:shadow-2xl'
                    }`}
                >
                  {/* Glow effect for popular plan */}
                  {plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>
                  )}

                  <div className="p-8">
                    {/* Billing Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full mb-4">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Facturación {plan.billing}</span>
                      {plan.popular && isAnnual && (
                        <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                          -{savingsPercentage}%
                        </span>
                      )}
                    </div>

                    {/* Icon and Name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6 min-h-[3rem]">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-end gap-2 mb-2">
                        <span className="text-5xl font-bold text-slate-900">${price}</span>
                        <span className="text-xl text-slate-600 mb-2">/mes</span>
                      </div>
                      {isAnnual && savings > 0 && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500 line-through">${plan.monthlyPrice}/mes</span>
                            <span className="text-sm font-semibold text-green-600">
                              Ahorras ${savings * 12}/año
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">
                            Facturado ${price * 12} anualmente • {savingsPercentage}% de descuento
                          </p>
                        </div>
                      )}
                      {!isAnnual && (
                        <p className="text-sm text-slate-500">
                          Facturado mensualmente • Sin compromiso a largo plazo
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 hover:-translate-y-0.5 active:translate-y-0 ${plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40'
                        : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg'
                        }`}
                    >
                      Iniciar Prueba Gratuita
                    </button>

                    {/* Features */}
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                        Qué Incluye:
                      </div>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center">
                              <X className="w-3 h-3 text-slate-400" strokeWidth={2} />
                            </div>
                          )}
                          <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom info */}
        <div ref={bottomInfo.ref} style={bottomInfo.style} className="mt-16 text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-300" />
              <span>Prueba gratuita de 14 días en todos los planes</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-300" />
              <span>Cancela en cualquier momento, sin preguntas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-300" />
              <span>Onboarding personalizado incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-cyan-300" />
              <span>Cumplimiento HIPAA garantizado</span>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-white mb-4">
              ¿Necesitas una solución empresarial personalizada con infraestructura dedicada?
            </p>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/50 rounded-xl font-semibold hover:-translate-y-1 active:translate-y-0 transition-all duration-300">
              Contactar Ventas Empresariales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
