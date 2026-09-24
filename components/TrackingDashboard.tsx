"use client";

import { useMemo, useState } from "react";

import Header from "./Header";
import SimulationBar from "./SimulationBar";
import AlertBanner from "./AlertBanner";
import OrderHeader from "./OrderHeader";
import EtaCard from "./EtaCard";
import CourierMap from "./CourierMap";
import ShipmentLifecycle from "./ShipmentLifecycle";
import Controls from "./Controls";
import Sidebar from "./Sidebar";
import Drawer from "./Drawer";
import Footer from "./Footer";

import { orders, stateConfigs } from "./data";
import { DrawerType, TrackingState } from "./types";

function normalizeTrackingNumber(value: string) {
  return value
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .toUpperCase();
}

export default function TrackingDashboard() {
  // const [trackingNumber, setTrackingNumber] = useState(
  //   "9400110200883920182344"
  // );

  const [trackingNumber, setTrackingNumber] = useState(() => {
    if (typeof window === "undefined") {
      return "9400110200883920182344";
    }

    const params = new URLSearchParams(
      window.location.search
    );

    return (
      params.get("order") ??
      "9400110200883920182344"
    );
  });


  const [stateOverride, setStateOverride] =
    useState<TrackingState | null>(null);

  const [drawer, setDrawer] =
    useState<DrawerType>(null);

  const order = useMemo(() => {
    return orders[normalizeTrackingNumber(trackingNumber)];
  }, [trackingNumber]);

  const state = stateOverride ?? order?.state ?? "not_scanned";

  const config = stateConfigs[state];

  // const searchOrder = (value: string) => {
  //   const normalized = normalizeTrackingNumber(value);

  //   const found = orders[normalized];

  //   if (!found) {
  //     alert("Order not found.");
  //     return;
  //   }

  //   setTrackingNumber(normalized);
  //   setStateOverride(null);
  // };

  const searchOrder = (value: string) => {
    const normalized = normalizeTrackingNumber(value);

    if (!orders[normalized]) {
      alert("Order not found.");
      return;
    }

    setTrackingNumber(normalized);
    setStateOverride(null);

    const url = new URL(window.location.href);
    url.searchParams.set("order", normalized);

    window.history.pushState({}, "", url);
  };

  const share = async () => {
    const data = {
      title: `Track Shipment ${order.orderNumber}`,
      text: `Tracking my ${order.carrier} package on TrackPulse PRO`,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(data).catch(() => {});
    } else {
      await navigator.clipboard?.writeText(
        window.location.href
      );

      alert("Tracking link copied.");
    }
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-surface">
        <Header
          onAssistance={() => setDrawer("dispute")}
          onSearch={searchOrder}
        />

        <main className="flex min-h-screen items-center justify-center pt-20">
          <div className="rounded-xl bg-white p-8 text-center shadow-sm">
            <div className="text-lg font-bold">
              Shipment not found
            </div>

            <p className="mt-1 text-sm text-muted">
              Enter a valid tracking number.
            </p>
          </div>
        </main>

        <Drawer
          type={drawer}
          onClose={() => setDrawer(null)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header
        onAssistance={() => setDrawer("dispute")}
        onSearch={searchOrder}
      />

      <main className="pt-20">
        <SimulationBar
          state={state}
          onChange={(newState) => {
            setStateOverride(newState);
          }}
        />

        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-4 py-5 lg:px-6">
          <AlertBanner
            config={config}
            onAction={() =>
              setDrawer(
                state === "delivered"
                  ? "proof"
                  : state === "delayed"
                    ? "delay_inquiry"
                    : state === "missing_dispute"
                      ? "missing"
                      : "instructions"
              )
            }
          />

          <OrderHeader
            order={order}
            config={config}
            onDrawer={setDrawer}
            onShare={share}
          />

          <EtaCard
            config={config}
            onReschedule={() =>
              setDrawer("reschedule")
            }
          />

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-8">
              {config.showMap && order.map && (
                <CourierMap
                  order={order}
                  config={config}
                />
              )}

              <ShipmentLifecycle
                order={order}
                activeStep={config.activeStep}
                progress={config.progress}
              />

              <Controls
                onOpen={setDrawer}
              />
            </div>

            <div className="lg:col-span-4">
              <Sidebar
                order={order}
                onOpen={setDrawer}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Drawer
        type={drawer}
        onClose={() => setDrawer(null)}
      />
    </div>
  );
}
