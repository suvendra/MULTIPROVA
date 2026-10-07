// Colorful placeholder art icons — SAMA service set (part 2).
// Placeholder drawings; real assets in src/assets/icons/<name>.png take over
// automatically via ArtIcon.astro.

const svg = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${inner}</svg>`;

export const servicesArt2: Record<string, string> = {
  travel: svg(
    '<path d="M55 15c3 3 2.2 7.4-1.2 9.4L24 42l-10 3-4-4 3-10 29.8-19c2.4-1.5 5.4-1.1 7.4.6z" fill="#2E6BE6"/><path d="M18 33l8 8" stroke="#16215C" stroke-width="3" stroke-linecap="round"/><path d="M10 41l-5 5 5 5 5-5z" fill="#E2262C"/><rect x="38" y="40" width="17" height="14" rx="3" fill="#E2262C"/><path d="M43 40v-3a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v3" stroke="#B91C1C" stroke-width="3" fill="none"/><path d="M42 46h9" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'
  ),
  'critical-care': svg(
    '<path d="M32 54C18 44 10 35 10 25a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 10-8 19-22 29z" fill="#E2262C"/><path d="M16 30h8l3-6 5 12 4-8 3 4h9" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  wellness: svg(
    '<path d="M32 56c-2-15 4.5-25.5 19-30 2 15-4.5 25.5-19 30z" fill="#2FA84F"/><path d="M29.5 56c1-11-3.5-18.5-13-22-1 11 3.5 18.5 13 22z" fill="#7BD389"/><path d="M31 56V36" stroke="#1F7A33" stroke-width="3" stroke-linecap="round"/>'
  ),
  'term-plan': svg(
    '<path d="M32 9a22 22 0 0 1 22 21H10A22 22 0 0 1 32 9z" fill="#7C3AED"/><path d="M32 9V5" stroke="#5B21B6" stroke-width="3" stroke-linecap="round"/><path d="M32 30v17a5 5 0 0 0 10 0" stroke="#5B21B6" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="23" cy="42" r="3.5" fill="#16215C"/><path d="M18.5 53c.7-4 2.4-6 4.5-6s3.8 2 4.5 6z" fill="#16215C"/><circle cx="41" cy="42" r="3.5" fill="#16215C"/><path d="M36.5 53c.7-4 2.4-6 4.5-6s3.8 2 4.5 6z" fill="#16215C"/>'
  ),
  'inspection-of-vehicles': svg(
    '<path d="M8 40l4-9c.8-1.9 2.6-3 4.7-3h14.6c2.1 0 3.9 1.1 4.7 3l4 9z" fill="#2E6BE6"/><rect x="6" y="38" width="38" height="9" rx="4" fill="#1D4ED8"/><circle cx="15" cy="47" r="4.5" fill="#16215C"/><circle cx="33" cy="47" r="4.5" fill="#16215C"/><circle cx="45" cy="22" r="11" fill="#CDE3FF" stroke="#16215C" stroke-width="3"/><path d="M53 30l6 6" stroke="#16215C" stroke-width="4" stroke-linecap="round"/><path d="M40.5 22l3 3 5.5-6.5" stroke="#2FA84F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'pension-plan': svg(
    '<path d="M20 12v22h20" stroke="#EA580C" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M20 27h18" stroke="#EA580C" stroke-width="4.5" stroke-linecap="round"/><path d="M20 34l-6 12m30-12 6 12" stroke="#EA580C" stroke-width="4" stroke-linecap="round"/><path d="M8 50c8 5 16 5 24 0s16-5 24 0" stroke="#EA580C" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="49" cy="16" r="8.5" fill="#FBBF24"/><path d="M46.5 12.5h3.6a2.7 2.7 0 0 1 0 5.4h-3.6m0-5.4v9.8m0-2.4h4.7" stroke="#B45309" stroke-width="1.8" stroke-linecap="round"/>'
  ),
  fastag: svg(
    '<rect x="10" y="22" width="30" height="15" rx="6" fill="#2E6BE6"/><path d="M13 28h24" stroke="#CDE3FF" stroke-width="3" stroke-linecap="round"/><rect x="44" y="12" width="4.5" height="36" rx="2" fill="#16215C"/><rect x="30" y="12" width="16" height="6" rx="2" fill="#E2262C"/><path d="M34 15h3m3 0h3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><rect x="8" y="42" width="22" height="14" rx="3" fill="#14B8A6"/><path d="M12 48h14M12 52h9" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'
  ),
  loans: svg(
    '<path d="M27 13l-3-7h16l-3 7z" fill="#0D9488"/><rect x="24" y="11" width="16" height="6" rx="2" fill="#0D9488"/><path d="M32 21c10.5 0 18 8 18 17.5C50 47 42.5 53 32 53s-18-6-18-14.5C14 29 21.5 21 32 21z" fill="#14B8A6"/><path d="M27 30h8.5a5.5 5.5 0 0 1 0 11H27m0 0h9.5M27 41l10 10M27 30v11" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'mortgage-loans': svg(
    '<path d="M8 32 32 12l24 20-4.5 3.5L32 20 12.5 35.5z" fill="#E2262C"/><rect x="14" y="33" width="36" height="22" fill="#FCEBD5"/><rect x="27" y="41" width="10" height="14" rx="1.5" fill="#B45309"/><rect x="19" y="38" width="8" height="7" rx="1" fill="#7DB5F5"/><rect x="37" y="38" width="8" height="7" rx="1" fill="#7DB5F5"/><circle cx="17" cy="56" r="4" fill="#7BD389"/><circle cx="47" cy="56" r="4" fill="#7BD389"/>'
  ),
};
