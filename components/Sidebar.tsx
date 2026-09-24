// import { DrawerType } from "./types";
import { DrawerType, Order } from "./types";
import Icon from "./Icon";


export default function Sidebar({
  order,
  onOpen,
}: {
  order: Order;
  onOpen: (type: DrawerType) => void;
}) {

  return <aside className="flex flex-col gap-5">
    <section className="rounded-xl bg-white p-5 shadow-sm"><div className="flex items-center justify-between pb-2"><h3 className="text-lg font-semibold">Order Summary</h3><span className="rounded bg-surface-container px-2 py-0.5 font-inter text-[10px] font-bold uppercase text-muted">2 Items</span></div>
      {order.items.map((item) => (
        <Product
          key={item.name}
          name={item.name}
          detail={item.detail}
          price={item.price}
          image={item.image}
          qty={item.qty}
        />
      ))}

      <div className="mt-3 space-y-1 border-t border-surface-container pt-3 text-xs">
        <Row
          label={`Subtotal (${order.totalItems} items)`}
          value={order.subtotal}
        />

        <Row
          label="Apex Priority Freight"
          value={order.shipping}
          accent
        />

        <Row
          label="Estimated Sales Tax"
          value={order.tax}
        />

        <div className="text-lg font-bold">
          {order.total}
        </div>

        <div className="text-[10px] text-muted">
          {order.payment}
        </div>

        </div>
    </section>

    <section className="rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3"><div className="relative h-12 w-12 rounded-full bg-surface-high"><span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-tertiary-container ring-2 ring-white"/></div><div><div className="text-sm font-bold">Dedicated Priority Support</div><div className="text-xs text-muted">Elena Vance • Apex Logistics Specialist</div></div></div><p className="mt-3 text-xs text-muted">Have questions about this consignment? Direct concierge access is unlocked for your enterprise account.</p><div className="mt-3 flex flex-col gap-2"><button onClick={()=>alert("Connecting to Elena Vance...")} className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-xs font-semibold text-white"><Icon name="forum" className="text-base"/>Live Concierge Chat (Avg 2 min)</button><a href="tel:18005552739" className="flex items-center justify-center gap-2 rounded-lg bg-surface-container px-4 py-2.5 text-xs font-semibold"><Icon name="call" className="text-base"/>Call Carrier: 1-800-555-APEX</a><button onClick={()=>onOpen("dispute")} className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-muted hover:bg-surface-container"><Icon name="assignment_late" className="text-base"/>Open Dispute / Claim</button></div>
    </section>

    <section className="rounded-xl bg-white p-5 shadow-sm">
      
      <div className="font-bold">
        {order.customerName} ({order.company})
      </div>

      <div className="mt-1 leading-relaxed text-muted">
        {order.address.line1}
        <br />

        {order.address.line2 && (
          <>
            {order.address.line2}
            <br />
          </>
        )}

        {order.address.city}, {order.address.state}{" "}
        {order.address.zip}
        <br />

        {order.address.country}
      </div>

      <div className="mt-1 text-xs text-outline">
        Contact: {order.address.phone}
      </div>

      <strong className="text-ink">
        Access Code:
      </strong>{" "}
      {order.accessCode} programmed for courier driver handheld.

      
    </section>
  </aside>;
}
function Product({name,detail,price,image,qty}:{name:string;detail:string;price:string;image:string;qty:string}){return <div className="mt-3 flex items-center gap-3"><div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface-low"><img src={image} alt="" className="h-full w-full object-cover"/><span className="absolute bottom-1 right-1 rounded bg-primary px-1.5 py-0.5 font-inter text-[10px] text-white">{qty}</span></div><div className="min-w-0"><div className="truncate text-xs font-bold">{name}</div><div className="text-xs text-muted">{detail}</div><div className="pt-1 text-xs font-semibold">{price}</div></div></div>}
function Row({label,value,accent}:{label:string;value:string;accent?:boolean}){return <div className="flex justify-between text-muted"><span>{label}</span><span className={accent?"font-semibold text-tertiary-container":"font-semibold text-ink"}>{value}</span></div>}