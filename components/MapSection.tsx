"use client";

import { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Card } from "@/components/ui/card";

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
}

const locations: Location[] = [
  { id: 1, name: "Luxury Hotel A", lat: 40.7128, lng: -74.0060, type: "hotel" },
  { id: 2, name: "Fine Restaurant B", lat: 40.7148, lng: -74.0068, type: "restaurant" },
  { id: 3, name: "Cozy Cafe C", lat: 40.7138, lng: -74.0048, type: "cafe" },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function MapSection() {
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [activeMarker, setActiveMarker] = useState<number | "user" | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Use environment variable for API key
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error fetching user location:", error)
      );
    }
  }, []);

  if (!isLoaded) return null;

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          Discover Nearby Places
        </h2>
        <Card className="p-1 rounded-xl overflow-hidden shadow-xl">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={userLocation || { lat: 40.7128, lng: -74.0060 }}
              zoom={14}
              onClick={() => setActiveMarker(null)}
            >
              {userLocation && (
                <Marker
                  position={userLocation}
                  onClick={() => setActiveMarker("user")}
                >
                  {activeMarker === "user" && (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <h3 className="font-semibold text-sm">Your Location</h3>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              )}
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                  onClick={() => setActiveMarker(location.id)}
                >
                  {activeMarker === location.id && (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div className="p-2">
                        <h3 className="font-semibold text-sm sm:text-base">
                          {location.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground capitalize">
                          {location.type}
                        </p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>
          </div>
        </Card>
      </div>
    </section>
  );
}
