import { useState } from "react";
import { 
  Building2, 
  FileText, 
  PhoneCall, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle, 
  Download, 
  Users, 
  Clock, 
  Stethoscope, 
  Volume2, 
  Trash
} from "lucide-react";
import "./DistrictAdmin.css";

const ordersList = [
  {
    orderNo: "DM/PAT/CHHATH/2026/01",
    date: "28 October 2026",
    title: "Traffic Diversion & Pedestrian-Only Corridors (यातायात निर्देश)",
    summary: "Heavy commercial and private vehicles prohibited on Ashok Rajpath, Danapur-Digha road, and Riverfront corridors between 12:00 PM (Day 3) to 10:00 AM (Day 4). Dedicated E-Rickshaws operating for elderly and Vratis.",
    category: "Traffic & Mobility",
    authority: "Office of the District Magistrate & Traffic SP"
  },
  {
    orderNo: "DM/PAT/CHHATH/2026/02",
    date: "30 October 2026",
    title: "Sound Decibel Restrictions & Public Address System (ध्वनि सीमा)",
    summary: "Public address loudspeakers must strictly operate below 55 decibels. Loud devotional music after 10:00 PM must be muted across ghat perimeters to prevent stampedes and preserve divine tranquility.",
    category: "Civic Peace",
    authority: "Pollution Control Board & Executive Magistrate"
  },
  {
    orderNo: "DM/PAT/CHHATH/2026/03",
    date: "01 November 2026",
    title: "Riverfront Firecracker Ban & Clean Ganga Mandate (गंगा स्वच्छता)",
    summary: "Complete prohibition on bursting chemical firecrackers or floating non-biodegradable plastics in the river Ganga/Hooghly. Violations attract fines under the Environment Protection Act.",
    category: "Environmental Protection",
    authority: "National Green Tribunal & River Police"
  },
  {
    orderNo: "DM/PAT/CHHATH/2026/04",
    date: "02 November 2026",
    title: "Deep Water Boundary & Diver Safety Protocols (जल सुरक्षा आदेश)",
    summary: "All ghats must maintain bamboo and net barricading at 3.5 ft depth. No civilian boat without administration authorization is permitted within 500 meters of the ghat.",
    category: "Water Safety",
    authority: "SDRF Commandant & District Disaster Management"
  }
];

const adminSquads = [
  {
    title: "SDRF & NDRF Rescue Units (जल आपदा राहत बल)",
    head: "Commandant, 9th Battalion",
    strength: "650 Lifeguards & Divers",
    equipment: "52 High-speed Motorboats, Floating Defibrillators, Deep-water Nets",
    duty: "Continuous 24-hr riverbank patrolling and emergency rescue",
    icon: "🚤"
  },
  {
    title: "Public Health & Medical Camps (स्वास्थ्य शिविर)",
    head: "Chief Medical Officer",
    strength: "120 Doctors & Paramedics",
    equipment: "45 Advanced Life Support Ambulances, Mobile ICU at Gandhi Ghat",
    duty: "Emergency trauma treatment, glucose replenishment, burn care",
    icon: "🏥"
  },
  {
    title: "Swachh Ghat Sanitation Squad (स्वच्छता कार्यबल)",
    head: "Municipal Commissioner",
    strength: "1,800 Sanitation Personnel",
    equipment: "Mechanized sweepers, eco-compost bins, continuous lime spraying",
    duty: "Round-the-clock ghat sweeping and green waste collection",
    icon: "🧹"
  },
  {
    title: "Lost & Found Child Safety Desk (खोया-पाया केंद्र)",
    head: "Child Welfare Committee & Police",
    strength: "85 Special Volunteers",
    equipment: "Digital wristband tagging system, public announcement towers",
    duty: "Tagging arriving children and reuniting separated families",
    icon: "📢"
  }
];

