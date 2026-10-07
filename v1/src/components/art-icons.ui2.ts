// Colorful placeholder art icons — hero features, goal chips & misc.
// Placeholder drawings; real assets in src/assets/icons/<name>.png take over
// automatically via ArtIcon.astro.

const svg = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${inner}</svg>`;

export const uiArt2: Record<string, string> = {
  'hero-services': svg(
    '<circle cx="32" cy="32" r="22" fill="#2E6BE6"/><path d="M32 10l4 3 5-1 2 5 5 2-1 5 3 4-3 4 1 5-5 2-2 5-5-1-4 3-4-3-5 1-2-5-5-2 1-5-3-4 3-4-1-5 5-2 2-5 5 1z" fill="none"/><text x="32" y="39" text-anchor="middle" font-family="Arial, sans-serif" font-size="17" font-weight="bold" fill="#fff">27+</text>'
  ),
  'hero-digital': svg(
    '<rect x="18" y="6" width="28" height="52" rx="7" fill="#2FA84F"/><rect x="23" y="12" width="18" height="36" rx="3" fill="#EAF9EF"/><path d="M26 30l4 4 8-9" stroke="#2FA84F" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="53" r="2.5" fill="#EAF9EF"/>'
  ),
  'hero-support': svg(
    '<circle cx="32" cy="26" r="10" fill="#F3C29E"/><path d="M20 24a12 12 0 0 1 24 0v3" stroke="#16215C" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="15" y="22" width="7" height="11" rx="3" fill="#E2262C"/><rect x="42" y="22" width="7" height="11" rx="3" fill="#E2262C"/><path d="M45 33v3a7 7 0 0 1-7 7h-3" stroke="#E2262C" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M12 56c1.8-9 9.7-14 20-14s18.2 5 20 14z" fill="#E2262C"/>'
  ),
  'goal-save': svg(
    '<ellipse cx="30" cy="36" rx="20" ry="15" fill="#F9A8D4"/><path d="M18 26c2-3 5-5 8-6" stroke="#FBCFE8" stroke-width="3" stroke-linecap="round"/><rect x="28" y="20" width="8" height="4" rx="2" fill="#DB2777"/><path d="M14 34h-4a3 3 0 0 0 0 6h5" fill="#F9A8D4"/><path d="M22 51v5m16-5v5" stroke="#DB2777" stroke-width="4" stroke-linecap="round"/><circle cx="34" cy="36" r="7" fill="#FBBF24"/>'
  ),
  'goal-protect': svg(
    '<path d="M32 6l19 6.5V25c0 13-8 22.8-19 27C20.9 47.8 13 38 13 25V12.5z" fill="#16215C"/><path d="M24 31l6 6 11-12" stroke="#7DB5F5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'goal-grow': svg(
    '<rect x="12" y="34" width="9" height="18" rx="2.5" fill="#86D99B"/><rect x="27" y="26" width="9" height="26" rx="2.5" fill="#3FBF61"/><rect x="42" y="18" width="9" height="34" rx="2.5" fill="#2FA84F"/><path d="M10 26 25 15l8 5L49 8" stroke="#16215C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M43 7h7v7" stroke="#16215C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  'goal-achieve': svg(
    '<path d="M22 10h20v12a10 10 0 0 1-20 0z" fill="#FBBF24"/><path d="M22 13h-7a7 7 0 0 0 7 10m20-10h7a7 7 0 0 1-7 10" stroke="#F59E0B" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M30 31h4v8h-4z" fill="#F59E0B"/><rect x="24" y="39" width="16" height="6" rx="2" fill="#D97706"/><rect x="20" y="45" width="24" height="7" rx="2.5" fill="#FBBF24"/><path d="M32 13l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" fill="#fff"/>'
  ),
  'feat-health': svg(
    '<path d="M32 5l20 7v14c0 14-8.5 24.5-20 29C20.5 50.5 12 40 12 26V12z" fill="#E2262C"/><path d="M28 18h8v7h7v8h-7v7h-8v-7h-7v-8h7z" fill="#fff"/>'
  ),
  advisor: svg(
    '<circle cx="32" cy="32" r="30" fill="#CDE3FF"/><circle cx="32" cy="27" r="10" fill="#F3C29E"/><path d="M22 25a10 10 0 0 1 20 0" stroke="#16215C" stroke-width="4"/><path d="M22 25v3" stroke="#16215C" stroke-width="4" stroke-linecap="round"/><rect x="18" y="24" width="6" height="9" rx="2.5" fill="#16215C"/><rect x="40" y="24" width="6" height="9" rx="2.5" fill="#16215C"/><path d="M43 33v2a6 6 0 0 1-6 6h-3" stroke="#16215C" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M13 56c2.2-9.5 9.8-14.5 19-14.5S48.8 46.5 51 56z" fill="#1D4ED8"/>'
  ),
  'headset-support': svg(
    '<path d="M14 34v-2a18 18 0 0 1 36 0v2" stroke="#1D4ED8" stroke-width="4.5" fill="none" stroke-linecap="round"/><rect x="8" y="32" width="11" height="16" rx="5" fill="#2E6BE6"/><rect x="45" y="32" width="11" height="16" rx="5" fill="#2E6BE6"/><path d="M50 48v3a8 8 0 0 1-8 8h-6" stroke="#1D4ED8" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="32" cy="59" r="4" fill="#E2262C"/>'
  ),
  'robot-wave': svg(
    '<circle cx="30" cy="30" r="26" fill="#fff"/><circle cx="30" cy="30" r="20" fill="#16215C"/><circle cx="23" cy="27" r="3.5" fill="#fff"/><circle cx="37" cy="27" r="3.5" fill="#fff"/><path d="M23 37q7 5 14 0" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="46" y="38" width="14" height="14" rx="4" fill="#2E6BE6"/><text x="53" y="48.5" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#fff">AI</text>'
  ),
};
