import { Link } from "react-router-dom";
import logoAsset from "@/assets/3qtr-logo.png.asset.json";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={logoAsset.url} alt="3QTR" className="h-16 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Unlocking the 4th Quarter of Human Performance through assessment-based development for competitive sports teams.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Navigate</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/who-we-serve", label: "Who We Serve" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:2039798702" className="hover:text-primary transition-colors">(203) 979-8702</a>
            <a href="mailto:Colette@3Qtr.net" className="hover:text-primary transition-colors">Colette@3Qtr.net</a>
            <span>www.3qtr.net</span>
          </div>
        </div>
      </div>
      <div className="gold-divider mt-12 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 3QTR. All rights reserved.
      </p>
      <p className="text-center text-xs text-muted-foreground mt-2">
        Created by Aurex Services
      </p>
    </div>
  </footer>
);

export default Footer;
