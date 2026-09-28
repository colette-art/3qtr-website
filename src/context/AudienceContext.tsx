import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Audience = "leaders" | "sports";

export const AUDIENCES: Record<Audience, { label: string; short: string; path: string; tagline: string }> = {
  leaders: {
    label: "Leaders & Organizations",
    short: "Leaders & Organizations",
    path: "/leaders-organizations",
    tagline: "Strengthen leadership. Develop people. Improve how teams work together.",
  },
  sports: {
    label: "Competitive Sports Teams",
    short: "Sports Teams",
    path: "/sports-teams",
    tagline: "Develop the whole student-athlete. Equip coaches. Strengthen the team.",
  },
};

const STORAGE_KEY = "3qtr-audience";
const DISMISSED_KEY = "3qtr-gateway-dismissed";

const read = (store: "local" | "session", key: string) => {
  try {
    return (store === "local" ? window.localStorage : window.sessionStorage).getItem(key);
  } catch {
    return null;
  }
};
const write = (store: "local" | "session", key: string, value: string) => {
  try {
    (store === "local" ? window.localStorage : window.sessionStorage).setItem(key, value);
  } catch {
    /* storage unavailable (private mode): the choice just won't persist */
  }
};

/** Which audience section a URL belongs to, if any. */
const audienceForPath = (pathname: string): Audience | null => {
  if (pathname.startsWith("/leaders-organizations")) return "leaders";
  if (pathname.startsWith("/sports-teams") || pathname.startsWith("/nil-faq")) return "sports";
  return null;
};

interface AudienceContextValue {
  audience: Audience | null;
  gatewayOpen: boolean;
  openGateway: () => void;
  closeGateway: () => void;
  choose: (a: Audience) => void;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

export const AudienceProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [stored, setStored] = useState<Audience | null>(() => {
    const v = read("local", STORAGE_KEY);
    return v === "leaders" || v === "sports" ? v : null;
  });
  const [gatewayOpen, setGatewayOpen] = useState(
    () => window.location.pathname === "/" && !read("local", STORAGE_KEY) && !read("session", DISMISSED_KEY),
  );

  const routeAudience = audienceForPath(pathname);
  const audience = routeAudience ?? stored;

  // Visiting an audience section (even via a direct link) remembers it.
  useEffect(() => {
    if (routeAudience && routeAudience !== stored) {
      setStored(routeAudience);
      write("local", STORAGE_KEY, routeAudience);
    }
  }, [routeAudience, stored]);

  const closeGateway = useCallback(() => {
    write("session", DISMISSED_KEY, "1");
    setGatewayOpen(false);
  }, []);

  const choose = useCallback(
    (a: Audience) => {
      setStored(a);
      write("local", STORAGE_KEY, a);
      write("session", DISMISSED_KEY, "1");
      setGatewayOpen(false);
      navigate(AUDIENCES[a].path);
    },
    [navigate],
  );

  const value = useMemo(
    () => ({ audience, gatewayOpen, openGateway: () => setGatewayOpen(true), closeGateway, choose }),
    [audience, gatewayOpen, closeGateway, choose],
  );

  return <AudienceContext.Provider value={value}>{children}</AudienceContext.Provider>;
};

export const useAudience = () => {
  const ctx = useContext(AudienceContext);
  if (!ctx) throw new Error("useAudience must be used inside AudienceProvider");
  return ctx;
};
