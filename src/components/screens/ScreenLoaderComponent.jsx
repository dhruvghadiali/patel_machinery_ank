import Lottie from "lottie-react";
import loadingImage from "@Assets/json/loading-img-01.json";

export default function ScreenLoaderComponent() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background px-4">
      {/* Lottie Animation with responsive sizing */}
      <div className="flex flex-col items-center">
        <Lottie
          animationData={loadingImage}
          loop={true}
          autoplay={true}
          className="
            w-40 h-40 
            sm:w-40 sm:h-40 
            md:w-48 md:h-48 
            lg:w-56 lg:h-56 
            xl:w-64 xl:h-64
            animate-[slideRightToLeft_3s_ease-in-out_infinite]
          "
          style={{
            animation: 'slideRightToLeft 3s ease-in-out infinite'
          }}
        />

        <div className="flex items-center justify-center space-x-1 animate-pulse">
          <p className="font-semibold text-foreground">
            Loading
          </p>

          {/* Loading dots animation */}
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
            <div
              className="w-1 h-1 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-1 h-1 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
