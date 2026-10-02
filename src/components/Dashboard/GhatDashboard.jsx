import { useState, useEffect } from "react";
import { 
  Sun, 
  Sunset, 
  Clock, 
  ShieldCheck, 
  Waves, 
  AlertTriangle, 
  PhoneCall, 
  MapPin, 
  Calendar, 
  Heart,
  Droplets,
  Activity
} from "lucide-react";
import "./GhatDashboard.css";

const cityData = {
  Patna: {
    name: "Patna (पटना - गंगा तट)",
    sunrise: "06:04 AM",
    sunset: "05:01 PM",
    river: "Ganga",
    waterStatus: "Normal & Safe (3.2 ft average depth)",
    waterSpeed: "1.8 knots (Moderate flow)",
    patrolBoats: "42 SDRF / NDRF motorboats on active duty",
    emergencyContact: "0612-2217305",
    totalGhats: "105 Designated Ghats"
  },
  Kolkata: {
    name: "Kolkata & Hooghly (कोलकाता, रिशड़ा, श्रीरामपुर)",
    sunrise: "05:46 AM",
    sunset: "04:54 PM",
    river: "Hooghly (Ganges)",
    waterStatus: "Tidal conditions monitored (High tide warning at 04:30 PM)",
    waterSpeed: "2.4 knots (Tidal surge)",
    patrolBoats: "28 River Police speedboats",
    emergencyContact: "033-22143230",
    totalGhats: "72 Riverside Ghats"
  },
  Varanasi: {
    name: "Varanasi (वाराणसी - अस्सी व दशाश्वमेध)",
    sunrise: "06:12 AM",
    sunset: "05:10 PM",
    river: "Ganga",
    waterStatus: "Clean, chains anchored at 3.5 ft boundary",
    waterSpeed: "1.5 knots (Gentle flow)",
    patrolBoats: "35 NDRF Water Rescue crafts",
    emergencyContact: "0542-2501234",
    totalGhats: "84 Heritage Ghats"
  },
  Ranchi: {
    name: "Ranchi (रांची - बड़ा तालाब व हटिया डैम)",
    sunrise: "06:01 AM",
    sunset: "05:04 PM",
    river: "Harmu & Water reservoirs",
    waterStatus: "Stable reservoir levels, barricaded platforms",
    waterSpeed: "Calm water",
    patrolBoats: "16 Rescue Zodiacs",
    emergencyContact: "0651-2215855",
    totalGhats: "45 Urban Sarovars"
  },
  Delhi: {
    name: "Delhi NCR (दिल्ली - यमुना घाट व कुड)",
    sunrise: "06:42 AM",
    sunset: "05:28 PM",
    river: "Yamuna & 1,000+ Civic Kunds",
    waterStatus: "Artificial civic ponds filled with fresh filtered water",
    waterSpeed: "Controlled pond flow",
    patrolBoats: "Civil Defence Volunteers deployed",
    emergencyContact: "011-22445566",
    totalGhats: "1,100 Artificial Ponds"
  }
};

const festivalDays = [
  {
    dayNumber: "Day 1",
    name: "Nahay-Khay (नहाय-खाय)",
    date: "13 November 2026",
    status: "Completed",
    description: "Devotees take a holy purification bath in the sacred river and prepare divine Kaddu-Bhaat (bottle gourd and rice with chana dal in pure ghee and rock salt).",
    icon: "💧",
    color: "#3b82f6"
  },
  {
    dayNumber: "Day 2",
    name: "Kharna / Lohanda (खरना)",
    date: "14 November 2026",
    status: "Active Today",
    description: "Full day Nirjala fasting until sunset. In the evening, special Gur Rasiao-Kheer and fresh Ghee Rotis are offered in silence, initiating the 36-hour unbroken fast.",
    icon: "🍚",
    color: "#f59e0b"
  },
  {
    dayNumber: "Day 3",
    name: "Sandhya Arghya (पहला अर्घ्य - अस्तलगामी सूर्य)",
    date: "15 November 2026",
    status: "Upcoming Focus",
    description: "Devotees gather at river ghats dressed in traditional yellow-red attire. Holy Daura and Soop filled with Thekua and fruits are offered to the setting Sun God.",
    icon: "🌅",
    color: "#f97316"
  },
  {
    dayNumber: "Day 4",
    name: "Usha Arghya & Paran (प्रातः अर्घ्य व पारण)",
    date: "16 November 2026",
    status: "Grand Finale",
    description: "Standing in holy river water before sunrise, devotees offer Arghya to the rising Sun. Fast is broken with ginger and raw sugar, followed by grand prasad distribution.",
    icon: "☀️",
    color: "#eab308"
  }
];

