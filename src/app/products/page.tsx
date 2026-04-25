"use client";
import { useState } from "react";
import {
  ShoppingCart, MessageCircle, Search, Star,
  CheckCircle, AlertCircle, Smartphone, Battery,
  Headphones, X, Package, ChevronDown, Zap,
} from "lucide-react";
import { PRODUCTS, type Category, type Quality, type Product } from "@/lib/products";

const WHATSAPP = "923152413134";

type SortKey = "default" | "price-asc" | "price-desc" | "rating";

/* ─── Config ─────────────────────────────────────────── */
const CATEGORIES: Category[] = ["All", "Panels", "Batteries", "Accessories"];
const SORTS: { key: SortKey; label: string }[] = [
  { key: "default",    label: "Featured"      },
  { key: "price-asc",  label: "Price: Low–High" },
  { key: "price-desc", label: "Price: High–Low" },
  { key: "rating",     label: "Top Rated"     },
];

const QUALITY_CFG: Record<Quality, { label: string; dot: string; text: string; bg: string }> = {
  Original:    { label: "Original",    dot: "#10b981", text: "#065f46", bg: "#ecfdf5" },
  Compatible:  { label: "Compatible",  dot: "#3b82f6", text: "#1e3a8a", bg: "#eff6ff" },
  Refurbished: { label: "Refurbished", dot: "#f59e0b", text: "#78350f", bg: "#fffbeb" },
};

const CAT_ICON: Record<Exclude<Category,"All">, typeof Smartphone> = {
  Panels:      Smartphone,
  Batteries:   Battery,
  Accessories: Headphones,
};

const STOCK_CFG = {
  "In Stock":     { color: "#10b981", icon: CheckCircle,  bg: "#ecfdf5" },
  "Limited":      { color: "#f59e0b", icon: AlertCircle,  bg: "#fffbeb" },
  "Out of Stock": { color: "#ef4444", icon: AlertCircle,  bg: "#fef2f2" },
} as const;

const TAG_CFG: Record<string, { bg: string; text: string }> = {
  Hot: { bg: "#ff4d4d", text: "#fff"    },
  New: { bg: "#9a5bff", text: "#fff"    },
};

function fmt(n: number) {
  return "Rs. " + n.toLocaleString("en-PK");
}

