"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Search, ShoppingCart, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";

const navLinks = [
  { name: "Home",     href: "/"         },
  { name: "About",    href: "/about"    },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "FAQ",      href: "/faq"      },
  { name: "Contact",  href: "/contact"  },
];

export const PHONE = "+923152413134";
export const PHONE_DISPLAY = "0315-2413134";
export const WHATSAPP = "923152413134";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-b border-purple-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Mobile header ── */}
          <div className="flex md:hidden items-center justify-between h-16">
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo centered */}
            <Link href="/" className="flex items-center gap-2 group absolute left-1/2 -translate-x-1/2">
              <Image
                src="/logo.png"
                alt="Memon Mobile Zone"
                width={36}
                height={36}
                className="rounded-xl group-hover:scale-105 transition-transform duration-200"
              />
              <div className="leading-none">
                <p className="text-xs font-bold text-gray-900 tracking-wide">MEMON MOBILE ZONE</p>
                <p className="text-[10px] text-[#9a5bff] font-semibold mt-0.5">Est. 2007</p>
              </div>
            </Link>

            {/* Search + Cart */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/cart"
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
              </Link>
            </div>
          </div>

          {/* ── Desktop header ── */}
          <div className="hidden md:flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Memon Mobile Zone"
                width={42}
                height={42}
                className="rounded-xl group-hover:scale-105 transition-transform duration-200"
              />
              <div className="leading-none">
                <p className="text-sm font-bold text-gray-900 tracking-wide">MEMON MOBILE ZONE</p>
                <p className="text-xs text-[#9a5bff] font-semibold mt-0.5">Est. 2007</p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium relative group transition-colors duration-200 ${
                      isActive ? "text-[#9a5bff]" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#9a5bff] rounded-full transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA + icons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/cart"
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-[#9a5bff] hover:bg-[#7c3aed] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md ml-1"
              >
                <Phone size={15} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* ── Mobile slide-down menu ── */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-purple-50 text-[#9a5bff]"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href={`tel:${PHONE}`}
            className="mt-2 flex items-center justify-center gap-2 bg-[#9a5bff] text-white text-sm font-bold px-4 py-3 rounded-xl"
          >
            <Phone size={15} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </>
  );
}
