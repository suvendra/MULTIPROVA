// Colorful placeholder art icons — SAMA service set (part 3).
// Placeholder drawings; real assets in src/assets/icons/<name>.png take over
// automatically via ArtIcon.astro.

const svg = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${inner}</svg>`;

export const servicesArt3: Record<string, string> = {
  'education-loan': svg(
    '<rect x="12" y="42" width="40" height="12" rx="3" fill="#E2262C"/><path d="M32 42v12" stroke="#fff" stroke-width="2.5"/><path d="M32 12 56 22l-24 10L8 22z" fill="#16215C"/><path d="M20 27v9c0 3 5.4 6 12 6s12-3 12-6v-9" fill="none" stroke="#16215C" stroke-width="3.5"/><path d="M52 25v9" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/><circle cx="52" cy="37" r="2.5" fill="#FBBF24"/>'
  ),
  'personal-loan': svg(
    '<circle cx="24" cy="21" r="8.5" fill="#2E6BE6"/><path d="M9 48c1.5-9.5 7.3-15 15-15s13.5 5.5 15 15z" fill="#1D4ED8"/><circle cx="45" cy="38" r="10.5" fill="#FBBF24"/><path d="M42 33.5h4.4a3 3 0 0 1 0 6H42m0 0h5M42 33.5v11m0-2.2h5.5" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'business-loan': svg(
    '<rect x="8" y="24" width="34" height="26" rx="5" fill="#1D4ED8"/><path d="M19 24v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4" stroke="#16215C" stroke-width="3.5" fill="none"/><path d="M8 34h34" stroke="#16215C" stroke-width="3" opacity=".45"/><rect x="22" y="31" width="6" height="7" rx="1.5" fill="#16215C"/><rect x="46" y="38" width="5" height="12" rx="1.5" fill="#86D99B"/><rect x="53" y="31" width="5" height="19" rx="1.5" fill="#2FA84F"/><path d="M42 30l7-7 4.5 3.5L61 19" stroke="#2FA84F" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M55 18h6v6" stroke="#2FA84F" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'credit-card': svg(
    '<rect x="6" y="16" width="52" height="32" rx="6" fill="#1D4ED8"/><rect x="6" y="24" width="52" height="7" fill="#16215C"/><rect x="12" y="36" width="11" height="8" rx="2" fill="#FBBF24"/><path d="M30 39h16M30 43.5h10" stroke="#CDE3FF" stroke-width="2.5" stroke-linecap="round"/>'
  ),
  'mutual-fund': svg(
    '<rect x="12" y="34" width="8" height="18" rx="2" fill="#86D99B"/><rect x="24" y="26" width="8" height="26" rx="2" fill="#3FBF61"/><rect x="36" y="18" width="8" height="34" rx="2" fill="#2FA84F"/><path d="M10 26 24 16l8 5 13-10" stroke="#16215C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 9h6v6" stroke="#16215C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="51" cy="45" r="9" fill="#FBBF24"/><path d="M48.5 41h3.6a2.7 2.7 0 0 1 0 5.4h-3.6m0-5.4v9.8m0-2.4h4.7" stroke="#B45309" stroke-width="1.8" stroke-linecap="round"/>'
  ),
  'gold-loan': svg(
    '<path d="M6 54l4-9h18l4 9z" fill="#D97706"/><path d="M28 54l4-9h18l4 9z" fill="#FBBF24"/><path d="M17 45l4-9h16l4 9z" fill="#FCD34D"/><path d="M49 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#FDE68A"/>'
  ),
  'new-vehicle-sell': svg(
    '<path d="M8 40l4-9c.8-1.9 2.6-3 4.7-3h14.6c2.1 0 3.9 1.1 4.7 3l4 9z" fill="#E2262C"/><rect x="6" y="38" width="36" height="9" rx="4" fill="#DC2626"/><rect x="12" y="31" width="10" height="6" rx="2" fill="#FCA5A5"/><rect x="26" y="31" width="10" height="6" rx="2" fill="#FCA5A5"/><circle cx="15" cy="47" r="4.5" fill="#16215C"/><circle cx="33" cy="47" r="4.5" fill="#16215C"/><circle cx="52" cy="18" r="6" stroke="#16215C" stroke-width="3.5" fill="none"/><path d="M52 24v14m0-4h6m-6 6h4" stroke="#16215C" stroke-width="3.5" stroke-linecap="round"/>'
  ),
  'used-vehicle-sell': svg(
    '<path d="M6 40l4-9c.8-1.9 2.6-3 4.7-3h14.6c2.1 0 3.9 1.1 4.7 3l4 9z" fill="#16A34A"/><rect x="4" y="38" width="36" height="9" rx="4" fill="#15803D"/><rect x="10" y="31" width="10" height="6" rx="2" fill="#86EFAC"/><rect x="24" y="31" width="10" height="6" rx="2" fill="#86EFAC"/><circle cx="13" cy="47" r="4.5" fill="#16215C"/><circle cx="31" cy="47" r="4.5" fill="#16215C"/><circle cx="50" cy="42" r="10" fill="#1D4ED8"/><path d="M45.5 42l3 3 6-6" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  fd: svg(
    '<rect x="8" y="12" width="38" height="40" rx="6" fill="#475569"/><rect x="13" y="17" width="28" height="30" rx="4" fill="#64748B"/><circle cx="27" cy="32" r="8" fill="#E2E8F0"/><path d="M27 26v12M22.5 29l9 6M31.5 29l-9 6" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/><path d="M46 18h7" stroke="#475569" stroke-width="5" stroke-linecap="round"/><circle cx="52" cy="47" r="7" fill="#FBBF24"/><circle cx="41" cy="51" r="5.5" fill="#FCD34D"/>'
  ),
};
