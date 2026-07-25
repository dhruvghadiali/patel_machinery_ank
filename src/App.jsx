import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

import ScreenLoaderComponent from "@Components/loader/screenLoader";
import HomePage from "@/pages/HomePage";
import QrPage from "@/pages/QrPage";

const imageAssets = import.meta.glob(
  "./assets/images/**/*.{avif,gif,jpeg,jpg,png,svg,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  }
);

const criticalImageUrls = Object.entries(imageAssets)
  .filter(([path]) => !path.includes("/swiper-img-"))
  .map(([, url]) => url);

const preloadImage = (url) =>
  new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = url;
  });

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let completedAssets = 0;
    const totalAssets = criticalImageUrls.length;

    const assetPreload = Promise.allSettled(
      criticalImageUrls.map(async (url) => {
        await preloadImage(url);
        completedAssets += 1;

        if (isMounted) {
          setLoadingProgress(
            Math.round((completedAssets / totalAssets) * 100)
          );
        }
      })
    );

    const minimumDisplayTime = new Promise((resolve) => {
      window.setTimeout(resolve, 700);
    });

    const maximumWaitTime = new Promise((resolve) => {
      window.setTimeout(resolve, 12000);
    });

    Promise.all([
      Promise.race([assetPreload, maximumWaitTime]),
      minimumDisplayTime,
    ]).then(() => {
      if (isMounted) {
        setLoadingProgress(100);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider defaultTheme="light">
        <ScreenLoaderComponent progress={loadingProgress} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/qr" element={<QrPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
