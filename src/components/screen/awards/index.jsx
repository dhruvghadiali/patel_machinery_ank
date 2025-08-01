import { useEffect, useState, useRef } from "react";
import { Award, Trophy, Medal, Star, Calendar, Users, Target, Zap } from "lucide-react";

const awardsData = [
  {
    title: "Excellence in Foundation Engineering",
    organization: "National Construction Association",
    year: "2024",
    category: "Technical Excellence",
    icon: Trophy,
    description: "Recognized for outstanding innovation in deep foundation solutions and cutting-edge pile installation techniques.",
    achievement: "First place among 200+ companies",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    textColor: "text-yellow-800 dark:text-yellow-300"
  },
  {
    title: "Safety Excellence Award",
    organization: "Occupational Safety Institute",
    year: "2024",
    category: "Workplace Safety",
    icon: Medal,
    description: "Achieved zero workplace incidents for 36 consecutive months while completing high-risk foundation projects.",
    achievement: "Zero incidents - 1,000+ days",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-800 dark:text-green-300"
  },
  {
    title: "Innovation in Construction Technology",
    organization: "Technology Innovation Council",
    year: "2023",
    category: "Technological Innovation",
    icon: Zap,
    description: "Pioneered the use of AI-driven pile testing systems that revolutionized accuracy in load-bearing assessments.",
    achievement: "25% accuracy improvement",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-800 dark:text-blue-300"
  },
  {
    title: "Environmental Stewardship Award",
    organization: "Green Construction Alliance",
    year: "2023",
    category: "Environmental Impact",
    icon: Star,
    description: "Implemented eco-friendly construction practices reducing carbon footprint by 40% across all projects.",
    achievement: "40% carbon reduction",
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-800 dark:text-emerald-300"
  },
  {
    title: "Project Excellence Recognition",
    organization: "International Bridge Consortium",
    year: "2022",
    category: "Project Management",
    icon: Target,
    description: "Successfully completed the Metro Bridge Foundation project 3 months ahead of schedule and 15% under budget.",
    achievement: "3 months early delivery",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-800 dark:text-purple-300"
  },
  {
    title: "Customer Service Excellence",
    organization: "Business Excellence Forum",
    year: "2022",
    category: "Client Relations",
    icon: Users,
    description: "Maintained 98% client satisfaction rating and achieved 95% repeat customer rate over consecutive years.",
    achievement: "98% satisfaction rate",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    textColor: "text-red-800 dark:text-red-300"
  }
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management Systems", valid: "2024-2027" },
  { name: "ISO 14001:2015", description: "Environmental Management", valid: "2024-2027" },
  { name: "OHSAS 18001", description: "Occupational Health & Safety", valid: "2024-2026" },
  { name: "AISC Certified", description: "Structural Steel Construction", valid: "2024-2025" }
];

const achievementStats = [
  { number: "15+", label: "Industry Awards", icon: Trophy },
  { number: "8", label: "Safety Certifications", icon: Medal },
  { number: "1000+", label: "Days Zero Incidents", icon: Star },
  { number: "98%", label: "Client Satisfaction", icon: Award }
];

function AwardsIntroComponent() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const [visibleCerts, setVisibleCerts] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate stats first
            achievementStats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats(prev => [...prev, index]);
              }, index * 150);
            });

            // Then animate award cards
            setTimeout(() => {
              awardsData.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCards(prev => [...prev, index]);
                }, index * 200);
              });
            }, 600);

            // Finally animate certifications
            setTimeout(() => {
              certifications.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCerts(prev => [...prev, index]);
                }, index * 150);
              });
            }, 1200);
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
      id="awards"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800"
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
              Awards & <span className="text-orange-500">Recognition</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Celebrating excellence in construction, safety, innovation, and environmental stewardship. 
              Our commitment to quality has earned industry recognition and client trust.
            </p>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {achievementStats.map((stat, index) => {
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
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
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

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {awardsData.map((award, index) => {
            const IconComponent = award.icon;
            return (
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
                  
                  {/* Award Header with Gradient */}
                  <div className={`bg-gradient-to-r ${award.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-white group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-2xl sm:text-3xl font-bold opacity-90">{award.year}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                        {award.title}
                      </h3>
                      <p className="text-sm sm:text-base opacity-90 font-medium">
                        {award.organization}
                      </p>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Category Badge */}
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${award.bgColor} ${award.textColor}`}>
                      {award.category}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                      {award.description}
                    </p>

                    {/* Achievement Highlight */}
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-4 border-l-4 border-orange-500">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base">
                          {award.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className={`transition-all duration-1000 ease-out ${
          hasAnimated 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
                <Award className="w-8 h-8 mr-3 text-orange-400" />
                Industry Certifications
              </h3>
              <p className="text-gray-300 text-lg">
                Maintaining the highest industry standards through continuous certification and compliance.
              </p>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-600 ease-out transform ${
                      visibleCerts.includes(index)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600 transition-colors duration-300">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Medal className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                          {cert.description}
                        </p>
                        <p className="text-orange-600 dark:text-orange-400 text-xs font-semibold">
                          Valid: {cert.valid}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 sm:mt-20 md:mt-24 transition-all duration-1000 ease-out ${
          hasAnimated 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 sm:p-10 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Work with an <span className="text-amber-200">Award-Winning</span> Team?
              </h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
                Experience the difference of working with a recognized industry leader. 
                Let our award-winning expertise deliver exceptional results for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 sm:px-12 rounded-xl transition-all duration-300 text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsIntroComponent;
