const API = "https://api.sunrise-sunset.org/json";

export async function fetchSunTimes(latitude, longitude, date = new Date()) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const url = `${API}?lat=${encodeURIComponent(latitude)}&lng=${encodeURIComponent(longitude)}&date=${yyyy}-${mm}-${dd}&formatted=0`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch sun timing.");
  const data = await response.json();
  if (data.status !== "OK") throw new Error(data.status || "Sun API error");
  return data.results;
}