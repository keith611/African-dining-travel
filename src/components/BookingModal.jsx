import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, X, Send, Phone, MessageCircle } from "lucide-react";
import { DESTINATIONS, BOOKABLE_COUNTRIES, BOOKABLE_DESTINATIONS, findBookableByName } from "../data/destinations.js";
import { Button, Eyebrow } from "./primitives.jsx";

export function BookingModal({ item, onClose }) {
  const [step, setStep] = useState("form");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [country, setCountry] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [name, setName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => dialogRef.current?.focus(), 10);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [item, onClose]);

  // Every time a new booking is opened, reset the form and try to
  // pre-select the country + destination it was opened from — via
  // BOOKABLE_DESTINATIONS, the same single source of truth the dropdowns
  // below are built from, so this never drifts out of sync.
  useEffect(() => {
    if (!item) return;
    setStep("form");
    setAdults(2);
    setChildren(0);
    setTravelDate("");
    setName("");
    setIsSending(false);
    setSubmitError("");
    const destName = item.destinationName || DESTINATIONS.find((d) => d.id === item.destinationSlug)?.name;
    const resolved = findBookableByName(destName);
    if (resolved) {
      setCountry(resolved.country);
      setDestinationId(resolved.id);
    } else {
      setCountry("");
      setDestinationId("");
    }
  }, [item]);

  if (!item) return null;

  const destName = item.destinationName || DESTINATIONS.find((d) => d.id === item.destinationSlug)?.name;
  const destinationsForCountry = BOOKABLE_DESTINATIONS.filter((b) => b.country === country);
  const selectedDestination = BOOKABLE_DESTINATIONS.find((b) => b.id === destinationId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    const formData = new FormData(event.currentTarget);
    setIsSending(true);
    setSubmitError("");

    try {
      if (String(formData.get("website") || "").trim()) {
        setStep("confirmed");
        return;
      }

      const emailjs = import.meta.env;
      if (!emailjs.VITE_EMAILJS_SERVICE_ID || !emailjs.VITE_EMAILJS_TEMPLATE_ID || !emailjs.VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error("Booking email is not configured yet.");
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailjs.VITE_EMAILJS_SERVICE_ID,
          template_id: emailjs.VITE_EMAILJS_TEMPLATE_ID,
          user_id: emailjs.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            name: name.trim(),
            email: String(formData.get("email") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            country,
            destination: selectedDestination?.name || "",
            travel_date: travelDate,
            adults,
            children,
            experience: item.title || item.name || "Travel request",
            price: item.price || item.priceRange || "Not specified",
            notes: String(formData.get("notes") || "").trim() || "None",
            website: String(formData.get("website") || "").trim(),
          },
        }),
      });
      if (!response.ok) throw new Error("Booking request could not be sent.");
      setStep("confirmed");
    } catch {
      setSubmitError("We couldn't send your request. Please try again or email africadining1@gmail.com.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" tabIndex={-1} ref={dialogRef}>
        <button className="modal-close" onClick={onClose} aria-label="Close booking dialog"><X size={20} /></button>

        {step === "form" && (
          <>
            <Eyebrow tone="teal">Reserve your place</Eyebrow>
            <h3 id="booking-title" className="modal-title">{item.title || item.name}</h3>
            <p className="modal-sub">
              {destName ? `${destName} · ` : ""}{item.price || item.priceRange || ""}
            </p>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="bk-country">Country</label>
                  <select
                    id="bk-country"
                    name="country"
                    required
                    value={country}
                    onChange={(e) => { setCountry(e.target.value); setDestinationId(""); }}
                  >
                    <option value="" disabled>Select a country</option>
                    {BOOKABLE_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="bk-destination">Destination</label>
                  <select
                    id="bk-destination"
                    name="destination"
                    required
                    value={destinationId}
                    onChange={(e) => setDestinationId(e.target.value)}
                    disabled={!country}
                  >
                    <option value="" disabled>{country ? "Select a destination" : "Select a country first"}</option>
                    {destinationsForCountry.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="bk-date">Travel date</label>
                <input id="bk-date" name="date" type="date" required value={travelDate} onChange={(e) => setTravelDate(e.target.value)} />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="bk-adults">Adults</label>
                  <div className="stepper">
                    <button type="button" aria-label="Decrease adults" onClick={() => setAdults((g) => Math.max(1, g - 1))}>−</button>
                    <span id="bk-adults" aria-live="polite">{adults}</span>
                    <button type="button" aria-label="Increase adults" onClick={() => setAdults((g) => Math.min(16, g + 1))}>+</button>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="bk-children">Children</label>
                  <div className="stepper">
                    <button type="button" aria-label="Decrease children" onClick={() => setChildren((g) => Math.max(0, g - 1))}>−</button>
                    <span id="bk-children" aria-live="polite">{children}</span>
                    <button type="button" aria-label="Increase children" onClick={() => setChildren((g) => Math.min(16, g + 1))}>+</button>
                  </div>
                </div>
              </div>
              <p className="field-hint">Adults: 12 years and above · Children: 12 years and below.</p>

              <div className="field">
                <label htmlFor="bk-name">Full name</label>
                <input id="bk-name" name="name" type="text" required placeholder="Jane Traveller" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="bk-email">Email</label>
                <input id="bk-email" name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="field">
                <label htmlFor="bk-phone">Phone / WhatsApp</label>
                <input id="bk-phone" name="phone" type="tel" required placeholder="+254 7XX XXX XXX" />
              </div>
              <div className="field">
                <label htmlFor="bk-notes">Special requests (optional)</label>
                <textarea id="bk-notes" name="notes" rows={2} placeholder="Dietary needs, arrival time, special requests…" />
              </div>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="bk-website">Leave this field blank</label>
                <input id="bk-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <p className="booking-note">
                This is a booking request, not a live reservation — nothing is charged or reserved yet.
              </p>
              {submitError && <p className="field-error" role="alert">{submitError}</p>}
              <Button type="submit" variant="primary" className="booking-submit" disabled={isSending}>
                {isSending ? "Sending request…" : "Request to Book"}
              </Button>
            </form>
          </>
        )}

        {step === "confirmed" && (
          <div className="booking-confirmed">
            <span className="confirm-icon"><Check size={26} /></span>
            <h3 className="modal-title">Request sent</h3>
            <p>
              Thanks{name ? `, ${name.split(" ")[0]}` : ""} — we've received your request for{" "}
              <strong>{selectedDestination?.name || country}</strong>{country ? `, ${country}` : ""}.
            </p>
            <dl className="booking-summary">
              <div><dt>Destination</dt><dd>{selectedDestination?.name || "—"}</dd></div>
              <div><dt>Country</dt><dd>{country || "—"}</dd></div>
              <div><dt>Travel date</dt><dd>{travelDate || "—"}</dd></div>
              <div><dt>Adults</dt><dd>{adults}</dd></div>
              <div><dt>Children</dt><dd>{children}</dd></div>
            </dl>
            <p>A member of our team will confirm availability and next steps by email.</p>
            <Button variant="secondary" onClick={onClose}>Done</Button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   6. CARDS
---------------------------------------------------------------------------- */
