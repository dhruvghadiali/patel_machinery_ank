import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import _ from "lodash";

const ClientSectionProjectListComponent = ({ projectsByClientCategory }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "year",
    direction: "desc",
  });

  const sortedProjects = useMemo(() => {
    if (!projectsByClientCategory || projectsByClientCategory.length === 0) {
      return [];
    }

    return _.orderBy(
      projectsByClientCategory,
      [sortConfig.key],
      [sortConfig.direction]
    );
  }, [projectsByClientCategory, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-orange-500" />
    ) : (
      <ChevronDown className="w-4 h-4 text-orange-500" />
    );
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Project Portfolio
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => handleSort("companyName")}
            >
              <div className="flex items-center space-x-1">
                <span>Client</span>
                {getSortIcon("companyName")}
              </div>
            </TableHead>
            <TableHead
              className="font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => handleSort("location")}
            >
              <div className="flex items-center space-x-1">
                <span>Location</span>
                {getSortIcon("location")}
              </div>
            </TableHead>
            <TableHead
              className="font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => handleSort("projectDetails")}
            >
              <div className="flex items-center space-x-1">
                <span>Work</span>
                {getSortIcon("projectDetails")}
              </div>
            </TableHead>
            <TableHead
              className="font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => handleSort("year")}
            >
              <div className="flex items-center space-x-1">
                <span>Year</span>
                {getSortIcon("year")}
              </div>
            </TableHead>
            <TableHead
              className="font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => handleSort("status")}
            >
              <div className="flex items-center space-x-1">
                <span>Status</span>
                {getSortIcon("status")}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjects?.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {project.companyName}
              </TableCell>
              <TableCell>{project.projectDetails}</TableCell>
              <TableCell>{project.location}</TableCell>
              <TableCell>{project.year}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ClientSectionProjectListComponent;
