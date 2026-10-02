export default function GhatCard({ ghat }) {
  const cls =
    ghat.status === "Available"
      ? "available"
      : ghat.status === "Moderate"
        ? "moderate"
        : "crowded";

  return (
    <article className="card ghat-card">
      <div className="row between">
        <h3>🛕 {ghat.name}</h3>

        <span className={`status ${cls}`}>
          {ghat.status}
        </span>
      </div>

      <p>{ghat.city}</p>

      <div className="ghat-meta">
        <span>👥 Crowd: {ghat.crowd}</span>
        <span>🌊 Water: {ghat.water}</span>
      </div>

      <small>
        Demo/status dataset — verify locally before travel.
      </small>
    </article>
  );
}