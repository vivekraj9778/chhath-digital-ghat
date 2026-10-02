import { BookOpen, Sparkles, Sun, Heart, Award, Shield } from "lucide-react";
import "./FestivalGuide.css";

export default function FestivalGuide() {
  const pillars = [
    {
      icon: "☀️",
      title: "Vedic Sun Worship (सूर्य व छठी मइया)",
      desc: "Chhath is the only ancient Vedic festival that honors the Sun God as the visible deity ('Pratyaksha Devata') responsible for all life, energy, and healing on Earth, along with Chhathi Maiya (Shashthi Devi), protector of children and families."
    },
    {
      icon: "🧘",
      title: "Tapasya & 36-Hr Nirjala Fast",
      desc: "Devotees observe 36 continuous hours of fast without a single drop of water. This intense discipline purifies body and mind, balances physiological rhythm, and fosters profound spiritual strength."
    },
    {
      icon: "🌅",
      title: "Arghya to Setting & Rising Sun",
      desc: "Unlike other faiths where only rising deities are worshipped, Chhath begins with Sandhya Arghya to the setting sun (revering twilight and life's twilight phase) followed by Usha Arghya to the dawn, symbolizing eternal continuity."
    },
    {
      icon: "🎋",
      title: "Complete Social Equality",
      desc: "No priest (purohit) or middleman is required. Every devotee stands equal in the holy river. Handmade bamboo dhoras, clay chulhas, and farm-fresh produce celebrate nature and human dignity without caste or status divides."
    }
  ];

  return (
    <section className="section festival-guide-section" id="guide">
      <div className="container">
        <div className="section-head text-center">
          <span className="pill golden-pill">
            <BookOpen size={16} /> Spiritual Heritage & Vedic Science
          </span>
          <h2 className="section-title">
            About Chhath Mahaparv <span>(छठ पूजा का रहस्य व महत्व)</span>
          </h2>
          <p className="section-subtitle">
            An unbroken prehistoric tradition uniting cosmic solar energy, environmental cleanliness, and selfless devotion.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((p, idx) => (
            <div key={idx} className="card pillar-card">
              <span className="pillar-icon">{p.icon}</span>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Scientific Significance Callout */}
        <div className="card science-callout-card">
          <div className="callout-head">
            <Sparkles size={20} className="gold-text" />
            <h3>The Science Behind River Arghya (सूर्य नमस्कार व जल साधना का विज्ञान)</h3>
          </div>
          <p>
            Standing waist-deep in cool moving water during early dawn and sunset activates the body's solar plexus 
            (Manipuraka Chakra). The refraction of soft morning ultraviolet rays through water poured from a copper 
            or brass lota creates a full spectrum prism that enriches retinal health, stimulates Vitamin D synthesis, 
            and stimulates the pineal and pituitary glands, elevating mental serenity and longevity.
          </p>
        </div>
      </div>
    </section>
  );
}
