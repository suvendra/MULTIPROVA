// All 27 products / services offered by SAMA Financial Solutions, organised
// into the 6 category tabs shown in the home-page "Explore your services" explorer.
// Each service carries its icon key + a short 3-point benefit summary (from the
// product infographic) so the full catalogue can be rendered on the services page.

export interface Service {
  id: string;
  name: string;
  icon: string; // key into src/components/icons.ts
  tagline: string;
  bullets: [string, string, string];
}

export interface ServiceCategory {
  id: string;
  label: string;
  tagline: string;
  items: Service[];
}

export const categories: ServiceCategory[] = [
  {
    id: 'insurance',
    label: 'Insurance',
    tagline: 'Complete protection for you and your family',
    items: [
      {
        id: 'cibil',
        name: 'Cibil',
        icon: "cibil",
        tagline: 'Know your credit health & improve your score',
        bullets: [
          'Get your free CIBIL score and full credit report instantly.',
          'Expert guidance to correct errors and boost your score.',
          'Personalised steps to qualify for better rates and loans.',
        ],
      },
      {
        id: 'insurance',
        name: 'Insurance',
        icon: "insurance",
        tagline: 'Safeguard what matters most',
        bullets: [
          'Wide range of life & general insurance plans to compare.',
          'Simple claim-support process handled end to end.',
          'Affordable premiums tailored to your budget.',
        ],
      },
      {
        id: 'rsa',
        name: 'RSA',
        icon: "rsa",
        tagline: 'Roadside assistance wherever you are',
        bullets: [
          '24x7 emergency roadside breakdown assistance.',
          'Flat tyre, battery jump-start and towing support.',
          'Quick response with trusted, verified partners.',
        ],
      },
      {
        id: 'pa',
        name: 'PA Policy',
        icon: "pa-policy",
        tagline: 'Accident cover that protects you on the move',
        bullets: [
          'Cover against accidental death & permanent disability.',
          'Worldwide accident protection at work and leisure.',
          'Affordable annual premium with easy renewal.',
        ],
      },
      {
        id: 'claims',
        name: 'Claim Services',
        icon: "claim-services",
        tagline: 'Hassle-free claims, handled for you',
        bullets: [
          'End-to-end claim filing and document support.',
          'Direct liaison with insurers to avoid rejections.',
          'Transparent updates on the status of your claim.',
        ],
      },
      {
        id: 'it-returns',
        name: 'IT Returns / Advisory',
        icon: "it-returns",
        tagline: 'File taxes with confidence',
        bullets: [
          'Accurate, on-time income tax return filing.',
          'Identify tax-saving investments & deductions.',
          'Guidance for salaried, business and capital gains income.',
        ],
      },
      {
        id: 'emi-protect',
        name: 'EMI Protect',
        icon: "emi-protect",
        tagline: 'Loan EMI cover for tough times',
        bullets: [
          'EMI continues even if income is interrupted.',
          'Peace of mind during job loss or critical illness.',
          'Simple enrolment against travel & personal loans.',
        ],
      },
      {
        id: 'hospicash',
        name: 'Hospicash',
        icon: "hospicash",
        tagline: 'Daily cash while you are hospitalised',
        bullets: [
          'Fixed daily cash benefit during hospital stay.',
          'Covers expenses over and above your health plan.',
          'No claim form hassle – minimal documentation.',
        ],
      },
      {
        id: 'travel',
        name: 'Travel',
        icon: "travel",
        tagline: 'Travel the world, protected',
        bullets: [
          'Medical & baggage cover for domestic or abroad trips.',
          'Trip cancellation and delay protection.',
          'Choose single-trip or annual multi-trip plans.',
        ],
      },
      {
        id: 'critical-care',
        name: 'Critical Care',
        icon: "critical-care",
        tagline: 'Lump-sum cover for major illnesses',
        bullets: [
          'Lump-sum payout on diagnosis of critical illness.',
          'Cover for cancer, heart & major surgeries.',
          'Use the amount freely – medical or day-to-day need.',
        ],
      },
      {
        id: 'wellness',
        name: 'Wellness',
        icon: "wellness",
        tagline: 'Prevention is cheaper than cure',
        bullets: [
          'Annual health check-ups and preventive screening.',
          'Wellness programs, fitness & diet guidance.',
          'Rewards for staying healthy and active.',
        ],
      },
      {
        id: 'term-plan',
        name: 'Term Plan',
        icon: "term-plan",
        tagline: 'Assured financial security for your family',
        bullets: [
          'High life cover at a low monthly premium.',
          'Tax benefits on premiums paid & maturity.',
          'Flexible tenures and add-on riders available.',
        ],
      },
    ],
  },
  {
    id: 'loans',
    label: 'Loans',
    tagline: 'Fund your goals at the right price',
    items: [
      {
        id: 'mortgage',
        name: 'Mortgage Loans',
        icon: "mortgage-loans",
        tagline: 'Turn your property into liquidity',
        bullets: [
          'Raise funds against your owned property.',
          'Competitive interest rates & flexible tenures.',
          'Quick sanction with minimal documentation.',
        ],
      },
      {
        id: 'education',
        name: 'Education Loan',
        icon: "education-loan",
        tagline: 'Invest in a brighter future',
        bullets: [
          'Finance tuition for studies in India & abroad.',
          'Easy repayment options after you graduate.',
          'No-collateral options for top institutions.',
        ],
      },
      {
        id: 'personal',
        name: 'Personal Loan',
        icon: "personal-loan",
        tagline: 'Instant funds for any need',
        bullets: [
          'Fast approval with quick disbursal.',
          'No end-use restrictions – use it your way.',
          'Flexible tenures and manageable EMIs.',
        ],
      },
      {
        id: 'business',
        name: 'Business Loan',
        icon: "business-loan",
        tagline: 'Fuel your business growth',
        bullets: [
          'Working capital & expansion funding.',
          'Unsecured options for eligible businesses.',
          'GST & turnover-based quick eligibility checks.',
        ],
      },
      {
        id: 'gold',
        name: 'Gold Loan',
        icon: "gold-loan",
        tagline: 'Instant liquidity against gold',
        bullets: [
          'Get funds against your gold within minutes.',
          'Transparent valuation and attractive rates.',
          'Safe custody of your gold with easy repayment.',
        ],
      },
      {
        id: 'loan-one-stop',
        name: 'Loans – One-Stop',
        icon: "loans",
        tagline: 'Every loan, one place',
        bullets: [
          'All loan types under a single roof.',
          'Compare offers to choose the best rate.',
          'Dedicated advisor from application to sanction.',
        ],
      },
    ],
  },
  {
    id: 'investments',
    label: 'Investments',
    tagline: 'Grow wealth for the long term',
    items: [
      {
        id: 'mutual-fund',
        name: 'Mutual Funds',
        icon: "mutual-fund",
        tagline: 'Systematic wealth creation',
        bullets: [
          'Equity, debt & hybrid funds to match your goals.',
          'SIP options to start small and grow steadily.',
          'Portfolio reviews to keep you on track.',
        ],
      },
      {
        id: 'fd',
        name: 'Fixed Deposits',
        icon: "fd",
        tagline: 'Secure, predictable returns',
        bullets: [
          'Guaranteed returns with flexible tenures.',
          'Tax-saving FD options available.',
          'Highest FD rates compared across issuers.',
        ],
      },
      {
        id: 'pension',
        name: 'Pension Plan',
        icon: "pension-plan",
        tagline: 'Retire with confidence',
        bullets: [
          'Regular income after retirement.',
          'Tax-efficient, long-term savings options.',
          'Plan for a comfortable, worry-free future.',
        ],
      },
    ],
  },
  {
    id: 'vehicle',
    label: 'Vehicle',
    tagline: 'Buy, sell & service with ease',
    items: [
      {
        id: 'inspection',
        name: 'Inspection of Vehicles',
        icon: "inspection-of-vehicles",
        tagline: 'Check before you sign',
        bullets: [
          'Detailed pre-purchase inspection reports.',
          'Condition & accident-history verification.',
          'Avoid surprises with a trusted checklist.',
        ],
      },
      {
        id: 'new-vehicle',
        name: 'New Vehicle Selling',
        icon: "new-vehicle-sell",
        tagline: 'Your next car, made easy',
        bullets: [
          'Access to top brands & dealers.',
          'Financing and insurance bundled together.',
          'Transparent on-road pricing.',
        ],
      },
      {
        id: 'used-vehicle',
        name: 'Used Vehicle Selling',
        icon: "used-vehicle-sell",
        tagline: 'Sell or buy certified pre-owned cars',
        bullets: [
          'Certified, quality-checked pre-owned vehicles.',
          'Fair valuation when selling your car.',
          'Transfer of ownership & paperwork handled.',
        ],
      },
      {
        id: 'fastag',
        name: 'Fastag',
        icon: "fastag",
        tagline: 'Pay tolls without stopping',
        bullets: [
          'Instant FASTag issuance & activation.',
          'Cashless, seamless toll payments nationwide.',
          'Recharge reminders and balance tracking.',
        ],
      },
    ],
  },
  {
    id: 'tax-legal',
    label: 'Tax & Legal',
    tagline: 'Stay compliant, stay protected',
    items: [
      {
        id: 'litigation',
        name: 'Litigation',
        icon: "litigation",
        tagline: 'Legal representation, simplified',
        bullets: [
          'Guidance on insurance-related disputes.',
          'Verification of legal documentation.',
          'End-to-end support with experienced counsel.',
        ],
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    tagline: 'Our support, your peace of mind',
    items: [
      {
        id: 'credit-card',
        name: 'Credit Cards',
        icon: "credit-card",
        tagline: 'The right card, the right rewards',
        bullets: [
          'Compare cards suited to your spending style.',
          'Guidance on rewards, limits and offers.',
          'Assistance through procurement & activation.',
        ],
      },
    ],
  },
];

// Flattened convenience list of every product for the services page.
export const allServices: Service[] = categories.flatMap((c) => c.items);