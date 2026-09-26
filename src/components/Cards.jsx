import React from "react";
import { MapPin, ArrowRight, Clock, Users, UtensilsCrossed } from "lucide-react";
import { DESTINATIONS } from "../data/destinations.js";
import {
  Reveal,
  PlaceholderImage,
  A,
  Button,
  CoordStamp,
} from "./primitives.jsx";

export function DestinationCard({ destination, navigate, featured = false }) {
  return (
    <Reveal className={`dest-card ${featured ? "dest-card-featured" : ""}`}>
      <button className="dest-card-media-btn" onClick={() => navigate("destination", destination.id)} aria-label={`Explore ${destination.name}`}>
        <PlaceholderImage
          label={destination.cardImage}
          tone={destination.accent}
          ratio={featured ? "5 / 4" : "4 / 5"}
          className="dest-card-media"
        />
        <CoordStamp label={destination.coordinates} className="dest-card-stamp" />
      </button>
      <div className="dest-card-body">
        <div className="dest-card-heading">
          <h3>{destination.name}</h3>
          <span className="dest-card-country"><MapPin size={13} /> {destination.country}</span>
        </div>
        <p>{destination.tagline}</p>
        <A page="destination" param={destination.id} navigate={navigate} className="card-link">
          Explore {destination.name} <ArrowRight size={15} />
        </A>
      </div>
    </Reveal>
  );
}

export function ExperienceCard({ experience, navigate, onBook }) {
  const destination = DESTINATIONS.find((d) => d.id === experience.destinationSlug);
  return (
    <Reveal className="exp-card">
      <button className="exp-card-media-btn" onClick={() => navigate("experience", experience.id)} aria-label={`View ${experience.title}`}>
        <PlaceholderImage label={experience.image} tone={destination?.accent || "sand"} ratio="4 / 3" className="exp-card-media" />
        <span className="exp-card-tag">{experience.category}</span>
      </button>
      <div className="exp-card-body">
        <span className="exp-card-loc"><MapPin size={13} /> {destination?.name}</span>
        <h3>
          <A page="experience" param={experience.id} navigate={navigate}>{experience.title}</A>
        </h3>
        <p>{experience.shortDesc}</p>
        <div className="exp-card-meta">
          <span><Clock size={14} /> {experience.duration}</span>
          <span><Users size={14} /> {experience.groupSize}</span>
        </div>
        <div className="exp-card-footer">
          <span className="exp-card-price">{experience.price}</span>
          <div className="exp-card-actions">
            <Button variant="secondary" className="btn-sm" onClick={() => navigate("experience", experience.id)}>View</Button>
            <Button variant="primary" className="btn-sm" onClick={() => onBook(experience)}>Book Now</Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function DiningCard({ item, navigate, onBook }) {
  const destination = DESTINATIONS.find((d) => d.id === item.destinationSlug);
  return (
    <Reveal className="dine-card">
      <button className="dine-card-media-btn" onClick={() => navigate("dish", item.id)} aria-label={`View ${item.name}`}>
        <PlaceholderImage label={item.image} tone={destination?.accent || "sand"} ratio="4 / 3" className="dine-card-media" icon={UtensilsCrossed} />
      </button>
      <div className="dine-card-body">
        <div className="dine-card-heading">
          <h3><A page="dish" param={item.id} navigate={navigate}>{item.name}</A></h3>
          <span className="dine-card-price">{item.priceRange}</span>
        </div>
        <span className="dine-card-loc"><MapPin size={13} /> {destination?.name} &middot; {item.type}</span>
        <p>{item.description}</p>
        <div className="exp-card-footer">
          <A page="dish" param={item.id} navigate={navigate} className="card-link">Details <ArrowRight size={15} /></A>
          <Button variant="primary" className="btn-sm" onClick={() => onBook(item)}>Reserve</Button>
        </div>
      </div>
    </Reveal>
  );
}

/* ----------------------------------------------------------------------------
   7. PAGE: HOME
---------------------------------------------------------------------------- */

