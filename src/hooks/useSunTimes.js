import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchSunTimes } from "../services/sunriseSunsetApi";

export function useSunTimes(location, date = null) {
  const dateKey = useMemo(() => {
    const d = date || new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, [date]);

  const [sun, setSun] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    if (!location) {
      setSun(null);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const [y, m, d] = dateKey.split("-").map(Number);
      setSun(await fetchSunTimes(location.latitude, location.longitude, new Date(y, m - 1, d)));
    } catch (err) {
      setSun(null);
      setError(err.message || "Could not load sun timings.");
    } finally {
      setLoading(false);
    }
  }, [location, dateKey]);

  useEffect(() => {
    load();
  }, [load]);

  return { sun, loading, error, refresh: load };
}