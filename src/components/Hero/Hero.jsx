import { Sparkles, Compass, Music, Scale, MapPin } from "lucide-react";
import { useMusic } from "../../context/MusicContext";
import "./Hero.css";

export default function Hero({ onLocation }) {
  const musicCtx = useMusic();

  const handlePlayMusic = () => {
    if (musicCtx && musicCtx.togglePlay) {
      musicCtx.togglePlay();
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Cinematic Chhath Ghat Background Image */}
      <div className="hero-bg-media">
        <img 
          src="/images/chhath-ghat-hero.jpg" 
          alt="Sacred Chhath Puja Ghat at Sunrise" 
          className="hero-backdrop"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-sparkles-ambient"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-badge">
          <Sparkles size={16} className="sparkle-icon" />
          <span>Kartik Shukla Shashthi • 13–16 November 2026</span>
        </div>

        <h1 className="hero-headline">
          Chhath Mahaparv <br />
          <span className="gold-shimmer">Sacred Digital Ghat</span>
        </h1>

        <p className="hero-lead">
          Experience the divine purity of Surya Dev and Chhathi Maiya. Live sunrise & sunset Arghya timings, 
          real-time ghat safety monitoring, comprehensive Puja Samagri calculator, and sacred traditional bhajans.
        </p>

        <div className="hero-cta-group">
          <a href="#dashboard" className="btn btn-primary-glow">
            <Compass size={18} /> Open Live Dashboard
          </a>

          <a href="#samagri-calculator" className="btn btn-glass">
            <Scale size={18} /> Samagri & Prasad Calculator
          </a>

          <a href="#ghats-section" className="btn btn-glass">
            <MapPin size={18} /> Explore Ghats & Ponds
          </a>

          <button onClick={handlePlayMusic} className="btn btn-devotional">
            <Music size={18} /> {musicCtx?.isPlaying ? "Playing Chhath Geet 🎶" : "Play Chhath Geet 🪔"}
          </button>
        </div>

        {/* Live Ribbon Indicators */}
        <div className="hero-ticker-bar">
          <div className="ticker-item">
            <span className="ticker-dot live-pulse"></span>
            <strong>Live Status:</strong> Ghat administration teams on active alert
          </div>
          <div className="ticker-item">
            <span>☀️</span>
            <strong>Next Arghya:</strong> Sandhya Arghya & Usha Arghya
          </div>
          <div className="ticker-item">
            <span>🪔</span>
            <strong>Purity Protocol:</strong> Zero Plastic & Clean Ganga Initiative
          </div>
        </div>
      </div>
    </section>
  );
}
