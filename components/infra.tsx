"use client";
import { useTranslations } from "next-intl";

export default function Infra() {
  const t = useTranslations("Stats");

  const branches = ["Турсунзаде", "Истаравшан", "Пянджакент", "Исфара", "Бохтар", "Восеъ", "Гарм"];
  return (
    <section className="max-w-[1350px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <div className="lg:col-span-4 grid grid-cols-1 gap-6">
        <div className="bg-[#f8f9fb] p-8 rounded-[32px] flex flex-col gap-4 relative overflow-hidden">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center  text-2xl">
            🕒
          </div>
          <div>
            <h3 className="text-3xl font-black text-gray-900">{t("years_title")}</h3>
            <p className="text-gray-500 text-sm mt-1">{t("years_text")}</p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 w-32 h-32 bg-gray-400 rounded-full -mr-10 -mb-10"></div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#f8f9fb] p-8 rounded-[32px] flex flex-col gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center  text-2xl">
              👥
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900">{t("employees_count")}</h3>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider leading-tight">
                {t("employees_text")}
              </p>
            </div>
          </div>

          <div className="bg-[#f8f9fb] p-8 rounded-[32px] flex flex-col gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center  text-2xl">
              🚚
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900">{t("delivery_volume")}</h3>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider leading-tight">
                {t("delivery_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 bg-[#f8f9fb] p-10 rounded-[40px] relative overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center text-8xl font-black">
          MAP
        </div>
        <div className="relative z-10">
          <h4 className="text-center font-bold text-gray-900 mb-10 text-lg">{t("offices_title")}</h4>
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl  border border-white/50 min-w-[200px] text-center">
              <div className="text-orange-500 mb-2 flex justify-center">📍</div>
              <h5 className="font-black text-gray-900 text-xl">{t("dushanbe")}</h5>
              <p className="text-gray-400 text-xs mt-1">+992 911 20 75 79</p>
              <p className="text-gray-300 text-[10px] mt-1 italic">улица М. Назаршоева 143</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl  border border-white/50 min-w-[200px] text-center">
              <div className="text-orange-500 mb-2 flex justify-center">📍</div>
              <h5 className="font-black text-gray-900 text-xl">{t("khujand")}</h5>
              <p className="text-gray-400 text-xs mt-1">+992 911 20 75 79</p>
              <p className="text-gray-300 text-[10px] mt-1 italic">17 микрорайон, строение 2</p>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-gray-900 mb-6 text-sm">{t("branches_title")}</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {branches.map((elem) => (
                <span key={elem} className="bg-white px-5 py-2 rounded-full text-[12px] font-bold text-gray-600  border border-gray-50">
                  {elem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}