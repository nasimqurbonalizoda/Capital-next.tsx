"use client";
import { useTranslations } from "next-intl";
import { FiBriefcase, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";

export default function Vacancy() {
  const t = useTranslations("Jobs");

  // Массивҳо барои осон кардани код
  const qualities = [0, 1, 2, 3, 4, 5];
  const expectations = [0, 1, 2, 3];
  const duties = [0, 1, 2, 3, 4];
  const offers = [0, 1, 2, 3];

  return (
    <main className="max-w-[900px] mx-auto px-6 py-16 font-sans text-[#1a202c]">
      
      {/* Header - Сарлавҳа */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">
          {t("supervisor_title")}
        </h1>
        <div className="w-24 h-1.5 bg-orange-400 mx-auto mb-8 rounded-full"></div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl font-bold text-sm">
            <FiBriefcase className="text-orange-500" /> {t("experience")}
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl font-bold text-sm">
            <FiMapPin className="text-orange-500" /> {t("location")}
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl font-bold text-sm">
            <FiClock className="text-orange-500" /> {t("schedule")}
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Бахши "О компании" */}
        <section className="bg-gray-50 p-8 rounded-[35px] border border-gray-100">
          <h2 className="text-xl font-black mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-orange-400 rounded-full"></span>
            {t("about_title")}
          </h2>
          <p className="leading-relaxed text-gray-700">{t("about_desc")}</p>
        </section>

        {/* Сифатҳои ҷустуҷӯшаванда */}
        <section>
          <p className="font-bold mb-6 text-lg">{t("search_desc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {qualities.map((i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                <FiCheckCircle className="text-orange-400 mt-1 shrink-0" />
                <span className="text-sm font-medium text-gray-600">{t(`qualities_list.${i}`)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Интизориҳо ва Уҳдадориҳо */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-xl font-black mb-6 uppercase tracking-wide">{t("expectations_title")}</h2>
            <ul className="space-y-4">
              {expectations.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm italic text-gray-700 leading-snug">
                  • {t(`expectations_list.${i}`)}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black mb-6 uppercase tracking-wide">{t("duties_title")}</h2>
            <ul className="space-y-4">
              {duties.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-bold text-gray-800">
                  • {t(`duties_list.${i}`)}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Мо пешниҳод мекунем */}
        <section className="bg-[#1a202c] text-white p-10 rounded-[45px] shadow-xl">
          <h2 className="text-2xl font-black mb-8 uppercase text-orange-400">{t("offers_title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((i) => (
              <div key={i} className="flex items-center gap-4 border-b border-gray-700 pb-4">
                <span className="text-orange-400 font-black text-xl">0{i+1}</span>
                <span className="font-bold text-sm tracking-wide">{t(`offers_list.${i}`)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Қисми муҳим (Важно) */}
        <section className="pt-10 border-t border-gray-100 text-center">
          <h2 className="text-xl font-black mb-4 uppercase text-red-500 italic">{t("important_title")}</h2>
          <p className="max-w-[600px] mx-auto text-gray-500 italic text-sm leading-relaxed">
            {t("important_desc")}
          </p>
        </section>
      </div>

    </main>
  );
}