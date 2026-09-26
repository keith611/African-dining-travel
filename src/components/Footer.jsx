import React, { useState } from "react";
import {
  Instagram,
  Facebook,
  Globe,
  MessageCircle,
  Check,
  Send,
} from "lucide-react";
import { SITE_CONFIG, waHref } from "../config/siteConfig.js";
import { A, ContourDivider } from "./primitives.jsx";

export function Footer({ navigate }) {
  const [subscribed, setSubscribed] = useState(false);
  const wa = waHref(SITE_CONFIG.contact.whatsappNumber);
  const ig = SITE_CONFIG.social.instagram;
  const fb = SITE_CONFIG.social.facebook;
  const tt = SITE_CONFIG.social.tiktok;

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-word footer-brand-word">
            {SITE_CONFIG.business.lineOne}<span className="brand-sub">{SITE_CONFIG.business.lineTwo}</span>
          </span>
          <p>
            Curated African journeys, destination expertise and dining experiences —
            planned by people who know the coastline, the plains and the kitchens firsthand.
          </p>
          <div className="footer-social">
            {ig && <a href={ig} aria-label={`${SITE_CONFIG.business.name} on Instagram`} target="_blank" rel="noreferrer noopener"><Instagram size={18} /></a>}
            {fb && <a href={fb} aria-label={`${SITE_CONFIG.business.name} on Facebook`} target="_blank" rel="noreferrer noopener"><Facebook size={18} /></a>}
            {tt && <a href={tt} aria-label={`${SITE_CONFIG.business.name} on TikTok`} target="_blank" rel="noreferrer noopener"><Globe size={18} /></a>}
            {wa && <a href={wa} aria-label={`Message ${SITE_CONFIG.business.name} on WhatsApp`} target="_blank" rel="noreferrer noopener"><MessageCircle size={18} /></a>}
            {!ig && !fb && !tt && !wa && <span className="footer-social-empty">Social links pending client details</span>}
          </div>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <ul>
            <li><A page="destinations" navigate={navigate}>Destinations</A></li>
            <li><A page="experiences" navigate={navigate}>Experiences</A></li>
            <li><A page="dining" navigate={navigate}>Dining</A></li>
            <li><A page="guide" navigate={navigate}>Travel Guide</A></li>
            <li><A page="gallery" navigate={navigate}>Gallery</A></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><A page="about" navigate={navigate}>About Us</A></li>
            <li><A page="contact" navigate={navigate}>Contact</A></li>
            <li><A page="privacy" navigate={navigate}>Privacy Policy</A></li>
            <li><A page="terms" navigate={navigate}>Terms of Service</A></li>
          </ul>
        </div>

        <div className="footer-col footer-newsletter">
          <h3>Field Notes</h3>
          <p>Occasional dispatches on new destinations and seasonal experiences. No spam.</p>
          {subscribed ? (
            <p className="newsletter-success"><Check size={16} /> You're on the list.</p>
          ) : (
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" name="email" type="email" required placeholder="you@email.com" />
              <button type="submit" aria-label="Subscribe"><Send size={16} /></button>
            </form>
          )}
        </div>
      </div>

      <ContourDivider tone="gold" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.business.name}. All rights reserved.</p>
        <div className="footer-bottom-links">
          <A page="privacy" navigate={navigate}>Privacy</A>
          <A page="terms" navigate={navigate}>Terms</A>
        </div>
      </div>
    </footer>
  );
}

