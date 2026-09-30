export const SITE_CONFIG = {
  business: {
    name: "Africa Dining & Travel Guide",
    // Short line + monogram used in the compact navbar/footer logo lockup.
    lineOne: "AFRICA DINING",
    lineTwo: "& TRAVEL GUIDE",
    monogram: "A",
  },
  contact: {
    phone: "+254 710 280000",
    email: "africadining1@gmail.com",
    whatsappNumber: "254710280000",   // WhatsApp number, digits only (matches the phone above)
    address: "",          // still pending from the client — e.g. "Nyali Road, Mombasa, Kenya"
  },
  social: {
    instagram: "https://www.instagram.com/africadining_?stkn=MXhwcXd3a2I0czg0Zg==",
    facebook: "https://www.facebook.com/profile.php?id=61580357032854&mibextid=ZbWKwL",
    tiktok: "https://vm.tiktok.com/ZS9SRBGHbDMYy-KOqbn/",
  },
  // Flip this to true only once a real booking API exists and is wired up.
  // Until then every "Book" action is a request-only form (see BookingModal).
  BOOKING_BACKEND_CONNECTED: false,
};
export function telHref(phone) { return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null; }
export function mailHref(email) { return email ? `mailto:${email}` : null; }
export function waHref(number) { return number ? `https://wa.me/${number}` : null; }

// Official client-supplied logo, transparent-background PNG (map + wordmark
// only — the "leisure - discoveries" tagline strip is cropped out so the
// mark sits directly on the header's light background without looking like
// a sticker). Rendered with no card/box — see .brand-logo-wrap below.
export const NAV_LINKS = [
  { label: "Home", page: "home" },
  { label: "Destinations", page: "destinations" },
  { label: "Experiences", page: "experiences" },
  { label: "Dining", page: "dining" },
  { label: "Travel Guide", page: "guide" },
  { label: "Accommodation", page: "accommodation" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
];

// Per-page <title> / meta description — basic SEO without a server.
export const PAGE_META = {
  home: { title: "Africa Dining & Travel Guide — African Travel, Safaris & Dining", desc: "Curated African journeys across Mombasa, Nairobi, the Maasai Mara, Zanzibar and Cape Town — destinations, experiences and dining, planned by people who've been there." },
  destinations: { title: "Destinations — Africa Dining & Travel Guide", desc: "Explore our African destinations: Mombasa, Nairobi, Diani, Maasai Mara, Zanzibar, Tanzania, Victoria Falls, Botswana and South Africa." },
  experiences: { title: "Experiences — Africa Dining & Travel Guide", desc: "Book curated safaris, dhow cruises, balloon flights and cultural experiences across East and Southern Africa." },
  dining: { title: "Dining — Africa Dining & Travel Guide", desc: "Swahili seafood, chef-led tasting rooms and farm lunches — dining experiences across our destinations." },
  guide: { title: "Travel Guide — Africa Dining & Travel Guide", desc: "Destination notes, seasonal advice and dining recommendations from our travel guide." },
  services: { title: "Our Services — Africa Dining & Travel Guide", desc: "Historical, adventure, cultural, professional and specialised guide services for your trip." },
  service: { title: "Our Services — Africa Dining & Travel Guide", desc: "Guide services for how you like to explore." },
  gallery: { title: "Gallery — Africa Dining & Travel Guide", desc: "Photography from across our African destinations." },
  accommodation: { title: "Accommodation — Africa Dining & Travel Guide", desc: "Explore photographs of lodges, guest spaces and surrounding grounds." },
  about: { title: "About — Africa Dining & Travel Guide", desc: "Who plans your journey, and why." },
  contact: { title: "Contact — Africa Dining & Travel Guide", desc: "Get in touch to start planning your trip." },
};

/* ----------------------------------------------------------------------------
   2. ROUTER — hash-based, but now synced to the real URL (#/page/param) so
   the browser back/forward buttons work and links are shareable/deep-linkable.
   NOTE ON REACT ROUTER: react-router-dom isn't in this sandbox's available
   package set for live artifacts, so a full migration isn't possible here.
   When this moves into a real build (Vite/Next), swap this hook for
   `useNavigate()`/`useParams()` and the <A> component for <Link> — every
   call site already matches that shape 1:1, so the swap is mechanical.
---------------------------------------------------------------------------- */
