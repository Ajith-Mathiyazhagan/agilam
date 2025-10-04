import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const q = query(collection(db, "bloodRequests"), orderBy("date", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRequests(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">இரத்த தேவைகள் பட்டியல்</h2>
      {requests.length === 0 ? (
        <p className="text-center">இது வரை எந்த தகவலும் சேர்க்கப்படவில்லை.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-danger">
              <tr>
                <th>பெயர்</th>
                <th>தொடர்பு எண்</th>
                <th>மின்னஞ்சல்</th>
                <th>இரத்த வகை</th>
                <th>Units</th>
                <th>தேவை நாள்</th>
                <th>நேரம்</th>
                <th>மருத்துவமனை</th>
                <th>மருத்துவமனை முகவரி</th>
                <th>மேலும் குறிப்புகள்</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id}>
                  <td>{req.name}</td>
                  <td>{req.phone}</td>
                  <td>{req.email}</td>
                  <td>{req.bloodGroup}</td>
                  <td>{req.units}</td>
                  <td>{req.date}</td>
                  <td>{req.time}</td>
                  <td>{req.hospital}</td>
                  <td>{req.hospitalAddress}</td>
                  <td>{req.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BloodRequests;
