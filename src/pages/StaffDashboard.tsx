import TopNav from "@/components/TopNav";
import StaffSidebar from "@/components/StaffSidebar";
import StaffDashboardContent from "@/components/StaffDashboardContent";

const StaffDashboard = () => {
  return (
    <div className="bg-background text-on-surface antialiased">
      <TopNav />
      <div className="flex min-h-screen">
        <StaffSidebar />
        <StaffDashboardContent />
      </div>
    </div>
  );
};

export default StaffDashboard;
