export const SITE_CONFIG = {
    business: {
        name: "Africa Dining & Travel Guide",
        lineOne: "AFRICA DINING",
        lineTwo: "& TRAVEL GUIDE",
        monogram: "A",
    },

    contact: {
        phone: "+254 710 280000",
        email: "africadining1@gmail.com",
        whatsappNumber: "254710280000",
        address: "",
    },

    social: {
        instagram:
            "https://www.instagram.com/africadining_?stkn=MXhwcXd3a2I0czg0Zg==",
        facebook:
            "https://www.facebook.com/profile.php?id=61580357032854&mibextid=ZbWKwL",
        tiktok: "https://vm.tiktok.com/ZS9SRBGHbDMYy-KOqbn/",
    },

    BOOKING_BACKEND_CONNECTED: false,
};

export function telHref(phone) {
    return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null;
}

export function mailHref(email) {
    return email ? `mailto:${email}` : null;
}

export function waHref(number) {
    return number ? `https://wa.me/${number}` : null;
}

export const NAV_LINKS = [
    { label: "Home", page: "home" },
    { label: "Destinations", page: "destinations" },
    { label: "Experiences", page: "experiences" },
    { label: "Dining", page: "dining" },
    { label: "Travel Guide", page: "guide" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
];

export const PAGE_META = {
    home: {
        title: "Africa Dining & Travel Guide — African Travel, Safaris & Dining",
        desc: "Curated African journeys across Mombasa, Nairobi, the Maasai Mara, Zanzibar and Cape Town — destinations, experiences and dining, planned by people who've been there.",
    },
    destinations: {
        title: "Destinations — Africa Dining & Travel Guide",
        desc: "Explore our African destinations: Mombasa, Nairobi, Diani, Maasai Mara, Zanzibar, Tanzania, Victoria Falls, Botswana and South Africa.",
    },
    experiences: {
        title: "Experiences — Africa Dining & Travel Guide",
        desc: "Book curated safaris, dhow cruises, balloon flights and cultural experiences across East and Southern Africa.",
    },
    dining: {
        title: "Dining — Africa Dining & Travel Guide",
        desc: "Swahili seafood, chef-led tasting rooms and farm lunches — dining experiences across our destinations.",
    },
    guide: {
        title: "Travel Guide — Africa Dining & Travel Guide",
        desc: "Destination notes, seasonal advice and dining recommendations from our travel guide.",
    },
    services: {
        title: "Our Services — Africa Dining & Travel Guide",
        desc: "Historical, adventure, cultural, professional and specialised guide services for your trip.",
    },
    service: {
        title: "Our Services — Africa Dining & Travel Guide",
        desc: "Guide services for how you like to explore.",
    },
    gallery: {
        title: "Gallery — Africa Dining & Travel Guide",
        desc: "Photography from across our African destinations.",
    },
    about: {
        title: "About — Africa Dining & Travel Guide",
        desc: "Who plans your journey, and why.",
    },
    contact: {
        title: "Contact — Africa Dining & Travel Guide",
        desc: "Get in touch to start planning your trip.",
    },
};