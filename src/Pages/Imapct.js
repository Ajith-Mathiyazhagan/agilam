import React from "react";
import CountUp from "react-countup";
import { BiDollar, BiUser, BiMap, BiDonateBlood} from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const Impact = () => {
  const stats = [
    { icon: <BiDonateBlood size={40} className="text-danger mb-2" />, number: 5000, label: "இரத்த தானம் மூலம் உதவி பெற்றோர்" },
    { icon: <BiDollar size={40} className="text-success mb-2" />, number: 500000, label: "மொத்த நன்கொடைகள் & செலவு" },
    { icon: <BiUser size={40} className="text-primary mb-2" />, number: 25000, label: "மொத்த பயனாளிகள் " },
    { icon: <BiMap size={40} className="text-warning mb-2" />, number: 38, label: "மொத்த மாவட்டங்கள்" },
   
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className=" bg-light text-dark" ref={ref}>
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-1">
          <h2 className="fw-bold ">எங்களுடைய தாக்கம்</h2>
          <p className=" text-muted fs-6">
            எங்கள் தொடர்ச்சியான முயற்சிகள் சமூகத்தில் நேரடியான மாற்றத்தை உருவாக்குகின்றன
          </p>
        </div>

        {/* Stats Cards */}
        <div className="row text-center g-2 mb-3">
          {stats.map((item, index) => (
            <div key={index} className="col-12 col-md-3">
              <div className="d-flex flex-column align-items-center justify-content-center p-4 h-100 border rounded shadow-sm bg-white">
                <div>{item.icon}</div>
                <h3 className="fw-bold mt-2">
                  {inView ? (
                    <CountUp end={item.number} separator="," duration={2} />
                  ) : (
                    0
                  )}
                </h3>
                <p className="text-muted mb-0">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
