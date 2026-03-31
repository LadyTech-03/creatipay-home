import { FaqsSection } from "@/components/landing/faqs-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HelpCenterHero } from "@/components/help-center/help-center-hero";
import { HelpCenterSupportCta } from "@/components/help-center/help-center-support-cta";
import { HelpCenterTopicsSection } from "@/components/help-center/help-center-topics-section";

export default function HelpCenterPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HelpCenterHero />
        <HelpCenterTopicsSection />
        <FaqsSection className="bg-[#f6f5ff]" />
        <HelpCenterSupportCta />
      </main>
      <SiteFooter />
    </div>
  );
}
