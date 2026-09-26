import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function AboutPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="About Us" title="Built by people who travel this ground themselves" tone="forest" />

      <section className="section section-sand">
        <div className="container detail-intro">
          <Reveal className="detail-intro-copy">
            <Eyebrow tone="teal">Our Story</Eyebrow>
            <DemoContentNote>Sample company story — replace with the client's real founding story</DemoContentNote>
            <p className="detail-intro-text">
              Africa Dining & Travel Guide started as a shared notebook between three friends who kept getting asked
              the same question: "where should I actually go?" What began as informal
              itineraries for visiting friends became a studio dedicated to a simple idea —
              that a trip through Africa should be planned with the same care as the
              destinations themselves deserve.
            </p>
            <p className="detail-intro-text">
              Today, we plan journeys and dining experiences across six destinations, with
              local specialists on the ground in each one. We keep our roster of experiences
              deliberately curated rather than exhaustive — everything on this site is here
              because someone on our team has done it, eaten it, or sailed it themselves.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderImage label="FOUNDING TEAM ON LOCATION" tone="gold" ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <div className="value-grid value-grid-3">
            <Reveal className="value-card">
              <span className="value-icon"><Compass size={22} strokeWidth={1.5} /></span>
              <h3>Mission</h3>
              <p>To make Africa's destinations, culture and food accessible through itineraries built on real, first-hand expertise.</p>
            </Reveal>
            <Reveal delay={80} className="value-card">
              <span className="value-icon"><Globe size={22} strokeWidth={1.5} /></span>
              <h3>Vision</h3>
              <p>A continent explored on its own terms — where every visitor leaves with a genuine sense of place, not a checklist.</p>
            </Reveal>
            <Reveal delay={160} className="value-card">
              <span className="value-icon"><Sparkles size={22} strokeWidth={1.5} /></span>
              <h3>What's Different</h3>
              <p>We curate rather than catalogue — a shorter list of experiences, each one vetted by someone on our team.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {TEAM.length > 0 && (
        <section className="section section-sand">
          <div className="container">
            <SectionIntro eyebrow="The Team" title="A small studio, on the ground" tone="gold" />
            {TEAM_IS_DEMO && <DemoContentNote>Sample team roster — replace with real names, roles and photos</DemoContentNote>}
            <div className="team-grid">
              {TEAM.map((m) => (
                <Reveal key={m.name} className="team-card">
                  <PlaceholderImage label={`${m.name.toUpperCase()} — PORTRAIT`} tone="earth" ratio="1 / 1" rounded="rounded-full" icon={Users} />
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-forest cta-banner">
        <div className="container">
          <Reveal className="cta-banner-inner">
            <h2 className="section-title">Let's build your itinerary together</h2>
            <p>Tell us what draws you to Africa, and we'll take it from there.</p>
            <Button variant="primary" icon={ArrowRight} onClick={() => navigate("contact")}>Get in Touch</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   15. PAGE: CONTACT
---------------------------------------------------------------------------- */
