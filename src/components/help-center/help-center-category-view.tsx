"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { HelpCenterFaq, HelpCenterTopic } from "@/content/help-center";

type HelpCenterCategoryViewProps = {
  category: HelpCenterTopic;
  sidebarTopics: HelpCenterTopic[];
  faqs: HelpCenterFaq[];
};

export function HelpCenterCategoryView({
  category,
  sidebarTopics,
  faqs,
}: HelpCenterCategoryViewProps) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredSidebar = useMemo(() => {
    if (!normalizedQuery) {
      return sidebarTopics;
    }

    return sidebarTopics.filter((item) =>
      item.label.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery, sidebarTopics]);

  const filteredFaqs = useMemo(() => {
    if (!normalizedQuery) {
      return faqs;
    }

    return faqs.filter((faq) => faq.question.toLowerCase().includes(normalizedQuery));
  }, [faqs, normalizedQuery]);

  return (
    <section className="bg-[#f2f3f9] section-space">
      <div className="shell-container">
        <div className="grid gap-6 md:grid-cols-[290px_minmax(0,1fr)]">
          <aside className="md:sticky md:top-28 md:self-start">
            <label className="relative block">
              <Image
                src="/images/icon/search-icon-2.png"
                alt=""
                width={20}
                height={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                className="h-12 w-full rounded-xl border border-[#f2f1fc] bg-[#f9fbff] pl-13 pr-4 text-base text-[#1f3a7f] placeholder:text-[#7584ad] focus:outline-none focus:ring-2 focus:ring-brand-300"
              />
            </label>

            <h2 className="mt-7 text-2xl font-semibold text-[#0c266c]">
              Categories
            </h2>

            <nav className="mt-5 flex flex-col gap-2" aria-label="Help categories">
              {filteredSidebar.map((topic) => {
                const active = topic.slug === category.slug;

                return (
                  <Link
                    key={topic.slug}
                    href={`/help-center/${topic.slug}`}
                    className={`inline-flex items-center gap-2 text-lg font-semibold transition ${
                      active ? "text-[#4743c9]" : "text-[#0c266c] hover:text-[#4743c9]"
                    }`}
                  >
                    <span>{topic.label}</span>
                    {active ? <ArrowRight className="size-4" /> : null}
                  </Link>
                );
              })}
            </nav>
          </aside>

          <div className="rounded-xl border border-[#e0defa] bg-white p-6 shadow-[6px_10.392px_24px_0_rgba(106,105,194,0.25)] md:p-8">
            <h1 className="text-2xl font-semibold text-[#0c266c]">
              {category.label}
            </h1>

            <Accordion multiple className="mt-5 gap-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={`${faq.question}-${index}`}
                  value={`${category.slug}-${index}`}
                  className="overflow-hidden rounded-xl border-none bg-[#f7f6ff] not-last:border-b-0"
                >
                  <AccordionTrigger className="px-5 py-2 text-xl font-semibold text-[#0c266c] no-underline hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
                    <span className="flex items-center gap-3 text-left">
                      <Image src="/images/icon/faq-icon.png" alt="" width={20} height={28} />
                      <span>{faq.question}</span>
                    </span>

                    <span className="ml-4 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#edeaff]">
                      <Plus className="size-5 text-[#8572f8] group-aria-expanded/accordion-trigger:hidden" />
                      <Minus className="hidden size-5 text-[#8572f8] group-aria-expanded/accordion-trigger:block" />
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-14 pb-5 pt-0 text-lg leading-[1.6] text-[#1f3a7f]">
                    <ul className="list-disc space-y-1 pl-5">
                      {faq.answer.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 ? (
              <p className="mt-6 text-[clamp(1rem,1.12vw,1.5rem)] text-[#5b6ea7]">
                No FAQ matched your search.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
