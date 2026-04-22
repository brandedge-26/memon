"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 17, suffix: "+", label: "Years Experience", prefix: "" },
  { value: 50000, suffix: "+", label: "Phones Repaired", prefix: "" },
  { value: 4.9, suffix: "", label: "Customer Rating", prefix: "★ " },
  { value: 100, suffix: "%", label: "Warranty on Repairs", prefix: "" },
];

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 50;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isDecimal]);

  const display = isDecimal ? count.toFixed(1) : count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#9a5bff] mb-1.5">
        {prefix}{display}{suffix}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, i) => (
        <div key={i}>
          <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
          <p className="text-gray-500 text-sm text-center">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
