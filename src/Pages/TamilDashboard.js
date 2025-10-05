import React from "react";
import { useEffect } from "react";
import { FaTint, FaHospital, FaBook, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TamilDashboard = () => {
  const navigate = useNavigate();
   useEffect(() => {
       window.scrollTo({ top: 0 });
     }, []);

  const services = [
    {
      title: "ரத்த தானம் செய்ய",
      icon: <FaTint size={30} />,
      description: "உங்கள் இரத்த தானத்தால் ஏழை எளியோருக்கு உதவுங்கள்.",
      bg: "bg-danger",
      path: "/DonorForm"
    },
    {
      title: "மருத்துவ உதவிகள் செய்ய",
      icon: <FaHospital size={30} />,
      description: "ஏழை எளியோருக்கு மருத்துவ தேவைகளில் எளியோருக்கு உதவுங்கள்.",
      bg: "bg-primary",
      path: "/Help"
    },
    {
      title: "கல்வி உதவ",
      icon: <FaBook size={30} />,
      description: "மாணவர்களுக்கு கல்வி உதவிகளை வழங்குங்கள்.",
      bg: "bg-success",
      path: "/Help"
    },
    {
      title: "பேரிடர் காலங்களில் உதவ",
      icon: <FaExclamationTriangle size={30} />,
      description: "பேரிடர் காலங்களில் ஏழை எளியோருக்கு விரைவாக உதவுங்கள்.",
      bg: "bg-warning",
      path: "/Help"
    },
  ];

  return (
    <div className="container py-3">
      <h2 className="text-center mb-3 text-danger fw-bold">
        எங்களுடன் இணைந்து சமூக சேவையில் பங்கேற்க 🤝
      </h2>
      <div className="row g-4">
        {services.map((service, idx) => (
          <div className="col-md-6 col-lg-3" key={idx}>
            <div className={`card text-white ${service.bg} h-100 shadow`}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <div className="mb-3">{service.icon}</div>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <button 
                  className="btn btn-light btn-sm mt-auto"
                  onClick={() => navigate(service.path)}
                >
                  மேலும்
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamilDashboard;
