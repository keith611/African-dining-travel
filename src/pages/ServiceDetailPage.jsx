import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function ServiceDetailPage({ id, navigate }) {
  const service = SERVICES.find((s) => s.slug === id);
  if (!service) return <NotFoundPage navigate={navigate} backPage="services" label="service" />;

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <PlaceholderImage label={service.image} tone="gold" ratio="auto" rounded="rounded-none" className="detail-hero-media" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="detail-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <A page="home" navigate={navigate}>Home</A>
            <ChevronRight size={13} />
            <A page="services" navigate={navigate}>Our Services</A>
            <ChevronRight size={13} />
            <span aria-current="page">{service.name}</span>
          </nav>
          <h1 className="detail-hero-title">{service.name}</h1>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container container-narrow legal-copy">
          {service.heading && <h2 className="section-title">{service.heading}</h2>}
          <p className="detail-intro-text">{service.blurb}</p>
          <Reveal className="section-cta" style={{ textAlign: "left", marginTop: 32 }}>
            <Button variant="secondary" onClick={() => navigate("services")}>
              <ChevronLeft size={16} style={{ marginRight: 6 }} /> Back to Services
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   13. PAGE: GALLERY
---------------------------------------------------------------------------- */
