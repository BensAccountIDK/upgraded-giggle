import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

const Index = () => {
  return (
    <div className="bg-background text-on-surface antialiased">
      <TopNav />
      <div className="flex min-h-screen">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Index;
