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
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { AnimatedDivider } from '@/app/components/AnimatedDivider';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { useLenis } from '@/hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <LoadingScreen />
      <Header />
      <Hero />
      <AnimatedDivider color="cyan" />
      <ProductShowcase />
      <AnimatedDivider color="blue" />
      <HowItWorks />
      <PWABenefits />
      <AnimatedDivider color="white" />
      <TrustSection />
      <AnimatedDivider color="blue" />
      <PricingSpanish />
      <SecuritySection />
      <AnimatedDivider color="cyan" />
      <CTA />
      <Footer />
    </div>
  );
}