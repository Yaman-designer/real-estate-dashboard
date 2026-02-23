import WelcomeSection from "@/components/dashboard/Welcome";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentProperties from "@/components/dashboard/RecentProperties";
import SimpleAreaChart from "@/components/dashboard/AreaChart";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <WelcomeSection name="Ahmed" />
      <StatsCards />
      <SimpleAreaChart />
      <RecentProperties />
    </div>
  );
}
