export default function Hero() {
    return (
      <section id="hero" className="h-screen flex items-center justify-start bg-cover bg-center pt-16" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')" }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl bg-gradient-to-r from-amber-800/90 to-amber-900/90 p-8 md:p-12 rounded-2xl shadow-2xl border-l-4 border-amber-400">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-right">
              <span className="block mb-2">أعمال التشطيبات</span>
              <span className="text-amber-300">بجودة فائقة ودقة متناهية</span>
            </h1>
            
            <p className="mb-8 text-lg md:text-xl text-amber-100 text-right leading-relaxed">
              خبرة سنوات في تشطيب الواجهات والديكورات الداخلية بأحدث التقنيات وأجود المواد. جودة لا تضاهى ودقة في التنفيذ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a href="#contact" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 rounded-xl text-white font-semibold text-lg shadow-lg transition duration-300 transform hover:scale-105 text-center">
                تواصل معي
              </a>
              <a href="#gallery" className="px-8 py-4 bg-transparent border-2 border-amber-400 hover:bg-amber-400/20 rounded-xl text-white font-semibold text-lg transition duration-300 text-center">
                اعرض أعمالي
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-end gap-6 text-amber-200">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>أعلى جودة للمواد</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>أسعار مناسبة</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>التزام بمواعيد التسليم</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* عنصر للتمرير للأسفل */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white text-center">
            <span className="block text-sm mb-2">اكتشف المزيد</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
    );
  }