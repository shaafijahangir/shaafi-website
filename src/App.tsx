import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Navbar />

      {/* push everything down so it isn't hidden under the fixed bar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
