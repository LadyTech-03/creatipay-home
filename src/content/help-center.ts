export type HelpCenterGroup = "personal" | "business";

export type HelpCenterTopic = {
  slug: string;
  label: string;
  icon: string;
  primaryGroup: HelpCenterGroup;
  groups: HelpCenterGroup[];
};

export type HelpCenterFaq = {
  question: string;
  answer: string[];
};

const answerTemplate: string[] = [
  "Tap the relevant option from your Payuno dashboard.",
  "Review the available instructions and choose the preferred method.",
  "Complete the requested details and confirm the action.",
  "Use secure verification (OTP or biometric) when prompted.",
  "Track the update from your activity timeline.",
];

const addingMoneyFaqs: HelpCenterFaq[] = [
  {
    question: "How can I add money using my linked bank account?",
    answer: answerTemplate,
  },
  {
    question: "Is adding money with my linked bank account safe?",
    answer: answerTemplate,
  },
  {
    question: "Can I add money with a shared or joint bank account?",
    answer: answerTemplate,
  },
  {
    question: "How do I transfer money to my Payuno account from a bank account?",
    answer: answerTemplate,
  },
  {
    question: "Can I get my salary paid into my Payuno account?",
    answer: answerTemplate,
  },
  {
    question: "Will I be charged for an incoming transfer?",
    answer: answerTemplate,
  },
  {
    question: "How long will it take for the amount to be transferred into my Payuno account?",
    answer: answerTemplate,
  },
];

function genericFaqs(label: string): HelpCenterFaq[] {
  const lower = label.toLowerCase();

  return [
    { question: `How does ${label} work on Payuno?`, answer: answerTemplate },
    { question: `Is ${lower} safe to use?`, answer: answerTemplate },
    { question: `Can I use ${lower} internationally?`, answer: answerTemplate },
    { question: `How long do ${lower} updates take?`, answer: answerTemplate },
    { question: `Are there any fees related to ${lower}?`, answer: answerTemplate },
    { question: `Can I track my ${lower} status in real-time?`, answer: answerTemplate },
    { question: `How do I contact support regarding ${lower}?`, answer: answerTemplate },
  ];
}

export const helpCenterTopics: HelpCenterTopic[] = [
  {
    slug: "about-payuno",
    label: "About Payuno",
    icon: "/images/icon/personal-icon-1.png",
    primaryGroup: "personal",
    groups: ["personal", "business"],
  },
  {
    slug: "wallet-creation",
    label: "Wallet Creation",
    icon: "/images/icon/personal-icon-2.png",
    primaryGroup: "personal",
    groups: ["personal"],
  },
  {
    slug: "adding-money",
    label: "Adding Money",
    icon: "/images/icon/personal-icon-3.png",
    primaryGroup: "personal",
    groups: ["personal", "business"],
  },
  {
    slug: "payuno-card",
    label: "Payuno Card",
    icon: "/images/icon/personal-icon-4.png",
    primaryGroup: "personal",
    groups: ["personal", "business"],
  },
  {
    slug: "sending-money",
    label: "Sending Money",
    icon: "/images/icon/personal-icon-5.png",
    primaryGroup: "personal",
    groups: ["personal"],
  },
  {
    slug: "account-mangament",
    label: "Account Mangament",
    icon: "/images/icon/personal-icon-6.png",
    primaryGroup: "personal",
    groups: ["personal"],
  },
  {
    slug: "adding-recipient",
    label: "Adding Recipient",
    icon: "/images/icon/personal-icon-7.png",
    primaryGroup: "personal",
    groups: ["personal"],
  },
  {
    slug: "accepting-payments",
    label: "Accepting Payments",
    icon: "/images/icon/business-icon-1.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "transactions",
    label: "Transactions",
    icon: "/images/icon/business-icon-3.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "deposits",
    label: "Deposits",
    icon: "/images/icon/business-icon-4.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "wallet",
    label: "Wallet",
    icon: "/images/icon/personal-icon-2.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "refund",
    label: "Refund",
    icon: "/images/icon/personal-icon-1.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "designated-bank-acc",
    label: "Designated Bank Acc",
    icon: "/images/icon/business-icon-5.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "payment-gateway",
    label: "Payment Gateway",
    icon: "/images/icon/business-icon-6.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "secure-auth",
    label: "3D Secure Auth.",
    icon: "/images/icon/business-icon-7.png",
    primaryGroup: "business",
    groups: ["business"],
  },
  {
    slug: "fees-and-allowance",
    label: "Fees and Allowance",
    icon: "/images/icon/business-icon-8.png",
    primaryGroup: "business",
    groups: ["business"],
  },
];

const topicLookup = new Map(helpCenterTopics.map((topic) => [topic.slug, topic]));

export const personalHelpTopics = helpCenterTopics.filter((topic) =>
  topic.groups.includes("personal"),
);

export const businessHelpTopics = helpCenterTopics.filter((topic) =>
  topic.groups.includes("business"),
);

export const helpCenterCategorySlugs = helpCenterTopics.map((topic) => topic.slug);

export function getHelpTopicBySlug(slug: string): HelpCenterTopic | undefined {
  return topicLookup.get(slug);
}

export function getHelpTopicsForGroup(group: HelpCenterGroup): HelpCenterTopic[] {
  return group === "personal" ? personalHelpTopics : businessHelpTopics;
}

export function getSidebarTopicsForSlug(slug: string): HelpCenterTopic[] {
  const topic = getHelpTopicBySlug(slug);

  if (!topic) {
    return personalHelpTopics;
  }

  return topic.primaryGroup === "business" ? businessHelpTopics : personalHelpTopics;
}

export function getFaqsForSlug(slug: string): HelpCenterFaq[] {
  if (slug === "adding-money") {
    return addingMoneyFaqs;
  }

  const topic = getHelpTopicBySlug(slug);
  if (!topic) {
    return addingMoneyFaqs;
  }

  return genericFaqs(topic.label);
}
