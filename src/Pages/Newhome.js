import React from "react";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";


const Newhome = () => {
  return (
    <div className="container bg-white my-5 text-center">
      <div className="row mb-4">
        <div className="col-3 col-md-3 col-lg-2">
          <p className="fw-bold mx-auto text-center">உறவாய் இணைவோம்!</p>
          <img
            src={na}
            alt="Anna"
            className="img-fluid br w-75"
          />
        </div>

        <div className="col-1 col-md-1 col-lg-2"></div>

        <div className="col-4 col-md-4 col-lg-4">
          <p className="fw-bold h2 mx-auto text-center">அ</p>
          <img
            src={logo}
            alt="Logo"
            className="img-fluid logo-img"
          />
        </div>

        <div className="col-1 col-md-1 col-lg-2"></div>

        <div className="col-3 col-md-3 mb-6 col-lg-2 mx-auto">
          <p className="fw-bold mx-auto text-center">உலகையே காப்போம்!</p>
          <img
            src={mt}
            alt="Anna"
            className="img-fluid br w-75"
          />
        </div>
      </div>
    </div>
  );
};

export default Newhome;