function Stars({ n, size = 11 }: { n: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={size}
          className={i <= Math.round(n) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
      ))}
    </span>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function ProductsPage() {
  const [cat,  setCat]  = useState<Category>("All");
  const [q,    setQ]    = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [sortOpen, setSortOpen] = useState(false);

  const waOrder = (p: Product) => {
    const msg = encodeURIComponent(
      `Hi! I want to order:\n*${p.name}*\nBrand: ${p.brand}\nModel: ${p.model}\nQuality: ${p.quality}\nPrice: ${fmt(p.price)}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  const filtered = PRODUCTS
    .filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const lq = q.toLowerCase();
      const matchQ = !lq || p.name.toLowerCase().includes(lq) || p.brand.toLowerCase().includes(lq) || p.model.toLowerCase().includes(lq);
      return matchCat && matchQ;
    })
    .sort((a, b) => {
      if (sort === "price-asc")  return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating")     return b.rating - a.rating;
      return 0;
    });

  const sortLabel = SORTS.find((s) => s.key === sort)?.label ?? "Featured";

  return (
    <main className="min-h-screen" style={{ background: "#f8f7fc" }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#12002e 0%,#2d0870 55%,#4c1d95 100%)" }}>
        {/* subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        {/* glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(154,91,255,0.25) 0%,transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 pt-28 pb-16 text-center">
          <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <Zap size={12} className="text-purple-300" />
            <span className="text-purple-200 text-[11px] font-bold uppercase tracking-widest">Spare Parts & Accessories</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-4">
            Premium Mobile{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#e9d5ff,#c084fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Parts & Products
            </span>
          </h1>
          <p className="text-purple-300 text-sm sm:text-[15px] max-w-lg mx-auto mb-10 leading-relaxed">
            Genuine, compatible &amp; refurbished panels, batteries and accessories for all major brands — tested and ready to ship.
          </p>

          {/* Hero search */}
          <div className="max-w-md mx-auto relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text" value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search brand, model or part..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl text-sm text-gray-800 bg-white shadow-xl outline-none focus:ring-2 ring-[#9a5bff]/30 transition-all"
            />
            {q && (
              <button onClick={() => setQ("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { val: `${PRODUCTS.length}+`, lbl: "Products" },
              { val: "15+",      lbl: "Brands"      },
              { val: "100%",     lbl: "QC Tested"   },
              { val: "Same Day", lbl: "Availability" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="text-center">
                <p className="text-2xl font-extrabold text-white leading-none">{val}</p>
                <p className="text-purple-400 text-[10px] font-semibold uppercase tracking-widest mt-1">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FILTER BAR ════════════════════════════════════════ */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-3">

          {/* Category pills */}
          <div className="flex items-center gap-1.5 flex-1 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((c) => {
              const active = cat === c;
              const Icon = c !== "All" ? CAT_ICON[c] : null;
              const count = c === "All" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === c).length;
              return (
                <button key={c} onClick={() => setCat(c)}
                  className="flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shrink-0"
                  style={active
                    ? { background: "#9a5bff", color: "#fff", boxShadow: "0 2px 8px rgba(154,91,255,0.35)" }
                    : { background: "#f3f4f6", color: "#6b7280" }
                  }
                >
                  {Icon && <Icon size={12} />}
                  {c}
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                    style={active ? { background:"rgba(255,255,255,0.25)", color:"#fff" } : { background:"#e5e7eb", color:"#9ca3af" }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="relative shrink-0">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 border border-gray-200 bg-white rounded-full px-3.5 py-2 hover:border-[#9a5bff] hover:text-[#9a5bff] transition-colors"
            >
              {sortLabel} <ChevronDown size={13} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1.5 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden z-50 min-w-[160px]">
                {SORTS.map((s) => (
                  <button key={s.key}
                    onClick={() => { setSort(s.key); setSortOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-purple-50 hover:text-[#9a5bff] transition-colors"
                    style={{ color: sort === s.key ? "#9a5bff" : "#374151", fontWeight: sort === s.key ? 700 : 500 }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ══ GRID ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 py-8 pb-24">
        {/* Result count */}
        <p className="text-xs text-gray-400 font-medium mb-6">
          {filtered.length === 0 ? "No results" : (
            <>Showing <span className="text-gray-700 font-bold">{filtered.length}</span> {filtered.length === 1 ? "product" : "products"}
              {cat !== "All" && <> · <span style={{ color:"#9a5bff" }} className="font-semibold">{cat}</span></>}
            </>
          )}
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center py-28 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
              <Package size={28} className="text-gray-300" />
            </div>
            <p className="text-gray-500 font-semibold">No products found</p>
            <button onClick={() => { setQ(""); setCat("All"); }}
              className="text-xs text-[#9a5bff] font-semibold hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => {
              const CatIcon = CAT_ICON[p.category];
              const qcfg   = QUALITY_CFG[p.quality];
              const scfg   = STOCK_CFG[p.stock];
              const StockIcon = scfg.icon;
              const disc   = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
              const tagCfg = p.tag ? TAG_CFG[p.tag] : null;

              return (
                <div key={p.id}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
                  style={{ border:"1.5px solid #f0ebff", boxShadow:"0 2px 8px rgba(0,0,0,0.05)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 12px 32px rgba(154,91,255,0.14)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)")}
                >
                  {/* ── Image area ── */}
                  <div className="relative h-36 flex items-center justify-center"
                    style={{ background: `linear-gradient(145deg, ${p.accent}18 0%, ${p.accent}08 100%)` }}>

                    {/* Decorative ring */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-24 h-24 rounded-full opacity-10"
                        style={{ background: p.accent, filter:"blur(24px)" }} />
                    </div>

                    {/* Icon */}
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ background: `${p.accent}22`, border:`1.5px solid ${p.accent}33` }}>
                      <CatIcon size={30} strokeWidth={1.5} style={{ color: p.accent }} />
                    </div>

                    {/* Tag */}
                    {tagCfg && (
                      <span className="absolute top-3 left-3 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ background: tagCfg.bg, color: tagCfg.text }}>
                        {p.tag}
                      </span>
                    )}

                    {/* Discount */}
                    {disc > 0 && (
                      <span className="absolute top-3 right-3 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full"
                        style={{ background:"#fee2e2", color:"#dc2626" }}>
                        -{disc}%
                      </span>
                    )}

                    {/* Brand strip */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-1.5"
                      style={{ background: "rgba(255,255,255,0.85)", backdropFilter:"blur(6px)", borderTop:`1px solid ${p.accent}18` }}>
                      <span className="text-[10px] font-extrabold tracking-wide" style={{ color: p.accent }}>
                        {p.brand}
                      </span>
                      <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: qcfg.bg, color: qcfg.text }}>
                        <span className="inline-block w-1.5 h-1.5 rounded-full mr-1 align-middle" style={{ background: qcfg.dot }} />
                        {qcfg.label}
                      </span>
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex flex-col flex-1 p-3.5 pt-3 gap-1">
                    <h3 className="text-[13px] font-bold text-gray-900 leading-snug">{p.name}</h3>
                    <p className="text-[11px] text-gray-400 leading-tight truncate">{p.model}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Stars n={p.rating} />
                      <span className="text-[10px] font-semibold text-gray-500">{p.rating}</span>
                      <span className="text-[10px] text-gray-300">({p.reviews})</span>
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-1 mt-0.5">
                      <StockIcon size={10} style={{ color: scfg.color }} />
                      <span className="text-[10px] font-semibold" style={{ color: scfg.color }}>{p.stock}</span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 my-2" />

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-extrabold text-gray-900">{fmt(p.price)}</span>
                      {p.oldPrice && (
                        <span className="text-[11px] text-gray-400 line-through">{fmt(p.oldPrice)}</span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => waOrder(p)}
                        disabled={p.stock === "Out of Stock"}
                        className="flex-1 flex items-center justify-center gap-1.5 text-white text-[11px] font-bold py-2.5 rounded-xl transition-all duration-200 disabled:opacity-40"
                        style={{ background: "linear-gradient(135deg,#25d366,#1aab54)", boxShadow:"0 2px 8px rgba(37,211,102,0.3)" }}
                      >
                        <MessageCircle size={12} />
                        Order
                      </button>
                      <button
                        className="flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 hover:border-[#9a5bff] hover:text-[#9a5bff]"
                        style={{ borderColor:"#e5e7eb", color:"#9ca3af" }}
                      >
                        <ShoppingCart size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════ */}
      <section className="px-4 py-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#12002e 0%,#2d0870 55%,#4c1d95 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize:"48px 48px" }} />
        <div className="relative max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background:"rgba(154,91,255,0.2)", border:"1px solid rgba(154,91,255,0.35)" }}>
            <MessageCircle size={24} className="text-purple-300" />
          </div>
          <h2 className="text-2xl font-extrabold text-white mb-2">Can&apos;t find what you need?</h2>
          <p className="text-purple-400 text-sm mb-7 leading-relaxed">
            WhatsApp us your phone model and required part — we&apos;ll source it for you, often same day.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi! I'm looking for a spare part. Can you help?")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            style={{ background:"linear-gradient(135deg,#25d366,#1aab54)", boxShadow:"0 4px 20px rgba(37,211,102,0.35)" }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </section>

    </main>
  );
}
