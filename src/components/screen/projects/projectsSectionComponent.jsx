import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProjectsSectionComponent = ({ projectsData, visibleCards }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample project details data - you can modify this structure as needed
  const getProjectDetails = (projectIndex, project) => {
    // Different work details based on project type and client
    const workDetails = {
      0: [ // GACL project
        { name: "Site Investigation and Soil Testing", year: "2023" },
        { name: "450mm Dia Pile Installation (Phase 1)", year: "2023" },
        { name: "500mm Dia Pile Installation (Phase 2)", year: "2023" },
        { name: "600mm Dia Pile Installation (Phase 3)", year: "2024" },
        { name: "Pile Load Testing & Verification", year: "2024" },
        { name: "Earth Retention System Setup", year: "2024" },
        { name: "Final Quality Assurance & Handover", year: "2024" },
      ],
      1: [ // Adani project
        { name: "Pre-construction Survey", year: "2023" },
        { name: "Foundation Design Optimization", year: "2023" },
        { name: "Dia Pile Equipment Mobilization", year: "2023" },
        { name: "450mm Pile Foundation Work", year: "2024" },
        { name: "550mm Pile Foundation Work", year: "2024" },
        { name: "Structural Testing & Validation", year: "2024" },
        { name: "Project Completion & Documentation", year: "2024" },
      ],
    };

    // Return project-specific details or default details
    return workDetails[projectIndex] || [
      { name: "Project Planning & Design", year: "2023" },
      { name: "Site Preparation & Setup", year: "2023" },
      { name: "Foundation Work", year: "2023" },
      { name: "Structural Installation", year: "2024" },
      { name: "Testing & Quality Control", year: "2024" },
      { name: "Final Inspection & Handover", year: "2024" },
    ];
  };

  const handleCardClick = (project, index) => {
    setSelectedProject({ ...project, details: getProjectDetails(index, project) });
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`group transition-all duration-700 ease-out transform ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div 
              className="bg-white dark:bg-gray-800 hover:cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:-translate-y-2 h-full"
              onClick={() => handleCardClick(project, index)}
            >
            {/* Project Header */}
            <div
              className={`bg-gradient-to-r ${project.color} p-6 sm:p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                    <Avatar className="w-10 h-10 border-4 border-white shadow-lg">
                      <AvatarImage
                        src={project.image}
                        alt={project.client}
                        className="object-cover bg-white"
                      />
                      <AvatarFallback className="bg-white/20 text-white font-bold text-xl">
                        {project.client.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
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
                <p className="text-sm opacity-90">Client: {project.client}</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 sm:p-8 space-y-6">

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Services Provided:
                </h4>
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
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Key Highlights:
                </h4>
                <div className="space-y-2">
                  {project.highlights
                    .slice(0, 2)
                    .map((highlight, highlightIndex) => (
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
            </div>
          </div>
        </div>
      ))}
    </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
              {selectedProject?.title} - Project Details
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Client:</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedProject.client}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Location:</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedProject.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Status:</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedProject.status}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Services:</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedProject.services?.join(", ")}</p>
                </div>
              </div>

              {/* Work Details Table */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Work Details</h3>
                <Table>
                  <TableCaption>Detailed breakdown of work completed in this project.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Name of Work</TableHead>
                      <TableHead className="font-semibold">Year</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedProject.details?.map((work, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{work.name}</TableCell>
                        <TableCell>{work.year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectsSectionComponent;
