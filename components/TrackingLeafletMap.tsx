"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import { useEffect } from "react";
import type { Coordinates, TrackingMap } from "./types";

type Props = {
  map: TrackingMap;
  destinationLabel: string;
  driverLabel: string;
  delayed: boolean;
};

function FitRoute({ points }: { points: Coordinates[] }) {
  const map = useMap();

  useEffect(() => {
    if (!points.length) return;

    const bounds = L.latLngBounds(
      points.map((point) => [point.lat, point.lng])
    );

    map.fitBounds(bounds, {
      padding: [40, 40],
    });
  }, [map, points]);

  return null;
}

function createMarker(
  color: string,
  icon: string
) {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width:36px;
        height:36px;
        border-radius:50%;
        background:${color};
        border:4px solid white;
        box-shadow:0 3px 12px rgba(0,0,0,.25);
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-size:16px;
        font-weight:700;
      ">
        ${icon}
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

export default function TrackingLeafletMap({
  map,
  destinationLabel,
  driverLabel,
  delayed,
}: Props) {
  const currentIcon = createMarker(
    delayed ? "#ba1a1a" : "#0051d5",
    "●"
  );

  const destinationIcon = createMarker(
    "#17181c",
    "⌂"
  );

  const originIcon = createMarker(
    "#667085",
    "●"
  );

  const route = map.route.map((point) => [
    point.lat,
    point.lng,
  ] as [number, number]);

  return (
    <div className="relative h-64 overflow-hidden">
      <MapContainer
        center={[map.current.lat, map.current.lng]}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FitRoute points={map.route} />

        <Polyline
          positions={route}
          pathOptions={{
            color: delayed ? "#ba1a1a" : "#0051d5",
            weight: 5,
            opacity: 0.85,
          }}
        />

        <Marker
          position={[map.origin.lat, map.origin.lng]}
          icon={originIcon}
        >
          <Popup>
            Shipment origin
          </Popup>
        </Marker>

        <Marker
          position={[map.current.lat, map.current.lng]}
          icon={currentIcon}
        >
          <Popup>
            <strong>{driverLabel}</strong>
            <br />
            Current vehicle position
          </Popup>
        </Marker>

        <Marker
          position={[
            map.destination.lat,
            map.destination.lng,
          ]}
          icon={destinationIcon}
        >
          <Popup>
            <strong>Delivery</strong>
            <br />
            {destinationLabel}
          </Popup>
        </Marker>
      </MapContainer>

      <div className="absolute left-3 top-3 z-[1000] flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-muted shadow-sm backdrop-blur">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            delayed
              ? "bg-error"
              : "bg-tertiary-container"
          }`}
        />

        {delayed ? "Route Monitoring" : "Live Telemetry"}
      </div>

      <div className="absolute right-3 top-3 z-[1000] rounded bg-ink px-2.5 py-1 text-[10px] text-white shadow-lg">
        Delivery: {destinationLabel}
      </div>
    </div>
  );
}
