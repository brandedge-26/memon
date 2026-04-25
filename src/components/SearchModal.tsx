"use client";
import { useEffect, useRef, useState } from "react";
import {
  Search, X, Wrench, Smartphone, Battery,
  ArrowRight, ShoppingBag, Home, Info, Phone,
  HelpCircle, Mail, LayoutGrid, Star, MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { PRODUCTS, type Product } from "@/lib/products";

const WHATSAPP = "923152413134";

/* ─── Static pages & services ───────────────────────── */
const SERVICES = [
  { label: "Screen Repair",       href: "/services#screen",   icon: Smartphone, desc: "Cracked or dead display replaced"  },
  { label: "Battery Replacement", href: "/services#battery",  icon: Battery,    desc: "Restore full-day battery life"     },
  { label: "Camera Repair",       href: "/services#camera",   icon: Smartphone, desc: "Blurry or broken camera fixed"     },
  { label: "Software Fix",        href: "/services#software", icon: Wrench,     desc: "Hang, restart loops & unlocking"   },
  { label: "Water Damage",        href: "/services#water",    icon: Wrench,     desc: "Liquid damage recovery & cleaning" },
  { label: "Charging Port",       href: "/services#charging", icon: Wrench,     desc: "Loose or dead port fixed same day" },
  { label: "All Repairs",         href: "/services",          icon: Wrench,     desc: "View all repair services"          },
];

const PAGES = [
  { label: "Home",     href: "/",        icon: Home,       desc: "Back to homepage"          },
  { label: "About",    href: "/about",   icon: Info,       desc: "Our story & team"           },
  { label: "Services", href: "/services",icon: Wrench,     desc: "All repair services"        },
  { label: "Products", href: "/products",icon: ShoppingBag,desc: "Shop our products"          },
  { label: "FAQ",      href: "/faq",     icon: HelpCircle, desc: "Frequently asked questions" },
  { label: "Contact",  href: "/contact", icon: Mail,       desc: "Get in touch with us"       },
  { label: "Call Us",  href: "tel:+923152413134", icon: Phone, desc: "0315-2413134"           },
];

type Tab = "services" | "products" | "pages";

const TABS: { id: Tab; label: string; count?: number }[] = [
  { id: "services", label: "Services", count: SERVICES.length },
  { id: "products", label: "Products", count: PRODUCTS.length },
  { id: "pages",    label: "Pages",    count: PAGES.length    },
];

const QUALITY_COLOR: Record<string, string> = {
  Original:    "#10b981",
  Compatible:  "#3b82f6",
  Refurbished: "#f59e0b",
};

function fmt(n: number) {
  return "Rs. " + n.toLocaleString("en-PK");
}

function MiniStars({ n }: { n: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={9}
          className={i <= Math.round(n) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"} />
      ))}
    </span>
  );
}

/* ─── Product result row ─────────────────────────────── */
function ProductRow({ p, onClose }: { p: Product; onClose: () => void }) {
  const waOrder = () => {
    const msg = encodeURIComponent(
      `Hi! I want to order:\n*${p.name}*\nBrand: ${p.brand}\nModel: ${p.model}\nQuality: ${p.quality}\nPrice: ${fmt(p.price)}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-purple-50 transition-colors group">
      {/* Color dot avatar */}
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${p.accent}18`, border: `1.5px solid ${p.accent}30` }}>
        <span className="text-xs font-extrabold" style={{ color: p.accent }}>{p.brand[0]}</span>
      </div>

      {/* Info */}
      <Link href="/products" onClick={onClose} className="flex-1 min-w-0">
        <p className="text-[12px] font-semibold text-gray-800 group-hover:text-[#9a5bff] transition-colors leading-tight truncate">
          {p.name}
          {p.tag && (
            <span className="ml-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full align-middle"
              style={{ background: p.tag === "Hot" ? "#fee2e2" : "#f3e8ff", color: p.tag === "Hot" ? "#dc2626" : "#7c3aed" }}>
              {p.tag}
            </span>
          )}
        </p>
        <p className="text-[10px] text-gray-400 truncate">{p.brand} · {p.model}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <MiniStars n={p.rating} />
          <span className="text-[9px] text-gray-400">({p.reviews})</span>
          <span className="text-[9px] font-bold" style={{ color: QUALITY_COLOR[p.quality] }}>· {p.quality}</span>
        </div>
      </Link>

      {/* Price + WhatsApp */}
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="text-[12px] font-extrabold text-gray-900">{fmt(p.price)}</span>
        <button
          onClick={waOrder}
          className="flex items-center gap-1 text-[9px] font-bold text-white px-2 py-1 rounded-lg transition-all"
          style={{ background: "linear-gradient(135deg,#25d366,#1aab54)" }}
        >
          <MessageCircle size={9} /> Order
        </button>
      </div>
    </div>
  );
}

