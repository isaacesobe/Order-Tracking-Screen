import { Order, StateConfig, TrackingState } from "./types";

export const trackingStates: {
  key: TrackingState;
  label: string;
  dot?: string;
  icon?: string;
}[] = [
  {
    key: "out_for_delivery",
    label: "Out for Delivery",
    dot: "bg-secondary",
  },
  {
    key: "processing",
    label: "Processing",
    dot: "bg-outline-variant",
  },
  {
    key: "shipped",
    label: "Shipped",
    dot: "bg-secondary-container",
  },
  {
    key: "delivered",
    label: "Delivered",
    dot: "bg-tertiary-fixed",
  },
  {
    key: "delayed",
    label: "Delayed Order",
    dot: "bg-error",
  },
  {
    key: "missing_dispute",
    label: "Not Received",
    icon: "help",
  },
  {
    key: "not_scanned",
    label: "Not Available",
    icon: "pending_actions",
  },
];

export const stateConfigs: Record<TrackingState, StateConfig> = {
  out_for_delivery: {
    badgeText: "Out for Delivery",
    badgeClass: "bg-secondary-fixed text-secondary",
    etaIcon: "local_shipping",
    etaTitle: "Today, Oct 27 by 4:30 PM",
    etaSubtitle:
      "Driver is <strong>6 stops away</strong> (approx. 45 mins)",
    etaPill: "On Schedule",
    etaPillClass: "bg-secondary/10 text-secondary",
    progress: 66.6,
    activeStep: 3,
    showMap: true,
    bannerTitle: "Express Ground Priority Route",
    bannerText:
      "Live telemetry ping active. Real-time driver milestone coordinates are synced with dispatch.",
    bannerIcon: "near_me",
    bannerClass: "bg-secondary/10",
    bannerAction: "SLA Precision: 99.8% Guaranteed",
  },

  processing: {
    badgeText: "Processing Order",
    badgeClass: "bg-surface-highest text-muted",
    etaIcon: "inventory_2",
    etaTitle: "Estimated Oct 29 - Oct 30",
    etaSubtitle:
      "Fulfillment warehouse is packing and inspecting high-value components.",
    etaPill: "Preparing Shipment",
    etaPillClass: "bg-surface-container text-muted",
    progress: 10,
    activeStep: 1,
    showMap: false,
    bannerTitle: "Order Received & Being Picked",
    bannerText:
      "Your order is being assembled at our automated Louisville distribution center.",
    bannerIcon: "inventory",
    bannerClass: "bg-surface-low",
    bannerAction: "Picking Wave #910",
  },

  shipped: {
    badgeText: "Shipped & In Transit",
    badgeClass: "bg-surface-high text-secondary",
    etaIcon: "flight_takeoff",
    etaTitle: "Tomorrow, Oct 28 by 6:00 PM",
    etaSubtitle:
      "Departed Indianapolis Sort Facility • Transferred to Apex Ground Linehaul.",
    etaPill: "In Transit",
    etaPillClass: "bg-secondary/10 text-secondary",
    progress: 33.3,
    activeStep: 2,
    showMap: true,
    bannerTitle: "High-Speed Linehaul Route in Motion",
    bannerText:
      "Container has crossed state corridor I-65 North. Estimated sorting scan within 4 hours.",
    bannerIcon: "moving",
    bannerClass: "bg-surface-high/40",
    bannerAction: "Freight Express",
  },

  delivered: {
    badgeText: "Package Delivered",
    badgeClass: "bg-tertiary-fixed text-tertiary-container font-bold",
    etaIcon: "verified",
    etaTitle: "Delivered Today at 2:15 PM",
    etaSubtitle:
      "Signed and left securely at: <strong>Front Porch (Behind planter)</strong>",
    etaPill: "Completed",
    etaPillClass: "bg-tertiary-fixed text-tertiary-container",
    progress: 100,
    activeStep: 4,
    showMap: false,
    bannerTitle: "Shipment Successfully Delivered!",
    bannerText:
      "Proof of delivery captured by carrier. Timestamp: Oct 27, 2024, 2:15 PM Central.",
    bannerIcon: "check_circle",
    bannerClass: "bg-tertiary-fixed/30",
    bannerAction: "View Delivery Photo",
  },

  delayed: {
    badgeText: "Shipment Delayed",
    badgeClass: "bg-error-container text-error font-bold",
    etaIcon: "warning",
    etaTitle: "Rescheduled: Tomorrow, Oct 28 by 12:00 PM",
    etaSubtitle:
      "Severe weather interruption on Midwest corridor. Ground trailers grounded temporarily for operator safety.",
    etaPill: "Weather Delay",
    etaPillClass: "bg-error-container text-error",
    progress: 45,
    activeStep: 2,
    showMap: true,
    bannerTitle: "Delivery Rescheduled Due to Severe Weather",
    bannerText:
      "Transit Hub in Indianapolis, IN experienced severe blizzard conditions. Revised guaranteed arrival is Oct 28 by 12:00 PM.",
    bannerIcon: "cyclone",
    bannerClass: "bg-error-container/40",
    bannerAction: "Get Delay Details",
  },

  missing_dispute: {
    badgeText: "Delivery Dispute Open",
    badgeClass: "bg-error-container text-error font-bold",
    etaIcon: "report_problem",
    etaTitle: "Delivery exception requires review",
    etaSubtitle:
      "No confirmed delivery scan was recorded. Your dispute is ready for carrier review.",
    etaPill: "Action Required",
    etaPillClass: "bg-error-container text-error",
    progress: 100,
    activeStep: 4,
    showMap: false,
    bannerTitle: "Package Not Received?",
    bannerText:
      "We found no matching recipient confirmation. Open a claim to start the investigation.",
    bannerIcon: "assignment_late",
    bannerClass: "bg-error-container/40",
    bannerAction: "Open Claim",
  },

  not_scanned: {
    badgeText: "Tracking Unavailable",
    badgeClass: "bg-surface-container text-muted",
    etaIcon: "pending_actions",
    etaTitle: "Awaiting first carrier scan",
    etaSubtitle:
      "The carrier has received the order information, but no physical facility scan is available yet.",
    etaPill: "Pending Scan",
    etaPillClass: "bg-surface-container text-muted",
    progress: 0,
    activeStep: 1,
    showMap: false,
    bannerTitle: "Carrier Scan Pending",
    bannerText:
      "Tracking telemetry will appear here as soon as the first physical scan is received.",
    bannerIcon: "pending_actions",
    bannerClass: "bg-surface-low",
    bannerAction: "Check Again",
  },
};

