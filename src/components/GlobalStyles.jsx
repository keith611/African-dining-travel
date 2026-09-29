import React from "react";

export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');

      :root {
        --forest: #14251F;
        --forest-light: #1f3a30;
        --gold: #C98A3D;
        --gold-light: #e0ac71;
        --teal: #087E8B;
        --sand: #F7F3EA;
        --earth: #E8DDC8;
        --dark: #17201D;
        --brand-ink: #403830;
        --white: #FFFFFF;
        --radius-lg: 22px;
        --radius-md: 14px;
        --radius-sm: 8px;
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        font-family: 'Inter', -apple-system, sans-serif;
        color: var(--dark);
        background: var(--sand);
        -webkit-font-smoothing: antialiased;
      }
      h1, h2, h3, h4, .font-display { font-family: 'Playfair Display', Georgia, serif; font-weight: 400; letter-spacing: 0.01em; margin: 0; color: var(--forest); }
      p { line-height: 1.7; color: #3b453f; margin: 0; }
      a { color: inherit; text-decoration: none; }
      ul { margin: 0; padding: 0; list-style: none; }
      button { font-family: inherit; cursor: pointer; }
      img { max-width: 100%; display: block; }
      .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

      *:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; border-radius: 2px; }

      .rounded-lg { border-radius: var(--radius-lg); }
      .rounded-none { border-radius: 0; }
      .rounded-full { border-radius: 50%; }

      .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      .container-narrow { max-width: 760px; }
      .page-shell { padding-top: 84px; }

      .section { padding: 88px 0; }
      .section-sand { background: var(--sand); }
      .section-earth { background: var(--earth); }
      .section-forest { background: var(--forest); }
      .section-forest h1, .section-forest h2, .section-forest h3, .section-forest h4, .section-forest p { color: var(--sand); }
      .section-forest p { color: #cfd8d2; }

      .eyebrow { display: inline-flex; align-items: center; gap: 6px; font-family: 'Inter', sans-serif; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 14px; }
      .eyebrow-gold { color: var(--gold); }
      .eyebrow-teal { color: var(--teal); }
      .section-forest .eyebrow-teal { color: #6fd8e0; }

      .section-title { font-size: clamp(1.7rem, 2.6vw, 2.4rem); line-height: 1.3; letter-spacing: 0.005em; }
      .section-lede { margin-top: 14px; max-width: 640px; font-size: 1.05rem; color: #52594f; }
      .section-forest .section-lede { color: #cfd8d2; }
      .section-intro { margin-bottom: 48px; }
      .section-intro.align-center { text-align: center; margin-left: auto; margin-right: auto; }
      .section-intro.align-center .section-lede { margin-left: auto; margin-right: auto; }
      .section-cta { margin-top: 44px; text-align: center; }

      .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(.2,.7,.3,1), transform 0.7s cubic-bezier(.2,.7,.3,1); }
      .reveal.is-visible { opacity: 1; transform: translateY(0); }

      .demo-note { display: inline-flex; align-items: center; gap: 7px; background: rgba(201,138,61,0.14); color: #8a5a1f; border: 1px dashed rgba(201,138,61,0.5); padding: 6px 12px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.02em; margin-bottom: 16px; }
      .section-forest .demo-note { background: rgba(224,172,113,0.14); color: var(--gold-light); border-color: rgba(224,172,113,0.4); }
      .contact-pending, .footer-social-empty { color: #9aa39c; font-style: italic; font-size: 0.85rem; }

      /* ---------- Buttons ---------- */
      .btn { display: inline-flex; align-items: center; gap: 9px; padding: 14px 26px; border-radius: 999px; font-size: 0.82rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; border: 1.5px solid transparent; transition: transform .25s ease, background .25s ease, border-color .25s ease, color .25s ease, box-shadow .25s ease; white-space: nowrap; }
      .btn:hover { transform: translateY(-2px); }
      .btn-primary { background: var(--gold); color: var(--forest); box-shadow: 0 10px 24px -12px rgba(201,138,61,0.7); }
      .btn-primary:hover { background: var(--gold-light); }
      .btn-secondary { background: transparent; color: var(--forest); border-color: var(--forest); }
      .btn-secondary:hover { background: var(--forest); color: var(--sand); }
      .btn-on-dark.btn-secondary { color: var(--sand); border-color: var(--sand); }
      .btn-on-dark.btn-secondary:hover { background: var(--sand); color: var(--forest); }
      .btn-ghost { background: transparent; color: inherit; border-color: rgba(255,255,255,0.5); }
      .hero .btn-ghost { color: var(--white); }
      .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
      .btn-sm { padding: 9px 16px; font-size: 0.8rem; }

      /* ---------- Placeholder media ---------- */
      .ph-media { position: relative; overflow: hidden; width: 100%; display: flex; align-items: center; justify-content: center; }
      .ph-media-real { background: var(--earth); }
      .ph-media-real img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .ph-media-real.ph-media-full-frame { background: #F8F2E8; }
      .ph-media-real.ph-media-full-frame img { object-fit: contain; }
      .ph-pattern { position: absolute; inset: 0; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.09) 0 2px, transparent 2px 16px); }
      .ph-content { position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; padding: 1rem; color: var(--forest); opacity: 0.75; }
      .ph-content.is-dark { color: var(--white); }
      .ph-label { font-size: 0.66rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; max-width: 220px; }

      /* ---------- Coordinate stamp ---------- */
      .coord-stamp { display: inline-flex; align-items: center; gap: 7px; background: rgba(23,32,29,0.72); backdrop-filter: blur(3px); color: var(--sand); padding: 7px 12px 7px 8px; border-radius: 999px; font-family: 'Playfair Display', serif; font-size: 0.72rem; letter-spacing: 0.03em; border: 1px solid rgba(247,243,234,0.3); }
      .coord-stamp-ring { display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; border: 1px dashed var(--gold-light); color: var(--gold-light); }

      /* ---------- Contour divider ---------- */
      .contour-divider { width: 100%; height: 32px; overflow: hidden; }
      .contour-divider svg { width: 100%; height: 100%; }
      .contour-divider path { fill: none; stroke-width: 1.5; }
      .contour-gold path { stroke: var(--gold); opacity: 0.5; }
      .contour-earth path { stroke: var(--forest); opacity: 0.18; }
      .contour-teal path { stroke: var(--teal); opacity: 0.45; }

      /* ---------- Navbar ---------- */
      .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 60; transition: background .35s ease, box-shadow .35s ease, padding .35s ease; }
      .navbar-inner { max-width: 1200px; margin: 0 auto; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
      .navbar-solid { background: rgb(248,242,232); box-shadow: 0 8px 24px -18px rgba(0,0,0,0.28); }
      .navbar-solid .navbar-inner { padding: 12px 24px; }
      .navbar-solid .nav-link { color: var(--brand-ink); }
      .navbar-solid .nav-burger { color: var(--gold); }
      .navbar-transparent { background: linear-gradient(to bottom, rgba(0,0,0,0.35), transparent); }
      .brand { display: flex; align-items: center; gap: 10px; }
      /* The logo sits directly on the light header without a separate card. */
      .brand-logo-wrap { display: flex; align-items: center; width: 77px; margin-right: 4px; }
      .brand-logo-wrap img { display: block; width: 100%; height: auto; }
      @media (min-width: 960px) {
        .brand-logo-wrap { width: 109px; }
      }
      .brand-mark { width: 34px; height: 34px; border-radius: 50%; border: 1.5px solid var(--gold); color: var(--gold); display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 1.1rem; }
      .brand-word { color: var(--sand); font-family: 'Playfair Display', serif; font-size: 1.15rem; letter-spacing: 0.06em; line-height: 1.1; display: flex; flex-direction: column; }
      .brand-sub { font-family: 'Inter', sans-serif; font-size: 0.55rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-light); font-weight: 600; }
      .nav-desktop { display: none; align-items: center; gap: 36px; }
      .nav-link { color: var(--sand); font-size: 0.86rem; font-weight: 500; letter-spacing: 0.04em; padding-bottom: 3px; border-bottom: 1.5px solid transparent; opacity: 0.88; transition: opacity .2s ease, border-color .2s ease; }
      .nav-link:hover { opacity: 1; }
      .nav-link.is-active { opacity: 1; border-color: var(--gold); }
      .navbar-actions { display: flex; align-items: center; gap: 14px; }
      .nav-cta { display: none; }
      .nav-burger { background: transparent; border: none; color: var(--sand); display: flex; padding: 4px; }
      .nav-mobile { max-height: 0; overflow: hidden; background: rgb(248,242,232); transition: max-height .4s ease; }
      .nav-mobile.is-open { max-height: 560px; }
      .nav-mobile-links { display: flex; flex-direction: column; padding: 8px 24px 0; }
      .navbar-solid .nav-mobile-link { color: var(--brand-ink); }
      .nav-mobile-link { padding: 14px 0; border-bottom: 1px solid rgba(20,37,31,0.12); font-size: 1rem; letter-spacing: 0.03em; opacity: 0; transform: translateY(8px); transition: opacity .35s ease, transform .35s ease; }
      .nav-mobile.is-open .nav-mobile-link { opacity: 1; transform: translateY(0); }
      .nav-mobile-link.is-active { color: var(--brand-ink); font-weight: 600; }
      .nav-mobile-cta { margin: 18px 24px 24px; justify-content: center; }

      @media (min-width: 960px) {
        .nav-desktop { display: flex; }
        .nav-cta { display: inline-flex; }
        .nav-burger { display: none; }
        .nav-mobile { display: none; }
      }

      /* ---------- Hero ---------- */
      .hero { position: relative; height: 100vh; min-height: 560px; display: flex; align-items: center; overflow: hidden; }
      .hero-media { position: absolute; inset: 0; height: 100%; animation: kenburns 22s ease-in-out infinite alternate; }
      .hero-media img { object-position: 42% 62%; }
      @keyframes kenburns { from { transform: scale(1); } to { transform: scale(1.09); } }
      .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20,37,31,0.62) 0%, rgba(20,37,31,0.48) 45%, rgba(20,37,31,0.88) 100%); }
      .hero-content { position: relative; z-index: 2; max-width: 780px; margin: 0 auto; padding: 0 24px; text-align: center; color: var(--white); }
      .hero-title { font-size: clamp(2.3rem, 6vw, 4rem); line-height: 1.15; color: var(--white); letter-spacing: 0.005em; animation: fadeSlideUp 1s ease both .15s; }
      .hero-sub { margin: 22px auto 0; max-width: 560px; font-size: 1.08rem; color: rgba(247,243,234,0.9); animation: fadeSlideUp 1s ease both .35s; }
      .hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; justify-content: center; animation: fadeSlideUp 1s ease both .55s; }
      @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
      .hero-scroll-cue { position: absolute; bottom: 26px; left: 50%; transform: translateX(-50%); color: var(--sand); opacity: 0.75; animation: bob 2.2s ease-in-out infinite; z-index: 2; }
      @keyframes bob { 0%,100% { transform: translate(-50%,0);} 50% { transform: translate(-50%,8px);} }

      /* ---------- Coordinate marquee ---------- */
      .coord-marquee { background: var(--forest); overflow: hidden; padding: 14px 0; border-top: 1px solid rgba(247,243,234,0.08); border-bottom: 1px solid rgba(247,243,234,0.08); }
      .coord-marquee-track { display: flex; width: max-content; gap: 48px; animation: marquee 34s linear infinite; }
      @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .coord-marquee-item { font-family: 'Playfair Display', serif; color: var(--gold-light); font-size: 0.85rem; letter-spacing: 0.04em; white-space: nowrap; }
      .coord-marquee-item em { font-style: normal; color: rgba(247,243,234,0.55); margin-left: 8px; font-family: 'Inter', sans-serif; font-size: 0.72rem; }

      /* ---------- Thesis / testimonial ---------- */
      .thesis { text-align: center; }
      .thesis-quote { font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 2.6vw, 1.9rem); color: var(--forest); line-height: 1.5; font-weight: 400; }
      .testimonial { text-align: center; }
      .testimonial-mark { color: var(--gold); margin-bottom: 8px; }
      .testimonial-quote { font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.4vw, 1.6rem); color: var(--forest); line-height: 1.55; }
      .testimonial-name { margin-top: 18px; font-weight: 600; color: var(--forest); font-size: 0.92rem; }
      .testimonial-name span { font-weight: 400; color: #6b7268; }
      .testimonial-dots { display: flex; justify-content: center; gap: 8px; margin-top: 22px; }
      .testimonial-dots button { width: 8px; height: 8px; border-radius: 50%; border: none; background: var(--earth); padding: 0; }
      .testimonial-dots button.is-active { background: var(--gold); width: 22px; border-radius: 5px; transition: width .3s ease; }

      /* ---------- Destination grid ---------- */
      .dest-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
      .dest-grid-side { display: grid; grid-template-columns: 1fr; gap: 24px; }
      @media (min-width: 760px) { .dest-grid-side { grid-template-columns: 1fr 1fr; } }
      @media (min-width: 1080px) {
        .dest-grid { grid-template-columns: 1.15fr 1fr; align-items: start; }
      }
      .dest-card { display: flex; flex-direction: column; }
      .dest-card-media-btn { position: relative; border: none; background: none; padding: 0; display: block; width: 100%; border-radius: var(--radius-lg); overflow: hidden; }
      .dest-card-media { transition: transform .6s ease; }
      .dest-card-media-btn:hover .dest-card-media, .dest-card-media-btn:focus-visible .dest-card-media { transform: scale(1.05); }
      .dest-card-stamp { position: absolute; left: 16px; bottom: 16px; }
      .dest-card-body { padding-top: 18px; }
      .dest-card-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
      .dest-card-heading h3 { font-size: 1.3rem; }
      .dest-card-country { display: flex; align-items: center; gap: 4px; font-size: 0.78rem; color: var(--teal); font-weight: 600; white-space: nowrap; }
      .dest-card-body p { margin-top: 8px; font-size: 0.94rem; }
      .card-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 14px; font-weight: 600; font-size: 0.88rem; color: var(--forest); border-bottom: 1.5px solid var(--gold); padding-bottom: 2px; }
      .card-link svg { transition: transform .25s ease; }
      .card-link:hover svg { transform: translateX(3px); }
      .dest-card-featured .dest-card-heading h3 { font-size: 1.7rem; }

      /* ---------- Value grid ---------- */
      .value-grid { display: grid; grid-template-columns: 1fr; gap: 28px; }
      @media (min-width: 640px) { .value-grid { grid-template-columns: 1fr 1fr; } }
      @media (min-width: 1024px) { .value-grid { grid-template-columns: repeat(4, 1fr); } .value-grid-3 { grid-template-columns: repeat(3, 1fr); } }
      .value-card { background: var(--white); padding: 30px 26px; border-radius: var(--radius-md); border: 1px solid rgba(20,37,31,0.06); }

      /* ---------- Partners ---------- */
      .partners-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
      @media (min-width: 640px) { .partners-grid { grid-template-columns: repeat(3, 1fr); } }
      @media (min-width: 1024px) { .partners-grid { grid-template-columns: repeat(4, 1fr); } }
      .partner-card { display: flex; align-items: center; justify-content: center; aspect-ratio: 3 / 2; background: var(--white); border: 1px solid rgba(20,37,31,0.08); border-radius: var(--radius-md); padding: 20px; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
      .partner-card:hover, .partner-card:focus-visible { transform: translateY(-3px); box-shadow: 0 16px 32px -20px rgba(20,37,31,0.35); border-color: var(--gold); }
      .partner-card img { max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }
      .value-icon { display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 50%; background: var(--sand); color: var(--gold); margin-bottom: 16px; }
      .value-card h3 { font-size: 1.08rem; margin-bottom: 8px; }
      .value-card p { font-size: 0.92rem; }

      /* ---------- Journal scroller ---------- */
      .journal-scroller { display: flex; gap: 22px; overflow-x: auto; padding-bottom: 12px; scroll-snap-type: x mandatory; }
      .journal-card { flex: 0 0 220px; scroll-snap-align: start; }
      .journal-card-media-btn { position: relative; display: block; border: none; background: none; padding: 0; width: 100%; border-radius: var(--radius-md); overflow: hidden; }
      .journal-card-media { transition: transform .5s ease; }
      .journal-card-media-btn:hover .journal-card-media { transform: scale(1.05); }
      .journal-card-stamp { position: absolute; left: 10px; bottom: 10px; font-size: 0.62rem; padding: 5px 10px 5px 6px; }
      .journal-card h3 { font-size: 1rem; margin-top: 14px; }
      .journal-card-loc { font-size: 0.78rem; color: #6b7268; }

      /* ---------- Experience & Dining cards ---------- */
      .listing-grid { display: grid; grid-template-columns: 1fr; gap: 28px; }
      @media (min-width: 640px) { .listing-grid { grid-template-columns: 1fr 1fr; } }
      @media (min-width: 1024px) { .listing-grid-3 { grid-template-columns: repeat(3, 1fr); } }

      .exp-card, .dine-card { background: var(--white); border-radius: var(--radius-md); overflow: hidden; border: 1px solid rgba(20,37,31,0.06); display: flex; flex-direction: column; transition: box-shadow .3s ease, transform .3s ease; }
      .exp-card:hover, .dine-card:hover { box-shadow: 0 20px 40px -24px rgba(20,37,31,0.35); transform: translateY(-3px); }
      .exp-card-media-btn, .dine-card-media-btn { position: relative; border: none; background: none; padding: 0; display: block; width: 100%; }
      .exp-card-media, .dine-card-media { transition: transform .5s ease; border-radius: 0; }
      .exp-card-media-btn:hover .exp-card-media, .dine-card-media-btn:hover .dine-card-media { transform: scale(1.04); }
      .exp-card-tag { position: absolute; top: 12px; left: 12px; background: rgba(20,37,31,0.85); color: var(--sand); font-size: 0.66rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 5px 10px; border-radius: 999px; font-weight: 700; }
      .exp-card-body, .dine-card-body { padding: 20px 20px 22px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
      .exp-card-loc, .dine-card-loc { display: flex; align-items: center; gap: 5px; font-size: 0.76rem; color: var(--teal); font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; }
      .exp-card-body h3, .dine-card-heading h3 { font-size: 1.12rem; }
      .exp-card-body p, .dine-card-body p { font-size: 0.9rem; margin-top: 2px; }
      .exp-card-meta { display: flex; gap: 16px; font-size: 0.8rem; color: #6b7268; margin-top: 4px; }
      .exp-card-meta span, .booking-sidebar-facts dt { display: flex; align-items: center; gap: 5px; }
      .exp-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 14px; gap: 10px; flex-wrap: wrap; }
      .exp-card-price { font-weight: 700; color: var(--forest); font-size: 0.9rem; }
      .exp-card-actions { display: flex; gap: 8px; }
      .dine-card-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; }
      .dine-card-price { font-weight: 700; color: var(--gold); }

      /* ---------- Filters / chips / tabs ---------- */
      .filter-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
      .filter-row-secondary { margin-bottom: 40px; }
      .chip { border: 1.5px solid rgba(20,37,31,0.18); background: transparent; color: var(--forest); padding: 9px 18px; border-radius: 999px; font-size: 0.84rem; font-weight: 500; transition: all .2s ease; }
      .chip:hover { border-color: var(--gold); }
      .chip.is-active { background: var(--forest); border-color: var(--forest); color: var(--sand); }
      .chip-ghost { border-style: dashed; font-size: 0.8rem; }
      .empty-state { text-align: center; padding: 40px 0; color: #6b7268; }

      .tabs { display: flex; gap: 8px; overflow-x: auto; border-bottom: 1px solid rgba(20,37,31,0.12); margin-bottom: 36px; }
      .tab { display: flex; align-items: center; gap: 7px; padding: 12px 18px; background: none; border: none; border-bottom: 2px solid transparent; color: #6b7268; font-weight: 600; font-size: 0.88rem; white-space: nowrap; }
      .tab.is-active { color: var(--forest); border-color: var(--gold); }
      .offer-grid { display: grid; grid-template-columns: 1fr; gap: 26px; }
      @media (min-width: 640px) { .offer-grid { grid-template-columns: 1fr 1fr; } }
      @media (min-width: 1024px) { .offer-grid { grid-template-columns: repeat(3, 1fr); } }
      .offer-card h4 { margin-top: 14px; font-size: 1.02rem; }
      .offer-region { display: inline-flex; align-items: center; gap: 4px; margin-top: 6px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.03em; text-transform: uppercase; color: var(--teal); }
      .offer-card p { margin-top: 6px; font-size: 0.88rem; }
      .offer-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; list-style: none; padding: 0; }
      .offer-tag { font-size: 0.72rem; font-weight: 600; color: var(--forest); background: var(--sand); border: 1px solid rgba(20,37,31,0.12); padding: 4px 10px; border-radius: 999px; }
      .offer-link { margin-top: 14px; }
      .offer-book-btn { display: flex; width: 100%; justify-content: center; margin-top: 12px; }
      .section-note { text-align: center; color: #6b7268; font-size: 0.94rem; max-width: 520px; margin: 0 auto; }

      /* ---------- Page hero (interior pages) ---------- */
      .page-hero { padding: 64px 0 56px; }
      .page-hero-forest { background: var(--forest); }
      .page-hero-forest h1, .page-hero-forest p { color: var(--sand); }
      .page-hero-title { font-size: clamp(1.9rem, 4vw, 2.8rem); max-width: 720px; }
      .page-hero-sub { margin-top: 14px; max-width: 560px; color: #cfd8d2; }

      /* ---------- Detail hero (destination/experience/dining) ---------- */
      .detail-hero { position: relative; height: 62vh; min-height: 420px; display: flex; align-items: flex-end; overflow: hidden; }
      .detail-hero-media { position: absolute; inset: 0; height: 100%; }
      .detail-hero-content { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 24px 44px; width: 100%; color: var(--white); }
      .breadcrumb { display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: rgba(247,243,234,0.8); margin-bottom: 18px; flex-wrap: wrap; }
      .breadcrumb a:hover { color: var(--gold-light); }
      .detail-hero-country { display: inline-flex; align-items: center; gap: 6px; color: var(--gold-light); font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 10px; }
      .detail-hero-title { font-size: clamp(2.2rem, 5vw, 3.4rem); color: var(--white); }
      .detail-hero-tagline { margin-top: 10px; font-size: 1.05rem; max-width: 560px; color: rgba(247,243,234,0.92); }
      .detail-hero-stamp { position: absolute; right: 24px; bottom: 30px; z-index: 2; }

      .detail-intro { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
      @media (min-width: 900px) { .detail-intro { grid-template-columns: 1.3fr 1fr; } }
      .detail-intro-text { font-size: 1.02rem; }
      .detail-intro-pullquote { margin-top: 18px; font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.15rem; color: var(--teal); border-left: 3px solid var(--gold); padding-left: 16px; }
      .fact-panel { background: var(--white); border-radius: var(--radius-md); padding: 28px; border: 1px solid rgba(20,37,31,0.08); }
      .fact-panel h3 { font-size: 1rem; margin-bottom: 14px; }
      .fact-panel h4 { font-size: 0.92rem; margin: 18px 0 10px; }
      .fact-panel dl div { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed rgba(20,37,31,0.12); font-size: 0.88rem; }
      .fact-panel dt { color: #6b7268; }
      .fact-panel dd { margin: 0; font-weight: 600; text-align: right; }
      .fact-list li { display: flex; gap: 9px; align-items: flex-start; font-size: 0.9rem; padding: 6px 0; color: var(--dark); }
      .fact-list svg { color: var(--gold); margin-top: 3px; flex-shrink: 0; }
      .fact-panel-cta { width: 100%; justify-content: center; margin-top: 20px; }

      .gallery-strip { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .gallery-strip-3 { grid-template-columns: repeat(3, 1fr); }
      @media (min-width: 640px) { .gallery-strip:not(.gallery-strip-3) { grid-template-columns: repeat(3, 1fr); } }
      @media (min-width: 900px) { .gallery-strip:not(.gallery-strip-3) { grid-template-columns: repeat(6, 1fr); } }
      .gallery-strip-item { border: none; background: none; padding: 0; border-radius: var(--radius-sm); overflow: hidden; }

      .detail-split { display: grid; grid-template-columns: 1fr; gap: 44px; }
      @media (min-width: 960px) { .detail-split { grid-template-columns: 1.6fr 1fr; } }
      .detail-block { margin-top: 40px; }
      .detail-block h3 { font-size: 1.1rem; margin-bottom: 12px; }
      .booking-sidebar { background: var(--white); border-radius: var(--radius-md); padding: 28px; border: 1px solid rgba(20,37,31,0.08); height: fit-content; position: sticky; top: 100px; }
      .booking-sidebar-stamp { margin-bottom: 16px; }
      .booking-sidebar-price { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--forest); }
      .price-note { font-family: 'Inter', sans-serif; font-size: 0.7rem; text-transform: uppercase; color: #6b7268; letter-spacing: 0.05em; }
      .booking-sidebar-facts { margin: 18px 0; display: flex; flex-direction: column; gap: 10px; }
      .booking-sidebar-facts div { display: flex; justify-content: space-between; font-size: 0.86rem; padding-bottom: 10px; border-bottom: 1px dashed rgba(20,37,31,0.1); }
      .booking-sidebar-facts dt { color: #6b7268; }
      .booking-sidebar-facts dd { margin: 0; font-weight: 600; }
      .booking-sidebar-cta { width: 100%; justify-content: center; }
      .booking-sidebar-note { font-size: 0.78rem; color: #6b7268; text-align: center; margin-top: 12px; }

      /* ---------- Dining grid on dark section ---------- */
      .dine-grid { display: grid; grid-template-columns: 1fr; gap: 26px; }
      @media (min-width: 760px) { .dine-grid { grid-template-columns: repeat(3, 1fr); } }

      /* ---------- Guide sections ---------- */
      .guide-teaser { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
      @media (min-width: 900px) { .guide-teaser { grid-template-columns: 1.2fr 1fr; } }
      .guide-teaser-visual { position: relative; max-width: 320px; }
      .guide-hero { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
      @media (min-width: 900px) { .guide-hero { grid-template-columns: 0.8fr 1.2fr; } }
      .guide-hero-visual { max-width: 300px; }
      .guide-article { background: var(--white); border-radius: var(--radius-md); padding: 20px; border: 1px solid rgba(20,37,31,0.06); }
      .guide-article h3 { margin: 10px 0 6px; font-size: 1.05rem; }
      .guide-article p { font-size: 0.88rem; }
      .guide-social-inner { display: grid; grid-template-columns: 1fr; gap: 32px; align-items: center; }
      @media (min-width: 760px) { .guide-social-inner { grid-template-columns: auto 1fr; } }
      .footer-social-light { margin-top: 16px; }

      .qr-placeholder { margin-top: 18px; display: flex; flex-direction: column; align-items: center; gap: 10px; background: var(--white); padding: 16px; border-radius: var(--radius-sm); border: 1px solid rgba(20,37,31,0.1); width: fit-content; }
      .qr-placeholder-dark { background: rgba(247,243,234,0.06); border-color: rgba(247,243,234,0.2); }
      .qr-placeholder span { font-size: 0.68rem; color: #6b7268; text-transform: uppercase; letter-spacing: 0.04em; }
      .qr-placeholder-dark span { color: rgba(247,243,234,0.7); }
      .qr-grid { display: grid; grid-template-columns: repeat(5, 8px); grid-template-rows: repeat(5, 8px); gap: 2px; }
      .qr-grid span { background: rgba(20,37,31,0.12); }
      .qr-grid span.on { background: var(--forest); }
      .qr-placeholder-dark .qr-grid span { background: rgba(247,243,234,0.15); }
      .qr-placeholder-dark .qr-grid span.on { background: var(--gold-light); }

      /* ---------- Masonry gallery ---------- */
      .masonry { columns: 1; gap: 16px; }
      @media (min-width: 640px) { .masonry { columns: 2; } }
      @media (min-width: 1024px) { .masonry { columns: 3; } }
      .masonry-item { display: block; width: 100%; border: none; background: none; padding: 0; margin-bottom: 16px; break-inside: avoid; border-radius: var(--radius-sm); overflow: hidden; }
      .masonry-item .ph-media { transition: transform .5s ease; }
      .masonry-item:hover .ph-media { transform: scale(1.04); }

      /* ---------- Modals / lightbox / booking ---------- */
      .modal-backdrop { position: fixed; inset: 0; background: rgba(20,37,31,0.7); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px; animation: fadeIn .25s ease; }
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      .modal { position: relative; background: var(--sand); border-radius: var(--radius-lg); padding: 34px; max-width: 480px; width: 100%; max-height: 88vh; overflow-y: auto; animation: modalIn .3s cubic-bezier(.2,.7,.3,1); }
      @keyframes modalIn { from { opacity: 0; transform: translateY(18px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      .modal-close { position: absolute; top: 16px; right: 16px; background: var(--white); border: none; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--forest); }
      .modal-title { font-size: 1.5rem; margin-top: 4px; }
      .modal-sub { color: #6b7268; margin-top: 4px; font-size: 0.9rem; }
      .booking-form { margin-top: 24px; display: flex; flex-direction: column; gap: 16px; }
      .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
      .field { display: flex; flex-direction: column; gap: 6px; }
      .field label { font-size: 0.78rem; font-weight: 600; color: var(--forest); }
      .field input, .field select, .field textarea { border: 1.5px solid rgba(20,37,31,0.18); border-radius: var(--radius-sm); padding: 11px 14px; font-family: inherit; font-size: 0.92rem; background: var(--white); color: var(--dark); }
      .field select:disabled { background: var(--sand); color: #9aa39c; cursor: not-allowed; }
      .field-hint { font-size: 0.76rem; color: #6b7268; margin-top: -8px; }
      .booking-summary { margin: 16px 0; text-align: left; }
      .booking-summary div { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px dashed rgba(20,37,31,0.12); font-size: 0.88rem; }
      .booking-summary dt { color: #6b7268; }
      .booking-summary dd { margin: 0; font-weight: 600; color: var(--forest); }
      .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--gold); }
      .field-error { color: #b6452f; font-size: 0.76rem; }
      .stepper { display: flex; align-items: center; gap: 14px; border: 1.5px solid rgba(20,37,31,0.18); border-radius: var(--radius-sm); padding: 8px 14px; width: fit-content; background: var(--white); }
      .stepper button { border: none; background: var(--sand); width: 26px; height: 26px; border-radius: 50%; font-size: 1rem; line-height: 1; color: var(--forest); }
      .booking-note { font-size: 0.78rem; color: #6b7268; background: var(--earth); padding: 10px 14px; border-radius: var(--radius-sm); }
      .booking-submit { width: 100%; justify-content: center; }
      .booking-confirmed { text-align: center; padding: 16px 0; }
      .confirm-icon { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 50%; background: var(--teal); color: var(--white); margin-bottom: 16px; }
      .booking-confirmed p { margin: 14px 0 22px; }

      .lightbox-backdrop { background: rgba(10,16,14,0.92); }
      .lightbox-frame { position: relative; max-width: 900px; width: 100%; }
      .lightbox-media { border-radius: var(--radius-md); }
      .lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(247,243,234,0.15); border: none; color: var(--white); width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
      .lightbox-prev { left: -14px; }
      .lightbox-next { right: -14px; }
      @media (max-width: 640px) { .lightbox-prev { left: 4px; } .lightbox-next { right: 4px; } }

      /* ---------- Footer ---------- */
      .footer { background: var(--forest); padding-top: 72px; }
      .footer-top { max-width: 1200px; margin: 0 auto; padding: 0 24px 48px; display: grid; grid-template-columns: 1fr; gap: 40px; }
      @media (min-width: 760px) { .footer-top { grid-template-columns: 1.4fr 1fr 1fr 1.2fr; } }
      .footer-brand-word { color: var(--sand); font-size: 1.2rem; }
      .footer-brand p { margin-top: 14px; color: #b9c2bb; font-size: 0.9rem; max-width: 320px; }
      .footer-social { display: flex; gap: 12px; margin-top: 18px; align-items: center; }
      .footer-social a { width: 36px; height: 36px; border-radius: 50%; border: 1px solid rgba(247,243,234,0.25); display: flex; align-items: center; justify-content: center; color: var(--sand); transition: border-color .2s ease, color .2s ease; }
      .footer-social a:hover { border-color: var(--gold); color: var(--gold); }
      .footer-col h3 { color: var(--sand); font-size: 0.85rem; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 16px; font-family: 'Inter', sans-serif; font-weight: 700; }
      .footer-col ul { display: flex; flex-direction: column; gap: 10px; }
      .footer-col a { color: #b9c2bb; font-size: 0.9rem; }
      .footer-col a:hover { color: var(--gold-light); }
      .newsletter-form { display: flex; gap: 8px; margin-top: 4px; }
      .newsletter-form input { flex: 1; padding: 11px 14px; border-radius: var(--radius-sm); border: 1px solid rgba(247,243,234,0.25); background: rgba(247,243,234,0.06); color: var(--sand); font-size: 0.86rem; }
      .newsletter-form input::placeholder { color: #8b968f; }
      .newsletter-form button { background: var(--gold); border: none; width: 42px; border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: var(--forest); }
      .newsletter-success { color: var(--gold-light); display: flex; align-items: center; gap: 8px; font-size: 0.9rem; margin-top: 8px; }
      .footer-bottom { max-width: 1200px; margin: 0 auto; padding: 24px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }
      .footer-bottom p { color: #8b968f; font-size: 0.8rem; }
      .footer-bottom-links { display: flex; gap: 18px; }
      .footer-bottom-links a { color: #8b968f; font-size: 0.8rem; }
      .footer-bottom-links a:hover { color: var(--gold-light); }

      .whatsapp-float { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; border-radius: 50%; background: var(--teal); color: var(--white); display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 28px -10px rgba(8,126,139,0.6); z-index: 50; transition: transform .25s ease; }
      .whatsapp-float:hover { transform: scale(1.08); }

      /* ---------- Contact ---------- */
      .contact-grid { display: grid; grid-template-columns: 1fr; gap: 44px; }
      @media (min-width: 900px) { .contact-grid { grid-template-columns: 1.3fr 1fr; } }
      .contact-form { display: flex; flex-direction: column; gap: 18px; background: var(--white); padding: 32px; border-radius: var(--radius-md); border: 1px solid rgba(20,37,31,0.08); }
      .contact-success { background: var(--white); padding: 40px 32px; border-radius: var(--radius-md); text-align: center; border: 1px solid rgba(20,37,31,0.08); }
      .contact-info { display: flex; flex-direction: column; gap: 20px; }
      .contact-info-block h3 { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--forest); margin-bottom: 4px; }
      .contact-info-block p a:hover { color: var(--teal); }
      .contact-whatsapp { justify-content: center; margin-top: 4px; }
      .contact-map { margin-top: 8px; }

      /* ---------- Team ---------- */
      .team-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 26px; }
      @media (min-width: 760px) { .team-grid { grid-template-columns: repeat(4, 1fr); } }
      .team-card { text-align: center; }
      .team-card h4 { margin-top: 14px; font-size: 1rem; }
      .team-card p { font-size: 0.82rem; margin-top: 2px; }

      .not-found { text-align: center; }
      .not-found p { margin: 14px 0 26px; }
      .legal-copy h3 { margin-top: 26px; margin-bottom: 8px; font-size: 1.05rem; }
      .legal-copy p { margin-bottom: 6px; }
      .legal-copy .section-title { margin-bottom: 4px; }
      .legal-copy ul { list-style: disc; padding-left: 22px; margin: 4px 0 14px; }
      .legal-copy li { margin-bottom: 6px; font-size: 0.95rem; line-height: 1.6; color: #3b453f; }
      .legal-copy a { color: var(--teal); text-decoration: underline; text-underline-offset: 2px; }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
        .hero-media { animation: none; }
        .reveal { opacity: 1; transform: none; }
      }
    `}</style>
  );
}
