import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@ShadcnComponents/dialog";

const ServicesDialogComponent = ({isDialogOpen, onOpenChange, serviceInfo}) => {

  return (
    <Dialog open={isDialogOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {serviceInfo.label}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Detailed Service Overview */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Detailed Overview
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {serviceInfo.detailedDescription}
            </p>
          </div>

          {/* Process Workflow */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Our Process
            </h3>
            <div className="space-y-3">
              {serviceInfo.process.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className="flex items-start p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    {stepIndex + 1}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceInfo.technicalSpecs.map((spec, specIndex) => (
                <div
                  key={specIndex}
                  className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Applications & Use Cases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceInfo.applications.map((application, appIndex) => (
                <div
                  key={appIndex}
                  className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {application}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Key Benefits & Advantages
            </h3>
            <div className="space-y-3">
              {serviceInfo.benefits.map((benefit, benefitIndex) => (
                <div
                  key={benefitIndex}
                  className="flex items-start p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                >
                  <svg
                    className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicesDialogComponent;
