"use client"
import { useState } from 'react';

const companies = [
    {
      name: "تمليك المتخصصة",
      logo: "/companys/تمليك.jpg",
      facebook: "#",
      drive: "#",
      workPhotos: ["/استشاره.jpeg", "/ديكور.jfif", "/شقوق.png"]
    },
    {
      name: "جسر",
      logo: "/companys/جسر.jpg",
      facebook: "#",
      drive: "#",
      workPhotos: ["/لياسه.jpg", "/واجهه.webp", "/استشاره.jpeg"]
    },
    {
      name: "درة العقارية",
      logo: "/companys/درة.jpg",
      facebook: "#",
      drive: "#",
      workPhotos: ["/ديكور.jfif", "/شقوق.png", "/لياسه.jpg"]
    },
    {
      name: "مساكن التمليك العقارية",
      logo: "/companys/مساكن.jpg",
      facebook: "#",
      drive: "#",
      workPhotos: ["/واجهه.webp", "/استشاره.jpeg", "/ديكور.jfif"]
    }
  ];

  export default function Gallery() {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (company) => {
      setSelectedCompany(company);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedCompany(null);
    };
    return (
      <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4"> اخر المشاريع</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               اكتشف مجموعة من أحدث مشاريعنا في أعمال الياسه والديكور مع اكبر الشركات الرائدة
            </p>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
  
          {/* معرض الشركات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-white p-4"
                onClick={() => openModal(company)}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-center text-lg font-semibold text-amber-800 mb-2">مشروع مع شركة  - {company.name} الرائدة </h3>
                <div className="flex justify-center">
                  <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for work photos */}
          {isModalOpen && selectedCompany && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-amber-800">{selectedCompany.name} - أعمالنا</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {selectedCompany.workPhotos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Work ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                  ))}
                </div>
                <div className="text-center">
                  <a href={selectedCompany.drive} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition duration-300">
                    عرض المزيد على Google Drive
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