/* ─── Modal ──────────────────────────────────────────── */
interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery]     = useState("");
  const [tab, setTab]         = useState<Tab>("services");
  const [visible, setVisible] = useState(false);
  const inputRef              = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      setTimeout(() => inputRef.current?.focus(), 120);
    } else {
      setVisible(false);
      const t = setTimeout(() => { setQuery(""); setTab("services"); }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const lq = query.toLowerCase().trim();

  // Per-tab filtered results
  const serviceResults = lq
    ? SERVICES.filter((s) => s.label.toLowerCase().includes(lq) || s.desc.toLowerCase().includes(lq))
    : SERVICES;

  const productResults = lq
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(lq) ||
        p.brand.toLowerCase().includes(lq) ||
        p.model.toLowerCase().includes(lq) ||
        p.category.toLowerCase().includes(lq) ||
        p.quality.toLowerCase().includes(lq)
      )
    : PRODUCTS.slice(0, 8); // show top 8 by default

  const pageResults = lq
    ? PAGES.filter((p) => p.label.toLowerCase().includes(lq) || p.desc.toLowerCase().includes(lq))
    : PAGES;

  // Cross-tab total when searching
  const totalResults = lq ? serviceResults.length + productResults.length + pageResults.length : 0;

  // Active tab results
  const activeCount = tab === "services" ? serviceResults.length
    : tab === "products" ? productResults.length
    : pageResults.length;

  if (!open && !visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }} />

      {/* Modal */}
      <div className="fixed left-0 right-0 z-[70] flex justify-center px-3 pt-3 md:pt-16 transition-all duration-300"
        style={{ top: 0, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-16px)" }}>
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* ── Search input ── */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
            <Search size={17} className="text-[#9a5bff] shrink-0" />
            <input
              ref={inputRef}
              type="text" value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, services, pages..."
              className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
            />
            {query && (
              <button onClick={() => setQuery("")}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                <X size={14} />
              </button>
            )}
            <button onClick={onClose}
              className="p-1.5 ml-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
              <X size={17} />
            </button>
          </div>

          {/* ── Tab bar ── */}
          <div className="flex border-b border-gray-100 px-4 gap-1 pt-1">
            {TABS.map((t) => {
              const count = lq
                ? (t.id === "services" ? serviceResults.length : t.id === "products" ? productResults.length : pageResults.length)
                : t.count;
              return (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className="relative flex items-center gap-1.5 text-xs font-semibold px-3 py-2.5 transition-colors duration-200"
                  style={{ color: tab === t.id ? "#9a5bff" : "#9ca3af" }}>
                  {t.label}
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                    style={tab === t.id
                      ? { background:"#f3e8ff", color:"#9a5bff" }
                      : { background:"#f3f4f6", color:"#9ca3af" }}>
                    {count}
                  </span>
                  {tab === t.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background:"#9a5bff" }} />
                  )}
                </button>
              );
            })}

            {/* Cross-tab count when searching */}
            {lq && (
              <span className="ml-auto self-center text-[10px] text-gray-400 font-medium pr-1">
                {totalResults} total
              </span>
            )}
          </div>

          {/* ── Results ── */}
          <div className="overflow-y-auto max-h-[58vh]">
            {activeCount === 0 ? (
              <div className="flex flex-col items-center py-12 gap-2">
                <Search size={28} className="text-gray-200" />
                <p className="text-sm text-gray-400">No results in {tab}</p>
              </div>
            ) : (

              /* ── Services tab ── */
              tab === "services" ? (
                <div className="py-2">
                  {!lq && <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 pt-1 pb-1.5">Repair Services</p>}
                  {serviceResults.map(({ label, href, icon: Icon, desc }) => (
                    <Link key={label} href={href} onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-purple-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-[#9a5bff] transition-colors">
                        <Icon size={15} className="text-[#9a5bff] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold text-gray-700 group-hover:text-[#9a5bff] transition-colors">{label}</p>
                        <p className="text-[10px] text-gray-400 truncate">{desc}</p>
                      </div>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-[#9a5bff] shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              )

              /* ── Products tab ── */
              : tab === "products" ? (
                <div className="py-2">
                  {!lq && <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 pt-1 pb-1.5">Top Products</p>}
                  {productResults.map((p) => (
                    <ProductRow key={p.id} p={p} onClose={onClose} />
                  ))}
                  {!lq && PRODUCTS.length > 8 && (
                    <Link href="/products" onClick={onClose}
                      className="flex items-center justify-center gap-1.5 mx-4 mt-2 mb-1 py-2.5 rounded-xl text-xs font-semibold text-[#9a5bff] border border-[#9a5bff]/20 hover:bg-purple-50 transition-colors">
                      <LayoutGrid size={13} />
                      View all {PRODUCTS.length} products
                    </Link>
                  )}
                </div>
              )

              /* ── Pages tab ── */
              : (
                <div className="py-2">
                  {!lq && <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-4 pt-1 pb-1.5">Quick Links</p>}
                  {pageResults.map(({ label, href, icon: Icon, desc }) => (
                    <Link key={label} href={href} onClick={onClose}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-purple-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 group-hover:bg-[#9a5bff] transition-colors">
                        <Icon size={15} className="text-[#9a5bff] group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold text-gray-700 group-hover:text-[#9a5bff] transition-colors">{label}</p>
                        <p className="text-[10px] text-gray-400 truncate">{desc}</p>
                      </div>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-[#9a5bff] shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              )
            )}
          </div>

          {/* ── Footer ── */}
          <div className="border-t border-gray-100 px-4 py-2 flex items-center gap-2">
            <kbd className="text-[10px] text-gray-500 bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 font-mono">ESC</kbd>
            <span className="text-[10px] text-gray-400">to close</span>
            {lq && (
              <span className="ml-auto text-[10px] text-gray-400">
                Searching across all categories
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
