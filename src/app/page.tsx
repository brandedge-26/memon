import Link from "next/link";
import Image from "next/image";
import {
  Phone, MessageCircle, Smartphone, Battery, Camera,
  Code2, Droplets, Zap, CheckCircle, Clock, MapPin,
  Shield, ArrowRight, Users, Award, Wrench,
} from "lucide-react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import StatsCounter from "@/components/StatsCounter";
import BrandsSection from "@/components/BrandsSection";
import ShopStatus from "@/components/ShopStatus";

const PHONE        = "+923152413134";
const PHONE_DISP   = "0315-2413134";
const WHATSAPP     = "923152413134";

const services = [
  { icon: Smartphone, label: "Screen Repair",       desc: "Cracked or dead display? We replace with premium-grade panels.", bg: "from-violet-100 to-violet-50", ic: "text-violet-600" },
  { icon: Battery,    label: "Battery Replacement", desc: "Restore full-day battery life with genuine cells.",             bg: "from-amber-100 to-amber-50",  ic: "text-amber-600"  },
  { icon: Camera,     label: "Camera Repair",        desc: "Blurry, black, or broken camera fixed professionally.",         bg: "from-sky-100 to-sky-50",      ic: "text-sky-600"    },
  { icon: Code2,      label: "Software Fix",         desc: "Hang, restart loops, unlock & flashing — all handled.",        bg: "from-emerald-100 to-emerald-50",ic:"text-emerald-600"},
  { icon: Droplets,   label: "Water Damage",         desc: "Liquid damage recovery with deep cleaning & part check.",      bg: "from-cyan-100 to-cyan-50",    ic: "text-cyan-600"   },
  { icon: Zap,        label: "Charging Port",        desc: "Not charging or loose port? Fixed or replaced same day.",      bg: "from-orange-100 to-orange-50",ic: "text-orange-600" },
];

