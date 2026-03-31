import { useState, useEffect } from "react";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Recipes } from "./components/Recipes";
import { TrainingTips } from "./components/TrainingTips";
import { Adoption } from "./components/Adoption";
import { Donation } from "./components/Donation";
import { VisitScheduling } from "./components/VisitScheduling";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { Auth } from "./components/Auth";
import { AccessibilityButton } from "./components/AccessibilityButton";
import { AccessibilityMenu } from "./components/AccessibilityMenu";
import { Toaster } from "./components/ui/sonner";

function AppContent() {
  const [activeSection, setActiveSection] = useState("home");
  const [accessibilityMenuOpen, setAccessibilityMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Atalho de teclado Alt + A para abrir menu de acessibilidade
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === "a") {
        e.preventDefault();
        setAccessibilityMenuOpen(true);
      }
      if (e.key === "Escape") {
        setAccessibilityMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection}
        onCartOpen={() => setCartOpen(true)}
        onAuthOpen={() => setAuthOpen(true)}
      />
      
      <main className="flex-1">
        <div id="home">
          <Hero onNavigate={handleNavigate} />
        </div>
        
        <div id="products">
          <Products />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="recipes">
          <Recipes />
        </div>

        <div id="training">
          <TrainingTips />
        </div>
        
        <div id="adoption">
          <Adoption />
        </div>
        
        <div id="donation">
          <Donation />
        </div>
        
        <div id="visits">
          <VisitScheduling />
        </div>
      </main>
      
      <Footer />
      
      {/* Modals e Menus */}
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Auth isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <AccessibilityButton onClick={() => setAccessibilityMenuOpen(true)} />
      <AccessibilityMenu 
        isOpen={accessibilityMenuOpen} 
        onClose={() => setAccessibilityMenuOpen(false)} 
      />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}
