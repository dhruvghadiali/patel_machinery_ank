import homeBackground from "@/assets/images/home.jpeg";

function HomeScreenComponent() {
  return (
    <div
      className="w-full relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed bg-scroll"
      style={{
        backgroundImage: `url(${homeBackground})`,
        height: "calc(100vh - 64px)",
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
          h-full
        "
      >
        {/* Welcome text - responsive sizing */}
        <p
          className="
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
            font-mono font-bold
            mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12
            text-center 
            text-orange-100
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
            text-orange-300
            max-w-6xl
          "
        >
          We Build Big Things For Our Peoples
        </p>

        {/* Description text - responsive sizing and spacing */}
        <p
          className="
            text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl
            font-medium
            text-center 
            mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16
            leading-relaxed text-orange-100
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
            [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]
            max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl
            px-2
          "
        >
          Patel Construction specializes in strong, reliable deep foundation
          solutions. From piling to load-bearing systems, we ensure stability
          for every structure. We build big things for our people — with
          precision, safety, and trust.
        </p>
      </div>
    </div>
  );
}

export default HomeScreenComponent;
