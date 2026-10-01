// 3Qtr | Unlocking Human Performance
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import LeadersOrganizations from "./pages/LeadersOrganizations";
import SportsTeams from "./pages/SportsTeams";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaders-organizations" element={<LeadersOrganizations />} />
          <Route path="/sports-teams" element={<SportsTeams />} />
          {/* Old URLs from previous site structures */}
          <Route path="/services" element={<Navigate to="/sports-teams" replace />} />
          <Route path="/who-we-serve" element={<Navigate to="/sports-teams" replace />} />
          <Route path="/nil-faq" element={<Navigate to="/sports-teams" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
