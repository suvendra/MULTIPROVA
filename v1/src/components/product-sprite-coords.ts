// Metadata and coordinates for all 27 product icons in /product_icons.png (1466 x 1073)
// 3 rows x 9 columns grid

export interface SpriteCoord {
  col: number; // 0 to 8
  row: number; // 0 to 2
  label: string;
  // Optional fine-tuning adjustments in % of box size if needed
  dx?: number;
  dy?: number;
  scale?: number;
}

export const PRODUCT_SPRITES: Record<string, SpriteCoord> = {
  // Row 1 (col 0 - 8)
  'cibil': { col: 0, row: 0, label: 'Cibil' },
  'insurance': { col: 1, row: 0, label: 'Insurance' },
  'rsa': { col: 2, row: 0, label: 'RSA' },
  'pa': { col: 3, row: 0, label: 'PA Policy' },
  'pa-policy': { col: 3, row: 0, label: 'PA Policy' },
  'claims': { col: 4, row: 0, label: 'Claim Services' },
  'claim-services': { col: 4, row: 0, label: 'Claim Services' },
  'it-returns': { col: 5, row: 0, label: 'IT Returns' },
  'litigation': { col: 6, row: 0, label: 'Litigation' },
  'emi-protect': { col: 7, row: 0, label: 'EMI Protect' },
  'hospicash': { col: 8, row: 0, label: 'Hospicash' },

  // Row 2 (col 0 - 8)
  'travel': { col: 0, row: 1, label: 'Travel' },
  'critical-care': { col: 1, row: 1, label: 'Critical Care' },
  'feat-health': { col: 1, row: 1, label: 'Health Insurance' },
  'wellness': { col: 2, row: 1, label: 'Wellness' },
  'inspection': { col: 3, row: 1, label: 'Vehicle Inspection' },
  'inspection-of-vehicles': { col: 3, row: 1, label: 'Vehicle Inspection' },
  'term-plan': { col: 4, row: 1, label: 'Term Plan' },
  'pension': { col: 5, row: 1, label: 'Pension Plan' },
  'pension-plan': { col: 5, row: 1, label: 'Pension Plan' },
  'fastag': { col: 6, row: 1, label: 'Fastag' },
  'mutual-fund': { col: 7, row: 1, label: 'Mutual Funds' },
  'mortgage': { col: 8, row: 1, label: 'Mortgage Loans' },
  'mortgage-loans': { col: 8, row: 1, label: 'Mortgage Loans' },

  // Row 3 (col 0 - 8)
  'education': { col: 0, row: 2, label: 'Education Loan' },
  'education-loan': { col: 0, row: 2, label: 'Education Loan' },
  'personal': { col: 1, row: 2, label: 'Personal Loan' },
  'personal-loan': { col: 1, row: 2, label: 'Personal Loan' },
  'business': { col: 2, row: 2, label: 'Business Loan' },
  'business-loan': { col: 2, row: 2, label: 'Business Loan' },
  'credit-card': { col: 3, row: 2, label: 'Credit Cards' },
  'loans': { col: 4, row: 2, label: 'Loans / Growth' },
  'loan-one-stop': { col: 4, row: 2, label: 'Loans / Growth' },
  'gold': { col: 5, row: 2, label: 'Gold Loan' },
  'gold-loan': { col: 5, row: 2, label: 'Gold Loan' },
  'new-vehicle': { col: 6, row: 2, label: 'New Vehicle' },
  'new-vehicle-sell': { col: 6, row: 2, label: 'New Vehicle' },
  'used-vehicle': { col: 7, row: 2, label: 'Used Vehicle' },
  'used-vehicle-sell': { col: 7, row: 2, label: 'Used Vehicle' },
  'fd': { col: 8, row: 2, label: 'Fixed Deposits' },
};

// Row top offsets in percentage of icon box size
export const ROW_OFFSETS = [
  0,  // Row 0
  100, // Row 1
  200, // Row 2
];

export function getSpriteInfo(name: string) {
  const coord = PRODUCT_SPRITES[name];
  if (!coord) return null;

  const leftPercent = -(coord.col * 100 + (coord.dx ?? 0));
  const topPercent = -(ROW_OFFSETS[coord.row] + (coord.dy ?? 0));
  const scale = coord.scale ?? 1;

  return {
    ...coord,
    leftPercent,
    topPercent,
    scale,
  };
}
