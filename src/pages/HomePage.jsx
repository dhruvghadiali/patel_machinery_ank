import { useEffect, useState } from "react";
import NavigationMenuComponent from "@Components/navigationMenu";
import HomeScreenComponent from "@ScreenComponents/home";
import ServicesIntroComponent from "@ScreenComponents/services";
import ClientsIntroComponent from "@ScreenComponents/clients";
import EquipmentIntroComponent from "@ScreenComponents/equipment";

export default function HomePage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Trigger page load animation
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // Small delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-out ${
      isPageLoaded 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`}>
      {/* Navigation with slide down animation */}
      <div className={`transition-all duration-800 delay-200 ease-out ${
        isPageLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4'
      }`}>
        <NavigationMenuComponent />
      </div>
      
      {/* Home content with fade up animation */}
      <div className={`relative -z-10 transition-all duration-1000 delay-400 ease-out  ${
        isPageLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}>
        <HomeScreenComponent />
      </div>

      {/* Services section */}
      <div className={`relative -z-10 transition-all duration-1000 delay-600 ease-out  ${
        isPageLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}>
        <ServicesIntroComponent />
      </div>

      {/* Clients section */}
      <div className={`relative -z-10 transition-all duration-1000 delay-800 ease-out  ${
        isPageLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}>
        <ClientsIntroComponent />
      </div>

      {/* Equipment section */}
      <div className={`relative -z-10 transition-all duration-1000 delay-1000 ease-out  ${
        isPageLoaded 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}>
        <EquipmentIntroComponent />
      </div>
    </div>
  );
}
