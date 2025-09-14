"use client"
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg z-50 border-b-2 border-amber-200">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
        {/* الشعار */}
        <div className="flex items-center">
          <div className="bg-amber-500 p-2 rounded-lg mr-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-amber-800">أعمال التشطيبات والبناء</h1>
        </div>

        {/* عناصر التنقل للأجهزة الكبيرة */}
        <ul className="hidden md:flex space-x-6 font-medium text-amber-900">
          <li><a href="#hero" className="hover:text-amber-600 transition duration-300 py-2 border-b-2 border-transparent hover:border-amber-500">الرئيسية</a></li>
          <li><a href="#about" className="hover:text-amber-600 transition duration-300 py-2 border-b-2 border-transparent hover:border-amber-500">من أنا</a></li>
          <li><a href="#services" className="hover:text-amber-600 transition duration-300 py-2 border-b-2 border-transparent hover:border-amber-500">خدماتي</a></li>
          <li><a href="#gallery" className="hover:text-amber-600 transition duration-300 py-2 border-b-2 border-transparent hover:border-amber-500">معرض الأعمال</a></li>
          <li><a href="#contact" className="hover:text-amber-600 transition duration-300 py-2 border-b-2 border-transparent hover:border-amber-500">تواصل معي</a></li>
        </ul>

        {/* زر القائمة للأجهزة الصغيرة */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-amber-800 focus:outline-none p-2 rounded-lg hover:bg-amber-200 transition duration-300"
            aria-label="فتح القائمة"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* قائمة الهاتف (تظهر عند الضغط على الزر) */}
      <div className={`md:hidden bg-amber-100 shadow-inner transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a 
            href="#hero" 
            className="py-2 px-4 text-amber-800 hover:bg-amber-200 rounded-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            الرئيسية
          </a>
          <a 
            href="#about" 
            className="py-2 px-4 text-amber-800 hover:bg-amber-200 rounded-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            من أنا
          </a>
          <a 
            href="#services" 
            className="py-2 px-4 text-amber-800 hover:bg-amber-200 rounded-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            خدماتي
          </a>
          <a 
            href="#gallery" 
            className="py-2 px-4 text-amber-800 hover:bg-amber-200 rounded-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            معرض الأعمال
          </a>
          <a 
            href="#contact" 
            className="py-2 px-4 text-amber-800 hover:bg-amber-200 rounded-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            تواصل معي
          </a>
        </div>
      </div>
    </nav>
  );
}