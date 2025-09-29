const clientSectionEmptyProjectListComponent = ({ selectedClientCategory }) => {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-12 h-12 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        No Projects Found
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        No projects are currently available for the
        <span className="font-medium text-orange-600 dark:text-orange-400">
          {selectedClientCategory}
        </span>
        category. Please check back later or contact us for more information.
      </p>
    </div>
  );
};

export default clientSectionEmptyProjectListComponent;
