# TrackPulse PRO

**TrackPulse PRO** is a frontend shipment-tracking dashboard built as a coding test using Next.js, React, TypeScript, and Tailwind CSS.

The application demonstrates a modern logistics tracking experience where different tracking IDs load different order information, shipment statuses, delivery details, scan history, and map locations.

---

## Scope

The main goal of the project is to demonstrate:

* **Responsive shipment tracking dashboard**
* **Multiple orders managed from frontend data**
* **Tracking ID-based order lookup**
* **Different shipment statuses and corresponding UI states**
* **Shipment lifecycle and scan history**
* **Interactive delivery tracking map**
* **Delivery controls and simulated actions**
* **Responsive desktop and mobile layouts**
* **Reusable React components**
* **State-driven UI updates**

The UI is intentionally kept consistent while the displayed information changes based on the selected tracking ID.

---

## Dummy Order Data

All shipment, customer, carrier, address, tracking, scan, and map information in this project is dummy frontend data.

The application uses a frontend order object containing multiple orders. Searching for a tracking ID selects the corresponding order and updates the dashboard with that order's information.

### Available Tracking IDs

| Tracking ID | Order ID | Status |
| :--- | :--- | :--- |
| `9400 1102 0088 3920 1823 44` | `TRK-89421-US` | Out for Delivery |
| `9400 1102 0088 3920 1823 51` | `TRK-90512-US` | Shipped & In Transit |
| `9400 1102 0088 3920 1831 07` | `TRK-91384-US` | Processing |
| `9400 1102 0088 3920 1831 22` | `TRK-92741-US` | Delivered |
| `9400 1102 0088 3920 1831 39` | `TRK-93862-US` | Delayed |
| `9400 1102 0088 3920 1831 46` | `TRK-94127-US` | Not Received |
| `9400 1102 0088 3920 1831 53` | `TRK-95603-US` | Tracking Unavailable |

*These IDs are provided only for testing the different dashboard states.*

---

## Tracking Experience

Each order can contain its own:

* Tracking number
* Order number
* Shipment status
* Estimated delivery time
* Carrier information
* Customer information
* Delivery address
* Order items
* Payment summary
* Shipment scans
* Driver information
* Vehicle information
* Route information
* Current map position
* Destination position
* Delivery instructions

When a different tracking ID is entered, the dashboard displays the information belonging to that order instead of using a single hardcoded shipment.

---

## Interactive Map

The dashboard includes an interactive tracking map for orders where location tracking is available.

The map displays dummy geographic data representing:
* Shipment origin
* Current shipment/vehicle location
* Delivery destination
* Shipment route

The map is interactive and supports normal map navigation such as zooming and panning.

> **Note:** The vehicle positions and routes are simulated data and do not represent real shipments or real-time carrier telemetry.

---

## Shipment States

The dashboard demonstrates several possible shipment states:

* **Processing** — The order is being prepared for shipment.
* **Shipped** — The shipment is in transit.
* **Out for Delivery** — The shipment is currently with the local delivery vehicle.
* **Delivered** — The shipment has been delivered.
* **Delayed** — The shipment has encountered a delivery delay.
* **Not Received** — A delivery dispute/missing-package state.
* **Tracking Unavailable** — The shipment is awaiting its first carrier scan.

Each state changes relevant parts of the interface, including the status badge, ETA, progress, banner, lifecycle, and map visibility.

---

## Simulation Mode

The dashboard includes a telemetry simulation control that allows the different shipment states to be previewed without changing the underlying dummy order data.

This is included primarily to demonstrate how the UI responds to different tracking scenarios.

---

## Delivery Controls

The interface also includes simulated customer actions such as:

* Hold at pickup location
* Update driver instructions
* Report damaged contents
* Vacation hold
* Open a dispute
* View proof of delivery
* Reschedule delivery
* View delay details
* Report a package as not received

These interactions are frontend-only and are intended to demonstrate the interaction design rather than perform real carrier operations.

---

## Running the Project

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the local Next.js application in your browser.

---

## Technologies

* **Framework:** Next.js / React
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Mapping:** Leaflet / React Leaflet
