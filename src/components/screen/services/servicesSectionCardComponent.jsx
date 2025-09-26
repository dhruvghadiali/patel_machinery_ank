import { useRef } from "react";

const ServicesSectionCardComponent = ({ service, visibleCards, index }) => {
  const cardsRef = useRef([]);

  return (
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
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl hover:cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 p-4 sm:p-6 md:p-8 lg:p-10 h-full border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:scale-[1.02] relative overflow-hidden">
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
  );
};

export default ServicesSectionCardComponent;
