import { useCallback, useEffect, useRef, useState } from "react";
import { getCurrentPosition, watchCurrentPosition } from "../services/geolocationService";

export function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const watchIdRef = useRef(null);

  const applyPosition = useCallback((pos) => {
    setLocation({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      accuracy: pos.coords.accuracy,
      source: "browser"
    });
    setError("");
  }, []);

  const handleError = useCallback((err) => {
    const message = err?.code === 1
      ? "Location permission was denied. Please allow location access in your browser."
      : err?.code === 2
        ? "Your location could not be determined. Please try again."
        : err?.code === 3
          ? "Location request timed out. Please try again."
          : err?.message || "Could not get your live location.";
    setError(message);
  }, []);

  const requestLocation = useCallback(async () => {
    setError("");
    try {
      const pos = await getCurrentPosition();
      applyPosition(pos);
    } catch (err) {
      handleError(err);
    }
  }, [applyPosition, handleError]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return undefined;
    }

    // Start live GPS tracking when the Sun Timing section mounts.
    watchIdRef.current = watchCurrentPosition(applyPosition, handleError);

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
    };
  }, [applyPosition, handleError]);

  return { location, error, requestLocation, isLive: Boolean(location?.source === "browser") };
}
