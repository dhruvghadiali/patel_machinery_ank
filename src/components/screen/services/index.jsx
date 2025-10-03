import { useEffect, useState, useRef } from "react";
import { servicesData } from "@/utils/services";

import ServicesSectionCardComponent from "@ScreenComponents/services/servicesSectionCardComponent";
import ServicesSectionHeadingComponent from "@ScreenComponents/services/servicesSectionHeadingComponent";

const ServicesIntroComponent = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate cards with staggered delay
            servicesData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
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
        <ServicesSectionHeadingComponent hasAnimated={hasAnimated} />

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {servicesData.map((service, index) => (
            <ServicesSectionCardComponent
              index={index}
              service={service}
              visibleCards={visibleCards}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroComponent;
