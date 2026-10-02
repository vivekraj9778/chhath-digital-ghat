import { useState } from "react";
import { Image, Video, Sparkles, Play, Eye } from "lucide-react";
import "./GhatGallery.css";

const mediaItems = [
  {
    id: 1,
    title: "Divine Sunrise Arghya at Riverfront (प्रातः अर्घ्य)",
    location: "Gandhi Ghat, Patna",
    category: "photo",
    image: "/images/chhath-ghat-hero.jpg",
    desc: "Devotees standing waist-deep in the holy Ganges offering bamboo and brass soop baskets to the rising Sun God."
  },
  {
    id: 2,
    title: "Holy Thekua & Kharna on Mitti Chulha (ठेकुआ प्रसाद)",
    location: "Devotee Courtyard, Bihar",
    category: "photo",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional cooking of sacred Thekua with whole wheat flour, pure desi ghee and organic sugarcane jaggery."
  },
  {
    id: 3,
    title: "Illuminated Ghat Steps & Floating Diyas (दीपोत्सव)",
    location: "Assi Ghat & Varanasi Riverfront",
    category: "photo",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    desc: "Thousands of earthen diyas glowing in devotion along the stone steps and floating on the gentle river current."
  },
  {
    id: 4,
    title: "Sugarcane Mandap & Koshi Filling (कोशी भराई)",
    location: "Konnagar & Serampore Ghats",
    category: "photo",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    desc: "Erection of four and five-stalk sugarcane canopies adorned with marigold garlands for midnight family vigil."
  },
  {
    id: 5,
    title: "Sacred Daura March to the Ghat (दौरा यात्रा)",
    location: "Hooghly Riverfront",
    category: "photo",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    desc: "Family members proudly carrying the covered bamboo Daura on their heads while chanting Chhathi Maiya geets."
  },
  {
    id: 6,
    title: "Maha Ganga Aarti at Dusk (संध्या महाआरती)",
    location: "Babu Ghat, Kolkata",
    category: "photo",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    desc: "Conch blowing, brass lamps and devotional hymns echoing across the sacred river water as evening sets in."
  }
];

export default function GhatGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <span className="pill golden-pill">
            <Image size={16} /> Visual Darshan & Cultural Heritage
          </span>
          <h2 className="section-title">
            Videos & Photo Gallery <span>(वीडियो व तस्वीरें)</span>
          </h2>
          <p className="section-subtitle">
            Immerse yourself in the sacred devotion, riverside ambiance, and time-honored rituals of Chhath Mahaparv.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item-card"
              onClick={() => setSelectedImage(item)}
            >
              <div className="media-thumbnail-wrapper">
                <img src={item.image} alt={item.title} className="gallery-thumb" loading="lazy" />
                <div className="media-overlay">
                  <span className="view-btn">
                    <Eye size={18} /> View Details
                  </span>
                </div>
                <span className="location-pill">{item.location}</span>
              </div>

              <div className="gallery-content">
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing image */}
        {selectedImage && (
          <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
            <div className="modal-inner card" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
              <div className="modal-caption">
                <span className="location-pill">{selectedImage.location}</span>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.desc}</p>
                <button className="btn btn-primary" onClick={() => setSelectedImage(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
