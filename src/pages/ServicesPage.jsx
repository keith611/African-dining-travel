import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function ServicesPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Travel Guide" title="Our Services" sub="Guide services for how you like to explore — pick the style that fits your trip." tone="forest" />
      <section className="section section-sand">
        <div className="container">
          <div className="listing-grid listing-grid-3">
            {SERVICES.map((s) => (
              <Reveal key={s.slug} className="exp-card">
                <button className="exp-card-media-btn" onClick={() => navigate("service", s.slug)} aria-label={`View ${s.name}`}>
                  <PlaceholderImage label={s.image} tone="gold" ratio="4 / 3" className="exp-card-media" />
                </button>
                <div className="exp-card-body">
                  <h3><A page="service" param={s.slug} navigate={navigate}>{s.name}</A></h3>
                  <p>{s.blurb}</p>
                  <div className="exp-card-footer">
                    <A page="service" param={s.slug} navigate={navigate} className="card-link">Learn More <ArrowRight size={15} /></A>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
