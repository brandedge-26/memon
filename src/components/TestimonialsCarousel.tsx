"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Muhammad Ahmed",
    location: "Gulshan-e-Iqbal, Karachi",
    review: "I've been trusting Memon Mobile Zone for over 10 years. Screen repair and battery replacement — both done perfectly. Any phone issue gets resolved here.",
    rating: 5,
    device: "iPhone 14 Pro",
    initial: "MA",
  },
  {
    name: "Fatima Siddiqui",
    location: "Clifton, Karachi",
    review: "Got my iPhone screen replaced with a genuine part and received a 3-month warranty. The staff is very professional and polite. Highly recommended!",
    rating: 5,
    device: "iPhone 13",
    initial: "FS",
  },
  {
    name: "Usman Tariq",
    location: "Defence, Karachi",
    review: "I brought my water-damaged phone here as a last resort — and Alhamdulillah it got fixed! Amazing service at a fair price. Thank you Memon Mobile Zone!",
    rating: 5,
    device: "Samsung S23",
    initial: "UT",
  },
  {
    name: "Sara Khurram",
    location: "PECHS, Karachi",
    review: "Very honest and reliable shop. They diagnose first, give you a clear price, then start working. No hidden charges at all — their trust is their biggest asset.",
    rating: 5,
    device: "Xiaomi 13",
    initial: "SK",
  },
  {
    name: "Bilal Rashid",
    location: "North Nazimabad, Karachi",
    review: "Had my Samsung screen replaced and it looks exactly like the original. Done in just 30 minutes. These guys really know their craft!",
    rating: 5,
    device: "Samsung A54",
    initial: "BR",
  },
  {
    name: "Zainab Ali",
    location: "Nazimabad, Karachi",
    review: "Camera repair was done perfectly and they gave a warranty too. Fast service! Now my entire family brings their phones here for repairs.",
    rating: 5,
    device: "Oppo Reno 10",
    initial: "ZA",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-200"} />
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
          <div className="card h-full flex flex-col p-6 bg-white">
            <div className="flex items-start justify-between mb-4">
              <Stars count={t.rating} />
              <Quote size={18} className="text-[#9a5bff]/25" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
              &ldquo;{t.review}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#9a5bff]/10 border border-[#9a5bff]/20 flex items-center justify-center text-[#9a5bff] font-bold text-xs shrink-0">
                {t.initial}
              </div>
              <div>
                <p className="text-gray-900 text-sm font-semibold leading-none">{t.name}</p>
                <p className="text-gray-400 text-xs mt-1">{t.location}</p>
              </div>
              <span className="ml-auto text-gray-400 text-xs border border-gray-100 bg-gray-50 px-2 py-0.5 rounded-md shrink-0">
                {t.device}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
