import React from "react";
import "../../styles/hero.css";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/photo11.jpeg";
import img2 from "../../assets/photo2.jpeg";
import img3 from "../../assets/photo12.jpeg";
import img4 from "../../assets/photo5.jpeg";
import centerImg from "../../assets/Naveen.png";
import bgVideo from "../../assets/background.mp4";

export default function Hero() {
  const navigate = useNavigate(); // 🔥 navigation hook

  return (
    <div className="hero-container">
      {/* 🔥 VIDEO BACKGROUND */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🔥 OVERLAY */}
      <div className="overlay"></div>

      {/* 🔥 CORNER IMAGES */}
      <div className="bg-wrapper top-left">
        <img src={img1} alt="img1" className="bg-img" />
      </div>

      <div className="bg-wrapper top-right">
        <img src={img2} alt="img2" className="bg-img" />
      </div>

      <div className="bg-wrapper bottom-left">
        <img src={img3} alt="img3" className="bg-img" />
      </div>

      <div className="bg-wrapper bottom-right">
        <img src={img4} alt="img4" className="bg-img" />
      </div>

      {/* 🔥 CENTER */}
      <div className="center-wrapper">
        <img src={centerImg} alt="center" className="center-img" />

        {/* 🔥 NAVIGATE TO ABOUT PAGE */}
        <button className="btn" onClick={() => navigate("/about")}>
          About me
        </button>
      </div>
    </div>
  );
}
