// Testimonial data for the home-page carousel.

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "SAMA helped me find the right term plan for my family. The process was smooth and transparent.",
    name: 'Arjun Mehta',
    role: 'Customer',
    location: 'Bengaluru',
  },
  {
    quote:
      "Cashless claim for my surgery was approved within hours. Truly reliable support!",
    name: 'Priya Sharma',
    role: 'Customer',
    location: 'Mumbai',
  },
  {
    quote:
      "Got a personal loan quickly for my home renovation. Great rates and friendly service.",
    name: 'Rahul Verma',
    role: 'Customer',
    location: 'Delhi',
  },
  {
    quote:
      'Selling my old car was painless. The inspection report was clear, the valuation was fair, and the paperwork took care of itself.',
    name: 'Sneha Iyer',
    role: 'Home Maker',
    location: 'Chennai',
  },
  {
    quote:
      'Buying a pre-owned car is stressful, but the SAMA team checked everything and even sorted my insurance and FASTag in the same week.',
    name: 'Karan Malhotra',
    role: 'Entrepreneur',
    location: 'Pune',
  },
];