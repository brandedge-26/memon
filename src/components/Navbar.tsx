"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home",     href: "/"         },
  { name: "About",    href: "/about"    },
  { name: "Services", href: "/services" },
  { name: "FAQ",      href: "/faq"      },
  { name: "Contact",  href: "/contact"  },
];

export const PHONE = "+923152413134";
export const PHONE_DISPLAY = "0315-2413134";
export const WHATSAPP = "923152413134";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Memon Mobile Zone"
              width={42}
              height={42}
              className="rounded-xl group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:block leading-none">
              <p className="text-sm font-bold text-gray-900 tracking-wide">MEMON MOBILE ZONE</p>
              <p className="text-xs text-[#9a5bff] font-semibold mt-0.5">Est. 2007</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
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

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="hidden md:flex items-center gap-2 bg-[#9a5bff] hover:bg-[#7c3aed] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Phone size={15} />
              {PHONE_DISPLAY}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-white border-t border-purple-100 px-4 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-700 hover:text-[#9a5bff] font-medium text-sm transition-colors">
              {link.name}
            </Link>
          ))}
          <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-2 bg-[#9a5bff] text-white font-bold py-3 rounded-xl mt-1 text-sm">
            <Phone size={15} /> Call Now: {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </nav>
  );
}
