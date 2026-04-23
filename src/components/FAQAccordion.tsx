"use client";
import { useState } from "react";
import { ChevronDown, Wrench, DollarSign, Shield, Truck, HelpCircle } from "lucide-react";

const categories = [
  { id: "all",     label: "All",         icon: HelpCircle  },
  { id: "repair",  label: "Repairs",     icon: Wrench      },
  { id: "price",   label: "Pricing",     icon: DollarSign  },
  { id: "warranty",label: "Warranty",    icon: Shield      },
  { id: "service", label: "Service",     icon: Truck       },
];

const faqs = [
  {
    cat: "repair",
    q: "Which phone brands do you repair?",
    a: "We repair all major brands including iPhone, Samsung, Xiaomi, Oppo, Vivo, Realme, Tecno, Infinix, Huawei, Google Pixel, OnePlus, and Nokia. If your brand isn't listed, just WhatsApp or call us and we'll let you know.",
  },
  {
    cat: "repair",
    q: "How long does a repair take?",
    a: "Most repairs are completed in 30–45 minutes. Screen replacements, battery changes, and charging port repairs usually take around 30 minutes. Water damage or complex motherboard issues may take 1–2 days.",
  },
  {
    cat: "repair",
    q: "Can a water-damaged phone be repaired?",
    a: "In most cases, yes. The sooner you turn it off and contact us, the better the chances. We perform complete internal cleaning, corrosion removal, and component-level repair with a very high success rate.",
  },
  {
    cat: "warranty",
    q: "Do you provide warranty on repairs?",
    a: "Yes! We provide warranty on all repairs. Screen replacements come with a 3-month warranty, and battery replacements come with a 6-month warranty. If a defect occurs within the warranty period, we'll fix it for free.",
  },
  {
    cat: "warranty",
    q: "Do you use genuine / original parts?",
    a: "Yes, we use high-quality OEM-compatible parts that perform like original. For customers who specifically want Apple or Samsung certified original parts, those are available at an additional cost.",
  },
  {
    cat: "price",
    q: "What is the approximate cost for a screen repair?",
    a: "Cost varies by phone model. iPhone screens start from Rs. 5,000 and Samsung from Rs. 3,500. For an exact quote, just send us your phone model on WhatsApp — it's free. No hidden charges.",
  },
  {
    cat: "price",
    q: "What payment methods do you accept?",
    a: "We accept Cash, Bank Transfer, JazzCash, and EasyPaisa. No extra processing charges.",
  },
  {
    cat: "service",
    q: "Do you offer home or office service?",
    a: "Yes! We offer home and office repair service within Karachi. Just WhatsApp us your address and we'll come to you. Same-day service is available.",
  },
  {
    cat: "service",
    q: "Is my data safe during repair?",
    a: "Absolutely. Hardware repairs don't require any data access. For software issues, we recommend taking a backup first. We will never access your personal data without your explicit permission — your privacy is our responsibility.",
  },
  {
    cat: "service",
    q: "What if my phone can't be repaired?",
    a: "We'll give you an honest assessment and keep the diagnosis fee minimal. We never perform unnecessary repairs. Your time and money matter to us.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen]     = useState<number | null>(0);
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? faqs : faqs.filter((f) => f.cat === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => { setActive(id); setOpen(null); }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${
              active === id
                ? "text-white border-transparent shadow-md"
                : "bg-white text-gray-500 border-gray-200 hover:border-purple-200 hover:text-[#9a5bff]"
            }`}
            style={active === id ? { background: "linear-gradient(135deg,#9a5bff,#7c3aed)" } : {}}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* Accordion items */}
      <div className="space-y-3">
        {filtered.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                isOpen
                  ? "border-purple-200 shadow-md"
                  : "border-gray-100 bg-white hover:border-purple-100 hover:shadow-sm"
              }`}
              style={isOpen ? { background: "linear-gradient(135deg,#fdfcff,#f9f6ff)" } : { background: "#fff" }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center gap-4 px-5 py-5 text-left"
              >
                {/* Number badge */}
                <span
                  className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold transition-all duration-200"
                  style={
                    isOpen
                      ? { background: "linear-gradient(135deg,#9a5bff,#7c3aed)", color: "#fff" }
                      : { background: "#f3efff", color: "#9a5bff" }
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className={`flex-1 text-sm font-bold leading-snug ${isOpen ? "text-gray-900" : "text-gray-700"}`}>
                  {faq.q}
                </span>

                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#9a5bff] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isOpen ? "200px" : "0px" }}
              >
                {/* Left accent bar + answer */}
                <div className="ml-5 mr-5 mb-5 pl-4 border-l-2 border-[#9a5bff]/30">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-center text-gray-400 text-xs mt-6">
        Showing {filtered.length} of {faqs.length} questions
      </p>
    </div>
  );
}
