"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2, User, Phone, Mail, Smartphone, MessageSquare } from "lucide-react";

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
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

type Status = "idle" | "loading" | "success" | "error";

const WHATSAPP = "923152413134";

function Field({
  icon: Icon,
  label,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
        <Icon size={11} className="text-[#9a5bff]" />
        {label}
        {required && <span className="text-[#9a5bff]">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-gray-50 border border-gray-200 focus:border-[#9a5bff] focus:bg-white focus:ring-3 focus:ring-[#9a5bff]/10 text-gray-900 placeholder:text-gray-400 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200";

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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-10 gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}
        >
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className="text-gray-900 font-extrabold text-lg">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          We&apos;ve received your message and will get back to you within a few hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[#9a5bff] text-xs font-bold underline mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field icon={User} label="Full Name" required>
          <input type="text" name="from_name" required placeholder="Muhammad Ahmed" className={inputClass} />
        </Field>
        <Field icon={Phone} label="Phone / WhatsApp" required>
          <input type="tel" name="phone" required placeholder="+92-300-0000000" className={inputClass} />
        </Field>
      </div>

      <Field icon={Mail} label="Email Address" required>
        <input type="email" name="from_email" required placeholder="your@email.com" className={inputClass} />
      </Field>

      <Field icon={Smartphone} label="Phone Model">
        <input type="text" name="phone_model" placeholder="e.g. iPhone 14, Samsung S23, Xiaomi 13" className={inputClass} />
      </Field>

      <Field icon={MessageSquare} label="Issue / Message" required>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your phone issue in detail..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle size={17} className="text-red-500 mt-0.5 shrink-0" />
          <p className="text-red-600 text-sm">
            Failed to send. Please try{" "}
            <a href={`https://wa.me/${WHATSAPP}`} className="underline font-bold">WhatsApp</a>{" "}
            instead, or check the EmailJS configuration.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg,#9a5bff,#7c3aed)", boxShadow: "0 4px 14px rgba(124,58,237,0.30)" }}
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
