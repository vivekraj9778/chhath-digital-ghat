import { useEffect, useState } from "react";
import { getGhatStatus } from "../../services/ghatService";
import GhatCard from "./GhatCard";
import "./GhatAvailability.css";

export default function GhatAvailability() {
  const [ghats, setGhats] = useState([]);
  const [city, setCity] = useState("Kolkata");
  const [status, setStatus] = useState("All");

  useEffect(() => {
    getGhatStatus().then(setGhats);
  }, []);

  const cityFilteredGhats =
    city === "All"
      ? ghats
      : city === "Kolkata & Nearby"
        ? ghats
        : ghats.filter(
            (g) =>
              g.city === city ||
              (city === "Kolkata" &&
                ["Panihati", "Sukchar"].includes(g.city))
          );

  const list =
    status === "All"
      ? cityFilteredGhats
      : cityFilteredGhats.filter((g) => g.status === status);

  return (
    <section className="section" id="ghats">
      <div className="container">
        <span className="pill">🛕 Ghat explorer</span>

        <h2 className="section-title">Check ghat status</h2>

        <p className="section-subtitle">
          Kolkata–Hooghly corridor ghats are listed for discovery.
          Crowd/availability status is demo data unless connected to a
          verified live source.
        </p>

        <div className="ghat-filters">
          {/* City Filter */}
          <select
            className="select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="Kolkata">Kolkata</option>
            <option value="Kolkata & Nearby">Kolkata & Nearby</option>
            <option value="All">All Cities</option>

            {[...new Set(ghats.map((g) => g.city))]
              .filter((c) => c !== "Kolkata")
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>

          {/* Status Filter */}
          <select
            className="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Available">Available</option>
            <option value="Moderate">Moderate</option>
            <option value="Crowded">Crowded</option>
          </select>
        </div>

        <div className="grid grid-2 spaced">
          {list.length > 0 ? (
            list.map((g) => (
              <GhatCard key={g.name} ghat={g} />
            ))
          ) : (
            <div className="empty-state">
              <span>🛕</span>
              <h3>No ghats found</h3>
              <p>
                Try selecting another city or status.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}