const whyUs = [
  { icon: Award,   title: "17+ Years Experience",  desc: "Established in 2007 — one of Karachi's most trusted repair shops." },
  { icon: Shield,  title: "Warranty on Every Job", desc: "Screen: 3 months. Battery: 6 months. Written warranty, no excuses." },
  { icon: Clock,   title: "30–45 Minute Service",  desc: "Most repairs done while you wait. No overnight delays." },
  { icon: Users,   title: "50,000+ Repairs Done",  desc: "Thousands of satisfied customers across Karachi since 2007." },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO BANNER ════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "92vh" }}>
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?auto=format&fit=crop&w=1600&q=85"
          alt="Mobile repair technician at work"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark + purple gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30,5,69,0.82) 0%, rgba(74,20,140,0.72) 40%, rgba(100,30,180,0.60) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 md:pt-28" style={{ minHeight: "92vh" }}>
          <ShopStatus />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mt-4 mb-4 drop-shadow-lg max-w-3xl">
            Expert Mobile Repairs
            <br />
            <span style={{ backgroundImage: "linear-gradient(135deg, #d8b4fe 0%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Since 2007.
            </span>
          </h1>

          <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed mb-7 max-w-lg">
            Karachi&apos;s trusted repair shop for all major brands. Screen, battery, camera, software &amp; water damage — fixed in{" "}
            <strong className="text-white">30–45 minutes</strong> with written warranty.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-7">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              style={{ background: "#9a5bff", color: "#fff" }}
            >
              <Phone size={16} /> Call: {PHONE_DISP}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              style={{ background: "#25d366", color: "#fff" }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { icon: Shield, text: "Written Warranty" },
              { icon: CheckCircle, text: "Genuine Parts" },
              { icon: Clock, text: "30–45 Min Repair" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs font-medium text-purple-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                <Icon size={12} className="text-purple-300" /> {text}
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center divide-x divide-white/20">
            {[
              { val: "17+", lbl: "Years" },
              { val: "50K+", lbl: "Repairs" },
              { val: "4.9★", lbl: "Rating" },
              { val: "2", lbl: "Branches" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="text-center px-5 sm:px-8">
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">{val}</p>
                <p className="text-purple-300 text-[10px] mt-1 font-semibold uppercase tracking-wider">{lbl}</p>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
            {[
              ["Saddar", "City Star Mall"],
              ["North Karachi", "Geo Mobile Market"],
            ].map(([area, addr]) => (
              <div key={area} className="flex items-center gap-1.5 text-xs text-purple-100 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                <MapPin size={11} className="text-purple-300 shrink-0" />
                <span><strong className="text-white">{area}</strong> — {addr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ══════════════════════════════════════════ */}
      <section className="py-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#4c1d95 0%,#6d28d9 40%,#7c3aed 70%,#8b5cf6 100%)" }}>
        {/* subtle pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "17+",  lbl: "Years in Business", sub: "Est. 2007" },
              { val: "50K+", lbl: "Phones Repaired",   sub: "& counting" },
              { val: "4.9★", lbl: "Customer Rating",   sub: "Google Reviews" },
              { val: "100%", lbl: "Warranty Covered",  sub: "Every repair" },
            ].map(({ val, lbl, sub }) => (
              <div key={lbl} className="glass-stat">
                <p className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">{val}</p>
                <p className="text-purple-100 text-xs font-bold mt-1 uppercase tracking-wide">{lbl}</p>
                <p className="text-purple-300 text-[10px] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg,#ffffff 0%,#faf8ff 100%)" }}>
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
            {services.map(({ icon: Icon, label, desc, bg, ic }) => (
              <Link key={label} href="/services" className="service-card group p-6 flex items-start gap-4 no-underline">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                  <Icon size={22} className={ic} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 font-bold text-base mb-1">{label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-2">{desc}</p>
                  <span className="text-[#9a5bff] text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    Learn more <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US — dark section ═══════════════════ */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#1e0545 0%,#2d0870 40%,#3b0f8c 100%)" }}>
        {/* Decorative glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(154,91,255,0.15) 0%, transparent 70%)", transform: "translateY(-40%)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", transform: "translateY(40%)" }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-purple-200 text-[0.7rem] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why Us?
            </span>
            <h2 className="text-3xl font-extrabold text-white">Why Choose Memon Mobile Zone?</h2>
            <p className="text-purple-300 mt-2 text-sm">Trusted by 50,000+ customers across Karachi since 2007</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 p-6 text-center transition-all duration-250 hover:-translate-y-1 hover:border-white/25 hover:shadow-xl" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(154,91,255,0.25)" }}>
                  <Icon size={26} className="text-purple-200" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-purple-300 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(180deg,#fafafa 0%,#f5f0ff 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="pill">Process</span>
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="text-gray-500 mt-2 text-sm">3 simple steps — most repairs done same day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {[
              { n: "01", icon: Phone,       t: "Call or WhatsApp",       d: "Describe your issue and phone model. Get a free estimate immediately — no commitment needed.",                                                          color: "from-violet-500 to-purple-600" },
              { n: "02", icon: Wrench,      t: "We Diagnose Your Phone", d: "Bring your phone to either branch. Our technician confirms the fault and gives you the final price before starting.",                                  color: "from-purple-500 to-indigo-600" },
              { n: "03", icon: CheckCircle, t: "Ready in 30–45 Minutes", d: "Your phone is repaired on the spot and returned with a written warranty card.",                                                                        color: "from-indigo-500 to-violet-600" },
            ].map(({ n, icon: Icon, t, d, color }, idx) => (
              <div key={n} className="relative flex flex-col">
                {/* Arrow between cards */}
                {idx < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-10 z-10 w-6 h-6 rounded-full bg-white border border-purple-200 shadow-sm items-center justify-center">
                    <ArrowRight size={12} className="text-[#9a5bff]" />
                  </div>
                )}

                <div className="step-card flex flex-col items-center text-center h-full gap-4 p-7">
                  {/* Step number + icon stacked */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-purple-400 uppercase">Step {n}</span>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-extrabold text-base mb-2">{t}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BRANDS ═════════════════════════════════════════ */}
      <BrandsSection />

      {/* ═══ TESTIMONIALS ════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#faf8ff 0%,#f3f0ff 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(154,91,255,0.07) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Reviews</span>
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-500 mt-2 text-sm">Thousands of happy customers across Karachi</p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ═══ LOCATIONS ══════════════════════════════════════ */}
      <section className="bg-white py-20 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Find Us</span>
            <h2 className="text-3xl font-extrabold text-gray-900">2 Branches in Karachi</h2>
            <p className="text-gray-500 mt-2 text-sm">Walk in anytime during business hours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { branch: "Branch 1 — Saddar",        num: "01", addr: "Shop No LB-41, City Star Mall, Saddar, Karachi",              map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.0099!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMzUuNiJF!5e0!3m2!1sen!2spk!4v1" },
              { branch: "Branch 2 — North Karachi",  num: "02", addr: "Shop No 122, 1st Floor, Geo Mobile Market, North Karachi",    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5!2d67.0580!3d24.9655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU3JzU1LjgiTiA2N8KwMDMnMjkuMCJF!5e0!3m2!1sen!2spk!4v1" },
            ].map(({ branch, num, addr, map }) => (
              <div key={branch} className="rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-250 group">
                {/* Map */}
                <div className="relative">
                  <iframe src={map} width="100%" height="210" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={branch} />
                  {/* Branch number badge over map */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md border border-purple-100">
                    <span className="text-[10px] font-extrabold" style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      BRANCH {num}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-white">
                  <p className="text-gray-900 font-extrabold text-sm mb-1.5">{branch}</p>
                  <div className="flex items-start gap-1.5 text-gray-500 text-xs mb-1.5">
                    <MapPin size={11} className="text-[#9a5bff] mt-0.5 shrink-0" />
                    <span>{addr}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Clock size={11} className="shrink-0" />
                    <span>Mon–Sat: 1:00 PM – 11:00 PM &nbsp;·&nbsp; Sun: 10:00 AM – 12:00 AM</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#4c1d95 0%,#6d28d9 40%,#7c3aed 70%,#8b5cf6 100%)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", transform: "translate(-50%,-60%)" }} />

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
            <Wrench size={28} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Phone Broken? Let&apos;s Fix It Today.
          </h2>
          <p className="text-purple-200 text-sm mb-8">Free estimate, no wait. Call or WhatsApp right now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-1"
              style={{ background: "#fff", color: "#7c3aed", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              <Phone size={16} /> Call: {PHONE_DISP}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green justify-center inline-flex"
            >
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
