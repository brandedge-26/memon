"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Wrench, Phone, ShoppingCart } from "lucide-react";

const navItems = [
  { name: "Home",     href: "/",         icon: Home         },
  { name: "Products", href: "/products", icon: ShoppingBag  },
  { name: "Services", href: "/services", icon: Wrench       },
  { name: "Contact",  href: "/contact",  icon: Phone        },
  { name: "Cart",     href: "/cart",     icon: ShoppingCart },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-l border-r border-gray-200 rounded-t-2xl shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-1 py-1.5 pb-safe">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className="flex flex-col items-center gap-0.5 flex-1 py-1 group"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-purple-50"
                      : "bg-transparent group-active:bg-gray-100"
                  }`}
                >
                  <Icon
                    size={17}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-[#9a5bff]" : "text-gray-400 group-hover:text-[#9a5bff]"
                    }`}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                </div>
                <span
                  className={`text-[9px] font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? "text-[#9a5bff]" : "text-gray-400 group-hover:text-[#9a5bff]"
                  }`}
                >
                  {name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
