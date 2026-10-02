export function formatCoordinates(location) {
  if (!location) return "Location not selected";
  return `${Number(location.latitude).toFixed(4)}, ${Number(location.longitude).toFixed(4)}`;
}