export const orders: Record<string, Order> = {
  "9400110200883920182344": {
    trackingNumber: "9400 1102 0088 3920 1823 44",
    orderNumber: "TRK-89421-US",
    state: "out_for_delivery",

    placedAt: "Oct 24, 2024 at 10:14 AM",
    carrier: "Apex Express Freight",

    customerName: "Marcus Sterling",
    company: "Acme Labs Inc.",

    address: {
      line1: "742 Evergreen Terrace",
      line2: "Suite 400",
      city: "Chicago",
      state: "IL",
      zip: "60601",
      country: "United States",
      phone: "+1 (312) 555-0199",
    },

    accessCode: "#4921",
    deliveryInstructions:
      "Gate code #4921, place behind front porch planter box.",

    items: [
      {
        name: "Studio Pro ANC Headphones",
        detail: "Matte Black • Wireless BT 5.3",
        price: "$279.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAEl0dMPUDJ3QS_t7-uE_wL6n_oX0oh2L0fCBc1ZsAMYoHLBsWV6ZTJqvSUIveqhOeyFaB3rYk15V93D0ge9tiiRaBIidT1oKIDK65Vkye0KDHZ44pRWUhH-E4xy8h0p6GbvGBOmtFb_A3ILpck9SPzIX_op1Ca1LyGi-1_BcHY4gV_m-tKiK1FKWT0XCxUyPhsFuZzcyy0wRnfCRJXlQntjxe8QjOxkbq9HZfz8wiiqf4Hh7Da85oY",
        qty: "x1",
      },
      {
        name: "Braided Type-C Fast Cable 2m",
        detail: "Heavy Duty Kevlar • 100W PD",
        price: "$38.00",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBbVNZ3_EA_fWTI4H9QJYj9_4r9QHxMrUE9lvJA1MDaAVifAN9VLvGV-8t3L3kA_dVVcnojBHnt-Tj-8KUwpS2i29fRnHxfdyyVheqNjztF66C0NMCBSlrw5GX0p4p9LJDb3z9HYbes8VBLsPCp7v-2d3PY6b1lBurIPeSVDZIrNX62fJjBgjX2w_tNGo615IykVJ3pPwoJc8ElYJVHXGYxGC2UFgJGnRgc_UIA5W-YDSZ7-XSyndw1",
        qty: "x2",
      },
    ],

    totalItems: 3,
    subtotal: "$317.00",
    shipping: "FREE (Over $100)",
    tax: "$24.80",
    total: "$341.80",
    payment: "Visa ending in 4242",

    supportAgent: "Elena Vance",

    scans: [
      [
        "Out for Delivery - Loaded on Local Van",
        "Apex Central Distribution Facility, Chicago Depot 04",
        "Today, 8:15 AM",
      ],
      [
        "Arrived at Destination Sort Facility",
        "Apex Regional Logistics Hub, Chicago IL",
        "Today, 4:48 AM",
      ],
      [
        "Departed Intermodal Gateway",
        "Midwest Express Transit Center, Indianapolis IN",
        "Oct 26, 11:15 PM",
      ],
      [
        "In Transit to Sorting Terminal",
        "Apex Line-Haul Transport Route 65N",
        "Oct 26, 03:20 PM",
      ],
      [
        "Origin Facility Scan & Weigh-In",
        "Apex Fulfillment Center, Louisville KY",
        "Oct 25, 6:30 PM",
      ],
      [
        "Shipping Label Manifest Generated",
        "Electronic notification received by carrier",
        "Oct 24, 10:14 AM",
      ],
    ],

    driver: {
      name: "Marcus Thornton",
      vehicle: "Apex Fleet Vehicle #APX-412",
      vehicleType: "Clean Fuel EV Van #04",
    },

    map: {
      origin: {
        lat: 39.7684,
        lng: -86.1581,
      },

      current: {
        lat: 41.865,
        lng: -87.675,
      },

      destination: {
        lat: 41.8827,
        lng: -87.6233,
      },

      route: [
        { lat: 39.7684, lng: -86.1581 },
        { lat: 40.15, lng: -86.35 },
        { lat: 40.55, lng: -86.65 },
        { lat: 40.95, lng: -86.95 },
        { lat: 41.35, lng: -87.25 },
        { lat: 41.65, lng: -87.48 },
        { lat: 41.865, lng: -87.675 },
        { lat: 41.8827, lng: -87.6233 },
      ],
    },
  },

  "9400110200883920182351": {
    trackingNumber: "9400 1102 0088 3920 1823 51",
    orderNumber: "TRK-90512-US",
    state: "shipped",

    placedAt: "Oct 25, 2024 at 9:22 AM",
    carrier: "Apex Ground Freight",

    customerName: "Sarah Johnson",
    company: "Northstar Technologies",

    address: {
      line1: "1600 Pennsylvania Avenue",
      line2: "Floor 3",
      city: "Washington",
      state: "DC",
      zip: "20500",
      country: "United States",
      phone: "+1 (202) 555-0144",
    },

    accessCode: "#8173",
    deliveryInstructions: "Leave with building reception.",

    items: [
      {
        name: "Enterprise Docking Station",
        detail: "Thunderbolt 4 • Dual Display",
        price: "$249.00",
        image:
          "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400",
        qty: "x1",
      },
    ],

    totalItems: 1,
    subtotal: "$249.00",
    shipping: "FREE",
    tax: "$19.42",
    total: "$268.42",
    payment: "Visa ending in 1088",

    supportAgent: "David Chen",

    scans: [
      [
        "Departed Indianapolis Sort Facility",
        "Apex Regional Hub, Indianapolis IN",
        "Today, 6:20 AM",
      ],
      [
        "Arrived at Indianapolis Sort Facility",
        "Apex Regional Hub, Indianapolis IN",
        "Oct 26, 11:20 PM",
      ],
      [
        "Departed Louisville Fulfillment Center",
        "Louisville, KY",
        "Oct 26, 4:10 PM",
      ],
    ],

    map: {
      origin: {
        lat: 38.2527,
        lng: -85.7585,
      },

      current: {
        lat: 39.7667,
        lng: -86.4417,
      },

      destination: {
        lat: 38.8977,
        lng: -77.0365,
      },

      route: [
        { lat: 38.2527, lng: -85.7585 },
        { lat: 38.65, lng: -85.95 },
        { lat: 39.05, lng: -86.15 },
        { lat: 39.45, lng: -86.3 },
        { lat: 39.7667, lng: -86.4417 },
        { lat: 39.9, lng: -85.8 },
        { lat: 40.0, lng: -84.7 },
        { lat: 39.8, lng: -82.5 },
        { lat: 39.1, lng: -80.8 },
        { lat: 38.8977, lng: -77.0365 },
      ],
    },

    driver: {
      name: "James Wilson",
      vehicle: "Apex Ground Vehicle #AX-821",
      vehicleType: "Longhaul Freight",
    },
  },

  "9400110200883920182368": {
    trackingNumber: "9400 1102 0088 3920 1823 68",
    orderNumber: "TRK-91881-US",
    state: "delayed",

    placedAt: "Oct 23, 2024 at 2:05 PM",
    carrier: "Apex Ground Freight",

    customerName: "Michael Carter",
    company: "Carter Medical Systems",

    address: {
      line1: "1 Market Street",
      line2: "Suite 800",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
      phone: "+1 (415) 555-0122",
    },

    accessCode: "#3318",
    deliveryInstructions: "Call recipient before delivery.",

    items: [
      {
        name: "Precision Medical Monitor",
        detail: "4K Diagnostic Display",
        price: "$899.00",
        image:
          "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400",
        qty: "x1",
      },
    ],

    totalItems: 1,
    subtotal: "$899.00",
    shipping: "FREE",
    tax: "$71.92",
    total: "$970.92",
    payment: "Corporate Visa ending in 7721",

    supportAgent: "Rachel Adams",

    scans: [
      [
        "Weather Delay Recorded",
        "Apex Midwest Weather Operations Center",
        "Today, 9:42 AM",
      ],
      [
        "Trailer Held for Safety Inspection",
        "Indianapolis Regional Hub",
        "Today, 6:15 AM",
      ],
      [
        "Departed Indianapolis",
        "Indianapolis, IN",
        "Oct 26, 11:15 PM",
      ],
    ],

    map: {
      origin: {
        lat: 39.7684,
        lng: -86.1581,
      },

      current: {
        lat: 39.9,
        lng: -86.15,
      },

      destination: {
        lat: 37.7749,
        lng: -122.4194,
      },

      route: [
        { lat: 39.7684, lng: -86.1581 },
        { lat: 39.9, lng: -86.15 },
        { lat: 39.4, lng: -87.1 },
        { lat: 38.9, lng: -88.2 },
        { lat: 38.2, lng: -89.2 },
        { lat: 37.9, lng: -101 },
        { lat: 37.7, lng: -110 },
        { lat: 37.7749, lng: -122.4194 },
      ],
    },

    driver: {
      name: "Regional Driver",
      vehicle: "Apex Ground Vehicle #AX-294",
      vehicleType: "Weather Restricted Route",
    },
  },
};
