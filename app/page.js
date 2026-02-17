import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentBookings from "@/components/dashboard/recentBookings";
import SimpleAreaChart from "@/components/dashboard/SimpleAreaChart";
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <WelcomeSection name="Ahmed" />
     < StatsCards/>
     <SimpleAreaChart/>
      < RecentBookings/>
      
    </div>
  );
}
