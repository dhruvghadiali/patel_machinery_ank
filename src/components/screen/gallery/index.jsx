import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  PlayCircle,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import galleryImage01 from "@Assets/images/swiper-img-01.jpeg";
import galleryImage02 from "@Assets/images/swiper-img-02.jpeg";
import galleryImage03 from "@Assets/images/swiper-img-03.jpeg";
import galleryImage04 from "@Assets/images/swiper-img-04.jpeg";
import galleryImage05 from "@Assets/images/swiper-img-05.jpeg";
import galleryImage06 from "@Assets/images/swiper-img-06.jpeg";
import galleryImage07 from "@Assets/images/swiper-img-07.jpeg";
import galleryImage08 from "@Assets/images/swiper-img-08.jpeg";
import galleryImage09 from "@Assets/images/swiper-img-09.jpeg";
import galleryImage10 from "@Assets/images/swiper-img-10.jpeg";
import galleryImage11 from "@Assets/images/swiper-img-11.jpeg";
import galleryImage12 from "@Assets/images/swiper-img-12.jpeg";
import galleryVideo01 from "@Assets/video/gallery-video-01.mp4";

const galleryItems = [
  { type: "image", src: galleryImage01 },
  { type: "image", src: galleryImage02 },
  { type: "image", src: galleryImage03 },
  { type: "image", src: galleryImage04 },
  { type: "image", src: galleryImage05 },
  { type: "image", src: galleryImage06 },
  { type: "image", src: galleryImage07 },
  { type: "image", src: galleryImage08 },
  { type: "image", src: galleryImage09 },
  { type: "image", src: galleryImage10 },
  { type: "image", src: galleryImage11 },
  { type: "image", src: galleryImage12 },
  { type: "video", src: galleryVideo01 },
];

function GalleryVideoPreview({ src, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      videoRef.current?.play().catch(() => undefined);
    } else {
      videoRef.current?.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="gallery-card-image"
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Patel Construction project gallery video"
    />
  );
}

