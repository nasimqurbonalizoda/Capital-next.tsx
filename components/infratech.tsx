"use client";
import { useTranslations } from "next-intl";

export default function Infratech() {
  const t = useTranslations("Stats");

  // Массив бо истифода аз тарҷумаҳо
  const secondaryStats = [
    { count: t("clients_count"), desc: t("clients_desc"), icon: "🧩" },
    { count: t("contracts_count"), desc: t("contracts_desc"), icon: "🤝" },
    { count: t("cities_count"), desc: t("cities_desc"), icon: "🗺️" },
  ];

  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10 font-sans">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-black text-[#1a202c] mb-4 tracking-tight">
          {t("title_infra")} 
        </h2>
        <div className="w-14 h-[3px] bg-orange-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        
        {/* Блоки Складҳо */}
        <div className="lg:col-span-3 bg-[#fcfdfe] border border-gray-50 p-12 rounded-[45px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm text-4xl">
             🏠
          </div>
          <h3 className="text-4xl font-black text-[#1a202c] mb-2 tracking-tighter">
            {t("warehouse_area")} {/* Истифодаи калид */}
          </h3>
          <p className="text-gray-400 text-[12px] font-bold uppercase tracking-[2px]">
            {t("warehouse_desc")} {/* Истифодаи калид */}
          </p>
        </div>

        {/* Блоки Автопарк */}
        <div className="lg:col-span-3 bg-[#fcfdfe] border border-gray-50 p-12 rounded-[45px] flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm text-4xl">
             🚚
          </div>
          <h3 className="text-4xl font-black text-[#1a202c] mb-2 tracking-tighter">
            {t("fleet_count")}
          </h3>
          <p className="text-gray-400 text-[12px] font-bold uppercase tracking-[2px]">
            {t("fleet_desc")}
          </p>
        </div>

        {/* Блокҳои хурди поёнӣ */}
        {secondaryStats.map((stat, index) => (
          <div key={index} className="lg:col-span-2 bg-[#fcfdfe] border border-gray-50 p-8 rounded-[35px] flex items-center justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <h4 className="text-3xl font-black text-[#1a202c]">{stat.count}</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-1">
                {stat.desc}
              </p>
            </div>
            <span className="text-3xl">{stat.icon}</span>
          </div>
        ))}

      </div>
    </section>
  );
}