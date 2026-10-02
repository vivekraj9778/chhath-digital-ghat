import { useState } from "react";
import { 
  riverGhats, 
  dangerousGhats, 
  localPonds, 
  parkingZones, 
  safetyGuidelines 
} from "../../data/ghats";
import { 
  MapPin, 
  AlertOctagon, 
  Waves, 
  Car, 
  ShieldAlert, 
  Navigation, 
  Sparkles, 
  CheckCircle2, 
  Search,
  ExternalLink,
  LifeBuoy
} from "lucide-react";
import "./GhatDirectory.css";

export default function GhatDirectory() {
  const [activeTab, setActiveTab] = useState("ghats");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGhats = riverGhats.filter(g => 
    !searchTerm.trim() ||
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPonds = localPonds.filter(p =>
    !searchTerm.trim() ||
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDangerous = dangerousGhats.filter(d =>
    !searchTerm.trim() ||
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredParking = parkingZones.filter(pk =>
    !searchTerm.trim() ||
    pk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pk.servesGhats.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openNavigation = (lat, lng, name) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(name)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section ghat-directory-section" id="ghats-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="pill golden-pill">
            <MapPin size={16} /> District Civic & Riverfront Services
          </span>
          <h2 className="section-title">
            Ghats, Ponds & Safety Directory <span>(घाट एवं नागरिक सेवाएं)</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive directory of approved riverfront ghats, municipal ponds, red-alert danger spots, safety protocols, and designated vehicle parking.
          </p>
        </div>

        {/* Navigation Tabs (Directly matches Screenshot 2) */}
        <div className="directory-nav-tabs">
          <button 
            className={`tab-btn ${activeTab === "ghats" ? "active" : ""}`}
            onClick={() => setActiveTab("ghats")}
          >
            <span className="tab-arrow">❯</span> Explore Ghats (घाट देखें)
          </button>

          <button 
            className={`tab-btn ${activeTab === "ponds" ? "active" : ""}`}
            onClick={() => setActiveTab("ponds")}
          >
            <span className="tab-arrow">❯</span> List of Ponds (तालाबों की सूची)
          </button>

          <button 
            className={`tab-btn danger-tab ${activeTab === "dangerous" ? "active" : ""}`}
            onClick={() => setActiveTab("dangerous")}
          >
            <span className="tab-arrow">❯</span> Dangerous Ghats (खतरनाक घाट)
          </button>

          <button 
            className={`tab-btn ${activeTab === "precautions" ? "active" : ""}`}
            onClick={() => setActiveTab("precautions")}
          >
            <span className="tab-arrow">❯</span> Precautions & Safety (सावधानियाँ)
          </button>

          <button 
            className={`tab-btn ${activeTab === "parking" ? "active" : ""}`}
            onClick={() => setActiveTab("parking")}
          >
            <span className="tab-arrow">❯</span> Parking Zones (पार्किंग)
          </button>
        </div>

        {/* Search Bar for Listings */}
        {(activeTab === "ghats" || activeTab === "ponds" || activeTab === "dangerous" || activeTab === "parking") && (
          <div className="dir-search-bar">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder={`Search in ${activeTab}... (e.g. Patna, Rishra, Serampore, Gandhi Ghat)`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {/* Tab Content 1: Explore Ghats */}
        {activeTab === "ghats" && (
          <div className="ghats-grid">
            {filteredGhats.map((ghat) => (
              <div key={ghat.id} className="card ghat-card">
                <div className="ghat-card-top">
                  <div>
                    <span className="ghat-city-tag">{ghat.city} • {ghat.river}</span>
                    <h3 className="ghat-title">{ghat.name}</h3>
                  </div>
                  <span className="status-badge safe-badge">
                    <CheckCircle2 size={13} /> {ghat.status}
                  </span>
                </div>

                <p className="ghat-note">{ghat.note}</p>

                <div className="ghat-meta-details">
                  <div className="meta-row">
                    <strong>Safe Water Depth:</strong>
                    <span>{ghat.waterDepth}</span>
                  </div>
                  <div className="meta-row">
                    <strong>Cleanliness Rating:</strong>
                    <span className="gold-text">⭐ {ghat.cleanliness}</span>
                  </div>
                  <div className="meta-row">
                    <strong>Nearest Parking:</strong>
                    <span>{ghat.parkingNearby}</span>
                  </div>
                </div>

                <div className="ghat-facilities">
                  {ghat.facilities.map((fac, i) => (
                    <span key={i} className="facility-tag">✓ {fac}</span>
                  ))}
                </div>

                <div className="ghat-card-actions">
                  <button 
                    className="btn btn-directions"
                    onClick={() => openNavigation(ghat.lat, ghat.lng, ghat.name)}
                  >
                    <Navigation size={15} /> Get GPS Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: List of Ponds */}
        {activeTab === "ponds" && (
          <div className="ponds-grid">
            {filteredPonds.map((pond) => (
              <div key={pond.id} className="card pond-card">
                <div className="pond-header">
                  <div>
                    <span className="pond-type-tag">{pond.city} • {pond.type}</span>
                    <h3 className="pond-title">{pond.name}</h3>
                  </div>
                  <span className="pond-cap-pill">Capacity: {pond.capacity}</span>
                </div>

                <p className="pond-note">{pond.note}</p>

                <div className="pond-specs">
                  <div className="spec-box">
                    <small>Water Quality</small>
                    <strong>{pond.waterQuality}</strong>
                  </div>
                  <div className="spec-box">
                    <small>Safe Depth</small>
                    <strong>{pond.depth}</strong>
                  </div>
                </div>

                <div className="pond-facilities">
                  {pond.facilities.map((f, idx) => (
                    <span key={idx} className="pond-fac-pill">🌊 {f}</span>
                  ))}
                </div>

                <button 
                  className="btn btn-directions"
                  onClick={() => openNavigation(pond.lat, pond.lng, pond.name)}
                >
                  <Navigation size={15} /> Navigate to Pond
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 3: Dangerous Ghats (Red Alert) */}
        {activeTab === "dangerous" && (
          <div className="dangerous-section">
            <div className="alert-banner-danger">
              <ShieldAlert size={28} className="danger-icon" />
              <div>
                <h4>DISTRICT MAGISTRATE RED ALERT: PROHIBITED RIVER SECTORS</h4>
                <p>
                  The following riverfront sectors have been declared highly hazardous due to sudden underwater drops, 
                  quicksand deposits, and strong counter-currents. <strong>Bathing and Arghya are strictly prohibited.</strong>
                </p>
              </div>
            </div>

            <div className="dangerous-grid">
              {filteredDangerous.map((d) => (
                <div key={d.id} className="card dangerous-card">
                  <div className="danger-card-head">
                    <AlertOctagon size={24} className="danger-text" />
                    <div>
                      <span className="danger-alert-pill">{d.status}</span>
                      <h3 className="danger-title">{d.name}</h3>
                    </div>
                  </div>

                  <div className="danger-info-block">
                    <div className="danger-item">
                      <strong>Hazard Factor:</strong>
                      <span className="danger-text">{d.dangerReason}</span>
                    </div>
                    <div className="danger-item">
                      <strong>Water Depth:</strong>
                      <span>{d.waterDepth}</span>
                    </div>
                    <div className="danger-item">
                      <strong>Police Warning:</strong>
                      <span className="police-text">{d.policeNotice}</span>
                    </div>
                  </div>

                  <div className="alternative-box">
                    <span className="alt-label">Safe Recommended Alternative:</span>
                    <strong className="alt-name">{d.alternativeGhat}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 4: Precautions & Safety */}
        {activeTab === "precautions" && (
          <div className="precautions-grid">
            {safetyGuidelines.map((cat, idx) => (
              <div key={idx} className="card precaution-card">
                <div className="precaution-head">
                  <LifeBuoy size={22} className="gold-text" />
                  <h3 className="precaution-title">{cat.category}</h3>
                </div>

                <ul className="precaution-list">
                  {cat.rules.map((rule, rIdx) => (
                    <li key={rIdx} className="precaution-item">
                      <span className="item-bullet">🛡️</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 5: Parking Availability */}
        {activeTab === "parking" && (
          <div className="parking-grid">
            {filteredParking.map((pk) => (
              <div key={pk.id} className="card parking-card">
                <div className="parking-top">
                  <div>
                    <span className="parking-badge">PUBLIC VEHICLE FACILITY</span>
                    <h3 className="parking-title">{pk.title}</h3>
                  </div>
                  <span className="status-badge parking-status-badge">
                    <Car size={14} /> {pk.status}
                  </span>
                </div>

                <div className="parking-details">
                  <div className="park-row">
                    <strong>Serves Ghats:</strong>
                    <span>{pk.servesGhats}</span>
                  </div>
                  <div className="park-row">
                    <strong>Total Capacity:</strong>
                    <span>{pk.capacity}</span>
                  </div>
                  <div className="park-row">
                    <strong>Walking Distance:</strong>
                    <span>{pk.distance}</span>
                  </div>
                  <div className="park-row">
                    <strong>Parking Fee:</strong>
                    <span className="free-tag">{pk.fee}</span>
                  </div>
                  <div className="park-row shuttle-row">
                    <strong>Shuttle Service:</strong>
                    <span>{pk.shuttle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
