import { StateConfig } from "./types";
import Icon from "./Icon";

export default function EtaCard({ config, onReschedule }: { config: StateConfig; onReschedule: () => void }) {
  return (
    <section className="print-card flex flex-col justify-between gap-5 rounded-xl bg-white p-5 shadow-sm md:flex-row md:items-center">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed text-secondary">
          <Icon name={config.etaIcon} className="text-3xl" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-inter text-[10px] font-bold uppercase text-outline">Estimated Delivery Window</span>
            <span className={`rounded-full px-2 py-0.5 font-inter text-[10px] font-bold ${config.etaPillClass}`}>{config.etaPill}</span>
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight">{config.etaTitle}</div>
          <p className="mt-1 flex items-start gap-1.5 text-xs text-muted"><Icon name="explore" className="mt-0.5 text-base text-secondary" /><span dangerouslySetInnerHTML={{ __html: config.etaSubtitle }} /></p>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex items-center justify-between gap-4 rounded-lg bg-surface-container p-2.5 text-xs font-semibold"><span><Icon name="lock" className="mr-1 align-middle text-base text-secondary" />No Signature Required</span><Icon name="verified" className="text-sm text-outline" /></div>
        <button onClick={onReschedule} className="flex items-center justify-center gap-1.5 rounded-lg bg-surface-high px-4 py-2.5 text-xs font-semibold hover:bg-surface-highest"><Icon name="event_repeat" className="text-base" /> Reschedule</button>
      </div>
    </section>
  );
}