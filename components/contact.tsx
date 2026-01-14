"use client";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("ContactForm");

  return (
    <section className="max-w-[1350px] mx-auto px-6 py-10">
      <div className="bg-[#eef1f4] rounded-[50px] p-10 md:p-16 flex flex-col lg:flex-row gap-10">
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-black text-[#0f172a] mb-12 flex items-center gap-4">
            <span className="text-gray-400 text-3xl">→</span> {t("title")}
          </h2>
          
          <form className="space-y-5">
            <input 
              type="text" 
              placeholder={t("name")} 
              className="w-full p-6 rounded-3xl bg-white outline-none  text-gray-700" 
            />
            <input 
              type="text" 
              placeholder={t("company")} 
              className="w-full p-6 rounded-3xl bg-white outline-none  text-gray-700" 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                type="email" 
                placeholder={t("email")} 
                className="p-6 rounded-3xl bg-white outline-none  text-gray-700" 
              />
              <input 
                type="tel" 
                placeholder={t("phone")} 
                className="p-6 rounded-3xl bg-white outline-none  text-gray-700" 
              />
            </div>

            <div className="bg-white p-6 rounded-3xl flex items-center gap-5 cursor-pointer border border-transparent hover:border-orange-400 transition-all">
              <div className="bg-orange-500 w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl">
                ↑
              </div>
              <div>
                <p className="font-bold text-[#0f172a]">{t("upload")}</p>
                <p className="text-xs text-gray-400">{t("upload_limit")}</p>
              </div>
            </div>

            <button className="w-full bg-[#1e293b] text-white py-6 rounded-3xl font-bold text-lg hover:bg-[#0f172a] transition-all  active:scale-95">
              {t("send")}
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          
          <div className="relative w-full h-[450px] rounded-[40px] overflow-hidden ">
            <img 
              src="/Frame 1261154859.png" 
              alt="Map" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white  "></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white py-6 px-8 rounded-[30px] flex items-center justify-center gap-3 ">
              <span className="text-gray-400">✉</span>
              <span className="font-bold text-[#0f172a]">contact@company.com</span>
            </div>
            <div className="bg-white py-6 px-8 rounded-[30px] flex items-center justify-center gap-3 ">
              <span className="text-gray-400">📞</span>
              <span className="font-bold text-[#0f172a]">+992 911 20 75 79</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}