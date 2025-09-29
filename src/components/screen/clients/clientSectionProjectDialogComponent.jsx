import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClientSectionProjectListComponent from "@ScreenComponents/clients/clientSectionProjectListComponent";
import ClientSectionEmptyProjectListComponent from "@ScreenComponents/clients/clientSectionEmptyProjectListComponent";
import _ from "lodash";

const ClientSectionProjectDialogComponent = (props) => {
  const {
    isDialogOpen,
    setIsDialogOpen,
    projectsByClientCategory,
    clientCategory,
  } = props;
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{clientCategory?.logo}</div>
              <span>{clientCategory?.name} - Project Details</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {clientCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Category:
                </p>
                <p className="text-base text-gray-900 dark:text-white">
                  {clientCategory.category}
                </p>
              </div>
              <div className="justify-self-end ">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Total Projects:
                </p>
                <p className="text-base text-gray-900 dark:text-white">
                  {clientCategory.projects}
                </p>
              </div>
            </div>
          )}

          {/* Projects Table */}
          {projectsByClientCategory && projectsByClientCategory.length > 0 ? (
            <ClientSectionProjectListComponent projectsByClientCategory={projectsByClientCategory} />
          ) : (
            <ClientSectionEmptyProjectListComponent
              selectedClientCategory={clientCategory?.name}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientSectionProjectDialogComponent;
