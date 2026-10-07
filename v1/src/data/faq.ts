// FAQ data for the home-page accordion (native <details>).
// The design showed only the questions; answers below are concise, accurate
// and should be reviewed by the MULTIPROVA team before going live.

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'How do I choose the right term plan?',
    a: 'Consider your family’s financial needs, outstanding debts, and future goals. A general rule of thumb is a life cover equal to at least 10 to 15 times your annual income. Our advisors can help calculate your exact ideal cover.',
  },
  {
    q: 'How does cashless claim work?',
    a: 'Simply show your health card at any network hospital. The hospital TPA desk coordinates directly with the insurer for pre-authorization and settlement, with zero upfront payment for covered expenses.',
  },
  {
    q: 'What documents are required for a loan?',
    a: 'Typically, you will need KYC documents (Aadhaar, PAN), recent salary slips or ITR returns, and bank statements for the last 6 months. MULTIPROVA assists in preparing and submitting all required paperwork.',
  },
  {
    q: 'Is the entire process online?',
    a: 'Yes! From application, document verification, comparison, to issuance and post-purchase claim tracking, the entire process is 100% digital and paperless.',
  },
  {
    q: 'Do you offer loans for all kinds of needs?',
    a: 'We cover home and mortgage loans, education, personal, business and gold loans, and can match you with lenders offering the best rates for your profile.',
  },
  {
    q: 'How do I get started with an investment plan?',
    a: 'Book a free consultation. We understand your goals and risk appetite, then recommend mutual fund, fixed deposit or pension plans tailored to you.',
  },
];