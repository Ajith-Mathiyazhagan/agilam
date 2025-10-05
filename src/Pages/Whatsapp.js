import React from 'react'
import { useEffect } from 'react'

const Whatsapp = () => {
     useEffect(() => {
         window.scrollTo({ top: 0 });
       }, []);
  
     const phoneNumber = "918344786851"; // உங்கள் WhatsApp number
  const message = encodeURIComponent(
    "வணக்கம்! நான் 'எழை கல்வி உதவி பேர்' சேவைகள் பற்றி தகவல் பெற விரும்புகிறேன்."
  );

  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="container py-4">
      <h3 className='fw-bold text-danger text-center'>அகிலம் நண்பர்கள் அறக்கட்டளை 🤝</h3>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center border p-3 mt-2 shadow rounded" style={{ backgroundColor: "#f8f9fa" }}>
          <h2 className="mb-3">ஏழைக்கல்வி உதவி பெற </h2>
          <p className="mb-4">
            உங்கள் கல்வி மற்றும் உதவி தொடர்பான கேள்விகளை நேரடியாக WhatsApp மூலம் அனுப்ப விரும்பினால், கீழே உள்ள பட்டனை அழுத்தவும்.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg"
          >
            WhatsApp-க்கு செல்
          </a>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp
