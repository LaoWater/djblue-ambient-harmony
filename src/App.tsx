import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ScrollManager } from "./components/ScrollManager";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PhilosophyPage from "./pages/PhilosophyPage";
import UseCasesPage from "./pages/UseCasesPage";
import Download from "./pages/Download";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { queryClient } from "@/lib/queryClient";
import { latestReleaseQueryOptions } from "@/lib/githubQueries";
import { ClientPlatformProvider } from "@/lib/clientPlatformContext";

const AppBootstrap = () => {
  useEffect(() => {
    void queryClient.prefetchQuery(latestReleaseQueryOptions);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ClientPlatformProvider>
        <AppBootstrap />
        <BrowserRouter>
          <ScrollManager />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/download" element={<Download />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ClientPlatformProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
