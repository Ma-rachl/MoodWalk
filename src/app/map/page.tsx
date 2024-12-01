"use client";
import React, { useEffect } from "react";
import L from "leaflet";
import { useRouter } from "next/navigation";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function MapPage() {
  const router = useRouter();
  const handleNewWalk = () => {
    console.log("new walk...");
    router.push("/create-new-walk");
  };
  useEffect(() => {
    const container = L.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("map").setView([42.3398, -71.0892], 16);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors',
      maxZoom: 19,
      minZoom: 10,
    }).addTo(map);

    // TO DO : add marker?
    const marker = L.marker([42.3398, -71.0892]).addTo(map);
    marker.bindPopup("<b>Start your walk!</b>").openPopup();

    return () => {
      if (map) {
        map.off();
        map.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div id="map" style={{ height: "100vh" }} className="z-10"></div>

      <button
        className="absolute top-12 right-4 p-2 z-20"
        onClick={() => console.log("Profile button clicked")}
      >
        <img
          src="/icons/map/mdi_user-circle.png"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full"
        />
      </button>

      <button
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-moodwalk-green text-white py-3 w-80 rounded-xl z-20"
        onClick={handleNewWalk}
      >
        Start Walk
      </button>
    </div>
  );
}
