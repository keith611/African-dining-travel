import React, { useEffect, useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Check,
  Compass,
  UtensilsCrossed,
  Users,
  Sparkles,
  ImageIcon,
} from "lucide-react";
import { PARTNERS } from "../data/partners.js";
import { TESTIMONIALS, TESTIMONIALS_IS_DEMO } from "../data/testimonials.js";
import { VISIBLE_DESTINATIONS, DESTINATIONS } from "../data/destinations.js";
import { EXPERIENCES } from "../data/experiences.js";
import { DINING } from "../data/dining.js";
import { SERVICES } from "../data/services.js";
import {
  Reveal,
  PlaceholderImage,
  SectionIntro,
  DemoContentNote,
  Eyebrow,
  CoordStamp,
  A,
  Button,
} from "../components/primitives.jsx";
import { DestinationCard, ExperienceCard, DiningCard } from "../components/Cards.jsx";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (TESTIMONIALS.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="section section-sand">
      <div className="container container-narrow">
        <Reveal className="testimonial">
          {TESTIMONIALS_IS_DEMO && <DemoContentNote>Sample testimonial — replace with real client reviews</DemoContentNote>}
          <Quote size={28} className="testimonial-mark" aria-hidden="true" />
          <p className="testimonial-quote">{TESTIMONIALS[index].quote}</p>
          <p className="testimonial-name">
            {TESTIMONIALS[index].name} <span>· {TESTIMONIALS[index].context}</span>
          </p>
          {TESTIMONIALS.length > 1 && (
            <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={i === index ? "is-active" : ""}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className="section section-sand">
      <div className="container">
        <SectionIntro eyebrow="Trusted Together" title="Our Partners" tone="teal" />
        <div className="partners-grid">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card"
              aria-label={`Visit ${p.name}'s website (opens in a new tab)`}
            >
              <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ navigate, onBook }) {
  const featured = VISIBLE_DESTINATIONS[0];
  const rest = VISIBLE_DESTINATIONS.slice(1, 6);

  return (
    <>
      <section className="hero">
        <PlaceholderImage label="AFRICAN COASTLINE AT GOLDEN HOUR — HERO IMAGE" tone="forest" ratio="auto" className="hero-media" rounded="rounded-none" icon={Compass} />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="hero-title">Discover Africa,<br />one honest itinerary at a time.</h1>
          <p className="hero-sub">
            Extraordinary destinations, unforgettable journeys, and the cultures and kitchens
            that make each corner of Africa distinct — planned by people who've actually been there.
          </p>
          <div className="hero-ctas">
            <Button variant="primary" onClick={() => navigate("destinations")} icon={ArrowRight}>Explore Destinations</Button>
            <Button variant="ghost" onClick={() => navigate("contact")}>Plan Your Journey</Button>
          </div>
        </div>
        <span className="hero-scroll-cue" aria-hidden="true"><ChevronDown size={20} /></span>
      </section>

      <div className="coord-marquee" aria-hidden="true">
        <div className="coord-marquee-track">
          {[...VISIBLE_DESTINATIONS, ...VISIBLE_DESTINATIONS].map((d, i) => (
            <span key={i} className="coord-marquee-item">
              {d.name} <em>{d.coordinates}</em>
            </span>
          ))}
        </div>
      </div>

      <section className="section section-sand">
        <div className="container container-narrow">
          <Reveal className="thesis">
            <Eyebrow tone="teal">Our Approach</Eyebrow>
            <p className="thesis-quote">
              “Africa isn't one trip. It's a coastline, a savannah, a spice market and a chef's
              table — and it deserves an itinerary built around what's actually there, not a
              template stretched to fit.”
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-earth" id="destinations-teaser">
        <div className="container">
          <SectionIntro
            eyebrow="Explore Destinations"
            title="Six ways into Africa, and counting"
            lede="Each destination is built as its own field guide — what to see, where to eat, and what to do, curated rather than exhaustive."
            tone="gold"
          />
          <div className="dest-grid">
            <DestinationCard destination={featured} navigate={navigate} featured />
            <div className="dest-grid-side">
              {rest.map((d) => (
                <DestinationCard key={d.id} destination={d} navigate={navigate} />
              ))}
            </div>
          </div>
          <Reveal className="section-cta">
            <Button variant="secondary" onClick={() => navigate("destinations")} icon={ArrowRight}>View All Destinations</Button>
          </Reveal>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <SectionIntro
            eyebrow="Why Us"
            title="Planned like locals, not like a brochure"
            tone="teal"
          />
          <div className="value-grid">
            {[
              { icon: Compass, title: "On-the-ground expertise", body: "Every itinerary is built by people who've walked the routes, not assembled from a catalogue." },
              { icon: UtensilsCrossed, title: "Dining, not an afterthought", body: "Food is treated as a destination in its own right — from street stalls to chef's tables." },
              { icon: Users, title: "Small-group care", body: "Most experiences run in small groups, with guides who adjust the day to the people in it." },
              { icon: Sparkles, title: "Seamless from enquiry to return", body: "One point of contact from your first question to your ride home from the airport." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="value-card">
                <span className="value-icon"><v.icon size={22} strokeWidth={1.5} /></span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <SectionIntro eyebrow="Field Journal" title="A few experiences worth planning around" tone="gold" />
          <div className="journal-scroller">
            {EXPERIENCES.slice(0, 5).map((exp) => {
              const destination = DESTINATIONS.find((d) => d.id === exp.destinationSlug);
              return (
                <Reveal key={exp.id} className="journal-card">
                  <button onClick={() => navigate("experience", exp.id)} aria-label={`View ${exp.title}`} className="journal-card-media-btn">
                    <PlaceholderImage label={exp.image} tone={destination?.accent || "gold"} ratio="3 / 4" className="journal-card-media" />
                    <CoordStamp label={destination?.coordinates || ""} className="journal-card-stamp" />
                  </button>
                  <h3><A page="experience" param={exp.id} navigate={navigate}>{exp.title}</A></h3>
                  <span className="journal-card-loc">{destination?.name}, {destination?.country}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-forest">
        <div className="container">
          <SectionIntro eyebrow="Dining" title="The table is part of the itinerary" tone="gold" align="left" />
          <div className="dine-grid">
            {DINING.slice(0, 3).map((d) => (
              <DiningCard key={d.id} item={d} navigate={navigate} onBook={onBook} />
            ))}
          </div>
          <Reveal className="section-cta">
            <Button variant="secondary" className="btn-on-dark" onClick={() => navigate("dining")} icon={ArrowRight}>Explore Dining</Button>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />

      <section className="section section-earth">
        <div className="container">
          <div className="guide-teaser">
            <Reveal className="guide-teaser-copy">
              <Eyebrow tone="teal">Travel Guide</Eyebrow>
              <h2 className="section-title">The Africa Dining &amp; Travel Guide</h2>
              <p>
                Our field guide to the region — destination notes, seasonal advice and the
                dining rooms worth planning a stop around. Get the digital edition, or scan
                the code at any partner location.
              </p>
              <div className="hero-ctas">
                <Button variant="primary" onClick={() => navigate("guide")} icon={ArrowRight}>Open the Travel Guide</Button>
              </div>
            </Reveal>
            <Reveal className="guide-teaser-visual" delay={100}>
              <PlaceholderImage label="GUIDE COVER — PRINT EDITION" tone="gold" ratio="3 / 4" icon={ImageIcon} />
              <div className="qr-placeholder" role="img" aria-label="QR code placeholder linking to the digital guide">
                <div className="qr-grid">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span key={i} className={i % 2 === 0 ? "on" : ""} />
                  ))}
                </div>
                <span>Scan for the digital guide</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PartnersSection />

      <section className="section section-forest cta-banner">
        <div className="container">
          <Reveal className="cta-banner-inner">
            <h2 className="section-title">Ready to plan your route through Africa?</h2>
            <p>Tell us where you're drawn to, and we'll shape an itinerary around it.</p>
            <div className="hero-ctas">
              <Button variant="primary" onClick={() => navigate("contact")} icon={ArrowRight}>Start Planning</Button>
              <Button variant="ghost" onClick={() => navigate("experiences")}>Browse Experiences</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ----------------------------------------------------------------------------
   8. PAGE: DESTINATIONS (listing)
---------------------------------------------------------------------------- */

