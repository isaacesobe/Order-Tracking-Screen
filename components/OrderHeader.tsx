import { Order, StateConfig } from "./types";
import Icon from "./Icon";

export default function OrderHeader({
  order,
  config,
  onDrawer,
  onShare,
}: {
  order: Order;
  config: StateConfig;
  onDrawer: (type: "instructions") => void;
  onShare: () => void;
}) {
  const copy = async () => {
    await navigator.clipboard?.writeText(order.trackingNumber);
    alert("Tracking number copied.");
  };

  return (
    <section className="print-card flex flex-col justify-between gap-5 rounded-xl bg-white p-5 shadow-sm lg:flex-row lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-surface-container px-2.5 py-1 font-inter text-[10px] font-bold uppercase text-muted">
            Shipment Details
          </span>

          <span className="text-xl font-semibold">
            Order #{order.orderNumber}
          </span>

          <span
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-inter text-[10px] font-bold uppercase ${config.badgeClass}`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {config.badgeText}
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span>
            Placed:{" "}
            <strong className="text-ink">
              {order.placedAt}
            </strong>
          </span>

          <span>•</span>

          <span>
            Carrier:{" "}
            <strong className="text-ink">
              {order.carrier}
            </strong>
          </span>

          <span>•</span>

          <span className="flex items-center gap-1.5">
            Tracking #:{" "}
            <code className="rounded bg-surface-container px-2 py-0.5 font-mono font-semibold text-ink">
              {order.trackingNumber}
            </code>

            <button onClick={copy}>
              <Icon
                name="content_copy"
                className="text-sm"
              />
            </button>
          </span>
        </div>
      </div>

      <div className="no-print flex w-full flex-wrap gap-2 lg:w-auto">
        <button
          onClick={onShare}
          className="flex items-center gap-1.5 rounded-lg bg-surface-container px-4 py-2.5 text-xs font-semibold hover:bg-surface-high"
        >
          <Icon name="share" className="text-base" />
          Share Link
        </button>

        <button
          onClick={() => onDrawer("instructions")}
          className="flex items-center gap-1.5 rounded-lg bg-surface-container px-4 py-2.5 text-xs font-semibold hover:bg-surface-high"
        >
          <Icon name="pin_drop" className="text-base" />
          Gate Code: {order.accessCode}
        </button>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-container"
        >
          <Icon name="receipt_long" className="text-base" />
          Print Receipt
        </button>
      </div>
    </section>
  );
}
