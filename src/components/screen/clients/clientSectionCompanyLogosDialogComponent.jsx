import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Building2, Sparkles, ArrowRight, Award, Users, Eye } from "lucide-react";

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
  amns,
  vmc,
} from "@/utils/images";

// Company logos data (all available companies)
const allCompanyLogos = [
  { name: "Adani Group", logo: adaniLogo, color: "from-blue-600 to-blue-700" },
  { name: "Atvantic", logo: afclLogo, color: "from-gray-600 to-gray-700" },
  { name: "AM/NS India", logo: amns, color: "from-gray-600 to-gray-700" },
  { name: "BD Buildcon", logo: bdBuildcomLogo, color: "from-orange-600 to-orange-700" },
  { name: "Desai", logo: desaiLogo, color: "from-red-600 to-red-700" },
  { name: "DFPCL", logo: dfpclLogo, color: "from-blue-500 to-blue-600" },
  { name: "GACL", logo: gaclLogo, color: "from-teal-600 to-teal-700" },
  { name: "Hari Construction", logo: haricLogo, color: "from-purple-600 to-purple-700" },
  { name: "KLJ", logo: kljLogo, color: "from-indigo-600 to-indigo-700" },
  { name: "LT Geo", logo: ltGeoLogo, color: "from-orange-500 to-orange-600" },
  { name: "PSP", logo: pspLogo, color: "from-blue-500 to-blue-600" },
  { name: "Rayzon", logo: rayzonLogo, color: "from-purple-500 to-purple-600" },
  { name: "RBIPL", logo: rbiplLogo, color: "from-green-500 to-green-600" },
  { name: "Suroj Buildcon", logo: sbplLogo, color: "from-yellow-500 to-yellow-600" },
  { name: "SMP", logo: smpLogo, color: "from-red-500 to-red-600" },
  { name: "Shapoorji Pallonji", logo: spcplLogo, color: "from-cyan-500 to-cyan-600" },
  { name: "Thermax", logo: thermaxLogo, color: "from-green-600 to-green-700" },
  { name: "Torrent", logo: torrentLogo, color: "from-blue-600 to-blue-700" },
  { name: "VMC", logo: vmc, color: "from-gray-600 to-gray-700" },
];

const ClientSectionCompanyLogosDialogComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="pb-8 sm:pt-4 sm:pb-12 bg-white dark:bg-gray-900">
      {/* View All Clients Button */}
      <div className="flex justify-center mt-10">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div className="relative group cursor-pointer">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main button container */}
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-3xl p-1 shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-500">
                {/* Inner button */}
                <div className="relative bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-5 sm:py-6 overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-2 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 left-6 w-1 h-1 bg-amber-200/40 rounded-full animate-ping delay-300"></div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center space-x-4 text-white">
                    {/* Icon container */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm"></div>
                      <div className="relative bg-white/10 p-3 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex flex-col items-start">
                      <span className="text-lg sm:text-xl font-bold leading-tight">View All Our Clients</span>
                      <span className="text-sm opacity-90 font-medium">Explore our partnerships</span>
                    </div>
                    
                    {/* Arrow container */}
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-white/60 group-hover:bg-white transition-colors duration-300"></div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom stats indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">17+ Partners Available</span>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-0 shadow-2xl">
            <DialogHeader className="relative">
              {/* Header Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-t-lg"></div>
              <div className="relative z-10 text-center py-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-2xl shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                </div>
                <DialogTitle className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                  Our Trusted Partners
                </DialogTitle>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Building the future together with industry leaders
                </p>
              </div>
            </DialogHeader>
            
            {/* Minimal Clean Card Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6">
              {allCompanyLogos.map((company, idx) => (
                <div
                  key={`all-logo-${idx}`}
                  className="group cursor-pointer"
                  style={{
                    animationDelay: `${idx * 30}ms`
                  }}
                >
                  {/* Minimal Company Card */}
                  <div className="relative bg-white dark:bg-gray-800/50 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 p-4 border border-gray-100 dark:border-gray-700/50 group-hover:border-orange-200 dark:group-hover:border-orange-400/30 group-hover:shadow-lg overflow-hidden">
                    
                    {/* Subtle hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Logo container - minimalist approach */}
                    <div className="relative z-10 flex justify-center mb-3">
                      <div className="w-full h-20 flex items-center justify-center bg-gray-50/50 dark:bg-gray-700/30 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-600/50 transition-colors duration-300">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-w-[80%] max-h-[70%] object-contain opacity-85 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            minWidth: '40px',
                            minHeight: '30px'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Company name - minimal styling */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {company.name}
                      </h3>
                      
                      {/* Simple indicator dot */}
                      <div className="flex justify-center mt-2">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
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
