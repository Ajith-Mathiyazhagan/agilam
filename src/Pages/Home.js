import React from "react";
import bg1 from "../assets/blood1.jpg";
import edu from "../assets/edu.png";
import anna from "../assets/aa.png";
import annan from "../assets/annan.jpg";
import annan2 from "../assets/annan2.jpg";
import bg from "../assets/bg2.png";
import Img from "./Img";
const Home = () => {
  const content = {
    title: "அகிலம் நண்பர்கள் அறக்கட்டளை 🤝",
    desc: "எங்கள் சேவைகள் மூலம் சமூகத்தில் நல்ல மாற்றத்தை உருவாக்க முயல்கிறோம்.",
    cards: [
      {
        name: "குருதிக்கொடை",
        role: "🩸 “உன் ரத்தம் ஓர் உயிரின் புதிய நம்பிக்கை, புன்னகை, உயிரோட்டம்”",
        img: bg1,
      },
      {
        name: "இலவச கல்வி உதவி",
        role: "📚 “கல்வி தான் ஏழையின் வலிமை, சமூகத்தின் முன்னேற்றம்”",
        img: edu,
      },
      {
        name: "சமூக சேவை பணிகள்",
        role: "❤️ “பேரிடர் கால உதவி – வாழ்வை மீட்டெடுக்கும் உயிர்க்கொடி”",
        img: annan,
      },
      {
        name: "மறுவாழ்வு பணிகள் ",
        role: "🌿 “அன்பும் ஆதரவும் தான் – மனநல மறுவாழ்வின் முதல் மருந்து”",
        img: annan2,
      },
    ],
  };

  return (
    <div
      style={{
        
        paddingTop: "20px",
        background: `linear-gradient(135deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.04) 60%), url(${bg}) center/cover no-repeat fixed`,
     
      }}
    >
      {/* Hero Section */}
      <section className="container ">
        <div className="row align-items-center flex-md-row">
            {/* Image Second */}
           <div className="col-12 col-md-6 text-center">
            <img
              src={anna}
              alt="hero"
              className="img-fluid rounded-2 shadow-lg"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div> 
          {/* Text First */}
          <div className="col-12 col-md-6 text-center text-md-start p-3  mb-md-0">
            <h2 className="fw-bold h1  text-danger mb-2">{content.title}</h2>
            <p className="text-dark fw-semibold  mb-4">{content.desc}</p>
            <a href="#join" className="btn btn-danger btn shadow fw-bold mb-3  mx-1">
              குருதித் தேவைக்கு 
            </a>
             <a href="#join" className="btn btn-primary btn shadow fw-bold mb-3 px-3 mx-1">
             குருதி தந்து உதவ
            </a>
          
          </div>
        
        </div>
      </section>
  <div className=" container  mb-2 mx-auto text-center">
              <blockquote className="fw-bold fst-italic  text-danger fs-6 mb-1">
                ✨ “அன்பும் சேவையும் சேர்ந்தால், சமூகத்தில் ஒளி விரிகிறது.”
              </blockquote>
              <blockquote className="fw-bold fst-italic text-success fs-6">
                ✨ “சமூக சேவை என்பது உதவி அல்ல, அது ஒவ்வொருவரின் பொறுப்பு.”
              </blockquote>
              <blockquote className="fw-bold fst-italic text-info fs-6">
                ✨ “அன்பும் கருணையும் இணைந்தால், சமூக மாற்றம் சக்திவாய்ந்ததாகிறது.”
              </blockquote>
              <blockquote className="fw-bold fst-italic text-primary fs-6">
                ✨ “நாம் பகிரும் அன்பு, சமூகத்தில் நம்பிக்கை உருவாக்கும்.”
              </blockquote>
            </div>
  

      {/* Mission & Vision */}
      <section className="container py-2">
        <div className="row g-1">
          <div className="col-md-6 mb-2 mt-md-0">
            <div className="p-3 border-0 rounded-4 shadow-sm bg-white h-100 text-center">
              <h4 className="text-danger mb-2 fw-bold">🎯 எங்கள் நோக்கம்</h4>
              <p className="text-muted mb-0">அனைவருக்கும் சமத்துவமான சமூக சேவை</p>
            </div>
          </div>
          <div className="col-md-6 mb-2 mt-md-0">
            <div className="p-3 border-0 rounded-4 shadow-sm bg-white h-100 text-center">
              <h4 className="text-success mb-2 fw-bold">🌱 எங்கள் பார்வை</h4>
              <p className="text-muted mb-0">கல்வி, ஆரோக்கியம், சமூக முன்னேற்றம்</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container text-center py-1">
        <p className="fs-6 text-primary mb-0">
          🌿 “ஒரு சிறிய சேவை கூட, சமூகத்தில் பெரிய மாற்றத்தை உருவாக்கும்.”
        </p>
      </section>
          {/* Cards Section */}
       <section className="container py-3">
        <div className="row g-4">
          {content.cards.map((card, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-lg rounded-4 hover-shadow transition-all">
                {card.img && (
                  <img
                    src={card.img}
                    className="card-img-top rounded-top"
                    alt={card.name}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{card.name}</h5>
                  <p className="card-text small fw-bold text-muted">{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> 
      <Img/>
    </div>
  );
};

export default Home;