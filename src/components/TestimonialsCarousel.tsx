"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Muhammad Ahmed",
    location: "Gulshan-e-Iqbal, Karachi",
    review: "I've been trusting Memon Mobile Zone for over 10 years. Screen repair and battery replacement — both done perfectly. Any phone issue gets resolved here.",
    rating: 5,
    device: "iPhone 14 Pro",
    initial: "MA",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Fatima Siddiqui",
    location: "Clifton, Karachi",
    review: "Got my iPhone screen replaced with a genuine part and received a 3-month warranty. The staff is very professional and polite. Highly recommended!",
    rating: 5,
    device: "iPhone 13",
    initial: "FS",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Usman Tariq",
    location: "Defence, Karachi",
    review: "I brought my water-damaged phone here as a last resort — and Alhamdulillah it got fixed! Amazing service at a fair price. Thank you Memon Mobile Zone!",
    rating: 5,
    device: "Samsung S23",
    initial: "UT",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Sara Khurram",
    location: "PECHS, Karachi",
    review: "Very honest and reliable shop. They diagnose first, give you a clear price, then start working. No hidden charges at all — their trust is their biggest asset.",
    rating: 5,
    device: "Xiaomi 13",
    initial: "SK",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Bilal Rashid",
    location: "North Nazimabad, Karachi",
    review: "Had my Samsung screen replaced and it looks exactly like the original. Done in just 30 minutes. These guys really know their craft!",
    rating: 5,
    device: "Samsung A54",
    initial: "BR",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Zainab Ali",
    location: "Nazimabad, Karachi",
    review: "Camera repair was done perfectly and they gave a warranty too. Fast service! Now my entire family brings their phones here for repairs.",
    rating: 5,
    device: "Oppo Reno 10",
    initial: "ZA",
    color: "from-fuchsia-500 to-purple-600",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"} />
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      className="!pb-12"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i} className="h-auto">
          <div className="card h-full flex flex-col p-6 relative overflow-hidden">
            {/* Subtle top gradient line */}
            <div
              className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${t.color}`}
            />

            {/* Quote mark */}
            <div
              className="absolute top-4 right-5 text-6xl font-serif leading-none pointer-events-none select-none"
              style={{ color: "rgba(154,91,255,0.08)" }}
            >
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex items-center justify-between mb-4">
              <Stars count={t.rating} />
              <span className="text-gray-300 text-[10px] font-bold border border-gray-100 bg-gray-50 px-2 py-0.5 rounded-lg">
                {t.device}
              </span>
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
              &ldquo;{t.review}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-extrabold text-xs shrink-0 shadow-sm`}>
                {t.initial}
              </div>
              <div>
                <p className="text-gray-900 text-sm font-bold leading-none">{t.name}</p>
                <p className="text-gray-400 text-[11px] mt-1">{t.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
