import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqAnswer =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio feugiat tellus elit massa sed ullamcorper a in.";

const leftFaqItems: FaqItem[] = [
  { question: "How to send money online?", answer: faqAnswer },
  { question: "How much are money transfer fees?", answer: faqAnswer },
  { question: "What is the fastest way to send money abroad?", answer: faqAnswer },
  { question: "How to use CreatiPay?", answer: faqAnswer },
  { question: "How does CreatiPay protect your money?", answer: faqAnswer },
];

const rightFaqItems: FaqItem[] = [
  { question: "Are money transfer apps safe?", answer: faqAnswer },
  { question: "How much money can I send?", answer: faqAnswer },
  { question: "Which currency can I send?", answer: faqAnswer },
  { question: "Cancel transaction", answer: faqAnswer },
  { question: "Can I send multiple payments?", answer: faqAnswer },
];

function FaqColumn({ idPrefix, items }: { idPrefix: string; items: FaqItem[] }) {
  return (
    <Accordion className="gap-5">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`${idPrefix}-${index}`}
          className="overflow-hidden rounded-xl border-none bg-white shadow-[2px_3.464px_24px_0_rgba(106,105,194,0.25)] not-last:border-b-0"
        >
          <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-[#0c266c] no-underline hover:no-underline [&>[data-slot=accordion-trigger-icon]]:hidden">
            <span className="text-left">{item.question}</span>
            <span className="ml-4 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f7f6ff]">
              <Plus className="size-5 text-[#8572f8] group-aria-expanded/accordion-trigger:hidden" />
              <Minus className="hidden size-5 text-[#8572f8] group-aria-expanded/accordion-trigger:block" />
            </span>
          </AccordionTrigger>

          <AccordionContent className="px-8 pb-6 pt-0 text-xl leading-[1.55] text-[#1f3a7f]">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqsSection({ className }: { className?: string }) {
  return (
    <section id="faqs" aria-labelledby="faqs-heading" className={`section-space md:mb-20 ${className || ""}`}>
      <div className="shell-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl font-semibold text-brand-700">
            Frequently Asked Questions
          </p>

          <h2
            id="faqs-heading"
            className="mt-3 text-6xl font-semibold leading-[1.14] text-[#0c266c]"
          >
            If you got questions we have answer
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-xl leading-[1.45] text-[#1f3a7f]">
            We have a list of frequently asked questions about us
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <FaqColumn idPrefix="left" items={leftFaqItems} />
          <FaqColumn idPrefix="right" items={rightFaqItems} />
        </div>
      </div>
    </section>
  );
}
