import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HelpCenterCategoryView } from "@/components/help-center/help-center-category-view";
import {
  getFaqsForSlug,
  getHelpTopicBySlug,
  getSidebarTopicsForSlug,
  helpCenterCategorySlugs,
} from "@/content/help-center";

type HelpCenterCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return helpCenterCategorySlugs.map((category) => ({ category }));
}

export default async function HelpCenterCategoryPage({
  params,
}: HelpCenterCategoryPageProps) {
  const { category: categorySlug } = await params;

  const category = getHelpTopicBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const sidebarTopics = getSidebarTopicsForSlug(category.slug);
  const faqs = getFaqsForSlug(category.slug);

  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HelpCenterCategoryView
          category={category}
          sidebarTopics={sidebarTopics}
          faqs={faqs}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
