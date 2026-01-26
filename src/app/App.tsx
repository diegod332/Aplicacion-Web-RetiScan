import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ProductShowcase } from '@/app/components/ProductShowcase';
import { HowItWorks } from '@/app/components/HowItWorks';
import { PWABenefits } from '@/app/components/PWABenefits';
import { TrustSection } from '@/app/components/TrustSection';
import { PricingSpanish } from '@/app/components/PricingSpanish';
import { SecuritySection } from '@/app/components/SecuritySection';
import { CTA } from '@/app/components/CTA';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <PWABenefits />
      <TrustSection />
      <PricingSpanish />
      <SecuritySection />
      <CTA />
      <Footer />
    </div>
  );
}