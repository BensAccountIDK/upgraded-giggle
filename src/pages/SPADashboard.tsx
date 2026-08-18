import TopNav from "@/components/TopNav";
import SPASidebar from "@/components/SPASidebar";
import SPADashboardContent from "@/components/SPADashboardContent";

const SPADashboard = () => {
  return (
    <div className="bg-background text-on-surface antialiased">
      <TopNav />
      <div className="flex min-h-screen">
        <SPASidebar />
        <SPADashboardContent />
      </div>
    </div>
  );
};

export default SPADashboard;
