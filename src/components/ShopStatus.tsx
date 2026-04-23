"use client";
import { useEffect, useState } from "react";

interface Status {
  isOpen: boolean;
  label: string;
}

function computeStatus(): Status {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const t = now.getHours() * 60 + now.getMinutes();

  if (day === 0) {
    // Sunday — open all day: 10:00 AM – 11:59 PM
    const isOpen = t >= 10 * 60 && t < 24 * 60;
    return {
      isOpen,
      label: isOpen ? "Open Today · 10:00 AM – 12:00 AM" : "Closed · Opens at 10:00 AM",
    };
  }

  // Mon–Sat: 1:00 PM – 11:00 PM
  const isOpen = t >= 13 * 60 && t < 23 * 60;
  return {
    isOpen,
    label: isOpen ? "Open Today · 1:00 PM – 11:00 PM" : "Closed · Opens at 1:00 PM",
  };
}

export default function ShopStatus() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return status.isOpen ? (
    <div className="status-badge-open">
      <span className="status-dot bg-green-500 animate-pulse" />
      {status.label}
    </div>
  ) : (
    <div className="status-badge-closed">
      <span className="status-dot bg-red-500" />
      {status.label}
    </div>
  );
}
