import { useEffect, useState, useRef } from "react";
import { Users, Truck, Settings, Clock } from "lucide-react";
import {
  equipmentIcon1,
  equipmentIcon2,
  equipmentIcon3,
  equipmentIcon4,
  equipmentIcon5,
  equipmentIcon6,
} from "@/utils/images";

import EquipmentSectionComponent from "@ScreenComponents/equipment/equipmentSectionComponent";
import EquipmentSectionStatsComponent from "@ScreenComponents/equipment/equipmentSectionStatsComponent";
import EquipmentSectionHeadingComponent from "@ScreenComponents/equipment/equipmentSectionHeadingComponent";

const equipmentData = [
  {
    name: "Pile Boring",
    category: "Foundation Equipment",
    model: "HPD-2500X",
    image: equipmentIcon1,
    description:
      "High-performance hydraulic pile driver for deep foundation installations with precision control and minimal vibration.",
    specifications: ["Pile Diameter: 300-1200mm", "Operating Depth: 45m"],
    applications: ["Bridge Foundations", "Building Piles", "Marine Structures"],
    qty: [
      { model: "SR 150 C (Sany)", quantity: 1 },
      { model: "SR 155 C10 (Sany)", quantity: 9 },
      { model: "ACE SA-60", quantity: 1 },
      { model: "SR 125 (Sany)", quantity: 2 },
      { model: "SR 65 (Sany)", quantity: 1 },
      { model: "Zoomlion (ZR140)", quantity: 3 },
      { model: "Zoomlion (ZR185)", quantity: 2 },
    ],
  },
  {
    name: "Backhoe Loader",
    category: "Excavation Equipment",
    model: "JCB-3DX",
    image: equipmentIcon6,
    description:
      "Versatile backhoe loader for excavation, loading, and material handling operations with superior performance and reliability.",
    specifications: ["Engine Power: 74 HP", "Dig Depth: 5.7m"],
    applications: ["Site Excavation", "Material Loading", "Trenching Work"],
    qty: [{ model: "JCB", quantity: 4 }],
  },
  {
    name: "Crane with Pile Equipment",
    category: "Lifting Equipment",
    model: "CPE-200T",
    image: equipmentIcon3,
    description:
      "Mobile crane specially configured for pile installation with precision positioning and heavy lifting capacity.",
    specifications: [
      "Lifting Capacity: 50 tons",
      "Boom Length: 29m",
      "Working Radius: 20m",
    ],
    applications: [
      "RMC Casting",
      "Heavy Equipment Placement",
      "Material Handling",
    ],
    qty: [
      { model: "Zoomlion Crane (50 MT)", quantity: 1 },
      { model: "Hydra Crane", quantity: 1 },
      { model: "ACE Hydraulic Mobile Crane F120", quantity: 2 },
    ],
  },
  {
    name: "Self Concrete Mixer Machine",
    category: "Concrete Equipment",
    model: "AF-4000",
    image: equipmentIcon4,
    description:
      "Self-loading concrete mixer truck with automated mixing and precise concrete delivery for construction sites.",
    specifications: [
      "Mixing Capacity: 4 cubic meters",
      "Loading Height: 4.1m",
      "Water Tank: 400 liters",
    ],
    applications: [
      "Concrete Mixing",
      "On-site Concrete Production",
      "Remote Site Operations",
    ],
    qty: [
      { model: "Self Loading Concrete Mixer (4 CM Ajax Fiori)", quantity: 1 },
    ],
  },
];

const EquipmentIntroComponent = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const equipmentStats = [
    { number: "50+", label: "Heavy Equipment", icon: Truck },
    { number: "99%", label: "Uptime Record", icon: Settings },
    { number: "2Hr", label: "Response Time", icon: Clock },
    { number: "24/7", label: "Technical Support", icon: Users },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate stats first
            equipmentStats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats((prev) => [...prev, index]);
              }, index * 150);
            });

            // Then animate equipment cards
            setTimeout(() => {
              equipmentData.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCards((prev) => [...prev, index]);
                }, index * 200);
              });
            }, 600);
          }
        });
      },
      {
        threshold: 0.1,
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
      id="equipment"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <EquipmentSectionHeadingComponent hasAnimated={hasAnimated} />

        {/* Stats Section */}
        <EquipmentSectionStatsComponent
          equipmentStats={equipmentStats}
          visibleStats={visibleStats}
        />

        {/* Equipment Grid */}
        <EquipmentSectionComponent
          equipmentData={equipmentData}
          visibleCards={visibleCards}
        />
      </div>
    </section>
  );
};

export default EquipmentIntroComponent;
