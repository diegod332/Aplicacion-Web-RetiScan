import React, { Suspense, useEffect } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { AnimatedDivider } from '@/app/components/AnimatedDivider';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { useLenis } from '@/hooks/useLenis';

// Lazy loaded components (Below the fold)
const ProductShowcase = React.lazy(() => import('@/app/components/ProductShowcase').then(module => ({ default: module.ProductShowcase })));
const HowItWorks = React.lazy(() => import('@/app/components/HowItWorks').then(module => ({ default: module.HowItWorks })));
const PWABenefits = React.lazy(() => import('@/app/components/PWABenefits').then(module => ({ default: module.PWABenefits })));
const TrustSection = React.lazy(() => import('@/app/components/TrustSection').then(module => ({ default: module.TrustSection })));
const Pricing = React.lazy(() => import('@/app/components/Pricing').then(module => ({ default: module.Pricing })));
const SecuritySection = React.lazy(() => import('@/app/components/SecuritySection').then(module => ({ default: module.SecuritySection })));
const ContactForm = React.lazy(() => import('@/app/components/ContactForm').then(module => ({ default: module.ContactForm })));
const Footer = React.lazy(() => import('@/app/components/Footer').then(module => ({ default: module.Footer })));

// Fallback loader for chunks
const SectionLoader = () => (
  <div className="w-full flex items-center justify-center py-20 bg-slate-50/50">
    <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-cyan-500 animate-spin"></div>
  </div>
);

export default function App() {
  useLenis();

  // Force scroll to top on page refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ScrollToTop />
      <LoadingScreen />
      <Header />
      <Hero />
      <AnimatedDivider color="cyan" />

      <Suspense fallback={<SectionLoader />}>
        <ProductShowcase />
        <AnimatedDivider color="blue" />
        <HowItWorks />
        <PWABenefits />
        <AnimatedDivider color="white" />
        <TrustSection />
        <AnimatedDivider color="blue" />
        <Pricing />
        <SecuritySection />
        <AnimatedDivider color="cyan" />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
}