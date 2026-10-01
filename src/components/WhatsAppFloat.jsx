import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG, waHref } from "../config/siteConfig.js";

export function WhatsAppFloat() {
  const wa = waHref(SITE_CONFIG.contact.whatsappNumber);
  if (!wa) return null; // hide entirely until a real WhatsApp number is supplied
  return (
    <a href={wa} target="_blank" rel="noreferrer noopener" className="whatsapp-float" aria-label={`Chat with ${SITE_CONFIG.business.name} on WhatsApp`}>
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  );
}

/* Floating WhatsApp contact action. */
