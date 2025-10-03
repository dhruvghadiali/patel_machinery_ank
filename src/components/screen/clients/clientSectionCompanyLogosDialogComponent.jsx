import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Building2, Sparkles, ArrowRight, Award, Users } from "lucide-react";

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
        <div className="relative text-center transition-all duration-1000 ease-out overflow-hidden">
          {/* Animated Background with Floating Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
            {/* Floating geometric shapes */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute top-1/2 right-8 w-8 h-8 bg-amber-200/20 rounded-lg rotate-45 animate-bounce"></div>
            <div className="absolute bottom-6 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-ping"></div>
            <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-amber-300/30 rounded-full animate-pulse delay-300"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10 backdrop-blur-sm bg-white/5 rounded-3xl border border-white/20 p-8 sm:p-12 md:p-16 text-white shadow-2xl">
            {/* Icon Header */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-2xl border border-white/30">
                  <Building2 className="w-12 h-12 text-amber-100" />
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Meet Our <span className="text-amber-200 relative">
                <span className="relative z-10">Trusted Partners</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-yellow-300/30 blur-lg"></div>
              </span>
            </h3>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-95 max-w-4xl mx-auto leading-relaxed">
              Discover the prestigious companies who have chosen <span className="font-semibold text-amber-200">Patel Construction</span> for their most critical foundation 
              engineering projects. From industrial giants to renewable energy leaders.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Award className="w-5 h-5 text-amber-200" />
                <span className="text-sm font-semibold">17+ Partners</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Users className="w-5 h-5 text-amber-200" />
                <span className="text-sm font-semibold">Industry Leaders</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span className="text-sm font-semibold">Trusted Quality</span>
              </div>
            </div>
            
            {/* Enhanced Button */}
            <div className="flex justify-center">
              <button className="group relative bg-white text-orange-600 hover:bg-gray-50 font-bold py-5 px-10 sm:px-16 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-lg lg:text-xl flex items-center space-x-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <Building2 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">View All Our Clients</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
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
