import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center text-md-left">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Agilam </h5>
            <p>
              We are dedicated to serving the community through blood donation drives,
              educational initiatives, and social service projects.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <p>
              <a href="#home" className="text-white text-decoration-none">Home</a>
            </p>
            <p>
              <a href="#about" className="text-white text-decoration-none">About Us</a>
            </p>
            <p>
              <a href="#contact" className="text-white text-decoration-none">Contact</a>
            </p>
            <p>
              <a href="#donate" className="text-white text-decoration-none">Donate</a>
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p><i className="bi bi-geo-alt-fill me-2"></i> Tiruvannamalai, Tamil Nadu</p>
            <p><i className="bi bi-envelope-fill me-2"></i> info@agilam.in</p>
            <p><i className="bi bi-telephone-fill me-2"></i> +91 83447 86851</p>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="">
            <p className="text-center text-md-left mx-auto">
              © {new Date().getFullYear()} Agilam . All rights reserved.
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="/" className="text-white me-4"><i className="bi bi-facebook"></i></a>
              <a href="/" className="text-white me-4"><i className="bi bi-instagram"></i></a>
              <a href="/" className="text-white me-4"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
