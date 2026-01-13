"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SinglePage() {
    const t = useTranslations("News");

    return (
        <main className="max-w-[1350px] mx-auto px-4 md:px-6 py-6 md:py-16 font-sans">
            <div className="relative w-full h-[250px] md:h-[550px] bg-gray-100 rounded-[30px] md:rounded-[55px] mb-10 md:mb-16 overflow-hidden shadow-xl">
                <Image
                    src="/image 19 (3).png"
                    alt="Featured Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="text-center mb-8 md:mb-12">
                <h1 className="text-2xl md:text-5xl font-black text-[#1a202c] leading-tight uppercase tracking-tighter">
                    {t("featured_title")}
                </h1>
                <div className="w-16 md:w-24 h-1 md:h-1.5 bg-orange-400 mx-auto mt-4 md:mt-6 mb-3 rounded-full"></div>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{t("date")}</p>
            </div>

            <div className="max-w-[800px] mx-auto space-y-12 md:space-y-16 text-[#1a202c]">
                <section className="group">
                    <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-wider flex items-center gap-3">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        {t("about_title")}
                    </h2>
                    <div className="space-y-4 md:space-y-6 text-[15px] md:text-[17px] leading-relaxed text-gray-700 font-medium text-justify">
                        <p className="first-letter:text-4xl first-letter:font-black first-letter:text-orange-400 first-letter:mr-1">
                            {t("single_p1")}
                        </p>
                        <p>{t("single_p2")}</p>
                        <p>{t("single_p3")}</p>
                    </div>
                </section>

                <section className="bg-gray-50 p-6 md:p-10 rounded-[30px] md:rounded-[45px] border border-gray-100 shadow-sm">
                    <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-wider text-orange-500">
                        {t("values_title")}
                    </h2>
                    <p className="text-[15px] md:text-[17px] leading-relaxed text-gray-600 italic">
                        "{t("values_desc")}"
                    </p>
                </section>

                <section>
                    <h2 className="text-lg md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-wider">
                        {t("goals_title")}
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 md:gap-6">
                        {[1, 2, 3].map((id) => (
                            <li key={id} className="flex items-start gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                <span className="text-2xl md:text-3xl font-black text-orange-400">0{id}</span>
                                <span className="text-[15px] md:text-lg font-bold text-gray-800 pt-1">
                                    {t(`goal_${id}`)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <footer className="pt-10 border-t border-gray-100">
                    <p className="text-[13px] md:text-[15px] text-gray-400 font-medium leading-relaxed italic text-center px-4">
                        {t("footer_note")}
                    </p>
                </footer>
            </div>
        </main>
    );
}