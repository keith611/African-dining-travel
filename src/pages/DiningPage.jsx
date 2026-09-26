import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function DiningPage({ navigate, onBook }) {
  const [typeFilter, setTypeFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(DINING.map((d) => d.type)))];
  const filtered = typeFilter === "All" ? DINING : DINING.filter((d) => d.type === typeFilter);

  return (
    <div className="page-shell">
      <PageHero eyebrow="Dining" title="The table is part of the itinerary" tone="forest" />
      <section className="section section-sand">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter dining by type">
            {types.map((t) => (
              <button key={t} className={`chip ${typeFilter === t ? "is-active" : ""}`} onClick={() => setTypeFilter(t)}>{t}</button>
            ))}
          </div>
          <div className="listing-grid listing-grid-3">
            {filtered.map((d) => <DiningCard key={d.id} item={d} navigate={navigate} onBook={onBook} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
