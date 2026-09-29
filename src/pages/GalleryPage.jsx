import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function GalleryPage() {
  const filters = ["All", ...VISIBLE_DESTINATIONS.map((d) => d.name)];
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = GALLERY.filter((g) => filter === "All" || DESTINATIONS.find((d) => d.id === g.destinationSlug)?.name === filter);

  const openAt = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const step = (dir) => setLightboxIndex((i) => (i === null ? null : (i + dir + filtered.length) % filtered.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filtered.length]);

  return (
    <div className="page-shell">
      <PageHero eyebrow="Gallery" title="Africa, in frame" tone="forest" />
      <section className="section section-sand">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter gallery by destination">
            {filters.map((f) => (
              <button key={f} className={`chip ${filter === f ? "is-active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="masonry">
            {filtered.map((g, i) => {
              const destination = DESTINATIONS.find((d) => d.id === g.destinationSlug);
              return (
                <button key={g.id} className={`masonry-item ${g.tall ? "is-tall" : ""}`} onClick={() => openAt(i)} aria-label={`Open image: ${g.label}`}>
                  <PlaceholderImage label={g.label} tone={destination?.accent || "sand"} ratio={g.ratio || (g.tall ? "3 / 4.4" : "4 / 3")} fit="natural" />
                </button>
              );
            })}
          </div>
          {filtered.length === 0 && <p className="empty-state">No images for that destination yet.</p>}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="modal-backdrop lightbox-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="lightbox-frame" role="dialog" aria-modal="true" aria-label={filtered[lightboxIndex].label}>
            <button className="modal-close" onClick={close} aria-label="Close image"><X size={20} /></button>
            <button className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label="Previous image"><ChevronLeft size={22} /></button>
            <PlaceholderImage
              label={filtered[lightboxIndex].label}
              tone={DESTINATIONS.find((d) => d.id === filtered[lightboxIndex].destinationSlug)?.accent || "sand"}
              ratio="16 / 10"
              className="lightbox-media"
            />
            <button className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label="Next image"><ChevronRight size={22} /></button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------------------
   14. PAGE: ABOUT
---------------------------------------------------------------------------- */

// ── DEMO CONTENT ─────────────────────────────────────────────────────────
// These team names/roles were not supplied by the client. Set TEAM to []
// to hide the section (already handled below) until real bios exist.
