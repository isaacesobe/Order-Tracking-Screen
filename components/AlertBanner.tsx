import { StateConfig } from "./types";
import Icon from "./Icon";

export default function AlertBanner({ config, onAction }: { config: StateConfig; onAction?: () => void }) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-3 rounded-xl p-4 ${config.bannerClass}`}>
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
          <Icon name={config.bannerIcon} className="text-base" />
        </div>
        <div>
          <div className="text-sm font-bold">{config.bannerTitle}</div>
          <div className="text-xs text-muted">{config.bannerText}</div>
        </div>
      </div>
      {config.bannerAction && (
        <button onClick={onAction} className="rounded-lg bg-white px-3 py-1.5 font-inter text-[10px] font-bold uppercase shadow-sm hover:bg-surface-container">
          {config.bannerAction}
        </button>
      )}
    </div>
  );
}