import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Clock, Shield, Smartphone, Battery, Camera, Cpu, Droplets, Zap } from "lucide-react";

export const metadata = {
  title: "Services | Memon Mobile Zone",
  description: "Mobile repair services in Karachi — screen, battery, camera, software, water damage, charging port. All brands, warranty guaranteed.",
};

const PHONE = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";
const WHATSAPP = "923152413134";

const services = [
  {
    icon: Smartphone,
    iconBg: "bg-purple-50",
    iconColor: "text-[#9a5bff]",
    title: "Screen Repair",
    tagline: "Cracked or shattered? We'll fix it.",
    desc: "A damaged screen is the most common phone issue. We replace cracked, shattered, unresponsive, or flickering displays with high-quality OEM-compatible parts.",
    includes: [
      "Cracked or shattered screen replacement",
      "Unresponsive touch / dead zones",
      "Display flickering or ghost touch",
      "Black or discoloured screen",
      "Front camera & earpiece replaced if damaged",
    ],
    time: "30–45 min",
    warranty: "3 months",
  },
  {
    icon: Battery,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Battery Replacement",
    tagline: "Draining fast? We'll bring it back to life.",
    desc: "Battery health degrades over time. If your phone drains too fast, shuts down randomly, or won't charge properly, a battery replacement will feel like a new phone.",
    includes: [
      "Fast-draining battery",
      "Phone shutting off at 20–30%",
      "Swollen or bloated battery",
      "Not charging or slow charging",
      "Battery stuck at a percentage",
    ],
    time: "20–30 min",
    warranty: "6 months",
  },
  {
    icon: Camera,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Camera Repair",
    tagline: "Blurry shots? We'll sharpen it up.",
    desc: "Camera issues range from a cracked lens to full camera failure. We fix both front and rear cameras, autofocus problems, and black screen camera issues.",
    includes: [
      "Blurry or out-of-focus photos",
      "Camera not opening or crashing",
      "Cracked camera glass",
      "Front camera failure",
      "Camera flash not working",
    ],
    time: "30–45 min",
    warranty: "3 months",
  },
  {
    icon: Cpu,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "Software Fix",
    tagline: "Freezing or crashing? We'll sort it.",
    desc: "Software problems can make your phone unusable. We handle boot loops, factory resets, virus removal, and full OS re-installation for both iOS and Android.",
    includes: [
      "Phone stuck in boot loop",
      "Factory reset / data wipe",
      "Virus & malware removal",
      "iOS / Android OS reinstall",
      "App crashes & performance issues",
    ],
    time: "30 min – 1 hr",
    warranty: "1 month",
  },
  {
    icon: Droplets,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    title: "Water Damage Repair",
    tagline: "Phone got wet? Act fast — we can help.",
    desc: "Water damage needs immediate attention. The sooner you bring it in, the better the chance of full recovery. We do complete internal cleaning and component drying.",
    includes: [
      "Complete internal disassembly & cleaning",
      "Corrosion removal from components",
      "Ultrasonic board cleaning",
      "Component drying & testing",
      "Replacement of damaged chips if needed",
    ],
    time: "Same day – 24 hrs",
    warranty: "Case by case",
  },
  {
    icon: Zap,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    title: "Charging Port Repair",
    tagline: "Not charging? We'll fix the port.",
    desc: "A faulty charging port is frustrating. We clean, repair, or replace USB-C and Lightning charging ports so your phone charges reliably again.",
    includes: [
      "Phone not charging at all",
      "Charging cable falls out / loose port",
      "Slow or intermittent charging",
      "Connector pin cleaning",
      "Full port replacement if required",
    ],
    time: "30–45 min",
    warranty: "3 months",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <span className="pill">Our Services</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Professional Mobile <br className="hidden md:block" />
            <span className="text-[#9a5bff]">Repair Services</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-7 max-w-2xl">
            All repairs done in-store, same day. Genuine parts, expert technicians, and warranty on every job. Call for a free quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary">
              <Phone size={14} /> Call: {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#9a5bff] py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2">
          {[
            "✓ Same-Day Repairs",
            "✓ Genuine Parts",
            "✓ Warranty on Every Job",
            "✓ All Major Brands",
            "✓ Free Diagnosis",
          ].map((item) => (
            <span key={item} className="text-white/90 text-xs font-semibold tracking-wide">{item}</span>
          ))}
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-[#fafafa] py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, iconBg, iconColor, title, tagline, desc, includes, time, warranty }) => (
              <div key={title} className="service-card flex flex-col">
                {/* Card Header */}
                <div className="p-6 pb-0 flex items-start gap-4">
                  <div className={`${iconBg} p-3 rounded-xl shrink-0`}>
                    <Icon size={28} className={iconColor} />
                  </div>
                  <div>
                    <p className="text-[#9a5bff] text-[11px] font-bold uppercase tracking-widest mb-0.5">{tagline}</p>
                    <h2 className="text-lg font-extrabold text-gray-900">{title}</h2>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 mt-4 border-t border-gray-100" />

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>

                  <ul className="space-y-2 mb-5 flex-1">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={13} className="text-[#9a5bff] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-semibold">
                      <Clock size={11} /> {time}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#f3efff] text-[#7c3aed] px-3 py-1.5 rounded-full text-xs font-semibold">
                      <Shield size={11} /> Warranty: {warranty}
                    </span>
                  </div>

                  <a
                    href={`tel:${PHONE}`}
                    className="btn-primary self-start text-xs px-4 py-2"
                  >
                    <Phone size={12} /> Book This Repair
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100 py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Sure What You Need?</h2>
          <p className="text-gray-500 text-sm mb-7">
            Call or WhatsApp us — describe the issue and we&apos;ll diagnose it for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary justify-center">
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-outline justify-center">
              Contact Form <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
