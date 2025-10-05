import React, { useState ,useEffect} from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaUser, FaPhone, FaEnvelope, FaTint, FaHospital, FaCalendarAlt, FaClock, FaNotesMedical } from "react-icons/fa";

const Rform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bloodGroup: "",
    units: "",
    date: "",
    time: "",
    hospital: "",
    hospitalAddress: "",
    notes: "",
    consent: false,
  });
   // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0 });
      }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("உறுப்பினர் அனுமதியை ஒப்புக்கொள்ளவும்!");
      return;
    }

    try {
      await addDoc(collection(db, "bloodRequests"), formData);
      alert("உங்கள் தகவல்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        bloodGroup: "",
        units: "",
        date: "",
        time: "",
        hospital: "",
        hospitalAddress: "",
        notes: "",
        consent: false,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("சமர்ப்பிக்கும்போது பிழை ஏற்பட்டது!");
    }
  };

  return (
    <div className="container py-3">
      <h4 className="mb-3 text-center text-danger fw-bold">இரத்த தேவைக்கான படிவம்</h4>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-light">

        {/* Name */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaUser /></span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="பெயர் *" required />
        </div>

        {/* Phone */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaPhone /></span>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="தொடர்பு எண் *" required />
        </div>

        {/* Email */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaEnvelope /></span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="மின்னஞ்சல் (Optional)" />
        </div>

        {/* Blood Group */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaTint /></span>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="form-select" required>
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

        {/* Units */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaTint /></span>
          <input type="number" name="units" value={formData.units} onChange={handleChange} min="1" className="form-control" placeholder="தேவையான Units *" required />
        </div>

        {/* Date & Time */}
        <div className="row mb-3">
          <div className="col input-group">
            <span className="input-group-text bg-danger text-white"><FaCalendarAlt /></span>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col input-group">
            <span className="input-group-text bg-danger text-white"><FaClock /></span>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
          </div>
        </div>

        {/* Hospital */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaHospital /></span>
          <input type="text" name="hospital" value={formData.hospital} onChange={handleChange} className="form-control" placeholder="மருத்துவமனை *" required />
        </div>

        {/* Hospital Address */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaHospital /></span>
          <input type="text" name="hospitalAddress" value={formData.hospitalAddress} onChange={handleChange} className="form-control" placeholder="மருத்துவமனை முகவரி *" required />
        </div>

        {/* Notes */}
        <div className="mb-3 input-group">
          <span className="input-group-text bg-danger text-white"><FaNotesMedical /></span>
          <textarea name="notes" value={formData.notes} onChange={handleChange} className="form-control" rows="3" placeholder="மேலும் குறிப்புகள்"></textarea>
        </div>

        {/* Consent */}
        <div className="mb-3 form-check">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="form-check-input" required />
          <label className="form-check-label">நான் கொடுக்கிய தகவல்கள் உண்மை மற்றும் சரியானவை என்பதை உறுதி செய்கிறேன்</label>
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">சமர்ப்பிக்கவும்</button>
      </form>
    </div>
  );
};

export default Rform;
