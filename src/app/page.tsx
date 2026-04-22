import Link from "next/link";
import Image from "next/image";
import {
  Phone, MessageCircle, Smartphone, Battery, Camera,
  Code2, Droplets, Zap, CheckCircle, Clock, MapPin,
  Star, Shield, ArrowRight, Users, Award, Wrench,
} from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsCounter from "@/components/StatsCounter";
import BrandsSection from "@/components/BrandsSection";

const PHONE        = "+923152413134";
const PHONE_DISP   = "0315-2413134";
const WHATSAPP     = "923152413134";

const services = [
  { icon: Smartphone, label: "Screen Repair",        bg: "bg-violet-100", ic: "text-violet-600" },
  { icon: Battery,    label: "Battery Replacement",  bg: "bg-amber-100",  ic: "text-amber-600"  },
  { icon: Camera,     label: "Camera Repair",        bg: "bg-sky-100",    ic: "text-sky-600"    },
  { icon: Code2,      label: "Software Fix",         bg: "bg-emerald-100",ic: "text-emerald-600"},
  { icon: Droplets,   label: "Water Damage",         bg: "bg-cyan-100",   ic: "text-cyan-600"   },
  { icon: Zap,        label: "Charging Port",        bg: "bg-orange-100", ic: "text-orange-600" },
];

