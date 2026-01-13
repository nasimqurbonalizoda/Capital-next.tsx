"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Novosti2() {
  const t = useTranslations("News");

  return (
    <main className="max-w-[1350px] mx-auto px-6 py-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-[#1a202c] uppercase tracking-tighter">
          {t("title")}
        </h1>
        <div className="w-20 h-1.5 bg-orange-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <section className="mb-12">
        <div className="bg-white border border-gray-100 rounded-[45px] overflow-hidden shadow-sm flex flex-col lg:flex-row p-4 lg:p-8 gap-10 items-center">
          <div className="lg:w-1/2 space-y-6 px-4">
            <h2 className="text-3xl font-black text-[#1a202c] leading-tight">
              {t("featured_title")}
            </h2>
            <div className="space-y-4 text-gray-500 text-[15px] leading-relaxed">
              <p>{t("featured_p1")}</p>
              <p>{t("featured_p2")}</p>
            </div>
            <Link href="#" className="inline-flex items-center text-orange-500 font-bold gap-2 hover:gap-4 transition-all">
              {t("more")} <span className="text-xl">→</span>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full h-[400px] relative rounded-[35px] overflow-hidden">
            <Image 
              src="/image 19 (1).png" 
              alt="Main News" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}