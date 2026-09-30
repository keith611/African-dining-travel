import React from "react";
import { PageHero } from "../components/PageHero.jsx";
import { PlaceholderImage, Reveal } from "../components/primitives.jsx";

const ACCOMMODATION_PHOTOS = [
  { label: "ACCOMMODATION PHOTO 01", title: "Elevated Lodge Rooms", description: "Individual rooms raised above the surrounding grassland." },
  { label: "ACCOMMODATION PHOTO 02", title: "Lodge Grounds", description: "Raised lodge buildings set across open green grounds." },
  { label: "ACCOMMODATION PHOTO 03", title: "Boat Landing", description: "A boat and landing point beside the water." },
  { label: "ACCOMMODATION PHOTO 04", title: "Hilltop Cottage", description: "A thatched cottage among landscaped grounds and hills." },
  { label: "ACCOMMODATION PHOTO 05", title: "Garden Walkway", description: "A garden path leading between thatched buildings." },
  { label: "ACCOMMODATION PHOTO 06", title: "Thatched Lodge", description: "A thatched lodge with a covered veranda and garden." },
  { label: "ACCOMMODATION PHOTO 07", title: "Lodge in the Garden", description: "A thatched building surrounded by lawn and trees." },
  { label: "ACCOMMODATION PHOTO 08", title: "Veranda and Grounds", description: "A lodge veranda looking out over the green grounds." },
  { label: "ACCOMMODATION PHOTO 09", title: "Lodge Entrance", description: "A shaded lodge entrance bordered by hedges and lawn." },
  { label: "ACCOMMODATION PHOTO 10", title: "Lodge in the Garden", description: "A lodge surrounded by hedges and landscaped grounds." },
  { label: "ACCOMMODATION PHOTO 11", title: "Lakeside Lounge", description: "An indoor lounge opening toward a lake view." },
  { label: "ACCOMMODATION PHOTO 12", title: "Lake View", description: "Open water and a distant shore beside the property." },
  { label: "ACCOMMODATION PHOTO 13", title: "Garden Path", description: "A stone path winding through the garden to a cottage." },
  { label: "ACCOMMODATION PHOTO 14", title: "Cottage Veranda", description: "A cottage doorway and veranda beside a stone path." },
  { label: "ACCOMMODATION PHOTO 15", title: "Cottage in Greenery", description: "A cottage set among plants and landscaped grounds." },
  { label: "ACCOMMODATION PHOTO 16", title: "Lodge Buildings", description: "Several lodge buildings arranged around a shared lawn." },
  { label: "ACCOMMODATION PHOTO 17", title: "Thatched Guest House", description: "A long thatched building surrounded by trees and gardens." },
  { label: "ACCOMMODATION PHOTO 18", title: "Garden-Side Building", description: "A tall building beside a paved path and garden tree." },
  { label: "ACCOMMODATION PHOTO 19", title: "Thatched Exterior", description: "A thatched building with a front path and garden." },
];

export default function AccommodationPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Places to Stay"
        title="Accommodation"
        sub="A closer look at the lodges, guest spaces and surroundings in this collection."
        tone="forest"
      />
      <section className="section section-sand accommodation-section">
        <div className="container">
          <div className="listing-grid listing-grid-3 accommodation-grid">
            {ACCOMMODATION_PHOTOS.map((photo, index) => (
              <Reveal key={photo.label} className="exp-card accommodation-card" delay={(index % 3) * 70}>
                <PlaceholderImage label={photo.label} ratio="4 / 3" className="accommodation-media" />
                <div className="exp-card-body">
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
