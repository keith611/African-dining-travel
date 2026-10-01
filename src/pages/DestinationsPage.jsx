import React, { useState } from "react";
import { DESTINATIONS, VISIBLE_DESTINATIONS } from "../data/destinations.js";
import { DestinationCard } from "../components/Cards.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function DestinationsPage({ navigate }) {
  // Feature the six top-level destinations first, followed by their named
  // places. The top-level entries also remain as photo-led cards on Home.
  const placeDestinations = [
    ...VISIBLE_DESTINATIONS,
    ...DESTINATIONS.filter((d) => d.name !== d.country),
  ];
  const regions = ["All", ...Array.from(new Set(placeDestinations.flatMap((d) => d.tags)))];
  const [filter, setFilter] = useState("All");
  // The six country-level destinations lead the listing; named places follow.
  const filtered = filter === "All"
    ? placeDestinations
    : placeDestinations.filter((d) => d.tags.includes(filter));

  return (
    <div className="page-shell">
      <PageHero eyebrow="Destinations" title="Where would you like to begin?" tone="forest" />
      <section className="section section-sand">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter destinations by type">
            {regions.map((r) => (
              <button key={r} className={`chip ${filter === r ? "is-active" : ""}`} onClick={() => setFilter(r)} aria-pressed={filter === r}>
                {r}
              </button>
            ))}
          </div>
          <p className="section-note" aria-live="polite">
            {filter === "All" ? "Showing all individual destinations" : `Showing ${filtered.length} ${filter.toLowerCase()} destinations`}
          </p>
          <div className="listing-grid" aria-live="polite">
            {filtered.map((d) => (
              <DestinationCard key={d.id} destination={d} navigate={navigate} />
            ))}
          </div>
          {filtered.length === 0 && <p className="empty-state">No destinations match that filter yet.</p>}
        </div>
      </section>
    </div>
  );
}
