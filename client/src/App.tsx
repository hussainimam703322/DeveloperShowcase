import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AuthPage from "@/components/AuthPage";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication in local storage
  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('ascenthub_auth');
      if (auth) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };
    
    // Small delay to simulate checking auth
    setTimeout(checkAuth, 500);
  }, []);

  const handleAuthentication = () => {
    // Store authentication status in local storage
    localStorage.setItem('ascenthub_auth', 'true');
    setIsAuthenticated(true);
  };
  
  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // Show authentication page if not authenticated
  if (!isAuthenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthPage onAuth={handleAuthentication} />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  // Show main application if authenticated
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Header />
          <Router />
          <Footer />
          <BackToTop />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
