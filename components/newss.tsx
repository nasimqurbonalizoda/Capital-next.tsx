"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Rasm = [
    { id: 1, img: "/image 19.png", alt: "odam" },
    { id: 2, img: "/image (6).png", alt: "Mareven" },
    { id: 3, img: "/image (7).png", alt: "Altayskaya Skazka" },
];

export default function News() {
    const t = useTranslations("News");

    return (
        <section className="max-w-[1350px] mx-auto px-6 py-20">
            <h2 className="text-3xl font-black text-black text-center mb-10 uppercase tracking-tighter">
                {t("title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Rasm.map((elem) => (
                    <div key={elem.id} className="bg-white rounded-[35px] overflow-hidden border border-gray-100  hover:shadow-md transition-all flex flex-col">
                        <div className="h-56 relative w-full bg-gray-100">
                            <Image
                                src={elem.img}
                                alt={elem.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="p-8 flex flex-col flex-grow">
                            <h3 className="font-bold text-xl mb-3">News Title</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                                Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                            </p>
                            <button className="text-orange-500 font-bold flex items-center gap-2 hover:gap-4 transition-all w-fit">
                                {t("more")} <span>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors">
                    {t("all_news")} →
                </button>
            </div>
        </section>
    );
}