import { AppDownloadSection } from "@/components/landing/app-download-section";
import { FaqsSection } from "@/components/landing/faqs-section";
import { GlobalPaymentSection } from "@/components/landing/global-payment-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { OurSolutionsSection } from "@/components/landing/our-solutions-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <GlobalPaymentSection />
        <OurSolutionsSection />
        <HowItWorksSection />
        <AppDownloadSection />
        <TestimonialsSection />
        <FaqsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
