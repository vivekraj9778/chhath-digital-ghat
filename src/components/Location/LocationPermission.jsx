import { MapPin, RefreshCw } from "lucide-react";
import { formatCoordinates } from "../../utils/locationUtils";
import { fallbackLocations } from "../../services/geolocationService";
import "./LocationPermission.css";

export default function LocationPermission({ location, error, onRequest, onSelectCity, isLive = false }) {
  return <div className="location-box card">
    <div>
      <MapPin size={22}/>
      <div>
        <strong>{location ? (isLive ? "Live GPS location" : `Location: ${location.label || "Selected city"}`) : "Get local sun timings"}</strong>
        <small>{location ? `${formatCoordinates(location)}${isLive ? " • Updating from browser GPS" : " • Manual fallback"}` : "Allow location for live data, or choose a city below."}</small>
      </div>
    </div>
    <div className="location-actions">
      <button className="btn secondary" onClick={onRequest}><RefreshCw size={16}/> {location?.source === "manual" ? "Use My Location" : "Refresh"}</button>
      <select className="city-select" defaultValue="" onChange={e => e.target.value && onSelectCity(fallbackLocations[e.target.value])}>
        <option value="">Choose city</option>
        {Object.keys(fallbackLocations).map(city => <option key={city} value={city}>{city}</option>)}
      </select>
    </div>
    {error && <p className="error">{error}</p>}
  </div>;
}