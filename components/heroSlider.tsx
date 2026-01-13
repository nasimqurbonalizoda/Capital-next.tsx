"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const t = useTranslations("HomePage");

  const slides = [
    { 
      title: t("slide1_title"), 
      image: "/unsplash_nbRgZltoOck.png" 
    },
    { 
      title: t("slide2_title"), 
      image: "../image 27.png"           
    },
    { 
      title: t("slide3_title"), 
      image: "../image 26.png"           
    },
  ];

  return (
    <section className="w-full h-[500px] md:h-[600px] relative overflow-hidden rounded-3xl mt-4 max-w-[1350px] mx-auto px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-full rounded-3xl"
      >
        {slides.map((elem, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gray-900">
              <img 
                src={elem.image} 
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover opacity-50" 
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                  «Капитал-Т»
                </h1>
                <div className="w-24 h-1 bg-orange-500 mb-6"></div>
                <p className="text-lg md:text-2xl font-medium mb-10 max-w-2xl">
                  {elem.title}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg">
                    {t("btn_partner")}
                  </button>
                  <button className="border-2 border-orange-500/50 hover:border-orange-500 text-white px-8 py-3 rounded-full font-bold transition backdrop-blur-sm">
                    {t("btn_contact")}
                  </button>
                </div>

                <div className="absolute bottom-10 flex gap-12 text-left hidden md:flex">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold">9500</span>
                    <div className="text-[10px] leading-tight uppercase opacity-80">
                      {t("stats_total")} <br /> 
                      <span className="text-orange-400">{t("stats_sub")}</span>
                    </div>
                  </div>
                  <div className="w-[1px] h-10 bg-white/30"></div>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold">8250</span>
                    <div className="text-[10px] leading-tight uppercase opacity-80">
                      {t("stats_active")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #9ca3af !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #f97316 !important;
          width: 12px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}