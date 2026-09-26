import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PlaceholderImage } from "./primitives.jsx";

export function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop lightbox-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="lightbox-frame" role="dialog" aria-modal="true" aria-label={item.label}>
        <button className="modal-close" onClick={onClose} aria-label="Close image"><X size={20} /></button>
        <PlaceholderImage label={item.label} tone={item.tone || "sand"} ratio="16 / 10" className="lightbox-media" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   10. PAGE: EXPERIENCES (listing + detail)
---------------------------------------------------------------------------- */

