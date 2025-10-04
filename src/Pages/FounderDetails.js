import React from "react";
import annan from "../assets/profile.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FounderHero = () => {
  return (
    <div className="container-fluid py-5">
      <div 
        className="row g-0 shadow-lg" 
        style={{ borderRadius: "20px", overflow: "hidden", minHeight: "400px" }}
      >
       
        {/* Left Side Image */}
        <div className="col-lg-6 col-7 border">
          <img 
            src={annan} 
            alt="Founder" 
            className="img-fluid mx-auto" 
            style={{ objectFit: "cover", width: "250px", height: "100%" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-lg-6  col-5 bg-light justify-content-center">
          <h2 className="text-danger fw-bold mt-3 ">ஹரி அகிலன்</h2>
          <h5 className="text-secondary ">நிறுவனர் & சமூக சேவை ஆர்வலர்</h5>
          <p className="mb-1">
            President, SSLF City And Housing Chennai.  
            ஏழை, எளியோர் மற்றும் சமூகத்தின் நல்வாழ்க்கைக்காக பல்வேறு சேவைகளை நடத்தும் அறக்கட்டளையின் நிறுவனர்.
            சமூக சேவையில் எங்கள் நோக்கம் மக்களுக்கு உதவி செய்யும்.
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-3 mb-1 ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary fs-4 hover-scale">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger fs-4 hover-scale">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-info fs-4 hover-scale">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FounderHero;