const whyUs = [
  { icon: Award,    title: "17+ Years Experience",  desc: "Established in 2007 — one of Karachi's most trusted repair shops." },
  { icon: Shield,   title: "Warranty on Every Job", desc: "Screen: 3 months. Battery: 6 months. Written warranty, no excuses." },
  { icon: Clock,    title: "30–45 Minute Service",  desc: "Most repairs done while you wait. No overnight delays." },
  { icon: Users,    title: "50,000+ Repairs Done",  desc: "Thousands of satisfied customers across Karachi since 2007." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* — Left — */}
            <div>
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open Today · 1:00 PM – 11:00 PM
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-5">
                Expert Mobile Repairs<br />
                <span className="text-[#9a5bff]">Since 2007.</span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
                Karachi&apos;s trusted repair shop for all major brands. Screen, battery, camera, software, water damage — fixed in <strong className="text-gray-800">30–45 minutes</strong> with a written warranty.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a href={`tel:${PHONE}`} className="btn-primary">
                  <Phone size={16} /> Call: {PHONE_DISP}
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-green">
                  <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>

              {/* Locations */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">2 Branches in Karachi</p>
                {[
                  ["Saddar", "Shop LB-41, City Star Mall"],
                  ["North Karachi", "Shop 122, Geo Mobile Market"],
                ].map(([area, addr]) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={13} className="text-[#9a5bff] shrink-0" />
                    <span><strong className="text-gray-800">{area}</strong> — {addr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* — Right — */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                  alt="Mobile repair technician at work"
                  width={720}
                  height={500}
                  className="w-full h-[490px] object-cover"
                  priority
                />
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-t border-gray-100">
                  {[
                    { val: "17+", lbl: "Years" },
                    { val: "50K+", lbl: "Repairs" },
                    { val: "4.9★", lbl: "Rating" },
                    { val: "2", lbl: "Branches" },
                  ].map(({ val, lbl }) => (
                    <div key={lbl} className="text-center">
                      <p className="text-[#9a5bff] text-xl font-extrabold leading-none">{val}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ══════════════════════════════════════════ */}
      <section className="bg-[#9a5bff] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "17+",   lbl: "Years in Business" },
              { val: "50K+",  lbl: "Phones Repaired"   },
              { val: "4.9★",  lbl: "Customer Rating"   },
              { val: "100%",  lbl: "Warranty Covered"  },
            ].map(({ val, lbl }) => (
              <div key={lbl}>
                <p className="text-white text-3xl md:text-4xl font-extrabold">{val}</p>
                <p className="text-purple-200 text-sm mt-1">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ════════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="pill">What We Fix</span>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Repair Services</h2>
              <p className="text-gray-500 mt-2 text-sm max-w-lg">All major phone problems solved in one place — fast and with warranty.</p>
            </div>
            <Link href="/services" className="btn-outline whitespace-nowrap self-start md:self-auto">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, label, bg, ic }) => (
              <Link key={label} href="/services" className="service-card group p-6 flex items-start gap-4 no-underline">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={22} className={ic} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-base mb-1">{label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Fast, reliable repair with genuine parts and warranty.</p>
                  <span className="text-[#9a5bff] text-xs font-semibold mt-2 inline-flex items-center gap-1">
                    Learn more <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ══════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Why Us?</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Memon Mobile Zone?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="info-card text-center">
                <div className="w-14 h-14 bg-[#f3efff] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-[#9a5bff]" />
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══════════════════════════════════ */}
      <section className="bg-[#fafafa] py-20 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Process</span>
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="text-gray-500 mt-2 text-sm">3 simple steps — most repairs done same day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gray-200" />
            {[
              { n: "1", icon: Phone,        t: "Call or WhatsApp",        d: "Describe your issue and phone model. Get a free estimate immediately — no commitment needed." },
              { n: "2", icon: Wrench,       t: "We Diagnose Your Phone",  d: "Bring your phone to either branch. Our technician confirms the fault and gives you the final price before starting." },
              { n: "3", icon: CheckCircle,  t: "Ready in 30–45 Minutes",  d: "Your phone is repaired on the spot and returned with a written warranty card." },
            ].map(({ n, icon: Icon, t, d }) => (
              <div key={n} className="bg-white border border-gray-200 rounded-2xl p-6 text-center relative">
                <div className="w-10 h-10 bg-[#9a5bff] rounded-full flex items-center justify-center text-white font-extrabold text-sm mx-auto mb-5">
                  {n}
                </div>
                <Icon size={28} className="text-[#9a5bff] mx-auto mb-3" />
                <h3 className="text-gray-900 font-bold text-sm mb-2">{t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BRANDS ═════════════════════════════════════════ */}
      <BrandsSection />

      {/* ═══ TESTIMONIALS ════════════════════════════════════ */}
      <section className="bg-[#fafafa] py-20 px-4 sm:px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Reviews</span>
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-500 mt-2 text-sm">Thousands of happy customers across Karachi</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ═══ LOCATIONS ══════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Find Us</span>
            <h2 className="text-3xl font-extrabold text-gray-900">2 Branches in Karachi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { branch: "Branch 1 — Saddar",       addr: "Shop No LB-41, City Star Mall, Saddar, Karachi", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.0099!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMzUuNiJF!5e0!3m2!1sen!2spk!4v1" },
              { branch: "Branch 2 — North Karachi", addr: "Shop No 122, 1st Floor, Geo Mobile Market, North Karachi", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5!2d67.0580!3d24.9655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU3JzU1LjgiTiA2N8KwMDMnMjkuMCJF!5e0!3m2!1sen!2spk!4v1" },
            ].map(({ branch, addr, map }) => (
              <div key={branch} className="border border-gray-200 rounded-2xl overflow-hidden">
                <iframe src={map} width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={branch} />
                <div className="p-5 bg-white">
                  <p className="text-[#9a5bff] text-xs font-bold uppercase tracking-widest mb-1">{branch}</p>
                  <p className="text-gray-800 font-semibold text-sm mb-2">{addr}</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Clock size={11} className="shrink-0" /> Open Daily: 1:00 PM – 11:00 PM
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Phone Broken? Let&apos;s Fix It Today.
          </h2>
          <p className="text-gray-500 text-sm mb-7">Free estimate, no wait. Call or WhatsApp right now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary justify-center">
              <Phone size={16} /> Call: {PHONE_DISP}
            </a>
            <Link href="/contact" className="btn-outline justify-center">
              Send a Message <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
