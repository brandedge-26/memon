import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Clock, Heart, CheckCircle, ArrowRight, Wrench, Phone } from "lucide-react";
import StatsCounter from "@/components/StatsCounter";

export const metadata = {
  title: "About Us | Memon Mobile Zone",
  description: "Karachi's trusted mobile repair shop since 2007. Learn about our story, values, and why we're the #1 choice.",
};

const PHONE = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";
const WHATSAPP = "923152413134";

const values = [
  { icon: Shield, title: "Honesty First",       desc: "We diagnose first and give you a clear, upfront price. No hidden charges, no unnecessary repairs — ever." },
  { icon: Award,  title: "Quality Guaranteed",   desc: "Only high-quality OEM parts are used. Every repair comes with a written warranty." },
  { icon: Clock,  title: "Fast Turnaround",      desc: "We respect your time. Most repairs are completed in just 30–45 minutes." },
  { icon: Heart,  title: "Customer First",       desc: "Your satisfaction is our top priority. Your trust is our greatest reward." },
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="pill">About Us</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Karachi&apos;s Most <span className="text-[#9a5bff]">Trusted</span><br className="hidden md:block" /> Mobile Repair Shop
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            From a small shop in 2007 to Karachi&apos;s most trusted repair brand — with 17+ years of experience and 50,000+ phones repaired.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="pill">Our Story</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">From 2007 to Today</h2>
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

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <Image src="/logo.png" alt="Memon Mobile Zone" width={100} height={100} className="mx-auto mb-6 rounded-xl" />
              <div className="text-center mb-7">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Memon Mobile Zone</h3>
                <p className="text-[#9a5bff] font-semibold text-sm">Established Since 2007</p>
                <p className="text-gray-400 text-xs mt-1">2 Branches across Karachi</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Year Est.",       value: "2007"   },
                  { label: "Experience",      value: "17+ Yrs" },
                  { label: "Phones Repaired", value: "50K+"   },
                  { label: "Rating",          value: "4.9 ★"  },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#f3efff] rounded-xl p-4 text-center">
                    <p className="text-[#9a5bff] text-xl font-bold">{value}</p>
                    <p className="text-gray-500 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f3efff] border-y border-purple-100 py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <StatsCounter />
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#fafafa] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill">Our Values</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="info-card text-center">
                <div className="inline-flex p-3 rounded-xl bg-[#f3efff] mb-4">
                  <Icon size={22} className="text-[#9a5bff]" />
                </div>
                <h3 className="text-gray-900 font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-16 px-4 sm:px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="pill">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Why Memon Mobile Zone?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-[#9a5bff] shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
              <div className="inline-flex p-4 rounded-2xl bg-[#f3efff] mb-5">
                <Wrench size={34} className="text-[#9a5bff]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Fix Your Phone?</h3>
              <p className="text-gray-500 text-sm mb-7">Call us or WhatsApp for a free estimate. Open 1 PM – 11 PM daily.</p>
              <div className="flex flex-col gap-3">
                <a href={`tel:${PHONE}`} className="btn-primary justify-center">
                  <Phone size={15} /> Call: {PHONE_DISPLAY}
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
