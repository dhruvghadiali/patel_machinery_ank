import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

/**
 * QRWithLogo component
 * Props:
 * - value: string (required) URL/text to encode
 * - size: number (pixels) default 320
 * - logoSrc: string path to logo image (public/ or imported)
 * - logoScale: number relative to QR size (default 0.2 => 20%)
 * - background: string CSS color for QR background (default white)
 * - foreground: string CSS color for QR dots (default black)
 */
export default function QRWithLogo({
  value,
  size = 320,
  logoSrc = "/logo.png",
  logoScale = 0.2,
  background = "#ffffff",
  foreground = "#000000",
  margin = 4,
  logoBackdropColor = "#ffffff",
  logoBackdropBorderColor,
  logoBackdropBorderWidth = 2,
  hideLogoBackdrop = false,
  makeLogoWhiteTransparent = false,
  chromaKeyColor = "#FFFFFF",
  chromaKeyTolerance = 40,
  // Controls spacing around the logo inside the center backdrop
  logoPaddingFactor = 0.18, // proportion of logo size
  logoPaddingMinPx = 6, // minimum px padding
  // Quality controls
  exportScale = 4, // multiplier for download resolution (size * exportScale)
  filename = "patelconstruction-qr.png",
  dprAware = true, // draw on-screen QR at devicePixelRatio for crispness
  className = "",
}) {
  const canvasRef = useRef(null);
  const [dataUrl, setDataUrl] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function draw() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = dprAware && typeof window !== 'undefined' ? Math.max(1, Math.floor(window.devicePixelRatio || 1)) : 1;
      const renderSize = Math.floor(size * dpr);
      // Set backing store size for crispness while keeping display size controlled via CSS
      canvas.width = renderSize;
      canvas.height = renderSize;

      // Render base QR
      await QRCode.toCanvas(canvas, value, {
        width: renderSize,
        margin,
        errorCorrectionLevel: "H", // high ECC to survive logo overlay
        color: {
          dark: foreground,
          light: background,
        },
      });

      // Prepare context and logo
      const ctx = canvas.getContext("2d");
      const logo = new Image();
      logo.crossOrigin = "anonymous";
      logo.src = logoSrc;

      await new Promise((resolve, reject) => {
        logo.onload = resolve;
        logo.onerror = reject;
      });

  const logoSize = Math.floor(renderSize * logoScale);
  const x = Math.floor((renderSize - logoSize) / 2);
  const y = Math.floor((renderSize - logoSize) / 2);

      // Optional rounded square backdrop behind the logo
  const pad = Math.max(logoPaddingMinPx, Math.floor(logoSize * logoPaddingFactor));
      const radius = Math.floor((logoSize + pad * 2) * 0.2);
      const bx = x - pad;
      const by = y - pad;
      const bw = logoSize + pad * 2;
      const bh = logoSize + pad * 2;

      if (!hideLogoBackdrop) {
        ctx.fillStyle = logoBackdropColor;
        ctx.beginPath();
        roundedRect(ctx, bx, by, bw, bh, radius);
        ctx.fill();

        if (logoBackdropBorderColor) {
          ctx.strokeStyle = logoBackdropBorderColor;
          ctx.lineWidth = logoBackdropBorderWidth;
          ctx.beginPath();
          roundedRect(
            ctx,
            bx + ctx.lineWidth / 2,
            by + ctx.lineWidth / 2,
            bw - ctx.lineWidth,
            bh - ctx.lineWidth,
            Math.max(0, radius - ctx.lineWidth / 2)
          );
          ctx.stroke();
        }
      }

      // Draw logo (with optional chroma-key transparency)
      if (makeLogoWhiteTransparent) {
        const off = document.createElement("canvas");
        off.width = logoSize;
        off.height = logoSize;
        const octx = off.getContext("2d");
        octx.drawImage(logo, 0, 0, logoSize, logoSize);

        try {
          const img = octx.getImageData(0, 0, logoSize, logoSize);
          const data = img.data;
          const [kr, kg, kb] = hexToRgb(chromaKeyColor);
          const tol = chromaKeyTolerance;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const dr = Math.abs(r - kr);
            const dg = Math.abs(g - kg);
            const db = Math.abs(b - kb);
            if (dr <= tol && dg <= tol && db <= tol) {
              data[i + 3] = 0; // transparent
            }
          }
          octx.putImageData(img, 0, 0);
        } catch (e) {
          // If CORS-tainted, fall back to raw logo
          console.warn("Logo chroma key skipped:", e);
        }

        // Slight smoothing helps for logo but QR remains crisp
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(off, x, y);
      } else {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(logo, x, y, logoSize, logoSize);
      }

      // Export for download button
      const url = canvas.toDataURL("image/png");
      if (isMounted) {
        setDataUrl(url);
        setReady(true);
      }
    }

    draw().catch((err) => console.error("QR generation failed:", err));

    return () => {
      isMounted = false;
    };
  }, [
    value,
    size,
    logoSrc,
    logoScale,
    background,
    foreground,
    margin,
    logoBackdropColor,
    logoBackdropBorderColor,
    logoBackdropBorderWidth,
    hideLogoBackdrop,
    makeLogoWhiteTransparent,
    chromaKeyColor,
    chromaKeyTolerance,
    logoPaddingFactor,
    logoPaddingMinPx,
  ]);

  const download = async () => {
    // Render a higher-res version offscreen for crisp download
    const exportSize = Math.max(256, Math.floor(size * exportScale));
    const offCanvas = document.createElement('canvas');
    offCanvas.width = exportSize;
    offCanvas.height = exportSize;

    // Base QR on offscreen canvas
    await QRCode.toCanvas(offCanvas, value, {
      width: exportSize,
      margin,
      errorCorrectionLevel: "H",
      color: {
        dark: foreground,
        light: background,
      },
    });

    // Draw logo on offscreen canvas (reuse same logic)
    const ctx = offCanvas.getContext('2d');
    const logo = new Image();
    logo.crossOrigin = 'anonymous';
    logo.src = logoSrc;
    await new Promise((resolve, reject) => {
      logo.onload = resolve;
      logo.onerror = reject;
    });

    const logoSize = Math.floor(exportSize * logoScale);
    const x = Math.floor((exportSize - logoSize) / 2);
    const y = Math.floor((exportSize - logoSize) / 2);

    const pad = Math.max(logoPaddingMinPx, Math.floor(logoSize * logoPaddingFactor));
    const radius = Math.floor((logoSize + pad * 2) * 0.2);
    const bx = x - pad;
    const by = y - pad;
    const bw = logoSize + pad * 2;
    const bh = logoSize + pad * 2;

    if (!hideLogoBackdrop) {
      ctx.fillStyle = logoBackdropColor;
      ctx.beginPath();
      roundedRect(ctx, bx, by, bw, bh, radius);
      ctx.fill();
      if (logoBackdropBorderColor) {
        ctx.strokeStyle = logoBackdropBorderColor;
        ctx.lineWidth = logoBackdropBorderWidth;
        ctx.beginPath();
        roundedRect(
          ctx,
          bx + ctx.lineWidth / 2,
          by + ctx.lineWidth / 2,
          bw - ctx.lineWidth,
          bh - ctx.lineWidth,
          Math.max(0, radius - ctx.lineWidth / 2)
        );
        ctx.stroke();
      }
    }

    if (makeLogoWhiteTransparent) {
      const off = document.createElement('canvas');
      off.width = logoSize;
      off.height = logoSize;
      const octx = off.getContext('2d');
      octx.drawImage(logo, 0, 0, logoSize, logoSize);
      try {
        const img = octx.getImageData(0, 0, logoSize, logoSize);
        const data = img.data;
        const [kr, kg, kb] = hexToRgb(chromaKeyColor);
        const tol = chromaKeyTolerance;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const dr = Math.abs(r - kr);
          const dg = Math.abs(g - kg);
          const db = Math.abs(b - kb);
          if (dr <= tol && dg <= tol && db <= tol) {
            data[i + 3] = 0;
          }
        }
        octx.putImageData(img, 0, 0);
      } catch {}
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(off, x, y);
    } else {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(logo, x, y, logoSize, logoSize);
    }

    const url = offCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        aria-label="QR code"
        style={{ width: size, height: size }}
      />
      <button
        type="button"
        onClick={download}
        disabled={!ready}
        className="px-4 py-2 rounded-md bg-orange-600 text-white disabled:opacity-50 hover:bg-orange-700 transition-colors"
      >
        {ready ? "Download QR (PNG)" : "Generating..."}
      </button>
    </div>
  );
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h.split('').map((c) => c + c).join('');
  }
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}
