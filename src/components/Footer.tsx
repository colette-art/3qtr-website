import { Link } from "react-router-dom";
import logo from "@/assets/3qtr-logo.png";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/lib/constants";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/leaders-organizations", label: "Business" },
  { to: "/sports-teams", label: "Sports" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="3Qtr" className="h-16 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Unlocking Human Performance. Stronger People. Stronger Teams. Better Performance.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Navigate</h4>
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href={`tel:${CONTACT_PHONE_HREF}`} className="hover:text-primary transition-colors">{CONTACT_PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors">{CONTACT_EMAIL}</a>
            <span>www.3qtr.net</span>
          </div>
        </div>
      </div>
      <div className="gold-divider mt-12 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 3Qtr. All rights reserved.
      </p>
      <p className="text-center text-xs text-muted-foreground mt-2">
        Created by Aurex Services
      </p>
    </div>
  </footer>
);

export default Footer;
