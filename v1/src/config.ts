// Central site configuration — brand, contact details and links.
// NOTE: contact details, IRDAI licence number and CIN below are placeholders
// from the design mockup. Replace with SAMA's official details before launch.

export const SITE = {
  name: 'MULTIPROVA',
  shortName: 'MULTIPROVA',
  alternateNames: ['SAMA Insurance', 'SAMA Financial Solutions', 'SAMA'],
  logo: '/multiprova.png',
  themeColor: '#083888',
  url: 'https://www.samainsurance.co.in',
  description:
    'MULTIPROVA by SAMA Insurance — your trusted one-stop partner for insurance and everyday financial services. Protecting today, securing tomorrow.',
  contact: {
    phone: '1800-123-7262',
    email: 'care@samainsurance.in',
    addressLine1: 'SAMA Financial Solutions',
    addressLine2: 'Bangalore',
    city: 'Bangalore, India',
    hours: 'Mon – Sat: 9 AM – 7 PM',
  },
  legal: {
    irdai: 'IRDAI Lic. No. 123',
    cin: 'CIN: U74999KA2015PTC086123',
  },
  // Temporary destinations until the client supplies the app and partner URLs.
  links: {
    appStore: 'https://apps.apple.com/',
    googlePlay: 'https://play.google.com/store/apps',
    partner: 'https://example.com/',
  },
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/',
    youtube: 'https://www.youtube.com/',
  },
} as const;
