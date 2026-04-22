"use client";

// SimpleIcons CDN — reliable, always works
// Format: https://cdn.simpleicons.org/{slug}/{hex-color}
const brands = [
  { name: "Apple",   slug: "apple",   color: "1c1c1e" },
  { name: "Samsung", slug: "samsung", color: "1428A0" },
  { name: "Xiaomi",  slug: "xiaomi",  color: "FF6900" },
  { name: "Oppo",    slug: "oppo",    color: "1D8348"  },
  { name: "Vivo",    slug: "vivo",    color: "415FFF" },
  { name: "Realme",  slug: "realme",  color: "F5A623" },
  { name: "Huawei",  slug: "huawei",  color: "CF0A2C" },
  { name: "OnePlus", slug: "oneplus", color: "F5010C" },
  { name: "Google",  slug: "google",  color: "4285F4" },
  { name: "Nokia",   slug: "nokia",   color: "124191" },
  // Text-only fallbacks for brands not in SimpleIcons
  { name: "Tecno",   slug: "",        color: "" },
  { name: "Infinix", slug: "",        color: "" },
];

export default function BrandsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            We Repair All Major Brands
          </h2>
          <p className="text-gray-400 text-sm">Every brand, every model — we&apos;ve got you covered</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {brands.map(({ name, slug, color }) => (
            <div
              key={name}
              className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-200 cursor-default hover:shadow-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {slug ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/${color}`}
                    alt={`${name} logo`}
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                ) : (
                  <span className="text-[#9a5bff] font-extrabold text-2xl leading-none">
                    {name[0]}
                  </span>
                )}
              </div>
              <span className="text-gray-600 text-xs font-semibold text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
