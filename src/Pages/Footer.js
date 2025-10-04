import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 ">
      <div className="container text-center text-md-left">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto ">
            <h5 className=" mb-2 font-weight-bold"><b>அகிலம் நண்பர்கள் அறக்கட்டளை</b></h5>
            <p>
              எங்கள் அறக்கட்டளை இரத்த தான முகாம்கள், கல்வி முயற்சிகள் மற்றும் சமூக சேவை திட்டங்கள் மூலம்
              சமூக நலனில் பணியாற்றுவதற்கு அர்ப்பணிக்கப்பட்டது.
            </p>
            
          </div>

          {/* Links Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto ">
            <h5 className="text-uppercase mb-2 font-weight-bold">விரைவு இணைப்புகள்</h5>
            <p className="mb-1">
              <a href="#home" className="text-white text-decoration-none">முகப்பு</a>
            </p>
            <p className="mb-1">
              <a href="#about" className="text-white text-decoration-none">எங்களைப் பற்றி</a>
            </p>
            <p className="mb-1">
              <a href="#contact" className="text-white text-decoration-none">தொடர்பு</a>
            </p>
            <p>
              <a href="#donate" className="text-white text-decoration-none">நன்கொடை செய்யவும்</a>
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto ">
            <h5 className="text-uppercase mb-1 font-weight-bold">தொடர்பு</h5>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i> திருவண்ணாமலை, தமிழ்நாடு</p>
            <p className="mb-1"><i className="bi bi-envelope-fill me-2"></i> info@agilam.in</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i> +91 83447 86851</p>
          </div>

        </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="/" className="text-primary me-4"><i className="bi bi-facebook"></i></a>
              <a href="/" className="text-danger me-4"><i className="bi bi-instagram"></i></a>
              <a href="/" className="text-success me-4"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="">
            <p className="text-center text-md-left mx-auto small ">
              © {new Date().getFullYear()} அகிலம் நண்பர்கள் அறக்கட்டளை
              <p className="mt-2 small text-">
              Developed by <a className="text-white" href="https://ajnex.in"><b>AjNex Digital Solution </b></a>. All rights reserved.
            </p>
            </p>
          </div>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
