import Link from "next/link";
import { Phone, ArrowRight, MessageCircle, Clock, Shield, Award } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "FAQ | Memon Mobile Zone",
  description: "Frequently asked questions about mobile repair services at Memon Mobile Zone, Karachi.",
};

const PHONE        = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";
const WHATSAPP     = "923152413134";

export default function FAQPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-gray-100 pt-28 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(145deg, #fdfcff 0%, #f9f7ff 40%, #f3f0ff 100%)" }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(154,91,255,0.10) 0%, transparent 70%)", transform: "translate(25%,-40%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", transform: "translate(-30%,40%)" }}
        />

        <div className="relative max-w-3xl mx-auto">
          <span className="pill">FAQ</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Frequently Asked{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)" }} className="bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Find instant answers to the most common questions about our repair services, pricing, warranty, and more.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Clock,   text: "30–45 Min Repairs"   },
              { icon: Shield,  text: "Warranty on Every Job" },
              { icon: Award,   text: "17+ Years Experience"  },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white border border-purple-100 rounded-xl px-4 py-2 shadow-sm">
                <div className="w-7 h-7 bg-gradient-to-br from-violet-100 to-purple-50 rounded-lg flex items-center justify-center">
                  <Icon size={13} className="text-[#9a5bff]" />
                </div>
                <span className="text-gray-700 text-xs font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ─────────────────────────────────── */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, #faf8ff 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ──────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-6 border-t border-gray-100"
        style={{ background: "linear-gradient(145deg, #fdf9ff 0%, #f5f0ff 50%, #ede8ff 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="inline-flex p-4 rounded-2xl mb-6 shadow-lg"
            style={{ background: "linear-gradient(135deg,#9a5bff,#7c3aed)" }}
          >
            <MessageCircle size={30} className="text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Call us or send a WhatsApp message — we&apos;ll respond quickly.
          </p>

          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 bg-white border border-purple-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,#9a5bff,#7c3aed)" }}
              >
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-extrabold text-sm">Call Us</p>
                <p className="text-[#9a5bff] text-xs font-bold mt-0.5">{PHONE_DISPLAY}</p>
                <p className="text-gray-400 text-[11px] mt-0.5">Mon–Sat · 1 PM – 11 PM</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-green-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,#25d366,#1aab54)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <p className="text-gray-900 font-extrabold text-sm">WhatsApp</p>
                <p className="text-green-600 text-xs font-bold mt-0.5">Chat Instantly</p>
                <p className="text-gray-400 text-[11px] mt-0.5">Fastest response</p>
              </div>
            </a>
          </div>

          <Link href="/contact" className="btn-outline justify-center inline-flex">
            Send a Message <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
