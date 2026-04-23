"use client";

type Brand =
  | { name: string; type: "icon"; slug: string; color: string; bg: string; accent: string }
  | { name: string; type: "svg";  svg: React.ReactNode; bg: string; accent: string };

const TecnoSVG = (
  <svg viewBox="0 0 62 20" xmlns="http://www.w3.org/2000/svg" width="54" height="18">
    <text x="0" y="17" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="17" fill="#0057FF" letterSpacing="-0.5">TECNO</text>
  </svg>
);

const InfinixSVG = (
  <svg viewBox="0 0 64 20" xmlns="http://www.w3.org/2000/svg" width="56" height="18">
    <text x="0" y="17" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="15" fill="#E8192C" letterSpacing="0.2">Infinix</text>
  </svg>
);

const RealméSVG = (
  <svg viewBox="0 0 62 20" xmlns="http://www.w3.org/2000/svg" width="54" height="18">
    <text x="0" y="17" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="15" fill="#FFAE00" letterSpacing="0">realme</text>
  </svg>
);

const brands: Brand[] = [
  { name: "Apple",   type: "icon", slug: "apple",   color: "1c1c1e", bg: "#f5f5f7", accent: "#1c1c1e" },
  { name: "Samsung", type: "icon", slug: "samsung", color: "1428A0", bg: "#eef0ff", accent: "#1428A0" },
  { name: "Xiaomi",  type: "icon", slug: "xiaomi",  color: "FF6900", bg: "#fff4ee", accent: "#FF6900" },
  { name: "Oppo",    type: "icon", slug: "oppo",    color: "1D8348", bg: "#edfff4", accent: "#1D8348" },
  { name: "Vivo",    type: "icon", slug: "vivo",    color: "415FFF", bg: "#eef0ff", accent: "#415FFF" },
  { name: "Realme",  type: "svg",  svg: RealméSVG,  bg: "#fffbee",   accent: "#FFAE00" },
  { name: "Huawei",  type: "icon", slug: "huawei",  color: "CF0A2C", bg: "#fff0f1", accent: "#CF0A2C" },
  { name: "OnePlus", type: "icon", slug: "oneplus", color: "F5010C", bg: "#fff0f1", accent: "#F5010C" },
  { name: "Google",  type: "icon", slug: "google",  color: "4285F4", bg: "#f0f5ff", accent: "#4285F4" },
  { name: "Nokia",   type: "icon", slug: "nokia",   color: "124191", bg: "#f0f5ff", accent: "#124191" },
  { name: "Tecno",   type: "svg",  svg: TecnoSVG,   bg: "#eef3ff",   accent: "#0057FF" },
  { name: "Infinix", type: "svg",  svg: InfinixSVG, bg: "#fff0f1",   accent: "#E8192C" },
];

export default function BrandsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 border-t border-gray-100"
      style={{ background: "linear-gradient(180deg,#ffffff 0%,#faf8ff 60%,#f5f0ff 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="pill">All Brands</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            We Repair{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)" }} className="bg-clip-text text-transparent">
              All Major Brands
            </span>
          </h2>
          <p className="text-gray-400 text-sm">Every brand, every model — we&apos;ve got you covered</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative bg-white rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ border: "1.5px solid #f0ebff", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${brand.accent}08 0%, transparent 70%)` }}
              />

              {/* Logo box */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm"
                style={{ background: brand.bg }}
              >
                {brand.type === "icon" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://cdn.simpleicons.org/${brand.slug}/${brand.color}`}
                    alt={brand.name}
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] object-contain"
                  />
                ) : (
                  brand.svg
                )}
              </div>

              {/* Name */}
              <span
                className="text-[11px] font-bold tracking-wide text-center transition-colors duration-200 group-hover:text-[#9a5bff]"
                style={{ color: "#4b5563" }}
              >
                {brand.name}
              </span>

              {/* Brand accent line on hover */}
              <div
                className="absolute bottom-0 left-1/4 right-1/4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: brand.accent }}
              />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 text-xs mt-8">
          + Many more brands supported &nbsp;·&nbsp; Walk in or call for any model
        </p>
      </div>
    </section>
  );
}
