import React, { useCallback, useState } from "react";
import { useRouter } from "./hooks/useRouter.js";
import { GlobalStyles } from "./components/GlobalStyles.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppFloat } from "./components/WhatsAppFloat.jsx";
import { BookingModal } from "./components/BookingModal.jsx";
import HomePage from "./pages/HomePage.jsx";
import DestinationsPage from "./pages/DestinationsPage.jsx";
import DestinationDetailPage from "./pages/DestinationDetailPage.jsx";
import ExperiencesPage from "./pages/ExperiencesPage.jsx";
import ExperienceDetailPage from "./pages/ExperienceDetailPage.jsx";
import DiningPage from "./pages/DiningPage.jsx";
import DishDetailPage from "./pages/DishDetailPage.jsx";
import TravelGuidePage from "./pages/TravelGuidePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import AccommodationPage from "./pages/AccommodationPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { LegalPage, TermsPage, NotFoundPage } from "./pages/SimplePages.jsx";

export default function App() {
  const { route, navigate } = useRouter();
  const [bookingItem, setBookingItem] = useState(null);
  const handleBook = useCallback((item) => setBookingItem(item), []);
  const closeBooking = useCallback(() => setBookingItem(null), []);

  let page;
  switch (route.page) {
    case "home": page = <HomePage navigate={navigate} onBook={handleBook} />; break;
    case "destinations": page = <DestinationsPage navigate={navigate} />; break;
    case "destination": page = <DestinationDetailPage id={route.param} navigate={navigate} onBook={handleBook} />; break;
    case "experiences": page = <ExperiencesPage navigate={navigate} onBook={handleBook} initialDestination={route.param} />; break;
    case "experience": page = <ExperienceDetailPage id={route.param} navigate={navigate} onBook={handleBook} />; break;
    case "dining": page = <DiningPage navigate={navigate} onBook={handleBook} />; break;
    case "dish": page = <DishDetailPage id={route.param} navigate={navigate} onBook={handleBook} />; break;
    case "guide": page = <TravelGuidePage navigate={navigate} />; break;
    case "services": page = <ServicesPage navigate={navigate} />; break;
    case "service": page = <ServiceDetailPage id={route.param} navigate={navigate} />; break;
    case "gallery": page = <GalleryPage />; break;
    case "accommodation": page = <AccommodationPage />; break;
    case "about": page = <AboutPage navigate={navigate} />; break;
    case "contact": page = <ContactPage />; break;
    case "privacy": page = <LegalPage title="Privacy Policy" />; break;
    case "terms": page = <TermsPage navigate={navigate} />; break;
    default: page = <NotFoundPage navigate={navigate} />;
  }

  return (
    <div className="app-root">
      <GlobalStyles />
      <Navbar route={route} navigate={navigate} />
      <main>{page}</main>
      <Footer navigate={navigate} />
      <WhatsAppFloat />
      <BookingModal item={bookingItem} onClose={closeBooking} />
    </div>
  );
}
