import { useEffect, useState, useRef } from "react";
import { Users, Clock, Building, Star, Eye, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {projects} from "@/utils/projects";

import ProjectsSectionComponent from "@ScreenComponents/projects/projectsSectionComponent";
import ProjectsSectionStatsComponent from "@ScreenComponents/projects/projectsSectionStatsComponent";
import ProjectsSectionHeadingComponent from "@ScreenComponents/projects/projectsSectionHeadingComponent";

import gaclLogo from "@Assets/images/GACL.jpg";
import adaniLogo from "@Assets/images/ADANI.jpg";

function ProjectsIntroComponent() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleStats, setVisibleStats] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const sectionRef = useRef(null);

  ;

  // Sorting function
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Sort the data based on current sort configuration
  const sortedProjectsData = [...projects].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Render sort icon
  const renderSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronUp className="w-4 h-4 opacity-30" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-orange-500" />
      : <ChevronDown className="w-4 h-4 text-orange-500" />;
  };

  const projectStats = [
    { number: "150+", label: "Projects Completed", icon: Building },
    { number: "100%", label: "On-Time Delivery", icon: Clock },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Client Satisfaction", icon: Star },
  ];

  const projectsData = [
    {
      title: "Dia Pile",
      location: "Dahej Bharuch Gujarat",
      client: "Gujarat Alkalies and Chemicals Limited",
      type: "Piling",
      status: "Completed",
      image: gaclLogo,
      description:
        "Major infrastructure project involving Pile foundation work for a chemical plant expansion.",
      services: ["Pile Foundation", "Pile Testing", "Earth Retention"],
      highlights: [
        "450mm to 600mm piles installed",
        "Zero safety incidents throughout project",
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Dia Pile",
      location: "Dahej Bharuch Gujarat",
      client: "Adani Cement Industries Limited",
      type: "Piling",
      status: "Completed",
      image: "",
      description:
        "Major infrastructure project involving Pile foundation work for a chemical plant expansion.",
      services: ["Pile Foundation", "Pile Testing", "Earth Retention"],
      highlights: [
        "450mm to 600mm piles installed",
        "Zero safety incidents throughout project",
      ],
      color: "from-green-500 to-green-700",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate stats first
            projectStats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats((prev) => [...prev, index]);
              }, index * 150);
            });

            // Then animate project cards
            setTimeout(() => {
              projectsData.forEach((_, index) => {
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
      id="projects"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <ProjectsSectionHeadingComponent hasAnimated={hasAnimated} />

        {/* Project Stats */}
        <ProjectsSectionStatsComponent
          projectStats={projectStats}
          visibleStats={visibleStats}
        />

        {/* Enhanced View Projects Button with Dialog */}
        <div className="flex justify-center mb-16">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Main button container */}
                <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-3xl p-1 shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-500">
                  {/* Inner button */}
                  <div className="relative bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-5 sm:py-6 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-2 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-3 left-6 w-1 h-1 bg-amber-200/40 rounded-full animate-ping delay-300"></div>
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center space-x-4 text-white">
                      {/* Icon container */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm"></div>
                        <div className="relative bg-white/10 p-3 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Text content */}
                      <div className="flex flex-col items-start">
                        <span className="text-lg sm:text-xl font-bold leading-tight">View All Projects</span>
                        <span className="text-sm opacity-90 font-medium">Explore our portfolio</span>
                      </div>
                      
                      {/* Arrow container */}
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-white/60 group-hover:bg-white transition-colors duration-300"></div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom stats indicator */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">8+ Projects Available</span>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                  Our Project Portfolio
                </DialogTitle>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                  Complete list of our foundation engineering projects across India
                </p>
              </DialogHeader>
              
              <div className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-gray-800">
                      <TableHead 
                        className="font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => handleSort('companyName')}
                      >
                        <div className="flex items-center justify-between">
                          <span>Company Name</span>
                          {renderSortIcon('companyName')}
                        </div>
                      </TableHead>
                      <TableHead 
                        className="font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => handleSort('location')}
                      >
                        <div className="flex items-center justify-between">
                          <span>Location</span>
                          {renderSortIcon('location')}
                        </div>
                      </TableHead>
                      <TableHead 
                        className="font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => handleSort('work')}
                      >
                        <div className="flex items-center justify-between">
                          <span>Work</span>
                          {renderSortIcon('work')}
                        </div>
                      </TableHead>
                      <TableHead 
                        className="font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => handleSort('year')}
                      >
                        <div className="flex items-center justify-between">
                          <span>Year</span>
                          {renderSortIcon('year')}
                        </div>
                      </TableHead>
                      <TableHead 
                        className="font-semibold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={() => handleSort('status')}
                      >
                        <div className="flex items-center justify-between">
                          <span>Status</span>
                          {renderSortIcon('status')}
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedProjectsData.map((project, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                          {project.companyName}
                        </TableCell>
                        <TableCell className="text-gray-700 dark:text-gray-300">
                          {project.location}
                        </TableCell>
                        <TableCell className="text-gray-700 dark:text-gray-300">
                          {project.projectDetails}
                        </TableCell>
                        <TableCell className="text-gray-700 dark:text-gray-300">
                          {project.year}
                        </TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Completed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Projects Grid */}
        {/* <ProjectsSectionComponent
          projectsData={projectsData}
          visibleCards={visibleCards}
        /> */}
      </div>
    </section>
  );
}

export default ProjectsIntroComponent;
