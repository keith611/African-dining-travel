import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "../config/siteConfig.js";
import { LOGO_IMAGE } from "../data/images.js";
import { A, Button } from "./primitives.jsx";

export function Navbar({ route, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = route.page === "home";
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [route.page, route.param]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${transparent ? "navbar-transparent" : "navbar-solid"} ${menuOpen ? "navbar-menu-open" : ""}`}>
      <div className="navbar-inner">
        <A page="home" navigate={navigate} className="brand" aria-label={`${SITE_CONFIG.business.name} — home`}>
          <span className="brand-logo-wrap">
            <img src={LOGO_IMAGE} alt="" aria-hidden="true" />
          </span>
        </A>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <A
              key={link.page}
              page={link.page}
              navigate={navigate}
              className={`nav-link ${route.page === link.page ? "is-active" : ""}`}
              aria-current={route.page === link.page ? "page" : undefined}
            >
              {link.label}
            </A>
          ))}
        </nav>

        <div className="navbar-actions">
          <Button variant="primary" className="nav-cta" onClick={() => navigate("experiences")}>
            Book Now
          </Button>
          <button
            className="nav-burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav-mobile ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile" className="nav-mobile-links">
          {NAV_LINKS.map((link, i) => (
            <A
              key={link.page}
              page={link.page}
              navigate={navigate}
              className={`nav-mobile-link ${route.page === link.page ? "is-active" : ""}`}
              style={{ transitionDelay: menuOpen ? `${i * 35}ms` : "0ms" }}
            >
              {link.label}
            </A>
          ))}
        </nav>
        <Button variant="primary" className="nav-mobile-cta" onClick={() => navigate("experiences")}>
          Book Now
        </Button>
      </div>
    </header>
  );
}

