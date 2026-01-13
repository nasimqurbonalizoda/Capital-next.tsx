"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('Navbar');

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-12 pb-6 px-4 md:px-10 mt-auto">
      <div className="max-w-[1350px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10">
          
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <img src="../image 9.png" alt="" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter text-[#1a1a1a]">
              Капитал-Т
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[14px] font-semibold text-gray-700">
            <Link href={`/${locale}/about`} className="hover:text-orange-500 transition">{t('about') || 'О нас'}</Link>
            <Link href={`/${locale}/map`} className="hover:text-orange-500 transition">{t('map') || 'Карта покрытия'}</Link>
            <Link href={`/${locale}/infra`} className="hover:text-orange-500 transition">{t('infra') || 'Инфраструктура'}</Link>
            <Link href={`/${locale}/partners`} className="hover:text-orange-500 transition">{t('partners') || 'Партнеры'}</Link>
            <Link href={`/${locale}/news`} className="hover:text-orange-500 transition">{t('news')}</Link>
            <Link href={`/${locale}/jobs`} className="hover:text-orange-500 transition">{t('jobs') || 'Вакансии'}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <img src="../logos_telegram.png" alt="" className="transition transform hover:scale-110 "/>
            <img src="../logos_whatsapp-icon.png" alt="whastap" className="transition transform hover:scale-110"/>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-[12px] text-gray-400 font-medium tracking-wide">
             © {new Date().getFullYear()} KAPITAL-T | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}