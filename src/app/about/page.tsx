import Image from "next/image";
import Link from "next/link";
import {
  Shield, Award, Clock, Heart, CheckCircle,
  ArrowRight, Wrench, Phone, MapPin, Star, Users,
} from "lucide-react";

export const metadata = {
  title: "About Us | Memon Mobile Zone",
  description: "Karachi's trusted mobile repair shop since 2007. Learn about our story, values, and why we're the #1 choice.",
};

const PHONE        = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";
const WHATSAPP     = "923152413134";

const values = [
  { icon: Shield, title: "Honesty First",     desc: "We diagnose first and give a clear upfront price. No hidden charges, no unnecessary repairs — ever.", bg: "from-violet-100 to-violet-50", ic: "text-violet-600" },
  { icon: Award,  title: "Quality Guaranteed", desc: "Only high-quality OEM parts are used. Every repair comes with a written warranty card.",                bg: "from-amber-100 to-amber-50",  ic: "text-amber-600"  },
  { icon: Clock,  title: "Fast Turnaround",    desc: "We respect your time. Most repairs are completed while you wait — in just 30–45 minutes.",              bg: "from-sky-100 to-sky-50",      ic: "text-sky-600"    },
  { icon: Heart,  title: "Customer First",     desc: "Your satisfaction is our top priority. 17+ years of trust built one repair at a time.",                 bg: "from-rose-100 to-rose-50",    ic: "text-rose-600"   },
];

const whyUs = [
  "17+ years of proven track record",
  "Certified and experienced technicians",
  "Only genuine quality parts used",
  "Transparent pricing — no hidden fees",
  "All major brands supported",
  "Warranty on every repair",
  "Fast 30–45 minute service",
  "Customer data privacy guaranteed",
];

