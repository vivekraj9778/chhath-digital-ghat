export const fallbackLocations = {
  Kolkata: { latitude: 22.5726, longitude: 88.3639, label: "Kolkata", source: "manual" },
  Rishra: { latitude: 22.7213, longitude: 88.3551, label: "Rishra", source: "manual" },
  Konnagar: { latitude: 22.7006, longitude: 88.3597, label: "Konnagar", source: "manual" },
  Panihati: { latitude: 22.6942, longitude: 88.3700, label: "Panihati", source: "manual" },
  Serampore: { latitude: 22.7510, longitude: 88.3420, label: "Serampore", source: "manual" }
};

export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 60000,
      ...options
    });
  });
}

export function watchCurrentPosition(onSuccess, onError, options = {}) {
  if (!navigator.geolocation) {
    onError?.(new Error("Geolocation is not supported by this browser."));
    return null;
  }

  return navigator.geolocation.watchPosition(onSuccess, onError, {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 60000,
    ...options
  });
}
