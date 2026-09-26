import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function DishDetailPage({ id, navigate, onBook }) {
  const item = DINING.find((d) => d.id === id);
  if (!item) return <NotFoundPage navigate={navigate} backPage="dining" label="dining experience" />;
  const destination = DESTINATIONS.find((d) => d.id === item.destinationSlug);
  const related = DINING.filter((d) => d.id !== item.id).slice(0, 3);

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <PlaceholderImage label={item.image} tone={destination?.accent || "gold"} ratio="auto" rounded="rounded-none" className="detail-hero-media" icon={UtensilsCrossed} />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="detail-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <A page="home" navigate={navigate}>Home</A>
            <ChevronRight size={13} />
            <A page="dining" navigate={navigate}>Dining</A>
            <ChevronRight size={13} />
            <span aria-current="page">{item.name}</span>
          </nav>
          <span className="detail-hero-country"><MapPin size={14} /> {destination?.name}, {destination?.country}</span>
          <h1 className="detail-hero-title">{item.name}</h1>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container detail-split">
          <div className="detail-main">
            <Reveal>
              <Eyebrow tone="teal">{item.type}</Eyebrow>
              <h2 className="section-title">About this experience</h2>
              <p className="detail-intro-text">{item.description}</p>
            </Reveal>
            <Reveal delay={80} className="detail-block">
              <h3>Menu Highlights</h3>
              <ul className="fact-list">
                {item.menuHighlights.map((m) => <li key={m}><Check size={14} /> {m}</li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={60} className="booking-sidebar">
            <CoordStamp label={destination?.coordinates || ""} className="booking-sidebar-stamp" />
            <p className="booking-sidebar-price">{item.priceRange} <span className="price-note">price range</span></p>
            <dl className="booking-sidebar-facts">
              <div><dt><MapPin size={14} /> Location</dt><dd>{destination?.name}</dd></div>
              <div><dt><UtensilsCrossed size={14} /> Type</dt><dd>{item.type}</dd></div>
            </dl>
            <Button variant="primary" className="booking-sidebar-cta" onClick={() => onBook(item)}>Reserve a Table</Button>
          </Reveal>
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <SectionIntro eyebrow="Also Worth a Booking" title="More dining experiences" tone="gold" />
          <div className="listing-grid listing-grid-3">
            {related.map((d) => <DiningCard key={d.id} item={d} navigate={navigate} onBook={onBook} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   12. PAGE: TRAVEL GUIDE
---------------------------------------------------------------------------- */
