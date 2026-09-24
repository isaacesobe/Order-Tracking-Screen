"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Header({
  onAssistance,
  onSearch,
}: {
  onAssistance: () => void;
  onSearch: (trackingNumber: string) => void;
}) {

  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface/90 shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-6 px-4 lg:px-6">
        <div className="flex min-w-0 items-center gap-5">
          <button className="flex shrink-0 items-center gap-2" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Icon name="near_me" className="text-lg" />
            </div>
            <span className="hidden text-lg font-bold sm:inline">TrackPulse</span>
            <span className="rounded bg-primary-container px-1.5 py-0.5 font-inter text-[10px] font-bold uppercase text-white">PRO</span>
          </button>
          {/* <div className="relative hidden w-72 xl:block">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-outline" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-lg bg-white py-2 pl-9 pr-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-secondary/20" placeholder="Enter Tracking or PO #..." />
            {query && <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2"><Icon name="close" className="text-base text-outline" /></button>}
          </div> */}
          <form
            className="relative hidden w-72 xl:block"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(query);
            }}
          >
            <Icon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-outline"
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg bg-white py-2 pl-9 pr-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-secondary/20"
              placeholder="Enter Tracking or PO #..."
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <Icon name="close" className="text-base text-outline" />
              </button>
            )}
          </form>

        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {["Tracking", "Order History", "Returns", "Help Center"].map((item, i) => (
            <button key={item} className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${i === 0 ? "bg-surface-container" : "text-muted hover:bg-surface-high"}`}>
              {item}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button onClick={() => setNotice((v) => !v)} className="relative rounded-lg p-2 text-muted hover:bg-surface-high">
            <Icon name="notifications" className="text-xl" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-secondary ring-2 ring-surface" />
          </button>
          <button onClick={onAssistance} className="hidden items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-semibold shadow-sm hover:bg-surface-high sm:flex">
            <Icon name="support_agent" className="text-base text-secondary" /> Need Assistance?
          </button>
          <div className="h-8 w-8 rounded-full bg-surface-high ring-2 ring-surface-variant" />
        </div>
      </div>
      {notice && <div className="absolute right-4 top-[72px] w-72 rounded-xl bg-white p-4 text-sm shadow-xl">You have one new shipment telemetry notification.</div>}
    </header>
  );
}