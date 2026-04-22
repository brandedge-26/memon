"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which phone brands do you repair?",
    a: "We repair all major brands including iPhone, Samsung, Xiaomi, Oppo, Vivo, Realme, Tecno, Infinix, Huawei, Google Pixel, OnePlus, and Nokia. If your brand isn't listed, just WhatsApp or call us and we'll let you know.",
  },
  {
    q: "How long does a repair take?",
    a: "Most repairs are completed in 30–45 minutes. Screen replacements, battery changes, and charging port repairs usually take around 30 minutes. Water damage or complex motherboard issues may take 1–2 days.",
  },
  {
    q: "Do you provide warranty on repairs?",
    a: "Yes! We provide warranty on all repairs. Screen replacements come with a 3-month warranty, and battery replacements come with a 6-month warranty. If a defect occurs within the warranty period, we'll fix it for free.",
  },
  {
    q: "Do you use genuine / original parts?",
    a: "Yes, we use high-quality OEM-compatible parts that perform like original. For customers who specifically want Apple or Samsung certified original parts, those are available at an additional cost.",
  },
  {
    q: "What is the approximate cost for a screen repair?",
    a: "Cost varies by phone model. iPhone screens start from Rs. 5,000 and Samsung from Rs. 3,500. For an exact quote, just send us your phone model on WhatsApp — it's free. No hidden charges.",
  },
  {
    q: "Do you offer home or office service?",
    a: "Yes! We offer home and office repair service within Karachi. Just WhatsApp us your address and we'll come to you. Same-day service is available.",
  },
  {
    q: "Can a water-damaged phone be repaired?",
    a: "In most cases, yes. The sooner you turn it off and contact us, the better the chances. We perform complete internal cleaning, corrosion removal, and component-level repair with a very high success rate.",
  },
  {
    q: "Is my data safe during repair?",
    a: "Absolutely. Hardware repairs don't require any data access. For software issues, we recommend taking a backup first. We will never access your personal data without your explicit permission — your privacy is our responsibility.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, Bank Transfer, JazzCash, and EasyPaisa. No extra processing charges.",
  },
  {
    q: "What if my phone can't be repaired?",
    a: "We'll give you an honest assessment and keep the diagnosis fee minimal. We never perform unnecessary repairs. Your time and money matter to us.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl overflow-hidden border transition-all duration-200 ${
            open === i ? "border-[#9a5bff]/30 bg-white shadow-sm" : "border-gray-100 bg-white hover:border-purple-100"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className={`text-sm font-semibold leading-snug ${open === i ? "text-gray-900" : "text-gray-700"}`}>
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-[#9a5bff] transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48" : "max-h-0"}`}>
            <div className="px-6 pb-5">
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
