"use client";
import { useTranslations } from "next-intl";

export default function Map() {
  const t = useTranslations("MapSection");

  const data = [
    { label: t("sogd"), akb: "2170", okb: "2110" },
    { label: t("rrp_khatlon"), akb: "5860", okb: "6700" },
    { label: t("gbao"), akb: "220", okb: "360" },
  ];

  return (
    <section className="max-w-[1350px] mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4 relative inline-block uppercase">
          {t("title")}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-orange-500 rounded"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className="space-y-12">
          {data.map((elem, index) => (
            <div key={index} className="relative">
              <h3 className="text-2xl font-black text-gray-200 mb-4 uppercase tracking-wider">
                {elem.label}
              </h3>
              <div className="flex items-center gap-12">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gray-900">{elem.akb}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    {t("akb")}
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-gray-100"></div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gray-900">{elem.okb}</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    {t("okb")}
                  </span>
                </div>
              </div>
              <div className="w-20 h-[2px] bg-orange-400 mt-6 opacity-60"></div>
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
           <img src="../Group 2.png" alt="Map" className="w-full h-full object-contain" />
           <div className="absolute top-1/4 left-1/2 -translate-x-10 flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              <span className="text-[10px] font-bold bg-white px-2 py-1 rounded shadow-sm">Худжанд</span>
           </div>
           <div className="absolute bottom-1/3 left-1/3 flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              <span className="text-[10px] font-bold bg-white px-2 py-1 rounded shadow-sm">Душанбе</span>
           </div>
        </div>

      </div>
    </section>
  );
}