import React, { useState } from "react";
import { Wrench, Shield } from "lucide-react";
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

const EquipmentSectionComponent = ({ equipmentData, visibleCards }) => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (equipment) => {
    setSelectedEquipment(equipment);
    setIsDialogOpen(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
      {equipmentData.map((equipment, index) => (
        <div
          key={`equipment-${index}-${equipment.name}`}
          className={`group transition-all duration-700 ease-out transform ${
            visibleCards.includes(index)
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
          onClick={() => handleCardClick(equipment)}
        >
          <div className="bg-white dark:bg-slate-800 hover:cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-600 group-hover:-translate-y-2">
            {/* Equipment Header */}
            <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mr-4 group-hover:scale-110 transition-transform duration-300 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={equipment.image}
                      alt={`${equipment.name} equipment`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                      {equipment.name}
                    </h3>
                    <p className="text-sm sm:text-base text-orange-600 dark:text-orange-400 font-medium mb-1">
                      {equipment.category}
                    </p>
                    
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                {equipment.description}
              </p>
            </div>

            {/* Equipment Details */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Specifications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                  <Wrench className="w-5 h-5 mr-2 text-orange-500" />
                  Specifications
                </h4>
                <div className="space-y-2 h-20">
                  {equipment.specifications.map((spec, specIndex) => (
                    <div
                      key={specIndex}
                      className={`flex items-center transition-all duration-500 ${
                        visibleCards.includes(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        transitionDelay: `${index * 200 + specIndex * 100}ms`,
                      }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-orange-500" />
                  Applications
                </h4>
                <div className="min-h-16">
                <div className="flex flex-wrap gap-2">
                  {equipment.applications.map((app, appIndex) => (
                    <span
                      key={appIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Equipment Quantity Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              {selectedEquipment?.name} - Equipment Inventory
            </DialogTitle>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              Available equipment units and quantities
            </p>
          </DialogHeader>
          
          {selectedEquipment && (
            <div className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 dark:bg-gray-800">
                    <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                      Equipment Model
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700 dark:text-gray-300 text-center">
                      Quantity
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedEquipment.qty?.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                        {item.model}
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 font-semibold rounded-full">
                          {item.quantity}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {/* Total Count */}
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Total Equipment Count:
                  </span>
                  <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {selectedEquipment.qty?.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EquipmentSectionComponent;
