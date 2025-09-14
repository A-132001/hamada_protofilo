export default function About() {
    return (
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">من أنا؟</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* الصورة */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/HamadaPhoto.jpg" 
                  alt="مبيض محارة محترف" 
                  className="w-full h-auto transform hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 md:p-6 rounded-xl shadow-lg hidden md:block">
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-sm md:text-base">سنوات خبرة</div>
              </div>
            </div>
            
            {/* المحتوى */}
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
                محترف في <span className="text-amber-600">أعمال المحارة والتبييض</span>
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              أنا حرفي متخصص في أعمال المحارة والتبييض بأكثر من 10 سنوات من الخبرة في تشطيب الجدران، أعمال المحارة، والديكور. 
              missionي هو تقديم عمل عالي الجودة يعزز جمال أي منزل أو مبنى، مع الالتزام بأعلى معايير الدقة والاتقان.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-end">
                  <span className="ml-3 text-amber-700 font-medium">أعمال محارة داخلية وخارجية</span>
                  <div className="bg-amber-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <span className="ml-3 text-amber-700 font-medium">تشطيب الواجهات والجدران</span>
                  <div className="bg-amber-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <span className="ml-3 text-amber-700 font-medium">أعمال الترميم والتجديد</span>
                  <div className="bg-amber-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <a href="#contact" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg text-white font-semibold text-center transition duration-300 shadow-md">
                  تواصل معي
                </a>
                <a href="#gallery" className="px-6 py-3 bg-white border-2 border-amber-500 hover:bg-amber-50 rounded-lg text-amber-700 font-semibold text-center transition duration-300">
                  شاهد أعمالي
                </a>
              </div>
            </div>
          </div>
          
          {/* إحصائيات للأجهزة الصغيرة */}
          <div className="grid grid-cols-3 gap-4 mt-12 md:hidden">
            <div className="bg-amber-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-amber-700">10+</div>
              <div className="text-sm text-amber-600">سنوات خبرة</div>
            </div>
            <div className="bg-amber-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-amber-700">50+</div>
              <div className="text-sm text-amber-600">مشروع مكتمل</div>
            </div>
            <div className="bg-amber-100 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-amber-700">100%</div>
              <div className="text-sm text-amber-600">عملاء راضون</div>
            </div>
          </div>
        </div>
      </section>
    );
  }