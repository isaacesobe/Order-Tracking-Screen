import { trackingStates } from "./data";
import { TrackingState } from "./types";
import Icon from "./Icon";

export default function SimulationBar({ state, onChange }: { state: TrackingState; onChange: (state: TrackingState) => void }) {
  return (
    <section data-simulation-bar className="bg-surface-low px-4 py-2">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 lg:flex-row lg:items-center">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-container text-white"><Icon name="tune" className="text-sm" /></div>
          <div>
            <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-muted">Telemetry Simulation Mode</span>
            <p className="text-xs font-semibold">Live Prototype State Switcher</p>
          </div>
        </div>
        <div className="flex w-full gap-1 overflow-x-auto rounded-xl bg-surface-container p-1 lg:w-auto">
          {trackingStates.map((item) => (
            <button key={item.key} onClick={() => onChange(item.key)} className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${state === item.key ? "bg-white shadow-sm" : "text-muted hover:text-ink"}`}>
              {item.icon ? <Icon name={item.icon} className="text-xs text-outline" /> : <span className={`h-2 w-2 rounded-full ${item.dot}`} />}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}