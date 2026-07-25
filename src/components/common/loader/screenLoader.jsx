import Lottie from "lottie-react";
import loadingImage from "@Assets/json/loading-img-01.json";

const ScreenLoaderComponent = ({ progress = 0 }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-foreground px-4 transition-colors duration-300">
      <div className="flex flex-col items-center">
        <Lottie
          animationData={loadingImage}
          loop={true}
          autoplay={true}
          className="w-40 h-40 lg:w-64 lg:h-64 xl:w-64 xl:h-64"
        />

        <div className="flex items-center justify-center space-x-1 animate-pulse">
          <p className="font-semibold text-foreground lg:text-base xl:text-base text-xs">
            Loading
          </p>
          <div className="flex space-x-1 mt-3">
            <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" />
            <div
              className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        </div>

        <div className="mt-5 w-44 sm:w-56">
          <div className="h-1.5 overflow-hidden rounded-full bg-orange-100">
            <div
              className="h-full rounded-full bg-orange-500 transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium tabular-nums text-gray-500">
            {progress}% ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreenLoaderComponent;
