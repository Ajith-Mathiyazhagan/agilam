import React from "react";
/* import bg from "../assets/bg2.png"; */ // your dark background image

const About = () => {
  const features = [
    {
      icon: "bi-mortarboard-fill",
      color: "text-info",
      title: "கல்வி உதவி",
      desc: "ஏழை மற்றும் திறமையான மாணவர்களுக்கு கல்வி உதவித் திட்டங்கள் வழங்குதல்.",
    },
    {
      icon: "bi-heart-pulse-fill",
      color: "text-danger",
      title: "இரத்த தானம் & சுகாதாரம்",
      desc: "இரத்த தான முகாம்கள், சுகாதார விழிப்புணர்வு மற்றும் நோய் தடுப்பு நடவடிக்கைகள்.",
    },
    /* {
      icon: "bi-person-gear",
      color: "text-warning",
      title: "பெண்கள் முன்னேற்றம்",
      desc: "பெண்களுக்கான திறன் மேம்பாட்டு பயிற்சி மற்றும் சுயதொழில் வாய்ப்புகள்.",
    }, */
    {
      icon: "bi-house-heart-fill",
      color: "text-success",
      title: "மறுவாழ்வு உதவிகள்",
      desc: "நோயால் அல்லது விபத்தால் பாதிக்கப்பட்டவர்களுக்கு மனநிலை மற்றும் பொருளாதார ஆதரவு.",
    },
    {
      icon: "bi-cloud-rain-heavy-fill",
      color: "text-primary",
      title: "பெருந்துயர கால சேவை",
      desc: "Covid, வெள்ளம் போன்ற பேரழிவுகளில் உடனடி உதவி மற்றும் மீட்பு பணிகள்.",
    },
   /*  {
      icon: "bi-people-fill",
      color: "text-secondary",
      title: "சமூக இணைப்பு",
      desc: "மக்களுடன் இணைந்து சமூக நலத்திற்கான மாற்றத்தை உருவாக்குதல்.",
    }, */
   /*  {
      icon: "bi-tree-fill",
      color: "text-success",
      title: "சுற்றுச்சூழல் பாதுகாப்பு",
      desc: "மரநடுகை, பிளாஸ்டிக் ஒழிப்பு மற்றும் இயற்கை பாதுகாப்பு நடவடிக்கைகள்.",
    }, */
  /*   {
      icon: "bi-lightbulb-fill",
      color: "text-warning",
      title: "இளையோர் விழிப்புணர்வு",
      desc: "இளையோருக்கான சமூக பொறுப்பு, கல்வி மற்றும் மனநலம் பற்றிய விழிப்புணர்வு நிகழ்வுகள்.",
    }, */
  ];

  return (
    <section
      className="text-white position-relative "
      id="about-trust"
      style={{
        /* backgroundImage: `url(${bg})`, */
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.73)" }}
      ></div>

      <div className="container py-3 position-relative">
        {/* Heading */}
        <div className="text-center mb-0">
          <h2 className="fw-bold text-center mb-3 heading-underline "><i className="bi bi-heart-fill text-danger me-2"></i>

எங்கள் செயற்பாடுகள்</h2>
          <p className="text-light opacity-80 fs-6">
            2015 முதல் சமூக நலனுக்காக பணியாற்றும் <b className="text-danger">அகிலம் நண்பர்கள் அறக்கட்டளை</b> —  
            கல்வி, சுகாதாரம் மற்றும் மனிதநேயம் ஆகிய துறைகளில் சேவை செய்கிறது.
          </p>
        </div>

        {/* Intro */}
        <div className="row justify-content-center mb-1">
          <div className="col-lg-10 text-center">
            <p className="lead fs-6  ">
              நாங்கள் சமூகத்தில் <b className="text-warning">நம்பிக்கை, கல்வி, ஆரோக்கியம்</b>  மற்றும் <b className="text-warning">சமத்துவம் </b>வளர்ச்சிக்காக
              இணைந்த முயற்சிகளை மேற்கொள்கிறோம். பேரழிவுகள், வறுமை மற்றும் துன்பத்தில் உள்ள
              மக்களுக்கு நம்பிக்கை தருவது எங்கள் கடமை.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="row g-4">
          {features.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <div
                className="card bg-transparent border-light h-100 text-center p-3 shadow-sm"
                style={{ backdropFilter: "blur(5px)" }}
              >
                <div className="mb-3 fs-1">
                  <i className={`bi ${item.icon} ${item.color}`}></i>
                </div>
                <h5 className="fw-bold text-white mb-2">{item.title}</h5>
                <p className="small text-light opacity-75">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="text-center mt-2">
          <p className="small text-light opacity-75 mb-0">
            சமூக நலனில் ஆர்வம் கொண்ட நபர்கள், நிறுவனங்கள் மற்றும் தன்னார்வக் குழுக்களுடன் இணைந்து
            தமிழ்நாட்டின் பல பகுதிகளில் உயர்தரமான சமூக சேவை திட்டங்களை முன்னெடுத்து வருகிறோம்.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
