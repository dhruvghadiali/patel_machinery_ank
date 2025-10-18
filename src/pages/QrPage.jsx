import QRWithLogo from "@/components/screen/qrCodes/";

export default function QrPage() {
  const url = "https://www.patelconstruction.co/";
  const logo = "/logo.png"; // public/logo.png

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col items-center p-6">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">QR Codes</h1>
        <p className="text-slate-600 dark:text-slate-300">Scan to open {url}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Black QR on white background */}
        <div className="flex flex-col items-center gap-3 rounded-xl p-5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <h2 className="font-semibold">Option 1</h2>
          <div className="rounded-lg p-4 bg-white">
            <QRWithLogo
              value={url}
              size={320}
              logoSrc={logo}
              logoScale={0.22}
              background="#FFFFFF"
              foreground="#000000"
              margin={4}
              hideLogoBackdrop={false}
              makeLogoWhiteTransparent={true}
              chromaKeyColor="#FFFFFF"
              chromaKeyTolerance={60}
              logoPaddingFactor={0.06}
              logoPaddingMinPx={0}
            />
          </div>
          <p className="text-xs text-slate-500 text-center">
            Classic black QR modules on white background for maximum
            compatibility.
          </p>
        </div>

        {/* Orange QR on white background */}
        <div className="flex flex-col items-center gap-3 rounded-xl p-5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <h2 className="font-semibold">Option 2</h2>
          <div className="rounded-lg p-4 bg-white">
            <QRWithLogo
              value={url}
              size={320}
              logoSrc={logo}
              logoScale={0.22}
              background="#FFFFFF"
              foreground="#EA580C"
              margin={4}
              hideLogoBackdrop={false}
              makeLogoWhiteTransparent={true}
              chromaKeyColor="#FFFFFF"
              chromaKeyTolerance={60}
              logoPaddingFactor={0.06}
              logoPaddingMinPx={0}
            />
          </div>
          <p className="text-xs text-slate-500 text-center">
            Brand orange QR modules on white background. Ensure contrast is
            sufficient in print.
          </p>
        </div>
      </div>
    </div>
  );
}
