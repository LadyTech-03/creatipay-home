export type LandingSkeletonSection = {
  id:
    | "stats"
    | "global-payment"
    | "solutions"
    | "how-it-works"
    | "app-download"
    | "testimonials"
    | "faqs";
  eyebrow: string;
  title: string;
  description: string;
  placeholders: number;
};

export const landingSkeletonSections: LandingSkeletonSection[] = [
  {
    id: "stats",
    eyebrow: "Section 02",
    title: "Counter Strip",
    description:
      "Placeholder for supported currencies, countries, payment methods, and support metrics.",
    placeholders: 4,
  },
  {
    id: "global-payment",
    eyebrow: "Section 03",
    title: "Global Payment",
    description:
      "Placeholder for the feature overview with supporting media and value cards.",
    placeholders: 4,
  },
  {
    id: "solutions",
    eyebrow: "Section 04",
    title: "Our Solutions",
    description:
      "Placeholder for payment pillars such as Payments, Collections, Conversions, and Global Accounts.",
    placeholders: 4,
  },
  {
    id: "how-it-works",
    eyebrow: "Section 05",
    title: "How It Works",
    description:
      "Placeholder for the four-step onboarding flow from registration to completion.",
    placeholders: 4,
  },
  {
    id: "app-download",
    eyebrow: "Section 06",
    title: "App Download",
    description:
      "Placeholder for mobile app value proposition, badges, and download calls to action.",
    placeholders: 3,
  },
  {
    id: "testimonials",
    eyebrow: "Section 07",
    title: "Testimonials",
    description:
      "Placeholder for customer testimonials and future carousel integration.",
    placeholders: 3,
  },
  {
    id: "faqs",
    eyebrow: "Section 08",
    title: "Frequently Asked Questions",
    description:
      "Placeholder for grouped FAQ accordions that will be implemented with shadcn Accordion.",
    placeholders: 6,
  },
];
