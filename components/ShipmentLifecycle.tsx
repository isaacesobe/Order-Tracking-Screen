import { useState } from "react";
import { Order } from "./types";
import Icon from "./Icon";

export default function ShipmentLifecycle({
  order,
  activeStep,
  progress,
}: {
  order: Order;
  activeStep: number;
  progress: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const steps = [
    ["Order Placed","Oct 24, 10:14 AM","check"],
    ["Shipped","Oct 25, 6:30 PM","check"],
    ["Out for Delivery","Today, 8:15 AM","local_shipping"],
    ["Delivered","Expected 4:30 PM","home"]
  ];

  return (
    <section className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><h3 className="text-lg font-semibold">Shipment Lifecycle</h3><p className="text-xs text-muted">4-tier end-to-end verification telemetry</p></div>
        <span className="flex items-center gap-1 rounded bg-surface-container px-2.5 py-1 font-inter text-[10px] uppercase text-muted"><Icon name="update" className="text-xs text-secondary" /> Updated 3 mins ago</span>
      </div>
      <div className="relative mt-6 grid grid-cols-4">
        <div className="absolute left-0 right-0 top-5 h-1 bg-surface-container" />
        <div className="absolute left-0 top-5 h-1 bg-secondary transition-all duration-500" style={{width:`${progress}%`}} />
        {steps.map(([title,time,icon], index) => {
          const step = index + 1;
          const complete = step < activeStep || (activeStep === 4 && step === 4);
          const active = step === activeStep;
          return <div key={title} className="relative z-10 flex flex-col items-center text-center">
            <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${complete || active ? "bg-secondary text-white" : "border-2 border-outline-variant bg-white text-outline"} ${active ? "ring-4 ring-secondary/20" : ""}`}><Icon name={complete ? "check" : active ? icon : step === 4 ? "home" : "schedule"} className="text-base" /></div>
            <div className={`mt-2 text-[11px] font-bold ${active ? "text-secondary" : ""}`}>{title}</div>
            <div className="text-[10px] text-muted">{time}</div>
          </div>;
        })}
      </div>
      <div className="mt-7">
        <div className="flex items-center justify-between border-b border-surface-container pb-2"><span className="font-inter text-[10px] font-bold uppercase text-outline">Live Scan Telemetry Log</span><button onClick={()=>setExpanded(v=>!v)} className="flex items-center gap-1 text-xs font-semibold text-secondary">{expanded ? "Hide Past Facility Scans" : "Show All 8 Facility Scans"}<Icon name={expanded ? "expand_less":"expand_more"} className="text-sm" /></button></div>
        <div className="relative mt-3 space-y-3 pl-6 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-surface-container">
          {order.scans.map((scan, i) => (
!expanded && i > 2) ? null : <div key={scan[0]} className="relative"><span className={`absolute -left-6 top-2.5 h-2.5 w-2.5 rounded-full ring-4 ring-white ${i===0 ? "bg-secondary":"bg-outline-variant"}`} /><div className={`rounded-lg p-3 ${i===0 ? "bg-surface-low":"hover:bg-surface-low"}`}><div className="flex flex-col justify-between gap-1 sm:flex-row"><div><div className="text-xs font-bold">{scan[0]}</div><div className="text-xs text-muted">{scan[1]}</div></div><div className={`shrink-0 text-[10px] ${i===0 ? "font-semibold text-secondary":"text-outline"}`}>{scan[2]}</div></div></div></div>)}
        </div>
      </div>
    </section>
  );
}