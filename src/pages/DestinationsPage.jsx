import React, { useState } from "react";
import { VISIBLE_DESTINATIONS } from "../data/destinations.js";
import { DestinationCard } from "../components/Cards.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function DestinationsPage({ navigate }) {
  const regions = ["All", ...Array.from(new Set(VISIBLE_DESTINATIONS.flatMap((d) => d.tags)))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? VISIBLE_DESTINATIONS : VISIBLE_DESTINATIONS.filter((d) => d.tags.includes(filter));

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
          <div className="listing-grid">
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
