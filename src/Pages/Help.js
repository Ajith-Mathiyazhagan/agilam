import React from "react";
import { useEffect } from "react";

const Help = () => {
      useEffect(() => {
          window.scrollTo({ top: 0 });
        }, []);
  // WhatsApp number
  const baseNumber = "918344786851";

  // Message combining all help options
  const message = encodeURIComponent(
    "வணக்கம்! நான் மருத்துவ, கல்வி உதவி  மற்றும்  பேரிடர்  காலங்களில்  மக்களுக்கு  உதவி செய்ய விரும்புகிறேன் " 
  );

  const waLink = `https://wa.me/${baseNumber}?text=${message}`;

  return (
    <div className="container py-3">
      <h3 className="text-center mb-4 text-danger fw-bold">அகிலம் நண்பர்கள் அறக்கட்டளை 🤝</h3>
      <div className="text-center mb-4">
        <p className="mb-2"><strong>மருத்துவ உதவிகள் செய்ய:</strong> மருத்துவ தேவைகளில் எளியோருக்கு உதவுங்கள்.</p>
        <p className="mb-2"><strong>கல்வி உதவ:</strong> மாணவர்களுக்கு கல்வி உதவிகளை வழங்குங்கள்.</p>
        <p className="mb-2"><strong>பேரிடர் காலங்களில் உதவ:</strong> பேரிடர் காலங்களில் ஏழை எளியோருக்கு விரைவாக உதவுங்கள்.</p>
       
      </div>
      <div className="text-center">
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-success btn-lg"
        >
          WhatsApp மூலம் உதவி பெற
        </a>
      </div>
    </div>
  );
};

export default Help;
