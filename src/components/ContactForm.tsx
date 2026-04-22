"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

/*
 * ── EmailJS Setup ──────────────────────────────────────────────────────────
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Add an Email Service (Gmail recommended) → copy the Service ID
 * 3. Create an Email Template → add variables: {{from_name}}, {{from_email}},
 *    {{phone}}, {{phone_model}}, {{message}} → copy the Template ID
 * 4. Go to Account → API Keys → copy your Public Key
 * 5. Replace the three constants below with your actual IDs
 * ──────────────────────────────────────────────────────────────────────────
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white border border-gray-200 focus:border-[#9a5bff] focus:ring-2 focus:ring-[#9a5bff]/10 text-gray-900 placeholder:text-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            Full Name *
          </label>
          <input type="text" name="from_name" required placeholder="Muhammad Ahmed" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            Phone / WhatsApp *
          </label>
          <input type="tel" name="phone" required placeholder="+92-300-0000000" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#9a9ac0] mb-2 uppercase tracking-wide">
          Email Address *
        </label>
        <input type="email" name="from_email" required placeholder="your@email.com" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#9a9ac0] mb-2 uppercase tracking-wide">
          Phone Model
        </label>
        <input type="text" name="phone_model" placeholder="e.g. iPhone 14, Samsung S23, Xiaomi 13" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#9a9ac0] mb-2 uppercase tracking-wide">
          Issue / Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your phone issue in detail..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-4">
          <CheckCircle size={17} className="text-emerald-400 mt-0.5 shrink-0" />
          <p className="text-emerald-400 text-sm">
            Message successfully sent! We&apos;ll get back to you within a few hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/25 rounded-xl p-4">
          <AlertCircle size={17} className="text-red-400 mt-0.5 shrink-0" />
          <p className="text-red-400 text-sm">
            Failed to send. Please try{" "}
            <a href="https://wa.me/923000000000" className="underline font-medium">
              WhatsApp
            </a>{" "}
            instead, or check the EmailJS configuration.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 bg-[#9a5bff] hover:bg-[#7c3aed] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(154,91,255,0.35)] text-sm"
      >
        {status === "loading" ? (
          <><Loader2 size={17} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={17} /> Send Message</>
        )}
      </button>
    </form>
  );
}
