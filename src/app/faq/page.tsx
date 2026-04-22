import Link from "next/link";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "FAQ | Memon Mobile Zone",
  description: "Frequently asked questions about mobile repair services at Memon Mobile Zone, Karachi.",
};

const PHONE = "+923152413134";
const PHONE_DISPLAY = "0315-2413134";

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <span className="pill">FAQ</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Frequently Asked <span className="text-[#9a5bff]">Questions</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl">
            Find answers to the most common questions about our mobile repair services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#fafafa] border-t border-gray-100 py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-[#f3efff] mb-6">
            <MessageCircle size={32} className="text-[#9a5bff]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h2>
          <p className="text-gray-500 text-sm mb-8">
            Can&apos;t find what you&apos;re looking for? Call us or send a WhatsApp message — we&apos;ll respond quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${PHONE}`} className="btn-primary justify-center">
              <Phone size={15} /> Call: {PHONE_DISPLAY}
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
