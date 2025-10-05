import React, { useEffect } from 'react';

const Wh = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
      }, []);
  const phoneNumber = "918344786851"; // உங்கள் WhatsApp number
  const message = encodeURIComponent(
    "வணக்கம்! நான் பேரிடர் உதவிகளை விரைவில் பெற விரும்புகிறேன்."
  );

  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="container py-4 ">
      <h4 className='fw-bold text-danger text-center'>அகிலம் நண்பர்கள் அறக்கட்டளை 🤝</h4>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center border p-3 mt-2 shadow rounded" style={{ backgroundColor: "#f8f9fa" }}>
          <h2 className="mb-3">பேரிடர் உதவிகளைப் கேட்க</h2>
          <p className="mb-4">
            சாதாரண பேரிடர் உதவிகளை விரைவில் பெற விரும்பினால், கீழே உள்ள பட்டனை அழுத்தி நேரடியாக WhatsApp மூலம் தொடர்பு கொள்ளவும்.
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
  );
}

export default Wh;
