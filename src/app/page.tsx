'use client';
import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import StatsSection from '@/components/StatsSection';
import HowToPlaySection from '@/components/HowToPlaySection';
import AboutUsSection from '@/components/AboutUsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <HowToPlaySection />
      <AboutUsSection />
      <FAQSection />
      <Footer />

    </>
  );
}
