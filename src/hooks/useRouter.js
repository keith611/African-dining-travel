import { useState, useEffect, useCallback } from "react";
import { PAGE_META } from "../config/siteConfig.js";

export function parseHash() {
  const raw = (typeof window !== "undefined" ? window.location.hash : "") || "#/home";
  const parts = raw.replace(/^#\/?/, "").split("/").filter(Boolean);
  return { page: parts[0] || "home", param: parts[1] ? decodeURIComponent(parts[1]) : null };
}
export function useRouter() {
  const [route, setRoute] = useState(() => parseHash());

  const navigate = useCallback((page, param = null) => {
    const hash = `#/${page}${param ? "/" + encodeURIComponent(param) : ""}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      setRoute({ page, param });
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Basic per-page SEO: document title + meta description.
  useEffect(() => {
    const meta = PAGE_META[route.page] || PAGE_META.home;
    if (typeof document !== "undefined") {
      document.title = meta.title;
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", meta.desc);
    }
  }, [route.page]);

  return { route, navigate };
}

/* ----------------------------------------------------------------------------
   3. SHARED PRIMITIVES
---------------------------------------------------------------------------- */
