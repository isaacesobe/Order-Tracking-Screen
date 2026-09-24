import Icon from "./Icon";
import { DrawerType } from "./types";

const actions: {type: DrawerType; icon:string; title:string; text:string; danger?:boolean}[] = [
  {type:"hold",icon:"storefront",title:"Hold at Pickup Location",text:"Redirect to a secure Apex Access Point locker near your address."},
  {type:"instructions",icon:"notes",title:"Update Driver Instructions",text:'Current: "Gate code #4921, place behind front porch planter box."'},
  {type:"damage",icon:"report_problem",title:"Report Damaged Contents",text:"Instantly initiate a guaranteed damage claim and request replacement.",danger:true},
  {type:"vacation",icon:"hotel",title:"Vacation Hold Request",text:"Pause delivery up to 14 days while you are away from the office."}
];

export default function Controls({onOpen}:{onOpen:(type:DrawerType)=>void}) {
  return <section className="rounded-xl bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h3 className="text-lg font-semibold">Delivery Controls & Issues</h3><p className="text-xs text-muted">Configure instructions or report shipment discrepancies</p></div><Icon name="tune" className="text-secondary" /></div><div className="mt-4 grid gap-3 md:grid-cols-2">{actions.map(a=><button key={a.title} onClick={()=>onOpen(a.type)} className="group flex items-start gap-3 rounded-xl bg-surface-low p-4 text-left transition hover:bg-surface-container"><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ${a.danger?"text-error":"text-secondary"}`}><Icon name={a.icon}/></div><div><div className="text-sm font-bold">{a.title}</div><div className="text-xs text-muted">{a.text}</div></div></button>)}</div></section>;
}