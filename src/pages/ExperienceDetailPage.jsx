import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function ExperienceDetailPage({ id, navigate, onBook }) {
  const experience = EXPERIENCES.find((e) => e.id === id);
  if (!experience) return <NotFoundPage navigate={navigate} backPage="experiences" label="experience" />;

  const destination = DESTINATIONS.find((d) => d.id === experience.destinationSlug);
  const related = EXPERIENCES.filter((e) => e.destinationSlug === experience.destinationSlug && e.id !== experience.id).slice(0, 3);

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <PlaceholderImage label={experience.image} tone={destination?.accent || "gold"} ratio="auto" rounded="rounded-none" className="detail-hero-media" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="detail-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <A page="home" navigate={navigate}>Home</A>
            <ChevronRight size={13} />
            <A page="experiences" navigate={navigate}>Experiences</A>
            <ChevronRight size={13} />
            <span aria-current="page">{experience.title}</span>
          </nav>
          <span className="detail-hero-country"><MapPin size={14} /> {destination?.name}, {destination?.country}</span>
          <h1 className="detail-hero-title">{experience.title}</h1>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container detail-split">
          <div className="detail-main">
            <Reveal>
              <Eyebrow tone="teal">{experience.category}</Eyebrow>
              <h2 className="section-title">Overview</h2>
              <p className="detail-intro-text">{experience.description}</p>
            </Reveal>

            <Reveal delay={80} className="detail-block">
              <h3>Highlights</h3>
              <ul className="fact-list">
                {experience.highlights.map((h) => <li key={h}><Check size={14} /> {h}</li>)}
              </ul>
            </Reveal>

            <Reveal delay={120} className="detail-block">
              <h3>What's Included</h3>
              <ul className="fact-list">
                {experience.included.map((h) => <li key={h}><Check size={14} /> {h}</li>)}
              </ul>
            </Reveal>

            <Reveal delay={160} className="detail-block">
              <h3>Gallery</h3>
              <div className="gallery-strip gallery-strip-3">
                {experience.gallery.map((label, i) => (
                  <PlaceholderImage key={i} label={label} tone={destination?.accent || "gold"} ratio="4 / 3" />
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={60} className="booking-sidebar">
            <CoordStamp label={destination?.coordinates || ""} className="booking-sidebar-stamp" />
            <p className="booking-sidebar-price">{experience.price}</p>
            <dl className="booking-sidebar-facts">
              <div><dt><Clock size={14} /> Duration</dt><dd>{experience.duration}</dd></div>
              <div><dt><Users size={14} /> Group size</dt><dd>{experience.groupSize}</dd></div>
              <div><dt><MapPin size={14} /> Location</dt><dd>{destination?.name}</dd></div>
            </dl>
            <Button variant="primary" className="booking-sidebar-cta" onClick={() => onBook(experience)}>Book Now</Button>
            <p className="booking-sidebar-note">Free changes up to 48 hours before your date.</p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-earth">
          <div className="container">
            <SectionIntro eyebrow="More in the Area" title={`Also in ${destination?.name}`} tone="gold" />
            <div className="listing-grid listing-grid-3">
              {related.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} navigate={navigate} onBook={onBook} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------------
   11. PAGE: DINING (listing + detail)
---------------------------------------------------------------------------- */
