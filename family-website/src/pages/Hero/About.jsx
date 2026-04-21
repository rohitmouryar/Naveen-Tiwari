import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/about.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-card">
        <h1 className="title">Naveen Kumar Tiwari</h1>

        <div className="info">
          <p>
            <strong>Qualification:</strong> B.Tech (CSE)
          </p>
          <p>
            <strong>Branch:</strong> Computer Science and Engineering
          </p>
          <p>
            <strong>Role:</strong> Trainee Associate
          </p>
          <p>
            <strong>DOB:</strong> 16 Nov 2003
          </p>
          <p>
            <strong>Time:</strong> 10:30 AM
          </p>
          <p>
            <strong>Birth Place:</strong> Siwan, Bihar
          </p>
          <p>
            <strong>Gotra:</strong> Shreemukh Sandilya
          </p>

          {/* ✅ Improved Address Section */}
          <div className="address-box">
            <strong>Address:</strong>
            <p>📍 Vill + Post: Shahpur</p>
            <p>🏢 Police Station: Nawtan</p>
            <p>🌍 District: Siwan, Bihar - 841243</p>
          </div>

          <p>
            <strong>Phone:</strong> 📞 7618541625
          </p>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
