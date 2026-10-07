// Featured products shown as cards on the home page.

export interface FeaturedProduct {
  icon: string; // key into the ArtIcon registry
  title: string;
  tagline: string;
  cta: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    icon: 'term-plan',
    title: 'Term Insurance',
    tagline: "Secure your family's future with high life cover at affordable premiums.",
    cta: 'Get a Quote',
  },
  {
    icon: 'feat-health',
    title: 'Health Insurance',
    tagline: 'Cashless hospitalization & wide network for you and your loved ones.',
    cta: 'Get Covered',
  },
  {
    icon: 'personal-loan',
    title: 'Personal Loan',
    tagline: 'Quick funds for your needs—flexible EMI & instant pre-approvals.',
    cta: 'Check Eligibility',
  },
  {
    icon: 'gold-loan',
    title: 'Gold Loan',
    tagline: 'Unlock the value of your gold with low interest and fast disbursal.',
    cta: 'Apply Now',
  },
  {
    icon: 'mutual-fund',
    title: 'Mutual Funds',
    tagline: 'Grow wealth with curated funds for every goal and risk profile.',
    cta: 'Invest Now',
  },
];
