"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"; 

export default function Header() {
  const t = useTranslations('Navbar');
  const { locale } = useParams();

  return (
    <header className="w-full bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-[1350px] mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
             <img src="../image 9.png" alt="Logo" className="text-[10px] text-gray-400"/>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {['about', 'map', 'infra', 'partners', 'news', 'jobs'].map((item) => (
            <Link 
              key={item}
              href={`/${locale}/${item}`} 
              className="text-[13px] font-bold text-gray-800 dark:text-gray-200 hover:text-orange-500 transition uppercase"
            >
              {t(item)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="scale-90 border dark:border-gray-700 rounded-xl">
             <AnimatedThemeToggler />
          </div>

          <div className="flex bg-gray-100 dark:bg-slate-800 rounded-full p-1">
            {['tj', 'ru', 'en'].map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                  locale === l 
                    ? 'bg-white dark:bg-slate-700 text-orange-500 shadow-sm' 
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              >
                {l}
              </Link>
            ))}
          </div>

          <button className="lg:hidden flex flex-col gap-1.5">
            <div className="w-6 h-[2px] bg-orange-400"></div>
            <div className="w-6 h-[2px] bg-orange-400"></div>
            <div className="w-6 h-[2px] bg-orange-400"></div>
          </button>
        </div>

      </div>
    </header>
  );
}