import React from "react";

// Import company logo images
import adaniLogo from "@/assets/images/adani-logo.png";
import gaclLogo from "@/assets/images/gacl-logo.png";
import companyLogo from "@/assets/images/logo.png";

// Company logos data
const companyLogos = [
  { name: "Adani Group", logo: adaniLogo, color: "from-blue-600 to-blue-700" },
  { name: "GACL", logo: gaclLogo, color: "from-gray-600 to-gray-700" },
  { name: "Patel Machinery", logo: companyLogo, color: "from-green-600 to-green-700" },
  { name: "L&T Construction", logo: adaniLogo, color: "from-orange-600 to-orange-700" },
  { name: "Godrej Properties", logo: gaclLogo, color: "from-purple-600 to-purple-700" },
  { name: "NTPC Limited", logo: companyLogo, color: "from-yellow-600 to-yellow-700" },
  { name: "ONGC", logo: adaniLogo, color: "from-red-600 to-red-700" },
  { name: "Indian Railways", logo: gaclLogo, color: "from-indigo-600 to-indigo-700" },
  { name: "BHEL", logo: companyLogo, color: "from-teal-600 to-teal-700" },
  { name: "Coal India", logo: adaniLogo, color: "from-gray-700 to-gray-800" }
];

const ClientSectionCompanyLogosComponent = () => (
  <div className="pb-8 sm:pt-4 sm:pb-12 bg-white dark:bg-gray-900">
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
      
      {/* Single row - Auto scrolling logos */}
      <div className="flex animate-scroll-left space-x-8 sm:space-x-12 md:space-x-16">
        {[...companyLogos, ...companyLogos].map((company, idx) => (
          <div key={`logo-${idx}`} className="flex-shrink-0 group cursor-pointer">
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              {/* Logo container */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl bg-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 p-1 sm:p-2`}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              {/* Company name */}
              <div className="text-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ClientSectionCompanyLogosComponent;
