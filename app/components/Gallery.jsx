const gallery = [
    { 
      src: "/gallery1.jpg", 
      title: "تشطيب واجهة فيلا فاخرة",
      category: "الواجهات الخارجية"
    },
    { 
      src: "/gallery2.jpg", 
      title: "تبييض جدران قاعة استقبال",
      category: "الديكور الداخلي"
    },
    { 
      src: "/gallery3.jpg", 
      title: "تشطيب أسقف جبسية مبتكرة",
      category: "الأسقف المعلقة"
    },
    { 
      src: "/gallery4.jpg", 
      title: "عمل محارة تقليدية",
      category: "الأعمال التقليدية"
    },
    { 
      src: "/gallery5.jpg", 
      title: "ترميم شقق قديمة",
      category: "أعمال الترميم"
    },
    { 
      src: "/gallery6.jpg", 
      title: "تشطيب حمامات عصرية",
      category: "التشطيبات الرطبة"
    },
    { 
      src: "/gallery7.jpg", 
      title: "ديكورات جبسية مبتكرة",
      category: "الديكورات الجبسية"
    },
    { 
      src: "/gallery8.jpg", 
      title: "عزل أسطح ضد الرطوبة",
      category: "أعمال العزل"
    },
    { 
      src: "/gallery9.jpg", 
      title: "تشطيب مباني تجارية",
      category: "المشاريع التجارية"
    }
  ];
  
  export default function Gallery() {
    return (
      <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">معرض أعمالنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اكتشف مجموعة من أحدث مشاريعنا في أعمال المحارة والتبييض والديكور
            </p>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
  
          {/* فلاتر التصنيف */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-amber-600 text-white rounded-full text-sm font-medium transition-all duration-300">
              جميع الأعمال
            </button>
            <button className="px-4 py-2 bg-white text-amber-700 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-50 transition-all duration-300">
              الواجهات الخارجية
            </button>
            <button className="px-4 py-2 bg-white text-amber-700 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-50 transition-all duration-300">
              الديكور الداخلي
            </button>
            <button className="px-4 py-2 bg-white text-amber-700 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-50 transition-all duration-300">
              أعمال الترميم
            </button>
            <button className="px-4 py-2 bg-white text-amber-700 border border-amber-200 rounded-full text-sm font-medium hover:bg-amber-50 transition-all duration-300">
              التشطيبات الرطبة
            </button>
          </div>
  
          {/* معرض الصور */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
                
                {/* Overlay عند التمرير */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    <span className="inline-block bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <div className="flex items-center text-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-sm">عرض التفاصيل</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* زر مشاهدة المزيد */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-amber-700 border-2 border-amber-500 rounded-lg font-semibold hover:bg-amber-50 transition duration-300 shadow-md flex items-center mx-auto">
              مشاهدة المزيد من الأعمال
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }