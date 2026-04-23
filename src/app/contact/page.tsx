import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Memon Mobile Zone",
  description: "Contact Memon Mobile Zone — call, WhatsApp, or visit our 2 branches in Karachi.",
};

const PHONE        = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";
const WHATSAPP     = "923152413134";

const infoCards = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: PHONE_DISPLAY,
    sub: "Instant response",
    bg: "from-violet-100 to-violet-50",
    ic: "text-violet-600",
    href: `tel:${PHONE}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    value: "Chat Instantly",
    sub: "Fastest reply",
    bg: "from-green-100 to-emerald-50",
    ic: "text-emerald-600",
    href: `https://wa.me/${WHATSAPP}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "1 PM – 11 PM",
    sub: "Mon–Sat · Sun 10 AM–12 AM",
    bg: "from-sky-100 to-sky-50",
    ic: "text-sky-600",
    href: undefined,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@memonmobilezone.pk",
    sub: "Reply within 24 hours",
    bg: "from-amber-100 to-amber-50",
    ic: "text-amber-600",
    href: "mailto:info@memonmobilezone.pk",
  },
];

const branches = [
  {
    name: "Branch 1 — Saddar",
    address: "Shop No LB-41, City Star Mall, Saddar, Karachi",
    hours: "Mon–Sat: 1:00 PM – 11:00 PM · Sun: 10:00 AM – 12:00 AM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.0099!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMzUuNiJF!5e0!3m2!1sen!2spk!4v1234567890",
  },
  {
    name: "Branch 2 — North Karachi",
    address: "Shop No 122, 1st Floor, Geo Mobile Market, North Karachi",
    hours: "Mon–Sat: 1:00 PM – 11:00 PM · Sun: 10:00 AM – 12:00 AM",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5!2d67.0580!3d24.9655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU3JzU1LjgiTiA2N8KwMDMnMjkuMCJF!5e0!3m2!1sen!2spk!4v1234567890",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-b border-gray-100 pt-28 pb-16 px-4 sm:px-6"
        style={{ background: "linear-gradient(145deg, #fdfcff 0%, #f9f7ff 40%, #f3f0ff 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(154,91,255,0.10) 0%, transparent 70%)", transform: "translate(25%,-40%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", transform: "translate(-30%,40%)" }}
        />

        <div className="relative max-w-4xl mx-auto">
          <span className="pill">Contact</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Get in{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)" }} className="bg-clip-text text-transparent">
              Touch
            </span>{" "}
            With Us
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Call, WhatsApp, or fill in the form — we&apos;ll get back to you quickly. Walk-ins welcome at both branches.
          </p>
        </div>
      </section>

      {/* ── INFO CARDS ────────────────────────────────────── */}
      <section
        className="py-12 px-4 sm:px-6"
        style={{ background: "linear-gradient(180deg,#ffffff 0%,#faf8ff 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map(({ icon: Icon, label, value, sub, bg, ic, href }) => {
              const inner = (
                <div className="info-card text-center group cursor-default h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={20} className={ic} />
                  </div>
                  <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-gray-900 font-extrabold text-sm mb-1">{value}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full no-underline">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 border-t border-gray-100" style={{ background: "#fafafa" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* ── Contact Form (wider) ── */}
            <div className="lg:col-span-3">
              <div
                className="rounded-3xl border border-purple-100 p-8 shadow-lg relative overflow-hidden"
                style={{ background: "linear-gradient(145deg,#ffffff 0%,#fdfbff 100%)" }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(154,91,255,0.06) 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: "linear-gradient(135deg,#9a5bff,#7c3aed)" }}
                    >
                      <MessageCircle size={18} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-gray-900 leading-none">Send Us a Message</h2>
                      <p className="text-gray-400 text-xs mt-0.5">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                  <ContactForm />

                  {/* Dev note */}
                  <div className="mt-5 p-4 bg-gradient-to-r from-violet-50 to-purple-50 border border-purple-100 rounded-xl">
                    <p className="text-[#9a5bff] text-xs font-bold mb-1">Developer Note</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Email requires EmailJS setup. Open{" "}
                      <code className="text-[#9a5bff] font-mono bg-purple-50 px-1 rounded">src/components/ContactForm.tsx</code>{" "}
                      and replace SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              {/* Call card */}
              <div
                className="rounded-3xl p-6 text-center border border-purple-100 shadow-lg relative overflow-hidden"
                style={{ background: "linear-gradient(145deg,#fdfcff,#f5f0ff)" }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(154,91,255,0.08) 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
                />
                <div
                  className="inline-flex p-3.5 rounded-2xl mb-4 shadow-md"
                  style={{ background: "linear-gradient(135deg,#9a5bff,#7c3aed)" }}
                >
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-gray-900 font-extrabold text-base mb-1">Fastest Way to Reach Us</h3>
                <p className="text-gray-500 text-xs mb-5 leading-relaxed">Call or WhatsApp for an instant response during working hours</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${PHONE}`}
                    className="btn-primary justify-center text-sm"
                  >
                    <Phone size={14} /> Call: {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green justify-center text-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Branch cards */}
              {branches.map(({ name, address, hours, map }) => (
                <div
                  key={name}
                  className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200"
                >
                  <iframe
                    src={map}
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={name}
                  />
                  <div className="px-5 py-4 bg-white">
                    <p
                      className="text-xs font-extrabold uppercase tracking-widest mb-1"
                      style={{ backgroundImage: "linear-gradient(135deg,#9a5bff,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    >
                      {name}
                    </p>
                    <p className="text-gray-800 font-semibold text-sm mb-1.5">{address}</p>
                    <div className="flex items-start gap-1.5 text-gray-400 text-[11px]">
                      <Clock size={10} className="mt-0.5 shrink-0" />
                      <span>{hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
