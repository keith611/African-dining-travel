import { PARTNER_LOGO_POSITIVE_IMPACT_TOURISM } from "./images.js";

export function placeholderPartnerLogo(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="100%" height="100%" fill="#F7F3EA"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" fill="#6b7268">${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// TODO: replace placeholder entries with real partner name / logo / url.
// - "logo": swap the placeholderPartnerLogo(...) call for a real
//   PARTNER_LOGO_* constant (same pattern as the first entry above).
// - "url": replace with the partner's real website.
export const PARTNERS = [
  {
    name: "Positive Impact Tourism",
    logo: PARTNER_LOGO_POSITIVE_IMPACT_TOURISM,
    url: "https://example.com", // TODO: replace with this partner's real website
  },
  {
    name: "Partner 2",
    logo: placeholderPartnerLogo("Partner 2 Logo"),
    url: "https://example.com", // TODO: replace with this partner's real website
  },
  {
    name: "Partner 3",
    logo: placeholderPartnerLogo("Partner 3 Logo"),
    url: "https://example.com", // TODO: replace with this partner's real website
  },
];

/* ----------------------------------------------------------------------------
   0b. IMAGE LIBRARY — real client photos, keyed by the exact placeholder
   `label` they replace. This is the ONLY place real photography is wired
   in. Each photo is stored ONCE as a data URI below and referenced by
   variable wherever it's reused, so the same file isn't duplicated in the
   bundle for every label it appears under. To add more photos: encode the
   new one the same way, give it a PHOTO_* constant, and map it to as many
   labels as it genuinely represents in IMAGE_LIBRARY. Once this leaves the
   artifact sandbox, swap these data URIs for plain hosted "https://..."
   URLs — PlaceholderImage doesn't care which.
---------------------------------------------------------------------------- */
