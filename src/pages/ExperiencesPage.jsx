import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function ExperiencesPage({ navigate, onBook, initialDestination }) {
  const [destFilter, setDestFilter] = useState(initialDestination || "All");
  const categories = ["All", ...Array.from(new Set(EXPERIENCES.map((e) => e.category)))];
  const [catFilter, setCatFilter] = useState("All");

  useEffect(() => { if (initialDestination) setDestFilter(initialDestination); }, [initialDestination]);

  const selectedDestination = DESTINATIONS.find((destination) => destination.id === destFilter);
  const filtered = EXPERIENCES.filter((experience) => {
    const experienceDestination = DESTINATIONS.find((destination) => destination.id === experience.destinationSlug);
    const matchesDestination =
      destFilter === "All" ||
      experience.destinationSlug === destFilter ||
      (selectedDestination && !selectedDestination.hidden && experienceDestination?.country === selectedDestination.country);

    return matchesDestination && (catFilter === "All" || experience.category === catFilter);
  });

  return (
    <div className="page-shell">
      <PageHero eyebrow="Experiences" title="Activities worth building a day around" tone="forest" />
      <section className="section section-sand">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter experiences by destination">
            <button className={`chip ${destFilter === "All" ? "is-active" : ""}`} onClick={() => setDestFilter("All")}>All Destinations</button>
            {VISIBLE_DESTINATIONS.map((d) => (
              <button key={d.id} className={`chip ${destFilter === d.id ? "is-active" : ""}`} onClick={() => setDestFilter(d.id)}>{d.name}</button>
            ))}
          </div>
          <div className="filter-row filter-row-secondary" role="group" aria-label="Filter experiences by category">
            {categories.map((c) => (
              <button key={c} className={`chip chip-ghost ${catFilter === c ? "is-active" : ""}`} onClick={() => setCatFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="listing-grid listing-grid-3">
            {filtered.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} navigate={navigate} onBook={onBook} />
            ))}
          </div>
          {filtered.length === 0 && <p className="empty-state">No experiences match those filters yet — try clearing one.</p>}
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <SectionIntro eyebrow="How You Travel" title="Group or private safaris" tone="teal" />
          <div className="value-grid value-grid-3">
            <Reveal className="value-card">
              <span className="value-icon"><Users size={22} strokeWidth={1.5} /></span>
              <h3>Group Safaris</h3>
              <p>Scheduled group departures, run with partners including Somak Safaris, Safari Trails and Roy Safaris.</p>
            </Reveal>
            <Reveal delay={80} className="value-card">
              <span className="value-icon"><Compass size={22} strokeWidth={1.5} /></span>
              <h3>Private Safaris</h3>
              <p>A fully tailored itinerary for your own party, at your own pace, with a private vehicle and guide.</p>
            </Reveal>
            <Reveal delay={160} className="value-card">
              <span className="value-icon"><MessageCircle size={22} strokeWidth={1.5} /></span>
              <h3>Not Sure Which Fits?</h3>
              <p>Tell us your dates and group size and we'll recommend the option that suits your trip.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
