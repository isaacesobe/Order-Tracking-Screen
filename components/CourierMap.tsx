"use client";

import dynamic from "next/dynamic";
import Icon from "./Icon";
import type { Order, StateConfig } from "./types";

const TrackingLeafletMap = dynamic(
  () => import("./TrackingLeafletMap"),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-64 overflow-hidden bg-surface-high">
        <div className="flex h-full items-center justify-center text-xs text-muted">
          Loading live tracking map...
        </div>
      </div>
    ),
  }
);

export default function CourierMap({
  order,
  config,
}: {
  order: Order;
  config: StateConfig;
}) {
  const map = order.map;

  if (!map) return null;

  const isDelayed = order.state === "delayed";

  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="flex flex-col justify-between gap-3 bg-surface-low p-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container">
            <Icon name={isDelayed ? "warning" : "directions_car"} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
              {order.driver?.vehicle ?? order.carrier}

              <span
                className={`rounded px-1.5 py-0.5 text-[10px] uppercase ${
                  isDelayed
                    ? "bg-error-container text-error"
                    : "bg-tertiary-fixed/50 text-tertiary-container"
                }`}
              >
                {config.badgeText}
              </span>
            </div>

            <div className="text-xs text-muted">
              Driver: {order.driver?.name ?? "Carrier Operations"} •{" "}
              {order.driver?.vehicleType ?? "Ground Transport"}
            </div>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <div className="font-inter text-[10px] uppercase text-outline">
            Current Position
          </div>

          <div
            className={`text-sm font-bold ${
              isDelayed ? "text-error" : "text-secondary"
            }`}
          >
            Live
          </div>
        </div>
      </div>

      <TrackingLeafletMap
        map={map}
        destinationLabel={`${order.address.city}, ${order.address.state}`}
        driverLabel={order.driver?.name ?? "Driver"}
        delayed={isDelayed}
      />

      <div className="grid grid-cols-3 divide-x divide-surface-container p-2 text-center">
        <Metric
          label="Carrier Route"
          value={order.driver?.vehicleType ?? order.carrier}
        />

        <Metric
          label="Vehicle Payload"
          value="Secure Freight"
        />

        <Metric
          label="ETA Accuracy"
          value={isDelayed ? "Weather Adjusted" : "± 12 Minutes"}
          accent={!isDelayed}
        />
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="font-inter text-[10px] uppercase text-outline">
        {label}
      </div>

      <div
        className={`text-xs font-semibold ${
          accent ? "text-tertiary-container" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}
