"use client";

import React from 'react';
import Link from 'next/link';
import { Home, MoveLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6 overflow-hidden relative">
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-3xl w-full text-center relative z-10">
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-orange-500 text-white rounded-2xl font-bold text-lg hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300  "
          >
            <Home size={22} />
            Ба саҳифаи асосӣ
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
          >
            <MoveLeft size={22} />
            Ба ақиб
          </button>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-50">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">
            Error Code: 0x404_NOT_FOUND
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;