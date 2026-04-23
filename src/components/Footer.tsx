import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const services = ["Screen Repair", "Battery Replacement", "Camera Repair", "Software Fix", "Water Damage", "Charging Port"];
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const PHONE = "+923152413134";
export const PHONE_DISPLAY = "0315-2413134";
export const WHATSAPP = "923152413134";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Memon Mobile Zone" width={42} height={42} className="rounded-xl" />
              <div>
                <p className="font-bold text-gray-900 text-sm tracking-wide">MEMON MOBILE ZONE</p>
                <p className="text-xs text-[#9a5bff] font-semibold">Est. 2007</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Karachi&apos;s trusted mobile repair experts for 17+ years. Quality repairs with genuine parts and guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1Ag24HQeFn/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-[#9a5bff]/40 hover:bg-[#9a5bff]/5 flex items-center justify-center text-gray-400 hover:text-[#9a5bff] transition-all duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/mmzmobilecare?igsh=MW9jODRhazg5ams3Ng==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-[#9a5bff]/40 hover:bg-[#9a5bff]/5 flex items-center justify-center text-gray-400 hover:text-[#9a5bff] transition-all duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-gray-200 hover:border-[#25d366]/40 hover:bg-[#25d366]/5 flex items-center justify-center text-gray-400 hover:text-[#25d366] transition-all duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-5 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-gray-500 hover:text-[#9a5bff] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9a5bff]/50" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-gray-500 hover:text-[#9a5bff] text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#9a5bff]/50" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-5 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#9a5bff] mt-1 shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-700 font-semibold mb-0.5">Branch 1 — Saddar</p>
                  <p className="text-gray-400">Shop No LB-41, City Star Mall, Karachi</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#9a5bff] mt-1 shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-700 font-semibold mb-0.5">Branch 2 — North Karachi</p>
                  <p className="text-gray-400">Shop No 122, 1st Floor, Geo Mobile Market</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#9a5bff] shrink-0" />
                <a href={`tel:${PHONE}`} className="text-gray-500 hover:text-[#9a5bff] text-sm transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#9a5bff] shrink-0" />
                <span className="text-gray-500 text-sm">info@memonmobilezone.pk</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-[#9a5bff] shrink-0" />
                <span className="text-gray-500 text-sm">Daily: 1:00 PM – 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-sm">
            © 2026 <span className="text-[#9a5bff] font-semibold">Memon Mobile Zone</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Developed by <a href="https://brandedgecreations.io" target="_blank" rel="noopener noreferrer" className="text-[#9a5bff] font-bold hover:underline">BrandEdge Creations</a>
          </p>
          <p className="text-gray-400 text-sm">Established 2007 · Karachi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
