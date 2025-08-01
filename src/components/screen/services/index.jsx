import { useEffect, useState, useRef } from "react";
import { ChevronRightIcon } from "lucide-react";

const servicesData = [
  {
    label: "Deep Foundation",
    description: "Transfer building loads to deeper, stronger soil layers.",
    fullDescription: "Our deep foundation solutions provide reliable support for structures by transferring loads to stable soil or rock layers deep beneath the surface.",
    features: ["Driven Piles", "Drilled Shafts", "Micropiles", "Foundation Design"]
  },
  {
    label: "Earth Retention Solutions",
    description: "Support excavations and prevent soil movement.",
    fullDescription: "Advanced earth retention systems that ensure safe excavation and construction while preventing soil movement and protecting adjacent structures.",
    features: ["Retaining Walls", "Shoring Systems", "Soil Stabilization", "Slope Protection"]
  },
  {
    label: "Pile Testing Solutions",
    description: "Evaluate the load-bearing capacity of piles.",
    fullDescription: "Comprehensive pile testing services to verify structural integrity and load-bearing capacity using state-of-the-art testing equipment.",
    features: ["Static Load Testing", "Dynamic Testing", "Integrity Testing", "Quality Assurance"]
  },
  {
    label: "Rentals",
    description: "Provide equipment and machinery for construction projects.",
    fullDescription: "Complete equipment rental solutions for construction projects with well-maintained machinery and expert technical support.",
    features: ["Heavy Machinery", "Specialized Tools", "Technical Support", "Maintenance Services"]
  }
];

function ServicesIntroComponent() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate cards with staggered delay
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.2,
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
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
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
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive construction solutions with expertise in foundation engineering, 
              earth retention, and specialized testing services.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group transition-all duration-700 ease-out transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 sm:p-10 md:p-12 h-full border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                      {service.label}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                  </div>
                  <div className="ml-4 p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-all duration-300">
                    <ChevronRightIcon className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Key Features:
                  </h4>
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={`flex items-center transition-all duration-500 ${
                        visibleCards.includes(index)
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Learn More
                  </button>
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
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Contact our expert team today to discuss your construction needs and get a customized solution.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesIntroComponent;
