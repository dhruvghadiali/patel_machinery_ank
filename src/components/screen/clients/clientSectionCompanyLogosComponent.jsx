import React from "react";

// Import company logo images
import {
  adaniLogo,
  afclLogo,
  desaiLogo,
  gaclLogo,
  pspLogo,
  ltGeoLogo,
  rayzonLogo,
} from "@/utils/images";

// Featured company logos for scrolling display (subset)
const featuredCompanyLogos = [
  { name: "AFCL", logo: afclLogo, color: "from-gray-600 to-gray-700" },
  { name: "Adani Group", logo: adaniLogo, color: "from-blue-600 to-blue-700" },
  { name: "L&T Geo", logo: ltGeoLogo, color: "from-orange-500 to-orange-600" },
  { name: "Desai", logo: desaiLogo, color: "from-red-600 to-red-700" },
  { name: "GACL", logo: gaclLogo, color: "from-teal-600 to-teal-700" },
  { name: "PSP", logo: pspLogo, color: "from-blue-500 to-blue-600" },
  { name: "Rayzon", logo: rayzonLogo, color: "from-purple-500 to-purple-600" },
];
const ClientSectionCompanyLogosComponent = () => {

  return (
    <div className="pb-8 sm:pt-4 sm:pb-12 bg-white dark:bg-gray-900">
      
      <div className="relative overflow-hidden">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>

        {/* Single row - Auto scrolling logos */}
        <div className="flex animate-scroll-left space-x-8 sm:space-x-12 md:space-x-16">
          {featuredCompanyLogos.map((company, idx) => (
            <div
              key={`logo-${idx}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                {/* Logo container - Mobile Optimized */}
                <div
                  className={`w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-52 lg:h-32 rounded-xl bg-white/70 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center p-2 sm:p-3`}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      minWidth: '35px',
                      minHeight: '25px'
                    }}
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
};

export default ClientSectionCompanyLogosComponent;
