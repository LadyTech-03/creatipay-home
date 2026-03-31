export type MenuLink = {
  label: string;
  href: string;
};

export type MenuGroup = {
  label: string;
  links: MenuLink[];
};

export const headerMenuGroups: MenuGroup[] = [
  {
    label: "Personal",
    links: [
      { label: "Freelancer Payments", href: "#" },
      { label: "Subscriptions", href: "#" },
      { label: "Security", href: "#" },
      { label: "Fees", href: "#" },
    ],
  },
  {
    label: "Business",
    links: [
      { label: "Business Payments", href: "#" },
      { label: "Business Account", href: "#" },
      { label: "Corporate Card", href: "#" },
      { label: "Expense Management", href: "#" },
      { label: "Budgeting", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Invoice", href: "#" },
      { label: "Rewards", href: "#" },
      { label: "Fees", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Career", href: "#" },
      { label: "Career Details", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Blog Details", href: "#" },
    ],
  },
  {
    label: "Help",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "Help Category", href: "/help-center/adding-money" },
    ],
  },
];

export const footerPrimaryLinks: MenuLink[] = [
  { label: "About Us", href: "#" },
  { label: "Support", href: "/help-center" },
  { label: "Fees", href: "#" },
];

export const footerLegalLinks: MenuLink[] = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

export const socialLinks = [
  { label: "Facebook", href: "#", icon: "/images/icon/facebook.png" },
  { label: "LinkedIn", href: "#", icon: "/images/icon/linkedin.png" },
  { label: "Instagram", href: "#", icon: "/images/icon/instagram.png" },
  { label: "Twitter", href: "#", icon: "/images/icon/twitter.png" },
] as const;
