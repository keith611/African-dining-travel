import React, { useMemo, useState } from "react";
import { DESTINATIONS, VISIBLE_DESTINATIONS } from "../data/destinations.js";
import { DestinationCard } from "../components/Cards.jsx";
import { PageHero } from "../components/PageHero.jsx";

const COUNTRY_ORDER = ["Kenya", "Tanzania", "Botswana", "South Africa", "Uganda", "Zimbabwe"];
const FILTERS = ["All", "Safari", "Coastal", "City", "Culture", "Islands", "Adventure", "Birdlife"];

const COUNTRY_DESTINATIONS = COUNTRY_ORDER
  .map((name) => VISIBLE_DESTINATIONS.find((destination) => destination.name === name))
  .filter(Boolean);

function matchesCategory(entry, category) {
  const name = entry.item.name || "";
  const description = entry.item.blurb || "";
  const categoryName = entry.category.title || "";
  const activities = (entry.item.activities || []).join(" ");
  const itemText = `${name} ${description} ${activities}`;
  const allText = `${categoryName} ${itemText}`.toLowerCase();

  switch (category) {
    case "Safari":
      return /safari|wildlife|national park|game reserve|nature reserve|conservation area|gorilla trekking|game drive|safari reserve/i.test(allText);
    case "Coastal":
      return /beach|coast|coastal|marine|reef|ocean|seaside|shore|dhow|harbou?r|lagoon|snorkel|diving|sandbank/i.test(itemText);
    case "City":
      return /city|town|capital|urban|old town|market|museum|city tour|cape town|mombasa|nairobi|arusha|kampala|gaborone|maun|harare|stone town|victoria falls/i.test(name + " " + description);
    case "Culture":
      return /culture|heritage|history|historic|historical|maasai|swahili|museum|market|fort|old town|ruins|rock art|village|craft|tradition/i.test(allText);
    case "Islands":
      return /island|zanzibar|pemba|wasini|chale/i.test(allText);
    case "Adventure":
      return /adventure|trek|hiking|hike|canoe|mokoro|rafting|climb|diving|snorkel|balloon|kite.?surf|cycling|horseback|cruise|helicopter|zip.?line|walking safari|game drive/i.test(allText);
    case "Birdlife":
      return /bird|flamingo|wetland|marsh|swamp|waterfowl|penguin|pelican|avian|lake nakuru|lake naivasha|lake manyara|mabamba/i.test(allText);
    default:
      return false;
  }
}

function matchesPageTag(page, category) {
  const tags = page.tags || [];
  if (category === "Safari") return tags.includes("Safari") || tags.includes("Wildlife");
  if (category === "Coastal") return tags.includes("Coastal");
  if (category === "City") return tags.includes("City");
  if (category === "Culture") return tags.includes("Culture");
  if (category === "Islands") return tags.includes("Islands");
  if (category === "Adventure") return tags.includes("Adventure");
  if (category === "Birdlife") return tags.includes("Birdlife");
  return false;
}

function makeCategoryCards(category) {
  const seen = new Set();
  const cards = [];

  for (const country of COUNTRY_DESTINATIONS) {
    const countryPages = DESTINATIONS.filter((page) => page.id === country.id || page.country === country.name);
    for (const page of countryPages) {
      if (page.id !== country.id && matchesPageTag(page, category)) {
        const pageKey = `${country.name}:${page.id}`;
        if (!seen.has(pageKey)) {
          seen.add(pageKey);
          cards.push({
            id: page.id,
            listingKey: pageKey,
            name: page.name,
            country: country.name,
            coordinates: page.coordinates || country.coordinates,
            accent: page.accent || country.accent,
            cardImage: page.cardImage || country.cardImage,
            tagline: page.tagline || page.description || country.tagline,
          });
        }
      }

      for (const group of page.categories || []) {
        for (const item of group.items || []) {
          const entry = { country, page, category: group, item };
          if (!item.name || !matchesCategory(entry, category)) continue;

          const uniqueName = (item.linksTo || item.name).toLowerCase().trim();
          const uniqueKey = `${country.name}:${uniqueName}`;
          if (seen.has(uniqueKey)) continue;
          seen.add(uniqueKey);

          cards.push({
            id: item.linksTo || (page.id !== country.id ? page.id : country.id),
            listingKey: uniqueKey,
            name: item.linksToLabel || item.name,
            country: country.name,
            coordinates: page.coordinates || country.coordinates,
            accent: page.accent || country.accent,
            cardImage: item.image || page.cardImage || country.cardImage,
            tagline: item.blurb || page.tagline || country.tagline,
          });
        }
      }
    }
  }

  return cards;
}

export default function DestinationsPage({ navigate }) {
  const [filter, setFilter] = useState("All");
  const categoryCards = useMemo(() => makeCategoryCards(filter), [filter]);
  const filtered = filter === "All" ? COUNTRY_DESTINATIONS : categoryCards;

  return (
    <div className="page-shell">
      <PageHero eyebrow="Destinations" title="Where would you like to begin?" tone="forest" />
      <section className="section section-sand">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter destinations by type">
            {FILTERS.map((option) => (
              <button key={option} className={`chip ${filter === option ? "is-active" : ""}`} onClick={() => setFilter(option)} aria-pressed={filter === option}>
                {option}
              </button>
            ))}
          </div>
          <p className="section-note" aria-live="polite">
            {filter === "All"
              ? "Showing all six destinations"
              : `Showing ${filtered.length} ${filter.toLowerCase()} destinations across all countries`}
          </p>
          <div className="listing-grid" aria-live="polite">
            {filtered.map((destination) => (
              <DestinationCard key={destination.listingKey || destination.id} destination={destination} navigate={navigate} />
            ))}
          </div>
          {filtered.length === 0 && <p className="empty-state">No destinations match that category yet.</p>}
        </div>
      </section>
    </div>
  );
}
