import { useEffect, useState, useRef } from "react";
import { Star, Building, Truck, Settings } from "lucide-react";

const clientsData = [
  {
    name: "Urban Development Corp",
    logo: "🏢",
    category: "Commercial Development",
    projects: "15+ Projects",
    description: "Leading commercial developer specializing in high-rise buildings and urban infrastructure.",
    testimonial: "Patel Machinery's deep foundation solutions were crucial for our 40-story tower project. Their expertise and reliability are unmatched.",
    rating: 5,
    projectValue: "$50M+"
  },
  {
    name: "Metro Construction Ltd",
    logo: "🏗️",
    category: "Infrastructure",
    projects: "25+ Projects", 
    description: "Major infrastructure contractor for highways, bridges, and public transportation systems.",
    testimonial: "Their earth retention solutions saved us months on our subway expansion project. Professional and efficient team.",
    rating: 5,
    projectValue: "$75M+"
  },
  {
    name: "Residential Builders Inc",
    logo: "🏠",
    category: "Residential Development",
    projects: "50+ Projects",
    description: "Premium residential developer creating luxury housing communities and condominiums.",
    testimonial: "Outstanding pile testing services. They ensure every foundation meets the highest safety standards for our residential projects.",
    rating: 5,
    projectValue: "$30M+"
  },
  {
    name: "Industrial Solutions Co",
    logo: "🏭",
    category: "Industrial Construction",
    projects: "20+ Projects",
    description: "Specialized in industrial facilities, warehouses, and manufacturing plants construction.",
    testimonial: "Their rental equipment and technical support kept our factory construction on schedule. Highly recommended.",
    rating: 5,
    projectValue: "$45M+"
  },
  {
    name: "Green Energy Corp",
    logo: "⚡",
    category: "Renewable Energy",
    projects: "30+ Projects",
    description: "Leading renewable energy company developing wind farms and solar installations.",
    testimonial: "Exceptional foundation work for our wind turbine installations. Their deep foundation expertise is world-class.",
    rating: 5,
    projectValue: "$60M+"
  },
  {
    name: "Public Works Authority",
    logo: "🏛️",
    category: "Government Projects",
    projects: "40+ Projects",
    description: "Government agency responsible for public infrastructure and municipal construction projects.",
    testimonial: "Reliable partner for all our public infrastructure projects. Their pile testing solutions ensure long-lasting structures.",
    rating: 5,
    projectValue: "$100M+"
  }
];

const stats = [
  { number: "150+", label: "Completed Projects", icon: Building },
  { number: "50+", label: "Happy Clients", icon: Star },
  { number: "$500M+", label: "Project Value", icon: Truck },
  { number: "15+", label: "Years Experience", icon: Settings }
];

function ClientsIntroComponent() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate stats first
            stats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats(prev => [...prev, index]);
              }, index * 150);
            });

            // Then animate client cards
            setTimeout(() => {
              clientsData.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCards(prev => [...prev, index]);
                }, index * 200);
              });
            }, 600);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className={`transition-all duration-1000 ease-out ${
            hasAnimated 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Our <span className="text-orange-500">Clients</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Trusted by industry leaders across commercial, residential, industrial, and public sectors. 
              Building lasting partnerships through exceptional service and results.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ease-out transform ${
                  visibleStats.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {clientsData.map((client, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 h-full border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:-translate-y-2">
                
                {/* Client Header */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl sm:text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-sm sm:text-base text-orange-600 dark:text-orange-400 font-medium">
                      {client.category}
                    </p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-center mb-4 p-3 bg-white dark:bg-gray-700 rounded-xl">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {client.projects}
                  </span>
                  <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                    {client.projectValue}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {client.description}
                </p>

                {/* Testimonial */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4 sm:p-5 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed italic">
                    "{client.testimonial}"
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {client.rating}.0/5.0
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ease-out ${
          hasAnimated 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Join Our Growing Family of <span className="text-orange-400">Satisfied Clients</span>
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Experience the difference of working with a trusted construction partner. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 text-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsIntroComponent;
