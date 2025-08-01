import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import logoImage from "@Assets/images/logo.png";
import LargeScreenNavigationMenuComponent from "@Components/navigationMenu/largeScreenNavigationMenu";
import MobileScreenNavigationMenuComponent from "@Components/navigationMenu/mobileScreenNavigationMenu";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#home", label: "Home" },
  {
    label: "Services",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#services",
        label: "Deep Foundation",
        description: "Transfer building loads to deeper, stronger soil layers.",
      },
      {
        href: "#services",
        label: "Earth Retention Solutions",
        description: "Support excavations and prevent soil movement.",
      },
      {
        href: "#services",
        label: "Pile Testing Solutions",
        description: "Evaluate the load-bearing capacity of piles.",
      },
      {
        href: "#services",
        label: "Rentals",
        description: "Provide equipment and machinery for construction projects.",
      },
    ],
  },
  { href: "#clients", label: "Clients" },
  { href: "#equipment", label: "Equipment" },
  { href: "#awards", label: "Awards" },
  { href: "#projects", label: "Projects" },
  { href: "#about-us", label: "About us" },
];

function NavigationMenuComponent() {
  return (
    <header className="sticky top-0 bg-orange-500 px-4 md:px-6 z-50 shadow-lg">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <MobileScreenNavigationMenuComponent
            navigationLinks={navigationLinks}
          />

          {/* Main nav */}
          <div className="relative flex items-center gap-6">
            <Avatar className="bg-white h-14 w-14">
              <AvatarImage src={logoImage} />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
            {/* Navigation menu */}
            <LargeScreenNavigationMenuComponent
              navigationLinks={navigationLinks}
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default NavigationMenuComponent;
