const services = [
    { 
      title: "تبييض وتشطيب الجدران", 
      img: "/service1.jpg",
      description: "خدمات تبييض وتشطيب الجدران الداخلية والخارجية بأعلى معايير الجودة، باستخدام أحدث التقنيات وأجود المواد.",
      icon: "🏗️"
    },
    { 
      title: "تشطيب الأسقف والنواصي", 
      img: "/service2.jpg",
      description: "تشطيب متقن للأسقف والنواصي مع الاهتمام بأدق التفاصيل لتحقيق نتائج مميزة تدوم طويلاً.",
      icon: "🔨"
    },
    { 
      title: "تشطيبات وديكورات جبسية", 
      img: "/service3.jpg",
      description: "تصميم وتنفيذ تشطيبات وديكورات جبسية مبتكرة تضفي لمسة جمالية فريدة على مساحتك.",
      icon: "🎨"
    },
    { 
      title: "ترميم الشقوق والعيوب", 
      img: "/service4.jpg",
      description: "خدمات متخصصة في ترميم الشقوق والعيوب في الجدران والأسقف مع ضمان متانة ودقة الترميم.",
      icon: "🔧"
    },
    { 
      title: "عزل الأسطح والجدران", 
      img: "/service5.jpg",
      description: "خدمات عزل للأسطح والجدران ضد الرطوبة والعوامل الجوية لضمان حماية طويلة الأمد.",
      icon: "🛡️"
    },
    { 
      title: "استشارات فنية مجانية", 
      img: "/service6.jpg",
      description: "تقديم استشارات فنية مجانية لتحديد أفضل الحلول والمواد المناسبة لاحتياجاتك وميزانيتك.",
      icon: "💡"
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">خدماتنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة متكاملة من خدمات المحارة والتبييض بأعلى معايير الجودة والدقة
            </p>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                    <p className="text-white p-4 text-sm">{service.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-3 text-right">{service.title}</h3>
                  <div className="flex justify-end">
                    <a 
                      href="#contact" 
                      className="text-amber-600 hover:text-amber-700 font-medium flex items-center text-sm"
                    >
                      اطلب الخدمة
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300 shadow-md"
            >
              احصل على استشارة مجانية
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }