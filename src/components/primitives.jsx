import React from "react";
import {
  ArrowRight,
  Image as ImageIcon,
  Compass,
  AlertTriangle,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal.js";
import { IMAGE_LIBRARY } from "../data/images.js";

export const TONE_GRADIENTS = {
  sand: "linear-gradient(135deg, #E8DDC8 0%, #F7F3EA 65%)",
  forest: "linear-gradient(135deg, #24463A 0%, #14251F 75%)",
  teal: "linear-gradient(135deg, #0BA3B2 0%, #076871 80%)",
  gold: "linear-gradient(135deg, #E0AC71 0%, #C98A3D 80%)",
};

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

export function PlaceholderImage({ label, ratio = "4 / 3", tone = "sand", icon: Icon = ImageIcon, className = "", rounded = "rounded-lg" }) {
  const realSrc = IMAGE_LIBRARY[label];

  if (realSrc) {
    return (
      <div
        className={`ph-media ph-media-real ${rounded} ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={realSrc}
          alt={label.replace(/—/g, "-")}
          loading="lazy"
        />
      </div>
    );
  }

  const dark = tone !== "sand";
  return (
    <div
      className={`ph-media ${rounded} ${className}`}
      style={{ aspectRatio: ratio, background: TONE_GRADIENTS[tone] || TONE_GRADIENTS.sand }}
      role="img"
      aria-label={`Placeholder image: ${label}`}
    >
      <span className="ph-pattern" aria-hidden="true" />
      <span className={`ph-content ${dark ? "is-dark" : ""}`}>
        <Icon size={26} strokeWidth={1.25} aria-hidden="true" />
        <span className="ph-label">{label}</span>
      </span>
    </div>
  );
}

export function CoordStamp({ label, className = "" }) {
  return (
    <div className={`coord-stamp ${className}`} aria-hidden="true">
      <span className="coord-stamp-ring">
        <Compass size={13} strokeWidth={1.4} />
      </span>
      <span className="coord-stamp-text">{label}</span>
    </div>
  );
}

export function Eyebrow({ children, tone = "gold" }) {
  return <span className={`eyebrow eyebrow-${tone}`}>{children}</span>;
}

export function ContourDivider({ tone = "earth" }) {
  return (
    <div className={`contour-divider contour-${tone}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path d="M0 20 C 150 40, 300 0, 450 20 S 750 40, 900 20 S 1150 0, 1200 20" />
      </svg>
    </div>
  );
}

export function Button({ children, variant = "primary", onClick, href, type = "button", icon: Icon, className = "", ...rest }) {
  const cls = `btn btn-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon size={17} strokeWidth={2} aria-hidden="true" /> : null}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}

export function A({ page, param, navigate, className = "", children, ...rest }) {
  return (
    <a
      href={`#/${page}${param ? "/" + encodeURIComponent(param) : ""}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(page, param);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export function SectionIntro({ eyebrow, title, lede, tone = "gold", align = "left" }) {
  return (
    <Reveal className={`section-intro align-${align}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className="section-title">{title}</h2>
      {lede ? <p className="section-lede">{lede}</p> : null}
    </Reveal>
  );
}

export function DemoContentNote({ children }) {
  return (
    <div className="demo-note" role="note">
      <AlertTriangle size={14} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   4. NAVIGATION, FOOTER, GLOBAL WIDGETS
---------------------------------------------------------------------------- */
