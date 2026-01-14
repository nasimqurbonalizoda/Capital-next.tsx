"use client";

import { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation"; 

const CITIES = [
  { id: 'Dushanbe', names: { tg: 'Душанбе', ru: 'Душанбе', en: 'Dushanbe' }, count: 8 },
  { id: 'Khujand', names: { tg: 'Хуҷанд', ru: 'Худжанд', en: 'Khujand' }, count: 14 },
  { id: 'Bokhtar', names: { tg: 'Бохтар', ru: 'Бохтар', en: 'Bokhtar' }, count: 2 },
];

const CATEGORIES = [
  { id: 'it', names: { tg: 'IT мутахассис', ru: 'IT специалист', en: 'IT Specialist' }, count: 8 },
  { id: 'sales', names: { tg: 'Фурӯш', ru: 'Продажи', en: 'Sales' }, count: 2 },
  { id: 'accounting', names: { tg: 'Муҳосибӣ', ru: 'Бухгалтерия', en: 'Accounting' }, count: 3 },
];

const VACANCIES = [
  { 
    id: 1, 
    city: "Dushanbe", 
    category: "sales", 
    experience: { tg: "аз 1 сол", ru: "от 1 года", en: "from 1 year" },
    titles: { tg: "Намояндаи тиҷоратӣ", ru: "Торговый представитель", en: "Sales Representative" },
    descs: { tg: "Назорати шӯъбаи фурӯш...", ru: "Супервайзер отдела продаж...", en: "Sales department supervision..." }
  },
  { 
    id: 2, 
    city: "Khujand", 
    category: "it", 
    experience: { tg: "аз 2 сол", ru: "от 2 лет", en: "from 2 years" },
    titles: { tg: "Мутахассиси IT", ru: "IT Специалист", en: "IT Specialist" },
    descs: { tg: "Тайёр кардани системаҳои дохилӣ...", ru: "Разработка внутренних систем...", en: "Internal systems development..." }
  }
];

export default function VacancyPage() {
  const t = useTranslations("Vacansiya");
  const params = useParams(); 
  const locale = (params?.locale as 'tg' | 'ru' | 'en') || 'ru';

  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (id: string, type: 'city' | 'cat') => {
    const setter = type === 'city' ? setSelectedCities : setSelectedCats;
    const current = type === 'city' ? selectedCities : selectedCats;
    setter(current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  };

  const filteredVacancies = useMemo(() => {
    return VACANCIES.filter(elem => {
      const matchCity = selectedCities.length === 0 || selectedCities.includes(elem.city);
      const matchCat = selectedCats.length === 0 || selectedCats.includes(elem.category);
      // @ts-ignore
      const title = elem.titles[locale] || elem.titles['ru'];
      const matchSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchCat && matchSearch;
    });
  }, [selectedCities, selectedCats, searchQuery, locale]);

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 flex flex-col md:flex-row gap-8 font-sans text-[#2d2d2d]">
      <aside className="w-full md:w-72 space-y-8">
        <section>
          <h3 className="font-bold text-xl mb-4">{t('regions')}</h3>
          <div className="bg-gray-50 rounded-3xl p-5 space-y-4 border border-gray-100">
            {CITIES.map(city => (
              <label key={city.id} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input type="checkbox" onChange={() => toggleFilter(city.id, 'city')} className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 transition-all" />
                  {/* @ts-ignore */}
                  <span className="group-hover:text-orange-600 font-medium">{city.names[locale] || city.names['ru']}</span>
                </div>
                <span className="text-gray-400 text-sm">{city.count}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-bold text-xl mb-4">{t('categories')}</h3>
          <div className="bg-gray-50 rounded-3xl p-5 space-y-4 border border-gray-100">
            {CATEGORIES.map(cat => (
              <label key={cat.id} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input type="checkbox" onChange={() => toggleFilter(cat.id, 'cat')} className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 transition-all" />
                  {/* @ts-ignore */}
                  <span className="group-hover:text-orange-600 font-medium">{cat.names[locale] || cat.names['ru']}</span>
                </div>
                <span className="text-gray-400 text-sm">{cat.count}</span>
              </label>
            ))}
          </div>
        </section>
      </aside>

      <main className="flex-1 space-y-6">
        <h1 className="text-4xl font-black mb-8 text-slate-900">{t('title')}</h1>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-6 pr-4 py-4 rounded-2xl bg-[#f5f5f7] border border-transparent outline-none focus:border-orange-200 focus:bg-white transition-all "
            />
          </div>
          <button className="bg-orange-500 p-4 rounded-2xl text-white hover:bg-orange-600  0 transition-all active:scale-95">
            <Search size={24} />
          </button>
        </div>

        <div className="space-y-6">
          {filteredVacancies.length > 0 ? (
            filteredVacancies.map(elem => (
              <div key={elem.id} className="bg-white border border-gray-100 rounded-[2.5rem] p-8 hover:shadow-2xl hover:shadow-gray-100 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-slate-900 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-xl">
                    {/* @ts-ignore */}
                    {t('experience')} {elem.experience[locale] || elem.experience['ru']}
                  </span>
                  <span className="text-gray-400 flex items-center gap-2 text-sm font-semibold">
                    <MapPin size={18} className="text-orange-400" /> 
                    {/* @ts-ignore */}
                    {CITIES.find(c => c.id === elem.city)?.names[locale]}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-orange-500 transition-colors">
                  {/* @ts-ignore */}
                  {elem.titles[locale] || elem.titles['ru']}
                </h2>
                <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed text-lg">
                  {/* @ts-ignore */}
                  {elem.descs[locale] || elem.descs['ru']}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-600  0 transition-all hover:-translate-y-1">
                    {t('more')}
                  </button>
                  <button className="border-2 border-slate-100 text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:-translate-y-1">
                    {t('apply')}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-bold text-xl italic">{t('notFound')}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}