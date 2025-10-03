import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Import company logo images
import {
  adaniLogo,
  afclLogo,
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

// Company logos data (all available companies)
const allCompanyLogos = [
  { name: "Adani Group", logo: adaniLogo, color: "from-blue-600 to-blue-700" },
  { name: "AFCL", logo: afclLogo, color: "from-gray-600 to-gray-700" },
  { name: "BD Buildcom", logo: bdBuildcomLogo, color: "from-orange-600 to-orange-700" },
  { name: "Desai", logo: desaiLogo, color: "from-red-600 to-red-700" },
  { name: "DFPCL", logo: dfpclLogo, color: "from-blue-500 to-blue-600" },
  { name: "GACL", logo: gaclLogo, color: "from-teal-600 to-teal-700" },
  { name: "HARIC", logo: haricLogo, color: "from-purple-600 to-purple-700" },
  { name: "KLJ", logo: kljLogo, color: "from-indigo-600 to-indigo-700" },
  { name: "LT Geo", logo: ltGeoLogo, color: "from-orange-500 to-orange-600" },
  { name: "PSP", logo: pspLogo, color: "from-blue-500 to-blue-600" },
  { name: "Rayzon", logo: rayzonLogo, color: "from-purple-500 to-purple-600" },
  { name: "RBIPL", logo: rbiplLogo, color: "from-green-500 to-green-600" },
  { name: "SBPL", logo: sbplLogo, color: "from-yellow-500 to-yellow-600" },
  { name: "SMP", logo: smpLogo, color: "from-red-500 to-red-600" },
  { name: "SPCPL", logo: spcplLogo, color: "from-cyan-500 to-cyan-600" },
  { name: "Thermax", logo: thermaxLogo, color: "from-green-600 to-green-700" },
  { name: "Torrent", logo: torrentLogo, color: "from-blue-600 to-blue-700" },
];

const ClientSectionCompanyLogosDialogComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="pb-8 sm:pt-4 sm:pb-12 bg-white dark:bg-gray-900">
      {/* View All Clients Button */}
      <div className="flex justify-center mt-10">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 ease-out `}>
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Meet Our <span className="text-amber-200">Trusted Partners</span>
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Discover the prestigious companies who have chosen Patel Construction for their foundation 
              engineering projects. From industrial giants to renewable energy leaders.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg flex items-center">
                {/* <Building className="w-5 h-5 mr-3" /> */}
                View All Our Clients
              </button>
            </div>
          </div>
        </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-6">
                Our Trusted Clients
              </DialogTitle>
            </DialogHeader>
            
            {/* Card-based Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {allCompanyLogos.map((company, idx) => (
                <div
                  key={`all-logo-${idx}`}
                  className="group cursor-pointer"
                >
                  {/* Company Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 group-hover:scale-105">
                    {/* Logo container */}
                    <div className="flex justify-center mb-4">
                      <div className="w-32 h-24 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-md overflow-hidden flex items-center justify-center p-3">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            minWidth: '60px',
                            minHeight: '40px'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Company name */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {company.name}
                      </h3>
                      <div className={`mt-2 h-1 w-12 mx-auto rounded-full bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

    </div>
  );
};

export default ClientSectionCompanyLogosDialogComponent;
