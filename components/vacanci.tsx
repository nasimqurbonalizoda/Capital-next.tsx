"use client";
import { useTranslations } from "next-intl";

export default function Vacanci() {
  const t = useTranslations("Vacancies");
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-20">
      <h2 className="text-4xl font-black text-black text-center mb-12">{t("title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative group">
          <span className="bg-[#1a202c] text-white text-[10px] px-3 py-1 rounded-lg absolute top-8 left-8">
            {t("experience")}
          </span>
          <h3 className="text-2xl font-black mt-10 mb-4 text-[#1a202c]">Торговый представитель</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">Супервайзер отдела продаж, Душанбе и РРП...</p>
          <button className="text-orange-500 font-bold flex items-center gap-2">
            {t("more")} <span>→</span>
          </button>
        </div>
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative group">
          <span className="bg-[#1a202c] text-white text-[10px] px-3 py-1 rounded-lg absolute top-8 left-8">
            {t("experience")}
          </span>
          <h3 className="text-2xl font-black mt-10 mb-4 text-[#1a202c]">Торговый представитель</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">Супервайзер отдела продаж, Душанбе и РРП...</p>
          <button className="text-orange-500 font-bold flex items-center gap-2">
            {t("more")} <span>→</span>
          </button>
        </div>
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative group">
          <span className="bg-[#1a202c] text-white text-[10px] px-3 py-1 rounded-lg absolute top-8 left-8">
            {t("experience")}
          </span>
          <h3 className="text-2xl font-black mt-10 mb-4 text-[#1a202c]">Торговый представитель</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">Супервайзер отдела продаж, Душанбе и РРП...</p>
          <button className="text-orange-500 font-bold flex items-center gap-2">
            {t("more")} <span>→</span>
          </button>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold">
          {t("all_vacancies")} →
        </button>
      </div>
    </section>
  );
}