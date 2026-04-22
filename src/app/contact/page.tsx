import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Memon Mobile Zone",
  description: "Contact Memon Mobile Zone — call, WhatsApp, or visit our 2 branches in Karachi.",
};

const PHONE = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";
const WHATSAPP = "923152413134";

const contactCards = [
  { icon: Phone,  title: "Call / WhatsApp", lines: [PHONE_DISPLAY, "Quick response guaranteed"] },
  { icon: Clock,  title: "Working Hours",   lines: ["Daily: 1:00 PM – 11:00 PM", "7 days a week"] },
  { icon: Mail,   title: "Email Us",        lines: ["info@memonmobilezone.pk", "Reply within 24 hours"] },
  { icon: MapPin, title: "2 Branches",      lines: ["Saddar – City Star Mall", "North Karachi – Geo Mobile Market"] },
];

const branches = [
  {
    name: "Branch 1 — Saddar",
    address: "Shop No LB-41, City Star Mall, Saddar, Karachi",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.0099!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMzUuNiJF!5e0!3m2!1sen!2spk!4v1234567890",
  },
  {
    name: "Branch 2 — North Karachi",
    address: "Shop No 122, 1st Floor, Geo Mobile Market, North Karachi",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5!2d67.0580!3d24.9655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU3JzU1LjgiTiA2N8KwMDMnMjkuMCJF!5e0!3m2!1sen!2spk!4v1234567890",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="pill">Contact</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Get in <span className="text-[#9a5bff]">Touch</span> With Us
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Call, WhatsApp, or fill in the form — we&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-white py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="info-card text-center">
                <div className="inline-flex p-3 rounded-xl bg-[#f3efff] mb-4">
                  <Icon size={18} className="text-[#9a5bff]" />
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-1.5">{title}</h3>
                {lines.map((line, j) => (
                  <p key={j} className="text-gray-500 text-xs leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Call Card + Maps */}
      <section className="bg-[#fafafa] border-t border-gray-100 py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-1.5">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-7">
                Fill in the form and we&apos;ll respond within 24 hours.
              </p>
              <ContactForm />
              <div className="mt-5 p-4 bg-[#f3efff] border border-purple-100 rounded-xl">
                <p className="text-[#9a5bff] text-xs font-semibold mb-1">Developer Note</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Email requires EmailJS setup. Open{" "}
                  <code className="text-[#9a5bff]">src/components/ContactForm.tsx</code> and replace
                  SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY.
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-5">
              {/* Call card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-7 text-center shadow-sm">
                <div className="inline-flex p-4 rounded-2xl bg-[#f3efff] mb-4">
                  <Phone size={28} className="text-[#9a5bff]" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Fastest Way to Reach Us</h3>
                <p className="text-gray-500 text-sm mb-5">Call or WhatsApp — instant response during working hours</p>
                <div className="flex flex-col gap-3">
                  <a href={`tel:${PHONE}`} className="btn-primary justify-center">
                    <Phone size={14} /> Call: {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green justify-center"
                  >
                    <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Branch maps */}
              {branches.map(({ name, address, map }) => (
                <div key={name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  <iframe
                    src={map}
                    width="100%"
                    height="160"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={name}
                  />
                  <div className="px-5 py-4">
                    <p className="text-[#9a5bff] text-xs font-bold uppercase tracking-wide mb-0.5">{name}</p>
                    <p className="text-gray-700 font-semibold text-sm">{address}</p>
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
