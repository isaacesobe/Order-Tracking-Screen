export type TrackingState =
  | "out_for_delivery"
  | "processing"
  | "shipped"
  | "delivered"
  | "delayed"
  | "missing_dispute"
  | "not_scanned";

export type DrawerType =
  | "instructions"
  | "hold"
  | "damage"
  | "vacation"
  | "dispute"
  | "proof"
  | "reschedule"
  | "delay_inquiry"
  | "missing"
  | null;

export type Coordinates = {
  lat: number;
  lng: number;
};

export type TrackingMap = {
  origin: Coordinates;
  current: Coordinates;
  destination: Coordinates;
  route: Coordinates[];
};

export type OrderItem = {
  name: string;
  detail: string;
  price: string;
  image: string;
  qty: string;
};

export type ShipmentScan = readonly [
  string,
  string,
  string
];

export type Order = {
  trackingNumber: string;
  orderNumber: string;

  state: TrackingState;

  placedAt: string;
  carrier: string;

  customerName: string;
  company: string;

  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
  };

  accessCode: string;
  deliveryInstructions: string;

  items: OrderItem[];
  totalItems: number;
  subtotal: string;
  shipping: string;
  tax: string;
  total: string;
  payment: string;

  supportAgent: string;

  scans: ShipmentScan[];

  map?: TrackingMap;

  driver?: {
    name: string;
    vehicle: string;
    vehicleType: string;
  };
};

export type StateConfig = {
  badgeText: string;
  badgeClass: string;
  etaIcon: string;
  etaTitle: string;
  etaSubtitle: string;
  etaPill: string;
  etaPillClass: string;
  progress: number;
  activeStep: number;
  showMap: boolean;
  bannerTitle: string;
  bannerText: string;
  bannerIcon: string;
  bannerClass: string;
  bannerAction?: string;
};
