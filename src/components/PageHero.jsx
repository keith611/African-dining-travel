import React from "react";
import { Reveal } from "./primitives.jsx";
import { PlaceholderImage, Eyebrow } from "./primitives.jsx";

export function PageHero({ eyebrow, title, sub, tone = "forest" }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="container">
        <Reveal>
          <Eyebrow tone="gold">{eyebrow}</Eyebrow>
          <h1 className="page-hero-title">{title}</h1>
          {sub ? <p className="page-hero-sub">{sub}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   9. PAGE: DESTINATION DETAIL
---------------------------------------------------------------------------- */

