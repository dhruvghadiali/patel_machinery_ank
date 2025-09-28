import React from "react";

// Import company logo images
import {
  adaniLogo,
  afclLogo,
  amararajaLogo,
  amsLogo,
  brLogo,
  bdBuildcomLogo,
  desaiLogo,
  dfpclLogo,
  gaclLogo,
  haricLogo,
  pspLogo,
  kljLogo,
  ltGeoLogo,
  rayzonLogo,
  rbiplLogo,
  sbplLogo,
  smpLogo,
  spcplLogo,
  thermaxLogo,
  torrentLogo,
} from "@/utils/images";

// Company logos data
const companyLogos = [
  { name: "Adani Group", logo: adaniLogo, color: "from-blue-600 to-blue-700" },
  { name: "Atvantic", logo: afclLogo, color: "from-gray-600 to-gray-700" },
  { name: "Amara Raja", logo: amararajaLogo, color: "from-green-600 to-green-700" },
  { name: "B & R", logo: brLogo, color: "from-purple-600 to-purple-700" },
  { name: "BD Buildcom", logo: bdBuildcomLogo, color: "from-yellow-600 to-yellow-700" },
  { name: "Desai", logo: desaiLogo, color: "from-red-600 to-red-700" },
  { name: "DFPCL", logo: dfpclLogo, color: "from-indigo-600 to-indigo-700" },
  { name: "GACL", logo: gaclLogo, color: "from-teal-600 to-teal-700" },
  { name: "Haric", logo: haricLogo, color: "from-gray-700 to-gray-800" },
  { name: "PSP", logo: pspLogo, color: "from-blue-500 to-blue-600" },
  { name: "KLJ", logo: kljLogo, color: "from-green-500 to-green-600" },
  { name: "LT Geo", logo: ltGeoLogo, color: "from-orange-500 to-orange-600" },
  { name: "Rayzon", logo: rayzonLogo, color: "from-purple-500 to-purple-600" },
  { name: "RBIPL", logo: rbiplLogo, color: "from-red-500 to-red-600" },
  { name: "SBPL", logo: sbplLogo, color: "from-indigo-500 to-indigo-600" },
  { name: "SMP", logo: smpLogo, color: "from-teal-500 to-teal-600" },
  { name: "SPCPL", logo: spcplLogo, color: "from-yellow-500 to-yellow-600" },
  { name: "Thermax", logo: thermaxLogo, color: "from-pink-500 to-pink-600" },
  { name: "Torrent", logo: torrentLogo, color: "from-cyan-500 to-cyan-600" },
];
const ClientSectionCompanyLogosComponent = () => (
  <div className="pb-8 sm:pt-4 sm:pb-12 bg-white dark:bg-gray-900">
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-16 h-full bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>

      {/* Single row - Auto scrolling logos */}
      <div className="flex animate-scroll-left space-x-8 sm:space-x-12 md:space-x-16">
        {[...companyLogos, ...companyLogos, ...companyLogos].map((company, idx) => (
          <div
            key={`logo-${idx}`}
            className="flex-shrink-0 group cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              {/* Logo container */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/70 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 p-2 sm:p-3`}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
