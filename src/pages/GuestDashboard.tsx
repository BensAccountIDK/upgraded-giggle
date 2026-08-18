import GuestTopNav from "@/components/GuestTopNav";
import GuestArchiveContent from "@/components/GuestArchiveContent";
import GuestFooter from "@/components/GuestFooter";

const GuestDashboard = () => {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <GuestTopNav />
      <main className="flex-1 flex flex-col min-w-0">
        <GuestArchiveContent />
      </main>
      <GuestFooter />
    </div>
  );
};

export default GuestDashboard;