function GalleryIntroComponent() {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const galleryRef = useRef(null);
  const closeButtonRef = useRef(null);
  const isLightboxOpen = lightboxImage !== null;

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }

      if (event.key === "ArrowLeft") {
        setLightboxImage(
          (current) =>
            (current - 1 + galleryItems.length) % galleryItems.length
        );
      }

      if (event.key === "ArrowRight") {
        setLightboxImage((current) => (current + 1) % galleryItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isLightboxOpen]);

  const selectImage = (index, element) => {
    setActiveImage(index);

    if (window.matchMedia("(max-width: 1023px)").matches) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleImageClick = (index, element) => {
    if (activeImage === index) {
      setLightboxImage(index);
      return;
    }

    selectImage(index, element);
  };

  const showPreviousImage = (event) => {
    event.stopPropagation();
    setLightboxImage(
      (current) =>
        (current - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const showNextImage = (event) => {
    event.stopPropagation();
    setLightboxImage((current) => (current + 1) % galleryItems.length);
  };

  const lightboxNumber =
    lightboxImage === null
      ? ""
      : String(lightboxImage + 1).padStart(2, "0");

  return (
    <>
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="overflow-hidden bg-[#f5f4f3] py-16 sm:py-20 md:py-24 lg:py-28 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-[112rem]">
          <div className="mb-10 px-6 text-center sm:mb-12 sm:px-8 md:mb-14 md:px-12 lg:px-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500 sm:text-sm">
              Built on experience
            </p>
            <h2
              id="gallery-heading"
              className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"
            >
              Our <span className="text-orange-500">Gallery</span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
              A closer look at our people, machinery, and foundation work in
              action.
            </p>
          </div>

          <div
            ref={galleryRef}
            className="gallery-strip"
            role="list"
            aria-label="Patel Construction project photos and videos"
          >
            {galleryItems.map((item, index) => {
              const isActive = activeImage === index;
              const itemNumber = String(index + 1).padStart(2, "0");
              const isVideo = item.type === "video";

              return (
                <button
                  key={item.src}
                  type="button"
                  role="listitem"
                  aria-label={`${
                    isActive ? "Open" : "Select"
                  } gallery ${isVideo ? "video" : "photo"} ${index + 1} of ${
                    galleryItems.length
                  }`}
                  aria-pressed={isActive}
                  className={`gallery-card ${isActive ? "is-active" : ""}`}
                  onClick={(event) =>
                    handleImageClick(index, event.currentTarget)
                  }
                  onMouseEnter={() => setActiveImage(index)}
                >
                  {isVideo ? (
                    <GalleryVideoPreview
                      src={item.src}
                      isActive={isActive}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={`Patel Construction project gallery photo ${itemNumber}`}
                      className="gallery-card-image"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  )}
                  <span className="gallery-card-shade" aria-hidden="true" />
                  {isVideo && (
                    <span
                      className="pointer-events-none absolute inset-0 grid place-items-center text-white"
                      aria-hidden="true"
                    >
                      <PlayCircle className="size-11 drop-shadow-lg sm:size-14" />
                    </span>
                  )}
                  <span className="gallery-card-meta">
                    <span className="inline-flex items-center gap-1.5">
                      {isVideo ? (
                        <PlayCircle className="size-3.5" aria-hidden="true" />
                      ) : (
                        <Maximize2 className="size-3.5" aria-hidden="true" />
                      )}
                      {isVideo ? "Play video" : "View full screen"}
                    </span>
                    <span>
                      {itemNumber} / {galleryItems.length}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-5 px-6 text-center text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-400">
            Select a photo or video, then tap or click it again to view it full
            screen.
          </p>
        </div>
      </section>

      {lightboxImage !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Gallery ${
              galleryItems[lightboxImage].type
            } ${lightboxImage + 1} of ${
              galleryItems.length
            }`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6 md:p-8 lg:p-10 2xl:p-14"
            onClick={() => setLightboxImage(null)}
          >
            <div className="absolute left-4 top-4 z-10 text-white sm:left-6 sm:top-6 lg:left-10 lg:top-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
                Project gallery
              </p>
              <p className="mt-1 text-sm text-white/70 sm:text-base">
                {lightboxNumber} / {galleryItems.length}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close full screen gallery"
              className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:right-6 sm:top-6 sm:size-12 lg:right-10 lg:top-8"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxImage(null);
              }}
            >
              <X className="size-5 sm:size-6" aria-hidden="true" />
            </button>

            {galleryItems[lightboxImage].type === "video" ? (
              <video
                key={galleryItems[lightboxImage].src}
                src={galleryItems[lightboxImage].src}
                className="max-h-[calc(100dvh-10rem)] w-full max-w-full rounded-xl bg-black object-contain shadow-2xl sm:max-h-[calc(100dvh-8rem)] sm:rounded-2xl md:max-w-[88vw] lg:max-w-[82vw] lg:rounded-3xl 2xl:max-w-[78vw]"
                controls
                autoPlay
                playsInline
                preload="metadata"
                aria-label={`Patel Construction project gallery video ${lightboxNumber}`}
                onClick={(event) => event.stopPropagation()}
              />
            ) : (
              <img
                key={galleryItems[lightboxImage].src}
                src={galleryItems[lightboxImage].src}
                alt={`Patel Construction project gallery photo ${lightboxNumber}`}
                className="max-h-[calc(100dvh-10rem)] max-w-full rounded-xl object-contain shadow-2xl sm:max-h-[calc(100dvh-8rem)] sm:rounded-2xl md:max-w-[88vw] lg:max-w-[82vw] lg:rounded-3xl 2xl:max-w-[78vw]"
                onClick={(event) => event.stopPropagation()}
              />
            )}

            <div
              className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-6 md:inset-x-6 md:bottom-auto md:top-1/2 md:justify-between md:gap-0 md:-translate-y-1/2 md:translate-x-0 lg:inset-x-10"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Show previous gallery photo"
                className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:size-14 lg:size-16"
                onClick={showPreviousImage}
              >
                <ChevronLeft
                  className="size-6 sm:size-7 lg:size-8"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                aria-label="Show next gallery photo"
                className="grid size-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:size-14 lg:size-16"
                onClick={showNextImage}
              >
                <ChevronRight
                  className="size-6 sm:size-7 lg:size-8"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default GalleryIntroComponent;
