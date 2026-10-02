import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { MapPin, Navigation } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./GhatMap.css";

// Fix Leaflet marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const ghats = [
  {
    name: "Rishra Ferry Ghat",
    city: "Rishra",
    lat: 22.72127,
    lng: 88.35514,
    status: "Available",
  },
  {
    name: "Rishra–Khardaha Ferry Ghat",
    city: "Rishra",
    lat: 22.72,
    lng: 88.36,
    status: "Moderate",
  },
  {
    name: "Gospel Ghat",
    city: "Rishra",
    lat: 22.722,
    lng: 88.357,
    status: "Moderate",
  },
  {
    name: "Konnagar Ferry Ghat",
    city: "Konnagar",
    lat: 22.70074,
    lng: 88.35995,
    status: "Available",
  },
  {
    name: "Konnagar Baro Mandir Ghat",
    city: "Konnagar",
    lat: 22.699,
    lng: 88.361,
    status: "Moderate",
  },
  {
    name: "Lakhi Ghat, Mahesh",
    city: "Mahesh",
    lat: 22.752,
    lng: 88.338,
    status: "Available",
  },
  {
    name: "Mahesh Jagannath Ghat Ferry",
    city: "Serampore",
    lat: 22.75,
    lng: 88.34,
    status: "Moderate",
  },
  {
    name: "Serampore Ferry Ghat",
    city: "Serampore",
    lat: 22.75,
    lng: 88.342,
    status: "Crowded",
  },
];

function MapRecenter({ position }) {
  const map = useMap();

  const goToLocation = () => {
    map.setView(position, 13);
  };

  return (
    <button className="map-location-button" onClick={goToLocation}>
      <MapPin size={17} />
      Center Map
    </button>
  );
}

function getDirections(lat, lng) {
  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
    "_blank",
    "noopener,noreferrer"
  );
}

export default function GhatMap() {
  const center = [22.73, 88.35];

  return (
    <section className="section" id="ghat-map">
      <div className="container">
        <div className="card map-card">
          <div className="map-header">
            <div>
              <span className="pill">
                <MapPin size={15} /> Live Ghat Map
              </span>

              <h2 className="section-title">Explore Nearby Ghats</h2>

              <p className="section-subtitle">
                Explore Rishra, Konnagar, Mahesh and Serampore ghats on the
                interactive map.
              </p>
            </div>
          </div>

          <div className="live-map-wrapper">
            <MapContainer
              center={center}
              zoom={12}
              scrollWheelZoom={true}
              className="live-map"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {ghats.map((ghat) => (
                <Marker
                  key={ghat.name}
                  position={[ghat.lat, ghat.lng]}
                >
                  <Popup>
                    <div className="ghat-popup">
                      <h3>🛕 {ghat.name}</h3>

                      <p>{ghat.city}</p>

                      <strong
                        className={`popup-status ${ghat.status.toLowerCase()}`}
                      >
                        {ghat.status}
                      </strong>

                      <button
                        onClick={() =>
                          getDirections(ghat.lat, ghat.lng)
                        }
                      >
                        <Navigation size={15} />
                        Get Directions
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}

              <MapRecenter position={center} />
            </MapContainer>
          </div>

          <div className="map-info">
            <span>📍 {ghats.length} ghats</span>
            <span>🗺️ Interactive map</span>
            <span>🔍 Zoom & drag enabled</span>
          </div>
        </div>
      </div>
    </section>
  );
}