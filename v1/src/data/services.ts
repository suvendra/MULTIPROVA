// Selected v1 catalogue. Public navigation and discovery share these records.
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

export const insuranceServices: Service[] = [
  {
    "id": "insurance",
    "name": "Insurance",
    "icon": "insurance",
    "tagline": "Safeguard what matters most",
    "bullets": [
      "Wide range of life & general insurance plans to compare.",
      "Simple claim-support process handled end to end.",
      "Affordable premiums tailored to your budget."
    ]
  },
  {
    "id": "emi-protect",
    "name": "EMI Protect",
    "icon": "emi-protect",
    "tagline": "Loan EMI cover for tough times",
    "bullets": [
      "EMI continues even if income is interrupted.",
      "Peace of mind during job loss or critical illness.",
      "Simple enrolment against travel & personal loans."
    ]
  },
  {
    "id": "hospicash",
    "name": "Hospicash",
    "icon": "hospicash",
    "tagline": "Daily cash while you are hospitalised",
    "bullets": [
      "Fixed daily cash benefit during hospital stay.",
      "Covers expenses over and above your health plan.",
      "No claim form hassle – minimal documentation."
    ]
  },
  {
    "id": "travel",
    "name": "Travel",
    "icon": "travel",
    "tagline": "Travel the world, protected",
    "bullets": [
      "Medical & baggage cover for domestic or abroad trips.",
      "Trip cancellation and delay protection.",
      "Choose single-trip or annual multi-trip plans."
    ]
  },
  {
    "id": "critical-care",
    "name": "Critical Care",
    "icon": "critical-care",
    "tagline": "Lump-sum cover for major illnesses",
    "bullets": [
      "Lump-sum payout on diagnosis of critical illness.",
      "Cover for cancer, heart & major surgeries.",
      "Use the amount freely – medical or day-to-day need."
    ]
  },
  {
    "id": "wellness",
    "name": "Wellness",
    "icon": "wellness",
    "tagline": "Prevention is cheaper than cure",
    "bullets": [
      "Annual health check-ups and preventive screening.",
      "Wellness programs, fitness & diet guidance.",
      "Rewards for staying healthy and active."
    ]
  },
  {
    "id": "term-plan",
    "name": "Term Plan",
    "icon": "term-plan",
    "tagline": "Assured financial security for your family",
    "bullets": [
      "High life cover at a low monthly premium.",
      "Tax benefits on premiums paid & maturity.",
      "Flexible tenures and add-on riders available."
    ]
  }
];

export const everydayServices: Service[] = [
  {
    "id": "rsa",
    "name": "RSA",
    "icon": "rsa",
    "tagline": "Roadside assistance wherever you are",
    "bullets": [
      "24x7 emergency roadside breakdown assistance.",
      "Flat tyre, battery jump-start and towing support.",
      "Quick response with trusted, verified partners."
    ]
  },
  {
    "id": "gold",
    "name": "Gold Loan",
    "icon": "gold-loan",
    "tagline": "Instant liquidity against gold",
    "bullets": [
      "Get funds against your gold within minutes.",
      "Transparent valuation and attractive rates.",
      "Safe custody of your gold with easy repayment."
    ]
  },
  {
    "id": "small-loan",
    "name": "Small Loan",
    "icon": "loans",
    "tagline": "Guidance for smaller borrowing needs",
    "bullets": [
      "Discuss the amount you need and your repayment budget.",
      "Understand lender eligibility and document requirements.",
      "Compare available terms, fees and repayment schedules."
    ]
  },
  {
    "id": "claims",
    "name": "Claim Servicing",
    "icon": "claim-services",
    "tagline": "Hassle-free claims, handled for you",
    "bullets": [
      "End-to-end claim filing and document support.",
      "Direct liaison with insurers to avoid rejections.",
      "Transparent updates on the status of your claim."
    ]
  },
  {
    "id": "cibil",
    "name": "Credit Score",
    "icon": "cibil",
    "tagline": "Know your credit health & improve your score",
    "bullets": [
      "Get your free CIBIL score and full credit report instantly.",
      "Expert guidance to correct errors and boost your score.",
      "Personalised steps to qualify for better rates and loans."
    ]
  },
  {
    "id": "litigation",
    "name": "Litigation",
    "icon": "litigation",
    "tagline": "Legal representation, simplified",
    "bullets": [
      "Guidance on insurance-related disputes.",
      "Verification of legal documentation.",
      "End-to-end support with experienced counsel."
    ]
  },
  {
    "id": "pa",
    "name": "Personal Accident",
    "icon": "pa-policy",
    "tagline": "Accident cover that protects you on the move",
    "bullets": [
      "Cover against accidental death & permanent disability.",
      "Worldwide accident protection at work and leisure.",
      "Affordable annual premium with easy renewal."
    ]
  }
];

// Insurance is grouped in the header only; existing catalogue content is retained.
export const insuranceMenuGroups = [
  { label: 'Life', ids: ['term-plan'] },
  { label: 'General', ids: ['travel', 'emi-protect'] },
  { label: 'Health', ids: ['critical-care', 'hospicash', 'wellness'] },
].map(group => ({ label: group.label, items: group.ids.map(id => insuranceServices.find(service => service.id === id)!) }));

export const categories: ServiceCategory[] = [
  { id: 'insurance', label: 'Insurance', tagline: 'Complete protection for you and your family', items: insuranceServices },
  { id: 'everyday-services', label: 'Services', tagline: 'Everyday support, all in one place', items: everydayServices },
];

export const allServices: Service[] = categories.flatMap(category => category.items);
