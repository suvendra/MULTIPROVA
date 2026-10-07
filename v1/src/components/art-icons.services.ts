// Colorful placeholder art icons — SAMA service set (part 1).
// These are ORIGINAL simplified SVG drawings that stand in for the official
// SAMA icon set. When the real assets are provided, drop them into
// src/assets/icons/<name>.png (or .svg/.webp) and ArtIcon.astro will use the
// file automatically — no code changes needed.

const svg = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${inner}</svg>`;

export const servicesArt: Record<string, string> = {
  cibil: svg(
    '<path d="M11 41a22 22 0 0 1 12-19" stroke="#E2262C" stroke-width="7" stroke-linecap="round"/><path d="M26 20a22 22 0 0 1 15 3" stroke="#F59E0B" stroke-width="7" stroke-linecap="round"/><path d="M44 25a22 22 0 0 1 9 15" stroke="#2FA84F" stroke-width="7" stroke-linecap="round"/><path d="M31 39l12-12" stroke="#16215C" stroke-width="4" stroke-linecap="round"/><circle cx="31" cy="40" r="4.5" fill="#16215C"/><path d="M16 52h32" stroke="#C9D6F2" stroke-width="4" stroke-linecap="round"/>'
  ),
  insurance: svg(
    '<path d="M32 5l20 7v14c0 14-8.5 24.5-20 29C20.5 50.5 12 40 12 26V12z" fill="#1D4ED8"/><path d="M32 5l20 7v14c0 14-8.5 24.5-20 29z" fill="#16215C"/><circle cx="24.5" cy="25" r="4" fill="#fff"/><path d="M18 39c0-4 3-6.5 6.5-6.5S31 35 31 39z" fill="#fff"/><circle cx="39.5" cy="25" r="4" fill="#fff"/><path d="M33 39c0-4 3-6.5 6.5-6.5S46 35 46 39z" fill="#fff"/><circle cx="32" cy="33" r="2.6" fill="#FCA5A5"/><path d="M28.8 41c0-2.2 1.4-3.6 3.2-3.6s3.2 1.4 3.2 3.6z" fill="#FCA5A5"/>'
  ),
  rsa: svg(
    '<rect x="6" y="32" width="32" height="11" rx="3" fill="#1D4ED8"/><path d="M38 43v-8c0-1.7 1.3-3 3-3h6l6 7v4z" fill="#2E6BE6"/><rect x="12" y="24" width="24" height="5" rx="2" fill="#16215C"/><path d="M14 24l7-9h11" stroke="#16215C" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="22" y="9" width="14" height="7" rx="2.5" fill="#E2262C"/><circle cx="16" cy="46" r="5" fill="#16215C"/><circle cx="16" cy="46" r="2" fill="#fff"/><circle cx="30" cy="46" r="5" fill="#16215C"/><circle cx="30" cy="46" r="2" fill="#fff"/><circle cx="48" cy="46" r="5" fill="#16215C"/><circle cx="48" cy="46" r="2" fill="#fff"/>'
  ),
  'pa-policy': svg(
    '<path d="M32 5l20 7v14c0 14-8.5 24.5-20 29C20.5 50.5 12 40 12 26V12z" fill="#F59E0B"/><circle cx="32" cy="24" r="6" fill="#fff"/><path d="M21 43c1.5-7 5.5-10.5 11-10.5S41.5 36 43 43c-3.5 2.6-7.2 4-11 4s-7.5-1.4-11-4z" fill="#fff"/>'
  ),
  'claim-services': svg(
    '<rect x="14" y="10" width="36" height="46" rx="5" fill="#fff" stroke="#16215C" stroke-width="3"/><rect x="24" y="6" width="16" height="9" rx="3" fill="#16215C"/><path d="M21 27l3 3 5-6" stroke="#2FA84F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 28h11" stroke="#C9D6F2" stroke-width="3.5" stroke-linecap="round"/><path d="M21 37l3 3 5-6" stroke="#2FA84F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 38h11" stroke="#C9D6F2" stroke-width="3.5" stroke-linecap="round"/><path d="M21 47l3 3 5-6" stroke="#2FA84F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 48h11" stroke="#C9D6F2" stroke-width="3.5" stroke-linecap="round"/>'
  ),
  'it-returns': svg(
    '<rect x="14" y="8" width="30" height="42" rx="4" fill="#fff" stroke="#16215C" stroke-width="3"/><path d="M38 8l12 12H38z" fill="#C9D6F2"/><path d="M20 26h12M20 32h18M20 38h18M20 44h10" stroke="#C9D6F2" stroke-width="3" stroke-linecap="round"/><rect x="40" y="34" width="16" height="21" rx="3" fill="#16215C"/><path d="M43 40h10M43 45h10M43 50h5" stroke="#7DB5F5" stroke-width="2.5" stroke-linecap="round"/><circle cx="22" cy="18" r="6" fill="#E2262C"/><path d="M19.5 15.5h5M22 15.5v6" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>'
  ),
  litigation: svg(
    '<rect x="30" y="16" width="4" height="32" rx="2" fill="#B45309"/><rect x="20" y="48" width="24" height="5" rx="2.5" fill="#B45309"/><path d="M32 16 16 20m16-4 16 4" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/><path d="M16 20l-7 14a8 8 0 0 0 14 0z" fill="#FBBF24"/><path d="M48 20l-7 14a8 8 0 0 0 14 0z" fill="#FBBF24"/><circle cx="32" cy="14" r="4.5" fill="#F59E0B"/>'
  ),
  'emi-protect': svg(
    '<path d="M32 5l20 7v14c0 14-8.5 24.5-20 29C20.5 50.5 12 40 12 26V12z" fill="#2FA84F"/><path d="M32 5l20 7v14c0 14-8.5 24.5-20 29z" fill="#1F7A33"/><path d="M25 20h9a6 6 0 0 1 0 12h-9m0 0h10m-10 0 11 12M25 32v12" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  hospicash: svg(
    '<path d="M8 50V24" stroke="#16215C" stroke-width="4" stroke-linecap="round"/><path d="M8 44h48v6" stroke="#16215C" stroke-width="4" stroke-linecap="round"/><rect x="12" y="30" width="22" height="12" rx="4" fill="#2E6BE6"/><circle cx="18" cy="30" r="4.5" fill="#F3C29E"/><rect x="34" y="26" width="20" height="16" rx="3" fill="#7DB5F5"/><circle cx="52" cy="16" r="7.5" fill="#14B8A6"/><path d="M49.5 12.5h3.2a2.5 2.5 0 0 1 0 5h-3.2m0-5v9m0-2.2h4.2" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>'
  ),
};
