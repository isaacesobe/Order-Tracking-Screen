import TrackingDashboard from "@/components/TrackingDashboard";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const params = await searchParams;

  return <TrackingDashboard orderId={params.order} />;
}