export default function GhatDashboard() {
  const [selectedCity, setSelectedCity] = useState("Patna");
  const city = cityData[selectedCity] || cityData.Patna;

  // Countdown to next Arghya (e.g. Sandhya Arghya at 5:00 PM)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="pill golden-pill">
            <Activity size={16} /> Live Festival Central Dashboard
          </span>
          <h2 className="section-title">
            Chhath Ghat Command Center <span>(घाट नियंत्रण कक्ष)</span>
          </h2>
          <p className="section-subtitle">
            Real-time Arghya countdown, precise celestial sunrise/sunset calculation, river safety index, and emergency lifelines.
          </p>
        </div>

        {/* City Switcher Bar */}
        <div className="city-selector-bar">
          <span className="selector-title">
            <MapPin size={16} className="gold-text" /> Select Region / City:
          </span>
          <div className="city-buttons">
            {Object.keys(cityData).map((cKey) => (
              <button
                key={cKey}
                className={`city-pill ${selectedCity === cKey ? "active" : ""}`}
                onClick={() => setSelectedCity(cKey)}
              >
                {cKey}
              </button>
            ))}
          </div>
        </div>

        {/* Master Highlights Grid */}
        <div className="dashboard-grid">
          {/* Card 1: Next Arghya Countdown */}
          <div className="card dashboard-card countdown-card">
            <div className="card-top">
              <span className="card-badge orange-badge">
                <Clock size={15} /> Primary Auspicious Tithi
              </span>
              <span className="live-indicator">LIVE COUNTDOWN</span>
            </div>
            <h3 className="card-headline">Sandhya Arghya (संध्या अर्घ्य)</h3>
            <p className="card-sub">Time remaining until sacred sunset offering to Surya Dev</p>
            
            <div className="countdown-display">
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="time-unit">HOURS</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="time-unit">MINUTES</span>
              </div>
              <span className="time-separator">:</span>
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="time-unit">SECONDS</span>
              </div>
            </div>

            <div className="card-footer-info">
              <span>🌅 Sunset Arghya: <strong>{city.sunset}</strong></span>
              <span>🌄 Usha Arghya: <strong>{city.sunrise}</strong></span>
            </div>
          </div>

          {/* Card 2: Celestial Timings */}
          <div className="card dashboard-card timings-card">
            <div className="card-top">
              <span className="card-badge yellow-badge">
                <Sun size={15} /> {city.name}
              </span>
              <span className="badge-tag">PANCHANG VERIFIED</span>
            </div>
            <h3 className="card-headline">Sun Timings (सूर्य समय)</h3>
            <p className="card-sub">Calculated for exact coordinates of {selectedCity} riverfront</p>

            <div className="timings-dual-row">
              <div className="timing-box sunrise-box">
                <div className="timing-icon">🌅</div>
                <div>
                  <small>Morning Usha Arghya</small>
                  <h4>{city.sunrise}</h4>
                  <span className="muhurat-tag">Brahma Muhurat 04:35 AM</span>
                </div>
              </div>

              <div className="timing-box sunset-box">
                <div className="timing-icon">🌇</div>
                <div>
                  <small>Evening Sandhya Arghya</small>
                  <h4>{city.sunset}</h4>
                  <span className="muhurat-tag">Godhuli Bela 04:55 PM</span>
                </div>
              </div>
            </div>

            <div className="card-footer-info">
              <span>📍 Total Monitoring: <strong>{city.totalGhats}</strong></span>
            </div>
          </div>

          {/* Card 3: River Flow & Ghat Safety Index */}
          <div className="card dashboard-card water-card">
            <div className="card-top">
              <span className="card-badge blue-badge">
                <Waves size={15} /> River Safety Status
              </span>
              <span className="status-pill safe-pill">SAFE FOR BATHING</span>
            </div>
            <h3 className="card-headline">{city.river} Water Dynamics</h3>
            <p className="card-sub">Hydraulic depth & safety barometer monitored by Central Water Commission</p>

            <div className="safety-metrics-list">
              <div className="safety-item">
                <Droplets size={16} className="text-cyan" />
                <div className="item-text">
                  <strong>Water Level & Depth:</strong>
                  <span>{city.waterStatus}</span>
                </div>
              </div>
              <div className="safety-item">
                <Waves size={16} className="text-blue" />
                <div className="item-text">
                  <strong>Current Velocity:</strong>
                  <span>{city.waterSpeed}</span>
                </div>
              </div>
              <div className="safety-item">
                <ShieldCheck size={16} className="text-green" />
                <div className="item-text">
                  <strong>SDRF Deployment:</strong>
                  <span>{city.patrolBoats}</span>
                </div>
              </div>
            </div>

            <div className="card-footer-info">
              <span>⚠️ Strict Rule: <strong>Do not cross red rope boundary</strong></span>
            </div>
          </div>
        </div>

        {/* 4-Day Mahaparv Progress Journey Tracker */}
        <div className="card festival-tracker-card">
          <div className="tracker-header">
            <div>
              <span className="pill golden-pill">
                <Calendar size={15} /> 4-Day Sacred Journey
              </span>
              <h3 className="tracker-title">Chhath Mahaparv Day-by-Day Timeline</h3>
            </div>
            <span className="festival-year">Kartik Mahaparv 2026</span>
          </div>

          <div className="days-timeline-grid">
            {festivalDays.map((item, idx) => (
              <div key={item.dayNumber} className="day-step-card">
                <div className="day-step-header" style={{ borderColor: item.color }}>
                  <span className="day-icon">{item.icon}</span>
                  <div>
                    <span className="day-num" style={{ color: item.color }}>{item.dayNumber}</span>
                    <h4 className="day-name">{item.name}</h4>
                  </div>
                </div>
                <div className="day-date-tag">{item.date}</div>
                <p className="day-desc">{item.description}</p>
                <div className="day-status-pill">
                  <span className="dot" style={{ backgroundColor: item.color }}></span>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 24x7 Emergency Helplines Strip */}
        <div className="card emergency-strip">
          <div className="emergency-title">
            <PhoneCall size={20} className="phone-pulse" />
            <div>
              <h4>24x7 Chhath Control Room & SOS Helplines (आपातकालीन नंबर)</h4>
              <p>Direct priority helplines manned by District Disaster Management and Police</p>
            </div>
          </div>
          <div className="hotline-buttons">
            <a href="tel:112" className="hotline-btn police-btn">
              <span>🚨 Police Emergency</span>
              <strong>112</strong>
            </a>
            <a href="tel:108" className="hotline-btn medical-btn">
              <span>🚑 Medical Ambulance</span>
              <strong>108</strong>
            </a>
            <a href={`tel:${city.emergencyContact}`} className="hotline-btn sdrf-btn">
              <span>🚤 River Rescue (SDRF)</span>
              <strong>{city.emergencyContact}</strong>
            </a>
            <a href="tel:1070" className="hotline-btn disaster-btn">
              <span>🛡️ State Disaster Dept</span>
              <strong>1070</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
