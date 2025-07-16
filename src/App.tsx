import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/ui/StarryBackground";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll"; 

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  useFadeInOnScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {/* Mesh Gradient Backgrounds */}
        <div className="fixed inset-0 -z-20">
          {/* Light mode mesh */}
          <img
            src="/mesh-light2.svg"
            alt="mesh light"
            className="w-full h-full object-cover opacity-90 dark:hidden rotate-270"
          />

          {/* Dark mode mesh */}
          <img
            src="/mesh-dark1.svg"
            alt="mesh dark"
            className="w-full h-full object-cover opacity-80 hidden dark:block rotate-180"
          />
        </div>

        {/* Background stars */}
        <div className="fixed inset-0 -z-10">
          <StarryBackground />
        </div>

        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Navbar />

          {/* Main routed content */}
          <div className="pt-20 relative z-10">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Hero />
                      <Experience />
                      <Projects />
                      <Education />
                      <Skills />
                      <Contact />
                    </motion.div>
                  }
                />
                <Route path="/project/:slug" element={<ProjectPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </div>

          <Footer />
        </TooltipProvider>

        <Analytics />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
