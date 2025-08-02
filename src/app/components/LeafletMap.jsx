"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export default function LeafletMap() {
  const [position, setPosition] = useState([23.8103, 90.4125]);

  return (
    <div className="h-[400px] w-full">
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={position}>
          <Popup>Dhaka, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
