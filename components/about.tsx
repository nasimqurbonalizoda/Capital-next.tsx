"use client";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  const goals = [
    { text: t("goal_1") },
    { text: t("goal_2") },
    { text: t("goal_3") },
  ];

  return (
    <section className="max-w-[1350px] mx-auto px-6 py-16 text-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          {t("title")}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded"></span>
        </h2>
        <p className="max-w-3xl mx-auto mt-6 text-lg font-medium text-gray-700">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <h3 className="text-orange-500 text-xl font-bold mb-4">{t("values_title")}</h3>
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {t("values_text")}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-orange-500 text-xl font-bold mb-4">{t("goals_title")}</h3>
            <div className="space-y-4">
              {goals.map((elem, index) => (
                <div key={index} className="flex items-center gap-4 bg-white border border-gray-50 p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
                    <img src="../map.png" alt="" />
                  </div>
                  <span className="font-bold text-gray-800">{elem.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          {t("footer_text")}
        </p>
      </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-full">
          <div className="col-span-2 bg-gray-200 rounded-3xl overflow-hidden relative">
             <img src="../unsplash_U2BI3GMnSSE.png" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
             <img src="../unsplash_pYlBAu3de0w.png" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden relative">
             <img src="../unsplash_nC6CyrVBtkU.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}