import React, { useEffect, useMemo, useState, useCallback } from "react";
import { SITE_CONFIG, waHref } from "../config/site.js";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function TravelGuidePage({ navigate }) {
  const [downloadRequested, setDownloadRequested] = useState(false);
  return (
    <div className="page-shell">
      <PageHero eyebrow="Travel Guide" title="The Africa Dining & Travel Guide" sub="Destination notes, seasonal advice, and the dining rooms worth planning a stop around." tone="forest" />

      <section className="section section-sand">
        <div className="container guide-hero">
          <Reveal className="guide-hero-visual">
            <PlaceholderImage label="TRAVEL GUIDE FEATURE IMAGE" tone="gold" ratio="3 / 2" />
          </Reveal>
          <Reveal delay={80} className="guide-hero-copy">
            <Eyebrow tone="teal">Featured Guide</Eyebrow>
            <h2 className="section-title">East &amp; Southern Africa Guide</h2>
            <p>
              Our field guide to the region — destination notes, vetted experiences and
              dining rooms, and a season-by-season planning calendar. Available as a digital
              download, with printed copies at partner hotels.
            </p>
            <div className="hero-ctas">
              <Button variant="primary" icon={Download} onClick={() => setDownloadRequested(true)}>
                {downloadRequested ? "Download link sent" : "Get the Digital Guide"}
              </Button>
              <Button variant="secondary" onClick={() => navigate("contact")}>Request a Printed Copy</Button>
            </div>
            {downloadRequested && <p className="booking-note">Downloads open shortly — this is a placeholder while the guide library is being finalised.</p>}
          </Reveal>
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <SectionIntro eyebrow="From the Guide" title="Recent entries" tone="gold" />
          <div className="listing-grid listing-grid-2">
            {TRAVEL_GUIDES.map((g) => (
              <Reveal key={g.id} className="guide-article">
                <PlaceholderImage label={`${g.title.toUpperCase()} — COVER IMAGE`} tone="teal" ratio="16 / 10" />
                <span className="eyebrow eyebrow-gold">{g.category}</span>
                <h3>{g.title}</h3>
                <p>{g.excerpt}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container container-narrow" style={{ textAlign: "center" }}>
          <Reveal>
            <Eyebrow tone="teal">Guided Travel</Eyebrow>
            <h2 className="section-title">Prefer to travel with a guide?</h2>
            <p className="section-lede" style={{ margin: "14px auto 0" }}>
              From historical context to hands-on adventure, our guide services are built around how you like to explore.
            </p>
            <div className="hero-ctas" style={{ justifyContent: "center", marginTop: 28 }}>
              <Button variant="primary" icon={ArrowRight} onClick={() => navigate("services")}>Our Services</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container guide-social">
          <Reveal className="guide-social-inner">
            <div className="qr-placeholder qr-placeholder-dark" role="img" aria-label="QR code placeholder linking to the digital guide">
              <div className="qr-grid">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className={i % 3 === 0 ? "on" : ""} />
                ))}
              </div>
              <span>Scan to open the guide</span>
            </div>
            <div>
              <h3 className="section-title">Follow along between guide editions</h3>
              <div className="footer-social footer-social-light">
                {SITE_CONFIG.social.instagram && <a href={SITE_CONFIG.social.instagram} aria-label={`${SITE_CONFIG.business.name} on Instagram`} target="_blank" rel="noreferrer noopener"><Instagram size={20} /></a>}
                {SITE_CONFIG.social.facebook && <a href={SITE_CONFIG.social.facebook} aria-label={`${SITE_CONFIG.business.name} on Facebook`} target="_blank" rel="noreferrer noopener"><Facebook size={20} /></a>}
                {waHref(SITE_CONFIG.contact.whatsappNumber) && <a href={waHref(SITE_CONFIG.contact.whatsappNumber)} aria-label={`${SITE_CONFIG.business.name} on WhatsApp`} target="_blank" rel="noreferrer noopener"><MessageCircle size={20} /></a>}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   12b. PAGES: OUR SERVICES (list + detail)
---------------------------------------------------------------------------- */
