// Colorful placeholder art icons — benefits & how-it-works steps.
// Placeholder drawings; real assets in src/assets/icons/<name>.png take over
// automatically via ArtIcon.astro.

const svg = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${inner}</svg>`;

export const uiArt: Record<string, string> = {
  'trusted-protection': svg(
    '<path d="M32 5l20 7v14c0 14-8.5 24.5-20 29C20.5 50.5 12 40 12 26V12z" fill="#E2262C"/><path d="M23 31l6 6 12-13" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'expert-support': svg(
    '<circle cx="32" cy="19" r="7.5" fill="#2E6BE6"/><path d="M19 44c1-8.5 6.3-13 13-13s12 4.5 13 13z" fill="#2E6BE6"/><circle cx="14" cy="26" r="5.5" fill="#7DB5F5"/><path d="M4 44c.8-6.5 4.8-10 10-10 1.7 0 3.3.4 4.7 1.2C16 38 14.6 40.7 14 44z" fill="#7DB5F5"/><circle cx="50" cy="26" r="5.5" fill="#7DB5F5"/><path d="M60 44c-.8-6.5-4.8-10-10-10-1.7 0-3.3.4-4.7 1.2C48 38 49.4 40.7 50 44z" fill="#7DB5F5"/>'
  ),
  'customised-solutions': svg(
    '<path d="M32 5l20 7v14c0 14-8.5 24.5-20 29C20.5 50.5 12 40 12 26V12z" fill="#16A34A"/><path d="M20 26h7m10 0h7M32 19v-6m0 26v-6m-12-7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zm17 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zM32 33a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
  ),
  'cashless-network': svg(
    '<path d="M32 38c-8.5-6.3-14-11.6-14-18a8 8 0 0 1 14-5.3A8 8 0 0 1 46 20c0 6.4-5.5 11.7-14 18z" fill="#7C3AED"/><path d="M12 50c6.5 4.5 13 6.8 20 6.8S45.5 54.5 52 50" stroke="#5B21B6" stroke-width="4.5" stroke-linecap="round"/><circle cx="50" cy="14" r="6" fill="#FBBF24"/>'
  ),
  'quick-claim': svg(
    '<circle cx="38" cy="34" r="16" fill="#fff" stroke="#E2262C" stroke-width="4"/><path d="M38 25v9l7 5" stroke="#E2262C" stroke-width="3.5" stroke-linecap="round"/><path d="M6 26h12M3 34h12M6 42h12" stroke="#E2262C" stroke-width="3.5" stroke-linecap="round"/>'
  ),
  'step-1': svg(
    '<rect x="16" y="10" width="32" height="44" rx="5" fill="#1D4ED8"/><rect x="25" y="6" width="14" height="8" rx="3" fill="#16215C"/><path d="M23 24h18M23 32h18M23 40h10" stroke="#CDE3FF" stroke-width="3.5" stroke-linecap="round"/><circle cx="23" cy="47" r="3" fill="#7BD389"/>'
  ),
  'step-2': svg(
    '<rect x="30" y="14" width="4" height="34" rx="2" fill="#B91C1C"/><rect x="20" y="48" width="24" height="5" rx="2.5" fill="#B91C1C"/><path d="M32 14 16 18m16-4 16 4" stroke="#E2262C" stroke-width="3" stroke-linecap="round"/><path d="M16 18l-7 14a8 8 0 0 0 14 0z" fill="#F87171"/><path d="M48 18l-7 14a8 8 0 0 0 14 0z" fill="#F87171"/><circle cx="32" cy="12" r="4.5" fill="#E2262C"/>'
  ),
  'step-3': svg(
    '<path d="M4 26h12v16H4z" fill="#16215C"/><path d="M60 26H48v16h12z" fill="#16215C"/><path d="M16 30l9-4 7 5 7-5 9 4-11 14a4.5 4.5 0 0 1-7 0l-5-5-5 5a4.5 4.5 0 0 1-7 0z" fill="#2E6BE6"/><path d="M23 36l-5 6m18-6 5 6" stroke="#1D4ED8" stroke-width="3" stroke-linecap="round"/>'
  ),
};
