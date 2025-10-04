import React, { useState,useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaUser, FaIdBadge, FaCalendarAlt, FaPhone, FaTint, FaMapMarkerAlt } from "react-icons/fa";

const TNData = [
  { மாவட்டம்: "திருவள்ளூர்", தொகுதிகள்: ["கும்மிடிப்பொண்டி","பொன்னேரி","திருத்தணி","திருவள்ளூர்","பூணம்","அவடி","மதுராவாயல்","அம்பாட்டூர்","மதவரம்","திருவோட்டியூர்"] },
  { மாவட்டம்: "சென்னை", தொகுதிகள்: ["விரகம்பாக்கம்","சைதாப்பேட்டை","திருவான்மியூர்","மயிலாப்பூர்","சென்னை வடக்கு","சென்னை மத்திய","சென்னை தெற்கு"] },
];

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: "", fatherName: "", age: "", dob: "", phone: "", bloodGroup: "",
    district: "", constituency: "", address: ""
  });


useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "donors"), formData);
      alert("விவரங்கள் வெற்றிகரமாக சேமிக்கப்பட்டது!");
      setFormData({ name:"", fatherName:"", age:"", dob:"", phone:"", bloodGroup:"", district:"", constituency:"", address:"" });
    } catch (err) {
      console.error("Error adding donor:", err);
    }
  };

  const selectedDistrict = TNData.find(d => d.மாவட்டம் === formData.district);

  return (
    <div className="container py-3">
      <h3 className="mb-3 text-center text-danger fw-bold"> இரத்ததானம் செய்வோர் பதிவு </h3>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-light">

        {/* Name */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaUser /></span>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="பெயர் *" required />
        </div>

        {/* Father Name */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaIdBadge /></span>
          <input type="text" className="form-control" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="தந்தை பெயர் *" required />
        </div>

        {/* Age */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaIdBadge /></span>
          <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} min="18" max="65" placeholder="வயது *" required />
        </div>

        {/* DOB */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaCalendarAlt /></span>
          <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        {/* Phone */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaPhone /></span>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="தொலைபேசி எண் *" required />
        </div>

        {/* Blood Group */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaTint /></span>
          <select className="form-select" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
            <option value="">-- இரத்த வகை --</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* District */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaMapMarkerAlt /></span>
          <select className="form-select" name="district" value={formData.district} onChange={handleChange} required>
            <option value="">-- மாவட்டம் --</option>
            {TNData.map(d => <option key={d.மாவட்டம்} value={d.மாவட்டம்}>{d.மாவட்டம்}</option>)}
          </select>
        </div>

        {/* Constituency */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaMapMarkerAlt /></span>
          <select className="form-select" name="constituency" value={formData.constituency} onChange={handleChange} disabled={!selectedDistrict} required>
            <option value="">-- தொகுதி --</option>
            {selectedDistrict?.தொகுதிகள்.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Address */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaMapMarkerAlt /></span>
          <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="முகவரி *" required></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">சமர்ப்பிக்கவும்</button>
      </form>
    </div>
  );
};

export default DonorForm;
