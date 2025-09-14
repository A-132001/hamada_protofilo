export default function Contact() {
    return (
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">اتصل بنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن جاهزون لخدمتك في أي وقت، تواصل معنا الآن للحصول على استشارة مجانية أو لطلب خدماتنا
            </p>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* معلومات الاتصال */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-right">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-start justify-end">
                  <div className="text-right ml-4">
                    <h4 className="font-semibold text-amber-800">رقم الهاتف</h4>
                    <p className="text-gray-700">+20 123 456 789</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
  
                <div className="flex items-start justify-end">
                  <div className="text-right ml-4">
                    <h4 className="font-semibold text-amber-800">البريد الإلكتروني</h4>
                    <p className="text-gray-700">plasterer@example.com</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
  
                <div className="flex items-start justify-end">
                  <div className="text-right ml-4">
                    <h4 className="font-semibold text-amber-800">الموقع</h4>
                    <p className="text-gray-700">القاهرة، مصر</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
  
                <div className="flex items-start justify-end">
                  <div className="text-right ml-4">
                    <h4 className="font-semibold text-amber-800">ساعات العمل</h4>
                    <p className="text-gray-700">السبت - الخميس: 8 ص - 8 م</p>
                    <p className="text-gray-700">الجمعة: 10 ص - 4 م</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
  
              <div className="mt-8 pt-6 border-t border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-4 text-right">تواصل معنا عبر</h4>
                <div className="flex justify-center space-x-4 space-x-reverse">
                  <a href="https://wa.me/20123456789" target="_blank" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                    </svg>
                  </a>
                  <a href="tel:+20123456789" className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition duration-300 transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                  <a href="mailto:plasterer@example.com" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300 transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
  
            {/* نموذج الاتصال */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-right">أرسل رسالة</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-right text-amber-800 mb-2">الاسم بالكامل</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="أدخل اسمك بالكامل"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-right text-amber-800 mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-right text-amber-800 mb-2">نوع الخدمة المطلوبة</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">اختر الخدمة المطلوبة</option>
                    <option value="plastering">أعمال المحارة والتبييض</option>
                    <option value="ceiling">تشطيب الأسقف والنواصي</option>
                    <option value="gypsum">الديكورات الجبسية</option>
                    <option value="restoration">أعمال الترميم</option>
                    <option value="isolation">أعمال العزل</option>
                    <option value="consultation">استشارة فنية</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-right text-amber-800 mb-2">الرسالة</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="أدخل رسالتك هنا..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }