
import homeBackground from "@/assets/images/home.jpeg";

function HomeScreenComponent() {
  return (
    <div
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      {/* Responsive overlay for better text readability based on theme and device */}
      <div
        className="absolute inset-0 
          bg-black/70 
          dark:bg-black/85 
          sm:bg-black/65
          md:bg-black/60 
          lg:bg-black/55 
          xl:bg-black/50
          dark:sm:bg-black/80
          dark:md:bg-black/75 
          dark:lg:bg-black/70 
          dark:xl:bg-black/65
        "
      ></div>

      {/* Content with responsive spacing */}
      <div
        className="relative z-10 flex flex-col items-center justify-center 
          px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
          py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28
          max-w-7xl mx-auto w-full text-white
          min-h-screen
        "
      >
        {/* Welcome text - responsive sizing */}
        <p
          className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            font-mono font-bold
            mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12
            text-center 
            drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]
            tracking-wide
          "
        >
          Welcome to Patel Construction
        </p>

        {/* Main heading - responsive sizing */}
        <p
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            font-extrabold 
            mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14
            text-center 
            leading-tight
            drop-shadow-[0_6px_12px_rgba(0,0,0,0.9)]
            [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]
            max-w-6xl
          "
        >
          We Build Big Things For Our Peoples
        </p>

        {/* Description text - responsive sizing and spacing */}
        <p
          className="
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
            font-medium
            text-center 
            mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16
            leading-relaxed
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
            [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl
            px-2
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
