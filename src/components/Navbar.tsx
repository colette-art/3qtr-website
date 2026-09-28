import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Repeat, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/3qtr-logo.png";
import { AUDIENCES, useAudience } from "@/context/AudienceContext";

/** Each audience only sees links for its own content. */
const linksFor = (audience: ReturnType<typeof useAudience>["audience"]) => {
  const home = { to: "/", label: "Home" };
  const about = { to: "/about", label: "About" };
  const contact = { to: "/contact", label: "Contact" };
  if (audience === "leaders") {
    return [home, { to: AUDIENCES.leaders.path, label: AUDIENCES.leaders.short }, about, contact];
  }
  if (audience === "sports") {
    return [home, { to: AUDIENCES.sports.path, label: AUDIENCES.sports.short }, { to: "/nil-faq", label: "NIL FAQ" }, about, contact];
  }
  return [
    home,
    { to: AUDIENCES.leaders.path, label: AUDIENCES.leaders.short },
    { to: AUDIENCES.sports.path, label: AUDIENCES.sports.short },
    about,
    contact,
  ];
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { audience, openGateway } = useAudience();

  const navLinks = linksFor(audience);
  const bookTo = audience ? `${AUDIENCES[audience].path}#inquiry` : "/contact";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="3Qtr" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                location.pathname === l.to ? "text-primary" : "text-foreground/70 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {audience && (
            <button
              type="button"
              onClick={openGateway}
              title="Switch between Leaders & Organizations and Competitive Sports Teams"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
            >
              <Repeat size={12} /> Switch
            </button>
          )}
          <Link
            to={bookTo}
            className="ml-1 px-5 py-2.5 text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm tracking-wide uppercase transition-opacity hover:opacity-90"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {audience && (
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Viewing: <span className="text-primary">{AUDIENCES[audience].label}</span>
                </p>
              )}
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium tracking-wide uppercase ${
                    location.pathname === l.to ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              {audience && (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openGateway();
                  }}
                  className="inline-flex items-center gap-2 text-left text-sm font-semibold uppercase tracking-wider text-primary"
                >
                  <Repeat size={14} /> Switch path
                </button>
              )}
              <Link
                to={bookTo}
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 text-center text-sm font-semibold bg-gold-gradient text-primary-foreground rounded-sm tracking-wide uppercase"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
