import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// TN district & constituency data
const TNData = [
  { மாவட்டம்: "திருவள்ளூர்", தொகுதிகள்: ["கும்மிடிப்பொண்டி","பொன்னேரி","திருத்தணி","திருவள்ளூர்","பூணம்","அவடி","மதுராவாயல்","அம்பாட்டூர்","மதவரம்","திருவோட்டியூர்"] },
  { மாவட்டம்: "சென்னை", தொகுதிகள்: ["விரகம்பாக்கம்","சைதாப்பேட்டை","திருவான்மியூர்","மயிலாப்பூர்","சென்னை வடக்கு","சென்னை மத்திய","சென்னை தெற்கு"] },
  // ... மேலும் மாவட்டங்களையும் சேர்க்கலாம்
];

// Blood groups
const BloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const DonorList = () => {
  const [district, setDistrict] = useState("");
  const [constituency, setConstituency] = useState("");
  const [bloodGroup, setBloodGroup] = useState(""); // new state
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const q = collection(db, "donors");
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDonors(data);
      } catch (err) {
        console.error("Error fetching donors:", err);
      }
    };
    fetchDonors();
  }, []);

  const selectedDistrict = TNData.find(d => d.மாவட்டம் === district);

  // Filter donors based on district, constituency, and blood group
  const filteredDonors = donors.filter(d => 
    (!district || d.district === district) &&
    (!constituency || d.constituency === constituency) &&
    (!bloodGroup || d.bloodGroup === bloodGroup)
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Donors List</h2>

      {/* Filter dropdowns */}
      <div className="row mb-3">
        <div className="col">
          <select className="form-select" value={district} onChange={e => { setDistrict(e.target.value); setConstituency(""); }}>
            <option value="">-- மாவட்டம் --</option>
            {TNData.map(d => <option key={d.மாவட்டம்} value={d.மாவட்டம்}>{d.மாவட்டம்}</option>)}
          </select>
        </div>
        <div className="col">
          <select className="form-select" value={constituency} onChange={e => setConstituency(e.target.value)} disabled={!selectedDistrict}>
            <option value="">-- தொகுதி --</option>
            {selectedDistrict?.தொகுதிகள்.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="col">
          <select className="form-select" value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
            <option value="">-- இரத்த வகை --</option>
            {BloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
          </select>
        </div>
      </div>

      {/* Donors Table */}
      {filteredDonors.length === 0 ? (
        <p className="text-center">இத்தொகுதிக்கு பதிவு செய்யப்பட்ட தானிகள் இல்லை.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-danger">
              <tr>
                <th>பெயர்</th>
                <th>தந்தை பெயர்</th>
                <th>வயது</th>
                <th>பிறந்த தேதி</th>
                <th>தொலைபேசி</th>
                <th>இரத்த வகை</th>
                <th>மாவட்டம்</th>
                <th>தொகுதி</th>
                <th>முகவரி</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonors.map(d => (
                <tr key={d.id}>
                  <td>{d.name}</td>
                  <td>{d.fatherName}</td>
                  <td>{d.age}</td>
                  <td>{d.dob}</td>
                  <td>{d.phone}</td>
                  <td>{d.bloodGroup}</td>
                  <td>{d.district}</td>
                  <td>{d.constituency}</td>
                  <td>{d.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DonorList;
