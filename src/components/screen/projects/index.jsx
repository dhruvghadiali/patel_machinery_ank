import { useEffect, useState, useRef } from "react";
import { MapPin, Calendar, Users, DollarSign, CheckCircle, Clock, ArrowRight, Building } from "lucide-react";

const projectsData = [
  {
    title: "Metro Transit Authority Bridge Foundation",
    location: "Downtown Metropolitan Area",
    client: "Metro Transit Authority",
    type: "Infrastructure",
    status: "Completed",
    duration: "18 months",
    budget: "$45M",
    completion: "2024",
    image: "🌉",
    description: "Major bridge foundation project supporting the new metro line extension with deep pile installation and advanced load testing.",
    services: ["Deep Foundation", "Pile Testing", "Earth Retention"],
    highlights: [
      "450 deep foundation piles installed",
      "Zero safety incidents throughout project",
      "Completed 3 months ahead of schedule",
      "15% under budget delivery"
    ],
    challenges: "Complex urban environment with existing utilities and heavy traffic",
    solution: "Implemented night work schedule and advanced vibration control technology",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Grand Plaza Commercial Complex",
    location: "Business District",
    client: "Urban Development Corp",
    type: "Commercial",
    status: "Completed",
    duration: "12 months",
    budget: "$28M",
    completion: "2023",
    image: "🏢",
    description: "40-story commercial tower foundation with innovative deep foundation solutions in challenging soil conditions.",
    services: ["Deep Foundation", "Soil Stabilization", "Load Testing"],
    highlights: [
      "320 drilled shafts up to 60m deep",
      "Advanced soil stabilization techniques",
      "Real-time monitoring system",
      "LEED Gold certification support"
    ],
    challenges: "Poor soil conditions and high water table in urban setting",
    solution: "Custom-designed drilled shaft system with advanced dewatering",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Riverside Marina Development",
    location: "Waterfront District",
    client: "Coastal Development LLC",
    type: "Marine",
    status: "Completed",
    duration: "14 months",
    budget: "$35M",
    completion: "2023",
    image: "⚓",
    description: "Marine foundation project including pier construction and waterfront retaining structures.",
    services: ["Marine Foundations", "Earth Retention", "Equipment Rental"],
    highlights: [
      "1.2km of marine piling",
      "Advanced corrosion protection",
      "Environmental compliance achieved",
      "Storm-resistant design"
    ],
    challenges: "Tidal variations and environmental protection requirements",
    solution: "Specialized marine equipment and eco-friendly construction methods",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    title: "Industrial Manufacturing Facility",
    location: "Industrial Zone",
    client: "Manufacturing Solutions Inc",
    type: "Industrial",
    status: "In Progress",
    duration: "16 months",
    budget: "$52M",
    completion: "2025",
    image: "🏭",
    description: "Large-scale industrial facility foundation supporting heavy machinery and equipment loads.",
    services: ["Deep Foundation", "Pile Testing", "Ground Improvement"],
    highlights: [
      "600+ foundation elements",
      "Heavy load capacity design",
      "Vibration isolation systems",
      "24/7 construction schedule"
    ],
    challenges: "Extremely heavy loads and tight construction timeline",
    solution: "Parallel construction phases and specialized heavy-duty equipment",
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "Renewable Energy Wind Farm",
    location: "Coastal Region",
    client: "Green Energy Corp",
    type: "Energy",
    status: "Completed",
    duration: "10 months",
    budget: "$22M",
    completion: "2022",
    image: "🌪️",
    description: "Wind turbine foundation installation for 25 turbines across challenging terrain.",
    services: ["Deep Foundation", "Equipment Rental", "Site Preparation"],
    highlights: [
      "25 wind turbine foundations",
      "Remote location logistics",
      "Weather-dependent scheduling",
      "Carbon footprint reduction"
    ],
    challenges: "Remote location access and extreme weather conditions",
    solution: "Mobile equipment fleet and weather monitoring systems",
    color: "from-emerald-500 to-emerald-700"
  },
  {
    title: "University Campus Expansion",
    location: "Education District",
    client: "State University System",
    type: "Educational",
    status: "Completed",
    duration: "8 months",
    budget: "$18M",
    completion: "2022",
    image: "🎓",
    description: "Multiple building foundation project for new academic facilities and student housing.",
    services: ["Deep Foundation", "Earth Retention", "Pile Testing"],
    highlights: [
      "5 building foundations",
      "Student safety priority",
      "Minimal campus disruption",
      "Sustainable construction practices"
    ],
    challenges: "Active campus environment and strict noise regulations",
    solution: "Phased construction with sound barrier systems",
    color: "from-purple-500 to-purple-700"
  }
];

const projectStats = [
  { number: "150+", label: "Projects Completed", icon: Building },
  { number: "$500M+", label: "Project Value", icon: DollarSign },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "On-Time Delivery", icon: Clock }
];

function ProjectsIntroComponent() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate stats first
            projectStats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats(prev => [...prev, index]);
              }, index * 150);
            });

            // Then animate project cards
            setTimeout(() => {
              projectsData.forEach((_, index) => {
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
      id="projects"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800"
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
              Our <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing our expertise across diverse sectors - from infrastructure and commercial developments 
              to marine projects and renewable energy installations.
            </p>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {projectStats.map((stat, index) => {
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ease-out transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:-translate-y-2 h-full">
                
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm opacity-90 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-sm opacity-90">
                      Client: {project.client}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Project Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        Duration
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.duration}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <DollarSign className="w-3 h-3 mr-1" />
                        Budget
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.budget}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Services */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs font-medium rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <div 
                          key={highlightIndex}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                    >
                      View Project Details
                      <ArrowRight className="w-5 h-5 ml-2" />
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
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-10 md:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Next <span className="text-orange-400">Major Project?</span>
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Let our proven track record and expertise deliver exceptional results for your construction project. 
              From concept to completion, we're your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 text-lg flex items-center">
                <Building className="w-5 h-5 mr-2" />
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsIntroComponent;