const milestones = [
  { year: "2007", title: "Founded",              desc: "Started with a single shop in Karachi, driven by passion for mobile technology." },
  { year: "2012", title: "Expanded Services",    desc: "Added motherboard-level repairs and water damage restoration to our expertise." },
  { year: "2018", title: "50,000 Repairs",       desc: "Crossed a major milestone — trusted by over 50,000 customers across Karachi." },
  { year: "2024", title: "2nd Branch Opened",    desc: "Opened our North Karachi branch to serve even more customers city-wide." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-gray-100 pt-28 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(145deg, #fdfcff 0%, #f9f7ff 40%, #f3f0ff 100%)" }}
      >
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(154,91,255,0.10) 0%, transparent 70%)", transform: "translate(25%,-40%)" }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", transform: "translate(-30%, 40%)" }} />

        <div className="relative max-w-4xl mx-auto">
          <span className="pill">About Us</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Karachi&apos;s Most{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)" }} className="bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            <br className="hidden md:block" />
            Mobile Repair Shop
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            From a small shop in 2007 to Karachi&apos;s most trusted repair brand — 17+ years of experience, 50,000+ phones repaired, and countless satisfied customers.
          </p>

          {/* Quick stats strip */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Award,  val: "17+ Years",   lbl: "Experience"      },
              { icon: Users,  val: "50K+",         lbl: "Phones Repaired" },
              { icon: Star,   val: "4.9 ★",        lbl: "Rating"          },
              { icon: MapPin, val: "2 Branches",   lbl: "Across Karachi"  },
            ].map(({ icon: Icon, val, lbl }) => (
              <div key={lbl} className="flex items-center gap-2.5 bg-white border border-purple-100 rounded-xl px-4 py-2.5 shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-100 to-purple-50 rounded-lg flex items-center justify-center">
                  <Icon size={15} className="text-[#9a5bff]" />
                </div>
                <div>
                  <p className="text-gray-900 font-extrabold text-sm leading-none">{val}</p>
                  <p className="text-gray-400 text-[11px] mt-0.5">{lbl}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="pill">Our Story</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">From 2007 to Today</h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  In 2007, our journey began with a small shop in Karachi&apos;s mobile market. The founder&apos;s dedication, skill, and honest dealings with customers slowly built what is now one of Karachi&apos;s most trusted names in mobile repair.
                </p>
                <p>
                  We started with basic repairs — screens and batteries. Over time, we expanded our expertise to handle complex motherboard repairs, water damage restoration, and software-level diagnostics.
                </p>
                <p>
                  Today, our customers are our greatest strength. Word-of-mouth and customer loyalty have been our biggest advertisement. We proudly serve 3rd-generation customers — families who bring their children&apos;s phones to us, just like their parents did.
                </p>
              </div>
            </div>

            {/* Profile card */}
            <div
              className="rounded-3xl p-8 border border-purple-100 shadow-xl relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #fdfcff 0%, #f5f0ff 100%)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(154,91,255,0.08) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />

              <Image src="/logo.png" alt="Memon Mobile Zone" width={90} height={90} className="mx-auto mb-6 rounded-2xl shadow-md" />
              <div className="text-center mb-7">
                <h3 className="text-xl font-extrabold text-gray-900 mb-1">Memon Mobile Zone</h3>
                <p
                  className="font-bold text-sm"
                  style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Established Since 2007
                </p>
                <p className="text-gray-400 text-xs mt-1">2 Branches across Karachi</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Year Est.",       value: "2007"    },
                  { label: "Experience",      value: "17+ Yrs" },
                  { label: "Phones Repaired", value: "50K+"    },
                  { label: "Rating",          value: "4.9 ★"   },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white border border-purple-100 rounded-xl p-4 text-center shadow-sm">
                    <p
                      className="text-xl font-extrabold"
                      style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 border-y border-gray-100"
        style={{ background: "linear-gradient(180deg, #fafafa 0%, #f5f0ff 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Journey</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Our Milestones</h2>
            <p className="text-gray-500 mt-2 text-sm">17 years of growth, trust, and excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map(({ year, title, desc }, i) => (
              <div key={year} className="step-card relative">
                {/* Year badge */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white font-extrabold text-sm mb-4 shadow-md"
                  style={{ background: "linear-gradient(135deg, #9a5bff, #7c3aed)" }}
                >
                  {year}
                </div>
                {/* Connector dot */}
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-9 -right-2.5 w-5 h-5 rounded-full border-2 border-purple-300 bg-white z-10" />
                )}
                <h3 className="text-gray-900 font-extrabold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section
        className="py-14 px-4 sm:px-6"
        style={{ background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { val: "17+",  lbl: "Years in Business" },
              { val: "50K+", lbl: "Phones Repaired"   },
              { val: "4.9★", lbl: "Customer Rating"   },
              { val: "100%", lbl: "Warranty Covered"  },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="glass-stat">
                <p className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">{val}</p>
                <p className="text-purple-200 text-xs mt-1 font-semibold uppercase tracking-wide">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Our Values</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">What We Stand For</h2>
            <p className="text-gray-500 mt-2 text-sm">Principles we&apos;ve followed for 17+ years</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc, bg, ic }) => (
              <div key={title} className="info-card text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <Icon size={24} className={ic} />
                </div>
                <h3 className="text-gray-900 font-extrabold mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 border-t border-gray-100"
        style={{ background: "linear-gradient(180deg, #fafafa 0%, #f5f0ff 60%, #fdfcff 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="pill">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">Why Memon Mobile Zone?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-purple-100 rounded-xl px-4 py-3 shadow-sm">
                    <CheckCircle size={15} className="text-[#9a5bff] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-3xl p-8 text-center border border-purple-100 shadow-xl overflow-hidden relative"
              style={{ background: "linear-gradient(145deg, #ffffff 0%, #f5f0ff 100%)" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(154,91,255,0.08) 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />
              <div
                className="inline-flex p-4 rounded-2xl mb-5 shadow-md"
                style={{ background: "linear-gradient(135deg,#9a5bff,#7c3aed)" }}
              >
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Ready to Fix Your Phone?</h3>
              <p className="text-gray-500 text-sm mb-7 leading-relaxed">
                Call us or WhatsApp for a free estimate.<br />Mon–Sat: 1 PM – 11 PM &nbsp;·&nbsp; Sun: 10 AM – 12 AM
              </p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="btn-primary justify-center">
                  <Phone size={15} /> Call: {PHONE_DISPLAY}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="white" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
                <Link href="/contact" className="btn-outline justify-center">
                  Send a Message <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
