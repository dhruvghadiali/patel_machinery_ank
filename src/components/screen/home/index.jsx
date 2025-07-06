
import homeBackground from "@/assets/images/home.jpg";

function HomeScreenComponent() {
  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Responsive overlay for better text readability based on theme and device */}
      <div
        className="absolute inset-0 
          bg-black/65 
          dark:bg-black/85 
          sm:bg-black/70 
          md:bg-black/65 
          lg:bg-black/60 
          xl:bg-black/55
          dark:sm:bg-black/90 
          dark:md:bg-black/85 
          dark:lg:bg-black/80 
          dark:xl:bg-black/75
        "
      ></div>

      {/* Content with responsive spacing */}
      <div
        className="relative z-10 flex flex-col items-center justify-center 
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
          py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24
          max-w-7xl mx-auto w-full text-cyan-100 dark:text-white
        "
      >
        {/* Welcome text - responsive sizing */}
        <p
          className="
            text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            font-mono 
            mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 
            text-center 
          "
        >
          Welcome to Patel Construction
        </p>

        {/* Main heading - responsive sizing */}
        <p
          className="
            text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl
            font-extrabold 
            mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 
            text-center 
          "
        >
          We Build Big Things For Our Peoples
        </p>

        {/* Description text - responsive sizing and spacing */}
        <p
          className="
            text-xs font-light sm:text-sm md:text-base lg:text-lg xl:text-xl
            text-center 
            mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10
          "
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis,
        </p>

        {/* Button with responsive sizing */}
        {/* <Button
            className="
            shadow-2xl 
            text-sm sm:text-base md:text-lg 
            px-6 sm:px-8 md:px-10 lg:px-12 
            py-2 sm:py-3 md:py-4 
            font-semibold
            bg-primary hover:bg-primary/90 
            dark:bg-white dark:text-black dark:hover:bg-gray-200
            transition-all duration-300
            transform hover:scale-105
          "
          >
            Get Started
          </Button> */}
      </div>
    </div>
  );
}

export default HomeScreenComponent;
