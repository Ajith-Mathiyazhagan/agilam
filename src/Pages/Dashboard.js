import React from "react";
import { useEffect } from "react";
import { FaTint, FaUserFriends, FaBook, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
 
     useEffect(() => {
         window.scrollTo({ top: 0 });
       }, []);
  const services = [
    {
      title: "ரத்த தானம் பெற",
      icon: <FaTint size={30} />,
      description: "உங்களுக்கு தேவையான இரத்தத்தை விரைவாக பெறுங்கள்.",
      bg: "bg-danger",
      path: "/Rform" // route to navigate
    },
    {
      title: "அருகில் உள்ள ரத்ததானம் செய்வோரை கண்டறிய",
      icon: <FaUserFriends size={30} />,
      description: "உங்கள் அருகிலுள்ள ரத்ததானம் செய்வோரை எளிதில் கண்டறியுங்கள்.",
      bg: "bg-warning",
      path: "/DonorList" // route to navigate
    },
    {
      title: "கல்வி உதவி பெற",
      icon: <FaBook size={30} />,
      description: "ஏழை எளிய  மாணவர்களுக்கு கல்வி உதவிகளைப் பெறவும்.",
      bg: "bg-success",
      path: "/whatsapp" // route to navigate
    },
    {
      title: "பேரிடர் உதவிகளைப் கேட்க",
      icon: <FaExclamationTriangle size={30} />,
      description: "சாதாரண பேரிடர் உதவிகளை விரைவில் பெறுங்கள்.",
      bg: "bg-primary",
      path: "/Wh"
    },
  ];

  return (
    <div className="container py-3">
      <h2 className="text-center mb-3 text-danger fw-bold">அகிலம் நண்பர்கள் அறக்கட்டளை 🤝</h2>
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

export default Dashboard;
