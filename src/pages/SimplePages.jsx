import React, { useEffect, useMemo, useState, useCallback } from "react";
import { SITE_CONFIG } from "../config/site.js";
import { Menu, X, ChevronRight, ChevronLeft, ChevronDown, ArrowRight, MapPin, Compass, UtensilsCrossed, Clock, Users, Phone, Mail, MessageCircle, Instagram, Facebook, Waves, Landmark, TreePine, Building2, ShoppingBag, Moon, Sparkles, Quote, Check, Download, Send, ImageIcon, Globe, PawPrint, AlertTriangle } from "lucide-react";
import { DESTINATIONS, VISIBLE_DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName, EXPERIENCES, DINING, GALLERY, TESTIMONIALS_IS_DEMO, TESTIMONIALS, TRAVEL_GUIDES, SERVICES, TEAM_IS_DEMO, TEAM, PARTNERS, placeholderPartnerLogo, IMAGE_LIBRARY } from "../data/index.js";
import { Reveal, PlaceholderImage, CoordStamp, Eyebrow, ContourDivider, Button, A, SectionIntro, DemoContentNote, DestinationCard, ExperienceCard, DiningCard, Navbar, Footer, WhatsAppFloat, BookingModal, PageHero, Lightbox } from "../components/index.js";

export function TermsPage({ navigate }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Legal" title="Terms & Services" tone="forest" />
      <section className="section section-sand">
        <div className="container container-narrow legal-copy">
          <h2 className="section-title">Terms for Safari Planning and Travel Services</h2>
          <p>
            <strong>Africa Dining & Travel Guide</strong> is a safari logistics and planning company offering both
            off-the-shelf safari and travel programs and tailor-made safari programs.
          </p>

          <h3>Our Safari &amp; Travel Services</h3>
          <p>We offer:</p>
          <ul>
            <li><strong>Off-the-shelf safari and travel programs</strong> — for visitors who wish to choose from available programs and are open to suggestions.</li>
            <li><strong>Tailor-made safari programs</strong> — for visitors with specific interests and family parties.</li>
          </ul>
          <p>Our booking agents are conversant with safari seasons and have helpful information to assist clients in making appropriate choices when planning their trips.</p>
          <p>It is our priority to help travellers make informed choices based on their preferred destinations, travel requirements, and the applicable safari season.</p>

          <h3>Booking Enquiries</h3>
          <p>
            For booking enquiries and further information, please contact <strong>Africa Dining &amp; Travel Guide</strong> through
            the <A page="contact" navigate={navigate}>contact details and booking form</A> provided on our website.
          </p>

          <h3>Traveller Responsibility</h3>
          <p>All travellers are responsible for providing accurate information and requirements as requested by our booking agent.</p>

          <h3>1. Information Required When Booking Your Trip</h3>
          <p>
            After concluding your booking with Africa Dining &amp; Travel Guide, you may be required to provide relevant
            travel and personal information to enable us to plan and coordinate your safari and travel arrangements effectively.
          </p>
          <p>This may include:</p>
          <ul>
            <li>Arrival and departure flight details.</li>
            <li>Meal requirements or dietary restrictions.</li>
            <li>Important personal information as requested by your booking agent, such as passport copies, Yellow Fever Certificate, and personal insurance information.</li>
          </ul>
          <p><strong>Confidentiality Guaranteed.</strong></p>
          <p>It is important to provide all requested information accurately and in a timely manner to ensure the smooth planning and operation of your trip.</p>

          <h3>2. Travel Documents &amp; Health Requirements</h3>
          <p>Travellers are responsible for obtaining and carrying the required valid travel and health documents for their journey.</p>
          <p>Where applicable, a <strong>Yellow Fever Certificate</strong> must be obtained and produced when going through immigration at any entry point.</p>
          <p>Travellers should inform their booking personnel of any physical, health, or dietary challenges and requirements well in advance to ensure comfort and convenience while travelling.</p>

          <h3>3. Travel Insurance &amp; Flying Doctors Services</h3>
          <p>Travel insurance is a priority.</p>
          <p>
            <strong>Flying Doctors Services</strong> for easy evacuation can be arranged upon request at a fee as advised during
            the booking of services. Such services are subject to the terms and conditions applicable to the coverage at
            destinations where the service is available.
          </p>

          <h3>4. Accommodation Availability</h3>
          <p>For quality services with every booking, accommodation and service availability is checked before a tour is confirmed.</p>
          <p>Where the client's preferred accommodation or service is unavailable, alternative options will be sought with the traveller's consent and consideration.</p>
          <p>Any alternative accommodation or service arrangements will be communicated as part of the booking and travel planning process.</p>
          <p>During low and peak seasons, as applicable in most African destinations, last-minute bookings are handled with concern, consideration, and transparency.</p>
          <p>Nothing is too much trouble when you choose Africa Dining &amp; Travel Guide as your travel partner.</p>

          <h3>5. Meet &amp; Greet Services</h3>
          <p>Airport meet-and-greet, hotel check-in, hotel check-out, and safari departure are a priority to ensure smooth operation.</p>
          <p>These services are handled by trained customer service personnel positioned at entry points in Africa as indicated in the traveller's itinerary.</p>
          <p>This helps facilitate the smooth commencement of the planned itinerary.</p>

          <h3>6. Pre-Safari Briefing</h3>
          <p>A pre-safari briefing is provided before the safari commences, depending on the country being visited and the itinerary arranged.</p>
          <p>While on safari, the guide provides a pre-dinner briefing for the next activity, including the relevant do's and don'ts.</p>

          <h3>7. Transportation</h3>
          <p>
            Our service vehicles may vary depending on the traveller's request, available and recommended standards, the
            service to be provided, the destination, and travel requirements, including weather conditions during the
            period of travel.
          </p>
          <p>Our transportation options range from:</p>
          <ul>
            <li>Saloon cars</li>
            <li>Vans</li>
            <li>Coaches</li>
            <li>4x4 Safari Land Cruisers with pop-up roofs</li>
          </ul>

          <h3>8. Branding &amp; Identification</h3>
          <p>Our service vehicles are consistently branded with the <strong>Africa Dining &amp; Travel Guide</strong> logo.</p>
          <p>Our team members in branded gear are ready to assist whenever travellers require information or assistance.</p>
          <p>Our airport representatives and driver-guides also wear branded company attire to make them easily identifiable to our guests.</p>

          <h3>9. Booking Confirmation &amp; Monitoring</h3>
          <p>Once safari services have been confirmed by Africa Dining &amp; Travel Guide, our company booking agent will provide the relevant monitoring details to assist with the smooth operation of the trip.</p>
          <p>Guests will receive the necessary information and updates relating to their confirmed arrangements and itinerary through well-maintained and monitored platforms.</p>
          <p>Travellers will be issued with the <strong>final safari itinerary and accommodation service vouchers</strong> once the safari deposit or full payment has been made.</p>
          <p>Guidelines on deposits will be provided upon receipt of the invoice from our booking agent, together with an invitation visa letter showing all confirmed accommodation.</p>
        </div>
      </section>
    </div>
  );
}

