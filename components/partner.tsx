"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
const logos = [
  { id: 1, img: "../Frame 1261154819.png", alt: "Krember" },
  { id: 2, img: "../Frame 1261154823.png", alt: "Mareven" },
  { id: 3, img: "../Frame 1261154822.png", alt: "Altayskaya Skazka" },
  { id: 4, img: "../Frame 1261154821.png", alt: "Shymkentmai" },
  { id: 5, img: "../image 16.png", alt: "Kristall" },
];

export default function Partner() {
  const t = useTranslations("Partners");

  return (
    <section className="bg-[#0f172a] py-20 px-6 rounded-[50px] my-10 max-w-[1140px] mx-auto text-white text-center">
      <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
      <p className="max-w-2xl mx-auto text-gray-400 mb-12">{t("subtitle")}</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((elem) => (
          <div 
            key={elem.id} 
            className="w-48 h-24  rounded-2xl flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300" >
            <img 
              src={elem.img} 
              alt={elem.alt} 
              className="max-w-full max-h-full object-contain" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}