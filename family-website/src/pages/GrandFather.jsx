import React from "react";
import { motion } from "framer-motion";
import bgVideo from "../assets/background.mp4";
import profileImg from "../assets/grandfather.jpeg"; // 👈 apni image path daalo
import "../styles/grandfather.css"; // 👈 apni css file daalo

export default function GrandFather() {
  return (
    <div className="hero-container">
      {/* 🔥 VIDEO BACKGROUND */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="page">
        {/* 👇 Animated Image */}
        <motion.img
          src={profileImg}
          alt="Grand Father"
          className="profile-img"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* 👇 Animated Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Mr.Akshya Kumar Tiwari
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Ex. Mukhiya of Village
        </motion.h3>
      </div>
    </div>
  );
}
