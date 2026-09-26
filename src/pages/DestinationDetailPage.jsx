import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export default function DestinationDetailPage({ id, navigate, onBook }) {
  const destination = DESTINATIONS.find((d) => d.id === id);
  const [activeCategory, setActiveCategory] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => setActiveCategory(0), [id]);

  if (!destination) return <NotFoundPage navigate={navigate} backPage="destinations" label="destination" />;

  const relatedExperiences = EXPERIENCES.filter((e) => e.destinationSlug === destination.id);
  const relatedDining = DINING.filter((d) => d.destinationSlug === destination.id);
  const ICONS = { Waves, Landmark, UtensilsCrossed, Compass, Moon, Building2, TreePine, ShoppingBag, PawPrint };

  return (
    <div className="page-shell">
      <section className="detail-hero">
        <PlaceholderImage label={destination.heroImage} tone={destination.accent} ratio="auto" rounded="rounded-none" className="detail-hero-media" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="detail-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <A page="home" navigate={navigate}>Home</A>
            <ChevronRight size={13} />
            <A page="destinations" navigate={navigate}>Destinations</A>
            <ChevronRight size={13} />
            <span aria-current="page">{destination.name}</span>
          </nav>
          <span className="detail-hero-country"><MapPin size={14} /> {destination.country}</span>
          <h1 className="detail-hero-title">{destination.name}</h1>
          <p className="detail-hero-tagline">{destination.tagline}</p>
        </div>
        <CoordStamp label={destination.coordinates} className="detail-hero-stamp" />
      </section>

      <section className="section section-sand">
        <div className="container detail-intro">
          <Reveal className="detail-intro-copy">
            <Eyebrow tone="teal">About {destination.name}</Eyebrow>
            <p className="detail-intro-text">{destination.description}</p>
            <p className="detail-intro-pullquote">“{destination.quote}”</p>
          </Reveal>
          <Reveal delay={100} className="fact-panel">
            <h3>Quick Facts</h3>
            <dl>
              <div><dt>Country</dt><dd>{destination.country}</dd></div>
              <div><dt>Best time to visit</dt><dd>{destination.bestTime}</dd></div>
              <div><dt>Coordinates</dt><dd>{destination.coordinates}</dd></div>
            </dl>
            <h4>Highlights</h4>
            <ul className="fact-list">
              {destination.highlights.map((h) => (
                <li key={h}><Check size={14} aria-hidden="true" /> {h}</li>
              ))}
            </ul>
            <Button variant="primary" className="fact-panel-cta" onClick={() => onBook({ title: `${destination.name} Itinerary`, destinationName: destination.name, price: "Custom quote" })}>
              Plan a Trip Here
            </Button>
          </Reveal>
        </div>
      </section>

      <ContourDivider tone={destination.accent} />

      <section className="section section-earth">
        <div className="container">
          <SectionIntro eyebrow="What This Destination Offers" title={`Inside ${destination.name}`} tone="gold" />
          <div className="tabs" role="tablist" aria-label={`${destination.name} categories`}>
            {destination.categories.map((cat, i) => {
              const Icon = ICONS[cat.icon] || Compass;
              return (
                <button
                  key={cat.title}
                  role="tab"
                  aria-selected={activeCategory === i}
                  className={`tab ${activeCategory === i ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(i)}
                >
                  <Icon size={16} strokeWidth={1.6} /> {cat.title}
                </button>
              );
            })}
          </div>
          <div className="tab-panel" role="tabpanel">
            <div className="offer-grid">
              {destination.categories[activeCategory].items.map((item) => (
                <Reveal key={item.name} className="offer-card">
                  <PlaceholderImage label={item.image || `${item.name.toUpperCase()} IMAGE`} tone={destination.accent} ratio="4 / 3" />
                  <h4>{item.name}</h4>
                  {item.region && <span className="offer-region"><MapPin size={12} aria-hidden="true" /> {item.region}</span>}
                  <p>{item.blurb}</p>
                  {item.activities && item.activities.length > 0 && (
                    <ul className="offer-tags">
                      {item.activities.map((a) => <li key={a} className="offer-tag">{a}</li>)}
                    </ul>
                  )}
                  {item.linksTo && (
                    <A page="destination" param={item.linksTo} navigate={navigate} className="card-link offer-link">
                      Explore {item.linksToLabel || item.name} <ArrowRight size={14} />
                    </A>
                  )}
                  <Button
                    variant="secondary"
                    className="btn-sm offer-book-btn"
                    onClick={() => onBook({ title: item.linksToLabel || item.name, destinationName: item.linksToLabel || item.name, price: "Custom quote" })}
                  >
                    Book This Destination
                  </Button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedExperiences.length > 0 && (
        <section className="section section-sand">
          <div className="container">
            <SectionIntro eyebrow="Book an Experience" title={`Experiences in ${destination.name}`} tone="teal" />
            <div className="listing-grid listing-grid-3">
              {relatedExperiences.slice(0, 3).map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} navigate={navigate} onBook={onBook} />
              ))}
            </div>
            <Reveal className="section-cta">
              <Button variant="secondary" onClick={() => navigate("experiences")} icon={ArrowRight}>View All Experiences</Button>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section-sand">
        <div className="container">
          <SectionIntro eyebrow="Where to Stay" title={`Accommodation in ${destination.name}`} tone="teal" />
          {destination.stays && destination.stays.length > 0 ? (
            <div className="listing-grid listing-grid-3">
              {destination.stays.map((stay) => (
                <Reveal key={stay.name} className="offer-card">
                  <PlaceholderImage label={stay.image || `${stay.name.toUpperCase()} IMAGE`} tone={destination.accent} ratio="4 / 3" />
                  <h4>{stay.name}</h4>
                  <p>{stay.blurb}</p>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="section-note">Accommodation partners for {destination.name} haven't been confirmed yet — this section will list vetted places to stay once they're finalised.</p>
          )}
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <SectionIntro eyebrow="Dining" title={`Dining in ${destination.name}`} tone="gold" />
          {relatedDining.length > 0 ? (
            <>
              <div className="listing-grid listing-grid-3">
                {relatedDining.slice(0, 3).map((d) => (
                  <DiningCard key={d.id} item={d} navigate={navigate} onBook={onBook} />
                ))}
              </div>
              <Reveal className="section-cta">
                <Button variant="secondary" onClick={() => navigate("dining")} icon={ArrowRight}>View All Dining</Button>
              </Reveal>
            </>
          ) : (
            <>
              <p className="section-note">Destination-specific dining recommendations for {destination.name} are still being put together.</p>
              <Reveal className="section-cta">
                <Button variant="secondary" onClick={() => navigate("dining")} icon={ArrowRight}>Browse All Dining</Button>
              </Reveal>
            </>
          )}
        </div>
      </section>

      <section className="section section-earth">
        <div className="container">
          <SectionIntro eyebrow="Gallery" title={`${destination.name} in frame`} tone="gold" />
          <div className="gallery-strip">
            {destination.gallery.map((label, i) => (
              <button key={i} className="gallery-strip-item" onClick={() => setLightbox({ label, tone: destination.accent })} aria-label={`Open image: ${label}`}>
                <PlaceholderImage label={label} tone={destination.accent} ratio="4 / 3" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-forest cta-banner">
        <div className="container">
          <Reveal className="cta-banner-inner">
            <h2 className="section-title">Ready to experience {destination.name}?</h2>
            <p>We'll shape the details — dates, pace and dining — around how you like to travel.</p>
            <div className="hero-ctas">
              <Button variant="primary" icon={ArrowRight} onClick={() => onBook({ title: `${destination.name} Itinerary`, destinationName: destination.name, price: "Custom quote" })}>Book Now</Button>
              <Button variant="ghost" onClick={() => navigate("contact")}>Talk to Us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}