export default function DistrictAdmin() {
  const [subTab, setSubTab] = useState("admin");

  return (
    <section className="section admin-section" id="administration">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="pill golden-pill">
            <Building2 size={16} /> Official Administration & Directives
          </span>
          <h2 className="section-title">
            Puja Administration & Orders <span>(पूजा प्रशासन व जिला आदेश)</span>
          </h2>
          <p className="section-subtitle">
            Coordinated emergency deployment, official District Magistrate safety circulars, and civic taskforce rosters.
          </p>
        </div>

        {/* Admin Tabs (Matches Screenshot 1: पूजा प्रशासन, जिला आदेश, संपर्क करें) */}
        <div className="admin-switch-tabs">
          <button 
            className={`admin-switch-btn ${subTab === "admin" ? "active" : ""}`}
            onClick={() => setSubTab("admin")}
          >
            <Users size={16} /> Puja Administration (पूजा प्रशासन)
          </button>
          <button 
            className={`admin-switch-btn ${subTab === "orders" ? "active" : ""}`}
            onClick={() => setSubTab("orders")}
          >
            <FileText size={16} /> District Orders & Circulars (जिला आदेश)
          </button>
          <button 
            className={`admin-switch-btn ${subTab === "contact" ? "active" : ""}`}
            onClick={() => setSubTab("contact")}
          >
            <PhoneCall size={16} /> Control Room & Helplines (संपर्क करें)
          </button>
        </div>

        {/* Sub-tab 1: Puja Administration */}
        {subTab === "admin" && (
          <div className="admin-squads-grid">
            {adminSquads.map((squad, i) => (
              <div key={i} className="card squad-card">
                <div className="squad-head">
                  <span className="squad-emoji">{squad.icon}</span>
                  <div>
                    <h3 className="squad-title">{squad.title}</h3>
                    <span className="squad-head-name">{squad.head}</span>
                  </div>
                </div>

                <div className="squad-body">
                  <div className="squad-row">
                    <strong>Deployed Strength:</strong>
                    <span>{squad.strength}</span>
                  </div>
                  <div className="squad-row">
                    <strong>Equipment & Assets:</strong>
                    <span>{squad.equipment}</span>
                  </div>
                  <div className="squad-row">
                    <strong>Mandated Responsibility:</strong>
                    <span>{squad.duty}</span>
                  </div>
                </div>

                <div className="squad-status">
                  <CheckCircle size={14} className="text-green" />
                  <span>Verified on active riverfront duty</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sub-tab 2: District Orders */}
        {subTab === "orders" && (
          <div className="orders-container">
            {ordersList.map((ord, idx) => (
              <div key={idx} className="card order-card">
                <div className="order-top">
                  <div>
                    <span className="order-cat-tag">{ord.category}</span>
                    <h3 className="order-title">{ord.title}</h3>
                  </div>
                  <span className="order-date-pill">{ord.date}</span>
                </div>

                <p className="order-summary">{ord.summary}</p>

                <div className="order-footer">
                  <span className="order-auth">Issued by: <strong>{ord.authority}</strong></span>
                  <span className="order-id">Ref: {ord.orderNo}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sub-tab 3: Contact & Control Room */}
        {subTab === "contact" && (
          <div className="card control-room-card">
            <div className="control-head">
              <PhoneCall size={26} className="gold-text" />
              <div>
                <h3>Centralized Chhath Control Desk (केंद्रीय नियंत्रण कक्ष)</h3>
                <p>24x7 integrated desk connecting Police, Ambulance, Fire, SDRF, and Municipal Officers.</p>
              </div>
            </div>

            <div className="control-contacts-grid">
              <div className="contact-box">
                <small>District Control Room</small>
                <h4>0612-2219810 / 2219811</h4>
                <span>Toll-Free District Emergency</span>
              </div>
              <div className="contact-box">
                <small>Water Police & SDRF Rescue</small>
                <h4>0612-2217305</h4>
                <span>Direct river speedboat dispatch</span>
              </div>
              <div className="contact-box">
                <small>Traffic SP Control Room</small>
                <h4>0612-2215855</h4>
                <span>Parking & Road advisory desk</span>
              </div>
              <div className="contact-box">
                <small>Municipal Sanitary Helpline</small>
                <h4>155304</h4>
                <span>Patna / Local civic complaint cell</span>
              </div>
            </div>

            <div className="control-note">
              <AlertCircle size={18} className="gold-text" />
              <span>For immediate on-ground assistance at the ghat, contact the nearest Sector Magistrate tent or uniformed SDRF boat operator.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
