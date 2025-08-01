import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import logoImage from "@Assets/images/logo.png";
import LargeScreenNavigationMenuComponent from "@Components/navigationMenu/largeScreenNavigationMenu";
import MobileScreenNavigationMenuComponent from "@Components/navigationMenu/mobileScreenNavigationMenu";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "About us" },
  { href: "#", label: "Clients" },
  {
    label: "Services",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        href: "#",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        href: "#",
        label: "Templates",
        description: "Pre-built layouts for common use cases.",
      },
    ],
  },
  { href: "#", label: "Field work" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Contact us" },
  // {
  //   label: "Pricing",
  //   submenu: true,
  //   type: "simple",
  //   items: [
  //     { href: "#", label: "Product A" },
  //     { href: "#", label: "Product B" },
  //     { href: "#", label: "Product C" },
  //     { href: "#", label: "Product D" },
  //   ],
  // },
  // {
  //   label: "About",
  //   submenu: true,
  //   type: "icon",
  //   items: [
  //     { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
  //     { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
  //     { href: "#", label: "About Us", icon: "InfoIcon" },
  //   ],
  // },
];

function NavigationMenuComponent() {
  return (
    <header className="relative bg-orange-500 px-4 md:px-6 z-50">
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
              <AvatarFallback>CN</AvatarFallback>
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
