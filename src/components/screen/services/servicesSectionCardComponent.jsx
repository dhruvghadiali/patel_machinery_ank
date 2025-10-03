import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ServicesSectionCardComponent = ({ service, visibleCards, index }) => {
  const cardsRef = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  // Comprehensive service information
  const getServiceDetails = (serviceLabel) => {
    const serviceDetails = {
      "Pile Foundation": {
        detailedDescription: "Our pile foundation services provide deep foundation solutions for structures requiring support beyond shallow foundations. We specialize in transferring structural loads to competent soil or rock layers at significant depths, ensuring long-term stability and safety for your construction projects.",
        process: [
          "Site investigation and soil analysis",
          "Foundation design and engineering calculations",
          "Equipment mobilization and setup",
          "Pile installation using advanced machinery",
          "Quality control testing during installation",
          "Load testing and verification",
          "Documentation and certification"
        ],
        technicalSpecs: [
          "Pile diameters: 300mm to 1200mm",
          "Maximum depth: Up to 60 meters",
          "Load capacity: 50 tons to 500 tons per pile",
          "Concrete grade: M25 to M40",
          "Reinforcement: As per structural design"
        ],
        applications: [
          "High-rise buildings and commercial complexes",
          "Industrial facilities and warehouses",
          "Bridge foundations and infrastructure",
          "Heavy machinery foundations",
          "Residential projects on weak soils"
        ],
        benefits: [
          "Superior load-bearing capacity",
          "Suitable for all soil conditions",
          "Minimal vibration during installation",
          "Cost-effective for large projects",
          "Long-term durability and reliability"
        ]
      },
      "Pile Testing Solutions": {
        detailedDescription: "Our comprehensive pile testing services ensure the structural integrity and load-bearing capacity of installed piles. Using state-of-the-art equipment and internationally recognized testing methods, we provide accurate assessment and certification for your foundation systems.",
        process: [
          "Pre-testing preparation and setup",
          "Calibration of testing equipment",
          "Static or dynamic load testing execution",
          "Real-time data monitoring and recording",
          "Post-testing analysis and evaluation",
          "Detailed reporting with recommendations",
          "Certification and compliance documentation"
        ],
        technicalSpecs: [
          "Static load testing: Up to 1000 tons",
          "Dynamic testing: PDA and CAPWAP analysis",
          "Integrity testing: Sonic echo and crosshole",
          "Testing standards: IS 2911, ASTM D1143",
          "Data logging: Digital with graphical output"
        ],
        applications: [
          "New construction pile verification",
          "Existing structure assessment",
          "Quality assurance for large projects",
          "Load capacity determination",
          "Foundation troubleshooting"
        ],
        benefits: [
          "Accurate load capacity assessment",
          "Early detection of defects",
          "Cost savings through optimization",
          "Compliance with building codes",
          "Risk mitigation for projects"
        ]
      },
      "Rentals": {
        detailedDescription: "Our equipment rental division provides comprehensive construction machinery and specialized equipment for various construction projects. With a modern fleet of well-maintained equipment and expert technical support, we ensure your projects run smoothly and efficiently.",
        process: [
          "Project requirement assessment",
          "Equipment selection and recommendation",
          "Pre-delivery inspection and testing",
          "Transportation and site delivery",
          "On-site setup and commissioning",
          "Operator training and support",
          "Maintenance and technical assistance"
        ],
        technicalSpecs: [
          "Hydraulic machinery: 10 ton to 200 ton capacity",
          "Concrete mixers: 0.5 cu.m to 2 cu.m capacity",
          "Operating hours: 8-24 hours daily availability",
          "Fuel efficiency: Optimized for cost-effectiveness",
          "Maintenance: Regular servicing included"
        ],
        applications: [
          "Construction and infrastructure projects",
          "Pile foundation installation",
          "Concrete mixing and placement",
          "Material handling and lifting",
          "Emergency and temporary requirements"
        ],
        benefits: [
          "No capital investment required",
          "Latest technology equipment",
          "Flexible rental terms",
          "Expert technical support",
          "Reduced project downtime"
        ]
      }
    };

    return serviceDetails[serviceLabel] || {
      detailedDescription: service.fullDescription,
      process: ["Assessment", "Planning", "Execution", "Quality Control"],
      technicalSpecs: ["Industry standard specifications", "Quality assured delivery"],
      applications: ["Construction projects", "Infrastructure development"],
      benefits: ["Professional service", "Reliable solutions", "Expert support"]
    };
  };

  const serviceInfo = getServiceDetails(service.label);

  return (
    <>
      <div
        key={index}
        ref={(el) => (cardsRef.current[index] = el)}
        className={`group transition-all duration-700 ease-out transform ${
          visibleCards.includes(index)
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div 
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl hover:cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 md:p-8 lg:p-10 h-full border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:scale-[1.02] relative overflow-hidden"
          onClick={handleCardClick}
        >
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent dark:from-orange-900/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
        {/* Service Header */}
        <div className="flex items-start justify-between mb-4 md:mb-6 lg:h-52 relative z-10">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
              {service.label}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-4">
              {service.fullDescription}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-2 md:space-y-3 relative z-10">
          <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 md:mb-4">
            Key Features:
          </h4>
          {service.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className={`flex items-center transition-all duration-500 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                transitionDelay: `${index * 200 + featureIndex * 100}ms`,
              }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              {service.label}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Detailed Service Overview */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Detailed Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {serviceInfo.detailedDescription}
              </p>
            </div>

            {/* Process Workflow */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Our Process
              </h3>
              <div className="space-y-3">
                {serviceInfo.process.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="flex items-start p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {stepIndex + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceInfo.technicalSpecs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Applications & Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceInfo.applications.map((application, appIndex) => (
                  <div
                    key={appIndex}
                    className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {application}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Benefits & Advantages
              </h3>
              <div className="space-y-3">
                {serviceInfo.benefits.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    className="flex items-start p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                  >
                    <svg
                      className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesSectionCardComponent;
