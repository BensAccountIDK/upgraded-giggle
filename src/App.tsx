import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing.tsx";
import Index from "./pages/Index.tsx";
import StaffDashboard from "./pages/StaffDashboard.tsx";
import SPADashboard from "./pages/SPADashboard.tsx";
import GuestDashboard from "./pages/GuestDashboard.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/dashboard/staff" element={<StaffDashboard />} />
          <Route path="/dashboard/spa" element={<SPADashboard />} />
          <Route path="/dashboard/guest" element={<GuestDashboard />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