export function LegalPage({ title }) {
  return (
    <div className="page-shell">
      <PageHero eyebrow="Legal" title={title} tone="forest" />
      <section className="section section-sand">
        <div className="container container-narrow legal-copy">
          <p>
            This is placeholder legal copy for the {title.toLowerCase()} page. Replace this
            section with your finalised policy text before launch — structure (headings,
            spacing, typography) is already in place and will hold real content without
            further design work.
          </p>
          <h3>1. Overview</h3>
          <p>Describe what this policy covers and who it applies to.</p>
          <h3>2. Details</h3>
          <p>Add the specific clauses relevant to {SITE_CONFIG.business.name}'s operations here.</p>
          <h3>3. Contact</h3>
          <p>Questions about this policy can be sent to {SITE_CONFIG.contact.email || "[email pending]"}.</p>
        </div>
      </section>
    </div>
  );
}

export function NotFoundPage({ navigate, backPage = "home", label = "page" }) {
  return (
    <div className="page-shell">
      <section className="section section-sand not-found">
        <div className="container">
          <Eyebrow tone="teal">404</Eyebrow>
          <h1 className="section-title">We couldn't find that {label}</h1>
          <p>It may have been renamed or moved. Let's get you back on route.</p>
          <Button variant="primary" onClick={() => navigate(backPage)} icon={ArrowRight}>
            Back to {backPage === "home" ? "Home" : backPage.charAt(0).toUpperCase() + backPage.slice(1)}
          </Button>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   17. GLOBAL STYLES
---------------------------------------------------------------------------- */

