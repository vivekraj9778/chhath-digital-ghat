import React from "react";
import { RefreshCw, Sunrise, Sunset } from "lucide-react";
import LocationPermission from "../Location/LocationPermission";
import { useGeolocation } from "../../hooks/useGeolocation";
import { useSunTimes } from "../../hooks/useSunTimes";
import { formatTime } from "../../utils/timeUtils";
import "./SunTimings.css";

export default function SunTimings(){
  const { location, error, requestLocation, isLive } = useGeolocation();
  const [manualLocation, setManualLocation] = React.useState(null);

  const activeLocation = manualLocation || location;
  const { sun, loading, error: sunError, refresh } = useSunTimes(activeLocation);

  const handleManualCity = (city) => setManualLocation({ ...city, source: "manual" });

  const handleMyLocation = () => {
    setManualLocation(null);
    requestLocation();
  };

  return <section id="sun" className="section"><div className="container">
    <span className="pill">🌅 Live astronomical data</span>
    <h2 className="section-title">Sunrise & sunset from your location</h2>
    <p className="section-subtitle">Your browser GPS location is used live to calculate sunrise and sunset. Nothing is stored. You can use a city fallback if GPS permission is unavailable.</p>

    <LocationPermission
      location={activeLocation}
      isLive={Boolean(!manualLocation && isLive)}
      error={error}
      onRequest={handleMyLocation}
      onSelectCity={handleManualCity}
    />

    <div className="sun-grid spaced">
      <div className="card sun-card">
        <Sunrise/><span>Sunrise</span>
        <strong>{loading ? "Loading…" : sun ? formatTime(sun.sunrise) : "—"}</strong>
      </div>
      <div className="card sun-card">
        <Sunset/><span>Sunset</span>
        <strong>{loading ? "Loading…" : sun ? formatTime(sun.sunset) : "—"}</strong>
      </div>
      <div className="card sun-card">
        <span>☀️</span><span>Daylight</span>
        <strong>{sun ? `${Math.round((new Date(sun.sunset)-new Date(sun.sunrise))/3600000*10)/10} h` : "—"}</strong>
      </div>
    </div>

    {sunError && <p className="error">{sunError}</p>}
    {sun && <button className="btn secondary spaced" onClick={refresh}><RefreshCw size={16}/> Refresh live timing</button>}
  </div></section>;
}