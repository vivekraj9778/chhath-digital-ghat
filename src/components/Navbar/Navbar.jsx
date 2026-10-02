import { useState } from "react";
import { 
  Menu, 
  X, 
  Sun, 
  Music, 
  MapPin, 
  Scale, 
  Building2, 
  Image as ImageIcon, 
  PhoneCall, 
  Compass, 
  BookOpen
} from "lucide-react";
import { useMusic } from "../../context/MusicContext";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const musicCtx = useMusic();

  const links = [
    { href: "#home", label: "Home (होम)" },
    { href: "#dashboard", label: "Dashboard (डैशबोर्ड)" },
    { href: "#guide", label: "About Chhath (छठ पूजा के बारे में)" },
    { href: "#samagri-calculator", label: "Samagri Calculator (सामग्री गणना)" },
    { href: "#ghats-section", label: "Ghats & Ponds (घाट व तालाब)" },
    { href: "#administration", label: "Administration (पूजा प्रशासन)" },
    { href: "#administration", label: "District Orders (जिला आदेश)" },
    { href: "#gallery", label: "Gallery (तस्वीरें/वीडियो)" },
    { href: "#administration", label: "Contact (संपर्क करें)" }
  ];

  return (
    <header className="main-navbar">
      <div className="container nav-inner">
        {/* Brand Logo */}
        <a className="brand-logo" href="#home">
          <div className="logo-sun-wrap">
            <Sun size={24} className="sun-spin-slow" />
          </div>
          <div className="brand-text">
            <strong>Chhath Digital Ghat</strong>
            <span>छठ महापर्व डिजिटल पोर्टल</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#samagri-calculator" className="highlight-nav-item">Samagri Calculator</a>
          <a href="#ghats-section">Ghats</a>
          <a href="#administration">Administration</a>
          <a href="#gallery">Gallery</a>
          <a href="#administration">Contact</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="nav-actions-right">
          <button 
            className={`music-nav-toggle ${musicCtx?.isPlaying ? "playing" : ""}`}
            onClick={() => musicCtx?.togglePlay()}
            title={musicCtx?.isPlaying ? "Pause Chhath Song" : "Play Chhath Song"}
          >
            <Music size={16} />
            <span>{musicCtx?.isPlaying ? "Chhath Song 🎶" : "Play Geet 🪔"}</span>
          </button>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="mobile-link"
              >
                {link.label}
              </a>
            ))}
            <button 
              className="btn btn-primary-glow mobile-music-btn"
              onClick={() => { musicCtx?.togglePlay(); setOpen(false); }}
            >
              <Music size={18} /> {musicCtx?.isPlaying ? "Pause Devotional Music" : "Play Chhath Geet 🪔"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
