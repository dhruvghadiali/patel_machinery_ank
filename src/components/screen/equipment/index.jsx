import { useEffect, useState, useRef } from "react";
import { Wrench, Calendar, Shield, Users, Truck, Settings, Zap, Award } from "lucide-react";

const equipmentData = [
  {
    name: "Hydraulic Pile Driver",
    category: "Foundation Equipment",
    model: "HPD-2500X",
    image: "🏗️",
    description: "High-performance hydraulic pile driver for deep foundation installations with precision control and minimal vibration.",
    specifications: [
      "Max Driving Force: 2,500 kN",
      "Pile Diameter: 300-900mm",
      "Operating Depth: 45m",
      "Vibration Control: Advanced"
    ],
    features: [
      "GPS Positioning System",
      "Real-time Monitoring",
      "Automated Controls",
      "Environmental Protection"
    ],
    availability: "Available",
    dailyRate: "$1,200",
    applications: ["Bridge Foundations", "Building Piles", "Marine Structures"]
  },
  {
    name: "Drilling Rig System",
    category: "Drilling Equipment",
    model: "DRS-3000Pro",
    image: "⚡",
    description: "Advanced drilling rig system for various soil conditions with intelligent automation and safety features.",
    specifications: [
      "Max Drilling Depth: 60m",
      "Hole Diameter: 500-1500mm",
      "Torque Output: 180 kNm",
      "Power: 350 HP"
    ],
    features: [
      "Auto-Drilling Mode",
      "Soil Classification",
      "Safety Interlock System",
      "Remote Monitoring"
    ],
    availability: "Available",
    dailyRate: "$1,800",
    applications: ["Drilled Shafts", "Caisson Installation", "Soil Sampling"]
  },
  {
    name: "Load Testing Equipment",
    category: "Testing Systems",
    model: "LTE-5000",
    image: "⚖️",
    description: "Comprehensive load testing system for pile capacity verification with real-time data acquisition.",
    specifications: [
      "Max Test Load: 5,000 kN",
      "Accuracy: ±0.1%",
      "Data Points: 1000/sec",
      "Displacement Range: 200mm"
    ],
    features: [
      "Digital Load Control",
      "Wireless Data Transfer",
      "Automated Reporting",
      "Multi-Sensor Integration"
    ],
    availability: "Available",
    dailyRate: "$800",
    applications: ["Static Load Testing", "Dynamic Testing", "Integrity Testing"]
  },
  {
    name: "Excavator with Vibro Hammer",
    category: "Excavation Equipment",
    model: "EXV-450H",
    image: "🚜",
    description: "Heavy-duty excavator equipped with high-frequency vibro hammer for sheet pile installation and extraction.",
    specifications: [
      "Operating Weight: 45 tons",
      "Vibro Frequency: 2000 vpm",
      "Extraction Force: 800 kN",
      "Reach: 12m"
    ],
    features: [
      "Variable Frequency Control",
      "Quick Coupling System",
      "Operator Comfort Cabin",
      "Fuel Efficiency Optimization"
    ],
    availability: "Available",
    dailyRate: "$950",
    applications: ["Sheet Pile Installation", "Retaining Walls", "Cofferdams"]
  },
  {
    name: "Crane with Pile Equipment",
    category: "Lifting Equipment",
    model: "CPE-200T",
    image: "🏗️",
    description: "Mobile crane specially configured for pile installation with precision positioning and heavy lifting capacity.",
    specifications: [
      "Lifting Capacity: 200 tons",
      "Boom Length: 60m",
      "Working Radius: 45m",
      "Pile Weight Limit: 50 tons"
    ],
    features: [
      "Load Moment Indicator",
      "Telescopic Boom",
      "All-Terrain Mobility",
      "Night Work Lighting"
    ],
    availability: "Reserved",
    dailyRate: "$2,200",
    applications: ["Precast Pile Installation", "Heavy Equipment Placement", "Material Handling"]
  },
  {
    name: "Soil Stabilization Unit",
    category: "Ground Improvement",
    model: "SSU-1200",
    image: "🌍",
    description: "Advanced soil stabilization equipment for ground improvement using chemical and mechanical methods.",
    specifications: [
      "Injection Pressure: 50 bar",
      "Flow Rate: 120 L/min",
      "Mixing Depth: 20m",
      "Chemical Compatibility: Universal"
    ],
    features: [
      "Multi-Chemical System",
      "Precision Injection Control",
      "Environmental Monitoring",
      "Automated Mixing"
    ],
    availability: "Available",
    dailyRate: "$700",
    applications: ["Soil Stabilization", "Ground Improvement", "Contamination Control"]
  }
];

const equipmentStats = [
  { number: "50+", label: "Heavy Equipment", icon: Truck },
  { number: "99%", label: "Uptime Record", icon: Settings },
  { number: "24/7", label: "Technical Support", icon: Users },
  { number: "15+", label: "Years Experience", icon: Award }
];

function EquipmentIntroComponent() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate stats first
            equipmentStats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats(prev => [...prev, index]);
              }, index * 150);
            });

            // Then animate equipment cards
            setTimeout(() => {
              equipmentData.forEach((_, index) => {
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
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
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
              Our <span className="text-orange-500">Equipment</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art construction machinery and specialized equipment for all your 
              foundation, drilling, and testing needs. Available for rental with expert support.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {equipmentStats.map((stat, index) => {
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

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {equipmentData.map((equipment, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:-translate-y-2">
                
                {/* Equipment Header */}
                <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-4xl sm:text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {equipment.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                          {equipment.name}
                        </h3>
                        <p className="text-sm sm:text-base text-orange-600 dark:text-orange-400 font-medium mb-1">
                          {equipment.category}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Model: {equipment.model}
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      equipment.availability === 'Available' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {equipment.availability}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {equipment.description}
                  </p>
                </div>

                {/* Equipment Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Daily Rate */}
                  <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Daily Rental Rate</span>
                    <span className="text-xl font-bold text-orange-600 dark:text-orange-400">{equipment.dailyRate}</span>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Wrench className="w-5 h-5 mr-2 text-orange-500" />
                      Specifications
                    </h4>
                    <div className="space-y-2">
                      {equipment.specifications.map((spec, specIndex) => (
                        <div 
                          key={specIndex}
                          className={`flex items-center transition-all duration-500 ${
                            visibleCards.includes(index)
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 -translate-x-4'
                          }`}
                          style={{ transitionDelay: `${(index * 200) + (specIndex * 100)}ms` }}
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-orange-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {equipment.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className={`text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-500 ${
                            visibleCards.includes(index)
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-95'
                          }`}
                          style={{ transitionDelay: `${(index * 200) + (featureIndex * 80)}ms` }}
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-orange-500" />
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {equipment.applications.map((app, appIndex) => (
                        <span 
                          key={appIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Request Rental Quote
                    </button>
                  </div>
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
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Need Custom <span className="text-orange-400">Equipment Solutions?</span>
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Our expert team can provide customized equipment packages and technical support 
              for your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 text-lg flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentIntroComponent;
